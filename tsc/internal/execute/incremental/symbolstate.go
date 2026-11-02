package incremental

import (
	"context"
	"os"
	"slices"
	"strings"

	"github.com/microsoft/TypeScript/tsc/internal/ast"
	"github.com/microsoft/TypeScript/tsc/internal/json"
	"github.com/microsoft/TypeScript/tsc/internal/module"
	"github.com/microsoft/TypeScript/tsc/internal/tspath"
)

const SymbolGrainFormatVersion = 5

// This research option never changes the manifest's default compiler behavior.
//
//nolint:forbidigo // The walk switch is explicitly a process-level option, not a program host input.
func SymbolGrainEnabled() bool { return os.Getenv("TS_SYMBOL_GRAIN") == "1" }

func symbolGrainFormat() int {
	if SymbolGrainEnabled() {
		return SymbolGrainFormatVersion
	}
	return 0
}

func (p *Program) symbolResolver(file *ast.SourceFile, declarationName tspath.RootedFilePath) SymbolResolver {
	p.symbolIndexOnce.Do(func() { p.symbolIndexHandler = &affectedFilesHandler{program: p} })
	index := p.symbolIndexHandler.getDeclarationReferenceIndex()
	program := p.program
	resolver := module.NewResolver(module.ResolverOptions{Host: declarationResolutionHost{program.Host(), program.BaseDirectory()}, CompilerOptions: program.Options()})
	return func(name string) []string {
		refs := map[string]bool{}
		add := func(f *ast.SourceFile) {
			if f != nil {
				refs[string(f.PathKey())] = true
			}
		}
		addPath := func(path tspath.RootedFilePath) {
			if path == "" {
				return
			}
			if redirect := program.GetParseFileRedirect(path); redirect != "" {
				path = redirect
			}
			if f := program.GetSourceFile(path); f != nil {
				add(f)
				return
			}
			for _, f := range index.outputs[program.PathKeyForFileName(path)] {
				add(f)
			}
		}
		mode := program.GetDefaultResolutionModeForFile(file)
		resolved := program.GetResolvedModule(file, name, mode)
		if !resolved.IsResolved() {
			resolved, _, _ = resolver.ResolveModuleName(name, file.FileName(), mode, nil)
		}
		if !resolved.IsResolved() && declarationName != "" {
			resolved, _, _ = resolver.ResolveModuleName(name, declarationName, mode, nil)
		}
		if resolved.IsResolved() {
			if target := program.GetSourceFileForResolvedModule(resolved); target != nil {
				add(target)
			} else {
				addPath(resolved.ResolvedFileName)
			}
		}
		for pattern, files := range index.ambient {
			before, after, wild := strings.Cut(pattern, "*")
			if name == pattern || wild && strings.HasPrefix(name, before) && strings.HasSuffix(name, after) {
				for _, f := range files {
					add(f)
				}
			}
		}
		if len(refs) == 0 {
			addPath(file.FileName().Directory().ResolveFile(name))
			if declarationName != "" {
				addPath(declarationName.Directory().ResolveFile(name))
			}
			add(index.libraries["lib."+strings.ToLower(name)+".d.ts"])
			resolvedType, _ := resolver.ResolveTypeReferenceDirective(name, file.FileName(), mode, nil)
			if resolvedType != nil && resolvedType.IsResolved() {
				addPath(resolvedType.ResolvedFileName)
			}
		}
		result := make([]string, 0, len(refs))
		for ref := range refs {
			result = append(result, ref)
		}
		slices.Sort(result)
		return result
	}
}

func (p *Program) recordSymbolMetadata(file *ast.SourceFile, declarationName tspath.RootedFilePath, text string) {
	if !SymbolGrainEnabled() || file == nil || !p.snapshot.canUseIncrementalState() {
		return
	}
	metadata := ParseDeclarationSymbolMetadata(text, string(file.PathKey()), declarationName.AsString(), p.symbolResolver(file, declarationName))
	p.snapshot.symbolMetadata.Store(file.PathKey(), &metadata)
}

func (p *Program) ensureSymbolMetadata(ctx context.Context) {
	if !SymbolGrainEnabled() || !p.snapshot.canUseIncrementalState() {
		return
	}
	h := &affectedFilesHandler{ctx: ctx, program: p}
	for _, file := range p.program.SourceFiles() {
		if ctx.Err() != nil {
			return
		}
		if _, ok := p.snapshot.symbolMetadata.Load(file.PathKey()); ok {
			continue
		}
		if file.IsDeclarationFile {
			p.recordSymbolMetadata(file, file.FileName(), file.Text())
		} else if ast.IsJsonSourceFile(file) {
			p.snapshot.symbolMetadata.Store(file.PathKey(), &SymbolMetadata{Signatures: map[string]string{"default": ComputeHash(file.Text(), false)}})
		} else {
			h.updateShapeSignature(file, false)
			if _, ok := p.snapshot.symbolMetadata.Load(file.PathKey()); !ok {
				// An imported implementation source (e.g. workers-types/index.ts)
				// may be loaded but ineligible for declaration emission. Retain
				// its syntactic export names; reaching it uses the legacy walk.
				p.recordSymbolMetadata(file, file.FileName(), file.Text())
				if value, ok := p.snapshot.symbolMetadata.Load(file.PathKey()); ok {
					value.Opaque = true
				}
			}
		}
	}
	// Signature-only metadata generation must also establish the corresponding
	// file signature. Leaving the source version here makes a later whitespace
	// edit look like a public-shape change (notably on const-enum fallback).
	h.updatedSignatures.Range(func(path tspath.PathKey, update *updatedSignature) bool {
		if info, ok := p.snapshot.fileInfos.Load(path); ok {
			info.signature = update.signature
		}
		return true
	})
}

// Rewrite every path in a metadata value without mutating shared snapshots.
func mapSymbolMetadataPaths(value *SymbolMetadata, mapPath func(string) string) *SymbolMetadata {
	data, _ := json.Marshal(value)
	var result SymbolMetadata
	_ = json.Unmarshal(data, &result)
	for _, group := range []map[string][]SymbolReference{result.Dependencies, result.Aliases} {
		for name, refs := range group {
			for i := range refs {
				refs[i].File = mapPath(refs[i].File)
			}
			group[name] = refs
		}
	}
	for i, path := range result.Stars {
		result.Stars[i] = mapPath(path)
	}
	for i, path := range result.Augmentations {
		result.Augmentations[i] = mapPath(path)
	}
	augmentations := map[string][]string{}
	for path, names := range result.AugmentationExports {
		augmentations[mapPath(path)] = names
	}
	result.AugmentationExports = augmentations
	return &result
}

func (p *Program) SymbolWalkStatistics() (int, int) {
	return p.symbolRechecked.Size(), p.symbolMeaningChanged
}

//nolint:forbidigo // The optional measurement trace targets the process filesystem, not the program's virtual host.
func (p *Program) recordSymbolRechecks(files []*ast.SourceFile) {
	for _, file := range files {
		if !p.program.SkipTypeChecking(file, false) {
			p.symbolRechecked.Add(file.PathKey())
		}
	}
	if destination := os.Getenv("TS_SYMBOL_GRAIN_TRACE"); destination != "" {
		names := p.symbolRechecked.ToSlice()
		slices.Sort(names)
		record := struct {
			Program        string           `json:"program"`
			Rechecked      []tspath.PathKey `json:"rechecked"`
			MeaningChanged int              `json:"exportsMeaningChanged"`
			Fallback       string           `json:"fallback,omitempty"`
		}{p.Options().ConfigFilePath.AsString(), names, p.symbolMeaningChanged, p.symbolFallback}
		data, _ := json.Marshal(record)
		if stream, err := os.OpenFile(destination, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0o600); err == nil {
			_, _ = stream.Write(append(data, '\n'))
			_ = stream.Close()
		}
	}
}

// Force cache incompatibility in both directions when toggling the option.
func (s *snapshot) copySymbolMetadata(old *snapshot) {
	if old == nil || !SymbolGrainEnabled() {
		return
	}
	old.symbolMetadata.Range(func(path tspath.PathKey, value *SymbolMetadata) bool {
		s.symbolMetadata.Store(path, value)
		return true
	})
}

package incremental

import (
	"context"
	"maps"
	"slices"

	"github.com/microsoft/TypeScript/tsc/internal/ast"
	"github.com/microsoft/TypeScript/tsc/internal/checker"
	"github.com/microsoft/TypeScript/tsc/internal/tspath"
)

type symbolExportState struct {
	names   map[string]map[string]bool
	aliases map[string]map[string][]SymbolReference
}

func resolveSymbolExports(metadata map[string]*SymbolMetadata) symbolExportState {
	state := symbolExportState{map[string]map[string]bool{}, map[string]map[string][]SymbolReference{}}
	for file, value := range metadata {
		state.names[file] = map[string]bool{}
		state.aliases[file] = map[string][]SymbolReference{}
		for name := range value.Signatures {
			state.names[file][name] = true
		}
		for name, refs := range value.Aliases {
			state.names[file][name] = true
			state.aliases[file][name] = slices.Clone(refs)
		}
	}
	for _, value := range metadata {
		for target, names := range value.AugmentationExports {
			if state.names[target] != nil {
				for _, name := range names {
					state.names[target][name] = true
				}
			}
		}
	}
	for changed := true; changed; {
		changed = false
		for file, value := range metadata {
			for _, origin := range value.Stars {
				for name := range state.names[origin] {
					if _, own := value.Signatures[name]; own {
						continue
					}
					if _, own := value.Aliases[name]; own {
						continue
					}
					if !state.names[file][name] {
						state.names[file][name] = true
						changed = true
					}
					ref := SymbolReference{File: origin, Name: name}
					if !slices.Contains(state.aliases[file][name], ref) {
						state.aliases[file][name] = append(state.aliases[file][name], ref)
					}
				}
			}
		}
	}
	return state
}

func symbolReferenceSetsEqual(a, b []SymbolReference) bool {
	if len(a) != len(b) {
		return false
	}
	for _, ref := range a {
		if !slices.Contains(b, ref) {
			return false
		}
	}
	return true
}

func (p *Program) symbolWalkHasConstEnum(file *ast.SourceFile) bool {
	if file.Symbol == nil {
		return false
	}
	var typeChecker *checker.Checker
	var done func()
	defer func() {
		if done != nil {
			done()
		}
	}()
	for _, exported := range file.Symbol.Exports() {
		if exported.Flags()&ast.SymbolFlagsConstEnum != 0 {
			return true
		}
		if exported.Flags()&ast.SymbolFlagsAlias == 0 {
			continue
		}
		if typeChecker == nil {
			typeChecker, done = p.program.GetTypeCheckerForFileExclusive(context.Background(), file)
		}
		target := checker.SkipAlias(exported, typeChecker)
		if target != exported && target.Flags()&ast.SymbolFlagsConstEnum != 0 && slices.ContainsFunc(target.Declarations(), func(d *ast.Node) bool { return ast.GetSourceFileOfNode(d) == file }) {
			return true
		}
	}
	return false
}

// Returns false only for the explicitly retained first-phase/special-case path.
// The opt-in ordinary-module path replaces its file-grain importer expansion as
// well as the old second phase; it does not run that expansion and then undo it.
func trySymbolGrainWalk(ctx context.Context, p *Program) bool {
	if !SymbolGrainEnabled() {
		return false
	}
	if p.snapshot.symbolMetadata.Size() == 0 {
		p.symbolFallback = "cold-cache"
		return false
	}
	if p.snapshot.options.IsolatedModules.IsTrue() {
		p.symbolFallback = "isolated-modules"
		return false
	}
	if p.snapshot.options.AssumeChangesOnlyAffectDirectDependencies.IsTrue() {
		p.symbolFallback = "assume-direct-dependencies"
		return false
	}
	roots := p.snapshot.changedFilesSet.ToSlice()
	slices.Sort(roots)
	for _, path := range roots {
		file := p.program.GetSourceFileByPath(path)
		if file == nil {
			continue
		}
		if info, ok := p.snapshot.fileInfos.Load(path); ok && info.affectsGlobalScope {
			p.symbolFallback = "global-scope"
			return false
		}
		if metadata, ok := p.snapshot.symbolMetadata.Load(path); ok {
			if _, exportEquals := metadata.Signatures["*"]; exportEquals {
				p.symbolFallback = "export-equals"
				return false
			}
		}
		if p.symbolWalkHasConstEnum(file) {
			p.symbolFallback = "const-enum"
			return false
		}
	}
	previous := map[string]*SymbolMetadata{}
	p.snapshot.symbolMetadata.Range(func(path tspath.PathKey, value *SymbolMetadata) bool { previous[string(path)] = value; return true })
	current := maps.Clone(previous)
	files := map[string]*ast.SourceFile{}
	imports := map[string][]SymbolReference{}
	for _, file := range p.program.SourceFiles() {
		name := string(file.PathKey())
		files[name] = file
		imports[name] = CollectNamedImports(file, p.symbolResolver(file, file.FileName()))
	}
	for name, file := range files {
		if previous[name] == nil && !p.snapshot.changedFilesSet.Has(file.PathKey()) {
			p.symbolFallback = "incomplete-symbol-cache:" + name
			return false
		}
	}
	baseline := resolveSymbolExports(previous)
	resolved := resolveSymbolExports(current)
	changed := map[string]map[string]bool{}
	affected := map[string]bool{}
	mark := func(file, name string) bool {
		if changed[file] == nil {
			changed[file] = map[string]bool{}
		}
		if changed[file][name] {
			return false
		}
		changed[file][name] = true
		return true
	}
	touched := func(ref SymbolReference) bool {
		if ref.Name == "*" {
			return len(changed[ref.File]) != 0
		}
		return changed[ref.File][ref.Name]
	}
	h := &affectedFilesHandler{ctx: ctx, program: p}
	pending := dtsMayChange{}
	h.dtsMayChange = append(h.dtsMayChange, pending)
	empty := &SymbolMetadata{}
	incomplete := false
	fallbackReason := "declaration-unavailable"
	// Removed files have no current exports. Existing builder preparation retains
	// resolution-changed importers in changedFilesSet for missing-module errors.
	for name, old := range previous {
		if files[name] == nil {
			current[name] = empty
			for export := range old.Signatures {
				mark(name, export)
			}
			for export := range old.Aliases {
				mark(name, export)
			}
		}
	}
	affect := func(name string) bool {
		file := files[name]
		if affected[name] || file == nil {
			return false
		}
		affected[name] = true
		if info, ok := p.snapshot.fileInfos.Load(file.PathKey()); ok && info.affectsGlobalScope {
			incomplete = true
			fallbackReason = "global-scope-reached"
			return true
		}
		if metadata := previous[name]; metadata != nil && metadata.Opaque {
			incomplete = true
			fallbackReason = "unemitted-source-reached"
			return true
		}
		old := previous[name]
		if old == nil {
			old = empty
		}
		h.markWalkedFile(file.PathKey())
		h.updateShapeSignature(file, false)
		if ast.IsJsonSourceFile(file) {
			p.snapshot.symbolMetadata.Store(file.PathKey(), &SymbolMetadata{Signatures: map[string]string{"default": ComputeHash(file.Text(), false)}})
		}
		next, ok := p.snapshot.symbolMetadata.Load(file.PathKey())
		if !ok || next == old {
			incomplete = true
			return true
		}
		if _, exportEquals := next.Signatures["*"]; exportEquals {
			incomplete = true
			fallbackReason = "export-equals"
			return true
		}
		current[name] = next
		for export, signature := range old.Signatures {
			if next.Signatures[export] != signature {
				mark(name, export)
			}
		}
		for export, signature := range next.Signatures {
			if old.Signatures[export] != signature {
				mark(name, export)
			}
		}
		if h.isChangedSignature(file.PathKey()) {
			for _, target := range slices.Concat(old.Augmentations, next.Augmentations) {
				for export := range resolved.names[target] {
					mark(target, export)
				}
				for _, export := range old.AugmentationExports[target] {
					mark(target, export)
				}
				for _, export := range next.AugmentationExports[target] {
					mark(target, export)
				}
			}
		}
		h.removeSemanticDiagnosticsOf(file.PathKey())
		// This path also replaces first-phase importer expansion. Preserve its
		// JS work: import elision and decorator metadata can change even when
		// the consumer's declaration text is unchanged.
		kind := GetFileEmitKind(p.snapshot.options)
		if kind != 0 {
			pending.addFileToAffectedFilesPendingEmit(file.PathKey(), kind)
		}
		return true
	}
	for _, path := range roots {
		affect(string(path))
	}
	paths := slices.Sorted(maps.Keys(files))
	for more := true; more && ctx.Err() == nil && !incomplete; {
		more = false
		resolved = resolveSymbolExports(current)
		for file, names := range resolved.names {
			for name := range names {
				if !baseline.names[file][name] {
					more = mark(file, name) || more
				}
			}
			for name := range baseline.names[file] {
				if !names[name] {
					more = mark(file, name) || more
				}
			}
		}
		for _, file := range slices.Sorted(maps.Keys(current)) {
			value := current[file]
			for name, refs := range resolved.aliases[file] {
				if !symbolReferenceSetsEqual(refs, baseline.aliases[file][name]) {
					more = mark(file, name) || more
				}
				if slices.ContainsFunc(refs, touched) {
					more = mark(file, name) || more
				}
			}
			for name := range baseline.aliases[file] {
				if _, ok := resolved.aliases[file][name]; !ok {
					more = mark(file, name) || more
				}
			}
			for name, refs := range value.Dependencies {
				if slices.ContainsFunc(refs, touched) {
					more = mark(file, name) || more
				}
			}
		}
		for _, file := range paths {
			if incomplete {
				break
			}
			if affected[file] {
				continue
			}
			if slices.ContainsFunc(imports[file], touched) {
				more = affect(file) || more
			}
		}
	}
	if incomplete {
		p.symbolFallback = fallbackReason
		return false
	}
	if ctx.Err() != nil {
		return true
	}
	p.symbolMeaningChanged = 0
	for _, names := range changed {
		p.symbolMeaningChanged += len(names)
	}
	p.affectedWalkFiles = h.walkedFiles.Size()
	p.recomputedSignatures = h.recomputedSignatures.Size()
	h.updateSnapshot()
	return true
}

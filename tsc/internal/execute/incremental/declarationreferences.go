package incremental

import (
	"slices"
	"strings"

	"github.com/microsoft/TypeScript/tsc/internal/ast"
	"github.com/microsoft/TypeScript/tsc/internal/collections"
	"github.com/microsoft/TypeScript/tsc/internal/compiler"
	"github.com/microsoft/TypeScript/tsc/internal/core"
	"github.com/microsoft/TypeScript/tsc/internal/module"
	"github.com/microsoft/TypeScript/tsc/internal/outputpaths"
	"github.com/microsoft/TypeScript/tsc/internal/parser"
	"github.com/microsoft/TypeScript/tsc/internal/tspath"
)

type declarationResolutionHost struct {
	compiler.CompilerHost
	directory tspath.RootedDirectoryPath
}

func (h declarationResolutionHost) GetCurrentDirectory() tspath.RootedDirectoryPath {
	return h.directory
}

type declarationReferenceIndex struct {
	outputs       map[tspath.PathKey][]*ast.SourceFile
	ambient       map[string][]*ast.SourceFile
	augmentations map[tspath.PathKey][]*ast.SourceFile
	libraries     map[string]*ast.SourceFile
}

func (h *affectedFilesHandler) getDeclarationReferenceIndex() *declarationReferenceIndex {
	h.referenceIndexOnce.Do(func() {
		program := h.program.program
		index := &declarationReferenceIndex{
			outputs:       map[tspath.PathKey][]*ast.SourceFile{},
			ambient:       map[string][]*ast.SourceFile{},
			augmentations: map[tspath.PathKey][]*ast.SourceFile{},
			libraries:     map[string]*ast.SourceFile{},
		}
		for _, file := range program.SourceFiles() {
			if program.IsSourceFileDefaultLibrary(file.PathKey()) {
				index.libraries[file.FileName().BaseName()] = file
			}
			if !file.IsDeclarationFile && !ast.IsJsonSourceFile(file) {
				output := outputpaths.GetOutputPathsFor(file, program.Options(), program, outputpaths.ForceEmitPaths{Dts: true})
				key := program.PathKeyForFileName(output.DeclarationFilePath())
				index.outputs[key] = append(index.outputs[key], file)
			}
			for _, statement := range file.Statements.Nodes {
				if !ast.IsModuleDeclaration(statement) || !ast.IsStringLiteral(statement.Name()) {
					continue
				}
				name := statement.Name().Text()
				if !strings.HasPrefix(name, ".") {
					index.ambient[name] = append(index.ambient[name], file)
				}
				resolved := program.GetResolvedModuleFromModuleSpecifier(file, statement.Name())
				if resolved.IsResolved() {
					if target := program.GetSourceFileForResolvedModule(resolved); target != nil {
						index.augmentations[target.PathKey()] = append(index.augmentations[target.PathKey()], file)
					}
				}
			}
		}
		h.referenceIndex = index
	})
	return h.referenceIndex
}

// References are transient: they describe the declaration text used for this
// build's signature, and never become another persisted build-info graph.
func (h *affectedFilesHandler) declarationReferences(file *ast.SourceFile, declarationName tspath.RootedFilePath, text string) *collections.Set[tspath.PathKey] {
	program := h.program.program
	refs := &collections.Set[tspath.PathKey]{}
	index := h.getDeclarationReferenceIndex()
	declaration := parser.ParseSourceFile(ast.SourceFileParseOptions{
		FileName: declarationName,
		PathKey:  program.PathKeyForFileName(declarationName),
	}, text, core.ScriptKindTS)
	resolver := module.NewResolver(module.ResolverOptions{
		Host: declarationResolutionHost{program.Host(), program.BaseDirectory()}, CompilerOptions: program.Options(),
	})
	addFile := func(target *ast.SourceFile) {
		if target != nil {
			refs.Add(target.PathKey())
		}
	}
	addPath := func(name tspath.RootedFilePath) {
		if name == "" {
			return
		}
		if redirect := program.GetParseFileRedirect(name); redirect != "" {
			name = redirect
		}
		if target := program.GetSourceFile(name); target != nil {
			addFile(target)
			return
		}
		// A declaration reference can be relative to declarationDir rather
		// than to the source. Map output names back to this program's files.
		for _, candidate := range index.outputs[program.PathKeyForFileName(name)] {
			addFile(candidate)
		}
	}
	addModule := func(literal *ast.Node) {
		if literal == nil || !ast.IsStringLiteralLike(literal) {
			return
		}
		name := literal.Text()
		mode := program.GetModeForUsageLocation(file, literal)
		resolved := program.GetResolvedModule(file, name, mode)
		if !resolved.IsResolved() {
			resolved, _, _ = resolver.ResolveModuleName(name, file.FileName(), mode, nil)
		}
		if !resolved.IsResolved() {
			resolved, _, _ = resolver.ResolveModuleName(name, declarationName, mode, nil)
		}
		var target *ast.SourceFile
		if resolved.IsResolved() {
			target = program.GetSourceFileForResolvedModule(resolved)
			addFile(target)
			if target == nil {
				addPath(resolved.ResolvedFileName)
			}
		}
		// Ambient modules and augmentations are program files too. They
		// may have no filesystem module-resolution result.
		if target != nil {
			for _, candidate := range index.augmentations[target.PathKey()] {
				addFile(candidate)
			}
		}
		for _, candidate := range index.ambient[name] {
			addFile(candidate)
		}
		for pattern, candidates := range index.ambient {
			if before, after, wildcard := strings.Cut(pattern, "*"); wildcard && strings.HasPrefix(name, before) && strings.HasSuffix(name, after) {
				for _, candidate := range candidates {
					addFile(candidate)
				}
			}
		}
	}
	var visit func(*ast.Node) bool
	visit = func(node *ast.Node) bool {
		switch node.Kind {
		case ast.KindImportDeclaration:
			addModule(node.AsImportDeclaration().ModuleSpecifier)
		case ast.KindExportDeclaration:
			addModule(node.AsExportDeclaration().ModuleSpecifier)
		case ast.KindExternalModuleReference:
			addModule(node.AsExternalModuleReference().Expression)
		case ast.KindImportType:
			argument := node.AsImportTypeNode().Argument
			if ast.IsLiteralTypeNode(argument) {
				addModule(argument.AsLiteralTypeNode().Literal)
			}
		}
		return node.ForEachChild(visit)
	}
	visit(declaration.AsNode())
	for _, ref := range declaration.ReferencedFiles {
		addPath(declarationName.Directory().ResolveFile(ref.FileName))
		if source := program.GetSourceFileFromReference(file, ref); source != nil {
			addFile(source)
		}
	}
	for _, ref := range declaration.TypeReferenceDirectives {
		resolved := program.GetResolvedTypeReferenceDirectiveFromTypeReferenceDirective(ref, file)
		if resolved == nil || !resolved.IsResolved() {
			mode := ref.ResolutionMode
			if mode == core.ResolutionModeNone {
				mode = program.GetDefaultResolutionModeForFile(file)
			}
			resolved, _ = resolver.ResolveTypeReferenceDirective(ref.FileName, file.FileName(), mode, nil)
		}
		if resolved != nil && resolved.IsResolved() {
			addPath(resolved.ResolvedFileName)
		}
	}
	for _, ref := range declaration.LibReferenceDirectives {
		addFile(index.libraries["lib."+strings.ToLower(ref.FileName)+".d.ts"])
	}
	return refs
}

// The frontier is shared across all changed roots. A stopped file waits on
// every declaration reference, so a later addition to the walked set can wake
// it even when its own declaration signature has not changed.
func (h *affectedFilesHandler) walkDeclarationReferences() {
	if h.proportionalRoots.Size() == 0 || h.ctx.Err() != nil {
		return
	}
	pending := dtsMayChange{}
	h.dtsMayChange = append(h.dtsMayChange, pending)
	visited := &collections.Set[tspath.PathKey]{}
	expanded := &collections.Set[tspath.PathKey]{}
	waiting := map[tspath.PathKey]*collections.Set[tspath.PathKey]{}
	var queue []tspath.PathKey
	expand := func(path tspath.PathKey) {
		if expanded.AddIfAbsent(path) {
			queue = append(queue, slices.Sorted(h.program.snapshot.referencedMap.getReferencedBy(path))...)
		}
	}
	roots := h.proportionalRoots.ToSlice()
	slices.Sort(roots)
	for _, path := range roots {
		visited.Add(path)
		h.walkedFiles.Add(path)
		expand(path)
	}
	for len(queue) > 0 && h.ctx.Err() == nil {
		path := queue[0]
		queue = queue[1:]
		if !visited.AddIfAbsent(path) {
			continue
		}
		file := h.program.program.GetSourceFileByPath(path)
		if file == nil {
			continue
		}
		h.walkedFiles.Add(path)
		for waiter := range waiting[path].Keys() {
			expand(waiter)
		}
		delete(waiting, path)
		if h.handleDtsMayChangeOfGlobalScope(pending, path, false) {
			return
		}
		h.updateShapeSignature(file, false)
		update, _ := h.updatedSignatures.Load(path)
		// A separate const-enum walk may already have queued this file with
		// a version signature. The proportional walk still needs real text.
		if update.kind == SignatureUpdateKindUsedVersion {
			if !file.IsDeclarationFile && !ast.IsJsonSourceFile(file) {
				update.signature = h.computeDtsSignature(file, update)
				update.kind = SignatureUpdateKindComputedDts
			} else if file.IsDeclarationFile && update.references == nil {
				update.references = h.declarationReferences(file, file.FileName(), file.Text())
			}
		}
		h.removeSemanticDiagnosticsOf(path)
		if h.program.snapshot.options.GetEmitDeclarations() {
			pending.addFileToAffectedFilesPendingEmit(path, core.IfElse(h.program.snapshot.options.DeclarationMap.IsTrue(), FileEmitKindAllDts, FileEmitKindDts))
		}
		propagate := h.isChangedSignature(path)
		for ref := range update.references.Keys() {
			propagate = propagate || h.walkedFiles.Has(ref)
		}
		if propagate {
			expand(path)
		} else {
			for ref := range update.references.Keys() {
				if waiting[ref] == nil {
					waiting[ref] = &collections.Set[tspath.PathKey]{}
				}
				waiting[ref].Add(path)
			}
		}
	}
}

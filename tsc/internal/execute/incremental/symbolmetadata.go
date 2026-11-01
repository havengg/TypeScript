package incremental

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"slices"
	"strings"

	"github.com/microsoft/TypeScript/tsc/internal/ast"
	"github.com/microsoft/TypeScript/tsc/internal/binder"
	"github.com/microsoft/TypeScript/tsc/internal/core"
	"github.com/microsoft/TypeScript/tsc/internal/parser"
	"github.com/microsoft/TypeScript/tsc/internal/scanner"
	"github.com/microsoft/TypeScript/tsc/internal/tspath"
)

// SymbolResolver returns canonical source paths, including all declaration-output
// redirects/ambient matches. Resolution policy belongs to the caller.
type SymbolResolver func(specifier string) []string

type SymbolReference struct {
	File string `json:"file"`
	Name string `json:"name"`
}

type SymbolMetadata struct {
	Opaque              bool                         `json:"opaque,omitempty"`
	Signatures          map[string]string            `json:"signatures"`
	Dependencies        map[string][]SymbolReference `json:"dependencies"`
	Aliases             map[string][]SymbolReference `json:"aliases"`
	Stars               []string                     `json:"stars"`
	Augmentations       []string                     `json:"augmentations"`
	AugmentationExports map[string][]string          `json:"augmentationExports"`
	Global              bool                         `json:"global"`
	Diagnostics         []string                     `json:"diagnostics,omitempty"`
}

type symbolImportBinding struct {
	specifier, name string
	namespace       bool
}
type symbolMetadataParser struct {
	file        *ast.SourceFile
	sourcePath  string
	resolve     SymbolResolver
	bindings    map[string]symbolImportBinding
	diagnostics []string
	resolution  map[string][]string
}

func newSymbolMetadataParser(file *ast.SourceFile, sourcePath string, resolve SymbolResolver) *symbolMetadataParser {
	binder.BindSourceFile(file)
	p := &symbolMetadataParser{file: file, sourcePath: sourcePath, resolve: resolve, bindings: map[string]symbolImportBinding{}, resolution: map[string][]string{}}
	for range file.Diagnostics() {
		p.diagnostics = append(p.diagnostics, "declaration/source parse diagnostic in "+sourcePath)
	}
	for _, s := range file.Statements.Nodes {
		switch s.Kind {
		case ast.KindImportDeclaration:
			d := s.AsImportDeclaration()
			if d.ModuleSpecifier == nil || !ast.IsStringLiteralLike(d.ModuleSpecifier) || d.ImportClause == nil {
				continue
			}
			c := d.ImportClause.AsImportClause()
			spec := d.ModuleSpecifier.Text()
			if c.Name() != nil {
				p.bindings[c.Name().Text()] = symbolImportBinding{specifier: spec, name: "default"}
			}
			if b := c.NamedBindings; b != nil {
				if ast.IsNamespaceImport(b) {
					p.bindings[b.Name().Text()] = symbolImportBinding{specifier: spec, name: "*", namespace: true}
				} else {
					for _, e := range b.Elements() {
						v := e.AsImportSpecifier()
						n := v.PropertyName
						if n == nil {
							n = e.Name()
						}
						p.bindings[e.Name().Text()] = symbolImportBinding{specifier: spec, name: n.Text()}
					}
				}
			}
		case ast.KindImportEqualsDeclaration:
			d := s.AsImportEqualsDeclaration()
			if ast.IsExternalModuleReference(d.ModuleReference) {
				e := d.ModuleReference.AsExternalModuleReference().Expression
				if e != nil && ast.IsStringLiteralLike(e) {
					p.bindings[s.Name().Text()] = symbolImportBinding{specifier: e.Text(), name: "*", namespace: true}
				}
			}
		}
	}
	for _, s := range file.Statements.Nodes {
		if !ast.IsImportEqualsDeclaration(s) {
			continue
		}
		d := s.AsImportEqualsDeclaration()
		if ast.IsExternalModuleReference(d.ModuleReference) {
			continue
		}
		root, first := symbolEntityRoot(d.ModuleReference)
		if root != nil {
			if b, ok := p.bindings[root.Text()]; ok {
				if b.namespace && first != "" {
					b.name = first
					b.namespace = false
				}
				p.bindings[s.Name().Text()] = b
			}
		}
	}
	return p
}

func (p *symbolMetadataParser) resolveFiles(specifier string) []string {
	if result, ok := p.resolution[specifier]; ok {
		return result
	}
	var result []string
	if p.resolve != nil {
		result = p.resolve(specifier)
	}
	result = symbolUniqueStrings(result)
	if len(result) == 0 {
		p.diagnostics = append(p.diagnostics, fmt.Sprintf("unresolved module/directive %q in %s", specifier, p.sourcePath))
	}
	p.resolution[specifier] = result
	return result
}

func symbolUniqueStrings(values []string) []string {
	result := append([]string{}, values...)
	slices.Sort(result)
	result = slices.Compact(result)
	return slices.DeleteFunc(result, func(s string) bool { return s == "" })
}
func symbolUniqueRefs(refs []SymbolReference) []SymbolReference {
	result := append([]SymbolReference{}, refs...)
	slices.SortFunc(result, func(a, b SymbolReference) int {
		if c := strings.Compare(a.File, b.File); c != 0 {
			return c
		}
		return strings.Compare(a.Name, b.Name)
	})
	return slices.Compact(result)
}
func symbolHash(text string) string {
	sum := sha256.Sum256([]byte(text))
	return hex.EncodeToString(sum[:])
}
func symbolExported(node *ast.Node) bool { return node.ModifierFlags()&ast.ModifierFlagsExport != 0 }
func symbolEntityRoot(node *ast.Node) (*ast.Node, string) {
	first := ""
	for node != nil && ast.IsQualifiedName(node) {
		first = node.AsQualifiedName().Right.Text()
		node = node.AsQualifiedName().Left
	}
	return node, first
}
func symbolBindingNames(node *ast.Node) []string {
	if node == nil {
		return nil
	}
	if ast.IsIdentifier(node) {
		return []string{node.Text()}
	}
	var names []string
	if ast.IsBindingPattern(node) {
		for _, e := range node.Elements() {
			if ast.IsBindingElement(e) {
				names = append(names, symbolBindingNames(e.Name())...)
			}
		}
	}
	return names
}
func symbolStatementNames(node *ast.Node) []string {
	if ast.IsImportDeclaration(node) {
		d := node.AsImportDeclaration()
		if d.ImportClause == nil {
			return nil
		}
		c := d.ImportClause.AsImportClause()
		var names []string
		if c.Name() != nil {
			names = append(names, c.Name().Text())
		}
		if b := c.NamedBindings; b != nil {
			if ast.IsNamespaceImport(b) {
				names = append(names, b.Name().Text())
			} else {
				for _, e := range b.Elements() {
					names = append(names, e.Name().Text())
				}
			}
		}
		return names
	}
	if ast.IsVariableStatement(node) {
		var names []string
		for _, d := range node.AsVariableStatement().DeclarationList.AsVariableDeclarationList().Declarations.Nodes {
			names = append(names, symbolBindingNames(d.Name())...)
		}
		return names
	}
	if name := node.Name(); name != nil && ast.IsIdentifier(name) {
		return []string{name.Text()}
	}
	return nil
}
func symbolDeclarationIdentifier(node *ast.Node) bool {
	parent := node.Parent
	if parent == nil {
		return false
	}
	if ast.IsShorthandPropertyAssignment(parent) {
		return false
	}
	if ast.IsDeclarationNameOrImportPropertyName(node) {
		return true
	}
	switch parent.Kind {
	case ast.KindImportClause, ast.KindNamespaceImport, ast.KindImportEqualsDeclaration:
		return true
	case ast.KindPropertyAccessExpression:
		return parent.Name() == node
	case ast.KindQualifiedName:
		return parent.AsQualifiedName().Right == node
	}
	return false
}

func symbolReferenceMeaning(node *ast.Node) ast.SymbolFlags {
	// Resolve type/value/namespace shadowing without a checker. Qualified roots
	// denote namespaces except in typeof queries, whose root is a value.
	cursor := node
	qualified := false
	for cursor.Parent != nil && ast.IsQualifiedName(cursor.Parent) {
		qualified = true
		cursor = cursor.Parent
	}
	if cursor.Parent != nil {
		switch cursor.Parent.Kind {
		case ast.KindTypeQuery:
			return ast.SymbolFlagsValue
		case ast.KindTypeReference:
			if qualified {
				return ast.SymbolFlagsNamespace
			}
			return ast.SymbolFlagsType
		case ast.KindImportEqualsDeclaration:
			if qualified {
				return ast.SymbolFlagsNamespace
			}
			return ast.SymbolFlagsType | ast.SymbolFlagsValue | ast.SymbolFlagsNamespace
		}
	}
	if qualified {
		return ast.SymbolFlagsNamespace
	}
	return ast.SymbolFlagsValue
}
func symbolHasMeaning(symbol *ast.Symbol, meaning ast.SymbolFlags) bool {
	return symbol != nil && symbol.CombinedLocalAndExportSymbolFlags()&(meaning|ast.SymbolFlagsAlias) != 0
}
func (p *symbolMetadataParser) boundToModule(node *ast.Node) bool {
	key := node.Text()
	module := p.file.AsNode().Locals()[key]
	if module == nil {
		return false
	}
	meaning := symbolReferenceMeaning(node)
	child := node
	for scope := node.Parent; scope != nil; scope = scope.Parent {
		if ast.IsConditionalTypeNode(scope) && child != scope.AsConditionalTypeNode().TrueType {
			child = scope
			continue
		}
		if ast.IsMappedTypeNode(scope) && child != scope.AsMappedTypeNode().Type && child != scope.AsMappedTypeNode().NameType {
			child = scope
			continue
		}
		if (ast.IsFunctionExpression(scope) || ast.IsClassExpression(scope)) && scope.Name() != nil && scope.Name().Text() == key && symbolHasMeaning(scope.Symbol(), meaning) {
			return false
		}
		if symbol := scope.Locals()[key]; symbolHasMeaning(symbol, meaning) {
			return symbol == module
		}
		child = scope
	}
	return false
}

func (p *symbolMetadataParser) references(nodes []*ast.Node, sourceSyntax bool) []SymbolReference {
	var refs []SymbolReference
	add := func(specifier, name string) {
		for _, file := range p.resolveFiles(specifier) {
			n := name
			if strings.HasSuffix(strings.ToLower(file), ".json") {
				n = "*"
			}
			refs = append(refs, SymbolReference{File: file, Name: n})
		}
	}
	var visit func(*ast.Node) bool
	visit = func(node *ast.Node) bool {
		switch node.Kind {
		case ast.KindImportDeclaration:
			if !sourceSyntax {
				return false
			}
			d := node.AsImportDeclaration()
			if d.ModuleSpecifier == nil || !ast.IsStringLiteralLike(d.ModuleSpecifier) {
				return false
			}
			spec := d.ModuleSpecifier.Text()
			if d.ImportClause == nil {
				add(spec, "*")
				return false
			}
			c := d.ImportClause.AsImportClause()
			if c.Name() != nil {
				add(spec, "default")
			}
			if b := c.NamedBindings; b != nil {
				if ast.IsNamespaceImport(b) {
					add(spec, "*")
				} else {
					for _, e := range b.Elements() {
						n := e.AsImportSpecifier().PropertyName
						if n == nil {
							n = e.Name()
						}
						add(spec, n.Text())
					}
				}
			}
			return false
		case ast.KindImportEqualsDeclaration:
			d := node.AsImportEqualsDeclaration()
			if ast.IsExternalModuleReference(d.ModuleReference) {
				if sourceSyntax {
					e := d.ModuleReference.AsExternalModuleReference().Expression
					if e != nil && ast.IsStringLiteralLike(e) {
						add(e.Text(), "*")
					}
				}
				return false
			}
		case ast.KindExportDeclaration:
			d := node.AsExportDeclaration()
			if d.ModuleSpecifier != nil && ast.IsStringLiteralLike(d.ModuleSpecifier) {
				if d.ExportClause == nil || ast.IsNamespaceExport(d.ExportClause) {
					add(d.ModuleSpecifier.Text(), "*")
				} else {
					for _, e := range d.ExportClause.Elements() {
						n := e.AsExportSpecifier().PropertyName
						if n == nil {
							n = e.Name()
						}
						add(d.ModuleSpecifier.Text(), n.Text())
					}
				}
			} else if d.ExportClause != nil && !ast.IsNamespaceExport(d.ExportClause) {
				for _, e := range d.ExportClause.Elements() {
					n := e.AsExportSpecifier().PropertyName
					if n == nil {
						n = e.Name()
					}
					if b, ok := p.bindings[n.Text()]; ok {
						add(b.specifier, b.name)
					}
				}
			}
			return false
		case ast.KindImportType:
			d := node.AsImportTypeNode()
			if ast.IsLiteralTypeNode(d.Argument) && ast.IsStringLiteralLike(d.Argument.AsLiteralTypeNode().Literal) {
				name := "*"
				if !(sourceSyntax && d.IsTypeOf) && d.Qualifier != nil {
					root, _ := symbolEntityRoot(d.Qualifier)
					name = root.Text()
				}
				add(d.Argument.AsLiteralTypeNode().Literal.Text(), name)
				for _, arg := range node.TypeArguments() {
					visit(arg)
				}
				return false
			}
		case ast.KindCallExpression:
			d := node.AsCallExpression()
			if d.Expression.Kind == ast.KindImportKeyword && d.Arguments != nil && len(d.Arguments.Nodes) > 0 && ast.IsStringLiteralLike(d.Arguments.Nodes[0]) {
				add(d.Arguments.Nodes[0].Text(), "*")
			}
		}
		if ast.IsIdentifier(node) && !symbolDeclarationIdentifier(node) && p.boundToModule(node) {
			if b, ok := p.bindings[node.Text()]; ok {
				name := b.name
				if b.namespace {
					parent := node.Parent
					name = "*"
					if !sourceSyntax && parent != nil {
						if ast.IsPropertyAccessExpression(parent) && parent.Expression() == node {
							name = parent.Name().Text()
						} else if ast.IsQualifiedName(parent) && parent.AsQualifiedName().Left == node {
							name = parent.AsQualifiedName().Right.Text()
						}
					}
				}
				add(b.specifier, name)
			}
		}
		return node.ForEachChild(visit)
	}
	for _, node := range nodes {
		visit(node)
	}
	return symbolUniqueRefs(refs)
}

// CollectNamedImports implements the fixed source-syntax import rules. Source
// namespace, import=require, side-effect, dynamic and typeof-import uses are '*'.
func CollectNamedImports(sourceFile *ast.SourceFile, resolve SymbolResolver) []SymbolReference {
	refs, _ := CollectNamedImportsWithDiagnostics(sourceFile, resolve)
	return refs
}
func CollectNamedImportsWithDiagnostics(sourceFile *ast.SourceFile, resolve SymbolResolver) ([]SymbolReference, []string) {
	p := newSymbolMetadataParser(sourceFile, sourceFile.FileName().AsString(), resolve)
	refs := p.references(sourceFile.Statements.Nodes, true)
	for _, directives := range [][]*ast.FileReference{sourceFile.ReferencedFiles, sourceFile.TypeReferenceDirectives, sourceFile.LibReferenceDirectives} {
		for _, directive := range directives {
			for _, file := range p.resolveFiles(directive.FileName) {
				refs = append(refs, SymbolReference{File: file, Name: "*"})
			}
		}
	}
	return symbolUniqueRefs(refs), p.diagnostics
}

func (p *symbolMetadataParser) moduleEffects(metadata *SymbolMetadata) {
	metadata.Global = !ast.IsExternalOrCommonJSModule(p.file)
	var visit func(*ast.Node) bool
	visit = func(node *ast.Node) bool {
		if ast.IsModuleDeclaration(node) {
			if ast.IsGlobalScopeAugmentation(node) {
				metadata.Global = true
			}
			if node.Name() != nil && ast.IsStringLiteralLike(node.Name()) {
				for _, file := range p.resolveFiles(node.Name().Text()) {
					metadata.Augmentations = append(metadata.Augmentations, file)
					names := slices.Clone(metadata.AugmentationExports[file])
					var statements []*ast.Node
					if node.Body() != nil {
						statements = node.Body().Statements()
					}
					explicit := false
					for _, s := range statements {
						if ast.IsExportDeclaration(s) || ast.IsExportAssignment(s) {
							explicit = true
						}
					}
					equals := false
					for _, s := range statements {
						if ast.IsExportAssignment(s) {
							if s.AsExportAssignment().IsExportEquals {
								equals = true
								names = append(names, "*")
							} else {
								names = append(names, "default")
							}
							continue
						}
						if ast.IsExportDeclaration(s) {
							clause := s.AsExportDeclaration().ExportClause
							if clause != nil {
								if ast.IsNamespaceExport(clause) {
									names = append(names, clause.Name().Text())
								} else {
									for _, e := range clause.Elements() {
										names = append(names, e.Name().Text())
									}
								}
							}
							continue
						}
						if ast.IsImportDeclaration(s) || ast.IsImportEqualsDeclaration(s) {
							if ast.IsImportEqualsDeclaration(s) && symbolExported(s) {
								names = append(names, s.Name().Text())
							}
							continue
						}
						if explicit && !symbolExported(s) {
							continue
						}
						if s.ModifierFlags()&ast.ModifierFlagsDefault != 0 {
							names = append(names, "default")
						} else {
							names = append(names, symbolStatementNames(s)...)
						}
					}
					if equals {
						names = []string{"*"}
					}
					metadata.AugmentationExports[file] = symbolUniqueStrings(names)
				}
			}
		}
		return node.ForEachChild(visit)
	}
	visit(p.file.AsNode())
	metadata.Augmentations = symbolUniqueStrings(metadata.Augmentations)
}

// ParseDeclarationSymbolMetadata parses declaration text with native AST and
// lexical binding only. sourcePath names the canonical source owner; resolution
// can use declarationPath in its caller-provided closure for relocated outputs.
func ParseDeclarationSymbolMetadata(text, sourcePath, declarationPath string, resolve SymbolResolver) SymbolMetadata {
	file := parser.ParseSourceFile(ast.SourceFileParseOptions{FileName: tspath.RootedFilePath(declarationPath), PathKey: tspath.PathKey(declarationPath)}, text, core.ScriptKindTS)
	p := newSymbolMetadataParser(file, sourcePath, resolve)
	m := SymbolMetadata{Signatures: map[string]string{}, Dependencies: map[string][]SymbolReference{}, Aliases: map[string][]SymbolReference{}, AugmentationExports: map[string][]string{}}
	local := map[string][]*ast.Node{}
	public := map[string]bool{}
	indices := map[*ast.Node]int{}
	for i, s := range file.Statements.Nodes {
		indices[s] = i
		for _, name := range symbolStatementNames(s) {
			local[name] = append(local[name], s)
			if symbolExported(s) {
				public[name] = true
			}
		}
	}
	closure := func(start []*ast.Node) []*ast.Node {
		seen := map[*ast.Node]bool{}
		var add func(*ast.Node)
		add = func(s *ast.Node) {
			if seen[s] {
				return
			}
			seen[s] = true
			var visit func(*ast.Node) bool
			visit = func(n *ast.Node) bool {
				if ast.IsIdentifier(n) && !symbolDeclarationIdentifier(n) && p.boundToModule(n) {
					for _, target := range local[n.Text()] {
						if !symbolExported(target) {
							add(target)
						}
					}
				}
				return n.ForEachChild(visit)
			}
			s.ForEachChild(visit)
		}
		for _, s := range start {
			add(s)
		}
		nodes := make([]*ast.Node, 0, len(seen))
		for s := range seen {
			nodes = append(nodes, s)
		}
		slices.SortFunc(nodes, func(a, b *ast.Node) int { return indices[a] - indices[b] })
		return nodes
	}
	assign := func(name string, start []*ast.Node) {
		nodes := closure(start)
		var texts []string
		for _, s := range nodes {
			texts = append(texts, scanner.GetTextOfNodeFromSourceText(text, s, false))
		}
		m.Signatures[name] = symbolHash(strings.Join(texts, "\n"))
		refs := p.references(nodes, false)
		// Authorized extension: references to other exported local declarations
		// propagate their meaning, while private locals are already in the hash.
		var visit func(*ast.Node) bool
		visit = func(n *ast.Node) bool {
			if ast.IsIdentifier(n) && n.Text() != name && public[n.Text()] && !symbolDeclarationIdentifier(n) && p.boundToModule(n) {
				refs = append(refs, SymbolReference{File: sourcePath, Name: n.Text()})
			}
			return n.ForEachChild(visit)
		}
		for _, n := range nodes {
			visit(n)
		}
		m.Dependencies[name] = symbolUniqueRefs(refs)
	}
	addAlias := func(name string, refs []SymbolReference) {
		m.Aliases[name] = symbolUniqueRefs(append(m.Aliases[name], refs...))
	}
	var exportEquals *ast.Node
	for _, s := range file.Statements.Nodes {
		if ast.IsExportDeclaration(s) {
			d := s.AsExportDeclaration()
			files := []string{sourcePath}
			if d.ModuleSpecifier != nil && ast.IsStringLiteralLike(d.ModuleSpecifier) {
				files = p.resolveFiles(d.ModuleSpecifier.Text())
			}
			if d.ExportClause == nil {
				m.Stars = append(m.Stars, files...)
			} else if ast.IsNamespaceExport(d.ExportClause) {
				var refs []SymbolReference
				for _, f := range files {
					refs = append(refs, SymbolReference{File: f, Name: "*"})
				}
				addAlias(d.ExportClause.Name().Text(), refs)
			} else {
				for _, e := range d.ExportClause.Elements() {
					original := e.AsExportSpecifier().PropertyName
					if original == nil {
						original = e.Name()
					}
					imported := original.Text()
					targets := files
					if d.ModuleSpecifier == nil {
						if b, ok := p.bindings[imported]; ok {
							targets = p.resolveFiles(b.specifier)
							imported = b.name
						} else if declarations, ok := local[imported]; ok {
							assign(e.Name().Text(), declarations)
							continue
						} else {
							p.diagnostics = append(p.diagnostics, "unresolved local export "+imported+" in "+sourcePath)
						}
					}
					var refs []SymbolReference
					for _, f := range targets {
						refs = append(refs, SymbolReference{File: f, Name: imported})
					}
					addAlias(e.Name().Text(), refs)
				}
			}
			continue
		}
		if ast.IsImportEqualsDeclaration(s) && symbolExported(s) {
			if b, ok := p.bindings[s.Name().Text()]; ok {
				var refs []SymbolReference
				for _, f := range p.resolveFiles(b.specifier) {
					refs = append(refs, SymbolReference{File: f, Name: b.name})
				}
				addAlias(s.Name().Text(), refs)
				continue
			}
		}
		if ast.IsExportAssignment(s) {
			name := "default"
			if s.AsExportAssignment().IsExportEquals {
				name = "*"
				exportEquals = s
			}
			assign(name, []*ast.Node{s})
			continue
		}
		if symbolExported(s) {
			names := symbolStatementNames(s)
			isDefault := s.ModifierFlags()&ast.ModifierFlagsDefault != 0
			if isDefault {
				group := []*ast.Node{s}
				if len(names) > 0 {
					group = local[names[0]]
				}
				assign("default", group)
			} else {
				for _, name := range names {
					assign(name, local[name])
				}
			}
		}
	}
	if exportEquals != nil {
		clear(m.Signatures)
		clear(m.Dependencies)
		clear(m.Aliases)
		m.Stars = nil
		assign("*", []*ast.Node{exportEquals})
	}
	m.Stars = symbolUniqueStrings(m.Stars)
	p.moduleEffects(&m)
	m.Diagnostics = p.diagnostics
	return m
}

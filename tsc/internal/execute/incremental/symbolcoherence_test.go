package incremental

import (
	"fmt"
	"maps"
	"reflect"
	"slices"
	"strings"
	"sync"
	"testing"

	"github.com/microsoft/TypeScript/tsc/internal/ast"
	"github.com/microsoft/TypeScript/tsc/internal/compiler"
	"github.com/microsoft/TypeScript/tsc/internal/core"
	"github.com/microsoft/TypeScript/tsc/internal/testutil/stringtestutil"
	"github.com/microsoft/TypeScript/tsc/internal/tsoptions"
	"github.com/microsoft/TypeScript/tsc/internal/tspath"
	"github.com/microsoft/TypeScript/tsc/internal/vfs/vfstest"
)

const (
	coherenceProject      = "/home/src/workspaces/project"
	coherenceDepA         = coherenceProject + "/node_modules/dep-a/index.d.ts"
	coherenceDepB         = coherenceProject + "/node_modules/dep-b/index.d.ts"
	coherenceAB           = `export type Kind = "a" | "b";`
	coherenceABC          = `export type Kind = "a" | "b" | "c";`
	coherenceGlobalChange = `declare global { interface DepBGlobal { marker: string; extra: number; } } export {};`
)

type coherenceDiagnostic struct {
	File                                     string `json:"file"`
	Pos, End                                 int
	Code                                     int32
	Category                                 int
	Message, MessageKey, MessageText, Source string
	MessageArgs                              []string
	MessageChain, RelatedInformation         []coherenceDiagnostic
	Unnecessary, Deprecated, SkippedOnNoEmit bool
}

func coherenceDiagnostics(ds []*ast.Diagnostic) []coherenceDiagnostic {
	result := make([]coherenceDiagnostic, 0, len(ds))
	for _, d := range ds {
		file := ""
		if d.File() != nil {
			file = d.File().FileName().AsString()
		}
		result = append(result, coherenceDiagnostic{File: file, Pos: d.Pos(), End: d.End(), Code: d.Code(), Category: int(d.Category()), Message: fmt.Sprint(d), MessageKey: fmt.Sprint(d.MessageKey()), MessageText: d.MessageText(), Source: d.Source(), MessageArgs: slices.Clone(d.MessageArgs()), MessageChain: coherenceDiagnostics(d.MessageChain()), RelatedInformation: coherenceDiagnostics(d.RelatedInformation()), Unnecessary: d.ReportsUnnecessary(), Deprecated: d.ReportsDeprecated(), SkippedOnNoEmit: d.SkippedOnNoEmit()})
	}
	return result
}

// restart reads the actual serialized build-info text captured by coherenceEmit;
// it does not reuse or manufacture an in-memory snapshot.
func coherenceProgram(t *testing.T, files map[string]string, old *Program, restart, withJSON bool, noEmit ...bool) *Program {
	t.Helper()
	files = maps.Clone(files)
	options := &core.CompilerOptions{Composite: core.TSTrue, Strict: core.TSTrue, OutDir: coherenceProject + "/dist", ConfigFilePath: coherenceProject + "/tsconfig.json", TsBuildInfoFile: coherenceProject + "/dist/state.tsbuildinfo"}
	if len(noEmit) != 0 && noEmit[0] {
		options.NoEmit = core.TSTrue
	}
	roots := []tspath.RootedFilePath{coherenceProject + "/src/consumer.ts", coherenceProject + "/src/env.ts", coherenceProject + "/src/middle.ts"}
	if withJSON {
		options.ResolveJsonModule = core.TSTrue
		options.ESModuleInterop = core.TSTrue
		options.Module = core.ModuleKindCommonJS
		roots = append(roots, coherenceProject+"/src/json-consumer.ts", coherenceProject+"/src/data.json")
	}
	files["/lib/"+tsoptions.GetDefaultLibFileName(options)] = deletionTestLib
	host := compiler.NewCompilerHost(vfstest.FromMap(files, tspath.CaseSensitive), "/lib", nil, nil, nil)
	config := tsoptions.NewParsedCommandLine(options, roots, nil, coherenceProject, tspath.CaseSensitive)
	if restart {
		old = ReadBuildInfoProgram(config, NewBuildInfoReader(host), host)
		if old == nil {
			t.Fatal("serialized build info was not accepted")
		}
		if _, ok := old.snapshot.symbolMetadata.Load(tspath.PathKeyFromCanonical(coherenceDepA)); !ok {
			t.Fatal("restart did not restore symbol metadata")
		}
	}
	return NewProgram(compiler.NewProgram(compiler.ProgramOptions{Config: config, Host: host}), old, CreateHost(host), nil, false)
}

func coherenceEmit(t *testing.T, p *Program, files map[string]string) {
	t.Helper()
	var mu sync.Mutex
	p.Emit(t.Context(), compiler.EmitOptions{WriteFile: func(name tspath.RootedFilePath, text string, _ *compiler.WriteFileData) error {
		mu.Lock()
		files[name.AsString()] = text
		mu.Unlock()
		return nil
	}})
	if files[coherenceProject+"/dist/state.tsbuildinfo"] == "" {
		t.Fatal("build info was not emitted")
	}
}

func coherenceAssertMetadata(t *testing.T, p *Program, path, name, want string) {
	t.Helper()
	value, ok := p.snapshot.symbolMetadata.Load(tspath.PathKeyFromCanonical(path))
	if !ok || value.Signatures[name] != want {
		t.Fatalf("metadata %s[%s] is stale/missing: got=%+v want=%s fallback=%s", path, name, value, want, p.symbolFallback)
	}
}

func coherenceAssertDiagnostics(t *testing.T, p, fresh *Program, wantCode int32) {
	t.Helper()
	actual := coherenceDiagnostics(p.GetSemanticDiagnostics(t.Context(), nil))
	expected := coherenceDiagnostics(fresh.GetSemanticDiagnostics(t.Context(), nil))
	if !reflect.DeepEqual(actual, expected) {
		t.Fatalf("incremental/fresh full diagnostics differ: incremental=%+v fresh=%+v", actual, expected)
	}
	if wantCode == 0 && len(expected) != 0 || wantCode != 0 && (len(expected) != 1 || expected[0].Code != wantCode) {
		t.Fatalf("unexpected diagnostics: %+v; wantCode=%d", expected, wantCode)
	}
}

// The fixture is copied from getBatchDependencyUpdateFiles in tscbuild_test.go.
// Every trial takes an ordinary cold -> global batch -> revert sequence without
// modifying snapshots or forcing map order. Metadata itself must be current,
// independently of whether a particular traversal happens to expose stale diagnostics.
func TestSymbolMetadataCoherenceAfterGlobalFallback(t *testing.T) {
	t.Setenv("TS_SYMBOL_GRAIN", "1")
	for _, restart := range []bool{false, true} { //nolint:paralleltest // Subtests inherit the parent's process-wide t.Setenv setting.
		t.Run(fmt.Sprintf("restart=%v", restart), func(t *testing.T) {
			for range 32 {
				files := coherenceBatchFiles()
				cold := coherenceProgram(t, files, nil, false, false)
				coherenceAssertDiagnostics(t, cold, coherenceProgram(t, files, nil, false, false), 0)
				coherenceEmit(t, cold, files)
				files[coherenceDepA] = coherenceABC
				files[coherenceDepB] = coherenceGlobalChange
				batch := coherenceProgram(t, files, cold, restart, false)
				coherenceAssertDiagnostics(t, batch, coherenceProgram(t, files, nil, false, false), 2366)
				if !strings.HasPrefix(batch.symbolFallback, "global-scope") {
					t.Fatalf("expected global fallback, got %q", batch.symbolFallback)
				}
				coherenceEmit(t, batch, files)
				coherenceAssertMetadata(t, batch, coherenceDepA, "Kind", symbolHash(coherenceABC))
				coherenceAssertMetadata(t, cold, coherenceDepA, "Kind", symbolHash(coherenceAB))
				files[coherenceDepA] = coherenceAB // The only edit after the global batch.
				reverted := coherenceProgram(t, files, batch, restart, false)
				coherenceAssertDiagnostics(t, reverted, coherenceProgram(t, files, nil, false, false), 0)
				if reverted.symbolFallback != "" {
					t.Fatalf("ordinary Kind revert must use symbol walk, got fallback %q", reverted.symbolFallback)
				}
				coherenceEmit(t, reverted, files)
				coherenceAssertMetadata(t, reverted, coherenceDepA, "Kind", symbolHash(coherenceAB))
				coherenceAssertMetadata(t, batch, coherenceDepA, "Kind", symbolHash(coherenceABC))
			}
		})
	}
}

func TestSymbolMetadataJSONCoherenceAfterGlobalFallback(t *testing.T) {
	t.Setenv("TS_SYMBOL_GRAIN", "1")
	for _, restart := range []bool{false, true} { //nolint:paralleltest // Subtests inherit the parent's process-wide t.Setenv setting.
		t.Run(fmt.Sprintf("restart=%v", restart), func(t *testing.T) {
			files := coherenceBatchFiles()
			path := coherenceProject + "/src/data.json"
			files[path] = `{"value":1}`
			files[coherenceProject+"/src/json-consumer.ts"] = `import data from "./data.json"; export const value: number = data.value;`
			cold := coherenceProgram(t, files, nil, false, true)
			coherenceAssertDiagnostics(t, cold, coherenceProgram(t, files, nil, false, true), 0)
			coherenceEmit(t, cold, files)
			files[path] = `{"value":"changed"}`
			files[coherenceDepB] = coherenceGlobalChange
			batch := coherenceProgram(t, files, cold, restart, true)
			coherenceAssertDiagnostics(t, batch, coherenceProgram(t, files, nil, false, true), 2322)
			if !strings.HasPrefix(batch.symbolFallback, "global-scope") {
				t.Fatalf("expected JSON batch global fallback, got %q", batch.symbolFallback)
			}
			coherenceEmit(t, batch, files)
			coherenceAssertMetadata(t, batch, path, "default", ComputeHash(files[path], false))
			coherenceAssertMetadata(t, cold, path, "default", ComputeHash(`{"value":1}`, false))
			files[path] = `{"value":1}`
			reverted := coherenceProgram(t, files, batch, restart, true)
			coherenceAssertDiagnostics(t, reverted, coherenceProgram(t, files, nil, false, true), 0)
			if reverted.symbolFallback != "" {
				t.Fatalf("ordinary JSON revert must use symbol walk, got fallback %q", reverted.symbolFallback)
			}
			coherenceEmit(t, reverted, files)
			coherenceAssertMetadata(t, reverted, path, "default", ComputeHash(files[path], false))
			coherenceAssertMetadata(t, batch, path, "default", ComputeHash(`{"value":"changed"}`, false))
		})
	}
}

func coherenceBatchFiles() map[string]string {
	return map[string]string{
		"/home/src/workspaces/project/tsconfig.json": stringtestutil.Dedent(`
				{
					"compilerOptions": {
						"composite": true,
						"outDir": "dist",
						"strict": true
					},
					"include": ["src/**/*"]
				}
			`),
		"/home/src/workspaces/project/src/consumer.ts": stringtestutil.Dedent(`
				import type { Kind } from "./middle";
				export function describe(kind: Kind): string {
					switch (kind) {
						case "a":
							return "first";
						case "b":
							return "second";
					}
				}
			`),
		"/home/src/workspaces/project/src/middle.ts": `export type { Kind } from "dep-a";`,
		"/home/src/workspaces/project/src/env.ts":    `import "dep-b";`,
		"/home/src/workspaces/project/node_modules/dep-a/package.json": stringtestutil.Dedent(`
				{
					"name": "dep-a",
					"version": "1.0.0",
					"types": "index.d.ts"
				}
			`),
		"/home/src/workspaces/project/node_modules/dep-a/index.d.ts": `export type Kind = "a" | "b";`,
		"/home/src/workspaces/project/node_modules/dep-b/package.json": stringtestutil.Dedent(`
				{
					"name": "dep-b",
					"version": "1.0.0",
					"types": "index.d.ts"
				}
			`),
		"/home/src/workspaces/project/node_modules/dep-b/index.d.ts": stringtestutil.Dedent(`
				declare global {
					interface DepBGlobal {
						marker: string;
					}
				}
				export {};
			`),
	}
}

// Format 3 could persist incoherent metadata; format 4 belongs to a separate
// experiment. Neither is interchangeable with the coherence-fixed format 5.
func TestSymbolMetadataCoherenceCacheFormat(t *testing.T) {
	for _, enabled := range []bool{false, true} {
		t.Run(fmt.Sprintf("symbol=%v", enabled), func(t *testing.T) {
			flag := "0"
			want := 0
			if enabled {
				flag = "1"
				want = 5
			}
			t.Setenv("TS_SYMBOL_GRAIN", flag)
			for _, format := range []int{0, 3, 4, 5} {
				info := &BuildInfo{Version: core.Version(), SymbolGrainFormat: format}
				if got := info.IsValidVersion(); got != (format == want) {
					t.Errorf("enabled=%v format=%d accepted=%v, want=%v", enabled, format, got, format == want)
				}
			}
		})
	}
}

// middle.ts does not change. Its inferred exported type does change through a
// global declaration, so invalidating only changed-file metadata is insufficient.
// NoEmit still persists coherent metadata through the ordinary build-info path.
func TestSymbolMetadataUnchangedInferredDependentNoEmit(t *testing.T) {
	t.Setenv("TS_SYMBOL_GRAIN", "1")
	for _, restart := range []bool{false, true} { //nolint:paralleltest // Subtests inherit the parent's process-wide t.Setenv setting.
		t.Run(fmt.Sprintf("restart=%v", restart), func(t *testing.T) {
			files := coherenceBatchFiles()
			files[coherenceProject+"/src/middle.ts"] = `import "dep-b"; export const kind = globalKind;`
			files[coherenceProject+"/src/env.ts"] = `import "dep-b"; import "dep-a";`
			files[coherenceProject+"/src/consumer.ts"] = `import { kind } from "./middle"; export function describe(): string { switch (kind) { case "a": return "first"; case "b": return "second"; } }`
			globalAB := `declare global { var globalKind: "a" | "b"; } export {};`
			globalABC := `declare global { var globalKind: "a" | "b" | "c"; } export {};`
			files[coherenceDepB] = globalAB
			cold := coherenceProgram(t, files, nil, false, false, true)
			coherenceAssertDiagnostics(t, cold, coherenceProgram(t, files, nil, false, false, true), 0)
			coherenceEmit(t, cold, files)
			middlePath := tspath.PathKeyFromCanonical(coherenceProject + "/src/middle.ts")
			before, ok := cold.snapshot.symbolMetadata.Load(middlePath)
			if !ok {
				t.Fatal("missing cold inferred export metadata")
			}
			files[coherenceDepA] = coherenceABC
			files[coherenceDepB] = globalABC
			batch := coherenceProgram(t, files, cold, restart, false, true)
			fresh := coherenceProgram(t, files, nil, false, false, true)
			coherenceAssertDiagnostics(t, batch, fresh, 2366)
			if !strings.HasPrefix(batch.symbolFallback, "global-scope") {
				t.Fatalf("expected global fallback, got %q", batch.symbolFallback)
			}
			coherenceEmit(t, batch, files)
			coherenceEmit(t, fresh, maps.Clone(files))
			actual, ok := batch.snapshot.symbolMetadata.Load(middlePath)
			expected, freshOK := fresh.snapshot.symbolMetadata.Load(middlePath)
			if !ok || !freshOK || !reflect.DeepEqual(actual, expected) {
				t.Fatalf("unchanged inferred dependent metadata differs: actual=%+v fresh=%+v", actual, expected)
			}
			if reflect.DeepEqual(before.Signatures, actual.Signatures) {
				t.Fatal("fixture did not change the inferred exported signature")
			}
			files[coherenceDepB] = globalAB
			reverted := coherenceProgram(t, files, batch, restart, false, true)
			fresh = coherenceProgram(t, files, nil, false, false, true)
			coherenceAssertDiagnostics(t, reverted, fresh, 0)
			coherenceEmit(t, reverted, files)
			coherenceEmit(t, fresh, maps.Clone(files))
			actual, ok = reverted.snapshot.symbolMetadata.Load(middlePath)
			expected, freshOK = fresh.snapshot.symbolMetadata.Load(middlePath)
			if !ok || !freshOK || !reflect.DeepEqual(actual, expected) {
				t.Fatalf("reverted inferred dependent metadata differs: actual=%+v fresh=%+v", actual, expected)
			}
		})
	}
}

package incremental

import (
	"maps"
	"strings"
	"testing"

	"github.com/microsoft/TypeScript/tsc/internal/compiler"
	"github.com/microsoft/TypeScript/tsc/internal/core"
	"github.com/microsoft/TypeScript/tsc/internal/tspath"
)

func TestSymbolWalkCompilerCompatibility(t *testing.T) {
	t.Setenv("TS_SYMBOL_GRAIN", "1")
	//nolint:paralleltest // Subtests inherit the parent's process-wide t.Setenv setting.
	for _, test := range []struct {
		name, before, after, consumer string
		decorators                    bool
		diagnostic                    int
	}{
		{"export-equals-default-import", `const value={x:1}; export=value;`, `const value={x:"oops"}; export=value;`, `import value from "./a"; export const x:number=value.x;`, false, 2322},
		{"decorator-js", `export class A {}`, `export interface A {}`, `import { A } from "./a"; function dec(...args:any[]) {} export class B { @dec a!:A; }`, true, 0},
	} {
		t.Run(test.name, func(t *testing.T) {
			options := &core.CompilerOptions{Incremental: core.TSTrue, Declaration: core.TSTrue, Strict: core.TSTrue, SkipLibCheck: core.TSTrue, SingleThreaded: core.TSTrue, ESModuleInterop: core.TSTrue, Target: core.ScriptTargetES2015, Module: core.ModuleKindCommonJS, OutDir: "/project/out", TsBuildInfoFile: "/project/out/state.tsbuildinfo"}
			if test.decorators {
				options.ExperimentalDecorators = core.TSTrue
				options.EmitDecoratorMetadata = core.TSTrue
			}
			files := map[string]string{"/lib/lib.d.ts": deletionTestLib, "/project/a.ts": test.before, "/project/b.ts": test.consumer}
			emit := func(p *Program, outputs map[string]string) {
				p.Emit(t.Context(), compiler.EmitOptions{WriteFile: func(name tspath.RootedFilePath, text string, _ *compiler.WriteFileData) error {
					outputs[name.AsString()] = text
					return nil
				}})
			}
			old := newDeletionTestProgram(files, []string{"a.ts", "b.ts"}, options, nil)
			if diagnostics := old.GetSemanticDiagnostics(t.Context(), nil); len(diagnostics) != 0 {
				t.Fatalf("unexpected cold diagnostics: %v", diagnostics)
			}
			oldOutputs := map[string]string{}
			emit(old, oldOutputs)
			files["/project/a.ts"] = test.after
			incremental := newDeletionTestProgram(files, []string{"a.ts", "b.ts"}, options, old)
			fresh := newDeletionTestProgram(files, []string{"a.ts", "b.ts"}, options, nil)
			actual := incremental.GetSemanticDiagnostics(t.Context(), nil)
			expected := fresh.GetSemanticDiagnostics(t.Context(), nil)
			if len(actual) != len(expected) {
				t.Fatalf("incremental diagnostics=%d fresh=%d", len(actual), len(expected))
			}
			if test.diagnostic == 0 && len(expected) != 0 || test.diagnostic != 0 && (len(expected) != 1 || expected[0].Code() != int32(test.diagnostic)) {
				t.Fatalf("unexpected fresh diagnostics: %v", expected)
			}
			for i := range actual {
				if actual[i].Code() != expected[i].Code() {
					t.Fatalf("diagnostic code mismatch")
				}
			}
			actualOutputs := maps.Clone(oldOutputs)
			freshOutputs := map[string]string{}
			emit(incremental, actualOutputs)
			emit(fresh, freshOutputs)
			for name, text := range freshOutputs {
				if strings.HasSuffix(name, ".js") || strings.HasSuffix(name, ".d.ts") {
					if actualOutputs[name] != text {
						t.Fatalf("incremental output differs from fresh: %s", name)
					}
				}
			}
		})
	}
}

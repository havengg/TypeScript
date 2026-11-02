package incremental

import (
	"reflect"
	"strings"
	"testing"

	"github.com/microsoft/TypeScript/tsc/internal/json"

	"github.com/microsoft/TypeScript/tsc/internal/ast"
	"github.com/microsoft/TypeScript/tsc/internal/core"
	"github.com/microsoft/TypeScript/tsc/internal/parser"
	"github.com/microsoft/TypeScript/tsc/internal/tspath"
)

func symbolTestResolve(spec string) []string {
	if spec == "missing" {
		return nil
	}
	return []string{"/" + strings.TrimPrefix(spec, "./")}
}

func symbolTestParse(text string) SymbolMetadata {
	return ParseDeclarationSymbolMetadata(text, "/f.ts", "/f.d.ts", symbolTestResolve)
}

func symbolTestRefs(t *testing.T, got []SymbolReference, want ...SymbolReference) {
	t.Helper()
	if len(got) == 0 && len(want) == 0 {
		return
	}
	if !reflect.DeepEqual(got, want) {
		t.Fatalf("references got %#v want %#v", got, want)
	}
}

func TestSymbolMetadataPrivateClosureAndOverloads(t *testing.T) {
	t.Parallel()
	a := symbolTestParse(`import type {A as B} from "./a"; type P={x:B}; export declare const v:P;`)
	symbolTestRefs(t, a.Dependencies["v"], SymbolReference{File: "/a", Name: "A"})
	b := symbolTestParse(`import type {A as B} from "./a"; type P={y:B}; export declare const v:P;`)
	if a.Signatures["v"] == b.Signatures["v"] {
		t.Fatal("private dependency did not change signature")
	}
	b = symbolTestParse(`import type {A as B,C} from "./a"; type P={x:B}; export declare const v:P;`)
	if a.Signatures["v"] == b.Signatures["v"] {
		t.Fatal("referenced import statement absent from closure")
	}
	b = symbolTestParse(`import type {A as B} from "./a"; type P={x:B}; type Unused=number; export declare const v:P;`)
	if a.Signatures["v"] != b.Signatures["v"] {
		t.Fatal("unused declaration changed signature")
	}
	a = symbolTestParse(`declare function fn(x:string):void; declare function fn(x:number):void; export {fn as renamed};`)
	b = symbolTestParse(`declare function fn(x:string):void; declare function fn(x:boolean):void; export {fn as renamed};`)
	if a.Signatures["renamed"] == b.Signatures["renamed"] || len(a.Signatures) != 1 || len(a.Aliases) != 0 {
		t.Fatal("local export overload group not materialized")
	}
}

func TestSymbolMetadataBoundImportIdentifiers(t *testing.T) {
	t.Parallel()
	a := symbolTestParse(`import type {T} from "./m"; export const other:T; export function f<T>(x:T):T;`)
	symbolTestRefs(t, a.Dependencies["other"], SymbolReference{File: "/m", Name: "T"})
	symbolTestRefs(t, a.Dependencies["f"])
	b := symbolTestParse(`import type {U} from "./different"; export const other:U; export function f<T>(x:T):T;`)
	if a.Signatures["f"] != b.Signatures["f"] {
		t.Fatal("generic shadow pulled import into hash")
	}
	a = symbolTestParse(`type T={v:string}; export function f<T>(x:T):T;`)
	b = symbolTestParse(`type T={v:number}; export function f<T>(x:T):T;`)
	if a.Signatures["f"] != b.Signatures["f"] {
		t.Fatal("generic shadow pulled private declaration into hash")
	}
	a = symbolTestParse(`import * as ns from "./m"; export function f(ns:{N:string}):typeof ns.N;`)
	symbolTestRefs(t, a.Dependencies["f"])
	a = symbolTestParse(`import type {T} from "./m"; export function f(T:number):T;`)
	symbolTestRefs(t, a.Dependencies["f"], SymbolReference{File: "/m", Name: "T"})
	for _, text := range []string{`import type {T} from "./m"; export type X<U> = U extends infer T ? T : never;`, `import type {T} from "./m"; export type X<U> = {[T in keyof U]:T};`} {
		a = symbolTestParse(text)
		symbolTestRefs(t, a.Dependencies["X"])
	}
	for _, text := range []string{`import type {T} from "./m"; export type X<U> = U extends infer T ? T : T;`, `import type {T} from "./m"; export type X = {[T in keyof T]:T};`} {
		a = symbolTestParse(text)
		symbolTestRefs(t, a.Dependencies["X"], SymbolReference{File: "/m", Name: "T"})
	}
}

func TestSymbolMetadataQualifiedTypeQueriesAndAliases(t *testing.T) {
	t.Parallel()
	a := symbolTestParse(`import * as ns from "./a"; export const x:ns.N.X; export const y:typeof ns; export const z:typeof import("./b"); export const w:typeof import("./c").T.U;`)
	symbolTestRefs(t, a.Dependencies["x"], SymbolReference{File: "/a", Name: "N"})
	symbolTestRefs(t, a.Dependencies["y"], SymbolReference{File: "/a", Name: "*"})
	symbolTestRefs(t, a.Dependencies["z"], SymbolReference{File: "/b", Name: "*"})
	symbolTestRefs(t, a.Dependencies["w"], SymbolReference{File: "/c", Name: "T"})
	a = symbolTestParse(`import {A as B} from "./a"; export { B as C }; export { "D" as "E" } from "./d"; export * from "./star";`)
	symbolTestRefs(t, a.Aliases["C"], SymbolReference{File: "/a", Name: "A"})
	symbolTestRefs(t, a.Aliases["E"], SymbolReference{File: "/d", Name: "D"})
	if len(a.Signatures) != 0 || !reflect.DeepEqual(a.Stars, []string{"/star"}) {
		t.Fatal("foreign aliases have own signatures")
	}
	a = symbolTestParse(`export import A = require("./a");`)
	symbolTestRefs(t, a.Aliases["A"], SymbolReference{File: "/a", Name: "*"})
	a = symbolTestParse(`import * as ns from "./a"; import A = ns.N.X; export const v:A;`)
	symbolTestRefs(t, a.Dependencies["v"], SymbolReference{File: "/a", Name: "N"})
}

func TestSymbolMetadataSameFileAndAugmentation(t *testing.T) {
	t.Parallel()
	a := symbolTestParse(`export interface T {v:string}; export const a:T,b:T;`)
	symbolTestRefs(t, a.Dependencies["a"], SymbolReference{File: "/f.ts", Name: "T"})
	if a.Signatures["a"] != a.Signatures["b"] {
		t.Fatal("one statement should share signature")
	}
	a = symbolTestParse(`export interface T{}; export function f<T>(x:T):T;`)
	symbolTestRefs(t, a.Dependencies["f"])
	a = symbolTestParse(`export {}; declare module "./empty" { interface T {x:number} namespace N { interface Inner {} } function f():void; type A=number; const a:string,b:number; }`)
	if !reflect.DeepEqual(a.AugmentationExports["/empty"], []string{"A", "N", "T", "a", "b", "f"}) {
		t.Fatalf("augmentation exports %#v", a.AugmentationExports)
	}
	a = symbolTestParse(`export {}; declare module "./empty" { interface Local {} export {Local as Public}; const v:Local; export default v; export type Named=number; }`)
	if !reflect.DeepEqual(a.AugmentationExports["/empty"], []string{"Named", "Public", "default"}) {
		t.Fatalf("explicit augmentation exports %#v", a.AugmentationExports)
	}
	a = symbolTestParse(`export interface X{}; declare const local:number; export = local;`)
	if len(a.Signatures) != 1 || a.Signatures["*"] == "" || len(a.Aliases) != 0 {
		t.Fatal("export= must be single export")
	}
	a = symbolTestParse(`import {X} from "missing"; export const x:X;`)
	if len(a.Diagnostics) == 0 {
		t.Fatal("missing resolution silently omitted")
	}
}

func TestSymbolMetadataSourceSyntax(t *testing.T) {
	t.Parallel()
	file := parser.ParseSourceFile(ast.SourceFileParseOptions{FileName: tspath.RootedFilePath("/f.tsx"), PathKey: tspath.PathKey("/f.tsx")}, `import * as ns from "./a"; import type {T as U} from "./m"; import data from "./data.json"; import Q = require("./q"); const el=<ns.View/>; type X=typeof import("./b").N; type Y=import("./c").T; const ignored=require("./not-specified");`, core.ScriptKindTSX)
	refs := CollectNamedImports(file, symbolTestResolve)
	symbolTestRefs(t, refs, SymbolReference{File: "/a", Name: "*"}, SymbolReference{File: "/b", Name: "*"}, SymbolReference{File: "/c", Name: "T"}, SymbolReference{File: "/data.json", Name: "*"}, SymbolReference{File: "/m", Name: "T"}, SymbolReference{File: "/q", Name: "*"})
}

// Goldens were produced by the replacement-gated standalone parser.mjs, with
// the subsequently authorized same-file exported-reference extension merged.
func TestSymbolMetadataExactJavaScriptGoldens(t *testing.T) {
	t.Parallel()
	const goldenJSON = `[{"text":"import type {A as B} from \"./a\"; type P={x:B}; export declare const v:P;","expected":{"signatures":{"v":"8647f33ab544e2ae80ccaa67f5bf283263b165a3fd5b74e96c8500cfa17196a2"},"dependencies":{"v":[{"file":"/a","name":"A"}]},"aliases":{},"stars":[],"global":false,"augmentations":[],"augmentationExports":{}}},{"text":"import type {T} from \"./m\"; export const other:T; export function f<T>(x:T):T;","expected":{"signatures":{"other":"552be09e171dc0b8e5f50642b2db236eda671fc1d6f997df6b6bdab6693f12fa","f":"a312afbe35d57ea793b576ed06d7afde604e8e7184eb1b55447813fb927d616c"},"dependencies":{"other":[{"file":"/m","name":"T"}],"f":[]},"aliases":{},"stars":[],"global":false,"augmentations":[],"augmentationExports":{}}},{"text":"import * as ns from \"./a\"; export const x:ns.N.X; export const y:typeof ns; export const z:typeof import(\"./b\"); export const w:typeof import(\"./c\").T.U;","expected":{"signatures":{"x":"b63388784b368bb8c1f892af38ee8e9858e8309115392da74486e0d230fc2966","y":"a4d6931eeb7a9f788a8caa878b2aa6bce69bbaa1a7bc04b41c98921579927ff4","z":"c208af186e0b5b387dc34b96af70b0babd85363c1445d6f55a22a0d993af884a","w":"16d2f7a715d2cfa919fd9370c90df0d17cde2a4484e92fb9865a36e16f14f66e"},"dependencies":{"x":[{"file":"/a","name":"N"}],"y":[{"file":"/a","name":"*"}],"z":[{"file":"/b","name":"*"}],"w":[{"file":"/c","name":"T"}]},"aliases":{},"stars":[],"global":false,"augmentations":[],"augmentationExports":{}}},{"text":"import {A as B} from \"./a\"; export { B as C }; export { \"D\" as \"E\" } from \"./d\"; export * from \"./star\";","expected":{"signatures":{},"dependencies":{},"aliases":{"C":[{"file":"/a","name":"A"}],"E":[{"file":"/d","name":"D"}]},"stars":["/star"],"global":false,"augmentations":[],"augmentationExports":{}}},{"text":"declare function fn(x:string):void; declare function fn(x:number):void; export {fn as renamed};","expected":{"signatures":{"renamed":"c1051e8a497c47d253e3858f137cc74787fad0cb76d51a9729ea0a59ccd2e461"},"dependencies":{"renamed":[]},"aliases":{},"stars":[],"global":false,"augmentations":[],"augmentationExports":{}}},{"text":"export interface T {v:string}; export const a:T,b:T;","expected":{"signatures":{"T":"7d288c4347cc1f706a176c0fefe6e302bb2b19ebd89da5c3f3c8bbcf5a143f9d","a":"f3a855f2f0cf673c84682a4e4b91c648e743364a110826c83e25f044910c201d","b":"f3a855f2f0cf673c84682a4e4b91c648e743364a110826c83e25f044910c201d"},"dependencies":{"T":[],"a":[{"file":"/f.ts","name":"T"}],"b":[{"file":"/f.ts","name":"T"}]},"aliases":{},"stars":[],"global":false,"augmentations":[],"augmentationExports":{}}},{"text":"export {}; declare module \"./empty\" { interface T {x:number} namespace N { interface Inner {} } function f():void; type A=number; const a:string,b:number; }","expected":{"signatures":{},"dependencies":{},"aliases":{},"stars":[],"global":false,"augmentations":["/empty"],"augmentationExports":{"/empty":["A","N","T","a","b","f"]}}},{"text":"export interface X{}; declare const local:number; export = local;","expected":{"signatures":{"*":"305588fec7a11c604298303e2c155d8e67b40e30e03007b6cb3e4e48b05a0b23"},"dependencies":{"*":[]},"aliases":{},"stars":[],"global":false,"augmentations":[],"augmentationExports":{}}}]`
	var fixtures []struct {
		Text     string         `json:"text"`
		Expected SymbolMetadata `json:"expected"`
	}
	if err := json.Unmarshal([]byte(goldenJSON), &fixtures); err != nil {
		t.Fatal(err)
	}
	for i, fixture := range fixtures {
		got := symbolTestParse(fixture.Text)
		if !reflect.DeepEqual(got, fixture.Expected) {
			g, _ := json.Marshal(got)
			w, _ := json.Marshal(fixture.Expected)
			t.Fatalf("fixture %d\ngot  %s\nwant %s", i, g, w)
		}
	}
}

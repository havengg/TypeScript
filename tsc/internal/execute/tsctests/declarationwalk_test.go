package tsctests

import (
	"fmt"
	"testing"
)

func TestBuildDeclarationReferenceFixpoint(t *testing.T) {
	t.Parallel()
	test := &tscInput{
		subScenario:     "unchanged bridge wakes when a later frontier enters its declaration reference set",
		cwd:             "/home/src/workspaces/project",
		commandLineArgs: []string{"-b"},
		files: FileMap{
			"/home/src/workspaces/project/tsconfig.json": `{
				"compilerOptions": { "target": "es2022", "module": "esnext",
					"moduleResolution": "bundler", "composite": true,
					"declaration": true, "outDir": "out", "strict": true }
			}`,
			"/home/src/workspaces/project/0-left.ts":  `export const token = 1;`,
			"/home/src/workspaces/project/z-right.ts": `export interface Root { field: string }`,
			"/home/src/workspaces/project/middle.ts":  `export type { Root as Alias } from "./z-right";`,
			"/home/src/workspaces/project/bridge.ts": `
				import { token } from "./0-left";
				void token;
				export declare function read(): import("./middle").Alias;
			`,
			"/home/src/workspaces/project/consumer.ts": `
				import { read } from "./bridge";
				export const value: string = read().field;
			`,
		},
		edits: []*tscEdit{
			noChange,
			{
				caption: "both roots change; bridge is visited before middle",
				edit: func(sys *TestSys) {
					sys.appendFile("/home/src/workspaces/project/0-left.ts", "\nexport const extra = 2;")
					sys.writeFileNoError("/home/src/workspaces/project/z-right.ts", "export interface Root { field: number }")
				},
			},
			{
				caption: "restore the right-hand shape",
				edit: func(sys *TestSys) {
					sys.writeFileNoError("/home/src/workspaces/project/z-right.ts", "export interface Root { field: string }")
				},
			},
			noChange,
		},
	}
	test.run(t, "declarationReferenceFixpoint")
}

func TestBuildDeclarationReferenceLeafStop(t *testing.T) {
	t.Parallel()
	test := declarationWalkInput("changed leaf stops at an unchanged importer whose declaration does not reference it")
	test.files[declarationWalkRoot+"left.ts"] = `export const token: number = 1;`
	test.files[declarationWalkRoot+"bridge.ts"] = `import { token } from "./left"; void token; export const stable: number = 1;`
	test.files[declarationWalkRoot+"middle.ts"] = `export { stable } from "./bridge";`
	test.files[declarationWalkRoot+"consumer.ts"] = `import { stable } from "./middle"; export const value: number = stable;`
	test.edits = []*tscEdit{
		{caption: "establish declaration signatures", edit: func(sys *TestSys) { sys.appendFile(declarationWalkRoot+"left.ts", "\n") }},
		{caption: "add an export to the leaf; stop after bridge", edit: func(sys *TestSys) { sys.appendFile(declarationWalkRoot+"left.ts", "\nexport const extra = 2;") }},
		noChange,
	}
	test.run(t, "declarationReferenceLeafStop")
}

func TestBuildDeclarationReferenceUnchangedBridge(t *testing.T) {
	t.Parallel()
	test := declarationWalkInput("unchanged import type bridge propagates an incompatible member change and its reversal")
	test.files[declarationWalkRoot+"left.ts"] = `export interface Root { field: string }`
	test.files[declarationWalkRoot+"bridge.ts"] = `export declare function read(): import("./left").Root;`
	test.files[declarationWalkRoot+"consumer.ts"] = `import { read } from "./bridge"; export const value: string = read().field;`
	test.edits = declarationWalkMemberEdits()
	test.run(t, "declarationReferenceUnchangedBridge")
}

func TestBuildDeclarationReferenceExportFrom(t *testing.T) {
	t.Parallel()
	test := declarationWalkInput("export from chain propagates an incompatible member change and its reversal")
	test.files[declarationWalkRoot+"left.ts"] = `export interface Root { field: string }`
	test.files[declarationWalkRoot+"bridge.ts"] = `export type { Root } from "./left";`
	test.files[declarationWalkRoot+"middle.ts"] = `export type { Root } from "./bridge";`
	test.files[declarationWalkRoot+"consumer.ts"] = `import type { Root } from "./middle"; export function read(value: Root): string { return value.field; }`
	test.edits = declarationWalkMemberEdits()
	test.run(t, "declarationReferenceExportFrom")
}

func TestBuildDeclarationReferenceGlobalScope(t *testing.T) {
	t.Parallel()
	test := declarationWalkInput("global scope reached through an import type reference refreshes every file")
	test.files[declarationWalkRoot+"left.ts"] = `export interface Root { field: string }`
	test.files[declarationWalkRoot+"bridge.ts"] = `declare const current: import("./left").Root;`
	test.files[declarationWalkRoot+"consumer.ts"] = `export const value: string = current.field;`
	test.files[declarationWalkRoot+"right.ts"] = `export const unrelated: number = 1;`
	test.edits = declarationWalkMemberEdits()
	test.run(t, "declarationReferenceGlobalScope")
}

func TestBuildDeclarationReferenceIssue63664(t *testing.T) {
	t.Parallel()
	test := declarationWalkInput("issue 63664 native command line reproduction reduced to twenty leaves with rootDir src")
	// Keep barrel text equal to its emitted declaration so the origin edit
	// reaches the second affected-file phase.
	test.files = FileMap{
		declarationWalkRoot + "tsconfig.json": `{
   "compilerOptions": { "target": "es2022", "module": "esnext",
    "moduleResolution": "bundler", "strict": true, "incremental": true,
    "rootDir": "src", "outDir": "out", "tsBuildInfoFile": "proj.tsbuildinfo" },
   "include": ["src/**/*.ts"]
  }`,
		declarationWalkRoot + "src/left.ts":   `export interface Root { field: number } export const LEFT = 1;`,
		declarationWalkRoot + "src/bridge.ts": "export * from \"./left\";\n",
		declarationWalkRoot + "src/middle.ts": `
   import { LEFT, Root } from "./bridge";
   export const MIDDLE: number = LEFT + 1;
   export function read(value: Root): number { return value.field + MIDDLE; }
   export const enum Mode { A = 1, B = 2 }
  `,
		declarationWalkRoot + "src/index.ts": "export * from \"./middle\";\n",
	}
	for i := range 20 {
		test.files[fmt.Sprintf("%ssrc/consumer%d.ts", declarationWalkRoot, i)] = fmt.Sprintf(`import { MIDDLE } from "./index"; export const value%d: number = MIDDLE + %d;`, i, i)
	}
	test.edits = []*tscEdit{
		{caption: "whitespace in origin", edit: func(sys *TestSys) { sys.appendFile(declarationWalkRoot+"src/left.ts", "\n") }},
		{caption: "first whitespace in middle", edit: func(sys *TestSys) { sys.appendFile(declarationWalkRoot+"src/middle.ts", "\n") }},
		{caption: "repeat whitespace in middle", edit: func(sys *TestSys) { sys.appendFile(declarationWalkRoot+"src/middle.ts", "\n") }},
	}
	test.run(t, "declarationReferenceIssue63664")
}

const declarationWalkRoot = "/home/src/workspaces/project/"

func declarationWalkInput(caption string) *tscInput {
	return &tscInput{
		subScenario:     caption,
		cwd:             "/home/src/workspaces/project",
		commandLineArgs: []string{"-b"},
		files: FileMap{
			declarationWalkRoot + "tsconfig.json": `{
    "compilerOptions": { "target": "es2022", "module": "esnext",
     "moduleResolution": "bundler", "composite": true,
     "declaration": true, "rootDir": ".", "outDir": "out", "strict": true }
   }`,
		},
	}
}

func declarationWalkMemberEdits() []*tscEdit {
	return []*tscEdit{
		{caption: "establish declaration signatures", edit: func(sys *TestSys) { sys.appendFile(declarationWalkRoot+"left.ts", "\n") }},
		{caption: "change member to number", edit: func(sys *TestSys) {
			sys.writeFileNoError(declarationWalkRoot+"left.ts", "export interface Root { field: number }")
		}},
		{caption: "restore member to string", edit: func(sys *TestSys) {
			sys.writeFileNoError(declarationWalkRoot+"left.ts", "export interface Root { field: string }")
		}},
		noChange,
	}
}

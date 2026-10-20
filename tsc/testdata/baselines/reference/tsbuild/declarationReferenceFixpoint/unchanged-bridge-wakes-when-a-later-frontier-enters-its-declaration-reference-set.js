currentDirectory::/home/src/workspaces/project
useCaseSensitiveFileNames::true
Input::
//// [/home/src/workspaces/project/0-left.ts] *new* 
export const token = 1;
//// [/home/src/workspaces/project/bridge.ts] *new* 

				import { token } from "./0-left";
				void token;
				export declare function read(): import("./middle").Alias;
			
//// [/home/src/workspaces/project/consumer.ts] *new* 

				import { read } from "./bridge";
				export const value: string = read().field;
			
//// [/home/src/workspaces/project/middle.ts] *new* 
export type { Root as Alias } from "./z-right";
//// [/home/src/workspaces/project/tsconfig.json] *new* 
{
				"compilerOptions": { "target": "es2022", "module": "esnext",
					"moduleResolution": "bundler", "composite": true,
					"declaration": true, "outDir": "out", "strict": true }
			}
//// [/home/src/workspaces/project/z-right.ts] *new* 
export interface Root { field: string }

tsgo -b
ExitStatus:: Success
Output::
//// [/home/src/tslibs/TS/Lib/lib.es2022.full.d.ts] *Lib*
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
interface SymbolConstructor {
    (desc?: string | number): symbol;
    for(name: string): symbol;
    readonly toStringTag: symbol;
}
declare var Symbol: SymbolConstructor;
interface Symbol {
    readonly [Symbol.toStringTag]: string;
}
declare const console: { log(msg: any): void; };
//// [/home/src/workspaces/project/out/0-left.d.ts] *new* 
export declare const token = 1;

//// [/home/src/workspaces/project/out/0-left.js] *new* 
export const token = 1;

//// [/home/src/workspaces/project/out/bridge.d.ts] *new* 
export declare function read(): import("./middle").Alias;

//// [/home/src/workspaces/project/out/bridge.js] *new* 
import { token } from "./0-left";
void token;

//// [/home/src/workspaces/project/out/consumer.d.ts] *new* 
export declare const value: string;

//// [/home/src/workspaces/project/out/consumer.js] *new* 
import { read } from "./bridge";
export const value = read().field;

//// [/home/src/workspaces/project/out/middle.d.ts] *new* 
export type { Root as Alias } from "./z-right";

//// [/home/src/workspaces/project/out/middle.js] *new* 
export {};

//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo] *new* 
{"version":"FakeTSVersion","root":[[2,6]],"fileNames":["lib.es2022.full.d.ts","../0-left.ts","../z-right.ts","../middle.ts","../bridge.ts","../consumer.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"28f6c23b238fcd1039a2430a259efc10-export const token = 1;","signature":"9958e531211d10e6b836f6425d76afdd-export declare const token = 1;\n","impliedNodeFormat":1},{"version":"3cd6619c62f05bd88ddb88458b33c76d-export interface Root { field: string }","signature":"2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n","impliedNodeFormat":1},{"version":"c815f8ebdd8ce509e55e9b7990c6d3bf-export type { Root as Alias } from \"./z-right\";","signature":"ba9231b6d561eeb1b732b806695d6276-export type { Root as Alias } from \"./z-right\";\n","impliedNodeFormat":1},{"version":"7e9406e4d07b9111072e6965579fa6fe-\n\t\t\t\timport { token } from \"./0-left\";\n\t\t\t\tvoid token;\n\t\t\t\texport declare function read(): import(\"./middle\").Alias;\n\t\t\t","signature":"292bad3b72e7aa92dae148d42366d9fb-export declare function read(): import(\"./middle\").Alias;\n","impliedNodeFormat":1},{"version":"524939b9271cb11f9623f42661bcd03d-\n\t\t\t\timport { read } from \"./bridge\";\n\t\t\t\texport const value: string = read().field;\n\t\t\t","signature":"d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n","impliedNodeFormat":1}],"fileIdsList":[[2,4],[5],[3]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","strict":true,"target":9},"referencedMap":[[5,1],[6,2],[4,3]],"latestChangedDtsFile":"./consumer.d.ts"}
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo.readable.baseline.txt] *new* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "../0-left.ts",
        "../z-right.ts",
        "../middle.ts",
        "../bridge.ts",
        "../consumer.ts"
      ],
      "original": [
        2,
        6
      ]
    }
  ],
  "fileNames": [
    "lib.es2022.full.d.ts",
    "../0-left.ts",
    "../z-right.ts",
    "../middle.ts",
    "../bridge.ts",
    "../consumer.ts"
  ],
  "fileInfos": [
    {
      "fileName": "lib.es2022.full.d.ts",
      "version": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "signature": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../0-left.ts",
      "version": "28f6c23b238fcd1039a2430a259efc10-export const token = 1;",
      "signature": "9958e531211d10e6b836f6425d76afdd-export declare const token = 1;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "28f6c23b238fcd1039a2430a259efc10-export const token = 1;",
        "signature": "9958e531211d10e6b836f6425d76afdd-export declare const token = 1;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../z-right.ts",
      "version": "3cd6619c62f05bd88ddb88458b33c76d-export interface Root { field: string }",
      "signature": "2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "3cd6619c62f05bd88ddb88458b33c76d-export interface Root { field: string }",
        "signature": "2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../middle.ts",
      "version": "c815f8ebdd8ce509e55e9b7990c6d3bf-export type { Root as Alias } from \"./z-right\";",
      "signature": "ba9231b6d561eeb1b732b806695d6276-export type { Root as Alias } from \"./z-right\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "c815f8ebdd8ce509e55e9b7990c6d3bf-export type { Root as Alias } from \"./z-right\";",
        "signature": "ba9231b6d561eeb1b732b806695d6276-export type { Root as Alias } from \"./z-right\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../bridge.ts",
      "version": "7e9406e4d07b9111072e6965579fa6fe-\n\t\t\t\timport { token } from \"./0-left\";\n\t\t\t\tvoid token;\n\t\t\t\texport declare function read(): import(\"./middle\").Alias;\n\t\t\t",
      "signature": "292bad3b72e7aa92dae148d42366d9fb-export declare function read(): import(\"./middle\").Alias;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "7e9406e4d07b9111072e6965579fa6fe-\n\t\t\t\timport { token } from \"./0-left\";\n\t\t\t\tvoid token;\n\t\t\t\texport declare function read(): import(\"./middle\").Alias;\n\t\t\t",
        "signature": "292bad3b72e7aa92dae148d42366d9fb-export declare function read(): import(\"./middle\").Alias;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "524939b9271cb11f9623f42661bcd03d-\n\t\t\t\timport { read } from \"./bridge\";\n\t\t\t\texport const value: string = read().field;\n\t\t\t",
      "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "524939b9271cb11f9623f42661bcd03d-\n\t\t\t\timport { read } from \"./bridge\";\n\t\t\t\texport const value: string = read().field;\n\t\t\t",
        "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../0-left.ts",
      "../middle.ts"
    ],
    [
      "../bridge.ts"
    ],
    [
      "../z-right.ts"
    ]
  ],
  "options": {
    "composite": true,
    "declaration": true,
    "module": 99,
    "outDir": "./",
    "strict": true,
    "target": 9
  },
  "referencedMap": {
    "../bridge.ts": [
      "../0-left.ts",
      "../middle.ts"
    ],
    "../consumer.ts": [
      "../bridge.ts"
    ],
    "../middle.ts": [
      "../z-right.ts"
    ]
  },
  "latestChangedDtsFile": "./consumer.d.ts",
  "size": 2325
}
//// [/home/src/workspaces/project/out/z-right.d.ts] *new* 
export interface Root {
    field: string;
}

//// [/home/src/workspaces/project/out/z-right.js] *new* 
export {};


tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/tslibs/TS/Lib/lib.es2022.full.d.ts
*refresh*    /home/src/workspaces/project/0-left.ts
*refresh*    /home/src/workspaces/project/z-right.ts
*refresh*    /home/src/workspaces/project/middle.ts
*refresh*    /home/src/workspaces/project/bridge.ts
*refresh*    /home/src/workspaces/project/consumer.ts
Signatures::
(stored at emit) /home/src/workspaces/project/0-left.ts
(stored at emit) /home/src/workspaces/project/z-right.ts
(stored at emit) /home/src/workspaces/project/middle.ts
(stored at emit) /home/src/workspaces/project/bridge.ts
(stored at emit) /home/src/workspaces/project/consumer.ts


Edit [0]:: no change

tsgo -b
ExitStatus:: Success
Output::



Edit [1]:: both roots change; bridge is visited before middle
//// [/home/src/workspaces/project/0-left.ts] *modified* 
export const token = 1;
export const extra = 2;
//// [/home/src/workspaces/project/z-right.ts] *modified* 
export interface Root { field: number }

tsgo -b
ExitStatus:: DiagnosticsPresent_OutputsGenerated
Output::
[96mconsumer.ts[0m:[93m3[0m:[93m18[0m - [91merror[0m[90m TS2322: [0mType 'number' is not assignable to type 'string'.

[7m3[0m     export const value: string = read().field;
[7m [0m [91m                 ~~~~~[0m


Found 1 error in consumer.ts[90m:3[0m

//// [/home/src/workspaces/project/out/0-left.d.ts] *modified* 
export declare const token = 1;
export declare const extra = 2;

//// [/home/src/workspaces/project/out/0-left.js] *modified* 
export const token = 1;
export const extra = 2;

//// [/home/src/workspaces/project/out/bridge.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/middle.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","root":[[2,6]],"fileNames":["lib.es2022.full.d.ts","../0-left.ts","../z-right.ts","../middle.ts","../bridge.ts","../consumer.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"0ff1bd0efca9e4762f8606d683032555-export const token = 1;\nexport const extra = 2;","signature":"763d3caad0bec5e318648966e000b6de-export declare const token = 1;\nexport declare const extra = 2;\n","impliedNodeFormat":1},{"version":"2dd88eeefdf00eb0e1f0dec71098f380-export interface Root { field: number }","signature":"99ccd51cd70b784131a7870605dd479f-export interface Root {\n    field: number;\n}\n","impliedNodeFormat":1},{"version":"c815f8ebdd8ce509e55e9b7990c6d3bf-export type { Root as Alias } from \"./z-right\";","signature":"ba9231b6d561eeb1b732b806695d6276-export type { Root as Alias } from \"./z-right\";\n","impliedNodeFormat":1},{"version":"7e9406e4d07b9111072e6965579fa6fe-\n\t\t\t\timport { token } from \"./0-left\";\n\t\t\t\tvoid token;\n\t\t\t\texport declare function read(): import(\"./middle\").Alias;\n\t\t\t","signature":"292bad3b72e7aa92dae148d42366d9fb-export declare function read(): import(\"./middle\").Alias;\n","impliedNodeFormat":1},{"version":"524939b9271cb11f9623f42661bcd03d-\n\t\t\t\timport { read } from \"./bridge\";\n\t\t\t\texport const value: string = read().field;\n\t\t\t","signature":"d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n","impliedNodeFormat":1}],"fileIdsList":[[2,4],[5],[3]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","strict":true,"target":9},"referencedMap":[[5,1],[6,2],[4,3]],"semanticDiagnosticsPerFile":[[6,[{"pos":55,"end":60,"code":2322,"category":1,"messageKey":"Type_0_is_not_assignable_to_type_1_2322","messageArgs":["number","string"]}]]],"latestChangedDtsFile":"./z-right.d.ts"}
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "../0-left.ts",
        "../z-right.ts",
        "../middle.ts",
        "../bridge.ts",
        "../consumer.ts"
      ],
      "original": [
        2,
        6
      ]
    }
  ],
  "fileNames": [
    "lib.es2022.full.d.ts",
    "../0-left.ts",
    "../z-right.ts",
    "../middle.ts",
    "../bridge.ts",
    "../consumer.ts"
  ],
  "fileInfos": [
    {
      "fileName": "lib.es2022.full.d.ts",
      "version": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "signature": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../0-left.ts",
      "version": "0ff1bd0efca9e4762f8606d683032555-export const token = 1;\nexport const extra = 2;",
      "signature": "763d3caad0bec5e318648966e000b6de-export declare const token = 1;\nexport declare const extra = 2;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "0ff1bd0efca9e4762f8606d683032555-export const token = 1;\nexport const extra = 2;",
        "signature": "763d3caad0bec5e318648966e000b6de-export declare const token = 1;\nexport declare const extra = 2;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../z-right.ts",
      "version": "2dd88eeefdf00eb0e1f0dec71098f380-export interface Root { field: number }",
      "signature": "99ccd51cd70b784131a7870605dd479f-export interface Root {\n    field: number;\n}\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "2dd88eeefdf00eb0e1f0dec71098f380-export interface Root { field: number }",
        "signature": "99ccd51cd70b784131a7870605dd479f-export interface Root {\n    field: number;\n}\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../middle.ts",
      "version": "c815f8ebdd8ce509e55e9b7990c6d3bf-export type { Root as Alias } from \"./z-right\";",
      "signature": "ba9231b6d561eeb1b732b806695d6276-export type { Root as Alias } from \"./z-right\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "c815f8ebdd8ce509e55e9b7990c6d3bf-export type { Root as Alias } from \"./z-right\";",
        "signature": "ba9231b6d561eeb1b732b806695d6276-export type { Root as Alias } from \"./z-right\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../bridge.ts",
      "version": "7e9406e4d07b9111072e6965579fa6fe-\n\t\t\t\timport { token } from \"./0-left\";\n\t\t\t\tvoid token;\n\t\t\t\texport declare function read(): import(\"./middle\").Alias;\n\t\t\t",
      "signature": "292bad3b72e7aa92dae148d42366d9fb-export declare function read(): import(\"./middle\").Alias;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "7e9406e4d07b9111072e6965579fa6fe-\n\t\t\t\timport { token } from \"./0-left\";\n\t\t\t\tvoid token;\n\t\t\t\texport declare function read(): import(\"./middle\").Alias;\n\t\t\t",
        "signature": "292bad3b72e7aa92dae148d42366d9fb-export declare function read(): import(\"./middle\").Alias;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "524939b9271cb11f9623f42661bcd03d-\n\t\t\t\timport { read } from \"./bridge\";\n\t\t\t\texport const value: string = read().field;\n\t\t\t",
      "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "524939b9271cb11f9623f42661bcd03d-\n\t\t\t\timport { read } from \"./bridge\";\n\t\t\t\texport const value: string = read().field;\n\t\t\t",
        "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../0-left.ts",
      "../middle.ts"
    ],
    [
      "../bridge.ts"
    ],
    [
      "../z-right.ts"
    ]
  ],
  "options": {
    "composite": true,
    "declaration": true,
    "module": 99,
    "outDir": "./",
    "strict": true,
    "target": 9
  },
  "referencedMap": {
    "../bridge.ts": [
      "../0-left.ts",
      "../middle.ts"
    ],
    "../consumer.ts": [
      "../bridge.ts"
    ],
    "../middle.ts": [
      "../z-right.ts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "../consumer.ts",
      [
        {
          "pos": 55,
          "end": 60,
          "code": 2322,
          "category": 1,
          "messageKey": "Type_0_is_not_assignable_to_type_1_2322",
          "messageArgs": [
            "number",
            "string"
          ]
        }
      ]
    ]
  ],
  "latestChangedDtsFile": "./z-right.d.ts",
  "size": 2553
}
//// [/home/src/workspaces/project/out/z-right.d.ts] *modified* 
export interface Root {
    field: number;
}

//// [/home/src/workspaces/project/out/z-right.js] *rewrite with same content*

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/workspaces/project/0-left.ts
*refresh*    /home/src/workspaces/project/z-right.ts
*refresh*    /home/src/workspaces/project/middle.ts
*refresh*    /home/src/workspaces/project/bridge.ts
*refresh*    /home/src/workspaces/project/consumer.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/0-left.ts
(computed .d.ts) /home/src/workspaces/project/z-right.ts
(computed .d.ts) /home/src/workspaces/project/middle.ts
(computed .d.ts) /home/src/workspaces/project/bridge.ts
(computed .d.ts) /home/src/workspaces/project/consumer.ts


Edit [2]:: restore the right-hand shape
//// [/home/src/workspaces/project/z-right.ts] *modified* 
export interface Root { field: string }

tsgo -b
ExitStatus:: Success
Output::
//// [/home/src/workspaces/project/out/middle.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","root":[[2,6]],"fileNames":["lib.es2022.full.d.ts","../0-left.ts","../z-right.ts","../middle.ts","../bridge.ts","../consumer.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"0ff1bd0efca9e4762f8606d683032555-export const token = 1;\nexport const extra = 2;","signature":"763d3caad0bec5e318648966e000b6de-export declare const token = 1;\nexport declare const extra = 2;\n","impliedNodeFormat":1},{"version":"3cd6619c62f05bd88ddb88458b33c76d-export interface Root { field: string }","signature":"2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n","impliedNodeFormat":1},{"version":"c815f8ebdd8ce509e55e9b7990c6d3bf-export type { Root as Alias } from \"./z-right\";","signature":"ba9231b6d561eeb1b732b806695d6276-export type { Root as Alias } from \"./z-right\";\n","impliedNodeFormat":1},{"version":"7e9406e4d07b9111072e6965579fa6fe-\n\t\t\t\timport { token } from \"./0-left\";\n\t\t\t\tvoid token;\n\t\t\t\texport declare function read(): import(\"./middle\").Alias;\n\t\t\t","signature":"292bad3b72e7aa92dae148d42366d9fb-export declare function read(): import(\"./middle\").Alias;\n","impliedNodeFormat":1},{"version":"524939b9271cb11f9623f42661bcd03d-\n\t\t\t\timport { read } from \"./bridge\";\n\t\t\t\texport const value: string = read().field;\n\t\t\t","signature":"d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n","impliedNodeFormat":1}],"fileIdsList":[[2,4],[5],[3]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","strict":true,"target":9},"referencedMap":[[5,1],[6,2],[4,3]],"latestChangedDtsFile":"./z-right.d.ts"}
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "../0-left.ts",
        "../z-right.ts",
        "../middle.ts",
        "../bridge.ts",
        "../consumer.ts"
      ],
      "original": [
        2,
        6
      ]
    }
  ],
  "fileNames": [
    "lib.es2022.full.d.ts",
    "../0-left.ts",
    "../z-right.ts",
    "../middle.ts",
    "../bridge.ts",
    "../consumer.ts"
  ],
  "fileInfos": [
    {
      "fileName": "lib.es2022.full.d.ts",
      "version": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "signature": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../0-left.ts",
      "version": "0ff1bd0efca9e4762f8606d683032555-export const token = 1;\nexport const extra = 2;",
      "signature": "763d3caad0bec5e318648966e000b6de-export declare const token = 1;\nexport declare const extra = 2;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "0ff1bd0efca9e4762f8606d683032555-export const token = 1;\nexport const extra = 2;",
        "signature": "763d3caad0bec5e318648966e000b6de-export declare const token = 1;\nexport declare const extra = 2;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../z-right.ts",
      "version": "3cd6619c62f05bd88ddb88458b33c76d-export interface Root { field: string }",
      "signature": "2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "3cd6619c62f05bd88ddb88458b33c76d-export interface Root { field: string }",
        "signature": "2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../middle.ts",
      "version": "c815f8ebdd8ce509e55e9b7990c6d3bf-export type { Root as Alias } from \"./z-right\";",
      "signature": "ba9231b6d561eeb1b732b806695d6276-export type { Root as Alias } from \"./z-right\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "c815f8ebdd8ce509e55e9b7990c6d3bf-export type { Root as Alias } from \"./z-right\";",
        "signature": "ba9231b6d561eeb1b732b806695d6276-export type { Root as Alias } from \"./z-right\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../bridge.ts",
      "version": "7e9406e4d07b9111072e6965579fa6fe-\n\t\t\t\timport { token } from \"./0-left\";\n\t\t\t\tvoid token;\n\t\t\t\texport declare function read(): import(\"./middle\").Alias;\n\t\t\t",
      "signature": "292bad3b72e7aa92dae148d42366d9fb-export declare function read(): import(\"./middle\").Alias;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "7e9406e4d07b9111072e6965579fa6fe-\n\t\t\t\timport { token } from \"./0-left\";\n\t\t\t\tvoid token;\n\t\t\t\texport declare function read(): import(\"./middle\").Alias;\n\t\t\t",
        "signature": "292bad3b72e7aa92dae148d42366d9fb-export declare function read(): import(\"./middle\").Alias;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "524939b9271cb11f9623f42661bcd03d-\n\t\t\t\timport { read } from \"./bridge\";\n\t\t\t\texport const value: string = read().field;\n\t\t\t",
      "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "524939b9271cb11f9623f42661bcd03d-\n\t\t\t\timport { read } from \"./bridge\";\n\t\t\t\texport const value: string = read().field;\n\t\t\t",
        "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../0-left.ts",
      "../middle.ts"
    ],
    [
      "../bridge.ts"
    ],
    [
      "../z-right.ts"
    ]
  ],
  "options": {
    "composite": true,
    "declaration": true,
    "module": 99,
    "outDir": "./",
    "strict": true,
    "target": 9
  },
  "referencedMap": {
    "../bridge.ts": [
      "../0-left.ts",
      "../middle.ts"
    ],
    "../consumer.ts": [
      "../bridge.ts"
    ],
    "../middle.ts": [
      "../z-right.ts"
    ]
  },
  "latestChangedDtsFile": "./z-right.d.ts",
  "size": 2382
}
//// [/home/src/workspaces/project/out/z-right.d.ts] *modified* 
export interface Root {
    field: string;
}

//// [/home/src/workspaces/project/out/z-right.js] *rewrite with same content*

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/workspaces/project/z-right.ts
*refresh*    /home/src/workspaces/project/middle.ts
*refresh*    /home/src/workspaces/project/bridge.ts
*refresh*    /home/src/workspaces/project/consumer.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/z-right.ts
(computed .d.ts) /home/src/workspaces/project/middle.ts
(computed .d.ts) /home/src/workspaces/project/bridge.ts
(computed .d.ts) /home/src/workspaces/project/consumer.ts


Edit [3]:: no change

tsgo -b
ExitStatus:: Success
Output::


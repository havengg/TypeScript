currentDirectory::/home/src/workspaces/project
useCaseSensitiveFileNames::true
Input::
//// [/home/src/workspaces/project/bridge.ts] *new* 
export type { Root } from "./left";
//// [/home/src/workspaces/project/consumer.ts] *new* 
import type { Root } from "./middle"; export function read(value: Root): string { return value.field; }
//// [/home/src/workspaces/project/left.ts] *new* 
export interface Root { field: string }
//// [/home/src/workspaces/project/middle.ts] *new* 
export type { Root } from "./bridge";
//// [/home/src/workspaces/project/tsconfig.json] *new* 
{
    "compilerOptions": { "target": "es2022", "module": "esnext",
     "moduleResolution": "bundler", "composite": true,
     "declaration": true, "rootDir": ".", "outDir": "out", "strict": true }
   }

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
//// [/home/src/workspaces/project/out/bridge.d.ts] *new* 
export type { Root } from "./left";

//// [/home/src/workspaces/project/out/bridge.js] *new* 
export {};

//// [/home/src/workspaces/project/out/consumer.d.ts] *new* 
import type { Root } from "./middle";
export declare function read(value: Root): string;

//// [/home/src/workspaces/project/out/consumer.js] *new* 
export function read(value) { return value.field; }

//// [/home/src/workspaces/project/out/left.d.ts] *new* 
export interface Root {
    field: string;
}

//// [/home/src/workspaces/project/out/left.js] *new* 
export {};

//// [/home/src/workspaces/project/out/middle.d.ts] *new* 
export type { Root } from "./bridge";

//// [/home/src/workspaces/project/out/middle.js] *new* 
export {};

//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo] *new* 
{"version":"FakeTSVersion","root":[[2,5]],"fileNames":["lib.es2022.full.d.ts","../left.ts","../bridge.ts","../middle.ts","../consumer.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"3cd6619c62f05bd88ddb88458b33c76d-export interface Root { field: string }","signature":"2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n","impliedNodeFormat":1},{"version":"f81b2382db893b51421d7e78259072b6-export type { Root } from \"./left\";","signature":"12ab196dbeda814d8d6bb111c24dc3a0-export type { Root } from \"./left\";\n","impliedNodeFormat":1},{"version":"be72b7df870ce715b2ea6386e43cf78b-export type { Root } from \"./bridge\";","signature":"ddbba8078042c4384025684dfbc5741e-export type { Root } from \"./bridge\";\n","impliedNodeFormat":1},{"version":"e7d2323a54197b7bf9c7a0b4c1303da5-import type { Root } from \"./middle\"; export function read(value: Root): string { return value.field; }","signature":"b53e598a2166d574ba2a32ce443d7688-import type { Root } from \"./middle\";\nexport declare function read(value: Root): string;\n","impliedNodeFormat":1}],"fileIdsList":[[2],[4],[3]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","rootDir":"..","strict":true,"target":9},"referencedMap":[[3,1],[5,2],[4,3]],"latestChangedDtsFile":"./consumer.d.ts"}
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo.readable.baseline.txt] *new* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "../left.ts",
        "../bridge.ts",
        "../middle.ts",
        "../consumer.ts"
      ],
      "original": [
        2,
        5
      ]
    }
  ],
  "fileNames": [
    "lib.es2022.full.d.ts",
    "../left.ts",
    "../bridge.ts",
    "../middle.ts",
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
      "fileName": "../left.ts",
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
      "fileName": "../bridge.ts",
      "version": "f81b2382db893b51421d7e78259072b6-export type { Root } from \"./left\";",
      "signature": "12ab196dbeda814d8d6bb111c24dc3a0-export type { Root } from \"./left\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f81b2382db893b51421d7e78259072b6-export type { Root } from \"./left\";",
        "signature": "12ab196dbeda814d8d6bb111c24dc3a0-export type { Root } from \"./left\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../middle.ts",
      "version": "be72b7df870ce715b2ea6386e43cf78b-export type { Root } from \"./bridge\";",
      "signature": "ddbba8078042c4384025684dfbc5741e-export type { Root } from \"./bridge\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "be72b7df870ce715b2ea6386e43cf78b-export type { Root } from \"./bridge\";",
        "signature": "ddbba8078042c4384025684dfbc5741e-export type { Root } from \"./bridge\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "e7d2323a54197b7bf9c7a0b4c1303da5-import type { Root } from \"./middle\"; export function read(value: Root): string { return value.field; }",
      "signature": "b53e598a2166d574ba2a32ce443d7688-import type { Root } from \"./middle\";\nexport declare function read(value: Root): string;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "e7d2323a54197b7bf9c7a0b4c1303da5-import type { Root } from \"./middle\"; export function read(value: Root): string { return value.field; }",
        "signature": "b53e598a2166d574ba2a32ce443d7688-import type { Root } from \"./middle\";\nexport declare function read(value: Root): string;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../left.ts"
    ],
    [
      "../middle.ts"
    ],
    [
      "../bridge.ts"
    ]
  ],
  "options": {
    "composite": true,
    "declaration": true,
    "module": 99,
    "outDir": "./",
    "rootDir": "..",
    "strict": true,
    "target": 9
  },
  "referencedMap": {
    "../bridge.ts": [
      "../left.ts"
    ],
    "../consumer.ts": [
      "../middle.ts"
    ],
    "../middle.ts": [
      "../bridge.ts"
    ]
  },
  "latestChangedDtsFile": "./consumer.d.ts",
  "size": 2055
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/tslibs/TS/Lib/lib.es2022.full.d.ts
*refresh*    /home/src/workspaces/project/left.ts
*refresh*    /home/src/workspaces/project/bridge.ts
*refresh*    /home/src/workspaces/project/middle.ts
*refresh*    /home/src/workspaces/project/consumer.ts
Signatures::
(stored at emit) /home/src/workspaces/project/left.ts
(stored at emit) /home/src/workspaces/project/bridge.ts
(stored at emit) /home/src/workspaces/project/middle.ts
(stored at emit) /home/src/workspaces/project/consumer.ts


Edit [0]:: establish declaration signatures
//// [/home/src/workspaces/project/left.ts] *modified* 
export interface Root { field: string }


tsgo -b
ExitStatus:: Success
Output::
//// [/home/src/workspaces/project/out/left.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","root":[[2,5]],"fileNames":["lib.es2022.full.d.ts","../left.ts","../bridge.ts","../middle.ts","../consumer.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"6df01c800e88b311931c3e2867018837-export interface Root { field: string }\n","signature":"2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n","impliedNodeFormat":1},{"version":"f81b2382db893b51421d7e78259072b6-export type { Root } from \"./left\";","signature":"12ab196dbeda814d8d6bb111c24dc3a0-export type { Root } from \"./left\";\n","impliedNodeFormat":1},{"version":"be72b7df870ce715b2ea6386e43cf78b-export type { Root } from \"./bridge\";","signature":"ddbba8078042c4384025684dfbc5741e-export type { Root } from \"./bridge\";\n","impliedNodeFormat":1},{"version":"e7d2323a54197b7bf9c7a0b4c1303da5-import type { Root } from \"./middle\"; export function read(value: Root): string { return value.field; }","signature":"b53e598a2166d574ba2a32ce443d7688-import type { Root } from \"./middle\";\nexport declare function read(value: Root): string;\n","impliedNodeFormat":1}],"fileIdsList":[[2],[4],[3]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","rootDir":"..","strict":true,"target":9},"referencedMap":[[3,1],[5,2],[4,3]],"latestChangedDtsFile":"./consumer.d.ts"}
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "../left.ts",
        "../bridge.ts",
        "../middle.ts",
        "../consumer.ts"
      ],
      "original": [
        2,
        5
      ]
    }
  ],
  "fileNames": [
    "lib.es2022.full.d.ts",
    "../left.ts",
    "../bridge.ts",
    "../middle.ts",
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
      "fileName": "../left.ts",
      "version": "6df01c800e88b311931c3e2867018837-export interface Root { field: string }\n",
      "signature": "2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "6df01c800e88b311931c3e2867018837-export interface Root { field: string }\n",
        "signature": "2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../bridge.ts",
      "version": "f81b2382db893b51421d7e78259072b6-export type { Root } from \"./left\";",
      "signature": "12ab196dbeda814d8d6bb111c24dc3a0-export type { Root } from \"./left\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f81b2382db893b51421d7e78259072b6-export type { Root } from \"./left\";",
        "signature": "12ab196dbeda814d8d6bb111c24dc3a0-export type { Root } from \"./left\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../middle.ts",
      "version": "be72b7df870ce715b2ea6386e43cf78b-export type { Root } from \"./bridge\";",
      "signature": "ddbba8078042c4384025684dfbc5741e-export type { Root } from \"./bridge\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "be72b7df870ce715b2ea6386e43cf78b-export type { Root } from \"./bridge\";",
        "signature": "ddbba8078042c4384025684dfbc5741e-export type { Root } from \"./bridge\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "e7d2323a54197b7bf9c7a0b4c1303da5-import type { Root } from \"./middle\"; export function read(value: Root): string { return value.field; }",
      "signature": "b53e598a2166d574ba2a32ce443d7688-import type { Root } from \"./middle\";\nexport declare function read(value: Root): string;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "e7d2323a54197b7bf9c7a0b4c1303da5-import type { Root } from \"./middle\"; export function read(value: Root): string { return value.field; }",
        "signature": "b53e598a2166d574ba2a32ce443d7688-import type { Root } from \"./middle\";\nexport declare function read(value: Root): string;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../left.ts"
    ],
    [
      "../middle.ts"
    ],
    [
      "../bridge.ts"
    ]
  ],
  "options": {
    "composite": true,
    "declaration": true,
    "module": 99,
    "outDir": "./",
    "rootDir": "..",
    "strict": true,
    "target": 9
  },
  "referencedMap": {
    "../bridge.ts": [
      "../left.ts"
    ],
    "../consumer.ts": [
      "../middle.ts"
    ],
    "../middle.ts": [
      "../bridge.ts"
    ]
  },
  "latestChangedDtsFile": "./consumer.d.ts",
  "size": 2057
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/workspaces/project/left.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/left.ts


Edit [1]:: change member to number
//// [/home/src/workspaces/project/left.ts] *modified* 
export interface Root { field: number }

tsgo -b
ExitStatus:: DiagnosticsPresent_OutputsGenerated
Output::
[96mconsumer.ts[0m:[93m1[0m:[93m83[0m - [91merror[0m[90m TS2322: [0mType 'number' is not assignable to type 'string'.

[7m1[0m import type { Root } from "./middle"; export function read(value: Root): string { return value.field; }
[7m [0m [91m                                                                                  ~~~~~~[0m


Found 1 error in consumer.ts[90m:1[0m

//// [/home/src/workspaces/project/out/bridge.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/left.d.ts] *modified* 
export interface Root {
    field: number;
}

//// [/home/src/workspaces/project/out/left.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","root":[[2,5]],"fileNames":["lib.es2022.full.d.ts","../left.ts","../bridge.ts","../middle.ts","../consumer.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"2dd88eeefdf00eb0e1f0dec71098f380-export interface Root { field: number }","signature":"99ccd51cd70b784131a7870605dd479f-export interface Root {\n    field: number;\n}\n","impliedNodeFormat":1},{"version":"f81b2382db893b51421d7e78259072b6-export type { Root } from \"./left\";","signature":"12ab196dbeda814d8d6bb111c24dc3a0-export type { Root } from \"./left\";\n","impliedNodeFormat":1},{"version":"be72b7df870ce715b2ea6386e43cf78b-export type { Root } from \"./bridge\";","signature":"ddbba8078042c4384025684dfbc5741e-export type { Root } from \"./bridge\";\n","impliedNodeFormat":1},{"version":"e7d2323a54197b7bf9c7a0b4c1303da5-import type { Root } from \"./middle\"; export function read(value: Root): string { return value.field; }","signature":"b53e598a2166d574ba2a32ce443d7688-import type { Root } from \"./middle\";\nexport declare function read(value: Root): string;\n","impliedNodeFormat":1}],"fileIdsList":[[2],[4],[3]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","rootDir":"..","strict":true,"target":9},"referencedMap":[[3,1],[5,2],[4,3]],"semanticDiagnosticsPerFile":[[5,[{"pos":82,"end":88,"code":2322,"category":1,"messageKey":"Type_0_is_not_assignable_to_type_1_2322","messageArgs":["number","string"]}]]],"latestChangedDtsFile":"./left.d.ts"}
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "../left.ts",
        "../bridge.ts",
        "../middle.ts",
        "../consumer.ts"
      ],
      "original": [
        2,
        5
      ]
    }
  ],
  "fileNames": [
    "lib.es2022.full.d.ts",
    "../left.ts",
    "../bridge.ts",
    "../middle.ts",
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
      "fileName": "../left.ts",
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
      "fileName": "../bridge.ts",
      "version": "f81b2382db893b51421d7e78259072b6-export type { Root } from \"./left\";",
      "signature": "12ab196dbeda814d8d6bb111c24dc3a0-export type { Root } from \"./left\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f81b2382db893b51421d7e78259072b6-export type { Root } from \"./left\";",
        "signature": "12ab196dbeda814d8d6bb111c24dc3a0-export type { Root } from \"./left\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../middle.ts",
      "version": "be72b7df870ce715b2ea6386e43cf78b-export type { Root } from \"./bridge\";",
      "signature": "ddbba8078042c4384025684dfbc5741e-export type { Root } from \"./bridge\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "be72b7df870ce715b2ea6386e43cf78b-export type { Root } from \"./bridge\";",
        "signature": "ddbba8078042c4384025684dfbc5741e-export type { Root } from \"./bridge\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "e7d2323a54197b7bf9c7a0b4c1303da5-import type { Root } from \"./middle\"; export function read(value: Root): string { return value.field; }",
      "signature": "b53e598a2166d574ba2a32ce443d7688-import type { Root } from \"./middle\";\nexport declare function read(value: Root): string;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "e7d2323a54197b7bf9c7a0b4c1303da5-import type { Root } from \"./middle\"; export function read(value: Root): string { return value.field; }",
        "signature": "b53e598a2166d574ba2a32ce443d7688-import type { Root } from \"./middle\";\nexport declare function read(value: Root): string;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../left.ts"
    ],
    [
      "../middle.ts"
    ],
    [
      "../bridge.ts"
    ]
  ],
  "options": {
    "composite": true,
    "declaration": true,
    "module": 99,
    "outDir": "./",
    "rootDir": "..",
    "strict": true,
    "target": 9
  },
  "referencedMap": {
    "../bridge.ts": [
      "../left.ts"
    ],
    "../consumer.ts": [
      "../middle.ts"
    ],
    "../middle.ts": [
      "../bridge.ts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "../consumer.ts",
      [
        {
          "pos": 82,
          "end": 88,
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
  "latestChangedDtsFile": "./left.d.ts",
  "size": 2222
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/workspaces/project/left.ts
*refresh*    /home/src/workspaces/project/bridge.ts
*refresh*    /home/src/workspaces/project/middle.ts
*refresh*    /home/src/workspaces/project/consumer.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/left.ts
(computed .d.ts) /home/src/workspaces/project/bridge.ts
(computed .d.ts) /home/src/workspaces/project/middle.ts
(computed .d.ts) /home/src/workspaces/project/consumer.ts


Edit [2]:: restore member to string
//// [/home/src/workspaces/project/left.ts] *modified* 
export interface Root { field: string }

tsgo -b
ExitStatus:: Success
Output::
//// [/home/src/workspaces/project/out/bridge.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/left.d.ts] *modified* 
export interface Root {
    field: string;
}

//// [/home/src/workspaces/project/out/left.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","root":[[2,5]],"fileNames":["lib.es2022.full.d.ts","../left.ts","../bridge.ts","../middle.ts","../consumer.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"3cd6619c62f05bd88ddb88458b33c76d-export interface Root { field: string }","signature":"2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n","impliedNodeFormat":1},{"version":"f81b2382db893b51421d7e78259072b6-export type { Root } from \"./left\";","signature":"12ab196dbeda814d8d6bb111c24dc3a0-export type { Root } from \"./left\";\n","impliedNodeFormat":1},{"version":"be72b7df870ce715b2ea6386e43cf78b-export type { Root } from \"./bridge\";","signature":"ddbba8078042c4384025684dfbc5741e-export type { Root } from \"./bridge\";\n","impliedNodeFormat":1},{"version":"e7d2323a54197b7bf9c7a0b4c1303da5-import type { Root } from \"./middle\"; export function read(value: Root): string { return value.field; }","signature":"b53e598a2166d574ba2a32ce443d7688-import type { Root } from \"./middle\";\nexport declare function read(value: Root): string;\n","impliedNodeFormat":1}],"fileIdsList":[[2],[4],[3]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","rootDir":"..","strict":true,"target":9},"referencedMap":[[3,1],[5,2],[4,3]],"latestChangedDtsFile":"./left.d.ts"}
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "../left.ts",
        "../bridge.ts",
        "../middle.ts",
        "../consumer.ts"
      ],
      "original": [
        2,
        5
      ]
    }
  ],
  "fileNames": [
    "lib.es2022.full.d.ts",
    "../left.ts",
    "../bridge.ts",
    "../middle.ts",
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
      "fileName": "../left.ts",
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
      "fileName": "../bridge.ts",
      "version": "f81b2382db893b51421d7e78259072b6-export type { Root } from \"./left\";",
      "signature": "12ab196dbeda814d8d6bb111c24dc3a0-export type { Root } from \"./left\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f81b2382db893b51421d7e78259072b6-export type { Root } from \"./left\";",
        "signature": "12ab196dbeda814d8d6bb111c24dc3a0-export type { Root } from \"./left\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../middle.ts",
      "version": "be72b7df870ce715b2ea6386e43cf78b-export type { Root } from \"./bridge\";",
      "signature": "ddbba8078042c4384025684dfbc5741e-export type { Root } from \"./bridge\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "be72b7df870ce715b2ea6386e43cf78b-export type { Root } from \"./bridge\";",
        "signature": "ddbba8078042c4384025684dfbc5741e-export type { Root } from \"./bridge\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "e7d2323a54197b7bf9c7a0b4c1303da5-import type { Root } from \"./middle\"; export function read(value: Root): string { return value.field; }",
      "signature": "b53e598a2166d574ba2a32ce443d7688-import type { Root } from \"./middle\";\nexport declare function read(value: Root): string;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "e7d2323a54197b7bf9c7a0b4c1303da5-import type { Root } from \"./middle\"; export function read(value: Root): string { return value.field; }",
        "signature": "b53e598a2166d574ba2a32ce443d7688-import type { Root } from \"./middle\";\nexport declare function read(value: Root): string;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../left.ts"
    ],
    [
      "../middle.ts"
    ],
    [
      "../bridge.ts"
    ]
  ],
  "options": {
    "composite": true,
    "declaration": true,
    "module": 99,
    "outDir": "./",
    "rootDir": "..",
    "strict": true,
    "target": 9
  },
  "referencedMap": {
    "../bridge.ts": [
      "../left.ts"
    ],
    "../consumer.ts": [
      "../middle.ts"
    ],
    "../middle.ts": [
      "../bridge.ts"
    ]
  },
  "latestChangedDtsFile": "./left.d.ts",
  "size": 2051
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/workspaces/project/left.ts
*refresh*    /home/src/workspaces/project/bridge.ts
*refresh*    /home/src/workspaces/project/middle.ts
*refresh*    /home/src/workspaces/project/consumer.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/left.ts
(computed .d.ts) /home/src/workspaces/project/bridge.ts
(computed .d.ts) /home/src/workspaces/project/middle.ts
(computed .d.ts) /home/src/workspaces/project/consumer.ts


Edit [3]:: no change

tsgo -b
ExitStatus:: Success
Output::


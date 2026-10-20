currentDirectory::/home/src/workspaces/project
useCaseSensitiveFileNames::true
Input::
//// [/home/src/workspaces/project/bridge.ts] *new* 
declare const current: import("./left").Root;
//// [/home/src/workspaces/project/consumer.ts] *new* 
export const value: string = current.field;
//// [/home/src/workspaces/project/left.ts] *new* 
export interface Root { field: string }
//// [/home/src/workspaces/project/right.ts] *new* 
export const unrelated: number = 1;
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
declare const current: import("./left").Root;

//// [/home/src/workspaces/project/out/bridge.js] *new* 
"use strict";

//// [/home/src/workspaces/project/out/consumer.d.ts] *new* 
export declare const value: string;

//// [/home/src/workspaces/project/out/consumer.js] *new* 
export const value = current.field;

//// [/home/src/workspaces/project/out/left.d.ts] *new* 
export interface Root {
    field: string;
}

//// [/home/src/workspaces/project/out/left.js] *new* 
export {};

//// [/home/src/workspaces/project/out/right.d.ts] *new* 
export declare const unrelated: number;

//// [/home/src/workspaces/project/out/right.js] *new* 
export const unrelated = 1;

//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo] *new* 
{"version":"FakeTSVersion","root":[[2,5]],"fileNames":["lib.es2022.full.d.ts","../left.ts","../bridge.ts","../consumer.ts","../right.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"3cd6619c62f05bd88ddb88458b33c76d-export interface Root { field: string }","signature":"2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n","impliedNodeFormat":1},{"version":"fce1d6372609311ec98c17e4848c7c02-declare const current: import(\"./left\").Root;","signature":"4a2570544fae0f112310a4f11890d315-declare const current: import(\"./left\").Root;\n","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"08f5ea19532aca4e972dca9e901eab07-export const value: string = current.field;","signature":"d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n","impliedNodeFormat":1},{"version":"5b54a0e88f76eb13995774d5c5d830dd-export const unrelated: number = 1;","signature":"ef11d814fc9cb5534018af9c413462c1-export declare const unrelated: number;\n","impliedNodeFormat":1}],"fileIdsList":[[2]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","rootDir":"..","strict":true,"target":9},"referencedMap":[[3,1]],"latestChangedDtsFile":"./right.d.ts"}
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo.readable.baseline.txt] *new* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "../left.ts",
        "../bridge.ts",
        "../consumer.ts",
        "../right.ts"
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
    "../consumer.ts",
    "../right.ts"
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
      "version": "fce1d6372609311ec98c17e4848c7c02-declare const current: import(\"./left\").Root;",
      "signature": "4a2570544fae0f112310a4f11890d315-declare const current: import(\"./left\").Root;\n",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "fce1d6372609311ec98c17e4848c7c02-declare const current: import(\"./left\").Root;",
        "signature": "4a2570544fae0f112310a4f11890d315-declare const current: import(\"./left\").Root;\n",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "08f5ea19532aca4e972dca9e901eab07-export const value: string = current.field;",
      "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "08f5ea19532aca4e972dca9e901eab07-export const value: string = current.field;",
        "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../right.ts",
      "version": "5b54a0e88f76eb13995774d5c5d830dd-export const unrelated: number = 1;",
      "signature": "ef11d814fc9cb5534018af9c413462c1-export declare const unrelated: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "5b54a0e88f76eb13995774d5c5d830dd-export const unrelated: number = 1;",
        "signature": "ef11d814fc9cb5534018af9c413462c1-export declare const unrelated: number;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../left.ts"
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
    ]
  },
  "latestChangedDtsFile": "./right.d.ts",
  "size": 1955
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/tslibs/TS/Lib/lib.es2022.full.d.ts
*refresh*    /home/src/workspaces/project/left.ts
*refresh*    /home/src/workspaces/project/bridge.ts
*refresh*    /home/src/workspaces/project/consumer.ts
*refresh*    /home/src/workspaces/project/right.ts
Signatures::
(stored at emit) /home/src/workspaces/project/left.ts
(stored at emit) /home/src/workspaces/project/bridge.ts
(stored at emit) /home/src/workspaces/project/consumer.ts
(stored at emit) /home/src/workspaces/project/right.ts


Edit [0]:: establish declaration signatures
//// [/home/src/workspaces/project/left.ts] *modified* 
export interface Root { field: string }


tsgo -b
ExitStatus:: Success
Output::
//// [/home/src/workspaces/project/out/left.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","root":[[2,5]],"fileNames":["lib.es2022.full.d.ts","../left.ts","../bridge.ts","../consumer.ts","../right.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"6df01c800e88b311931c3e2867018837-export interface Root { field: string }\n","signature":"2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n","impliedNodeFormat":1},{"version":"fce1d6372609311ec98c17e4848c7c02-declare const current: import(\"./left\").Root;","signature":"4a2570544fae0f112310a4f11890d315-declare const current: import(\"./left\").Root;\n","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"08f5ea19532aca4e972dca9e901eab07-export const value: string = current.field;","signature":"d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n","impliedNodeFormat":1},{"version":"5b54a0e88f76eb13995774d5c5d830dd-export const unrelated: number = 1;","signature":"ef11d814fc9cb5534018af9c413462c1-export declare const unrelated: number;\n","impliedNodeFormat":1}],"fileIdsList":[[2]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","rootDir":"..","strict":true,"target":9},"referencedMap":[[3,1]],"latestChangedDtsFile":"./right.d.ts"}
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "../left.ts",
        "../bridge.ts",
        "../consumer.ts",
        "../right.ts"
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
    "../consumer.ts",
    "../right.ts"
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
      "version": "fce1d6372609311ec98c17e4848c7c02-declare const current: import(\"./left\").Root;",
      "signature": "4a2570544fae0f112310a4f11890d315-declare const current: import(\"./left\").Root;\n",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "fce1d6372609311ec98c17e4848c7c02-declare const current: import(\"./left\").Root;",
        "signature": "4a2570544fae0f112310a4f11890d315-declare const current: import(\"./left\").Root;\n",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "08f5ea19532aca4e972dca9e901eab07-export const value: string = current.field;",
      "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "08f5ea19532aca4e972dca9e901eab07-export const value: string = current.field;",
        "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../right.ts",
      "version": "5b54a0e88f76eb13995774d5c5d830dd-export const unrelated: number = 1;",
      "signature": "ef11d814fc9cb5534018af9c413462c1-export declare const unrelated: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "5b54a0e88f76eb13995774d5c5d830dd-export const unrelated: number = 1;",
        "signature": "ef11d814fc9cb5534018af9c413462c1-export declare const unrelated: number;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../left.ts"
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
    ]
  },
  "latestChangedDtsFile": "./right.d.ts",
  "size": 1957
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
[96mconsumer.ts[0m:[93m1[0m:[93m14[0m - [91merror[0m[90m TS2322: [0mType 'number' is not assignable to type 'string'.

[7m1[0m export const value: string = current.field;
[7m [0m [91m             ~~~~~[0m


Found 1 error in consumer.ts[90m:1[0m

//// [/home/src/workspaces/project/out/bridge.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/left.d.ts] *modified* 
export interface Root {
    field: number;
}

//// [/home/src/workspaces/project/out/left.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","root":[[2,5]],"fileNames":["lib.es2022.full.d.ts","../left.ts","../bridge.ts","../consumer.ts","../right.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"2dd88eeefdf00eb0e1f0dec71098f380-export interface Root { field: number }","signature":"99ccd51cd70b784131a7870605dd479f-export interface Root {\n    field: number;\n}\n","impliedNodeFormat":1},{"version":"fce1d6372609311ec98c17e4848c7c02-declare const current: import(\"./left\").Root;","signature":"4a2570544fae0f112310a4f11890d315-declare const current: import(\"./left\").Root;\n","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"08f5ea19532aca4e972dca9e901eab07-export const value: string = current.field;","signature":"d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n","impliedNodeFormat":1},{"version":"5b54a0e88f76eb13995774d5c5d830dd-export const unrelated: number = 1;","signature":"ef11d814fc9cb5534018af9c413462c1-export declare const unrelated: number;\n","impliedNodeFormat":1}],"fileIdsList":[[2]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","rootDir":"..","strict":true,"target":9},"referencedMap":[[3,1]],"semanticDiagnosticsPerFile":[[4,[{"pos":13,"end":18,"code":2322,"category":1,"messageKey":"Type_0_is_not_assignable_to_type_1_2322","messageArgs":["number","string"]}]]],"latestChangedDtsFile":"./left.d.ts"}
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "../left.ts",
        "../bridge.ts",
        "../consumer.ts",
        "../right.ts"
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
    "../consumer.ts",
    "../right.ts"
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
      "version": "fce1d6372609311ec98c17e4848c7c02-declare const current: import(\"./left\").Root;",
      "signature": "4a2570544fae0f112310a4f11890d315-declare const current: import(\"./left\").Root;\n",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "fce1d6372609311ec98c17e4848c7c02-declare const current: import(\"./left\").Root;",
        "signature": "4a2570544fae0f112310a4f11890d315-declare const current: import(\"./left\").Root;\n",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "08f5ea19532aca4e972dca9e901eab07-export const value: string = current.field;",
      "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "08f5ea19532aca4e972dca9e901eab07-export const value: string = current.field;",
        "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../right.ts",
      "version": "5b54a0e88f76eb13995774d5c5d830dd-export const unrelated: number = 1;",
      "signature": "ef11d814fc9cb5534018af9c413462c1-export declare const unrelated: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "5b54a0e88f76eb13995774d5c5d830dd-export const unrelated: number = 1;",
        "signature": "ef11d814fc9cb5534018af9c413462c1-export declare const unrelated: number;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../left.ts"
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
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "../consumer.ts",
      [
        {
          "pos": 13,
          "end": 18,
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
  "size": 2125
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/tslibs/TS/Lib/lib.es2022.full.d.ts
*refresh*    /home/src/workspaces/project/left.ts
*refresh*    /home/src/workspaces/project/bridge.ts
*refresh*    /home/src/workspaces/project/consumer.ts
*refresh*    /home/src/workspaces/project/right.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/left.ts
(computed .d.ts) /home/src/workspaces/project/bridge.ts
(stored at emit) /home/src/workspaces/project/consumer.ts
(stored at emit) /home/src/workspaces/project/right.ts


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
{"version":"FakeTSVersion","root":[[2,5]],"fileNames":["lib.es2022.full.d.ts","../left.ts","../bridge.ts","../consumer.ts","../right.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"3cd6619c62f05bd88ddb88458b33c76d-export interface Root { field: string }","signature":"2bf456b01e7e801245bd9381e0100118-export interface Root {\n    field: string;\n}\n","impliedNodeFormat":1},{"version":"fce1d6372609311ec98c17e4848c7c02-declare const current: import(\"./left\").Root;","signature":"4a2570544fae0f112310a4f11890d315-declare const current: import(\"./left\").Root;\n","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"08f5ea19532aca4e972dca9e901eab07-export const value: string = current.field;","signature":"d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n","impliedNodeFormat":1},{"version":"5b54a0e88f76eb13995774d5c5d830dd-export const unrelated: number = 1;","signature":"ef11d814fc9cb5534018af9c413462c1-export declare const unrelated: number;\n","impliedNodeFormat":1}],"fileIdsList":[[2]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","rootDir":"..","strict":true,"target":9},"referencedMap":[[3,1]],"latestChangedDtsFile":"./left.d.ts"}
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "../left.ts",
        "../bridge.ts",
        "../consumer.ts",
        "../right.ts"
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
    "../consumer.ts",
    "../right.ts"
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
      "version": "fce1d6372609311ec98c17e4848c7c02-declare const current: import(\"./left\").Root;",
      "signature": "4a2570544fae0f112310a4f11890d315-declare const current: import(\"./left\").Root;\n",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "fce1d6372609311ec98c17e4848c7c02-declare const current: import(\"./left\").Root;",
        "signature": "4a2570544fae0f112310a4f11890d315-declare const current: import(\"./left\").Root;\n",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "08f5ea19532aca4e972dca9e901eab07-export const value: string = current.field;",
      "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "08f5ea19532aca4e972dca9e901eab07-export const value: string = current.field;",
        "signature": "d704bb9feb766d5360f4081857e4c09e-export declare const value: string;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../right.ts",
      "version": "5b54a0e88f76eb13995774d5c5d830dd-export const unrelated: number = 1;",
      "signature": "ef11d814fc9cb5534018af9c413462c1-export declare const unrelated: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "5b54a0e88f76eb13995774d5c5d830dd-export const unrelated: number = 1;",
        "signature": "ef11d814fc9cb5534018af9c413462c1-export declare const unrelated: number;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../left.ts"
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
    ]
  },
  "latestChangedDtsFile": "./left.d.ts",
  "size": 1954
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/tslibs/TS/Lib/lib.es2022.full.d.ts
*refresh*    /home/src/workspaces/project/left.ts
*refresh*    /home/src/workspaces/project/bridge.ts
*refresh*    /home/src/workspaces/project/consumer.ts
*refresh*    /home/src/workspaces/project/right.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/left.ts
(computed .d.ts) /home/src/workspaces/project/bridge.ts
(stored at emit) /home/src/workspaces/project/consumer.ts
(stored at emit) /home/src/workspaces/project/right.ts


Edit [3]:: no change

tsgo -b
ExitStatus:: Success
Output::


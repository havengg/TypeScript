currentDirectory::/home/src/workspaces/project
useCaseSensitiveFileNames::true
Input::
//// [/home/src/workspaces/project/bridge.ts] *new* 
import { token } from "./left"; void token; export const stable: number = 1;
//// [/home/src/workspaces/project/consumer.ts] *new* 
import { stable } from "./middle"; export const value: number = stable;
//// [/home/src/workspaces/project/left.ts] *new* 
export const token: number = 1;
//// [/home/src/workspaces/project/middle.ts] *new* 
export { stable } from "./bridge";
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
export declare const stable: number;

//// [/home/src/workspaces/project/out/bridge.js] *new* 
import { token } from "./left";
void token;
export const stable = 1;

//// [/home/src/workspaces/project/out/consumer.d.ts] *new* 
export declare const value: number;

//// [/home/src/workspaces/project/out/consumer.js] *new* 
import { stable } from "./middle";
export const value = stable;

//// [/home/src/workspaces/project/out/left.d.ts] *new* 
export declare const token: number;

//// [/home/src/workspaces/project/out/left.js] *new* 
export const token = 1;

//// [/home/src/workspaces/project/out/middle.d.ts] *new* 
export { stable } from "./bridge";

//// [/home/src/workspaces/project/out/middle.js] *new* 
export { stable } from "./bridge";

//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo] *new* 
{"version":"FakeTSVersion","root":[[2,5]],"fileNames":["lib.es2022.full.d.ts","../left.ts","../bridge.ts","../middle.ts","../consumer.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"823b9b5f623977b34bd579e9eebd90b0-export const token: number = 1;","signature":"a9bc5c7c4a7129d55be2741cf27566e2-export declare const token: number;\n","impliedNodeFormat":1},{"version":"450ea7ceee7f8b8c9bfeee49feade019-import { token } from \"./left\"; void token; export const stable: number = 1;","signature":"ed076443cc2e040b930ecc13b01be151-export declare const stable: number;\n","impliedNodeFormat":1},{"version":"70d54a9f8c57d9266fb4dd98fc18c78b-export { stable } from \"./bridge\";","signature":"ba7350fb5ea18f59b2627d09bb1b0933-export { stable } from \"./bridge\";\n","impliedNodeFormat":1},{"version":"10360dfb1efab1f667115a3a95493780-import { stable } from \"./middle\"; export const value: number = stable;","signature":"959f06f4f5c31a065bcc12821a6027a2-export declare const value: number;\n","impliedNodeFormat":1}],"fileIdsList":[[2],[4],[3]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","rootDir":"..","strict":true,"target":9},"referencedMap":[[3,1],[5,2],[4,3]],"latestChangedDtsFile":"./consumer.d.ts"}
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
      "version": "823b9b5f623977b34bd579e9eebd90b0-export const token: number = 1;",
      "signature": "a9bc5c7c4a7129d55be2741cf27566e2-export declare const token: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "823b9b5f623977b34bd579e9eebd90b0-export const token: number = 1;",
        "signature": "a9bc5c7c4a7129d55be2741cf27566e2-export declare const token: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../bridge.ts",
      "version": "450ea7ceee7f8b8c9bfeee49feade019-import { token } from \"./left\"; void token; export const stable: number = 1;",
      "signature": "ed076443cc2e040b930ecc13b01be151-export declare const stable: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "450ea7ceee7f8b8c9bfeee49feade019-import { token } from \"./left\"; void token; export const stable: number = 1;",
        "signature": "ed076443cc2e040b930ecc13b01be151-export declare const stable: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../middle.ts",
      "version": "70d54a9f8c57d9266fb4dd98fc18c78b-export { stable } from \"./bridge\";",
      "signature": "ba7350fb5ea18f59b2627d09bb1b0933-export { stable } from \"./bridge\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "70d54a9f8c57d9266fb4dd98fc18c78b-export { stable } from \"./bridge\";",
        "signature": "ba7350fb5ea18f59b2627d09bb1b0933-export { stable } from \"./bridge\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "10360dfb1efab1f667115a3a95493780-import { stable } from \"./middle\"; export const value: number = stable;",
      "signature": "959f06f4f5c31a065bcc12821a6027a2-export declare const value: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "10360dfb1efab1f667115a3a95493780-import { stable } from \"./middle\"; export const value: number = stable;",
        "signature": "959f06f4f5c31a065bcc12821a6027a2-export declare const value: number;\n",
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
  "size": 1982
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
export const token: number = 1;


tsgo -b
ExitStatus:: Success
Output::
//// [/home/src/workspaces/project/out/left.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","root":[[2,5]],"fileNames":["lib.es2022.full.d.ts","../left.ts","../bridge.ts","../middle.ts","../consumer.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"ec6bd1450ffc1a341bdaa5ebb13a84ce-export const token: number = 1;\n","signature":"a9bc5c7c4a7129d55be2741cf27566e2-export declare const token: number;\n","impliedNodeFormat":1},{"version":"450ea7ceee7f8b8c9bfeee49feade019-import { token } from \"./left\"; void token; export const stable: number = 1;","signature":"ed076443cc2e040b930ecc13b01be151-export declare const stable: number;\n","impliedNodeFormat":1},{"version":"70d54a9f8c57d9266fb4dd98fc18c78b-export { stable } from \"./bridge\";","signature":"ba7350fb5ea18f59b2627d09bb1b0933-export { stable } from \"./bridge\";\n","impliedNodeFormat":1},{"version":"10360dfb1efab1f667115a3a95493780-import { stable } from \"./middle\"; export const value: number = stable;","signature":"959f06f4f5c31a065bcc12821a6027a2-export declare const value: number;\n","impliedNodeFormat":1}],"fileIdsList":[[2],[4],[3]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","rootDir":"..","strict":true,"target":9},"referencedMap":[[3,1],[5,2],[4,3]],"latestChangedDtsFile":"./consumer.d.ts"}
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
      "version": "ec6bd1450ffc1a341bdaa5ebb13a84ce-export const token: number = 1;\n",
      "signature": "a9bc5c7c4a7129d55be2741cf27566e2-export declare const token: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "ec6bd1450ffc1a341bdaa5ebb13a84ce-export const token: number = 1;\n",
        "signature": "a9bc5c7c4a7129d55be2741cf27566e2-export declare const token: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../bridge.ts",
      "version": "450ea7ceee7f8b8c9bfeee49feade019-import { token } from \"./left\"; void token; export const stable: number = 1;",
      "signature": "ed076443cc2e040b930ecc13b01be151-export declare const stable: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "450ea7ceee7f8b8c9bfeee49feade019-import { token } from \"./left\"; void token; export const stable: number = 1;",
        "signature": "ed076443cc2e040b930ecc13b01be151-export declare const stable: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../middle.ts",
      "version": "70d54a9f8c57d9266fb4dd98fc18c78b-export { stable } from \"./bridge\";",
      "signature": "ba7350fb5ea18f59b2627d09bb1b0933-export { stable } from \"./bridge\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "70d54a9f8c57d9266fb4dd98fc18c78b-export { stable } from \"./bridge\";",
        "signature": "ba7350fb5ea18f59b2627d09bb1b0933-export { stable } from \"./bridge\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "10360dfb1efab1f667115a3a95493780-import { stable } from \"./middle\"; export const value: number = stable;",
      "signature": "959f06f4f5c31a065bcc12821a6027a2-export declare const value: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "10360dfb1efab1f667115a3a95493780-import { stable } from \"./middle\"; export const value: number = stable;",
        "signature": "959f06f4f5c31a065bcc12821a6027a2-export declare const value: number;\n",
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
  "size": 1984
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/workspaces/project/left.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/left.ts


Edit [1]:: add an export to the leaf; stop after bridge
//// [/home/src/workspaces/project/left.ts] *modified* 
export const token: number = 1;

export const extra = 2;

tsgo -b
ExitStatus:: Success
Output::
//// [/home/src/workspaces/project/out/bridge.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/left.d.ts] *modified* 
export declare const token: number;
export declare const extra = 2;

//// [/home/src/workspaces/project/out/left.js] *modified* 
export const token = 1;
export const extra = 2;

//// [/home/src/workspaces/project/out/tsconfig.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","root":[[2,5]],"fileNames":["lib.es2022.full.d.ts","../left.ts","../bridge.ts","../middle.ts","../consumer.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"9b0f7de7168c8b47ae628ef59901cacd-export const token: number = 1;\n\nexport const extra = 2;","signature":"b8b10ee0bda9adbb8ae9b53f46f845d8-export declare const token: number;\nexport declare const extra = 2;\n","impliedNodeFormat":1},{"version":"450ea7ceee7f8b8c9bfeee49feade019-import { token } from \"./left\"; void token; export const stable: number = 1;","signature":"ed076443cc2e040b930ecc13b01be151-export declare const stable: number;\n","impliedNodeFormat":1},{"version":"70d54a9f8c57d9266fb4dd98fc18c78b-export { stable } from \"./bridge\";","signature":"ba7350fb5ea18f59b2627d09bb1b0933-export { stable } from \"./bridge\";\n","impliedNodeFormat":1},{"version":"10360dfb1efab1f667115a3a95493780-import { stable } from \"./middle\"; export const value: number = stable;","signature":"959f06f4f5c31a065bcc12821a6027a2-export declare const value: number;\n","impliedNodeFormat":1}],"fileIdsList":[[2],[4],[3]],"options":{"composite":true,"declaration":true,"module":99,"outDir":"./","rootDir":"..","strict":true,"target":9},"referencedMap":[[3,1],[5,2],[4,3]],"latestChangedDtsFile":"./left.d.ts"}
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
      "version": "9b0f7de7168c8b47ae628ef59901cacd-export const token: number = 1;\n\nexport const extra = 2;",
      "signature": "b8b10ee0bda9adbb8ae9b53f46f845d8-export declare const token: number;\nexport declare const extra = 2;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "9b0f7de7168c8b47ae628ef59901cacd-export const token: number = 1;\n\nexport const extra = 2;",
        "signature": "b8b10ee0bda9adbb8ae9b53f46f845d8-export declare const token: number;\nexport declare const extra = 2;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../bridge.ts",
      "version": "450ea7ceee7f8b8c9bfeee49feade019-import { token } from \"./left\"; void token; export const stable: number = 1;",
      "signature": "ed076443cc2e040b930ecc13b01be151-export declare const stable: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "450ea7ceee7f8b8c9bfeee49feade019-import { token } from \"./left\"; void token; export const stable: number = 1;",
        "signature": "ed076443cc2e040b930ecc13b01be151-export declare const stable: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../middle.ts",
      "version": "70d54a9f8c57d9266fb4dd98fc18c78b-export { stable } from \"./bridge\";",
      "signature": "ba7350fb5ea18f59b2627d09bb1b0933-export { stable } from \"./bridge\";\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "70d54a9f8c57d9266fb4dd98fc18c78b-export { stable } from \"./bridge\";",
        "signature": "ba7350fb5ea18f59b2627d09bb1b0933-export { stable } from \"./bridge\";\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../consumer.ts",
      "version": "10360dfb1efab1f667115a3a95493780-import { stable } from \"./middle\"; export const value: number = stable;",
      "signature": "959f06f4f5c31a065bcc12821a6027a2-export declare const value: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "10360dfb1efab1f667115a3a95493780-import { stable } from \"./middle\"; export const value: number = stable;",
        "signature": "959f06f4f5c31a065bcc12821a6027a2-export declare const value: number;\n",
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
  "size": 2038
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/workspaces/project/left.ts
*refresh*    /home/src/workspaces/project/bridge.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/left.ts
(computed .d.ts) /home/src/workspaces/project/bridge.ts


Edit [2]:: no change

tsgo -b
ExitStatus:: Success
Output::


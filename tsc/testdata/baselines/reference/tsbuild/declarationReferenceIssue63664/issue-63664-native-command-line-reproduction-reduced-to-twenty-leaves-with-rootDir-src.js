currentDirectory::/home/src/workspaces/project
useCaseSensitiveFileNames::true
Input::
//// [/home/src/workspaces/project/src/bridge.ts] *new* 
export * from "./left";

//// [/home/src/workspaces/project/src/consumer0.ts] *new* 
import { MIDDLE } from "./index"; export const value0: number = MIDDLE + 0;
//// [/home/src/workspaces/project/src/consumer1.ts] *new* 
import { MIDDLE } from "./index"; export const value1: number = MIDDLE + 1;
//// [/home/src/workspaces/project/src/consumer10.ts] *new* 
import { MIDDLE } from "./index"; export const value10: number = MIDDLE + 10;
//// [/home/src/workspaces/project/src/consumer11.ts] *new* 
import { MIDDLE } from "./index"; export const value11: number = MIDDLE + 11;
//// [/home/src/workspaces/project/src/consumer12.ts] *new* 
import { MIDDLE } from "./index"; export const value12: number = MIDDLE + 12;
//// [/home/src/workspaces/project/src/consumer13.ts] *new* 
import { MIDDLE } from "./index"; export const value13: number = MIDDLE + 13;
//// [/home/src/workspaces/project/src/consumer14.ts] *new* 
import { MIDDLE } from "./index"; export const value14: number = MIDDLE + 14;
//// [/home/src/workspaces/project/src/consumer15.ts] *new* 
import { MIDDLE } from "./index"; export const value15: number = MIDDLE + 15;
//// [/home/src/workspaces/project/src/consumer16.ts] *new* 
import { MIDDLE } from "./index"; export const value16: number = MIDDLE + 16;
//// [/home/src/workspaces/project/src/consumer17.ts] *new* 
import { MIDDLE } from "./index"; export const value17: number = MIDDLE + 17;
//// [/home/src/workspaces/project/src/consumer18.ts] *new* 
import { MIDDLE } from "./index"; export const value18: number = MIDDLE + 18;
//// [/home/src/workspaces/project/src/consumer19.ts] *new* 
import { MIDDLE } from "./index"; export const value19: number = MIDDLE + 19;
//// [/home/src/workspaces/project/src/consumer2.ts] *new* 
import { MIDDLE } from "./index"; export const value2: number = MIDDLE + 2;
//// [/home/src/workspaces/project/src/consumer3.ts] *new* 
import { MIDDLE } from "./index"; export const value3: number = MIDDLE + 3;
//// [/home/src/workspaces/project/src/consumer4.ts] *new* 
import { MIDDLE } from "./index"; export const value4: number = MIDDLE + 4;
//// [/home/src/workspaces/project/src/consumer5.ts] *new* 
import { MIDDLE } from "./index"; export const value5: number = MIDDLE + 5;
//// [/home/src/workspaces/project/src/consumer6.ts] *new* 
import { MIDDLE } from "./index"; export const value6: number = MIDDLE + 6;
//// [/home/src/workspaces/project/src/consumer7.ts] *new* 
import { MIDDLE } from "./index"; export const value7: number = MIDDLE + 7;
//// [/home/src/workspaces/project/src/consumer8.ts] *new* 
import { MIDDLE } from "./index"; export const value8: number = MIDDLE + 8;
//// [/home/src/workspaces/project/src/consumer9.ts] *new* 
import { MIDDLE } from "./index"; export const value9: number = MIDDLE + 9;
//// [/home/src/workspaces/project/src/index.ts] *new* 
export * from "./middle";

//// [/home/src/workspaces/project/src/left.ts] *new* 
export interface Root { field: number } export const LEFT = 1;
//// [/home/src/workspaces/project/src/middle.ts] *new* 

   import { LEFT, Root } from "./bridge";
   export const MIDDLE: number = LEFT + 1;
   export function read(value: Root): number { return value.field + MIDDLE; }
   export const enum Mode { A = 1, B = 2 }
  
//// [/home/src/workspaces/project/tsconfig.json] *new* 
{
   "compilerOptions": { "target": "es2022", "module": "esnext",
    "moduleResolution": "bundler", "strict": true, "incremental": true,
    "rootDir": "src", "outDir": "out", "tsBuildInfoFile": "proj.tsbuildinfo" },
   "include": ["src/**/*.ts"]
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
//// [/home/src/workspaces/project/out/bridge.js] *new* 
export * from "./left";

//// [/home/src/workspaces/project/out/consumer0.js] *new* 
import { MIDDLE } from "./index";
export const value0 = MIDDLE + 0;

//// [/home/src/workspaces/project/out/consumer1.js] *new* 
import { MIDDLE } from "./index";
export const value1 = MIDDLE + 1;

//// [/home/src/workspaces/project/out/consumer10.js] *new* 
import { MIDDLE } from "./index";
export const value10 = MIDDLE + 10;

//// [/home/src/workspaces/project/out/consumer11.js] *new* 
import { MIDDLE } from "./index";
export const value11 = MIDDLE + 11;

//// [/home/src/workspaces/project/out/consumer12.js] *new* 
import { MIDDLE } from "./index";
export const value12 = MIDDLE + 12;

//// [/home/src/workspaces/project/out/consumer13.js] *new* 
import { MIDDLE } from "./index";
export const value13 = MIDDLE + 13;

//// [/home/src/workspaces/project/out/consumer14.js] *new* 
import { MIDDLE } from "./index";
export const value14 = MIDDLE + 14;

//// [/home/src/workspaces/project/out/consumer15.js] *new* 
import { MIDDLE } from "./index";
export const value15 = MIDDLE + 15;

//// [/home/src/workspaces/project/out/consumer16.js] *new* 
import { MIDDLE } from "./index";
export const value16 = MIDDLE + 16;

//// [/home/src/workspaces/project/out/consumer17.js] *new* 
import { MIDDLE } from "./index";
export const value17 = MIDDLE + 17;

//// [/home/src/workspaces/project/out/consumer18.js] *new* 
import { MIDDLE } from "./index";
export const value18 = MIDDLE + 18;

//// [/home/src/workspaces/project/out/consumer19.js] *new* 
import { MIDDLE } from "./index";
export const value19 = MIDDLE + 19;

//// [/home/src/workspaces/project/out/consumer2.js] *new* 
import { MIDDLE } from "./index";
export const value2 = MIDDLE + 2;

//// [/home/src/workspaces/project/out/consumer3.js] *new* 
import { MIDDLE } from "./index";
export const value3 = MIDDLE + 3;

//// [/home/src/workspaces/project/out/consumer4.js] *new* 
import { MIDDLE } from "./index";
export const value4 = MIDDLE + 4;

//// [/home/src/workspaces/project/out/consumer5.js] *new* 
import { MIDDLE } from "./index";
export const value5 = MIDDLE + 5;

//// [/home/src/workspaces/project/out/consumer6.js] *new* 
import { MIDDLE } from "./index";
export const value6 = MIDDLE + 6;

//// [/home/src/workspaces/project/out/consumer7.js] *new* 
import { MIDDLE } from "./index";
export const value7 = MIDDLE + 7;

//// [/home/src/workspaces/project/out/consumer8.js] *new* 
import { MIDDLE } from "./index";
export const value8 = MIDDLE + 8;

//// [/home/src/workspaces/project/out/consumer9.js] *new* 
import { MIDDLE } from "./index";
export const value9 = MIDDLE + 9;

//// [/home/src/workspaces/project/out/index.js] *new* 
export * from "./middle";

//// [/home/src/workspaces/project/out/left.js] *new* 
export const LEFT = 1;

//// [/home/src/workspaces/project/out/middle.js] *new* 
import { LEFT } from "./bridge";
export const MIDDLE = LEFT + 1;
export function read(value) { return value.field + MIDDLE; }

//// [/home/src/workspaces/project/proj.tsbuildinfo] *new* 
{"version":"FakeTSVersion","root":[[2,25]],"fileNames":["lib.es2022.full.d.ts","./src/left.ts","./src/bridge.ts","./src/middle.ts","./src/index.ts","./src/consumer0.ts","./src/consumer1.ts","./src/consumer10.ts","./src/consumer11.ts","./src/consumer12.ts","./src/consumer13.ts","./src/consumer14.ts","./src/consumer15.ts","./src/consumer16.ts","./src/consumer17.ts","./src/consumer18.ts","./src/consumer19.ts","./src/consumer2.ts","./src/consumer3.ts","./src/consumer4.ts","./src/consumer5.ts","./src/consumer6.ts","./src/consumer7.ts","./src/consumer8.ts","./src/consumer9.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},"a176df11ca84e5633826bf5695b045c5-export interface Root { field: number } export const LEFT = 1;","604f68a4a059ca48f099a7996bcd3a3d-export * from \"./left\";\n","f6cd5b56698c024758edfe93fab93fa6-\n   import { LEFT, Root } from \"./bridge\";\n   export const MIDDLE: number = LEFT + 1;\n   export function read(value: Root): number { return value.field + MIDDLE; }\n   export const enum Mode { A = 1, B = 2 }\n  ","24619ad00d3dcb702e6574283956d815-export * from \"./middle\";\n","f599d80e31464888d2974b61b7961ab2-import { MIDDLE } from \"./index\"; export const value0: number = MIDDLE + 0;","8c9d63fca7574796980d39f62a2e5bea-import { MIDDLE } from \"./index\"; export const value1: number = MIDDLE + 1;","a82dad01f7f31393ea7d1e8e94e985a2-import { MIDDLE } from \"./index\"; export const value10: number = MIDDLE + 10;","6fdb42dcf9662be7b24fa28101a66979-import { MIDDLE } from \"./index\"; export const value11: number = MIDDLE + 11;","07dffeae21acbb1ff33d5ecfae4547db-import { MIDDLE } from \"./index\"; export const value12: number = MIDDLE + 12;","135caff3b737e238c5da1f7ddc1fb09e-import { MIDDLE } from \"./index\"; export const value13: number = MIDDLE + 13;","dfcd29bbdc3189b92a7d1798f6c34176-import { MIDDLE } from \"./index\"; export const value14: number = MIDDLE + 14;","ab63d37ebfec1fecf97da7c14e3ae9b0-import { MIDDLE } from \"./index\"; export const value15: number = MIDDLE + 15;","d74fe22f789229922036aef4a5de8ae5-import { MIDDLE } from \"./index\"; export const value16: number = MIDDLE + 16;","83a415cf5769df2d7c32d4ed0789c903-import { MIDDLE } from \"./index\"; export const value17: number = MIDDLE + 17;","4bc3224235cb202cf9c5a5739e6540bf-import { MIDDLE } from \"./index\"; export const value18: number = MIDDLE + 18;","cd64e6cfe3f8f1cf3dfa52713e60d941-import { MIDDLE } from \"./index\"; export const value19: number = MIDDLE + 19;","f42cf8b2d7e7e493625f42e8aa017ed7-import { MIDDLE } from \"./index\"; export const value2: number = MIDDLE + 2;","0dc5ecc5a433a0a69095cc86df0e7acb-import { MIDDLE } from \"./index\"; export const value3: number = MIDDLE + 3;","7f9e3a38604a594ab387f8dfd918258f-import { MIDDLE } from \"./index\"; export const value4: number = MIDDLE + 4;","f9a3d6a2070cb6a1d6435ed43bafe8d0-import { MIDDLE } from \"./index\"; export const value5: number = MIDDLE + 5;","5b2366864447ca9c879e6091dfcfc061-import { MIDDLE } from \"./index\"; export const value6: number = MIDDLE + 6;","b220e37761e31fb22cc699af54853a6f-import { MIDDLE } from \"./index\"; export const value7: number = MIDDLE + 7;","1ae7c0fbddb4b4edef3db8afdcc44a47-import { MIDDLE } from \"./index\"; export const value8: number = MIDDLE + 8;","c0bf97db94998341a9d9d03e37b4fe9c-import { MIDDLE } from \"./index\"; export const value9: number = MIDDLE + 9;"],"fileIdsList":[[2],[5],[4],[3]],"options":{"module":99,"outDir":"./out","rootDir":"./src","strict":true,"target":9,"tsBuildInfoFile":"./proj.tsbuildinfo"},"referencedMap":[[3,1],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2],[14,2],[15,2],[16,2],[17,2],[18,2],[19,2],[20,2],[21,2],[22,2],[23,2],[24,2],[25,2],[5,3],[4,4]]}
//// [/home/src/workspaces/project/proj.tsbuildinfo.readable.baseline.txt] *new* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "./src/left.ts",
        "./src/bridge.ts",
        "./src/middle.ts",
        "./src/index.ts",
        "./src/consumer0.ts",
        "./src/consumer1.ts",
        "./src/consumer10.ts",
        "./src/consumer11.ts",
        "./src/consumer12.ts",
        "./src/consumer13.ts",
        "./src/consumer14.ts",
        "./src/consumer15.ts",
        "./src/consumer16.ts",
        "./src/consumer17.ts",
        "./src/consumer18.ts",
        "./src/consumer19.ts",
        "./src/consumer2.ts",
        "./src/consumer3.ts",
        "./src/consumer4.ts",
        "./src/consumer5.ts",
        "./src/consumer6.ts",
        "./src/consumer7.ts",
        "./src/consumer8.ts",
        "./src/consumer9.ts"
      ],
      "original": [
        2,
        25
      ]
    }
  ],
  "fileNames": [
    "lib.es2022.full.d.ts",
    "./src/left.ts",
    "./src/bridge.ts",
    "./src/middle.ts",
    "./src/index.ts",
    "./src/consumer0.ts",
    "./src/consumer1.ts",
    "./src/consumer10.ts",
    "./src/consumer11.ts",
    "./src/consumer12.ts",
    "./src/consumer13.ts",
    "./src/consumer14.ts",
    "./src/consumer15.ts",
    "./src/consumer16.ts",
    "./src/consumer17.ts",
    "./src/consumer18.ts",
    "./src/consumer19.ts",
    "./src/consumer2.ts",
    "./src/consumer3.ts",
    "./src/consumer4.ts",
    "./src/consumer5.ts",
    "./src/consumer6.ts",
    "./src/consumer7.ts",
    "./src/consumer8.ts",
    "./src/consumer9.ts"
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
      "fileName": "./src/left.ts",
      "version": "a176df11ca84e5633826bf5695b045c5-export interface Root { field: number } export const LEFT = 1;",
      "signature": "a176df11ca84e5633826bf5695b045c5-export interface Root { field: number } export const LEFT = 1;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/bridge.ts",
      "version": "604f68a4a059ca48f099a7996bcd3a3d-export * from \"./left\";\n",
      "signature": "604f68a4a059ca48f099a7996bcd3a3d-export * from \"./left\";\n",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/middle.ts",
      "version": "f6cd5b56698c024758edfe93fab93fa6-\n   import { LEFT, Root } from \"./bridge\";\n   export const MIDDLE: number = LEFT + 1;\n   export function read(value: Root): number { return value.field + MIDDLE; }\n   export const enum Mode { A = 1, B = 2 }\n  ",
      "signature": "f6cd5b56698c024758edfe93fab93fa6-\n   import { LEFT, Root } from \"./bridge\";\n   export const MIDDLE: number = LEFT + 1;\n   export function read(value: Root): number { return value.field + MIDDLE; }\n   export const enum Mode { A = 1, B = 2 }\n  ",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/index.ts",
      "version": "24619ad00d3dcb702e6574283956d815-export * from \"./middle\";\n",
      "signature": "24619ad00d3dcb702e6574283956d815-export * from \"./middle\";\n",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer0.ts",
      "version": "f599d80e31464888d2974b61b7961ab2-import { MIDDLE } from \"./index\"; export const value0: number = MIDDLE + 0;",
      "signature": "f599d80e31464888d2974b61b7961ab2-import { MIDDLE } from \"./index\"; export const value0: number = MIDDLE + 0;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer1.ts",
      "version": "8c9d63fca7574796980d39f62a2e5bea-import { MIDDLE } from \"./index\"; export const value1: number = MIDDLE + 1;",
      "signature": "8c9d63fca7574796980d39f62a2e5bea-import { MIDDLE } from \"./index\"; export const value1: number = MIDDLE + 1;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer10.ts",
      "version": "a82dad01f7f31393ea7d1e8e94e985a2-import { MIDDLE } from \"./index\"; export const value10: number = MIDDLE + 10;",
      "signature": "a82dad01f7f31393ea7d1e8e94e985a2-import { MIDDLE } from \"./index\"; export const value10: number = MIDDLE + 10;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer11.ts",
      "version": "6fdb42dcf9662be7b24fa28101a66979-import { MIDDLE } from \"./index\"; export const value11: number = MIDDLE + 11;",
      "signature": "6fdb42dcf9662be7b24fa28101a66979-import { MIDDLE } from \"./index\"; export const value11: number = MIDDLE + 11;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer12.ts",
      "version": "07dffeae21acbb1ff33d5ecfae4547db-import { MIDDLE } from \"./index\"; export const value12: number = MIDDLE + 12;",
      "signature": "07dffeae21acbb1ff33d5ecfae4547db-import { MIDDLE } from \"./index\"; export const value12: number = MIDDLE + 12;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer13.ts",
      "version": "135caff3b737e238c5da1f7ddc1fb09e-import { MIDDLE } from \"./index\"; export const value13: number = MIDDLE + 13;",
      "signature": "135caff3b737e238c5da1f7ddc1fb09e-import { MIDDLE } from \"./index\"; export const value13: number = MIDDLE + 13;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer14.ts",
      "version": "dfcd29bbdc3189b92a7d1798f6c34176-import { MIDDLE } from \"./index\"; export const value14: number = MIDDLE + 14;",
      "signature": "dfcd29bbdc3189b92a7d1798f6c34176-import { MIDDLE } from \"./index\"; export const value14: number = MIDDLE + 14;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer15.ts",
      "version": "ab63d37ebfec1fecf97da7c14e3ae9b0-import { MIDDLE } from \"./index\"; export const value15: number = MIDDLE + 15;",
      "signature": "ab63d37ebfec1fecf97da7c14e3ae9b0-import { MIDDLE } from \"./index\"; export const value15: number = MIDDLE + 15;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer16.ts",
      "version": "d74fe22f789229922036aef4a5de8ae5-import { MIDDLE } from \"./index\"; export const value16: number = MIDDLE + 16;",
      "signature": "d74fe22f789229922036aef4a5de8ae5-import { MIDDLE } from \"./index\"; export const value16: number = MIDDLE + 16;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer17.ts",
      "version": "83a415cf5769df2d7c32d4ed0789c903-import { MIDDLE } from \"./index\"; export const value17: number = MIDDLE + 17;",
      "signature": "83a415cf5769df2d7c32d4ed0789c903-import { MIDDLE } from \"./index\"; export const value17: number = MIDDLE + 17;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer18.ts",
      "version": "4bc3224235cb202cf9c5a5739e6540bf-import { MIDDLE } from \"./index\"; export const value18: number = MIDDLE + 18;",
      "signature": "4bc3224235cb202cf9c5a5739e6540bf-import { MIDDLE } from \"./index\"; export const value18: number = MIDDLE + 18;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer19.ts",
      "version": "cd64e6cfe3f8f1cf3dfa52713e60d941-import { MIDDLE } from \"./index\"; export const value19: number = MIDDLE + 19;",
      "signature": "cd64e6cfe3f8f1cf3dfa52713e60d941-import { MIDDLE } from \"./index\"; export const value19: number = MIDDLE + 19;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer2.ts",
      "version": "f42cf8b2d7e7e493625f42e8aa017ed7-import { MIDDLE } from \"./index\"; export const value2: number = MIDDLE + 2;",
      "signature": "f42cf8b2d7e7e493625f42e8aa017ed7-import { MIDDLE } from \"./index\"; export const value2: number = MIDDLE + 2;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer3.ts",
      "version": "0dc5ecc5a433a0a69095cc86df0e7acb-import { MIDDLE } from \"./index\"; export const value3: number = MIDDLE + 3;",
      "signature": "0dc5ecc5a433a0a69095cc86df0e7acb-import { MIDDLE } from \"./index\"; export const value3: number = MIDDLE + 3;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer4.ts",
      "version": "7f9e3a38604a594ab387f8dfd918258f-import { MIDDLE } from \"./index\"; export const value4: number = MIDDLE + 4;",
      "signature": "7f9e3a38604a594ab387f8dfd918258f-import { MIDDLE } from \"./index\"; export const value4: number = MIDDLE + 4;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer5.ts",
      "version": "f9a3d6a2070cb6a1d6435ed43bafe8d0-import { MIDDLE } from \"./index\"; export const value5: number = MIDDLE + 5;",
      "signature": "f9a3d6a2070cb6a1d6435ed43bafe8d0-import { MIDDLE } from \"./index\"; export const value5: number = MIDDLE + 5;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer6.ts",
      "version": "5b2366864447ca9c879e6091dfcfc061-import { MIDDLE } from \"./index\"; export const value6: number = MIDDLE + 6;",
      "signature": "5b2366864447ca9c879e6091dfcfc061-import { MIDDLE } from \"./index\"; export const value6: number = MIDDLE + 6;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer7.ts",
      "version": "b220e37761e31fb22cc699af54853a6f-import { MIDDLE } from \"./index\"; export const value7: number = MIDDLE + 7;",
      "signature": "b220e37761e31fb22cc699af54853a6f-import { MIDDLE } from \"./index\"; export const value7: number = MIDDLE + 7;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer8.ts",
      "version": "1ae7c0fbddb4b4edef3db8afdcc44a47-import { MIDDLE } from \"./index\"; export const value8: number = MIDDLE + 8;",
      "signature": "1ae7c0fbddb4b4edef3db8afdcc44a47-import { MIDDLE } from \"./index\"; export const value8: number = MIDDLE + 8;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer9.ts",
      "version": "c0bf97db94998341a9d9d03e37b4fe9c-import { MIDDLE } from \"./index\"; export const value9: number = MIDDLE + 9;",
      "signature": "c0bf97db94998341a9d9d03e37b4fe9c-import { MIDDLE } from \"./index\"; export const value9: number = MIDDLE + 9;",
      "impliedNodeFormat": "CommonJS"
    }
  ],
  "fileIdsList": [
    [
      "./src/left.ts"
    ],
    [
      "./src/index.ts"
    ],
    [
      "./src/middle.ts"
    ],
    [
      "./src/bridge.ts"
    ]
  ],
  "options": {
    "module": 99,
    "outDir": "./out",
    "rootDir": "./src",
    "strict": true,
    "target": 9,
    "tsBuildInfoFile": "./proj.tsbuildinfo"
  },
  "referencedMap": {
    "./src/bridge.ts": [
      "./src/left.ts"
    ],
    "./src/consumer0.ts": [
      "./src/index.ts"
    ],
    "./src/consumer1.ts": [
      "./src/index.ts"
    ],
    "./src/consumer10.ts": [
      "./src/index.ts"
    ],
    "./src/consumer11.ts": [
      "./src/index.ts"
    ],
    "./src/consumer12.ts": [
      "./src/index.ts"
    ],
    "./src/consumer13.ts": [
      "./src/index.ts"
    ],
    "./src/consumer14.ts": [
      "./src/index.ts"
    ],
    "./src/consumer15.ts": [
      "./src/index.ts"
    ],
    "./src/consumer16.ts": [
      "./src/index.ts"
    ],
    "./src/consumer17.ts": [
      "./src/index.ts"
    ],
    "./src/consumer18.ts": [
      "./src/index.ts"
    ],
    "./src/consumer19.ts": [
      "./src/index.ts"
    ],
    "./src/consumer2.ts": [
      "./src/index.ts"
    ],
    "./src/consumer3.ts": [
      "./src/index.ts"
    ],
    "./src/consumer4.ts": [
      "./src/index.ts"
    ],
    "./src/consumer5.ts": [
      "./src/index.ts"
    ],
    "./src/consumer6.ts": [
      "./src/index.ts"
    ],
    "./src/consumer7.ts": [
      "./src/index.ts"
    ],
    "./src/consumer8.ts": [
      "./src/index.ts"
    ],
    "./src/consumer9.ts": [
      "./src/index.ts"
    ],
    "./src/index.ts": [
      "./src/middle.ts"
    ],
    "./src/middle.ts": [
      "./src/bridge.ts"
    ]
  },
  "size": 4448
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/tslibs/TS/Lib/lib.es2022.full.d.ts
*refresh*    /home/src/workspaces/project/src/left.ts
*refresh*    /home/src/workspaces/project/src/bridge.ts
*refresh*    /home/src/workspaces/project/src/middle.ts
*refresh*    /home/src/workspaces/project/src/index.ts
*refresh*    /home/src/workspaces/project/src/consumer0.ts
*refresh*    /home/src/workspaces/project/src/consumer1.ts
*refresh*    /home/src/workspaces/project/src/consumer10.ts
*refresh*    /home/src/workspaces/project/src/consumer11.ts
*refresh*    /home/src/workspaces/project/src/consumer12.ts
*refresh*    /home/src/workspaces/project/src/consumer13.ts
*refresh*    /home/src/workspaces/project/src/consumer14.ts
*refresh*    /home/src/workspaces/project/src/consumer15.ts
*refresh*    /home/src/workspaces/project/src/consumer16.ts
*refresh*    /home/src/workspaces/project/src/consumer17.ts
*refresh*    /home/src/workspaces/project/src/consumer18.ts
*refresh*    /home/src/workspaces/project/src/consumer19.ts
*refresh*    /home/src/workspaces/project/src/consumer2.ts
*refresh*    /home/src/workspaces/project/src/consumer3.ts
*refresh*    /home/src/workspaces/project/src/consumer4.ts
*refresh*    /home/src/workspaces/project/src/consumer5.ts
*refresh*    /home/src/workspaces/project/src/consumer6.ts
*refresh*    /home/src/workspaces/project/src/consumer7.ts
*refresh*    /home/src/workspaces/project/src/consumer8.ts
*refresh*    /home/src/workspaces/project/src/consumer9.ts
Signatures::


Edit [0]:: whitespace in origin
//// [/home/src/workspaces/project/src/left.ts] *modified* 
export interface Root { field: number } export const LEFT = 1;


tsgo -b
ExitStatus:: Success
Output::
//// [/home/src/workspaces/project/out/bridge.js] *rewrite with same content*
//// [/home/src/workspaces/project/out/left.js] *rewrite with same content*
//// [/home/src/workspaces/project/proj.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","root":[[2,25]],"fileNames":["lib.es2022.full.d.ts","./src/left.ts","./src/bridge.ts","./src/middle.ts","./src/index.ts","./src/consumer0.ts","./src/consumer1.ts","./src/consumer10.ts","./src/consumer11.ts","./src/consumer12.ts","./src/consumer13.ts","./src/consumer14.ts","./src/consumer15.ts","./src/consumer16.ts","./src/consumer17.ts","./src/consumer18.ts","./src/consumer19.ts","./src/consumer2.ts","./src/consumer3.ts","./src/consumer4.ts","./src/consumer5.ts","./src/consumer6.ts","./src/consumer7.ts","./src/consumer8.ts","./src/consumer9.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"297f7e27e346783eeba2305b83b91505-export interface Root { field: number } export const LEFT = 1;\n","signature":"4ca7bc6a0b04a23d31b4c3a29e0669bd-export interface Root {\n    field: number;\n}\nexport declare const LEFT = 1;\n","impliedNodeFormat":1},"604f68a4a059ca48f099a7996bcd3a3d-export * from \"./left\";\n",{"version":"f6cd5b56698c024758edfe93fab93fa6-\n   import { LEFT, Root } from \"./bridge\";\n   export const MIDDLE: number = LEFT + 1;\n   export function read(value: Root): number { return value.field + MIDDLE; }\n   export const enum Mode { A = 1, B = 2 }\n  ","signature":"c4415a588fa756cc31d60c195a343d70-import { Root } from \"./bridge\";\nexport declare const MIDDLE: number;\nexport declare function read(value: Root): number;\nexport declare const enum Mode {\n    A = 1,\n    B = 2\n}\n","impliedNodeFormat":1},"24619ad00d3dcb702e6574283956d815-export * from \"./middle\";\n",{"version":"f599d80e31464888d2974b61b7961ab2-import { MIDDLE } from \"./index\"; export const value0: number = MIDDLE + 0;","signature":"d9f0b209f519500f7590cbe3f0a31240-export declare const value0: number;\n","impliedNodeFormat":1},{"version":"8c9d63fca7574796980d39f62a2e5bea-import { MIDDLE } from \"./index\"; export const value1: number = MIDDLE + 1;","signature":"94769186db3783d0b444601fa902cc5c-export declare const value1: number;\n","impliedNodeFormat":1},{"version":"a82dad01f7f31393ea7d1e8e94e985a2-import { MIDDLE } from \"./index\"; export const value10: number = MIDDLE + 10;","signature":"57d59e0236212807dbfaf4e780933fa6-export declare const value10: number;\n","impliedNodeFormat":1},{"version":"6fdb42dcf9662be7b24fa28101a66979-import { MIDDLE } from \"./index\"; export const value11: number = MIDDLE + 11;","signature":"3a5866a00fa8954d65aa3d166b65afc8-export declare const value11: number;\n","impliedNodeFormat":1},{"version":"07dffeae21acbb1ff33d5ecfae4547db-import { MIDDLE } from \"./index\"; export const value12: number = MIDDLE + 12;","signature":"c43b78531b70537df462a7d13f8413bb-export declare const value12: number;\n","impliedNodeFormat":1},{"version":"135caff3b737e238c5da1f7ddc1fb09e-import { MIDDLE } from \"./index\"; export const value13: number = MIDDLE + 13;","signature":"dc7561fc46962f51bbda589bd6c81ed1-export declare const value13: number;\n","impliedNodeFormat":1},{"version":"dfcd29bbdc3189b92a7d1798f6c34176-import { MIDDLE } from \"./index\"; export const value14: number = MIDDLE + 14;","signature":"80ef7fa9628cf1dac9de44b32d5f4b48-export declare const value14: number;\n","impliedNodeFormat":1},{"version":"ab63d37ebfec1fecf97da7c14e3ae9b0-import { MIDDLE } from \"./index\"; export const value15: number = MIDDLE + 15;","signature":"4baaec5ae032fcc592149ff9a2db099d-export declare const value15: number;\n","impliedNodeFormat":1},{"version":"d74fe22f789229922036aef4a5de8ae5-import { MIDDLE } from \"./index\"; export const value16: number = MIDDLE + 16;","signature":"60dbfbd282e5ed73c4b97e7097193f59-export declare const value16: number;\n","impliedNodeFormat":1},{"version":"83a415cf5769df2d7c32d4ed0789c903-import { MIDDLE } from \"./index\"; export const value17: number = MIDDLE + 17;","signature":"04dd9df0c69bb931b9057ce6f7a72d5b-export declare const value17: number;\n","impliedNodeFormat":1},{"version":"4bc3224235cb202cf9c5a5739e6540bf-import { MIDDLE } from \"./index\"; export const value18: number = MIDDLE + 18;","signature":"19fd3afb2ce96ba75ac4cb73b4d1b5a2-export declare const value18: number;\n","impliedNodeFormat":1},{"version":"cd64e6cfe3f8f1cf3dfa52713e60d941-import { MIDDLE } from \"./index\"; export const value19: number = MIDDLE + 19;","signature":"336cf5d28bc9b098c2a1ce86c4e5a503-export declare const value19: number;\n","impliedNodeFormat":1},{"version":"f42cf8b2d7e7e493625f42e8aa017ed7-import { MIDDLE } from \"./index\"; export const value2: number = MIDDLE + 2;","signature":"1dd8845cc9445ccb0055d7842a9049a6-export declare const value2: number;\n","impliedNodeFormat":1},{"version":"0dc5ecc5a433a0a69095cc86df0e7acb-import { MIDDLE } from \"./index\"; export const value3: number = MIDDLE + 3;","signature":"2219284cce88c1e00e6c4aaca4954cf9-export declare const value3: number;\n","impliedNodeFormat":1},{"version":"7f9e3a38604a594ab387f8dfd918258f-import { MIDDLE } from \"./index\"; export const value4: number = MIDDLE + 4;","signature":"f21e8ccb7663a3264ffb23577cd2e3de-export declare const value4: number;\n","impliedNodeFormat":1},{"version":"f9a3d6a2070cb6a1d6435ed43bafe8d0-import { MIDDLE } from \"./index\"; export const value5: number = MIDDLE + 5;","signature":"9ec8708b4c31168e2a960e86f366d59a-export declare const value5: number;\n","impliedNodeFormat":1},{"version":"5b2366864447ca9c879e6091dfcfc061-import { MIDDLE } from \"./index\"; export const value6: number = MIDDLE + 6;","signature":"a5175c601bc111593e1db48c43a5bc0f-export declare const value6: number;\n","impliedNodeFormat":1},{"version":"b220e37761e31fb22cc699af54853a6f-import { MIDDLE } from \"./index\"; export const value7: number = MIDDLE + 7;","signature":"be7fe754a97d3472d9c0b15882f38047-export declare const value7: number;\n","impliedNodeFormat":1},{"version":"1ae7c0fbddb4b4edef3db8afdcc44a47-import { MIDDLE } from \"./index\"; export const value8: number = MIDDLE + 8;","signature":"082a1019ffa5b6413fb72472452e6f84-export declare const value8: number;\n","impliedNodeFormat":1},{"version":"c0bf97db94998341a9d9d03e37b4fe9c-import { MIDDLE } from \"./index\"; export const value9: number = MIDDLE + 9;","signature":"16ea1ac60c846267d5f289408b0466d5-export declare const value9: number;\n","impliedNodeFormat":1}],"fileIdsList":[[2],[5],[4],[3]],"options":{"module":99,"outDir":"./out","rootDir":"./src","strict":true,"target":9,"tsBuildInfoFile":"./proj.tsbuildinfo"},"referencedMap":[[3,1],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2],[14,2],[15,2],[16,2],[17,2],[18,2],[19,2],[20,2],[21,2],[22,2],[23,2],[24,2],[25,2],[5,3],[4,4]]}
//// [/home/src/workspaces/project/proj.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "./src/left.ts",
        "./src/bridge.ts",
        "./src/middle.ts",
        "./src/index.ts",
        "./src/consumer0.ts",
        "./src/consumer1.ts",
        "./src/consumer10.ts",
        "./src/consumer11.ts",
        "./src/consumer12.ts",
        "./src/consumer13.ts",
        "./src/consumer14.ts",
        "./src/consumer15.ts",
        "./src/consumer16.ts",
        "./src/consumer17.ts",
        "./src/consumer18.ts",
        "./src/consumer19.ts",
        "./src/consumer2.ts",
        "./src/consumer3.ts",
        "./src/consumer4.ts",
        "./src/consumer5.ts",
        "./src/consumer6.ts",
        "./src/consumer7.ts",
        "./src/consumer8.ts",
        "./src/consumer9.ts"
      ],
      "original": [
        2,
        25
      ]
    }
  ],
  "fileNames": [
    "lib.es2022.full.d.ts",
    "./src/left.ts",
    "./src/bridge.ts",
    "./src/middle.ts",
    "./src/index.ts",
    "./src/consumer0.ts",
    "./src/consumer1.ts",
    "./src/consumer10.ts",
    "./src/consumer11.ts",
    "./src/consumer12.ts",
    "./src/consumer13.ts",
    "./src/consumer14.ts",
    "./src/consumer15.ts",
    "./src/consumer16.ts",
    "./src/consumer17.ts",
    "./src/consumer18.ts",
    "./src/consumer19.ts",
    "./src/consumer2.ts",
    "./src/consumer3.ts",
    "./src/consumer4.ts",
    "./src/consumer5.ts",
    "./src/consumer6.ts",
    "./src/consumer7.ts",
    "./src/consumer8.ts",
    "./src/consumer9.ts"
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
      "fileName": "./src/left.ts",
      "version": "297f7e27e346783eeba2305b83b91505-export interface Root { field: number } export const LEFT = 1;\n",
      "signature": "4ca7bc6a0b04a23d31b4c3a29e0669bd-export interface Root {\n    field: number;\n}\nexport declare const LEFT = 1;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "297f7e27e346783eeba2305b83b91505-export interface Root { field: number } export const LEFT = 1;\n",
        "signature": "4ca7bc6a0b04a23d31b4c3a29e0669bd-export interface Root {\n    field: number;\n}\nexport declare const LEFT = 1;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/bridge.ts",
      "version": "604f68a4a059ca48f099a7996bcd3a3d-export * from \"./left\";\n",
      "signature": "604f68a4a059ca48f099a7996bcd3a3d-export * from \"./left\";\n",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/middle.ts",
      "version": "f6cd5b56698c024758edfe93fab93fa6-\n   import { LEFT, Root } from \"./bridge\";\n   export const MIDDLE: number = LEFT + 1;\n   export function read(value: Root): number { return value.field + MIDDLE; }\n   export const enum Mode { A = 1, B = 2 }\n  ",
      "signature": "c4415a588fa756cc31d60c195a343d70-import { Root } from \"./bridge\";\nexport declare const MIDDLE: number;\nexport declare function read(value: Root): number;\nexport declare const enum Mode {\n    A = 1,\n    B = 2\n}\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f6cd5b56698c024758edfe93fab93fa6-\n   import { LEFT, Root } from \"./bridge\";\n   export const MIDDLE: number = LEFT + 1;\n   export function read(value: Root): number { return value.field + MIDDLE; }\n   export const enum Mode { A = 1, B = 2 }\n  ",
        "signature": "c4415a588fa756cc31d60c195a343d70-import { Root } from \"./bridge\";\nexport declare const MIDDLE: number;\nexport declare function read(value: Root): number;\nexport declare const enum Mode {\n    A = 1,\n    B = 2\n}\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/index.ts",
      "version": "24619ad00d3dcb702e6574283956d815-export * from \"./middle\";\n",
      "signature": "24619ad00d3dcb702e6574283956d815-export * from \"./middle\";\n",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer0.ts",
      "version": "f599d80e31464888d2974b61b7961ab2-import { MIDDLE } from \"./index\"; export const value0: number = MIDDLE + 0;",
      "signature": "d9f0b209f519500f7590cbe3f0a31240-export declare const value0: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f599d80e31464888d2974b61b7961ab2-import { MIDDLE } from \"./index\"; export const value0: number = MIDDLE + 0;",
        "signature": "d9f0b209f519500f7590cbe3f0a31240-export declare const value0: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer1.ts",
      "version": "8c9d63fca7574796980d39f62a2e5bea-import { MIDDLE } from \"./index\"; export const value1: number = MIDDLE + 1;",
      "signature": "94769186db3783d0b444601fa902cc5c-export declare const value1: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "8c9d63fca7574796980d39f62a2e5bea-import { MIDDLE } from \"./index\"; export const value1: number = MIDDLE + 1;",
        "signature": "94769186db3783d0b444601fa902cc5c-export declare const value1: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer10.ts",
      "version": "a82dad01f7f31393ea7d1e8e94e985a2-import { MIDDLE } from \"./index\"; export const value10: number = MIDDLE + 10;",
      "signature": "57d59e0236212807dbfaf4e780933fa6-export declare const value10: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "a82dad01f7f31393ea7d1e8e94e985a2-import { MIDDLE } from \"./index\"; export const value10: number = MIDDLE + 10;",
        "signature": "57d59e0236212807dbfaf4e780933fa6-export declare const value10: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer11.ts",
      "version": "6fdb42dcf9662be7b24fa28101a66979-import { MIDDLE } from \"./index\"; export const value11: number = MIDDLE + 11;",
      "signature": "3a5866a00fa8954d65aa3d166b65afc8-export declare const value11: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "6fdb42dcf9662be7b24fa28101a66979-import { MIDDLE } from \"./index\"; export const value11: number = MIDDLE + 11;",
        "signature": "3a5866a00fa8954d65aa3d166b65afc8-export declare const value11: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer12.ts",
      "version": "07dffeae21acbb1ff33d5ecfae4547db-import { MIDDLE } from \"./index\"; export const value12: number = MIDDLE + 12;",
      "signature": "c43b78531b70537df462a7d13f8413bb-export declare const value12: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "07dffeae21acbb1ff33d5ecfae4547db-import { MIDDLE } from \"./index\"; export const value12: number = MIDDLE + 12;",
        "signature": "c43b78531b70537df462a7d13f8413bb-export declare const value12: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer13.ts",
      "version": "135caff3b737e238c5da1f7ddc1fb09e-import { MIDDLE } from \"./index\"; export const value13: number = MIDDLE + 13;",
      "signature": "dc7561fc46962f51bbda589bd6c81ed1-export declare const value13: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "135caff3b737e238c5da1f7ddc1fb09e-import { MIDDLE } from \"./index\"; export const value13: number = MIDDLE + 13;",
        "signature": "dc7561fc46962f51bbda589bd6c81ed1-export declare const value13: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer14.ts",
      "version": "dfcd29bbdc3189b92a7d1798f6c34176-import { MIDDLE } from \"./index\"; export const value14: number = MIDDLE + 14;",
      "signature": "80ef7fa9628cf1dac9de44b32d5f4b48-export declare const value14: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "dfcd29bbdc3189b92a7d1798f6c34176-import { MIDDLE } from \"./index\"; export const value14: number = MIDDLE + 14;",
        "signature": "80ef7fa9628cf1dac9de44b32d5f4b48-export declare const value14: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer15.ts",
      "version": "ab63d37ebfec1fecf97da7c14e3ae9b0-import { MIDDLE } from \"./index\"; export const value15: number = MIDDLE + 15;",
      "signature": "4baaec5ae032fcc592149ff9a2db099d-export declare const value15: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "ab63d37ebfec1fecf97da7c14e3ae9b0-import { MIDDLE } from \"./index\"; export const value15: number = MIDDLE + 15;",
        "signature": "4baaec5ae032fcc592149ff9a2db099d-export declare const value15: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer16.ts",
      "version": "d74fe22f789229922036aef4a5de8ae5-import { MIDDLE } from \"./index\"; export const value16: number = MIDDLE + 16;",
      "signature": "60dbfbd282e5ed73c4b97e7097193f59-export declare const value16: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "d74fe22f789229922036aef4a5de8ae5-import { MIDDLE } from \"./index\"; export const value16: number = MIDDLE + 16;",
        "signature": "60dbfbd282e5ed73c4b97e7097193f59-export declare const value16: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer17.ts",
      "version": "83a415cf5769df2d7c32d4ed0789c903-import { MIDDLE } from \"./index\"; export const value17: number = MIDDLE + 17;",
      "signature": "04dd9df0c69bb931b9057ce6f7a72d5b-export declare const value17: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "83a415cf5769df2d7c32d4ed0789c903-import { MIDDLE } from \"./index\"; export const value17: number = MIDDLE + 17;",
        "signature": "04dd9df0c69bb931b9057ce6f7a72d5b-export declare const value17: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer18.ts",
      "version": "4bc3224235cb202cf9c5a5739e6540bf-import { MIDDLE } from \"./index\"; export const value18: number = MIDDLE + 18;",
      "signature": "19fd3afb2ce96ba75ac4cb73b4d1b5a2-export declare const value18: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "4bc3224235cb202cf9c5a5739e6540bf-import { MIDDLE } from \"./index\"; export const value18: number = MIDDLE + 18;",
        "signature": "19fd3afb2ce96ba75ac4cb73b4d1b5a2-export declare const value18: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer19.ts",
      "version": "cd64e6cfe3f8f1cf3dfa52713e60d941-import { MIDDLE } from \"./index\"; export const value19: number = MIDDLE + 19;",
      "signature": "336cf5d28bc9b098c2a1ce86c4e5a503-export declare const value19: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "cd64e6cfe3f8f1cf3dfa52713e60d941-import { MIDDLE } from \"./index\"; export const value19: number = MIDDLE + 19;",
        "signature": "336cf5d28bc9b098c2a1ce86c4e5a503-export declare const value19: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer2.ts",
      "version": "f42cf8b2d7e7e493625f42e8aa017ed7-import { MIDDLE } from \"./index\"; export const value2: number = MIDDLE + 2;",
      "signature": "1dd8845cc9445ccb0055d7842a9049a6-export declare const value2: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f42cf8b2d7e7e493625f42e8aa017ed7-import { MIDDLE } from \"./index\"; export const value2: number = MIDDLE + 2;",
        "signature": "1dd8845cc9445ccb0055d7842a9049a6-export declare const value2: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer3.ts",
      "version": "0dc5ecc5a433a0a69095cc86df0e7acb-import { MIDDLE } from \"./index\"; export const value3: number = MIDDLE + 3;",
      "signature": "2219284cce88c1e00e6c4aaca4954cf9-export declare const value3: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "0dc5ecc5a433a0a69095cc86df0e7acb-import { MIDDLE } from \"./index\"; export const value3: number = MIDDLE + 3;",
        "signature": "2219284cce88c1e00e6c4aaca4954cf9-export declare const value3: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer4.ts",
      "version": "7f9e3a38604a594ab387f8dfd918258f-import { MIDDLE } from \"./index\"; export const value4: number = MIDDLE + 4;",
      "signature": "f21e8ccb7663a3264ffb23577cd2e3de-export declare const value4: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "7f9e3a38604a594ab387f8dfd918258f-import { MIDDLE } from \"./index\"; export const value4: number = MIDDLE + 4;",
        "signature": "f21e8ccb7663a3264ffb23577cd2e3de-export declare const value4: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer5.ts",
      "version": "f9a3d6a2070cb6a1d6435ed43bafe8d0-import { MIDDLE } from \"./index\"; export const value5: number = MIDDLE + 5;",
      "signature": "9ec8708b4c31168e2a960e86f366d59a-export declare const value5: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f9a3d6a2070cb6a1d6435ed43bafe8d0-import { MIDDLE } from \"./index\"; export const value5: number = MIDDLE + 5;",
        "signature": "9ec8708b4c31168e2a960e86f366d59a-export declare const value5: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer6.ts",
      "version": "5b2366864447ca9c879e6091dfcfc061-import { MIDDLE } from \"./index\"; export const value6: number = MIDDLE + 6;",
      "signature": "a5175c601bc111593e1db48c43a5bc0f-export declare const value6: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "5b2366864447ca9c879e6091dfcfc061-import { MIDDLE } from \"./index\"; export const value6: number = MIDDLE + 6;",
        "signature": "a5175c601bc111593e1db48c43a5bc0f-export declare const value6: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer7.ts",
      "version": "b220e37761e31fb22cc699af54853a6f-import { MIDDLE } from \"./index\"; export const value7: number = MIDDLE + 7;",
      "signature": "be7fe754a97d3472d9c0b15882f38047-export declare const value7: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "b220e37761e31fb22cc699af54853a6f-import { MIDDLE } from \"./index\"; export const value7: number = MIDDLE + 7;",
        "signature": "be7fe754a97d3472d9c0b15882f38047-export declare const value7: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer8.ts",
      "version": "1ae7c0fbddb4b4edef3db8afdcc44a47-import { MIDDLE } from \"./index\"; export const value8: number = MIDDLE + 8;",
      "signature": "082a1019ffa5b6413fb72472452e6f84-export declare const value8: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "1ae7c0fbddb4b4edef3db8afdcc44a47-import { MIDDLE } from \"./index\"; export const value8: number = MIDDLE + 8;",
        "signature": "082a1019ffa5b6413fb72472452e6f84-export declare const value8: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer9.ts",
      "version": "c0bf97db94998341a9d9d03e37b4fe9c-import { MIDDLE } from \"./index\"; export const value9: number = MIDDLE + 9;",
      "signature": "16ea1ac60c846267d5f289408b0466d5-export declare const value9: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "c0bf97db94998341a9d9d03e37b4fe9c-import { MIDDLE } from \"./index\"; export const value9: number = MIDDLE + 9;",
        "signature": "16ea1ac60c846267d5f289408b0466d5-export declare const value9: number;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "./src/left.ts"
    ],
    [
      "./src/index.ts"
    ],
    [
      "./src/middle.ts"
    ],
    [
      "./src/bridge.ts"
    ]
  ],
  "options": {
    "module": 99,
    "outDir": "./out",
    "rootDir": "./src",
    "strict": true,
    "target": 9,
    "tsBuildInfoFile": "./proj.tsbuildinfo"
  },
  "referencedMap": {
    "./src/bridge.ts": [
      "./src/left.ts"
    ],
    "./src/consumer0.ts": [
      "./src/index.ts"
    ],
    "./src/consumer1.ts": [
      "./src/index.ts"
    ],
    "./src/consumer10.ts": [
      "./src/index.ts"
    ],
    "./src/consumer11.ts": [
      "./src/index.ts"
    ],
    "./src/consumer12.ts": [
      "./src/index.ts"
    ],
    "./src/consumer13.ts": [
      "./src/index.ts"
    ],
    "./src/consumer14.ts": [
      "./src/index.ts"
    ],
    "./src/consumer15.ts": [
      "./src/index.ts"
    ],
    "./src/consumer16.ts": [
      "./src/index.ts"
    ],
    "./src/consumer17.ts": [
      "./src/index.ts"
    ],
    "./src/consumer18.ts": [
      "./src/index.ts"
    ],
    "./src/consumer19.ts": [
      "./src/index.ts"
    ],
    "./src/consumer2.ts": [
      "./src/index.ts"
    ],
    "./src/consumer3.ts": [
      "./src/index.ts"
    ],
    "./src/consumer4.ts": [
      "./src/index.ts"
    ],
    "./src/consumer5.ts": [
      "./src/index.ts"
    ],
    "./src/consumer6.ts": [
      "./src/index.ts"
    ],
    "./src/consumer7.ts": [
      "./src/index.ts"
    ],
    "./src/consumer8.ts": [
      "./src/index.ts"
    ],
    "./src/consumer9.ts": [
      "./src/index.ts"
    ],
    "./src/index.ts": [
      "./src/middle.ts"
    ],
    "./src/middle.ts": [
      "./src/bridge.ts"
    ]
  },
  "size": 7290
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/workspaces/project/src/left.ts
*refresh*    /home/src/workspaces/project/src/bridge.ts
*refresh*    /home/src/workspaces/project/src/middle.ts
*refresh*    /home/src/workspaces/project/src/index.ts
*refresh*    /home/src/workspaces/project/src/consumer0.ts
*refresh*    /home/src/workspaces/project/src/consumer1.ts
*refresh*    /home/src/workspaces/project/src/consumer10.ts
*refresh*    /home/src/workspaces/project/src/consumer11.ts
*refresh*    /home/src/workspaces/project/src/consumer12.ts
*refresh*    /home/src/workspaces/project/src/consumer13.ts
*refresh*    /home/src/workspaces/project/src/consumer14.ts
*refresh*    /home/src/workspaces/project/src/consumer15.ts
*refresh*    /home/src/workspaces/project/src/consumer16.ts
*refresh*    /home/src/workspaces/project/src/consumer17.ts
*refresh*    /home/src/workspaces/project/src/consumer18.ts
*refresh*    /home/src/workspaces/project/src/consumer19.ts
*refresh*    /home/src/workspaces/project/src/consumer2.ts
*refresh*    /home/src/workspaces/project/src/consumer3.ts
*refresh*    /home/src/workspaces/project/src/consumer4.ts
*refresh*    /home/src/workspaces/project/src/consumer5.ts
*refresh*    /home/src/workspaces/project/src/consumer6.ts
*refresh*    /home/src/workspaces/project/src/consumer7.ts
*refresh*    /home/src/workspaces/project/src/consumer8.ts
*refresh*    /home/src/workspaces/project/src/consumer9.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/src/left.ts
(computed .d.ts) /home/src/workspaces/project/src/bridge.ts
(computed .d.ts) /home/src/workspaces/project/src/middle.ts
(computed .d.ts) /home/src/workspaces/project/src/index.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer0.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer1.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer10.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer11.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer12.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer13.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer14.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer15.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer16.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer17.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer18.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer19.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer2.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer3.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer4.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer5.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer6.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer7.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer8.ts
(computed .d.ts) /home/src/workspaces/project/src/consumer9.ts


Edit [1]:: first whitespace in middle
//// [/home/src/workspaces/project/src/middle.ts] *modified* 

   import { LEFT, Root } from "./bridge";
   export const MIDDLE: number = LEFT + 1;
   export function read(value: Root): number { return value.field + MIDDLE; }
   export const enum Mode { A = 1, B = 2 }
  


tsgo -b
ExitStatus:: Success
Output::
//// [/home/src/workspaces/project/out/middle.js] *rewrite with same content*
//// [/home/src/workspaces/project/proj.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","root":[[2,25]],"fileNames":["lib.es2022.full.d.ts","./src/left.ts","./src/bridge.ts","./src/middle.ts","./src/index.ts","./src/consumer0.ts","./src/consumer1.ts","./src/consumer10.ts","./src/consumer11.ts","./src/consumer12.ts","./src/consumer13.ts","./src/consumer14.ts","./src/consumer15.ts","./src/consumer16.ts","./src/consumer17.ts","./src/consumer18.ts","./src/consumer19.ts","./src/consumer2.ts","./src/consumer3.ts","./src/consumer4.ts","./src/consumer5.ts","./src/consumer6.ts","./src/consumer7.ts","./src/consumer8.ts","./src/consumer9.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"297f7e27e346783eeba2305b83b91505-export interface Root { field: number } export const LEFT = 1;\n","signature":"4ca7bc6a0b04a23d31b4c3a29e0669bd-export interface Root {\n    field: number;\n}\nexport declare const LEFT = 1;\n","impliedNodeFormat":1},"604f68a4a059ca48f099a7996bcd3a3d-export * from \"./left\";\n",{"version":"fa810b01612597a8d8bc615107e8bdce-\n   import { LEFT, Root } from \"./bridge\";\n   export const MIDDLE: number = LEFT + 1;\n   export function read(value: Root): number { return value.field + MIDDLE; }\n   export const enum Mode { A = 1, B = 2 }\n  \n","signature":"c4415a588fa756cc31d60c195a343d70-import { Root } from \"./bridge\";\nexport declare const MIDDLE: number;\nexport declare function read(value: Root): number;\nexport declare const enum Mode {\n    A = 1,\n    B = 2\n}\n","impliedNodeFormat":1},"24619ad00d3dcb702e6574283956d815-export * from \"./middle\";\n",{"version":"f599d80e31464888d2974b61b7961ab2-import { MIDDLE } from \"./index\"; export const value0: number = MIDDLE + 0;","signature":"d9f0b209f519500f7590cbe3f0a31240-export declare const value0: number;\n","impliedNodeFormat":1},{"version":"8c9d63fca7574796980d39f62a2e5bea-import { MIDDLE } from \"./index\"; export const value1: number = MIDDLE + 1;","signature":"94769186db3783d0b444601fa902cc5c-export declare const value1: number;\n","impliedNodeFormat":1},{"version":"a82dad01f7f31393ea7d1e8e94e985a2-import { MIDDLE } from \"./index\"; export const value10: number = MIDDLE + 10;","signature":"57d59e0236212807dbfaf4e780933fa6-export declare const value10: number;\n","impliedNodeFormat":1},{"version":"6fdb42dcf9662be7b24fa28101a66979-import { MIDDLE } from \"./index\"; export const value11: number = MIDDLE + 11;","signature":"3a5866a00fa8954d65aa3d166b65afc8-export declare const value11: number;\n","impliedNodeFormat":1},{"version":"07dffeae21acbb1ff33d5ecfae4547db-import { MIDDLE } from \"./index\"; export const value12: number = MIDDLE + 12;","signature":"c43b78531b70537df462a7d13f8413bb-export declare const value12: number;\n","impliedNodeFormat":1},{"version":"135caff3b737e238c5da1f7ddc1fb09e-import { MIDDLE } from \"./index\"; export const value13: number = MIDDLE + 13;","signature":"dc7561fc46962f51bbda589bd6c81ed1-export declare const value13: number;\n","impliedNodeFormat":1},{"version":"dfcd29bbdc3189b92a7d1798f6c34176-import { MIDDLE } from \"./index\"; export const value14: number = MIDDLE + 14;","signature":"80ef7fa9628cf1dac9de44b32d5f4b48-export declare const value14: number;\n","impliedNodeFormat":1},{"version":"ab63d37ebfec1fecf97da7c14e3ae9b0-import { MIDDLE } from \"./index\"; export const value15: number = MIDDLE + 15;","signature":"4baaec5ae032fcc592149ff9a2db099d-export declare const value15: number;\n","impliedNodeFormat":1},{"version":"d74fe22f789229922036aef4a5de8ae5-import { MIDDLE } from \"./index\"; export const value16: number = MIDDLE + 16;","signature":"60dbfbd282e5ed73c4b97e7097193f59-export declare const value16: number;\n","impliedNodeFormat":1},{"version":"83a415cf5769df2d7c32d4ed0789c903-import { MIDDLE } from \"./index\"; export const value17: number = MIDDLE + 17;","signature":"04dd9df0c69bb931b9057ce6f7a72d5b-export declare const value17: number;\n","impliedNodeFormat":1},{"version":"4bc3224235cb202cf9c5a5739e6540bf-import { MIDDLE } from \"./index\"; export const value18: number = MIDDLE + 18;","signature":"19fd3afb2ce96ba75ac4cb73b4d1b5a2-export declare const value18: number;\n","impliedNodeFormat":1},{"version":"cd64e6cfe3f8f1cf3dfa52713e60d941-import { MIDDLE } from \"./index\"; export const value19: number = MIDDLE + 19;","signature":"336cf5d28bc9b098c2a1ce86c4e5a503-export declare const value19: number;\n","impliedNodeFormat":1},{"version":"f42cf8b2d7e7e493625f42e8aa017ed7-import { MIDDLE } from \"./index\"; export const value2: number = MIDDLE + 2;","signature":"1dd8845cc9445ccb0055d7842a9049a6-export declare const value2: number;\n","impliedNodeFormat":1},{"version":"0dc5ecc5a433a0a69095cc86df0e7acb-import { MIDDLE } from \"./index\"; export const value3: number = MIDDLE + 3;","signature":"2219284cce88c1e00e6c4aaca4954cf9-export declare const value3: number;\n","impliedNodeFormat":1},{"version":"7f9e3a38604a594ab387f8dfd918258f-import { MIDDLE } from \"./index\"; export const value4: number = MIDDLE + 4;","signature":"f21e8ccb7663a3264ffb23577cd2e3de-export declare const value4: number;\n","impliedNodeFormat":1},{"version":"f9a3d6a2070cb6a1d6435ed43bafe8d0-import { MIDDLE } from \"./index\"; export const value5: number = MIDDLE + 5;","signature":"9ec8708b4c31168e2a960e86f366d59a-export declare const value5: number;\n","impliedNodeFormat":1},{"version":"5b2366864447ca9c879e6091dfcfc061-import { MIDDLE } from \"./index\"; export const value6: number = MIDDLE + 6;","signature":"a5175c601bc111593e1db48c43a5bc0f-export declare const value6: number;\n","impliedNodeFormat":1},{"version":"b220e37761e31fb22cc699af54853a6f-import { MIDDLE } from \"./index\"; export const value7: number = MIDDLE + 7;","signature":"be7fe754a97d3472d9c0b15882f38047-export declare const value7: number;\n","impliedNodeFormat":1},{"version":"1ae7c0fbddb4b4edef3db8afdcc44a47-import { MIDDLE } from \"./index\"; export const value8: number = MIDDLE + 8;","signature":"082a1019ffa5b6413fb72472452e6f84-export declare const value8: number;\n","impliedNodeFormat":1},{"version":"c0bf97db94998341a9d9d03e37b4fe9c-import { MIDDLE } from \"./index\"; export const value9: number = MIDDLE + 9;","signature":"16ea1ac60c846267d5f289408b0466d5-export declare const value9: number;\n","impliedNodeFormat":1}],"fileIdsList":[[2],[5],[4],[3]],"options":{"module":99,"outDir":"./out","rootDir":"./src","strict":true,"target":9,"tsBuildInfoFile":"./proj.tsbuildinfo"},"referencedMap":[[3,1],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2],[14,2],[15,2],[16,2],[17,2],[18,2],[19,2],[20,2],[21,2],[22,2],[23,2],[24,2],[25,2],[5,3],[4,4]]}
//// [/home/src/workspaces/project/proj.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "./src/left.ts",
        "./src/bridge.ts",
        "./src/middle.ts",
        "./src/index.ts",
        "./src/consumer0.ts",
        "./src/consumer1.ts",
        "./src/consumer10.ts",
        "./src/consumer11.ts",
        "./src/consumer12.ts",
        "./src/consumer13.ts",
        "./src/consumer14.ts",
        "./src/consumer15.ts",
        "./src/consumer16.ts",
        "./src/consumer17.ts",
        "./src/consumer18.ts",
        "./src/consumer19.ts",
        "./src/consumer2.ts",
        "./src/consumer3.ts",
        "./src/consumer4.ts",
        "./src/consumer5.ts",
        "./src/consumer6.ts",
        "./src/consumer7.ts",
        "./src/consumer8.ts",
        "./src/consumer9.ts"
      ],
      "original": [
        2,
        25
      ]
    }
  ],
  "fileNames": [
    "lib.es2022.full.d.ts",
    "./src/left.ts",
    "./src/bridge.ts",
    "./src/middle.ts",
    "./src/index.ts",
    "./src/consumer0.ts",
    "./src/consumer1.ts",
    "./src/consumer10.ts",
    "./src/consumer11.ts",
    "./src/consumer12.ts",
    "./src/consumer13.ts",
    "./src/consumer14.ts",
    "./src/consumer15.ts",
    "./src/consumer16.ts",
    "./src/consumer17.ts",
    "./src/consumer18.ts",
    "./src/consumer19.ts",
    "./src/consumer2.ts",
    "./src/consumer3.ts",
    "./src/consumer4.ts",
    "./src/consumer5.ts",
    "./src/consumer6.ts",
    "./src/consumer7.ts",
    "./src/consumer8.ts",
    "./src/consumer9.ts"
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
      "fileName": "./src/left.ts",
      "version": "297f7e27e346783eeba2305b83b91505-export interface Root { field: number } export const LEFT = 1;\n",
      "signature": "4ca7bc6a0b04a23d31b4c3a29e0669bd-export interface Root {\n    field: number;\n}\nexport declare const LEFT = 1;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "297f7e27e346783eeba2305b83b91505-export interface Root { field: number } export const LEFT = 1;\n",
        "signature": "4ca7bc6a0b04a23d31b4c3a29e0669bd-export interface Root {\n    field: number;\n}\nexport declare const LEFT = 1;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/bridge.ts",
      "version": "604f68a4a059ca48f099a7996bcd3a3d-export * from \"./left\";\n",
      "signature": "604f68a4a059ca48f099a7996bcd3a3d-export * from \"./left\";\n",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/middle.ts",
      "version": "fa810b01612597a8d8bc615107e8bdce-\n   import { LEFT, Root } from \"./bridge\";\n   export const MIDDLE: number = LEFT + 1;\n   export function read(value: Root): number { return value.field + MIDDLE; }\n   export const enum Mode { A = 1, B = 2 }\n  \n",
      "signature": "c4415a588fa756cc31d60c195a343d70-import { Root } from \"./bridge\";\nexport declare const MIDDLE: number;\nexport declare function read(value: Root): number;\nexport declare const enum Mode {\n    A = 1,\n    B = 2\n}\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "fa810b01612597a8d8bc615107e8bdce-\n   import { LEFT, Root } from \"./bridge\";\n   export const MIDDLE: number = LEFT + 1;\n   export function read(value: Root): number { return value.field + MIDDLE; }\n   export const enum Mode { A = 1, B = 2 }\n  \n",
        "signature": "c4415a588fa756cc31d60c195a343d70-import { Root } from \"./bridge\";\nexport declare const MIDDLE: number;\nexport declare function read(value: Root): number;\nexport declare const enum Mode {\n    A = 1,\n    B = 2\n}\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/index.ts",
      "version": "24619ad00d3dcb702e6574283956d815-export * from \"./middle\";\n",
      "signature": "24619ad00d3dcb702e6574283956d815-export * from \"./middle\";\n",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer0.ts",
      "version": "f599d80e31464888d2974b61b7961ab2-import { MIDDLE } from \"./index\"; export const value0: number = MIDDLE + 0;",
      "signature": "d9f0b209f519500f7590cbe3f0a31240-export declare const value0: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f599d80e31464888d2974b61b7961ab2-import { MIDDLE } from \"./index\"; export const value0: number = MIDDLE + 0;",
        "signature": "d9f0b209f519500f7590cbe3f0a31240-export declare const value0: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer1.ts",
      "version": "8c9d63fca7574796980d39f62a2e5bea-import { MIDDLE } from \"./index\"; export const value1: number = MIDDLE + 1;",
      "signature": "94769186db3783d0b444601fa902cc5c-export declare const value1: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "8c9d63fca7574796980d39f62a2e5bea-import { MIDDLE } from \"./index\"; export const value1: number = MIDDLE + 1;",
        "signature": "94769186db3783d0b444601fa902cc5c-export declare const value1: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer10.ts",
      "version": "a82dad01f7f31393ea7d1e8e94e985a2-import { MIDDLE } from \"./index\"; export const value10: number = MIDDLE + 10;",
      "signature": "57d59e0236212807dbfaf4e780933fa6-export declare const value10: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "a82dad01f7f31393ea7d1e8e94e985a2-import { MIDDLE } from \"./index\"; export const value10: number = MIDDLE + 10;",
        "signature": "57d59e0236212807dbfaf4e780933fa6-export declare const value10: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer11.ts",
      "version": "6fdb42dcf9662be7b24fa28101a66979-import { MIDDLE } from \"./index\"; export const value11: number = MIDDLE + 11;",
      "signature": "3a5866a00fa8954d65aa3d166b65afc8-export declare const value11: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "6fdb42dcf9662be7b24fa28101a66979-import { MIDDLE } from \"./index\"; export const value11: number = MIDDLE + 11;",
        "signature": "3a5866a00fa8954d65aa3d166b65afc8-export declare const value11: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer12.ts",
      "version": "07dffeae21acbb1ff33d5ecfae4547db-import { MIDDLE } from \"./index\"; export const value12: number = MIDDLE + 12;",
      "signature": "c43b78531b70537df462a7d13f8413bb-export declare const value12: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "07dffeae21acbb1ff33d5ecfae4547db-import { MIDDLE } from \"./index\"; export const value12: number = MIDDLE + 12;",
        "signature": "c43b78531b70537df462a7d13f8413bb-export declare const value12: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer13.ts",
      "version": "135caff3b737e238c5da1f7ddc1fb09e-import { MIDDLE } from \"./index\"; export const value13: number = MIDDLE + 13;",
      "signature": "dc7561fc46962f51bbda589bd6c81ed1-export declare const value13: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "135caff3b737e238c5da1f7ddc1fb09e-import { MIDDLE } from \"./index\"; export const value13: number = MIDDLE + 13;",
        "signature": "dc7561fc46962f51bbda589bd6c81ed1-export declare const value13: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer14.ts",
      "version": "dfcd29bbdc3189b92a7d1798f6c34176-import { MIDDLE } from \"./index\"; export const value14: number = MIDDLE + 14;",
      "signature": "80ef7fa9628cf1dac9de44b32d5f4b48-export declare const value14: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "dfcd29bbdc3189b92a7d1798f6c34176-import { MIDDLE } from \"./index\"; export const value14: number = MIDDLE + 14;",
        "signature": "80ef7fa9628cf1dac9de44b32d5f4b48-export declare const value14: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer15.ts",
      "version": "ab63d37ebfec1fecf97da7c14e3ae9b0-import { MIDDLE } from \"./index\"; export const value15: number = MIDDLE + 15;",
      "signature": "4baaec5ae032fcc592149ff9a2db099d-export declare const value15: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "ab63d37ebfec1fecf97da7c14e3ae9b0-import { MIDDLE } from \"./index\"; export const value15: number = MIDDLE + 15;",
        "signature": "4baaec5ae032fcc592149ff9a2db099d-export declare const value15: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer16.ts",
      "version": "d74fe22f789229922036aef4a5de8ae5-import { MIDDLE } from \"./index\"; export const value16: number = MIDDLE + 16;",
      "signature": "60dbfbd282e5ed73c4b97e7097193f59-export declare const value16: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "d74fe22f789229922036aef4a5de8ae5-import { MIDDLE } from \"./index\"; export const value16: number = MIDDLE + 16;",
        "signature": "60dbfbd282e5ed73c4b97e7097193f59-export declare const value16: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer17.ts",
      "version": "83a415cf5769df2d7c32d4ed0789c903-import { MIDDLE } from \"./index\"; export const value17: number = MIDDLE + 17;",
      "signature": "04dd9df0c69bb931b9057ce6f7a72d5b-export declare const value17: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "83a415cf5769df2d7c32d4ed0789c903-import { MIDDLE } from \"./index\"; export const value17: number = MIDDLE + 17;",
        "signature": "04dd9df0c69bb931b9057ce6f7a72d5b-export declare const value17: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer18.ts",
      "version": "4bc3224235cb202cf9c5a5739e6540bf-import { MIDDLE } from \"./index\"; export const value18: number = MIDDLE + 18;",
      "signature": "19fd3afb2ce96ba75ac4cb73b4d1b5a2-export declare const value18: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "4bc3224235cb202cf9c5a5739e6540bf-import { MIDDLE } from \"./index\"; export const value18: number = MIDDLE + 18;",
        "signature": "19fd3afb2ce96ba75ac4cb73b4d1b5a2-export declare const value18: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer19.ts",
      "version": "cd64e6cfe3f8f1cf3dfa52713e60d941-import { MIDDLE } from \"./index\"; export const value19: number = MIDDLE + 19;",
      "signature": "336cf5d28bc9b098c2a1ce86c4e5a503-export declare const value19: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "cd64e6cfe3f8f1cf3dfa52713e60d941-import { MIDDLE } from \"./index\"; export const value19: number = MIDDLE + 19;",
        "signature": "336cf5d28bc9b098c2a1ce86c4e5a503-export declare const value19: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer2.ts",
      "version": "f42cf8b2d7e7e493625f42e8aa017ed7-import { MIDDLE } from \"./index\"; export const value2: number = MIDDLE + 2;",
      "signature": "1dd8845cc9445ccb0055d7842a9049a6-export declare const value2: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f42cf8b2d7e7e493625f42e8aa017ed7-import { MIDDLE } from \"./index\"; export const value2: number = MIDDLE + 2;",
        "signature": "1dd8845cc9445ccb0055d7842a9049a6-export declare const value2: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer3.ts",
      "version": "0dc5ecc5a433a0a69095cc86df0e7acb-import { MIDDLE } from \"./index\"; export const value3: number = MIDDLE + 3;",
      "signature": "2219284cce88c1e00e6c4aaca4954cf9-export declare const value3: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "0dc5ecc5a433a0a69095cc86df0e7acb-import { MIDDLE } from \"./index\"; export const value3: number = MIDDLE + 3;",
        "signature": "2219284cce88c1e00e6c4aaca4954cf9-export declare const value3: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer4.ts",
      "version": "7f9e3a38604a594ab387f8dfd918258f-import { MIDDLE } from \"./index\"; export const value4: number = MIDDLE + 4;",
      "signature": "f21e8ccb7663a3264ffb23577cd2e3de-export declare const value4: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "7f9e3a38604a594ab387f8dfd918258f-import { MIDDLE } from \"./index\"; export const value4: number = MIDDLE + 4;",
        "signature": "f21e8ccb7663a3264ffb23577cd2e3de-export declare const value4: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer5.ts",
      "version": "f9a3d6a2070cb6a1d6435ed43bafe8d0-import { MIDDLE } from \"./index\"; export const value5: number = MIDDLE + 5;",
      "signature": "9ec8708b4c31168e2a960e86f366d59a-export declare const value5: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f9a3d6a2070cb6a1d6435ed43bafe8d0-import { MIDDLE } from \"./index\"; export const value5: number = MIDDLE + 5;",
        "signature": "9ec8708b4c31168e2a960e86f366d59a-export declare const value5: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer6.ts",
      "version": "5b2366864447ca9c879e6091dfcfc061-import { MIDDLE } from \"./index\"; export const value6: number = MIDDLE + 6;",
      "signature": "a5175c601bc111593e1db48c43a5bc0f-export declare const value6: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "5b2366864447ca9c879e6091dfcfc061-import { MIDDLE } from \"./index\"; export const value6: number = MIDDLE + 6;",
        "signature": "a5175c601bc111593e1db48c43a5bc0f-export declare const value6: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer7.ts",
      "version": "b220e37761e31fb22cc699af54853a6f-import { MIDDLE } from \"./index\"; export const value7: number = MIDDLE + 7;",
      "signature": "be7fe754a97d3472d9c0b15882f38047-export declare const value7: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "b220e37761e31fb22cc699af54853a6f-import { MIDDLE } from \"./index\"; export const value7: number = MIDDLE + 7;",
        "signature": "be7fe754a97d3472d9c0b15882f38047-export declare const value7: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer8.ts",
      "version": "1ae7c0fbddb4b4edef3db8afdcc44a47-import { MIDDLE } from \"./index\"; export const value8: number = MIDDLE + 8;",
      "signature": "082a1019ffa5b6413fb72472452e6f84-export declare const value8: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "1ae7c0fbddb4b4edef3db8afdcc44a47-import { MIDDLE } from \"./index\"; export const value8: number = MIDDLE + 8;",
        "signature": "082a1019ffa5b6413fb72472452e6f84-export declare const value8: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer9.ts",
      "version": "c0bf97db94998341a9d9d03e37b4fe9c-import { MIDDLE } from \"./index\"; export const value9: number = MIDDLE + 9;",
      "signature": "16ea1ac60c846267d5f289408b0466d5-export declare const value9: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "c0bf97db94998341a9d9d03e37b4fe9c-import { MIDDLE } from \"./index\"; export const value9: number = MIDDLE + 9;",
        "signature": "16ea1ac60c846267d5f289408b0466d5-export declare const value9: number;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "./src/left.ts"
    ],
    [
      "./src/index.ts"
    ],
    [
      "./src/middle.ts"
    ],
    [
      "./src/bridge.ts"
    ]
  ],
  "options": {
    "module": 99,
    "outDir": "./out",
    "rootDir": "./src",
    "strict": true,
    "target": 9,
    "tsBuildInfoFile": "./proj.tsbuildinfo"
  },
  "referencedMap": {
    "./src/bridge.ts": [
      "./src/left.ts"
    ],
    "./src/consumer0.ts": [
      "./src/index.ts"
    ],
    "./src/consumer1.ts": [
      "./src/index.ts"
    ],
    "./src/consumer10.ts": [
      "./src/index.ts"
    ],
    "./src/consumer11.ts": [
      "./src/index.ts"
    ],
    "./src/consumer12.ts": [
      "./src/index.ts"
    ],
    "./src/consumer13.ts": [
      "./src/index.ts"
    ],
    "./src/consumer14.ts": [
      "./src/index.ts"
    ],
    "./src/consumer15.ts": [
      "./src/index.ts"
    ],
    "./src/consumer16.ts": [
      "./src/index.ts"
    ],
    "./src/consumer17.ts": [
      "./src/index.ts"
    ],
    "./src/consumer18.ts": [
      "./src/index.ts"
    ],
    "./src/consumer19.ts": [
      "./src/index.ts"
    ],
    "./src/consumer2.ts": [
      "./src/index.ts"
    ],
    "./src/consumer3.ts": [
      "./src/index.ts"
    ],
    "./src/consumer4.ts": [
      "./src/index.ts"
    ],
    "./src/consumer5.ts": [
      "./src/index.ts"
    ],
    "./src/consumer6.ts": [
      "./src/index.ts"
    ],
    "./src/consumer7.ts": [
      "./src/index.ts"
    ],
    "./src/consumer8.ts": [
      "./src/index.ts"
    ],
    "./src/consumer9.ts": [
      "./src/index.ts"
    ],
    "./src/index.ts": [
      "./src/middle.ts"
    ],
    "./src/middle.ts": [
      "./src/bridge.ts"
    ]
  },
  "size": 7292
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/workspaces/project/src/middle.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/src/middle.ts


Edit [2]:: repeat whitespace in middle
//// [/home/src/workspaces/project/src/middle.ts] *modified* 

   import { LEFT, Root } from "./bridge";
   export const MIDDLE: number = LEFT + 1;
   export function read(value: Root): number { return value.field + MIDDLE; }
   export const enum Mode { A = 1, B = 2 }
  



tsgo -b
ExitStatus:: Success
Output::
//// [/home/src/workspaces/project/out/middle.js] *rewrite with same content*
//// [/home/src/workspaces/project/proj.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","root":[[2,25]],"fileNames":["lib.es2022.full.d.ts","./src/left.ts","./src/bridge.ts","./src/middle.ts","./src/index.ts","./src/consumer0.ts","./src/consumer1.ts","./src/consumer10.ts","./src/consumer11.ts","./src/consumer12.ts","./src/consumer13.ts","./src/consumer14.ts","./src/consumer15.ts","./src/consumer16.ts","./src/consumer17.ts","./src/consumer18.ts","./src/consumer19.ts","./src/consumer2.ts","./src/consumer3.ts","./src/consumer4.ts","./src/consumer5.ts","./src/consumer6.ts","./src/consumer7.ts","./src/consumer8.ts","./src/consumer9.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"297f7e27e346783eeba2305b83b91505-export interface Root { field: number } export const LEFT = 1;\n","signature":"4ca7bc6a0b04a23d31b4c3a29e0669bd-export interface Root {\n    field: number;\n}\nexport declare const LEFT = 1;\n","impliedNodeFormat":1},"604f68a4a059ca48f099a7996bcd3a3d-export * from \"./left\";\n",{"version":"f95c6888d1fd3f4e34c19ac1071b432d-\n   import { LEFT, Root } from \"./bridge\";\n   export const MIDDLE: number = LEFT + 1;\n   export function read(value: Root): number { return value.field + MIDDLE; }\n   export const enum Mode { A = 1, B = 2 }\n  \n\n","signature":"c4415a588fa756cc31d60c195a343d70-import { Root } from \"./bridge\";\nexport declare const MIDDLE: number;\nexport declare function read(value: Root): number;\nexport declare const enum Mode {\n    A = 1,\n    B = 2\n}\n","impliedNodeFormat":1},"24619ad00d3dcb702e6574283956d815-export * from \"./middle\";\n",{"version":"f599d80e31464888d2974b61b7961ab2-import { MIDDLE } from \"./index\"; export const value0: number = MIDDLE + 0;","signature":"d9f0b209f519500f7590cbe3f0a31240-export declare const value0: number;\n","impliedNodeFormat":1},{"version":"8c9d63fca7574796980d39f62a2e5bea-import { MIDDLE } from \"./index\"; export const value1: number = MIDDLE + 1;","signature":"94769186db3783d0b444601fa902cc5c-export declare const value1: number;\n","impliedNodeFormat":1},{"version":"a82dad01f7f31393ea7d1e8e94e985a2-import { MIDDLE } from \"./index\"; export const value10: number = MIDDLE + 10;","signature":"57d59e0236212807dbfaf4e780933fa6-export declare const value10: number;\n","impliedNodeFormat":1},{"version":"6fdb42dcf9662be7b24fa28101a66979-import { MIDDLE } from \"./index\"; export const value11: number = MIDDLE + 11;","signature":"3a5866a00fa8954d65aa3d166b65afc8-export declare const value11: number;\n","impliedNodeFormat":1},{"version":"07dffeae21acbb1ff33d5ecfae4547db-import { MIDDLE } from \"./index\"; export const value12: number = MIDDLE + 12;","signature":"c43b78531b70537df462a7d13f8413bb-export declare const value12: number;\n","impliedNodeFormat":1},{"version":"135caff3b737e238c5da1f7ddc1fb09e-import { MIDDLE } from \"./index\"; export const value13: number = MIDDLE + 13;","signature":"dc7561fc46962f51bbda589bd6c81ed1-export declare const value13: number;\n","impliedNodeFormat":1},{"version":"dfcd29bbdc3189b92a7d1798f6c34176-import { MIDDLE } from \"./index\"; export const value14: number = MIDDLE + 14;","signature":"80ef7fa9628cf1dac9de44b32d5f4b48-export declare const value14: number;\n","impliedNodeFormat":1},{"version":"ab63d37ebfec1fecf97da7c14e3ae9b0-import { MIDDLE } from \"./index\"; export const value15: number = MIDDLE + 15;","signature":"4baaec5ae032fcc592149ff9a2db099d-export declare const value15: number;\n","impliedNodeFormat":1},{"version":"d74fe22f789229922036aef4a5de8ae5-import { MIDDLE } from \"./index\"; export const value16: number = MIDDLE + 16;","signature":"60dbfbd282e5ed73c4b97e7097193f59-export declare const value16: number;\n","impliedNodeFormat":1},{"version":"83a415cf5769df2d7c32d4ed0789c903-import { MIDDLE } from \"./index\"; export const value17: number = MIDDLE + 17;","signature":"04dd9df0c69bb931b9057ce6f7a72d5b-export declare const value17: number;\n","impliedNodeFormat":1},{"version":"4bc3224235cb202cf9c5a5739e6540bf-import { MIDDLE } from \"./index\"; export const value18: number = MIDDLE + 18;","signature":"19fd3afb2ce96ba75ac4cb73b4d1b5a2-export declare const value18: number;\n","impliedNodeFormat":1},{"version":"cd64e6cfe3f8f1cf3dfa52713e60d941-import { MIDDLE } from \"./index\"; export const value19: number = MIDDLE + 19;","signature":"336cf5d28bc9b098c2a1ce86c4e5a503-export declare const value19: number;\n","impliedNodeFormat":1},{"version":"f42cf8b2d7e7e493625f42e8aa017ed7-import { MIDDLE } from \"./index\"; export const value2: number = MIDDLE + 2;","signature":"1dd8845cc9445ccb0055d7842a9049a6-export declare const value2: number;\n","impliedNodeFormat":1},{"version":"0dc5ecc5a433a0a69095cc86df0e7acb-import { MIDDLE } from \"./index\"; export const value3: number = MIDDLE + 3;","signature":"2219284cce88c1e00e6c4aaca4954cf9-export declare const value3: number;\n","impliedNodeFormat":1},{"version":"7f9e3a38604a594ab387f8dfd918258f-import { MIDDLE } from \"./index\"; export const value4: number = MIDDLE + 4;","signature":"f21e8ccb7663a3264ffb23577cd2e3de-export declare const value4: number;\n","impliedNodeFormat":1},{"version":"f9a3d6a2070cb6a1d6435ed43bafe8d0-import { MIDDLE } from \"./index\"; export const value5: number = MIDDLE + 5;","signature":"9ec8708b4c31168e2a960e86f366d59a-export declare const value5: number;\n","impliedNodeFormat":1},{"version":"5b2366864447ca9c879e6091dfcfc061-import { MIDDLE } from \"./index\"; export const value6: number = MIDDLE + 6;","signature":"a5175c601bc111593e1db48c43a5bc0f-export declare const value6: number;\n","impliedNodeFormat":1},{"version":"b220e37761e31fb22cc699af54853a6f-import { MIDDLE } from \"./index\"; export const value7: number = MIDDLE + 7;","signature":"be7fe754a97d3472d9c0b15882f38047-export declare const value7: number;\n","impliedNodeFormat":1},{"version":"1ae7c0fbddb4b4edef3db8afdcc44a47-import { MIDDLE } from \"./index\"; export const value8: number = MIDDLE + 8;","signature":"082a1019ffa5b6413fb72472452e6f84-export declare const value8: number;\n","impliedNodeFormat":1},{"version":"c0bf97db94998341a9d9d03e37b4fe9c-import { MIDDLE } from \"./index\"; export const value9: number = MIDDLE + 9;","signature":"16ea1ac60c846267d5f289408b0466d5-export declare const value9: number;\n","impliedNodeFormat":1}],"fileIdsList":[[2],[5],[4],[3]],"options":{"module":99,"outDir":"./out","rootDir":"./src","strict":true,"target":9,"tsBuildInfoFile":"./proj.tsbuildinfo"},"referencedMap":[[3,1],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2],[14,2],[15,2],[16,2],[17,2],[18,2],[19,2],[20,2],[21,2],[22,2],[23,2],[24,2],[25,2],[5,3],[4,4]]}
//// [/home/src/workspaces/project/proj.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "./src/left.ts",
        "./src/bridge.ts",
        "./src/middle.ts",
        "./src/index.ts",
        "./src/consumer0.ts",
        "./src/consumer1.ts",
        "./src/consumer10.ts",
        "./src/consumer11.ts",
        "./src/consumer12.ts",
        "./src/consumer13.ts",
        "./src/consumer14.ts",
        "./src/consumer15.ts",
        "./src/consumer16.ts",
        "./src/consumer17.ts",
        "./src/consumer18.ts",
        "./src/consumer19.ts",
        "./src/consumer2.ts",
        "./src/consumer3.ts",
        "./src/consumer4.ts",
        "./src/consumer5.ts",
        "./src/consumer6.ts",
        "./src/consumer7.ts",
        "./src/consumer8.ts",
        "./src/consumer9.ts"
      ],
      "original": [
        2,
        25
      ]
    }
  ],
  "fileNames": [
    "lib.es2022.full.d.ts",
    "./src/left.ts",
    "./src/bridge.ts",
    "./src/middle.ts",
    "./src/index.ts",
    "./src/consumer0.ts",
    "./src/consumer1.ts",
    "./src/consumer10.ts",
    "./src/consumer11.ts",
    "./src/consumer12.ts",
    "./src/consumer13.ts",
    "./src/consumer14.ts",
    "./src/consumer15.ts",
    "./src/consumer16.ts",
    "./src/consumer17.ts",
    "./src/consumer18.ts",
    "./src/consumer19.ts",
    "./src/consumer2.ts",
    "./src/consumer3.ts",
    "./src/consumer4.ts",
    "./src/consumer5.ts",
    "./src/consumer6.ts",
    "./src/consumer7.ts",
    "./src/consumer8.ts",
    "./src/consumer9.ts"
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
      "fileName": "./src/left.ts",
      "version": "297f7e27e346783eeba2305b83b91505-export interface Root { field: number } export const LEFT = 1;\n",
      "signature": "4ca7bc6a0b04a23d31b4c3a29e0669bd-export interface Root {\n    field: number;\n}\nexport declare const LEFT = 1;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "297f7e27e346783eeba2305b83b91505-export interface Root { field: number } export const LEFT = 1;\n",
        "signature": "4ca7bc6a0b04a23d31b4c3a29e0669bd-export interface Root {\n    field: number;\n}\nexport declare const LEFT = 1;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/bridge.ts",
      "version": "604f68a4a059ca48f099a7996bcd3a3d-export * from \"./left\";\n",
      "signature": "604f68a4a059ca48f099a7996bcd3a3d-export * from \"./left\";\n",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/middle.ts",
      "version": "f95c6888d1fd3f4e34c19ac1071b432d-\n   import { LEFT, Root } from \"./bridge\";\n   export const MIDDLE: number = LEFT + 1;\n   export function read(value: Root): number { return value.field + MIDDLE; }\n   export const enum Mode { A = 1, B = 2 }\n  \n\n",
      "signature": "c4415a588fa756cc31d60c195a343d70-import { Root } from \"./bridge\";\nexport declare const MIDDLE: number;\nexport declare function read(value: Root): number;\nexport declare const enum Mode {\n    A = 1,\n    B = 2\n}\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f95c6888d1fd3f4e34c19ac1071b432d-\n   import { LEFT, Root } from \"./bridge\";\n   export const MIDDLE: number = LEFT + 1;\n   export function read(value: Root): number { return value.field + MIDDLE; }\n   export const enum Mode { A = 1, B = 2 }\n  \n\n",
        "signature": "c4415a588fa756cc31d60c195a343d70-import { Root } from \"./bridge\";\nexport declare const MIDDLE: number;\nexport declare function read(value: Root): number;\nexport declare const enum Mode {\n    A = 1,\n    B = 2\n}\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/index.ts",
      "version": "24619ad00d3dcb702e6574283956d815-export * from \"./middle\";\n",
      "signature": "24619ad00d3dcb702e6574283956d815-export * from \"./middle\";\n",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./src/consumer0.ts",
      "version": "f599d80e31464888d2974b61b7961ab2-import { MIDDLE } from \"./index\"; export const value0: number = MIDDLE + 0;",
      "signature": "d9f0b209f519500f7590cbe3f0a31240-export declare const value0: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f599d80e31464888d2974b61b7961ab2-import { MIDDLE } from \"./index\"; export const value0: number = MIDDLE + 0;",
        "signature": "d9f0b209f519500f7590cbe3f0a31240-export declare const value0: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer1.ts",
      "version": "8c9d63fca7574796980d39f62a2e5bea-import { MIDDLE } from \"./index\"; export const value1: number = MIDDLE + 1;",
      "signature": "94769186db3783d0b444601fa902cc5c-export declare const value1: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "8c9d63fca7574796980d39f62a2e5bea-import { MIDDLE } from \"./index\"; export const value1: number = MIDDLE + 1;",
        "signature": "94769186db3783d0b444601fa902cc5c-export declare const value1: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer10.ts",
      "version": "a82dad01f7f31393ea7d1e8e94e985a2-import { MIDDLE } from \"./index\"; export const value10: number = MIDDLE + 10;",
      "signature": "57d59e0236212807dbfaf4e780933fa6-export declare const value10: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "a82dad01f7f31393ea7d1e8e94e985a2-import { MIDDLE } from \"./index\"; export const value10: number = MIDDLE + 10;",
        "signature": "57d59e0236212807dbfaf4e780933fa6-export declare const value10: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer11.ts",
      "version": "6fdb42dcf9662be7b24fa28101a66979-import { MIDDLE } from \"./index\"; export const value11: number = MIDDLE + 11;",
      "signature": "3a5866a00fa8954d65aa3d166b65afc8-export declare const value11: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "6fdb42dcf9662be7b24fa28101a66979-import { MIDDLE } from \"./index\"; export const value11: number = MIDDLE + 11;",
        "signature": "3a5866a00fa8954d65aa3d166b65afc8-export declare const value11: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer12.ts",
      "version": "07dffeae21acbb1ff33d5ecfae4547db-import { MIDDLE } from \"./index\"; export const value12: number = MIDDLE + 12;",
      "signature": "c43b78531b70537df462a7d13f8413bb-export declare const value12: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "07dffeae21acbb1ff33d5ecfae4547db-import { MIDDLE } from \"./index\"; export const value12: number = MIDDLE + 12;",
        "signature": "c43b78531b70537df462a7d13f8413bb-export declare const value12: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer13.ts",
      "version": "135caff3b737e238c5da1f7ddc1fb09e-import { MIDDLE } from \"./index\"; export const value13: number = MIDDLE + 13;",
      "signature": "dc7561fc46962f51bbda589bd6c81ed1-export declare const value13: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "135caff3b737e238c5da1f7ddc1fb09e-import { MIDDLE } from \"./index\"; export const value13: number = MIDDLE + 13;",
        "signature": "dc7561fc46962f51bbda589bd6c81ed1-export declare const value13: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer14.ts",
      "version": "dfcd29bbdc3189b92a7d1798f6c34176-import { MIDDLE } from \"./index\"; export const value14: number = MIDDLE + 14;",
      "signature": "80ef7fa9628cf1dac9de44b32d5f4b48-export declare const value14: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "dfcd29bbdc3189b92a7d1798f6c34176-import { MIDDLE } from \"./index\"; export const value14: number = MIDDLE + 14;",
        "signature": "80ef7fa9628cf1dac9de44b32d5f4b48-export declare const value14: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer15.ts",
      "version": "ab63d37ebfec1fecf97da7c14e3ae9b0-import { MIDDLE } from \"./index\"; export const value15: number = MIDDLE + 15;",
      "signature": "4baaec5ae032fcc592149ff9a2db099d-export declare const value15: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "ab63d37ebfec1fecf97da7c14e3ae9b0-import { MIDDLE } from \"./index\"; export const value15: number = MIDDLE + 15;",
        "signature": "4baaec5ae032fcc592149ff9a2db099d-export declare const value15: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer16.ts",
      "version": "d74fe22f789229922036aef4a5de8ae5-import { MIDDLE } from \"./index\"; export const value16: number = MIDDLE + 16;",
      "signature": "60dbfbd282e5ed73c4b97e7097193f59-export declare const value16: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "d74fe22f789229922036aef4a5de8ae5-import { MIDDLE } from \"./index\"; export const value16: number = MIDDLE + 16;",
        "signature": "60dbfbd282e5ed73c4b97e7097193f59-export declare const value16: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer17.ts",
      "version": "83a415cf5769df2d7c32d4ed0789c903-import { MIDDLE } from \"./index\"; export const value17: number = MIDDLE + 17;",
      "signature": "04dd9df0c69bb931b9057ce6f7a72d5b-export declare const value17: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "83a415cf5769df2d7c32d4ed0789c903-import { MIDDLE } from \"./index\"; export const value17: number = MIDDLE + 17;",
        "signature": "04dd9df0c69bb931b9057ce6f7a72d5b-export declare const value17: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer18.ts",
      "version": "4bc3224235cb202cf9c5a5739e6540bf-import { MIDDLE } from \"./index\"; export const value18: number = MIDDLE + 18;",
      "signature": "19fd3afb2ce96ba75ac4cb73b4d1b5a2-export declare const value18: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "4bc3224235cb202cf9c5a5739e6540bf-import { MIDDLE } from \"./index\"; export const value18: number = MIDDLE + 18;",
        "signature": "19fd3afb2ce96ba75ac4cb73b4d1b5a2-export declare const value18: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer19.ts",
      "version": "cd64e6cfe3f8f1cf3dfa52713e60d941-import { MIDDLE } from \"./index\"; export const value19: number = MIDDLE + 19;",
      "signature": "336cf5d28bc9b098c2a1ce86c4e5a503-export declare const value19: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "cd64e6cfe3f8f1cf3dfa52713e60d941-import { MIDDLE } from \"./index\"; export const value19: number = MIDDLE + 19;",
        "signature": "336cf5d28bc9b098c2a1ce86c4e5a503-export declare const value19: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer2.ts",
      "version": "f42cf8b2d7e7e493625f42e8aa017ed7-import { MIDDLE } from \"./index\"; export const value2: number = MIDDLE + 2;",
      "signature": "1dd8845cc9445ccb0055d7842a9049a6-export declare const value2: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f42cf8b2d7e7e493625f42e8aa017ed7-import { MIDDLE } from \"./index\"; export const value2: number = MIDDLE + 2;",
        "signature": "1dd8845cc9445ccb0055d7842a9049a6-export declare const value2: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer3.ts",
      "version": "0dc5ecc5a433a0a69095cc86df0e7acb-import { MIDDLE } from \"./index\"; export const value3: number = MIDDLE + 3;",
      "signature": "2219284cce88c1e00e6c4aaca4954cf9-export declare const value3: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "0dc5ecc5a433a0a69095cc86df0e7acb-import { MIDDLE } from \"./index\"; export const value3: number = MIDDLE + 3;",
        "signature": "2219284cce88c1e00e6c4aaca4954cf9-export declare const value3: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer4.ts",
      "version": "7f9e3a38604a594ab387f8dfd918258f-import { MIDDLE } from \"./index\"; export const value4: number = MIDDLE + 4;",
      "signature": "f21e8ccb7663a3264ffb23577cd2e3de-export declare const value4: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "7f9e3a38604a594ab387f8dfd918258f-import { MIDDLE } from \"./index\"; export const value4: number = MIDDLE + 4;",
        "signature": "f21e8ccb7663a3264ffb23577cd2e3de-export declare const value4: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer5.ts",
      "version": "f9a3d6a2070cb6a1d6435ed43bafe8d0-import { MIDDLE } from \"./index\"; export const value5: number = MIDDLE + 5;",
      "signature": "9ec8708b4c31168e2a960e86f366d59a-export declare const value5: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f9a3d6a2070cb6a1d6435ed43bafe8d0-import { MIDDLE } from \"./index\"; export const value5: number = MIDDLE + 5;",
        "signature": "9ec8708b4c31168e2a960e86f366d59a-export declare const value5: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer6.ts",
      "version": "5b2366864447ca9c879e6091dfcfc061-import { MIDDLE } from \"./index\"; export const value6: number = MIDDLE + 6;",
      "signature": "a5175c601bc111593e1db48c43a5bc0f-export declare const value6: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "5b2366864447ca9c879e6091dfcfc061-import { MIDDLE } from \"./index\"; export const value6: number = MIDDLE + 6;",
        "signature": "a5175c601bc111593e1db48c43a5bc0f-export declare const value6: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer7.ts",
      "version": "b220e37761e31fb22cc699af54853a6f-import { MIDDLE } from \"./index\"; export const value7: number = MIDDLE + 7;",
      "signature": "be7fe754a97d3472d9c0b15882f38047-export declare const value7: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "b220e37761e31fb22cc699af54853a6f-import { MIDDLE } from \"./index\"; export const value7: number = MIDDLE + 7;",
        "signature": "be7fe754a97d3472d9c0b15882f38047-export declare const value7: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer8.ts",
      "version": "1ae7c0fbddb4b4edef3db8afdcc44a47-import { MIDDLE } from \"./index\"; export const value8: number = MIDDLE + 8;",
      "signature": "082a1019ffa5b6413fb72472452e6f84-export declare const value8: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "1ae7c0fbddb4b4edef3db8afdcc44a47-import { MIDDLE } from \"./index\"; export const value8: number = MIDDLE + 8;",
        "signature": "082a1019ffa5b6413fb72472452e6f84-export declare const value8: number;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./src/consumer9.ts",
      "version": "c0bf97db94998341a9d9d03e37b4fe9c-import { MIDDLE } from \"./index\"; export const value9: number = MIDDLE + 9;",
      "signature": "16ea1ac60c846267d5f289408b0466d5-export declare const value9: number;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "c0bf97db94998341a9d9d03e37b4fe9c-import { MIDDLE } from \"./index\"; export const value9: number = MIDDLE + 9;",
        "signature": "16ea1ac60c846267d5f289408b0466d5-export declare const value9: number;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "./src/left.ts"
    ],
    [
      "./src/index.ts"
    ],
    [
      "./src/middle.ts"
    ],
    [
      "./src/bridge.ts"
    ]
  ],
  "options": {
    "module": 99,
    "outDir": "./out",
    "rootDir": "./src",
    "strict": true,
    "target": 9,
    "tsBuildInfoFile": "./proj.tsbuildinfo"
  },
  "referencedMap": {
    "./src/bridge.ts": [
      "./src/left.ts"
    ],
    "./src/consumer0.ts": [
      "./src/index.ts"
    ],
    "./src/consumer1.ts": [
      "./src/index.ts"
    ],
    "./src/consumer10.ts": [
      "./src/index.ts"
    ],
    "./src/consumer11.ts": [
      "./src/index.ts"
    ],
    "./src/consumer12.ts": [
      "./src/index.ts"
    ],
    "./src/consumer13.ts": [
      "./src/index.ts"
    ],
    "./src/consumer14.ts": [
      "./src/index.ts"
    ],
    "./src/consumer15.ts": [
      "./src/index.ts"
    ],
    "./src/consumer16.ts": [
      "./src/index.ts"
    ],
    "./src/consumer17.ts": [
      "./src/index.ts"
    ],
    "./src/consumer18.ts": [
      "./src/index.ts"
    ],
    "./src/consumer19.ts": [
      "./src/index.ts"
    ],
    "./src/consumer2.ts": [
      "./src/index.ts"
    ],
    "./src/consumer3.ts": [
      "./src/index.ts"
    ],
    "./src/consumer4.ts": [
      "./src/index.ts"
    ],
    "./src/consumer5.ts": [
      "./src/index.ts"
    ],
    "./src/consumer6.ts": [
      "./src/index.ts"
    ],
    "./src/consumer7.ts": [
      "./src/index.ts"
    ],
    "./src/consumer8.ts": [
      "./src/index.ts"
    ],
    "./src/consumer9.ts": [
      "./src/index.ts"
    ],
    "./src/index.ts": [
      "./src/middle.ts"
    ],
    "./src/middle.ts": [
      "./src/bridge.ts"
    ]
  },
  "size": 7294
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/workspaces/project/src/middle.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/src/middle.ts

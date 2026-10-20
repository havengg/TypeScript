import fs from "node:fs";
import path from "node:path";

export function generate(root, n) {
    const src = path.join(root, "src");
    fs.mkdirSync(src, { recursive: true });
    const files = {
        "left.ts": "export interface Root { field: number } export const LEFT = 1;",
        "bridge.ts": 'export * from "./left";',
        "middle.ts": 'import { LEFT, Root } from "./bridge"; export const MIDDLE: number = LEFT + 1; export function read(value: Root): number { return value.field + MIDDLE; } export const enum Mode { A = 1, B = 2 }',
        "index.ts": 'export * from "./middle";',
    };
    for (let i = 0; i < n; i++) files[`consumer${i}.ts`] = `import { MIDDLE } from "./index"; export const value${i}: number = MIDDLE + ${i};`;
    for (const [name, text] of Object.entries(files)) fs.writeFileSync(path.join(src, name), text + "\n");
    fs.writeFileSync(path.join(root, "tsconfig.json"), JSON.stringify({ compilerOptions: { target: "es2022", module: "esnext", moduleResolution: "bundler", strict: true, incremental: true, rootDir: "src", outDir: "out", tsBuildInfoFile: "build.tsbuildinfo" }, include: ["src/**/*.ts"] }));
}

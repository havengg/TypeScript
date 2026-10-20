# Guarded declaration-reference walk

## Problem

After a declaration-shape change, the second native affected-file phase can refresh the transitive reverse closure without a signature guard. A one-file edit can therefore invalidate unrelated downstream consumers.

## Cause

`getFilesAffectedBy` guards propagation by signatures; `handleDtsMayChangeOfAffectedFile` conservatively walks references, following the 5.5 removal of the per-file exported-modules map.

## Fix

Expand when a file's declaration signature changes. Also expand an unchanged file when its declaration references any file already walked. Otherwise stop, registering its references so later frontier additions can wake it; repeat to a fixpoint across changed roots.

Reference sets come from declaration text already emitted for signature computation and are never persisted to build info: no long-lived exported-modules map returns.

## Unchanged paths

Global-scope reachability still invalidates every file.

Const-enum/JavaScript re-emit retains its conservative walk.

Isolated modules retain JavaScript isolation; declarations use the guard.

The build-info format is unchanged.

## Baseline changes

All existing changes preserve emitted content and diagnostics. Nine build/incremental cases change, alongside twelve `noEmit` signature-bookkeeping cases.

| Existing baseline (under `testdata/baselines/reference/`) | Classification |
|---|---|
| [tsbuild/dependencyUpdate/rebuilds-transitive-dependents-when-dependency-update-batch-has-no-global-scope-change.js](testdata/baselines/reference/tsbuild/dependencyUpdate/rebuilds-transitive-dependents-when-dependency-update-batch-has-no-global-scope-change.js) | Signature computation bookkeeping |
| [tsbuild/emitDeclarationOnly/only-dts-output-in-circular-import-project-with-emitDeclarationOnly-and-declarationMap.js](testdata/baselines/reference/tsbuild/emitDeclarationOnly/only-dts-output-in-circular-import-project-with-emitDeclarationOnly-and-declarationMap.js) | Signature computation bookkeeping |
| [tsbuild/emitDeclarationOnly/only-dts-output-in-circular-import-project-with-emitDeclarationOnly.js](testdata/baselines/reference/tsbuild/emitDeclarationOnly/only-dts-output-in-circular-import-project-with-emitDeclarationOnly.js) | Signature computation bookkeeping |
| [tsbuild/emitDeclarationOnly/only-dts-output-in-non-circular-imports-project-with-emitDeclarationOnly.js](testdata/baselines/reference/tsbuild/emitDeclarationOnly/only-dts-output-in-non-circular-imports-project-with-emitDeclarationOnly.js) | Signature computation bookkeeping |
| [tsbuild/inferredTypeFromTransitiveModule/inferred-type-from-transitive-module-with-isolatedModules.js](testdata/baselines/reference/tsbuild/inferredTypeFromTransitiveModule/inferred-type-from-transitive-module-with-isolatedModules.js) | Signature computation bookkeeping |
| [tsbuild/inferredTypeFromTransitiveModule/inferred-type-from-transitive-module.js](testdata/baselines/reference/tsbuild/inferredTypeFromTransitiveModule/inferred-type-from-transitive-module.js) | Signature computation bookkeeping |
| [tsbuild/inferredTypeFromTransitiveModule/reports-errors-in-files-affected-by-change-in-signature-with-isolatedModules.js](testdata/baselines/reference/tsbuild/inferredTypeFromTransitiveModule/reports-errors-in-files-affected-by-change-in-signature-with-isolatedModules.js) | Signature computation bookkeeping |
| [tsc/incremental/const-enums-aliased-in-different-file.js](testdata/baselines/reference/tsc/incremental/const-enums-aliased-in-different-file.js) | Computed signatures retained in build info; bookkeeping only |
| [tsc/incremental/const-enums-with-refCycle.js](testdata/baselines/reference/tsc/incremental/const-enums-with-refCycle.js) | Fewer initial refreshes (first edit); identical emits and diagnostics; signature bookkeeping |
| [tsbuild/noEmit/changes-composite.js](testdata/baselines/reference/tsbuild/noEmit/changes-composite.js) | Computed signatures retained in build info; bookkeeping only |
| [tsbuild/noEmit/changes-incremental-declaration.js](testdata/baselines/reference/tsbuild/noEmit/changes-incremental-declaration.js) | Computed signatures retained in build info; bookkeeping only |
| [tsbuild/noEmit/changes-incremental.js](testdata/baselines/reference/tsbuild/noEmit/changes-incremental.js) | Computed signatures retained in build info; bookkeeping only |
| [tsbuild/noEmit/changes-with-initial-noEmit-composite.js](testdata/baselines/reference/tsbuild/noEmit/changes-with-initial-noEmit-composite.js) | Computed signatures retained in build info; bookkeeping only |
| [tsbuild/noEmit/changes-with-initial-noEmit-incremental-declaration.js](testdata/baselines/reference/tsbuild/noEmit/changes-with-initial-noEmit-incremental-declaration.js) | Computed signatures retained in build info; bookkeeping only |
| [tsbuild/noEmit/changes-with-initial-noEmit-incremental.js](testdata/baselines/reference/tsbuild/noEmit/changes-with-initial-noEmit-incremental.js) | Computed signatures retained in build info; bookkeeping only |
| [tsc/noEmit/changes-composite.js](testdata/baselines/reference/tsc/noEmit/changes-composite.js) | Computed signatures retained in build info; bookkeeping only |
| [tsc/noEmit/changes-incremental-declaration.js](testdata/baselines/reference/tsc/noEmit/changes-incremental-declaration.js) | Computed signatures retained in build info; bookkeeping only |
| [tsc/noEmit/changes-incremental.js](testdata/baselines/reference/tsc/noEmit/changes-incremental.js) | Computed signatures retained in build info; bookkeeping only |
| [tsc/noEmit/changes-with-initial-noEmit-composite.js](testdata/baselines/reference/tsc/noEmit/changes-with-initial-noEmit-composite.js) | Computed signatures retained in build info; bookkeeping only |
| [tsc/noEmit/changes-with-initial-noEmit-incremental-declaration.js](testdata/baselines/reference/tsc/noEmit/changes-with-initial-noEmit-incremental-declaration.js) | Computed signatures retained in build info; bookkeeping only |
| [tsc/noEmit/changes-with-initial-noEmit-incremental.js](testdata/baselines/reference/tsc/noEmit/changes-with-initial-noEmit-incremental.js) | Computed signatures retained in build info; bookkeeping only |

## Tests added

`tsctests` tests named `TestBuildDeclarationReference*`:

- `LeafStop`: unchanged, nonreferencing declarations stop downstream refreshes.
- `UnchangedBridge`: byte-identical import-type declarations propagate member errors and reversals.
- `ExportFrom`: barrel chains propagate member errors and reversals.
- `GlobalScope`: an ambient import-type reference refreshes every file.
- `Issue63664`: twenty-leaf native CLI adaptation; `rootDir: "src"` makes it build cleanly.
- `Fixpoint`: a stopped bridge wakes when a later frontier reaches its reference.

On main, leaf/issue baselines fail on excessive work; bridge/export/fixpoint baselines fail on signature lists, with correct diagnostics. The global preservation test passes unchanged.

## Performance

Medians of three runs, self-built binaries from `28534d7609062699a68b1b66e2367f8d95dbf290`; Go 1.27.2, Node 24, macOS arm64. Each run builds cold, appends whitespace to `left.ts`, then edits `middle.ts`. The compatible edit adds `export interface Extra { optional?: number }`. Total emits include build info; refreshes count distinct `checkSourceFile` trace paths. Wall times include tracing.

| Leaves | Edit | Main JS / total emits | Main refreshed | Main ms | Branch JS / total emits | Branch refreshed | Branch ms |
|---:|---|---:|---:|---:|---:|---:|---:|
| 500 | whitespace | 502 / 503 | 502 | 57.6 | 1 / 2 | 1 | 38.9 |
| 500 | compatible shape | 502 / 503 | 502 | 58.1 | 502 / 503 | 502 | 60.8 |
| 2,000 | whitespace | 2,002 / 2,003 | 2,002 | 184.0 | 1 / 2 | 1 | 99.5 |
| 2,000 | compatible shape | 2,002 / 2,003 | 2,002 | 173.9 | 2,002 / 2,003 | 2,002 | 180.3 |

Build each revision with `go -C tsc build -o /absolute/binary ./cmd/tsc`, then run:

```sh
node tools/scripts/declaration-walk/measure.mjs /absolute/main-binary /absolute/branch-binary /absolute/new-results-directory
```

The retained runner uses `-p tsconfig.json` with incremental state; its generator is:

```js
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
```

## Known limits

File-grain signatures still walk declarations naming a widely referenced module. Module-referencing global files still invalidate everything. Const-enum shape changes retain the conservative closure, as the table shows.

## Relationship to the JavaScript builder

The JavaScript builder has the same two phases and the approach ports; this change touches the native builder only.

Related: [#63664](https://github.com/microsoft/TypeScript/issues/63664). Prepared with AI assistance; offered for reuse without coordination.

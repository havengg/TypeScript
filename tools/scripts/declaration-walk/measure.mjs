// node tools/scripts/declaration-walk/measure.mjs UNPATCHED_BINARY PATCHED_BINARY NEW_OUTPUT_DIRECTORY
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { generate } from "./generate.mjs";

const [unpatched, patched, output] = process.argv.slice(2);
if (!unpatched || !patched || !output) throw new Error("Expected two compiler binaries and a new output directory");
const binaries = { unpatched: path.resolve(unpatched), patched: path.resolve(patched) };
const out = path.resolve(output);
fs.mkdirSync(out);
const rows = [];
const save = (name, data) => fs.writeFileSync(path.join(out, name), JSON.stringify(data, null, 2) + "\n");
for (const leaves of [500, 2000]) {
    for (const edit of ["whitespace", "compatible shape"]) {
        for (const repetition of [1, 2, 3]) {
            const names = Object.keys(binaries);
            if (repetition % 2 === 0) names.reverse();
            for (const binary of names) {
                const root = path.join(out, `${leaves}-${edit.replace(" ", "-")}-${repetition}-${binary}`);
                generate(root, leaves);
                const build = (label, extra = []) => {
                    const start = performance.now();
                    const result = spawnSync(binaries[binary], ["-p", "tsconfig.json", "--listEmittedFiles", ...extra], { cwd: root, encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
                    const seconds = (performance.now() - start) / 1000;
                    fs.writeFileSync(path.join(root, `${label}.log`), (result.stdout ?? "") + (result.stderr ?? ""));
                    if (result.error || result.status !== 0) throw result.error ?? new Error(`${root}: ${label} exited ${result.status}`);
                    return { text: result.stdout, seconds };
                };
                build("cold");
                fs.appendFileSync(path.join(root, "src/left.ts"), "\n");
                build("origin-whitespace");
                fs.appendFileSync(path.join(root, "src/middle.ts"), edit === "whitespace" ? "\n" : "\nexport interface Extra { optional?: number }\n");
                const { text, seconds } = build("edit", ["--generateTrace", path.join(root, "trace")]);
                const checked = new Set();
                for (const name of fs.readdirSync(path.join(root, "trace"))) {
                    if (!/^trace.*\.json$/.test(name)) continue;
                    for (const event of JSON.parse(fs.readFileSync(path.join(root, "trace", name), "utf8"))) {
                        if (event.name === "checkSourceFile" && ["B", "X"].includes(event.ph)) checked.add(event.args.path);
                    }
                }
                if (!checked.size) throw new Error("Missing checkSourceFile trace events");
                const emitted = text.split(/\r?\n/).filter(line => line.startsWith("TSFILE: "));
                rows.push({ leaves, edit, binary, repetition, jsEmitted: emitted.filter(line => line.endsWith(".js")).length, allEmitted: emitted.length, refreshed: checked.size, seconds });
                save("runs.json", rows);
                console.log(rows.at(-1));
            }
        }
    }
}
const medians = [];
for (const leaves of [500, 2000]) {
    for (const edit of ["whitespace", "compatible shape"]) {
        for (const binary of Object.keys(binaries)) {
            const runs = rows.filter(row => row.leaves === leaves && row.edit === edit && row.binary === binary);
            const values = Object.fromEntries(["jsEmitted", "allEmitted", "refreshed", "seconds"].map(key => [key, runs.map(row => row[key]).sort((a, b) => a - b)[1]]));
            medians.push({ leaves, edit, binary, ...values });
        }
    }
}
save("medians.json", medians);
save("binaries.json", Object.fromEntries(Object.entries(binaries).map(([name, file]) => [name, { sha256: createHash("sha256").update(fs.readFileSync(file)).digest("hex") }])));

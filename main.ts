import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, written verbatim by main.ts: the pitch is the whole entry.
const line =
  "Say your app idea out loud, in plain words, and an AI agent will build you a working first version to try — if you hate it, you've lost ten minutes, not a weekend.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");

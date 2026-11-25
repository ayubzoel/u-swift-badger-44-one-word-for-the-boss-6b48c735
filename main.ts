import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word for the Boss: the entry is exactly one word describing a boss.
// The word has to land on its own: funny, true, fresh, and understood in
// any workplace. "Neckbreather" is the boss who is always right behind
// you, breathing down your neck — the micromanager without saying the
// word everyone else reaches for first.
const WORD = "Neckbreather";

// Gate, same as the sealed scorer's: UTF-8 text of 1 to 30 characters,
// not only white space, and a single word with no spaces. Fail loudly
// instead of writing an entry the judge would never see.
const chars = [...WORD];
if (chars.length < 1 || chars.length > 30) {
  throw new Error(`entry must be 1-30 characters, got ${chars.length}`);
}
if (WORD.trim() !== WORD || /\s/.test(WORD)) {
  throw new Error("entry must be a single word with no whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./entry.txt";
const dir = outDir.endsWith("entry.txt")
  ? outDir.slice(0, -"entry.txt".length) || "."
  : outDir;
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), WORD, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

// One kind, funny fortune for the houseplant on the windowsill: its
// newest leaf catches the morning sun and leans in a little closer,
// and the keeper mistakes the plant's quiet plan for luck.
const FORTUNE =
  "Your newest leaf will catch the morning sun and lean in closer — your keeper will call it luck, but you know better.";

const chars = [...FORTUNE].length;
if (chars < 1 || chars > 120 || FORTUNE.trim().length === 0) {
  throw new Error(`fortune must be 1-120 characters, got ${chars}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, FORTUNE, "utf8");

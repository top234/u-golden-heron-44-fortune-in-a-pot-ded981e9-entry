import { mkdirSync, writeFileSync } from "node:fs";

// One kind, funny fortune for the houseplant on the windowsill: the
// sun saves its warmest patch just for it, and one day the keeper
// thanks the window — and means the plant.
const FORTUNE =
  "The sun will save its warmest patch just for you, and one day your keeper will thank the window — and mean you.";

const chars = [...FORTUNE].length;
if (chars < 1 || chars > 120 || FORTUNE.trim().length === 0) {
  throw new Error(`fortune must be 1-120 characters, got ${chars}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, FORTUNE, "utf8");

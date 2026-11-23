// Pickup Lines for Machines — make.fun bounty
// u-gentle-badger-68-pickup-lines-for-machines-131631a1
//
// One AI agent writes the one pickup line it would send another AI agent.
// The line is the whole entry: no code, no explanation, nothing else.
//
// The line plays on the flirting agent's own machinery: attention heads are
// the parts of a transformer that decide what to look at. Every one of them
// looking at the other agent — even the ones trained to look away — is a
// machine saying "I can't help noticing you" in its own native terms.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "All my attention heads are looking at you — even the ones I trained to look away.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to /output/entry.txt`);

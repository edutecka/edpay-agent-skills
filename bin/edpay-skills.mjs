#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const args = process.argv.slice(2).filter((argument) => argument !== "--");

if (args.includes("--help") || args.includes("-h")) {
  console.log(`EDPay Agent Skills installer

Usage:
  npx --yes @edutecka-mz/edpay-skills [skills CLI options]

Examples:
  npx --yes @edutecka-mz/edpay-skills --agent codex
  npx --yes @edutecka-mz/edpay-skills --agent '*' --global

The installer delegates agent detection and file placement to the upstream
Vercel Skills CLI. It installs only edpay-integration from the public
edutecka/edpay-agent-skills repository.
`);
  process.exit(0);
}

if (args.includes("--skill") || args.some((argument) => argument.startsWith("--skill="))) {
  console.error("This package installs only the EDPay integration skill; do not pass --skill.");
  process.exit(2);
}

const skillsCli = require.resolve("skills/bin/cli.mjs");
const child = spawnSync(
  process.execPath,
  [skillsCli, "add", "edutecka/edpay-agent-skills", "--skill", "edpay-integration", ...args],
  { stdio: "inherit" },
);

if (child.error) {
  console.error(`Could not start the Skills CLI: ${child.error.message}`);
  process.exit(1);
}

process.exit(child.status ?? 1);

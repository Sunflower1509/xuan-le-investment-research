import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

test("production deployment workflows share one serialized concurrency group", () => {
  const pages = read(".github/workflows/pages.yml");
  const eod = read(".github/workflows/eod-daily.yml");
  for (const workflow of [pages, eod]) {
    assert.match(workflow, /concurrency:\s*[\s\S]*group:\s*pages-production/);
    assert.match(workflow, /queue:\s*max/);
    assert.match(workflow, /cancel-in-progress:\s*false/);
  }
});

test("Pages deployment ignores non-runtime maintenance-only paths", () => {
  const pages = read(".github/workflows/pages.yml");
  for (const ignored of [
    "docs/**",
    "tests/**",
    "qa/**",
    "workers/**",
    "README.md",
    "XSMB_SYSTEM_HANDOFF.md",
    ".gitattributes",
    ".gitignore"
  ]) {
    assert.ok(pages.includes(`- "${ignored}"`), `Missing paths-ignore entry: ${ignored}`);
  }
});

test("visual smoke QA covers data-only UI regressions and caches downloads", () => {
  const workflow = read(".github/workflows/visual-smoke.yml");
  assert.ok(workflow.includes('- "src/data/**"'));
  assert.match(workflow, /uses:\s*actions\/cache@v4/);
  assert.match(workflow, /~\/\.npm/);
  assert.match(workflow, /~\/\.cache\/ms-playwright/);
});

test("EOD watchdog skips closed sessions and duplicate recovery dispatches", () => {
  const workflow = read(".github/workflows/eod-watchdog.yml");
  assert.match(workflow, /group:\s*eod-watchdog-\$\{\{ github\.ref \}\}/);
  assert.match(workflow, /holidays2026 = new Set/);
  assert.match(workflow, /market_open=/);
  assert.match(workflow, /Market closed - watchdog no-op/);
  assert.match(workflow, /Verified EOD workflow already active; skip duplicate recovery dispatch/);
  assert.match(workflow, /gh run list/);
});

test("site audit follows the exact daily runtime import chain and verifies first-paint dates", () => {
  const audit = read("scripts/audit-site.mjs");
  assert.match(audit, /const loadDailyRuntimeData = \(\) =>/);
  assert.match(audit, /src\/index\.js/);
  assert.match(audit, /daily-insights/);
  assert.match(audit, /latestEntryDate/);
  assert.match(audit, /validateMarketDecisionBrief/);
  assert.match(audit, /coverage-eod-label/);
  assert.match(audit, /coverage-lock-label/);
  assert.match(audit, /ledger-asof/);
});

test("obsolete one-time Pages trigger marker is removed", () => {
  assert.equal(fs.existsSync(path.join(root, "deploy/last-pages-trigger.txt")), false);
});

test("maintenance does not change the public section architecture", () => {
  const html = read("index.html");
  const order = [...html.matchAll(/<section\b[^>]*\bid=(['"])([^'"]+)\1[^>]*>/g)].map((match) => match[2]);
  assert.deepEqual(order, ["overview", "daily-market", "position-ledger", "action-radar", "research"]);
});

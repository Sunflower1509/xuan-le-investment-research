import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const workflow = fs.readFileSync(path.join(root, ".github/workflows/branch-hygiene.yml"), "utf8");

test("branch hygiene only deletes safely merged same-repository PR heads", () => {
  assert.match(workflow, /pr\?\.merged_at/);
  assert.match(workflow, /pr\.head\?\.repo\?\.full_name === fullName/);
  assert.match(workflow, /pr\.head\.ref !== defaultBranch/);
  assert.match(workflow, /!openHeads\.has\(pr\.head\.ref\)/);
  assert.match(workflow, /!openBases\.has\(pr\.head\.ref\)/);
  assert.match(workflow, /!persistentBranches\.has\(pr\.head\.ref\)/);
  assert.match(workflow, /ref\.data\.object\.sha !== pr\.head\.sha/);
  assert.match(workflow, /branch advanced after PR/);
});

test("branch hygiene protects stacked PR bases and declared workflow dependency branches", () => {
  assert.match(workflow, /const openBases = new Set/);
  assert.match(workflow, /persistent-branches\.json/);
  assert.match(workflow, /Persistent dependency branches protected/);
  assert.doesNotMatch(workflow, /explicitGarbage|noop-ignore/);
});

test("branch hygiene rechecks safe merged branches weekly", () => {
  assert.match(workflow, /schedule:/);
  assert.match(workflow, /cron: "23 2 \* \* 1"/);
  assert.match(workflow, /state: "closed"/);
});

test("branch hygiene has bounded permissions and runtime", () => {
  assert.match(workflow, /contents: write/);
  assert.match(workflow, /pull-requests: read/);
  assert.match(workflow, /timeout-minutes: 10/);
  assert.doesNotMatch(workflow, /issues: write|actions: write|administration: write/);
});

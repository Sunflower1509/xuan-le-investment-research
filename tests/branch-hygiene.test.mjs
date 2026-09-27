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
  assert.match(workflow, /ref\.data\.object\.sha !== pr\.head\.sha/);
  assert.match(workflow, /branch advanced after PR/);
});

test("branch hygiene protects open PR heads and only deletes duplicate noop branches under an exact SHA invariant", () => {
  assert.match(workflow, /state: "open"/);
  assert.match(workflow, /explicitGarbage = \["noop-ignore", "noop-ignore-2", "noop-ignore-3"\]/);
  assert.match(workflow, /garbageRefs\.length === explicitGarbage\.length && uniqueGarbageShas\.size === 1/);
  assert.match(workflow, /referenced by an open PR/);
});

test("branch hygiene has bounded permissions and runtime", () => {
  assert.match(workflow, /contents: write/);
  assert.match(workflow, /pull-requests: read/);
  assert.match(workflow, /timeout-minutes: 10/);
  assert.doesNotMatch(workflow, /issues: write|actions: write|administration: write/);
});

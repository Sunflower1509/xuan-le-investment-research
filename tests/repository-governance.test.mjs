import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => fs.readFileSync(path.join(root, rel), "utf8");
const json = (rel) => JSON.parse(read(rel));

const persistent = json(".github/governance/persistent-branches.json");
const archive = json(".github/governance/archive-anchors.json");
const auditWorkflow = read(".github/workflows/repository-governance-audit.yml");
const auditScript = read("scripts/audit-repository-governance.mjs");
const policy = read("docs/REPOSITORY_GOVERNANCE.md");

test("persistent workflow dependency branches are explicitly declared", () => {
  assert.equal(persistent.schema, "repository-persistent-branches-v1");
  assert.equal(persistent.defaultBranch, "main");
  const xsmb = persistent.branches.find((item) => item.name === "xsmb-v2.1-python312-runtime");
  assert.ok(xsmb);
  assert.deepEqual(xsmb.dependentWorkflows.sort(), [
    ".github/workflows/xsmb-r3-full-suite-bootstrap.yml",
    ".github/workflows/xsmb-runtime-gate-bootstrap.yml"
  ]);
});

test("Phase 4C archive anchors remain exact, unique and namespaced", () => {
  assert.equal(archive.schema, "repository-archive-anchors-v1");
  assert.equal(archive.anchors.length, 10);
  const tags = archive.anchors.map((item) => item.tag);
  const shas = archive.anchors.map((item) => item.sha);
  assert.equal(new Set(tags).size, tags.length);
  assert.equal(new Set(shas).size, shas.length);
  for (const item of archive.anchors) {
    assert.match(item.tag, /^archive\/phase4c\/20260928\/[a-z0-9][a-z0-9.-]*$/);
    assert.match(item.sha, /^[0-9a-f]{40}$/);
    assert.ok(item.sourceBranch);
  }
});

test("governance audit is scheduled, read-only and fail-closed on hard invariants", () => {
  assert.match(auditWorkflow, /schedule:/);
  assert.match(auditWorkflow, /cron: "41 2 \* \* 1"/);
  assert.match(auditWorkflow, /contents: read/);
  assert.match(auditWorkflow, /pull-requests: read/);
  assert.doesNotMatch(auditWorkflow, /contents: write|pull-requests: write|actions: write/);
  assert.match(auditScript, /Archive tag moved/);
  assert.match(auditScript, /Workflow branch dependency is undeclared/);
  assert.match(auditScript, /Persistent branch missing/);
  assert.match(auditScript, /Archived source branch unexpectedly exists/);
});

test("governance policy preserves automated main persistence and recommends non-destructive rulesets", () => {
  assert.match(policy, /block deletion and force-pushes/i);
  assert.match(policy, /archive\/\*\*/);
  assert.match(policy, /Do not enable a blanket "require pull request"/);
  assert.match(policy, /annotated tag/i);
});

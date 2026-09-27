import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const workflow = fs.readFileSync(path.join(root, ".github/workflows/visual-smoke.yml"), "utf8");
const lock = JSON.parse(fs.readFileSync(path.join(root, "qa/visual/package-lock.json"), "utf8"));

test("visual QA dependencies are reproducible through npm ci and a committed lockfile", () => {
  assert.equal(lock.lockfileVersion, 3);
  assert.equal(lock.packages[""].devDependencies["@playwright/test"], "1.63.0");
  assert.equal(lock.packages["node_modules/@playwright/test"].version, "1.63.0");
  assert.equal(lock.packages["node_modules/playwright"].version, "1.63.0");
  assert.equal(lock.packages["node_modules/playwright-core"].version, "1.63.0");
  assert.match(workflow, /npm ci --no-audit --no-fund/);
  assert.doesNotMatch(workflow, /npm install --no-audit --no-fund/);
  assert.match(workflow, /hashFiles\('qa\/visual\/package-lock\.json', 'scripts\/build\/build-assets\.sh'\)/);
});

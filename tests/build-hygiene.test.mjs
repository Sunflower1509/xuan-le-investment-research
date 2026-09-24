import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");
const tracked = (...paths) => execFileSync("git", ["ls-files", "--", ...paths], { cwd: root, encoding: "utf8" }).trim();

test("generated web bundles are build outputs, not tracked source", () => {
  assert.equal(tracked("assets/css/site.min.css", "assets/js/site.min.js"), "");
  const ignore = read(".gitignore");
  assert.match(ignore, /assets\/css\/site\.min\.css/);
  assert.match(ignore, /assets\/js\/site\.min\.js/);
});

test("legacy web build debris is not tracked", () => {
  const legacy = [
    "assets/css/daily-market-layout-fix.css",
    "assets/css/market-decision-brief.css",
    "assets/css/hero-banner-v2.css",
    "assets/css/data-navigation.css",
    "scripts/sync-company-visuals-v2.mjs",
    "scripts/sync-company-visuals-v3.mjs",
    "scripts/audit-company-visuals-v2.mjs",
    "scripts/audit-company-visuals-v3.mjs"
  ];
  assert.equal(tracked(...legacy), "");
});

test("frontend CSS has one source entry and one runtime bundle", () => {
  const source = read("src/index.css");
  for (const file of ["typography.css", "site.css", "market-decision-brief.css", "hero-banner.css", "data-navigation.css"]) {
    assert.match(source, new RegExp(file.replace(".", "\\.")));
  }
  const html = read("index.html");
  const stylesheets = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(stylesheets, ["assets/css/site.min.css"]);
  assert.match(html, /<script defer src="assets\/js\/site\.min\.js"><\/script>/);
});

test("CIVS wrappers point at stable core implementation names", () => {
  assert.match(read("scripts/sync-company-visuals.mjs"), /sync-company-visuals-core\.mjs/);
  assert.match(read("scripts/audit-company-visuals.mjs"), /audit-company-visuals-core\.mjs/);
});

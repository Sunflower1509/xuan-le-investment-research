import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const helper = fs.readFileSync(path.join(root, "scripts/civs-fetch-fallback.mjs"), "utf8");
const wrapper = fs.readFileSync(path.join(root, "scripts/sync-company-visuals.mjs"), "utf8");

test("CIVS discovery fallback loads before the strict v3 engine", () => {
  const helperAt = wrapper.indexOf("civs-fetch-fallback.mjs");
  const engineAt = wrapper.indexOf("sync-company-visuals-v3.mjs");
  assert.ok(helperAt >= 0 && engineAt > helperAt);
});

test("fallback never disables TLS verification and never proxies image bytes", () => {
  assert.doesNotMatch(helper, /--insecure|\s-k\b|rejectUnauthorized\s*:\s*false|NODE_TLS_REJECT_UNAUTHORIZED/);
  assert.match(helper, /!isHtmlRequest\(options\).*nativeFetch/);
  assert.match(helper, /readerUsedForImages:\s*false/);
});

test("Reader is only a rate-limited page discovery transport", () => {
  assert.match(helper, /https:\/\/r\.jina\.ai\//);
  assert.match(helper, /READER_INTERVAL_MS\s*=\s*3200/);
  assert.match(helper, /markdownToDiscoveryHtml/);
  assert.match(helper, /jina-reader/);
  assert.match(helper, /canonicalVariants/);
});

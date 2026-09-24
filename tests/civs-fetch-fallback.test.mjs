import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const helper = fs.readFileSync(path.join(root, "scripts/civs-fetch-fallback.mjs"), "utf8");
const overlay = fs.readFileSync(path.join(root, "scripts/civs-registry-overlay.mjs"), "utf8");
const overrides = JSON.parse(fs.readFileSync(path.join(root, "src/data/company-visual-overrides.json"), "utf8"));
const wrapper = fs.readFileSync(path.join(root, "scripts/sync-company-visuals.mjs"), "utf8");

test("CIVS discovery helpers load before the strict core engine", () => {
  const fetchAt = wrapper.indexOf("civs-fetch-fallback.mjs");
  const overlayAt = wrapper.indexOf("civs-registry-overlay.mjs");
  const engineAt = wrapper.indexOf("sync-company-visuals-core.mjs");
  assert.ok(fetchAt >= 0 && overlayAt > fetchAt && engineAt > overlayAt);
});

test("sync wrapper follows the current coverageTarget until the candidate state is persisted", () => {
  assert.match(wrapper, /candidateCount/);
  assert.match(wrapper, /verifiedCount/);
  assert.match(wrapper, /pendingCount/);
  assert.match(wrapper, /await sleep\(250\)/);
  assert.match(wrapper, /persistence confirmed/);
  assert.match(wrapper, /coverageTarget/);
  assert.match(wrapper, /finalExpectedCount/);
  assert.doesNotMatch(wrapper, /candidate set 125 mã/);
});

test("VHM legacy CDN provenance is normalized only for the exact verified official baseline", () => {
  assert.match(wrapper, /market\.vinhomes\.vn\/blog\/tien-do-vinhomes-ocean-park/);
  assert.match(wrapper, /storage\\\.googleapis\\\.com\\\/digital-platform/);
  assert.match(wrapper, /vhm\.officialDomain === "vinhomes\.vn"/);
  assert.match(wrapper, /allowedImageHosts\) && vhm\.allowedImageHosts\.includes\("storage\.googleapis\.com"\)/);
  assert.match(wrapper, /embeddedImageHostVerified = true/);
  assert.match(wrapper, /resolvedFromOfficialPage: true/);
  assert.match(wrapper, /legacy-baseline-provenance-v1/);
  assert.match(wrapper, /migration refused/);
});

test("published local outputs below the audit byte floor are demoted to safe fallback", () => {
  assert.match(wrapper, /demoteAuditInvalidLocalOutputs/);
  assert.match(wrapper, /size > 10_000/);
  assert.match(wrapper, /fs\.unlinkSync\(assetPath\)/);
  assert.match(wrapper, /entry\.verified = false/);
  assert.match(wrapper, /entry\.pending = true/);
  assert.match(wrapper, /giữ report-cover fallback/);
  assert.match(wrapper, /rolloutProgressPct/);
  assert.match(wrapper, /pendingTickers/);
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

test("source overrides are an in-memory verified overlay, never a registry rewrite", () => {
  assert.equal(overrides.meta.schema, "civs-source-overrides-v1");
  assert.ok(Object.keys(overrides.overrides).length >= 5);
  assert.match(overlay, /fs\.readFileSync\s*=\s*function patchedReadFileSync/);
  assert.match(overlay, /diskRegistryMutated:\s*false/);
  assert.doesNotMatch(overlay, /writeFileSync|writeFile\(/);
  for (const [ticker, item] of Object.entries(overrides.overrides)) {
    assert.match(item.sourceUrl, /^https:\/\//, `${ticker} sourceUrl must be HTTPS`);
    assert.ok(item.officialDomain, `${ticker} must identify officialDomain`);
    if (item.sourceImageUrl) assert.match(item.sourceImageUrl, /^https:\/\//, `${ticker} source image must be HTTPS`);
  }
});

test("BSR exact asset override remains first-party and economic-identity specific", () => {
  const bsr = overrides.overrides.BSR;
  assert.equal(bsr.officialDomain, "bsr.com.vn");
  assert.match(bsr.sourceUrl, /about-dung-quat-refinery/);
  assert.match(bsr.sourceImageUrl, /^https:\/\/www\.bsr\.com\.vn\/documents\//);
  assert.equal(bsr.sourceDiscovery.resolvedFromOfficialPage, true);
  assert.equal(bsr.qualityScore, 10);
});

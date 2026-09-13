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

test("CIVS discovery helpers load before the strict v3 engine", () => {
  const fetchAt = wrapper.indexOf("civs-fetch-fallback.mjs");
  const overlayAt = wrapper.indexOf("civs-registry-overlay.mjs");
  const engineAt = wrapper.indexOf("sync-company-visuals-v3.mjs");
  assert.ok(fetchAt >= 0 && overlayAt > fetchAt && engineAt > overlayAt);
});

test("sync wrapper keeps the process alive until the 125-candidate state is persisted", () => {
  assert.match(wrapper, /candidateCount/);
  assert.match(wrapper, /verifiedCount/);
  assert.match(wrapper, /pendingCount/);
  assert.match(wrapper, /await sleep\(250\)/);
  assert.match(wrapper, /persistence confirmed/);
  assert.match(wrapper, /không persist được candidate set 125 mã/);
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
  assert.equal(bsr.sourceUrl, "https://bsr.com.vn/vi/web/bsr-eng/about-dung-quat-refinery");
  assert.match(bsr.sourceImageUrl, /^https:\/\/bsr\.com\.vn\/BTEC\/images\//);
  assert.equal(bsr.sourceDiscovery.resolvedFromOfficialPage, true);
  assert.equal(bsr.qualityScore, 10);
});

test("pending source batch points to exact first-party economic-identity pages", () => {
  assert.match(overrides.overrides.D2D.sourceUrl, /d2d\.com\.vn\/du-an-da-hoan-thanh\/du-an-khu-cong-nghiep-nhon-trach-2$/);
  assert.match(overrides.overrides.HDC.sourceUrl, /hodeco\.vn\/view\/28\/the-light-city$/);
  assert.match(overrides.overrides.MBB.sourceUrl, /news\.mbbank\.com\.vn\/news\/khai-truong-mb-bac-nghe-an-/);
  assert.match(overrides.overrides.SHS.sourceUrl, /shs\.com\.vn\/tin-tuc\/shs-khai-truong-tru-so-chinh-moi-/);
  assert.equal(overrides.overrides.SIP.sourceUrl, "https://saigonvrg.com.vn/vi/kcn-phuoc-dong");
  assert.equal(overrides.overrides.VGC.sourceUrl, "https://viglacera.com.vn/bat-dong-san");
});

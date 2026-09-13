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
  assert.ok(Object.keys(overrides.overrides).length >= 9);
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

test("pending source batch points BFC and D2D to core operating-asset pages", () => {
  const bfc = overrides.overrides.BFC;
  const d2d = overrides.overrides.D2D;
  assert.equal(bfc.officialDomain, "binhdien.com");
  assert.match(bfc.sourceUrl, /xanh-hoa-tu-nha-may-den-ruong-vuon/);
  assert.ok(bfc.keywords.some((item) => /Nhà máy Phân bón Bình Điền Long An/i.test(item)));
  assert.equal(d2d.officialDomain, "d2d.com.vn");
  assert.match(d2d.sourceUrl, /khu-cong-nghiep-nhon-trach-2/);
  assert.ok(d2d.keywords.some((item) => /Khu Công nghiệp Nhơn Trạch 2/i.test(item)));
});

test("VNM uses a first-party homepage embedded CDN visual with explicit provenance", () => {
  const vnm = overrides.overrides.VNM;
  assert.equal(vnm.officialDomain, "vinamilk.com.vn");
  assert.equal(vnm.sourceUrl, "https://www.vinamilk.com.vn/");
  assert.match(vnm.sourceImageUrl, /^https:\/\/d8um25gjecm9v\.cloudfront\.net\/cms\/Hero_2_/);
  assert.ok(vnm.allowedImageHosts.includes("d8um25gjecm9v.cloudfront.net"));
  assert.equal(vnm.embeddedImageHostVerified, true);
  assert.equal(vnm.sourceDiscovery.resolvedFromOfficialPage, true);
  assert.ok(vnm.qualityScore >= 8);
});

test("VJC discovery uses the official Vietnamese fleet page", () => {
  const vjc = overrides.overrides.VJC;
  assert.equal(vjc.officialDomain, "vietjetair.com");
  assert.match(vjc.sourceUrl, /\/vi\/pages\/doi-bay-sinh-dong-nhat-the-gioi-/);
  assert.ok(vjc.keywords.some((item) => /Tàu bay Vietjet/i.test(item)));
});

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const data = JSON.parse(fs.readFileSync(path.join(root, "src/data/company-visual-overrides.json"), "utf8"));
const o = data.overrides;

test("VGI is pinned to the officially announced 2026 Viettel Global domain", () => {
  assert.equal(o.VGI.officialDomain, "viettelglobal.com.vn");
  assert.match(o.VGI.sourceUrl, /^https:\/\/beta\.viettelglobal\.com\.vn\//);
  assert.doesNotMatch(o.VGI.sourceUrl, /viettelglobal\.vn/);
  assert.ok(o.VGI.keywords.some((item) => /trạm phát sóng/i.test(item)));
});

test("SIP uses the official Phuoc Dong industrial-park infrastructure page", () => {
  assert.equal(o.SIP.officialDomain, "saigonvrg.com.vn");
  assert.equal(o.SIP.sourceUrl, "https://saigonvrg.com.vn/vi/kcn-phuoc-dong");
  assert.ok(o.SIP.keywords.some((item) => /tram-dien-kcn-phuoc-dong/i.test(item)));
  assert.ok(o.SIP.keywords.some((item) => /he-thong-duong-giao-thong/i.test(item)));
});

test("SHS and VDS use first-party digital trading identity pages", () => {
  assert.equal(o.SHS.officialDomain, "shs.com.vn");
  assert.match(o.SHS.sourceUrl, /nang-cap-web-giao-dich-sh-smart/);
  assert.equal(o.SHS.identityType, "securities-digital-platform");
  assert.equal(o.VDS.officialDomain, "vdsc.com.vn");
  assert.match(o.VDS.sourceUrl, /^https:\/\/hdsd\.vdsc\.com\.vn\//);
  assert.equal(o.VDS.identityType, "securities-digital-platform");
});

test("HDG source is a named core hydropower operating asset", () => {
  assert.equal(o.HDG.officialDomain, "hado.com.vn");
  assert.match(o.HDG.sourceUrl, /thuy-dien-dak-mi-2/);
  assert.ok(o.HDG.keywords.some((item) => /147 MW/i.test(item)));
});

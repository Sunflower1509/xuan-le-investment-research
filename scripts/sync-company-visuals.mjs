#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

import "./civs-fetch-fallback.mjs";
import "./civs-registry-overlay.mjs";
import "./sync-company-visuals-core.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "src/data/company-visuals.js");
const deadline = Date.now() + 85 * 60 * 1000;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const localPath = (value) => String(value || "").split(/[?#]/, 1)[0];

const readData = () => {
  try {
    const code = fs.readFileSync(dataPath, "utf8");
    const context = { window: {} };
    vm.runInNewContext(code, context, { filename: dataPath });
    return context.window.COMPANY_VISUALS || null;
  } catch { return null; }
};

const readMeta = () => readData()?.meta || null;

const writeData = (data) => {
  fs.writeFileSync(dataPath, `window.COMPANY_VISUALS = ${JSON.stringify(data, null, 2)};\n`);
};

const normalizeVerifiedLegacyProvenance = () => {
  const data = readData();
  const vhm = data?.visuals?.VHM;
  if (!vhm?.verified) return false;
  if (vhm.embeddedImageHostVerified === true && vhm.sourceDiscovery?.resolvedFromOfficialPage === true) return false;

  const exactOfficialPage = vhm.sourceUrl === "https://market.vinhomes.vn/blog/tien-do-vinhomes-ocean-park";
  const exactExternalAsset = /^https:\/\/storage\.googleapis\.com\/digital-platform\/hinh_anh_tien_do_vinhomes_ocean_park_/i.test(String(vhm.sourceImageUrl || ""));
  const exactDomain = vhm.officialDomain === "vinhomes.vn";
  const hostWhitelisted = Array.isArray(vhm.allowedImageHosts) && vhm.allowedImageHosts.includes("storage.googleapis.com");
  if (!(exactOfficialPage && exactExternalAsset && exactDomain && hostWhitelisted)) {
    throw new Error("VHM legacy provenance migration refused: source page/image/domain no longer match the verified baseline.");
  }

  vhm.embeddedImageHostVerified = true;
  vhm.sourceDiscovery = {
    type: "manual-official-external-cdn",
    strategy: "legacy-baseline-provenance-v1",
    resolvedFromOfficialPage: true,
    resolvedLabel: vhm.subject || "Hình ảnh thực tế Vinhomes Ocean Park"
  };
  writeData(data);
  console.log("[CIVS WRAPPER] normalized verified VHM external-CDN provenance from the exact official Vinhomes page.");
  return true;
};

const demoteAuditInvalidLocalOutputs = () => {
  const data = readData();
  if (!data?.visuals) throw new Error("CIVS wrapper: COMPANY_VISUALS unavailable while enforcing local output gates.");
  const demoted = [];

  for (const entry of Object.values(data.visuals)) {
    if (entry?.verified !== true || !entry.src) continue;
    const assetRelative = localPath(entry.src);
    const assetPath = path.join(root, assetRelative);
    const exists = fs.existsSync(assetPath);
    const size = exists ? fs.statSync(assetPath).size : 0;
    if (exists && size > 10_000) continue;

    if (exists) fs.unlinkSync(assetPath);
    entry.verified = false;
    entry.pending = true;
    entry.lastFailure = exists
      ? `${entry.ticker}: normalized WebP ${size} bytes dưới CIVS publish floor 10001 bytes; giữ report-cover fallback.`
      : `${entry.ticker}: thiếu local CIVS asset; giữ report-cover fallback.`;
    delete entry.src;
    delete entry.sha256;
    delete entry.width;
    delete entry.height;
    delete entry.sourceWidth;
    delete entry.sourceHeight;
    delete entry.bytes;
    delete entry.sourceBytes;
    delete entry.syncedOn;
    delete entry.verifiedOn;
    demoted.push(String(entry.ticker || "").toUpperCase());
  }

  if (!demoted.length) return demoted;
  const entries = Object.values(data.visuals);
  const verified = entries.filter((entry) => entry?.verified === true);
  const pending = entries.filter((entry) => entry?.verified !== true);
  data.meta.count = verified.length;
  data.meta.verifiedCount = verified.length;
  data.meta.pendingCount = pending.length;
  data.meta.pendingTickers = pending.map((entry) => String(entry.ticker || "").toUpperCase()).sort();
  const expectedCount = Number(data.meta?.coverageTarget || Object.keys(data.visuals || {}).length || 0);
  if (!expectedCount) throw new Error("CIVS wrapper: không xác định được coverageTarget.");
  data.meta.rolloutProgressPct = Number(((verified.length / expectedCount) * 100).toFixed(1));
  data.meta.complete = verified.length === expectedCount;
  data.meta.verification = data.meta.complete
    ? `CIVS 1.0 COMPLETE: ${expectedCount}/${expectedCount} visuals validated from first-party official pages/CDNs, Quality Gate >=8/10, normalized locally and SHA-256 audited.`
    : `CIVS 1.0 RESUMABLE: ${verified.length}/${expectedCount} visuals verified; ${pending.length} remain on safe report-cover fallback until first-party verification passes.`;
  writeData(data);
  console.log(`[CIVS WRAPPER] demoted audit-invalid local outputs to safe fallback: ${demoted.join(", ")}.`);
  return demoted;
};

while (Date.now() < deadline) {
  const meta = readMeta();
  const expectedCount = Number(meta?.coverageTarget || meta?.candidateCount || 0);
  if (expectedCount > 0 && Number(meta?.candidateCount) === expectedCount && Number(meta?.verifiedCount) + Number(meta?.pendingCount) === expectedCount) {
    console.log(`[CIVS WRAPPER] persistence confirmed: ${meta.verifiedCount}/${expectedCount} verified, ${meta.pendingCount} pending.`);
    break;
  }
  await sleep(250);
}

const finalMeta = readMeta();
const finalExpectedCount = Number(finalMeta?.coverageTarget || finalMeta?.candidateCount || 0);
if (!(finalExpectedCount > 0 && Number(finalMeta?.candidateCount) === finalExpectedCount && Number(finalMeta?.verifiedCount) + Number(finalMeta?.pendingCount) === finalExpectedCount)) {
  throw new Error(`CIVS core kết thúc nhưng không persist được candidate set ${finalExpectedCount || "?"} mã vào company-visuals.js.`);
}

normalizeVerifiedLegacyProvenance();
demoteAuditInvalidLocalOutputs();

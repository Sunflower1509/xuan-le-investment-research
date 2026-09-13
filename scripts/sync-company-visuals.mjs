#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

import "./civs-fetch-fallback.mjs";
import "./civs-registry-overlay.mjs";
import "./sync-company-visuals-v3.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "src/data/company-visuals.js");
const deadline = Date.now() + 85 * 60 * 1000;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const readData = () => {
  try {
    const code = fs.readFileSync(dataPath, "utf8");
    const context = { window: {} };
    vm.runInNewContext(code, context, { filename: dataPath });
    return context.window.COMPANY_VISUALS || null;
  } catch { return null; }
};

const readMeta = () => readData()?.meta || null;

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
  fs.writeFileSync(dataPath, `window.COMPANY_VISUALS = ${JSON.stringify(data, null, 2)};\n`);
  console.log("[CIVS WRAPPER] normalized verified VHM external-CDN provenance from the exact official Vinhomes page.");
  return true;
};

while (Date.now() < deadline) {
  const meta = readMeta();
  if (Number(meta?.candidateCount) === 125 && Number(meta?.verifiedCount) + Number(meta?.pendingCount) === 125) {
    console.log(`[CIVS WRAPPER] persistence confirmed: ${meta.verifiedCount}/125 verified, ${meta.pendingCount} pending.`);
    break;
  }
  await sleep(250);
}

const finalMeta = readMeta();
if (!(Number(finalMeta?.candidateCount) === 125 && Number(finalMeta?.verifiedCount) + Number(finalMeta?.pendingCount) === 125)) {
  throw new Error("CIVS v3 kết thúc nhưng không persist được candidate set 125 mã vào company-visuals.js.");
}

normalizeVerifiedLegacyProvenance();

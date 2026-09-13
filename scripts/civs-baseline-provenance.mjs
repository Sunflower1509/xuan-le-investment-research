import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "src/data/company-visuals.js");

const evidence = Object.freeze({
  VHM: {
    sourceUrl: "https://market.vinhomes.vn/blog/tien-do-vinhomes-ocean-park",
    sourceImageUrl: "https://storage.googleapis.com/digital-platform/hinh_anh_tien_do_vinhomes_ocean_park_cap_nhat_hinh_anh_moi_nhat_so_4_b9d2724feb/hinh_anh_tien_do_vinhomes_ocean_park_cap_nhat_hinh_anh_moi_nhat_so_4_b9d2724feb.jpg",
    externalImageHost: "storage.googleapis.com",
    resolvedLabel: "Hình ảnh thực tế tiến độ Vinhomes Ocean Park — Biển hồ nước mặn"
  }
});

const load = () => {
  const code = fs.readFileSync(dataPath, "utf8");
  const context = { window: {} };
  vm.runInNewContext(code, context, { filename: dataPath });
  return context.window.COMPANY_VISUALS;
};

const data = load();
if (!data?.visuals) throw new Error("CIVS baseline provenance: COMPANY_VISUALS không hợp lệ.");
let changed = false;

for (const [ticker, proof] of Object.entries(evidence)) {
  const entry = data.visuals[ticker];
  if (!entry?.verified) throw new Error(`CIVS baseline provenance: ${ticker} chưa phải visual verified.`);
  if (entry.sourceUrl !== proof.sourceUrl || entry.sourceImageUrl !== proof.sourceImageUrl) {
    throw new Error(`CIVS baseline provenance: ${ticker} source đã thay đổi; cần xác minh lại trước khi gắn provenance.`);
  }
  const allowed = new Set((entry.allowedImageHosts || []).map((host) => String(host).toLowerCase()));
  if (!allowed.has(proof.externalImageHost)) {
    throw new Error(`CIVS baseline provenance: ${ticker} chưa whitelist ${proof.externalImageHost}.`);
  }
  if (entry.embeddedImageHostVerified === true && entry.sourceDiscovery?.resolvedFromOfficialPage === true) continue;

  entry.embeddedImageHostVerified = true;
  entry.sourceDiscovery = {
    ...(entry.sourceDiscovery || {}),
    type: entry.sourceDiscovery?.type || "manual-official",
    strategy: "exact-official-page-embedded-asset-v1",
    resolvedFromOfficialPage: true,
    resolvedLabel: proof.resolvedLabel,
    resolvedOn: "2026-09-14"
  };
  changed = true;
}

if (changed) {
  fs.writeFileSync(dataPath, `window.COMPANY_VISUALS = ${JSON.stringify(data, null, 2)};\n`);
  console.log(`[CIVS BASELINE] normalized external-image provenance for ${Object.keys(evidence).join(", ")}.`);
} else {
  console.log("[CIVS BASELINE] external-image provenance already normalized.");
}

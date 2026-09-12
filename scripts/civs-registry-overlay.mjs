import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const registryPath = path.join(root, "src/data/company-visual-candidates.json");
const overridesPath = path.join(root, "src/data/company-visual-overrides.json");
const originalReadFileSync = fs.readFileSync.bind(fs);

const isHttps = (value) => {
  try { return new URL(String(value || "")).protocol === "https:"; }
  catch { return false; }
};
const hostMatches = (host, domain) => host === domain || host.endsWith(`.${domain}`);
const fail = (message) => { throw new Error(`CIVS override: ${message}`); };

const overridesData = JSON.parse(originalReadFileSync(overridesPath, "utf8"));
if (overridesData?.meta?.schema !== "civs-source-overrides-v1") fail("sai schema.");
const overrides = overridesData.overrides || {};

const mergeRegistryText = (text) => {
  const registry = JSON.parse(text);
  if (registry?.meta?.schema !== "civs-candidate-registry-v1") fail("candidate registry sai schema.");
  const byTicker = new Map((registry.candidates || []).map((entry) => [String(entry.ticker || "").toUpperCase(), entry]));

  for (const [tickerRaw, patch] of Object.entries(overrides)) {
    const ticker = String(tickerRaw).toUpperCase();
    const entry = byTicker.get(ticker);
    if (!entry) fail(`${ticker} không tồn tại trong candidate registry.`);
    const sourceUrl = patch.sourceUrl || entry.sourceUrl;
    const officialDomain = String(patch.officialDomain || entry.officialDomain || "").toLowerCase();
    if (!isHttps(sourceUrl) || !officialDomain) fail(`${ticker} sourceUrl/officialDomain không hợp lệ.`);
    if (!hostMatches(new URL(sourceUrl).hostname.toLowerCase(), officialDomain)) fail(`${ticker} sourceUrl ngoài officialDomain.`);
    if (patch.sourceImageUrl && !isHttps(patch.sourceImageUrl)) fail(`${ticker} sourceImageUrl phải HTTPS.`);
    if (patch.sourceImageUrl) {
      const imageHost = new URL(patch.sourceImageUrl).hostname.toLowerCase();
      const allowed = new Set([...(entry.allowedImageHosts || []), ...(patch.allowedImageHosts || [])].map((host) => String(host).toLowerCase()));
      if (!hostMatches(imageHost, officialDomain) && !allowed.has(imageHost)) fail(`${ticker} sourceImageUrl ngoài officialDomain/whitelist.`);
    }
    Object.assign(entry, patch, {
      ticker,
      officialDomain,
      ...(patch.sourceDiscovery ? { sourceDiscovery: { ...(entry.sourceDiscovery || {}), ...patch.sourceDiscovery } } : {})
    });
  }
  return JSON.stringify(registry, null, 2);
};

fs.readFileSync = function patchedReadFileSync(filename, options) {
  const resolved = typeof filename === "string" || filename instanceof URL
    ? path.resolve(filename instanceof URL ? fileURLToPath(filename) : filename)
    : "";
  if (resolved !== registryPath) return originalReadFileSync(filename, options);
  const merged = mergeRegistryText(originalReadFileSync(registryPath, "utf8"));
  const encoding = typeof options === "string" ? options : options?.encoding;
  return encoding ? merged : Buffer.from(merged, "utf8");
};

globalThis.__XLTVS_CIVS_REGISTRY_OVERLAY__ = Object.freeze({
  version: "1.0.0",
  overrideCount: Object.keys(overrides).length,
  diskRegistryMutated: false
});

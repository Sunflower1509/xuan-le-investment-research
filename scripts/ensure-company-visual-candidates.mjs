#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "src/data/company-visuals.js");
const registryPath = path.join(root, "src/data/company-visual-candidates.json");
const EXPECTED = 125;

const code = fs.readFileSync(dataPath, "utf8");
const sandbox = { window: {} };
vm.runInNewContext(code, sandbox, { filename: dataPath });
const data = sandbox.window.COMPANY_VISUALS;
if (!data?.meta || !data?.visuals) throw new Error("COMPANY_VISUALS unavailable.");

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
if (registry?.meta?.schema !== "civs-candidate-registry-v1") throw new Error("Candidate registry schema mismatch.");
if (Number(registry?.meta?.candidateCount) !== 116 || !Array.isArray(registry?.candidates) || registry.candidates.length !== 116) {
  throw new Error(`Expected 116 pending candidates, got ${registry?.candidates?.length ?? "?"}.`);
}

for (const candidate of registry.candidates) {
  const ticker = String(candidate?.ticker || "").toUpperCase();
  if (!ticker) throw new Error("Candidate without ticker.");
  if (data.visuals[ticker]) continue;
  data.visuals[ticker] = {
    ticker,
    kind: "company-asset",
    verified: false,
    pending: true,
    subject: `${ticker} — hình ảnh doanh nghiệp chờ xác minh`,
    sourceUrl: candidate.sourceUrl,
    sourceLabel: `${ticker} — nguồn chính thức`,
    officialDomain: candidate.officialDomain,
    sourceTier: candidate.sourceTier,
    identityType: candidate.identityType,
    allowedImageHosts: Array.isArray(candidate.allowedImageHosts) ? candidate.allowedImageHosts : [],
    keywords: Array.isArray(candidate.keywords) ? candidate.keywords : [],
    sourceDiscovery: {
      type: "registry-pending",
      strategy: "candidate-registry-v1",
      resolvedFromOfficialPage: false
    },
    lastFailure: "Chưa chạy xác minh hình ảnh đầy đủ trong lần deploy này; giữ report-cover fallback an toàn."
  };
}

const entries = Object.values(data.visuals);
if (entries.length !== EXPECTED) throw new Error(`CIVS scaffold must contain ${EXPECTED} tickers, got ${entries.length}.`);
const verified = entries.filter((entry) => entry?.verified === true);
const pending = entries.filter((entry) => entry?.verified !== true);

data.meta.coverageTarget = EXPECTED;
data.meta.candidateCount = EXPECTED;
data.meta.count = verified.length;
data.meta.verifiedCount = verified.length;
data.meta.pendingCount = pending.length;
data.meta.pendingTickers = pending.map((entry) => String(entry?.ticker || "").toUpperCase()).sort();
data.meta.rolloutProgressPct = Number(((verified.length / EXPECTED) * 100).toFixed(1));
data.meta.complete = verified.length === EXPECTED && pending.length === 0;
data.meta.verification = data.meta.complete
  ? "CIVS 1.0 COMPLETE: 125/125 visuals validated from first-party official pages/CDNs, Quality Gate >=8/10, normalized locally and SHA-256 audited."
  : `CIVS 1.0 RESUMABLE: ${verified.length}/125 visuals verified; ${pending.length} remain on safe report-cover fallback until first-party verification passes.`;

fs.writeFileSync(dataPath, `window.COMPANY_VISUALS = ${JSON.stringify(data, null, 2)};\n`);
console.log(JSON.stringify({ ok: true, total: entries.length, verified: verified.length, pending: pending.length }, null, 2));

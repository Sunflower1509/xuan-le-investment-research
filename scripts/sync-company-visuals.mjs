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

const readMeta = () => {
  try {
    const code = fs.readFileSync(dataPath, "utf8");
    const context = { window: {} };
    vm.runInNewContext(code, context, { filename: dataPath });
    return context.window.COMPANY_VISUALS?.meta || null;
  } catch { return null; }
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

#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const argValue = (name, fallback = null) => {
  const index = process.argv.indexOf(name);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
};
const siteUrl = argValue("--site-url");
const artifactRoot = path.resolve(argValue("--artifact-root", root));
const attempts = Number(argValue("--attempts", "12"));
const waitMs = Number(argValue("--wait-ms", "10000"));
if (!siteUrl) throw new Error("--site-url là bắt buộc.");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const digest = (buffer) => crypto.createHash("sha256").update(buffer).digest("hex");
const files = ["index.html", "assets/js/site.min.js", "assets/css/site.min.css"];

const local = new Map();
for (const relative of files) {
  const bytes = await fs.readFile(path.join(artifactRoot, relative));
  local.set(relative, { bytes, sha256: digest(bytes) });
}

const sectionOrder = (html) => [...html.matchAll(/<section\b[^>]*\bid=(['"])([^'"]+)\1[^>]*>/g)].map((match) => match[2]);
const expectedOrder = ["overview", "daily-market", "position-ledger", "action-radar", "research"];
const localIndex = local.get("index.html").bytes.toString("utf8");
if (sectionOrder(localIndex).join(",") !== expectedOrder.join(",")) throw new Error("Artifact local có thứ tự section không hợp lệ.");

let lastError;
for (let attempt = 1; attempt <= attempts; attempt += 1) {
  try {
    const remoteHashes = {};
    for (const relative of files) {
      const url = new URL(relative, siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);
      url.searchParams.set("verify", `${Date.now()}-${attempt}`);
      const response = await fetch(url, {
        cache: "no-store",
        headers: { "user-agent": "XuanLeTVS-PostDeploy-Verification/1.0" },
        signal: AbortSignal.timeout(15000)
      });
      if (!response.ok) throw new Error(`${relative}: HTTP ${response.status}`);
      const bytes = Buffer.from(await response.arrayBuffer());
      const sha256 = digest(bytes);
      remoteHashes[relative] = sha256;
      if (sha256 !== local.get(relative).sha256) {
        throw new Error(`${relative}: hash live ${sha256} != artifact ${local.get(relative).sha256}`);
      }
      if (relative === "index.html") {
        const html = bytes.toString("utf8");
        if (sectionOrder(html).join(",") !== expectedOrder.join(",")) throw new Error("Live index section order mismatch");
      }
    }
    console.log(JSON.stringify({ ok: true, siteUrl, attempt, hashes: remoteHashes }, null, 2));
    process.exit(0);
  } catch (error) {
    lastError = error;
    console.error(`Post-deploy verification ${attempt}/${attempts} failed: ${error.message}`);
    if (attempt < attempts) await sleep(waitMs);
  }
}

throw lastError || new Error("Không xác minh được live site.");

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

const reportImageDir = path.join(artifactRoot, "assets/images/reports");
const reportImageNames = (await fs.readdir(reportImageDir))
  .filter((name) => name.toLowerCase().endsWith(".webp"))
  .sort();
const reportImages = new Map();
for (const name of reportImageNames) {
  const relative = `assets/images/reports/${name}`;
  const bytes = await fs.readFile(path.join(artifactRoot, relative));
  reportImages.set(relative, { sha256: digest(bytes) });
}
if (!reportImageNames.length) throw new Error("Artifact không có ảnh đại diện báo cáo để xác minh live.");

const companyLogoDir = path.join(artifactRoot, "assets/images/logos");
const companyLogoNames = (await fs.readdir(companyLogoDir))
  .filter((name) => name.toLowerCase().endsWith(".svg"))
  .sort();
const companyLogos = new Map();
for (const name of companyLogoNames) {
  const relative = `assets/images/logos/${name}`;
  const bytes = await fs.readFile(path.join(artifactRoot, relative));
  companyLogos.set(relative, { sha256: digest(bytes) });
}
if (companyLogoNames.length !== 108) throw new Error(`Artifact phải có 108 logo doanh nghiệp, hiện có ${companyLogoNames.length}.`);

const sectionOrder = (html) => [...html.matchAll(/<section\b[^>]*\bid=(['"])([^'"]+)\1[^>]*>/g)].map((match) => match[2]);
const expectedOrder = ["overview", "daily-market", "position-ledger", "action-radar", "research"];
const localIndex = local.get("index.html").bytes.toString("utf8");
if (sectionOrder(localIndex).join(",") !== expectedOrder.join(",")) throw new Error("Artifact local có thứ tự section không hợp lệ.");

const fetchBytes = async (relative, attempt) => {
  const url = new URL(relative, siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);
  url.searchParams.set("verify", `${Date.now()}-${attempt}`);
  const response = await fetch(url, {
    cache: "no-store",
    headers: { "user-agent": "XuanLeTVS-PostDeploy-Verification/2.0" },
    signal: AbortSignal.timeout(15000)
  });
  if (!response.ok) throw new Error(`${relative}: HTTP ${response.status}`);
  return Buffer.from(await response.arrayBuffer());
};

const verifyReportImages = async (attempt) => {
  const relatives = [...reportImages.keys()];
  let cursor = 0;
  const worker = async () => {
    while (cursor < relatives.length) {
      const index = cursor;
      cursor += 1;
      const relative = relatives[index];
      const bytes = await fetchBytes(relative, attempt);
      if (bytes.length < 12 || bytes.subarray(0, 4).toString("ascii") !== "RIFF" || bytes.subarray(8, 12).toString("ascii") !== "WEBP") {
        throw new Error(`${relative}: live asset không có chữ ký WebP hợp lệ`);
      }
      const sha256 = digest(bytes);
      if (sha256 !== reportImages.get(relative).sha256) {
        throw new Error(`${relative}: hash live ${sha256} != artifact ${reportImages.get(relative).sha256}`);
      }
    }
  };
  const concurrency = Math.min(12, Math.max(1, relatives.length));
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return relatives.length;
};

const verifyCompanyLogos = async (attempt) => {
  const relatives = [...companyLogos.keys()];
  let cursor = 0;
  const worker = async () => {
    while (cursor < relatives.length) {
      const index = cursor;
      cursor += 1;
      const relative = relatives[index];
      const bytes = await fetchBytes(relative, attempt);
      const text = bytes.toString("utf8").trim();
      if (!/^(?:<!--[^]*?-->\s*)?<svg\b/i.test(text) || !/<\/svg>\s*$/i.test(text)) {
        throw new Error(`${relative}: live asset không phải SVG hoàn chỉnh`);
      }
      const sha256 = digest(bytes);
      if (sha256 !== companyLogos.get(relative).sha256) {
        throw new Error(`${relative}: hash live ${sha256} != artifact ${companyLogos.get(relative).sha256}`);
      }
    }
  };
  const concurrency = Math.min(12, Math.max(1, relatives.length));
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return relatives.length;
};

let lastError;
for (let attempt = 1; attempt <= attempts; attempt += 1) {
  try {
    const remoteHashes = {};
    for (const relative of files) {
      const bytes = await fetchBytes(relative, attempt);
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
    const reportImagesVerified = await verifyReportImages(attempt);
    const companyLogosVerified = await verifyCompanyLogos(attempt);
    console.log(JSON.stringify({ ok: true, siteUrl, attempt, hashes: remoteHashes, reportImagesVerified, companyLogosVerified }, null, 2));
    process.exit(0);
  } catch (error) {
    lastError = error;
    console.error(`Post-deploy verification ${attempt}/${attempts} failed: ${error.message}`);
    if (attempt < attempts) await sleep(waitMs);
  }
}

throw lastError || new Error("Không xác minh được live site.");

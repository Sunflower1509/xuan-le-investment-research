#!/usr/bin/env node

import fs from "node:fs";
import fsp from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "src/data/research-data.js");
const imageDir = path.join(root, "assets/images/reports");
const COVER_SCHEMA = "pdf-page-1-webp-v1";
const TARGET_WIDTH = 900;
const MIN_WIDTH = 700;
const MIN_HEIGHT = 900;
let rendererReady = false;

const localPath = (value) => String(value || "").split(/[?#]/, 1)[0];
const exists = (relativePath) => fs.existsSync(path.join(root, relativePath));
const commandExists = (name) => {
  try {
    execFileSync("bash", ["-lc", `command -v ${name}`], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
};
const ensureRenderer = () => {
  if (rendererReady) return;
  if (!commandExists("pdftoppm") || !commandExists("cwebp")) {
    console.log("PDF cover renderer missing; installing minimal poppler-utils + webp toolchain...");
    execFileSync("sudo", ["apt-get", "update", "-qq"], { stdio: "inherit" });
    execFileSync("sudo", ["apt-get", "install", "-y", "--no-install-recommends", "poppler-utils", "webp"], { stdio: "inherit" });
  }
  if (!commandExists("pdftoppm") || !commandExists("cwebp")) throw new Error("Không thể khởi tạo pdftoppm/cwebp để render cover.");
  rendererReady = true;
};
const gitTimestamp = (relativePath) => {
  try {
    const value = execFileSync("git", ["log", "-1", "--format=%ct", "--", relativePath], {
      cwd: root,
      encoding: "utf8"
    }).trim();
    return Number(value) || 0;
  } catch {
    return 0;
  }
};
const formatVnDate = (iso) => {
  const match = String(iso || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return match ? `${match[3]}/${match[2]}/${match[1]}` : String(iso || "");
};
const versionToken = (iso) => `${String(iso || "").replace(/-/g, "")}-cover1`;

const parseWebpDimensions = (relativePath) => {
  try {
    const data = fs.readFileSync(path.join(root, relativePath));
    if (data.length < 30 || data.subarray(0, 4).toString("ascii") !== "RIFF" || data.subarray(8, 12).toString("ascii") !== "WEBP") return null;
    let offset = 12;
    while (offset + 8 <= data.length) {
      const fourcc = data.subarray(offset, offset + 4).toString("ascii");
      const size = data.readUInt32LE(offset + 4);
      const start = offset + 8;
      if (start + size > data.length) break;
      if (fourcc === "VP8X" && size >= 10) {
        const width = 1 + data.readUIntLE(start + 4, 3);
        const height = 1 + data.readUIntLE(start + 7, 3);
        return { width, height };
      }
      if (fourcc === "VP8L" && size >= 5 && data[start] === 0x2f) {
        const b1 = data[start + 1];
        const b2 = data[start + 2];
        const b3 = data[start + 3];
        const b4 = data[start + 4];
        const width = 1 + (b1 | ((b2 & 0x3f) << 8));
        const height = 1 + ((b2 >> 6) | (b3 << 2) | ((b4 & 0x0f) << 10));
        return { width, height };
      }
      if (fourcc === "VP8 " && size >= 10) {
        const marker = data.indexOf(Buffer.from([0x9d, 0x01, 0x2a]), start);
        if (marker >= start && marker + 7 < start + size) {
          const width = data.readUInt16LE(marker + 3) & 0x3fff;
          const height = data.readUInt16LE(marker + 5) & 0x3fff;
          return { width, height };
        }
      }
      offset = start + size + (size % 2);
    }
  } catch {
    return null;
  }
  return null;
};

const loadResearch = () => {
  const code = fs.readFileSync(dataPath, "utf8");
  const context = { window: {} };
  vm.runInNewContext(code, context, { filename: dataPath });
  return context.window.RESEARCH_DATA;
};

const renderCover = async (pdfRelative, imageRelative) => {
  ensureRenderer();
  const pdf = path.join(root, pdfRelative);
  const image = path.join(root, imageRelative);
  const tmpDir = await fsp.mkdtemp(path.join(os.tmpdir(), "xuan-cover-"));
  const prefix = path.join(tmpDir, "page1");
  const png = `${prefix}.png`;
  try {
    execFileSync("pdftoppm", [
      "-f", "1",
      "-l", "1",
      "-singlefile",
      "-png",
      "-scale-to-x", String(TARGET_WIDTH),
      "-scale-to-y", "-1",
      pdf,
      prefix
    ], { cwd: root, stdio: "pipe" });
    if (!fs.existsSync(png) || fs.statSync(png).size === 0) throw new Error(`Không render được trang 1: ${pdfRelative}`);
    await fsp.mkdir(path.dirname(image), { recursive: true });
    execFileSync("cwebp", ["-quiet", "-q", "84", "-m", "6", "-metadata", "none", png, "-o", image], {
      cwd: root,
      stdio: "pipe"
    });
    const dimensions = parseWebpDimensions(imageRelative);
    if (!dimensions || dimensions.width < MIN_WIDTH || dimensions.height < MIN_HEIGHT) {
      throw new Error(`Ảnh bìa sau render không đạt chuẩn kích thước: ${imageRelative} (${dimensions?.width || 0}x${dimensions?.height || 0})`);
    }
  } finally {
    await fsp.rm(tmpDir, { recursive: true, force: true });
  }
};

const run = async () => {
  const research = loadResearch();
  if (!research || !Array.isArray(research.reports)) throw new Error("Không đọc được RESEARCH_DATA.reports");
  const reports = research.reports.filter((report) => report.reportType !== "trading");
  const forceRebuild = research.meta?.coverSchema !== COVER_SCHEMA;
  const seenTickers = new Set();
  const results = [];

  await fsp.mkdir(imageDir, { recursive: true });

  for (const report of reports) {
    const ticker = String(report.ticker || "").toUpperCase();
    if (!ticker) throw new Error(`Báo cáo ${report.id || "không rõ"} thiếu ticker`);
    if (seenTickers.has(ticker)) throw new Error(`Trùng ticker định giá khi đồng bộ cover: ${ticker}`);
    seenTickers.add(ticker);

    const pdfRelative = localPath(report.file);
    const expectedImage = `assets/images/reports/${ticker.toLowerCase()}.webp`;
    if (!pdfRelative || !exists(pdfRelative)) throw new Error(`${ticker}: thiếu PDF nguồn ${pdfRelative || "trống"}`);
    const signature = fs.readFileSync(path.join(root, pdfRelative)).subarray(0, 5).toString("ascii");
    if (signature !== "%PDF-") throw new Error(`${ticker}: PDF nguồn không hợp lệ ${pdfRelative}`);

    const dimensions = exists(expectedImage) ? parseWebpDimensions(expectedImage) : null;
    const pdfTime = gitTimestamp(pdfRelative);
    const imageTime = gitTimestamp(expectedImage);
    const staleByGit = Boolean(imageTime && pdfTime && pdfTime > imageTime);
    const lowResolution = !dimensions || dimensions.width < MIN_WIDTH || dimensions.height < MIN_HEIGHT;
    const needsRender = forceRebuild || !exists(expectedImage) || staleByGit || lowResolution;

    if (needsRender) await renderCover(pdfRelative, expectedImage);

    const newVisual = {
      src: `${expectedImage}?v=${versionToken(report.date)}`,
      alt: `Trang bìa báo cáo định giá ${ticker} ngày ${formatVnDate(report.date)}`,
      caption: `Bìa báo cáo định giá ${ticker}`,
      sourceLabel: "Xuân Lê TVS Equity Research",
      sourceUrl: report.file,
      kind: "report-cover"
    };
    const beforeVisual = JSON.stringify(report.visual || null);
    const afterVisual = JSON.stringify(newVisual);
    if (beforeVisual !== afterVisual) report.visual = newVisual;

    const finalDimensions = parseWebpDimensions(expectedImage);
    const hash = crypto.createHash("sha256").update(fs.readFileSync(path.join(root, expectedImage))).digest("hex");
    results.push({ ticker, image: expectedImage, rendered: needsRender, dimensions: finalDimensions, hash });
  }

  research.meta = research.meta || {};
  research.meta.coverSchema = COVER_SCHEMA;
  research.meta.coverWidth = TARGET_WIDTH;
  research.meta.coverSource = "First page of each referenced valuation PDF, rendered deterministically by pdftoppm + cwebp";

  fs.writeFileSync(dataPath, `window.RESEARCH_DATA = ${JSON.stringify(research, null, 2)};\n`);

  const rendered = results.filter((item) => item.rendered);
  const uniqueHashes = new Set(results.map((item) => item.hash));
  const widths = results.map((item) => item.dimensions?.width || 0);
  const heights = results.map((item) => item.dimensions?.height || 0);
  console.log(JSON.stringify({
    ok: true,
    schema: COVER_SCHEMA,
    reports: results.length,
    rebuilt: rendered.length,
    rebuiltTickers: rendered.map((item) => item.ticker),
    uniqueImageHashes: uniqueHashes.size,
    minWidth: Math.min(...widths),
    minHeight: Math.min(...heights),
    maxWidth: Math.max(...widths),
    maxHeight: Math.max(...heights)
  }, null, 2));
};

run().catch((error) => {
  console.error(error?.stack || String(error));
  process.exitCode = 1;
});

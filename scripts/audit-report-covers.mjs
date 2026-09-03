#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_PATH = path.join(root, "src/data/research-data.js");
const COVER_SCHEMA = "pdf-page-1-webp-v1";
const MIN_WIDTH = 700;
const MIN_HEIGHT = 900;
const errors = [];

const fail = (ticker, message) => errors.push(`${ticker}: ${message}`);
const localPath = (value) => String(value || "").split(/[?#]/, 1)[0];
const formatVnDate = (iso) => {
  const match = String(iso || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return match ? `${match[3]}/${match[2]}/${match[1]}` : String(iso || "");
};
const parseWebpDimensions = (absolutePath) => {
  try {
    const data = fs.readFileSync(absolutePath);
    if (data.length < 30 || data.subarray(0, 4).toString("ascii") !== "RIFF" || data.subarray(8, 12).toString("ascii") !== "WEBP") return null;
    let offset = 12;
    while (offset + 8 <= data.length) {
      const fourcc = data.subarray(offset, offset + 4).toString("ascii");
      const size = data.readUInt32LE(offset + 4);
      const start = offset + 8;
      if (start + size > data.length) break;
      if (fourcc === "VP8X" && size >= 10) {
        return { width: 1 + data.readUIntLE(start + 4, 3), height: 1 + data.readUIntLE(start + 7, 3) };
      }
      if (fourcc === "VP8L" && size >= 5 && data[start] === 0x2f) {
        const b1 = data[start + 1];
        const b2 = data[start + 2];
        const b3 = data[start + 3];
        const b4 = data[start + 4];
        return {
          width: 1 + (b1 | ((b2 & 0x3f) << 8)),
          height: 1 + ((b2 >> 6) | (b3 << 2) | ((b4 & 0x0f) << 10))
        };
      }
      if (fourcc === "VP8 " && size >= 10) {
        const marker = data.indexOf(Buffer.from([0x9d, 0x01, 0x2a]), start);
        if (marker >= start && marker + 7 < start + size) {
          return { width: data.readUInt16LE(marker + 3) & 0x3fff, height: data.readUInt16LE(marker + 5) & 0x3fff };
        }
      }
      offset = start + size + (size % 2);
    }
  } catch {
    return null;
  }
  return null;
};

const code = fs.readFileSync(DATA_PATH, "utf8");
const context = { window: {} };
vm.runInNewContext(code, context, { filename: DATA_PATH });
const research = context.window.RESEARCH_DATA;
if (!research || !Array.isArray(research.reports)) throw new Error("Không đọc được RESEARCH_DATA.reports");

if (research.meta?.coverSchema !== COVER_SCHEMA) {
  errors.push(`Meta: coverSchema phải là ${COVER_SCHEMA}, hiện là ${research.meta?.coverSchema || "trống"}`);
}

const reports = research.reports.filter((report) => report.reportType !== "trading");
const seenImages = new Map();
const seenHashes = new Map();
const dimensions = [];

for (const report of reports) {
  const ticker = String(report.ticker || "").toUpperCase() || report.id || "UNKNOWN";
  const expectedImage = `assets/images/reports/${ticker.toLowerCase()}.webp`;
  const actualImage = localPath(report.visual?.src);
  const pdf = localPath(report.file);

  if (actualImage !== expectedImage) fail(ticker, `visual.src phải là ${expectedImage}, hiện là ${actualImage || "trống"}`);
  if (localPath(report.visual?.sourceUrl) !== pdf) fail(ticker, `visual.sourceUrl phải trỏ đúng PDF ${pdf || "trống"}`);
  if (report.visual?.kind !== "report-cover") fail(ticker, `visual.kind phải là report-cover`);
  if (!String(report.visual?.alt || "").includes(ticker)) fail(ticker, `alt text chưa chứa ticker ${ticker}`);
  if (!String(report.visual?.alt || "").includes(formatVnDate(report.date))) fail(ticker, `alt text chưa khóa đúng ngày báo cáo ${formatVnDate(report.date)}`);
  if (!String(report.visual?.caption || "").includes(ticker)) fail(ticker, `caption chưa chứa ticker ${ticker}`);

  const absoluteImage = path.join(root, expectedImage);
  if (!fs.existsSync(absoluteImage)) {
    fail(ticker, `thiếu ảnh đại diện ${expectedImage}`);
    continue;
  }
  const imageData = fs.readFileSync(absoluteImage);
  if (imageData.length < 12 || imageData.subarray(0, 4).toString("ascii") !== "RIFF" || imageData.subarray(8, 12).toString("ascii") !== "WEBP") {
    fail(ticker, `ảnh không có chữ ký WebP hợp lệ`);
    continue;
  }
  const size = parseWebpDimensions(absoluteImage);
  if (!size) {
    fail(ticker, `không đọc được kích thước WebP`);
  } else {
    dimensions.push({ ticker, ...size });
    if (size.width < MIN_WIDTH || size.height < MIN_HEIGHT) {
      fail(ticker, `độ phân giải ${size.width}x${size.height} thấp hơn chuẩn ${MIN_WIDTH}x${MIN_HEIGHT}`);
    }
  }

  if (seenImages.has(expectedImage)) fail(ticker, `dùng trùng visual.src với ${seenImages.get(expectedImage)}`);
  else seenImages.set(expectedImage, ticker);

  const hash = crypto.createHash("sha256").update(imageData).digest("hex");
  if (seenHashes.has(hash)) fail(ticker, `nội dung ảnh trùng byte với ${seenHashes.get(hash)}; nghi ngờ dùng nhầm cover`);
  else seenHashes.set(hash, ticker);
}

const onDisk = fs.readdirSync(path.join(root, "assets/images/reports"), { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".webp"))
  .map((entry) => `assets/images/reports/${entry.name}`);
const expected = new Set(reports.map((report) => `assets/images/reports/${String(report.ticker).toLowerCase()}.webp`));
for (const file of onDisk) {
  if (!expected.has(file)) errors.push(`Artifact: ảnh không thuộc ticker định giá hiện hành: ${file}`);
}

if (errors.length) {
  console.error(`Report cover audit failed (${errors.length} lỗi):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  const widths = dimensions.map((item) => item.width);
  const heights = dimensions.map((item) => item.height);
  console.log(JSON.stringify({
    ok: true,
    reports: reports.length,
    imagesOnDisk: onDisk.length,
    uniqueImages: seenImages.size,
    uniqueHashes: seenHashes.size,
    minWidth: Math.min(...widths),
    minHeight: Math.min(...heights),
    maxWidth: Math.max(...widths),
    maxHeight: Math.max(...heights),
    schema: research.meta.coverSchema
  }, null, 2));
}

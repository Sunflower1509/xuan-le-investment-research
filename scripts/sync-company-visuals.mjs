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
const dataPath = path.join(root, "src/data/company-visuals.js");
const outputDir = path.join(root, "assets/images/company-visuals");
const TARGET_WIDTH = 960;
const TARGET_HEIGHT = 540;
const MIN_SOURCE_WIDTH = 640;
const MIN_SOURCE_HEIGHT = 360;
const MAX_DOWNLOAD_BYTES = 20 * 1024 * 1024;
const DOWNLOAD_TIMEOUT_MS = 25_000;
const CURL_TIMEOUT_SECONDS = 60;
const SCHEMA = "verified-core-asset-webp-v1";
const USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/132 Safari/537.36 Xuân-Lê-TVS-Research-Asset-Verifier/1.1";
const ACCEPT_IMAGES = "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8";
let rendererReady = false;

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
  if (!commandExists("convert") || !commandExists("identify") || !commandExists("cwebp")) {
    console.log("Company-visual renderer missing; installing ImageMagick + WebP tools...");
    execFileSync("sudo", ["apt-get", "update", "-qq"], { stdio: "inherit" });
    execFileSync("sudo", ["apt-get", "install", "-y", "--no-install-recommends", "imagemagick", "webp", "curl"], { stdio: "inherit" });
  }
  if (!commandExists("convert") || !commandExists("identify") || !commandExists("cwebp") || !commandExists("curl")) {
    throw new Error("Không thể khởi tạo ImageMagick/cwebp/curl cho ảnh nhận diện doanh nghiệp.");
  }
  rendererReady = true;
};

const loadVisualData = () => {
  const code = fs.readFileSync(dataPath, "utf8");
  const context = { window: {} };
  vm.runInNewContext(code, context, { filename: dataPath });
  return context.window.COMPANY_VISUALS;
};

const sha256 = (buffer) => crypto.createHash("sha256").update(buffer).digest("hex");
const isHttps = (value) => {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
};
const hostMatchesDomain = (host, domain) => host === domain || host.endsWith(`.${domain}`);

const validateSourcePolicy = (entry) => {
  if (!entry?.verified || entry.kind !== "company-asset") throw new Error(`${entry?.ticker || "?"}: visual chưa được đánh dấu verified company-asset.`);
  if (!isHttps(entry.sourceUrl) || !isHttps(entry.sourceImageUrl)) throw new Error(`${entry.ticker}: nguồn ảnh phải dùng HTTPS.`);
  const sourceHost = new URL(entry.sourceUrl).hostname.toLowerCase();
  const imageHost = new URL(entry.sourceImageUrl).hostname.toLowerCase();
  const officialDomain = String(entry.officialDomain || "").toLowerCase();
  if (!officialDomain || !hostMatchesDomain(sourceHost, officialDomain)) throw new Error(`${entry.ticker}: sourceUrl không thuộc officialDomain ${officialDomain || "trống"}.`);
  const allowedHosts = new Set((entry.allowedImageHosts || []).map((host) => String(host).toLowerCase()));
  if (!hostMatchesDomain(imageHost, officialDomain) && !allowedHosts.has(imageHost)) throw new Error(`${entry.ticker}: image host ${imageHost} chưa được whitelist từ nguồn chính thức.`);
};

const extensionFromContentType = (contentType, url) => {
  const value = String(contentType || "").toLowerCase();
  if (value.includes("image/jpeg")) return ".jpg";
  if (value.includes("image/png")) return ".png";
  if (value.includes("image/webp")) return ".webp";
  if (value.includes("image/gif")) return ".gif";
  const pathname = new URL(url).pathname.toLowerCase();
  for (const ext of [".jpg", ".jpeg", ".png", ".webp", ".gif"]) {
    if (pathname.endsWith(ext)) return ext === ".jpeg" ? ".jpg" : ext;
  }
  return ".img";
};

const validateDownloadedBuffer = (entry, buffer) => {
  if (!Buffer.isBuffer(buffer) || !buffer.length) throw new Error(`${entry.ticker}: ảnh nguồn rỗng.`);
  if (buffer.length > MAX_DOWNLOAD_BYTES) throw new Error(`${entry.ticker}: ảnh nguồn vượt giới hạn ${MAX_DOWNLOAD_BYTES} bytes.`);
  return buffer;
};

const fetchWithCurl = (entry, nodeError) => {
  if (!commandExists("curl")) throw nodeError;
  console.warn(`[company-visual] ${entry.ticker}: Node fetch lỗi (${nodeError?.cause?.code || nodeError?.name || "unknown"}); chuyển sang curl có retry.`);
  try {
    const buffer = execFileSync("curl", [
      "--fail",
      "--location",
      "--silent",
      "--show-error",
      "--retry", "3",
      "--retry-all-errors",
      "--retry-delay", "2",
      "--connect-timeout", "10",
      "--max-time", String(CURL_TIMEOUT_SECONDS),
      "--user-agent", USER_AGENT,
      "--referer", entry.sourceUrl,
      "--header", `Accept: ${ACCEPT_IMAGES}`,
      "--header", "Cache-Control: no-cache",
      entry.sourceImageUrl
    ], {
      encoding: null,
      maxBuffer: MAX_DOWNLOAD_BYTES + (1024 * 1024),
      stdio: ["ignore", "pipe", "pipe"]
    });
    return { buffer: validateDownloadedBuffer(entry, buffer), contentType: "", finalUrl: entry.sourceImageUrl, transport: "curl" };
  } catch (curlError) {
    const nodeReason = nodeError?.cause?.code || nodeError?.message || String(nodeError);
    const curlReason = curlError?.stderr?.toString("utf8").trim() || curlError?.message || String(curlError);
    throw new Error(`${entry.ticker}: không tải được ảnh đã xác minh. fetch=${nodeReason}; curl=${curlReason}; url=${entry.sourceImageUrl}`);
  }
};

const fetchImage = async (entry) => {
  console.log(`[company-visual] ${entry.ticker}: kiểm tra ${entry.sourceImageUrl}`);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), DOWNLOAD_TIMEOUT_MS);
  let nodeError = null;
  try {
    const response = await fetch(entry.sourceImageUrl, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": USER_AGENT,
        "accept": ACCEPT_IMAGES,
        "referer": entry.sourceUrl,
        "cache-control": "no-cache"
      }
    });
    if (!response.ok) throw new Error(`${entry.ticker}: tải ảnh nguồn thất bại HTTP ${response.status}.`);
    const contentType = response.headers.get("content-type") || "";
    if (contentType && !contentType.toLowerCase().startsWith("image/")) throw new Error(`${entry.ticker}: nguồn trả về content-type không phải ảnh (${contentType}).`);
    const contentLength = Number(response.headers.get("content-length") || 0);
    if (contentLength > MAX_DOWNLOAD_BYTES) throw new Error(`${entry.ticker}: ảnh nguồn vượt ${MAX_DOWNLOAD_BYTES} bytes.`);
    const buffer = validateDownloadedBuffer(entry, Buffer.from(await response.arrayBuffer()));
    return { buffer, contentType, finalUrl: response.url || entry.sourceImageUrl, transport: "fetch" };
  } catch (error) {
    nodeError = error;
  } finally {
    clearTimeout(timer);
  }
  return fetchWithCurl(entry, nodeError);
};

const identifyDimensions = (filePath) => {
  const output = execFileSync("identify", ["-format", "%w %h", filePath], { encoding: "utf8" }).trim();
  const [width, height] = output.split(/\s+/).map(Number);
  if (!(width > 0 && height > 0)) throw new Error(`Không đọc được kích thước ảnh ${filePath}`);
  return { width, height };
};

const renderVisual = async (entry, downloaded) => {
  ensureRenderer();
  const outputRelative = `assets/images/company-visuals/${entry.ticker.toLowerCase()}.webp`;
  const outputPath = path.join(root, outputRelative);
  const tmpDir = await fsp.mkdtemp(path.join(os.tmpdir(), `xltvs-company-${entry.ticker.toLowerCase()}-`));
  const extension = extensionFromContentType(downloaded.contentType, downloaded.finalUrl);
  const sourcePath = path.join(tmpDir, `source${extension}`);
  const normalizedPng = path.join(tmpDir, "normalized.png");

  try {
    await fsp.writeFile(sourcePath, downloaded.buffer);
    const sourceDimensions = identifyDimensions(sourcePath);
    if (sourceDimensions.width < MIN_SOURCE_WIDTH || sourceDimensions.height < MIN_SOURCE_HEIGHT) throw new Error(`${entry.ticker}: ảnh nguồn ${sourceDimensions.width}x${sourceDimensions.height} thấp hơn chuẩn tối thiểu ${MIN_SOURCE_WIDTH}x${MIN_SOURCE_HEIGHT}.`);

    execFileSync("convert", [sourcePath, "-auto-orient", "-resize", `${TARGET_WIDTH}x${TARGET_HEIGHT}^`, "-gravity", String(entry.cropGravity || "center"), "-extent", `${TARGET_WIDTH}x${TARGET_HEIGHT}`, "-strip", normalizedPng], { stdio: "pipe" });
    await fsp.mkdir(path.dirname(outputPath), { recursive: true });
    execFileSync("cwebp", ["-quiet", "-q", "84", "-m", "6", "-metadata", "none", normalizedPng, "-o", outputPath], { stdio: "pipe" });

    const finalDimensions = identifyDimensions(outputPath);
    if (finalDimensions.width !== TARGET_WIDTH || finalDimensions.height !== TARGET_HEIGHT) throw new Error(`${entry.ticker}: ảnh WebP đầu ra sai kích thước ${finalDimensions.width}x${finalDimensions.height}.`);
    const outputBuffer = await fsp.readFile(outputPath);
    return { outputRelative, sourceDimensions, finalDimensions, hash: sha256(outputBuffer), bytes: outputBuffer.length, sourceBytes: downloaded.buffer.length, transport: downloaded.transport };
  } finally {
    await fsp.rm(tmpDir, { recursive: true, force: true });
  }
};

const run = async () => {
  const data = loadVisualData();
  if (!data || data.meta?.schema !== SCHEMA || !data.visuals || typeof data.visuals !== "object") throw new Error(`COMPANY_VISUALS không đúng schema ${SCHEMA}.`);
  const entries = Object.values(data.visuals);
  if (entries.length !== 9 || data.meta?.pilot !== true) throw new Error(`Pilot phải có đúng 9 visual, hiện có ${entries.length}.`);

  const tickers = new Set();
  const hashes = new Set();
  const results = [];
  await fsp.mkdir(outputDir, { recursive: true });

  for (const entry of entries) {
    entry.ticker = String(entry.ticker || "").toUpperCase();
    if (!entry.ticker || tickers.has(entry.ticker)) throw new Error(`Ticker visual trống hoặc trùng: ${entry.ticker || "?"}`);
    tickers.add(entry.ticker);
    validateSourcePolicy(entry);
    const downloaded = await fetchImage(entry);
    const rendered = await renderVisual(entry, downloaded);
    if (hashes.has(rendered.hash)) throw new Error(`${entry.ticker}: ảnh đầu ra trùng nội dung với một visual khác trong pilot.`);
    hashes.add(rendered.hash);

    entry.src = `${rendered.outputRelative}?v=${rendered.hash.slice(0, 12)}`;
    entry.width = rendered.finalDimensions.width;
    entry.height = rendered.finalDimensions.height;
    entry.sourceWidth = rendered.sourceDimensions.width;
    entry.sourceHeight = rendered.sourceDimensions.height;
    entry.sha256 = rendered.hash;
    entry.bytes = rendered.bytes;
    entry.sourceBytes = rendered.sourceBytes;
    entry.syncedOn = new Date().toISOString().slice(0, 10);

    results.push({ ticker: entry.ticker, source: entry.sourceImageUrl, sourceDimensions: rendered.sourceDimensions, output: rendered.outputRelative, outputBytes: rendered.bytes, sha256: rendered.hash, transport: rendered.transport });
  }

  data.meta.count = entries.length;
  data.meta.synced = new Date().toISOString().slice(0, 10);
  data.meta.target = `${TARGET_WIDTH}x${TARGET_HEIGHT}`;
  data.meta.quality = 84;
  data.meta.verification = "Every image is downloaded from an explicit URL embedded by an official company source page, normalized locally, hashed, and audited before deployment.";
  fs.writeFileSync(dataPath, `window.COMPANY_VISUALS = ${JSON.stringify(data, null, 2)};\n`);

  console.log(JSON.stringify({ ok: true, schema: SCHEMA, count: entries.length, results }, null, 2));
};

run().catch((error) => {
  console.error(error?.stack || String(error));
  process.exitCode = 1;
});

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
const PAGE_TIMEOUT_MS = 20_000;
const CURL_TIMEOUT_SECONDS = 60;
const SCHEMA = "verified-core-asset-webp-v1";
const USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/132 Safari/537.36 Xuan-Le-TVS-Research-Asset-Verifier/1.2";
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
  if (!commandExists("convert") || !commandExists("identify") || !commandExists("cwebp") || !commandExists("curl")) {
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
const decodeHtml = (value) => String(value || "")
  .replaceAll("&amp;", "&")
  .replaceAll("&quot;", '"')
  .replaceAll("&#39;", "'")
  .replaceAll("&#x27;", "'")
  .replaceAll("&lt;", "<")
  .replaceAll("&gt;", ">");
const normalizeText = (value) => decodeHtml(value)
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLocaleLowerCase("vi")
  .replace(/\s+/g, " ")
  .trim();

const parseAttributes = (tag) => {
  const attrs = {};
  const pattern = /([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
  for (const match of tag.matchAll(pattern)) {
    attrs[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? match[4] ?? "");
  }
  return attrs;
};

const imageCandidateFromAttrs = (attrs) => {
  for (const key of ["data-src", "data-lazy-src", "data-original", "src"]) {
    const value = String(attrs[key] || "").trim();
    if (value && !value.startsWith("data:")) return value;
  }
  const srcset = String(attrs["data-srcset"] || attrs.srcset || "").trim();
  if (srcset) {
    const candidates = srcset.split(",").map((part) => part.trim().split(/\s+/)[0]).filter(Boolean);
    if (candidates.length) return candidates.at(-1);
  }
  return "";
};

const fetchSourcePage = async (entry) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PAGE_TIMEOUT_MS);
  try {
    const response = await fetch(entry.sourceUrl, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": USER_AGENT,
        "accept": "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
        "cache-control": "no-cache"
      }
    });
    if (!response.ok) throw new Error(`${entry.ticker}: source page trả HTTP ${response.status}.`);
    const contentType = String(response.headers.get("content-type") || "").toLowerCase();
    if (contentType && !contentType.includes("text/html") && !contentType.includes("application/xhtml+xml")) {
      throw new Error(`${entry.ticker}: source page không phải HTML (${contentType}).`);
    }
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
};

const discoverSourceImage = async (entry) => {
  const discovery = entry.sourceDiscovery;
  if (!discovery) {
    if (!entry.sourceImageUrl) throw new Error(`${entry.ticker}: thiếu sourceImageUrl hoặc sourceDiscovery.`);
    return entry.sourceImageUrl;
  }
  if (!isHttps(entry.sourceUrl)) throw new Error(`${entry.ticker}: sourceDiscovery yêu cầu sourceUrl HTTPS hợp lệ.`);

  const html = await fetchSourcePage(entry);
  const type = String(discovery.type || "").toLowerCase();
  let candidate = "";
  let matchedLabel = "";

  if (type === "img-alt") {
    const target = normalizeText(discovery.value);
    if (!target) throw new Error(`${entry.ticker}: sourceDiscovery img-alt thiếu value.`);
    const tags = html.match(/<img\b[^>]*>/gi) || [];
    let fuzzy = null;
    for (const tag of tags) {
      const attrs = parseAttributes(tag);
      const label = attrs.alt || attrs.title || "";
      const normalizedLabel = normalizeText(label);
      const src = imageCandidateFromAttrs(attrs);
      if (!src || !normalizedLabel) continue;
      if (normalizedLabel === target) {
        candidate = src;
        matchedLabel = label;
        break;
      }
      if (!fuzzy && (normalizedLabel.includes(target) || target.includes(normalizedLabel))) fuzzy = { src, label };
    }
    if (!candidate && fuzzy) {
      candidate = fuzzy.src;
      matchedLabel = fuzzy.label;
    }
  } else if (type === "og:image") {
    const metaTags = html.match(/<meta\b[^>]*>/gi) || [];
    for (const tag of metaTags) {
      const attrs = parseAttributes(tag);
      const key = normalizeText(attrs.property || attrs.name);
      if (key !== "og:image") continue;
      candidate = attrs.content || "";
      matchedLabel = "og:image";
      if (candidate) break;
    }
  } else {
    throw new Error(`${entry.ticker}: sourceDiscovery.type không hỗ trợ: ${discovery.type || "trống"}.`);
  }

  if (!candidate) throw new Error(`${entry.ticker}: không resolve được ảnh từ sourceDiscovery ${type}.`);
  const resolved = new URL(candidate, entry.sourceUrl).href;
  entry.sourceDiscovery = {
    ...discovery,
    resolvedLabel: matchedLabel || discovery.value || type,
    resolvedOn: new Date().toISOString().slice(0, 10)
  };
  return resolved;
};

const validateSourcePolicy = (entry) => {
  if (!entry?.verified || entry.kind !== "company-asset") throw new Error(`${entry?.ticker || "?"}: visual chưa được đánh dấu verified company-asset.`);
  if (!isHttps(entry.sourceUrl) || !isHttps(entry.sourceImageUrl)) throw new Error(`${entry.ticker}: nguồn ảnh phải dùng HTTPS.`);
  if (!Number.isFinite(Number(entry.qualityScore)) || Number(entry.qualityScore) < 8 || Number(entry.qualityScore) > 10) throw new Error(`${entry.ticker}: qualityScore phải nằm trong 8–10.`);
  if (!/[ABC]/.test(String(entry.sourceTier || "")) || String(entry.sourceTier).length !== 1) throw new Error(`${entry.ticker}: sourceTier phải là A, B hoặc C.`);
  if (!String(entry.identityType || "").trim()) throw new Error(`${entry.ticker}: thiếu identityType.`);

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
  const coverageTarget = Number(data.meta?.coverageTarget || 0);
  if (data.meta?.rollout !== true) throw new Error("COMPANY_VISUALS phải ở trạng thái rollout=true.");
  if (!Number.isInteger(coverageTarget) || coverageTarget < 1) throw new Error("meta.coverageTarget không hợp lệ.");
  if (!entries.length || entries.length > coverageTarget) throw new Error(`Số visual ${entries.length} không hợp lệ với coverageTarget=${coverageTarget}.`);

  const tickers = new Set();
  const hashes = new Set();
  const results = [];
  await fsp.mkdir(outputDir, { recursive: true });

  for (const entry of entries) {
    entry.ticker = String(entry.ticker || "").toUpperCase();
    if (!entry.ticker || tickers.has(entry.ticker)) throw new Error(`Ticker visual trống hoặc trùng: ${entry.ticker || "?"}`);
    tickers.add(entry.ticker);

    entry.sourceImageUrl = await discoverSourceImage(entry);
    validateSourcePolicy(entry);
    const downloaded = await fetchImage(entry);
    const rendered = await renderVisual(entry, downloaded);
    if (hashes.has(rendered.hash)) throw new Error(`${entry.ticker}: ảnh đầu ra trùng nội dung với một visual khác.`);
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

    results.push({ ticker: entry.ticker, source: entry.sourceImageUrl, sourceDimensions: rendered.sourceDimensions, output: rendered.outputRelative, outputBytes: rendered.bytes, sha256: rendered.hash, transport: rendered.transport, qualityScore: Number(entry.qualityScore), sourceTier: entry.sourceTier });
  }

  data.meta.count = entries.length;
  data.meta.verifiedCount = entries.length;
  data.meta.pendingCount = coverageTarget - entries.length;
  data.meta.rolloutProgressPct = Number(((entries.length / coverageTarget) * 100).toFixed(1));
  data.meta.synced = new Date().toISOString().slice(0, 10);
  data.meta.target = `${TARGET_WIDTH}x${TARGET_HEIGHT}`;
  data.meta.quality = 84;
  data.meta.verification = "CIVS 1.0: every published visual must pass first-party source validation, >=8/10 quality gate, local normalization, SHA-256 audit and fail-closed deployment checks.";
  fs.writeFileSync(dataPath, `window.COMPANY_VISUALS = ${JSON.stringify(data, null, 2)};\n`);

  console.log(JSON.stringify({ ok: true, schema: SCHEMA, coverageTarget, verifiedCount: entries.length, pendingCount: coverageTarget - entries.length, results }, null, 2));
};

run().catch((error) => {
  console.error(error?.stack || String(error));
  process.exitCode = 1;
});

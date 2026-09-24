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
const registryPath = path.join(root, "src/data/company-visual-candidates.json");
const logoPath = path.join(root, "src/data/company-logos.js");
const researchPath = path.join(root, "src/data/research-data.js");
const outputDir = path.join(root, "assets/images/company-visuals");

const TARGET_WIDTH = 960;
const TARGET_HEIGHT = 540;
const MIN_SOURCE_WIDTH = 640;
const MIN_SOURCE_HEIGHT = 360;
const MAX_DOWNLOAD_BYTES = 22 * 1024 * 1024;
const PAGE_TIMEOUT_MS = 22_000;
const IMAGE_TIMEOUT_MS = 22_000;
const CURL_TIMEOUT_SECONDS = 55;
const CONCURRENCY = 6;
const SCHEMA = "verified-core-asset-webp-v1";
const CANDIDATE_SCHEMA = "civs-candidate-registry-v1";
const USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/132 Safari/537.36 Xuan-Le-TVS-CIVS-Verifier/3.0";
const ACCEPT_IMAGES = "image/avif,image/webp,image/apng,image/jpeg,image/png,image/*,*/*;q=0.8";
const NEGATIVE_IMAGE_RE = /(logo|favicon|icon|sprite|avatar|emoji|flag|captcha|qr[-_]?code|facebook|youtube|linkedin|zalo|tiktok|loader|loading|placeholder|payment|appstore|googleplay|rating|badge|award|certificate|seal|arrow|chevron|close|menu|search|phone|mail|location|partner|client)/i;
const GENERATIVE_STOCK_RE = /(unsplash|pexels|pixabay|shutterstock|alamy|istock|freepik|midjourney|openai)/i;
let rendererReady = false;

const loadWindowData = (filename, key) => {
  const code = fs.readFileSync(filename, "utf8");
  const context = { window: {} };
  vm.runInNewContext(code, context, { filename });
  return context.window[key];
};
const sha256 = (buffer) => crypto.createHash("sha256").update(buffer).digest("hex");
const localPath = (value) => String(value || "").split(/[?#]/, 1)[0];
const isHttps = (value) => { try { return new URL(value).protocol === "https:"; } catch { return false; } };
const hostMatchesDomain = (host, domain) => host === domain || host.endsWith(`.${domain}`);
const commandExists = (name) => {
  try { execFileSync("bash", ["-lc", `command -v ${name}`], { stdio: "ignore" }); return true; }
  catch { return false; }
};
const ensureRenderer = () => {
  if (rendererReady) return;
  if (!["convert", "identify", "cwebp", "curl"].every(commandExists)) {
    console.log("CIVS renderer missing; installing ImageMagick + WebP + curl...");
    execFileSync("sudo", ["apt-get", "update", "-qq"], { stdio: "inherit" });
    execFileSync("sudo", ["apt-get", "install", "-y", "--no-install-recommends", "imagemagick", "webp", "curl"], { stdio: "inherit" });
  }
  if (!["convert", "identify", "cwebp", "curl"].every(commandExists)) throw new Error("Không thể khởi tạo bộ xử lý ảnh CIVS.");
  rendererReady = true;
};

const decodeHtml = (value) => String(value || "")
  .replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#39;", "'")
  .replaceAll("&#x27;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
const normalizeText = (value) => decodeHtml(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
const parseAttributes = (tag) => {
  const attrs = {};
  const pattern = /([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
  for (const match of tag.matchAll(pattern)) attrs[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? match[4] ?? "");
  return attrs;
};
const srcsetCandidates = (value) => String(value || "").split(",").map((part) => part.trim().split(/\s+/)[0]).filter(Boolean);
const imageCandidateFromAttrs = (attrs) => {
  for (const key of ["data-src", "data-lazy-src", "data-original", "data-image", "src"]) {
    const value = String(attrs[key] || "").trim();
    if (value && !value.startsWith("data:") && !value.startsWith("blob:")) return value;
  }
  return srcsetCandidates(attrs["data-srcset"] || attrs.srcset).at(-1) || "";
};
const resolveUrl = (value, base) => {
  try {
    const url = new URL(decodeHtml(value), base);
    if (!["https:", "http:"].includes(url.protocol)) return "";
    url.hash = "";
    return url.href;
  } catch { return ""; }
};

const curlText = (url) => execFileSync("curl", [
  "--fail", "--location", "--silent", "--show-error", "--compressed",
  "--retry", "1", "--retry-all-errors", "--retry-delay", "1",
  "--connect-timeout", "8", "--max-time", String(CURL_TIMEOUT_SECONDS),
  "--user-agent", USER_AGENT,
  "--header", "Accept: text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
  url
], { encoding: "utf8", maxBuffer: 16 * 1024 * 1024, stdio: ["ignore", "pipe", "pipe"] });

const fetchSourcePage = async (entry) => {
  const urls = [entry.sourceUrl, ...(entry.fallbackSourceUrls || [])].filter(Boolean);
  const errors = [];
  for (const url of urls) {
    if (!isHttps(url)) { errors.push(`${url}: không HTTPS`); continue; }
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), PAGE_TIMEOUT_MS);
    try {
      const response = await fetch(url, {
        redirect: "follow",
        signal: controller.signal,
        headers: { "user-agent": USER_AGENT, accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8", "cache-control": "no-cache" }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const html = await response.text();
      if (html.length < 500) throw new Error(`HTML quá ngắn (${html.length})`);
      return { html, pageUrl: response.url || url, transport: "fetch" };
    } catch (error) {
      try {
        const html = curlText(url);
        if (html.length < 500) throw new Error(`HTML quá ngắn (${html.length})`);
        return { html, pageUrl: url, transport: "curl" };
      } catch (curlError) {
        errors.push(`${url}: ${error?.message || error}; curl=${curlError?.stderr?.toString("utf8").trim() || curlError?.message || curlError}`);
      }
    } finally { clearTimeout(timer); }
  }
  throw new Error(`${entry.ticker}: không tải được source page chính thức. ${errors.join(" | ")}`);
};

const fetchImage = async (entry, imageUrl) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), IMAGE_TIMEOUT_MS);
  let fetchError = null;
  try {
    const response = await fetch(imageUrl, {
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": USER_AGENT, accept: ACCEPT_IMAGES, referer: entry.sourceUrl, "cache-control": "no-cache" }
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const len = Number(response.headers.get("content-length") || 0);
    if (len > MAX_DOWNLOAD_BYTES) throw new Error(`quá ${MAX_DOWNLOAD_BYTES} bytes`);
    const buffer = Buffer.from(await response.arrayBuffer());
    if (!buffer.length || buffer.length > MAX_DOWNLOAD_BYTES) throw new Error(`buffer ảnh bất thường ${buffer.length}`);
    return { buffer, contentType: response.headers.get("content-type") || "", finalUrl: response.url || imageUrl, transport: "fetch" };
  } catch (error) { fetchError = error; }
  finally { clearTimeout(timer); }

  try {
    const buffer = execFileSync("curl", [
      "--fail", "--location", "--silent", "--show-error", "--compressed",
      "--retry", "1", "--retry-all-errors", "--retry-delay", "1",
      "--connect-timeout", "8", "--max-time", String(CURL_TIMEOUT_SECONDS),
      "--user-agent", USER_AGENT, "--referer", entry.sourceUrl,
      "--header", `Accept: ${ACCEPT_IMAGES}`, imageUrl
    ], { encoding: null, maxBuffer: MAX_DOWNLOAD_BYTES + 1024 * 1024, stdio: ["ignore", "pipe", "pipe"] });
    if (!buffer?.length || buffer.length > MAX_DOWNLOAD_BYTES) throw new Error(`buffer curl bất thường ${buffer?.length || 0}`);
    return { buffer, contentType: "", finalUrl: imageUrl, transport: "curl" };
  } catch (curlError) {
    throw new Error(`${entry.ticker}: ảnh ${imageUrl} không tải được; fetch=${fetchError?.message || fetchError}; curl=${curlError?.stderr?.toString("utf8").trim() || curlError?.message || curlError}`);
  }
};

const extensionFrom = (contentType, url) => {
  const type = String(contentType || "").toLowerCase();
  if (type.includes("jpeg")) return ".jpg";
  if (type.includes("png")) return ".png";
  if (type.includes("webp")) return ".webp";
  if (type.includes("gif")) return ".gif";
  if (type.includes("avif")) return ".avif";
  const pathname = (() => { try { return new URL(url).pathname.toLowerCase(); } catch { return ""; } })();
  for (const ext of [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]) if (pathname.endsWith(ext)) return ext === ".jpeg" ? ".jpg" : ext;
  return ".img";
};
const identifyDimensions = (filename) => {
  const output = execFileSync("identify", ["-format", "%w %h", filename], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  const [width, height] = output.split(/\s+/).map(Number);
  if (!(width > 0 && height > 0)) throw new Error(`Không đọc được kích thước ${filename}`);
  return { width, height };
};
const identifyEntropy = (filename) => {
  try {
    const value = Number(execFileSync("convert", [filename, "-colorspace", "Gray", "-format", "%[entropy]", "info:"], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim());
    return Number.isFinite(value) ? value : 0.5;
  } catch { return 0.5; }
};

const candidateScore = (candidate, keywords) => {
  const hay = normalizeText(`${candidate.label || ""} ${candidate.url || ""} ${candidate.context || ""}`);
  let score = candidate.baseScore || 0;
  for (const keyword of keywords || []) {
    const key = normalizeText(keyword);
    if (key && hay.includes(key)) score += key.length >= 7 ? 5 : 3;
  }
  if (/hero|slider|slide|banner|cover|project|factory|plant|store|branch|tower|port|vessel|ship|farm|industrial|warehouse|production|terminal|rig|mall|office|headquarter/i.test(hay)) score += 3;
  if (NEGATIVE_IMAGE_RE.test(hay)) score -= 12;
  if (GENERATIVE_STOCK_RE.test(candidate.url || "")) score -= 100;
  if (/\.svg(?:$|\?)/i.test(candidate.url || "")) score -= 12;
  return score;
};

const collectImageCandidates = (html, pageUrl, entry) => {
  const list = [];
  const add = (rawUrl, label, baseScore = 0, context = "") => {
    const url = resolveUrl(rawUrl, pageUrl);
    if (!url || GENERATIVE_STOCK_RE.test(url)) return;
    list.push({ url, label: decodeHtml(label || ""), baseScore, context });
  };
  for (const tag of html.match(/<img\b[^>]*>/gi) || []) {
    const a = parseAttributes(tag);
    const src = imageCandidateFromAttrs(a);
    if (src) add(src, a.alt || a.title || "", 2, `${a.class || ""} ${a.id || ""}`);
    for (const srcset of srcsetCandidates(a.srcset || a["data-srcset"])) add(srcset, a.alt || a.title || "", 1, `${a.class || ""} ${a.id || ""}`);
  }
  for (const tag of html.match(/<source\b[^>]*>/gi) || []) {
    const a = parseAttributes(tag);
    for (const src of srcsetCandidates(a.srcset || a["data-srcset"])) add(src, a.title || "", 1, `${a.class || ""} ${a.media || ""}`);
  }
  for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
    const a = parseAttributes(tag);
    const key = String(a.property || a.name || "").toLowerCase();
    if (["og:image", "og:image:url", "twitter:image", "twitter:image:src"].includes(key) && a.content) add(a.content, key, 3, "social-meta");
  }
  for (const match of html.matchAll(/(?:background(?:-image)?\s*:\s*)?url\((['"]?)([^)'"\s]+)\1\)/gi)) add(match[2], "background image", 1, "css-background");

  const seen = new Map();
  for (const item of list) {
    const key = item.url.replace(/([?&])(?:width|height|w|h|quality|q)=\d+/gi, "$1");
    const score = candidateScore(item, entry.keywords || []);
    const current = seen.get(key);
    if (!current || score > current.score) seen.set(key, { ...item, score });
  }
  return [...seen.values()].sort((a, b) => b.score - a.score).slice(0, 30);
};

const pageKeywordHits = (html, keywords) => {
  const text = normalizeText(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " "));
  let hits = 0;
  for (const keyword of keywords || []) if (text.includes(normalizeText(keyword))) hits += 1;
  return hits;
};

const inspectDownloaded = async (entry, downloaded, candidate, tmpDir, pageHits, html) => {
  const ext = extensionFrom(downloaded.contentType, downloaded.finalUrl || candidate.url);
  const filename = path.join(tmpDir, `inspect-${crypto.randomUUID()}${ext}`);
  await fsp.writeFile(filename, downloaded.buffer);
  let dimensions;
  try { dimensions = identifyDimensions(filename); } catch { await fsp.rm(filename, { force: true }); return null; }
  const ratio = dimensions.width / dimensions.height;
  if (dimensions.width < MIN_SOURCE_WIDTH || dimensions.height < MIN_SOURCE_HEIGHT || ratio < 0.72 || ratio > 3.4) {
    await fsp.rm(filename, { force: true });
    return null;
  }
  const entropy = identifyEntropy(filename);
  if (entropy < 0.18) { await fsp.rm(filename, { force: true }); return null; }

  const relevance = candidate.score >= 6 || pageHits >= (entry.sourceTier === "A" ? 2 : 1) ? 2 : 1;
  const visual = dimensions.width >= 1200 && dimensions.height >= 675 && entropy >= 0.34 ? 2 : 1;
  const recency = /\b202[56]\b/.test(html) ? 2 : 1;
  const breakdown = { identityAccuracy: 2, economicRelevance: relevance, sourceAuthority: 2, visualQuality: visual, recencyNonMisleading: recency };
  const qualityScore = Object.values(breakdown).reduce((sum, value) => sum + value, 0);
  if (qualityScore < 8) { await fsp.rm(filename, { force: true }); return null; }
  return { filename, dimensions, entropy, qualityScore, breakdown, candidate, downloaded };
};

const discoverHeroAuto = async (entry) => {
  const page = await fetchSourcePage(entry);
  const sourceHost = new URL(entry.sourceUrl).hostname.toLowerCase();
  if (!hostMatchesDomain(sourceHost, entry.officialDomain)) throw new Error(`${entry.ticker}: sourceUrl không thuộc officialDomain ${entry.officialDomain}.`);
  const candidates = collectImageCandidates(page.html, page.pageUrl, entry);
  if (!candidates.length) throw new Error(`${entry.ticker}: source page không có image candidate.`);
  const hits = pageKeywordHits(page.html, entry.keywords || []);
  const tmpDir = await fsp.mkdtemp(path.join(os.tmpdir(), `civs-discovery-${entry.ticker.toLowerCase()}-`));
  const inspected = [];
  const errors = [];
  try {
    for (const candidate of candidates.slice(0, 14)) {
      try {
        const downloaded = await fetchImage(entry, candidate.url);
        const info = await inspectDownloaded(entry, downloaded, candidate, tmpDir, hits, page.html);
        if (info) inspected.push(info);
        if (inspected.length >= 4 && inspected.some((x) => x.qualityScore >= 9 && x.candidate.score >= 5)) break;
      } catch (error) { errors.push(`${candidate.url}: ${error?.message || error}`); }
    }
    if (!inspected.length) throw new Error(`${entry.ticker}: không có ảnh >=${MIN_SOURCE_WIDTH}x${MIN_SOURCE_HEIGHT} đạt Quality Gate. ${errors.slice(0, 3).join(" | ")}`);
    inspected.sort((a, b) => (b.qualityScore - a.qualityScore) || (b.candidate.score - a.candidate.score) || ((b.dimensions.width * b.dimensions.height) - (a.dimensions.width * a.dimensions.height)));
    const best = inspected[0];
    const selectedBuffer = await fsp.readFile(best.filename);
    const imageHost = new URL(best.downloaded.finalUrl || best.candidate.url).hostname.toLowerCase();
    const sameDomain = hostMatchesDomain(imageHost, entry.officialDomain);
    if (!sameDomain) {
      entry.allowedImageHosts = [...new Set([...(entry.allowedImageHosts || []), imageHost])];
      entry.embeddedImageHostVerified = true;
    }
    entry.sourceImageUrl = best.downloaded.finalUrl || best.candidate.url;
    entry.sourceDiscovery = {
      type: "hero-auto",
      keywords: entry.keywords || [],
      strategy: "official-page-embedded-image-v3",
      resolvedLabel: best.candidate.label || best.candidate.context || "official-page image",
      resolvedHost: imageHost,
      resolvedFromOfficialPage: true,
      resolvedOn: new Date().toISOString().slice(0, 10),
      candidateScore: best.candidate.score,
      sourcePageKeywordHits: hits,
      entropy: Number(best.entropy.toFixed(4)),
      qualityBreakdown: best.breakdown
    };
    entry.qualityScore = best.qualityScore;
    return { buffer: selectedBuffer, contentType: best.downloaded.contentType, finalUrl: entry.sourceImageUrl, transport: best.downloaded.transport, sourceDimensions: best.dimensions };
  } finally { await fsp.rm(tmpDir, { recursive: true, force: true }); }
};

const inspectManualSource = async (entry, downloaded) => {
  ensureRenderer();
  const tmpDir = await fsp.mkdtemp(path.join(os.tmpdir(), `civs-manual-${entry.ticker.toLowerCase()}-`));
  const filename = path.join(tmpDir, `source${extensionFrom(downloaded.contentType, downloaded.finalUrl)}`);
  try {
    await fsp.writeFile(filename, downloaded.buffer);
    const dimensions = identifyDimensions(filename);
    if (dimensions.width < MIN_SOURCE_WIDTH || dimensions.height < MIN_SOURCE_HEIGHT) throw new Error(`${entry.ticker}: nguồn ${dimensions.width}x${dimensions.height} dưới chuẩn.`);
    const entropy = identifyEntropy(filename);
    if (entropy < 0.18) throw new Error(`${entry.ticker}: ảnh manual có entropy quá thấp.`);
    const qualityScore = Number(entry.qualityScore || 9);
    if (qualityScore < 8 || qualityScore > 10) throw new Error(`${entry.ticker}: qualityScore manual phải 8–10.`);
    entry.qualityScore = qualityScore;
    entry.sourceDiscovery = {
      ...(entry.sourceDiscovery || {}),
      type: entry.sourceDiscovery?.type || "manual-official",
      strategy: entry.sourceDiscovery?.strategy || "exact-first-party-asset-v1",
      resolvedFromOfficialPage: entry.sourceDiscovery?.resolvedFromOfficialPage !== false,
      resolvedOn: entry.sourceDiscovery?.resolvedOn || new Date().toISOString().slice(0, 10),
      entropy: Number(entropy.toFixed(4)),
      qualityBreakdown: entry.sourceDiscovery?.qualityBreakdown || { identityAccuracy: 2, economicRelevance: 2, sourceAuthority: 2, visualQuality: qualityScore >= 9 ? 2 : 1, recencyNonMisleading: qualityScore >= 10 ? 2 : 1 }
    };
    return { ...downloaded, sourceDimensions: dimensions };
  } finally { await fsp.rm(tmpDir, { recursive: true, force: true }); }
};

const validateSourcePolicy = (entry) => {
  if (entry.kind !== "company-asset") throw new Error(`${entry.ticker}: kind phải company-asset.`);
  if (!isHttps(entry.sourceUrl) || !isHttps(entry.sourceImageUrl)) throw new Error(`${entry.ticker}: source URL/image URL phải HTTPS.`);
  if (!["A", "B", "C"].includes(String(entry.sourceTier || ""))) throw new Error(`${entry.ticker}: sourceTier phải A/B/C.`);
  if (!String(entry.identityType || "").trim()) throw new Error(`${entry.ticker}: thiếu identityType.`);
  if (!(Number(entry.qualityScore) >= 8 && Number(entry.qualityScore) <= 10)) throw new Error(`${entry.ticker}: qualityScore phải 8–10.`);
  if (GENERATIVE_STOCK_RE.test(entry.sourceImageUrl)) throw new Error(`${entry.ticker}: nguồn ảnh stock/generative bị cấm.`);
  const sourceHost = new URL(entry.sourceUrl).hostname.toLowerCase();
  const imageHost = new URL(entry.sourceImageUrl).hostname.toLowerCase();
  if (!hostMatchesDomain(sourceHost, entry.officialDomain)) throw new Error(`${entry.ticker}: sourceUrl ngoài officialDomain.`);
  const allowed = new Set((entry.allowedImageHosts || []).map((host) => String(host).toLowerCase()));
  const imageAllowed = hostMatchesDomain(imageHost, entry.officialDomain) || allowed.has(imageHost);
  if (!imageAllowed) throw new Error(`${entry.ticker}: image host ${imageHost} chưa được xác minh.`);
  if (!hostMatchesDomain(imageHost, entry.officialDomain) && !entry.embeddedImageHostVerified && entry.sourceDiscovery?.resolvedFromOfficialPage !== true) throw new Error(`${entry.ticker}: external CDN chưa có provenance.`);
};

const renderVisual = async (entry, downloaded) => {
  ensureRenderer();
  const outputRelative = `assets/images/company-visuals/${entry.ticker.toLowerCase()}.webp`;
  const outputPath = path.join(root, outputRelative);
  const tmpDir = await fsp.mkdtemp(path.join(os.tmpdir(), `civs-render-${entry.ticker.toLowerCase()}-`));
  const sourcePath = path.join(tmpDir, `source${extensionFrom(downloaded.contentType, downloaded.finalUrl)}`);
  const normalized = path.join(tmpDir, "normalized.png");
  try {
    await fsp.writeFile(sourcePath, downloaded.buffer);
    const sourceDimensions = downloaded.sourceDimensions || identifyDimensions(sourcePath);
    if (sourceDimensions.width < MIN_SOURCE_WIDTH || sourceDimensions.height < MIN_SOURCE_HEIGHT) throw new Error(`${entry.ticker}: nguồn ${sourceDimensions.width}x${sourceDimensions.height} dưới chuẩn.`);
    execFileSync("convert", [sourcePath, "-auto-orient", "-resize", `${TARGET_WIDTH}x${TARGET_HEIGHT}^`, "-gravity", String(entry.cropGravity || "center"), "-extent", `${TARGET_WIDTH}x${TARGET_HEIGHT}`, "-strip", normalized], { stdio: "pipe" });
    await fsp.mkdir(path.dirname(outputPath), { recursive: true });
    execFileSync("cwebp", ["-quiet", "-q", "84", "-m", "6", "-metadata", "none", normalized, "-o", outputPath], { stdio: "pipe" });
    const buffer = await fsp.readFile(outputPath);
    const dimensions = identifyDimensions(outputPath);
    if (dimensions.width !== TARGET_WIDTH || dimensions.height !== TARGET_HEIGHT) throw new Error(`${entry.ticker}: output sai ${dimensions.width}x${dimensions.height}.`);
    return { outputRelative, sourceDimensions, hash: sha256(buffer), bytes: buffer.length, sourceBytes: downloaded.buffer.length, transport: downloaded.transport };
  } finally { await fsp.rm(tmpDir, { recursive: true, force: true }); }
};

const isPublished = (entry) => Boolean(entry?.verified && entry?.src && entry?.sha256 && entry?.sourceImageUrl && Number(entry?.qualityScore) >= 8);
const canReuseExisting = (entry) => {
  if (!isPublished(entry)) return false;
  const filename = path.join(root, localPath(entry.src));
  if (!fs.existsSync(filename)) return false;
  return sha256(fs.readFileSync(filename)) === entry.sha256;
};

const mergeRegistry = (data, registry, logos, research) => {
  const coverage = new Map((research.coverage || []).map((item) => [String(item.ticker || "").toUpperCase(), item]));
  for (const candidate of registry.candidates || []) {
    const ticker = String(candidate.ticker || "").toUpperCase();
    if (!ticker) continue;
    const existing = data.visuals[ticker];
    if (existing?.verified === true && canReuseExisting(existing)) continue;
    const company = logos?.logos?.[ticker]?.company || coverage.get(ticker)?.company || ticker;
    const tier = String(candidate.sourceTier || "A");
    const captionSuffix = tier === "A" ? "hoạt động/tài sản cốt lõi" : tier === "B" ? "nhận diện doanh nghiệp" : "sản phẩm/mạng lưới cốt lõi";
    data.visuals[ticker] = {
      ticker,
      ...(coverage.get(ticker)?.sector ? { sector: coverage.get(ticker).sector } : {}),
      subject: `${company} — ${captionSuffix}`,
      sourceUrl: candidate.sourceUrl,
      sourceImageUrl: candidate.sourceImageUrl || "",
      sourceLabel: `${company} — website chính thức`,
      officialDomain: candidate.officialDomain,
      allowedImageHosts: candidate.allowedImageHosts || [],
      embeddedImageHostVerified: candidate.embeddedImageHostVerified === true,
      sourceTier: tier,
      identityType: candidate.identityType,
      keywords: candidate.keywords || [],
      sourceDiscovery: candidate.sourceImageUrl
        ? { type: candidate.sourceDiscovery?.type || "manual-official", resolvedFromOfficialPage: candidate.sourceDiscovery?.resolvedFromOfficialPage !== false, ...(candidate.sourceDiscovery || {}) }
        : { type: "hero-auto", keywords: candidate.keywords || [] },
      fallbackSourceUrls: candidate.fallbackSourceUrls || [],
      qualityScore: candidate.qualityScore || null,
      alt: candidate.alt || `Hình ảnh ${captionSuffix} của ${company} (${ticker}) từ nguồn chính thức`,
      caption: candidate.caption || `${company} — ${captionSuffix}`,
      kind: "company-asset",
      objectPosition: candidate.objectPosition || "center center",
      cropGravity: candidate.cropGravity || "center",
      verified: false,
      pending: true
    };
  }
};

const processOne = async (entry, hashes) => {
  entry.ticker = String(entry.ticker || "").toUpperCase();
  if (canReuseExisting(entry)) {
    const filename = path.join(root, localPath(entry.src));
    const hash = sha256(fs.readFileSync(filename));
    if (hashes.has(hash)) throw new Error(`${entry.ticker}: local visual trùng hash với mã khác.`);
    hashes.add(hash);
    return { ticker: entry.ticker, reused: true, source: entry.sourceImageUrl, sha256: hash, qualityScore: Number(entry.qualityScore), sourceTier: entry.sourceTier };
  }

  let downloaded;
  if (entry.sourceImageUrl && entry.sourceDiscovery?.type !== "hero-auto") {
    downloaded = await inspectManualSource(entry, await fetchImage(entry, entry.sourceImageUrl));
  } else {
    downloaded = await discoverHeroAuto(entry);
  }
  validateSourcePolicy(entry);
  const rendered = await renderVisual(entry, downloaded);
  if (hashes.has(rendered.hash)) throw new Error(`${entry.ticker}: ảnh đầu ra trùng nội dung với visual khác.`);
  hashes.add(rendered.hash);

  entry.src = `${rendered.outputRelative}?v=${rendered.hash.slice(0, 12)}`;
  entry.width = TARGET_WIDTH;
  entry.height = TARGET_HEIGHT;
  entry.sourceWidth = rendered.sourceDimensions.width;
  entry.sourceHeight = rendered.sourceDimensions.height;
  entry.sha256 = rendered.hash;
  entry.bytes = rendered.bytes;
  entry.sourceBytes = rendered.sourceBytes;
  entry.syncedOn = new Date().toISOString().slice(0, 10);
  entry.verified = true;
  entry.pending = false;
  entry.verifiedOn = new Date().toISOString().slice(0, 10);
  delete entry.lastFailure;
  delete entry.keywords;
  delete entry.fallbackSourceUrls;
  return { ticker: entry.ticker, reused: false, source: entry.sourceImageUrl, sourceDimensions: rendered.sourceDimensions, output: rendered.outputRelative, outputBytes: rendered.bytes, sha256: rendered.hash, transport: rendered.transport, qualityScore: Number(entry.qualityScore), sourceTier: entry.sourceTier };
};

const sanitizeFailedEntry = (entry, error) => {
  entry.verified = false;
  entry.pending = true;
  entry.lastFailure = String(error?.message || error).slice(0, 280);
  delete entry.src;
  delete entry.sha256;
  delete entry.width;
  delete entry.height;
  delete entry.sourceWidth;
  delete entry.sourceHeight;
  delete entry.bytes;
  delete entry.sourceBytes;
  delete entry.syncedOn;
  delete entry.verifiedOn;
};

const runPool = async (entries, worker) => {
  let index = 0;
  const results = [];
  const failures = [];
  const runners = Array.from({ length: Math.min(CONCURRENCY, entries.length) }, async () => {
    while (true) {
      const current = index++;
      if (current >= entries.length) break;
      const entry = entries[current];
      try {
        console.log(`[CIVS ${current + 1}/${entries.length}] ${entry.ticker}`);
        results.push(await worker(entry));
      } catch (error) {
        sanitizeFailedEntry(entry, error);
        failures.push({ ticker: entry.ticker, error: error?.message || String(error) });
        console.error(`[CIVS PENDING] ${entry.ticker}: ${error?.message || error}`);
      }
    }
  });
  await Promise.all(runners);
  return { results, failures };
};

const run = async () => {
  ensureRenderer();
  const data = loadWindowData(dataPath, "COMPANY_VISUALS");
  const logos = loadWindowData(logoPath, "COMPANY_LOGOS");
  const research = loadWindowData(researchPath, "RESEARCH_DATA");
  const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
  if (!data || data.meta?.schema !== SCHEMA || !data.visuals) throw new Error(`COMPANY_VISUALS sai schema ${SCHEMA}.`);
  if (registry?.meta?.schema !== CANDIDATE_SCHEMA) throw new Error(`Candidate registry sai schema ${CANDIDATE_SCHEMA}.`);
  if ((research.coverage || []).length !== 125) throw new Error("Coverage Universe không phải 125 mã.");

  mergeRegistry(data, registry, logos, research);
  const entries = Object.values(data.visuals).sort((a, b) => String(a.ticker).localeCompare(String(b.ticker)));
  if (entries.length !== 125) throw new Error(`Sau merge phải có 125 visual candidate, hiện có ${entries.length}.`);

  const hashes = new Set();
  const { results, failures } = await runPool(entries, (entry) => processOne(entry, hashes));
  const verifiedEntries = entries.filter(isPublished);
  const pendingEntries = entries.filter((entry) => !isPublished(entry));
  const complete = verifiedEntries.length === 125;

  data.meta.standardVersion = "CIVS-1.0";
  data.meta.rollout = true;
  data.meta.complete = complete;
  data.meta.coverageTarget = 125;
  data.meta.candidateCount = entries.length;
  data.meta.count = verifiedEntries.length;
  data.meta.verifiedCount = verifiedEntries.length;
  data.meta.pendingCount = pendingEntries.length;
  data.meta.pendingTickers = pendingEntries.map((entry) => entry.ticker).sort();
  data.meta.rolloutProgressPct = Number(((verifiedEntries.length / 125) * 100).toFixed(1));
  data.meta.synced = new Date().toISOString().slice(0, 10);
  data.meta.target = `${TARGET_WIDTH}x${TARGET_HEIGHT}`;
  data.meta.quality = 84;
  data.meta.verification = complete
    ? "CIVS 1.0 COMPLETE: 125/125 visuals validated from first-party official pages/CDNs, Quality Gate >=8/10, normalized locally and SHA-256 audited."
    : `CIVS 1.0 RESUMABLE: ${verifiedEntries.length}/125 visuals verified; ${pendingEntries.length} remain on safe report-cover fallback until first-party verification passes.`;

  fs.writeFileSync(dataPath, `window.COMPANY_VISUALS = ${JSON.stringify(data, null, 2)};\n`);
  console.log(JSON.stringify({
    ok: true,
    schema: SCHEMA,
    complete,
    coverageTarget: 125,
    verifiedCount: verifiedEntries.length,
    pendingCount: pendingEntries.length,
    generated: results.filter((item) => !item.reused).length,
    reused: results.filter((item) => item.reused).length,
    pendingTickers: data.meta.pendingTickers,
    failures: failures.map((item) => ({ ticker: item.ticker, error: item.error.slice(0, 220) }))
  }, null, 2));
};

run().catch((error) => { console.error(error?.stack || String(error)); process.exitCode = 1; });

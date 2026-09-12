const nativeFetch = globalThis.fetch.bind(globalThis);
const READER_BASE = "https://r.jina.ai/";
const READER_INTERVAL_MS = 3200;
const MIN_PAGE_BYTES = 500;
let readerTail = Promise.resolve();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const headerValue = (headers, name) => {
  if (!headers) return "";
  if (typeof headers.get === "function") return String(headers.get(name) || "");
  const target = String(name).toLowerCase();
  for (const [key, value] of Object.entries(headers)) if (String(key).toLowerCase() === target) return String(value || "");
  return "";
};
const isHtmlRequest = (options = {}) => /text\/html|application\/xhtml\+xml/i.test(headerValue(options.headers, "accept"));
const isHttpUrl = (value) => {
  try { return ["http:", "https:"].includes(new URL(String(value)).protocol); }
  catch { return false; }
};
const htmlEscape = (value) => String(value || "")
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");
const canonicalVariants = (value) => {
  const original = new URL(String(value));
  const variants = [original.href];
  const toggled = new URL(original.href);
  if (toggled.hostname.startsWith("www.")) toggled.hostname = toggled.hostname.slice(4);
  else toggled.hostname = `www.${toggled.hostname}`;
  if (toggled.href !== original.href) variants.push(toggled.href);
  return [...new Set(variants)];
};

const responseFromText = (text, sourceResponse, marker = "direct") => new Response(text, {
  status: 200,
  statusText: "OK",
  headers: {
    "content-type": "text/html; charset=utf-8",
    "x-xltvs-civs-transport": marker,
    ...(sourceResponse?.headers?.get("last-modified") ? { "last-modified": sourceResponse.headers.get("last-modified") } : {})
  }
});

const tryDirectHtml = async (url, options) => {
  const response = await nativeFetch(url, options);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const text = await response.text();
  if (text.length < MIN_PAGE_BYTES) throw new Error(`HTML quá ngắn (${text.length})`);
  return responseFromText(text, response, url === String(url) ? "direct" : "canonical");
};

const markdownToDiscoveryHtml = (markdown, officialUrl) => {
  let imageCount = 0;
  const images = [];
  const re = /!\[([^\]]*)\]\((https?:\/\/[^\s)]+)(?:\s+["'][^"']*["'])?\)/g;
  for (const match of String(markdown || "").matchAll(re)) {
    const imageUrl = match[2];
    try {
      const host = new URL(imageUrl).hostname.toLowerCase();
      if (host === "r.jina.ai" || host.endsWith(".jina.ai") || host.includes("jinausercontent")) continue;
    } catch { continue; }
    images.push(`<img src="${htmlEscape(imageUrl)}" alt="${htmlEscape(match[1])}" data-civs-reader="1">`);
    imageCount += 1;
  }
  const plain = htmlEscape(String(markdown || "")).slice(0, 8 * 1024 * 1024);
  return `<!doctype html><html><head><meta name="x-civs-source" content="${htmlEscape(officialUrl)}"><meta name="x-civs-reader-images" content="${imageCount}"></head><body>${images.join("\n")}<pre>${plain}</pre></body></html>`;
};

const withReaderRateLimit = async (fn) => {
  const previous = readerTail;
  let release;
  readerTail = new Promise((resolve) => { release = resolve; });
  await previous;
  try { return await fn(); }
  finally {
    await sleep(READER_INTERVAL_MS);
    release();
  }
};

const tryReader = async (officialUrl) => withReaderRateLimit(async () => {
  const readerUrl = `${READER_BASE}${officialUrl}`;
  const response = await nativeFetch(readerUrl, {
    redirect: "follow",
    headers: {
      "user-agent": "Xuan-Le-TVS-CIVS-Discovery/1.0",
      accept: "text/plain,text/markdown;q=0.9,*/*;q=0.5"
    }
  });
  if (!response.ok) throw new Error(`Reader HTTP ${response.status}`);
  const markdown = await response.text();
  if (markdown.length < MIN_PAGE_BYTES) throw new Error(`Reader output quá ngắn (${markdown.length})`);
  const html = markdownToDiscoveryHtml(markdown, officialUrl);
  if (html.length < MIN_PAGE_BYTES) throw new Error("Reader output không đủ nội dung để xác minh.");
  return responseFromText(html, response, "jina-reader");
});

const patchedFetch = async (input, options = {}) => {
  const url = typeof input === "string" || input instanceof URL ? String(input) : String(input?.url || "");
  if (!isHttpUrl(url) || !isHtmlRequest(options)) return nativeFetch(input, options);

  const errors = [];
  for (const candidate of canonicalVariants(url)) {
    try {
      const response = await nativeFetch(candidate, options);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const text = await response.text();
      if (text.length < MIN_PAGE_BYTES) throw new Error(`HTML quá ngắn (${text.length})`);
      return responseFromText(text, response, candidate === url ? "direct" : "canonical-host");
    } catch (error) {
      errors.push(`${candidate}: ${error?.message || error}`);
    }
  }

  try {
    return await tryReader(url);
  } catch (error) {
    errors.push(`reader: ${error?.message || error}`);
    const aggregate = new Error(`CIVS page discovery exhausted: ${errors.join(" | ")}`);
    aggregate.cause = error;
    throw aggregate;
  }
};

globalThis.fetch = patchedFetch;
globalThis.__XLTVS_CIVS_FETCH_FALLBACK__ = Object.freeze({
  version: "1.0.0",
  directCanonicalHostFallback: true,
  readerFallback: true,
  readerUsedForImages: false,
  minimumPageBytes: MIN_PAGE_BYTES,
  readerIntervalMs: READER_INTERVAL_MS
});

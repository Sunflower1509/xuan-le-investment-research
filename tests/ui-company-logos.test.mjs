import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const loadWindowValue = (relativePath, key) => {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, relativePath), "utf8"), context);
  return context.window[key];
};

test("108 coverage ticker có đúng 108 logo local được khóa theo sàn và ISIN", () => {
  const research = loadWindowValue("src/data/research-data.js", "RESEARCH_DATA");
  const mapping = loadWindowValue("src/data/company-logos.js", "COMPANY_LOGOS");
  const entries = Object.entries(mapping.logos);
  assert.equal(research.coverage.length, 108);
  assert.equal(entries.length, 108);
  assert.equal(mapping.meta.count, 108);
  for (const item of research.coverage) {
    const logo = mapping.logos[item.ticker];
    assert.ok(logo, `Thiếu logo ${item.ticker}`);
    assert.equal(logo.exchange, String(item.exchange).toUpperCase(), `Sai sàn ${item.ticker}`);
    assert.match(logo.isin, /^VN[A-Z0-9]{10}$/, `ISIN không hợp lệ ${item.ticker}`);
    assert.ok(fs.existsSync(path.join(root, logo.path.split(/[?#]/, 1)[0])), `Thiếu asset ${item.ticker}`);
  }
});

test("bundle import module logo cho hai bề mặt bổ trợ an toàn", () => {
  const index = fs.readFileSync(path.join(root, "src/index.js"), "utf8");
  const module = fs.readFileSync(path.join(root, "src/scripts/company-logo-avatars.js"), "utf8");
  assert.match(index, /company-logos\.js/);
  assert.match(index, /company-logo-avatars\.js/);
  assert.match(module, /\.coverage-card/);
  assert.match(module, /\.watchlist-item/);
  assert.match(module, /__XLTVS_COMPANY_LOGO_STATUS__/);
});

test("mã cổ phiếu nguyên bản không bị logo thay thế trên report và tìm kiếm nhanh", () => {
  const app = fs.readFileSync(path.join(root, "src/scripts/app.js"), "utf8");
  const module = fs.readFileSync(path.join(root, "src/scripts/company-logo-avatars.js"), "utf8");

  assert.match(app, /class="ticker-mark">\$\{escapeHtml\(report\.ticker\)\}<\/span>/);
  assert.match(app, /class="command-item-code">\$\{escapeHtml\(item\.ticker\)\}<\/span>/);
  assert.doesNotMatch(module, /\.report-card-v4/);
  assert.doesNotMatch(module, /\.ticker-mark/);
  assert.doesNotMatch(module, /\.command-item(?:-code)?/);
  assert.doesNotMatch(module, /company-logo-code/);
  assert.doesNotMatch(module, /\.textContent\s*=\s*["']{2}/);
});

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const loadResearch = () => {
  const code = fs.readFileSync(path.join(root, "src/data/research-data.js"), "utf8");
  const context = { window: {} };
  vm.runInNewContext(code, context);
  return context.window.RESEARCH_DATA;
};

test("mọi coverage ticker đều có report-cover riêng", () => {
  const research = loadResearch();
  const covers = new Map(
    research.reports
      .filter((report) => report.reportType !== "trading" && report.visual?.kind === "report-cover" && report.visual?.src)
      .map((report) => [String(report.ticker).toUpperCase(), report.visual.src])
  );
  const missing = research.coverage
    .map((item) => String(item.ticker).toUpperCase())
    .filter((ticker) => !covers.has(ticker));
  assert.equal(missing.length, 0, `Thiếu report-cover cho: ${missing.join(", ")}`);
  assert.equal(covers.size, research.coverage.length);
});

test("bundle import module thumbnail và module khóa đủ ba bề mặt", () => {
  const index = fs.readFileSync(path.join(root, "src/index.js"), "utf8");
  const module = fs.readFileSync(path.join(root, "src/scripts/stock-thumbnails.js"), "utf8");
  assert.match(index, /stock-thumbnails\.js/);
  assert.match(module, /\.coverage-card/);
  assert.match(module, /\.watchlist-item/);
  assert.match(module, /\.command-item/);
  assert.match(module, /__XLTVS_STOCK_COVER_STATUS__/);
});

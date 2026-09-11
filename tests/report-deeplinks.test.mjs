import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildLatestReportMap,
  displayDateToIso,
  resolveReportId,
  sortReportsForTickerLink,
  withReportParam,
  withoutReportParam
} from "../src/scripts/report-deeplinks.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const reports = [
  { id: "AAA-20260910-T", ticker: "AAA", date: "2026-09-10", reportType: "trading" },
  { id: "AAA-20260910", ticker: "AAA", date: "2026-09-10" },
  { id: "AAA-20260901", ticker: "AAA", date: "2026-09-01" },
  { id: "BBB-20260911", ticker: "BBB", date: "2026-09-11" }
];

test("exact report id is preserved and lookup is case-insensitive", () => {
  assert.equal(resolveReportId("aaa-20260910", reports), "AAA-20260910");
});

test("ticker alias resolves to the latest valuation report and prefers valuation on same date", () => {
  assert.equal(resolveReportId("aaa", reports), "AAA-20260910");
  assert.equal(buildLatestReportMap(reports).get("AAA").id, "AAA-20260910");
  assert.equal(sortReportsForTickerLink(reports)[0].id, "BBB-20260911");
});

test("display date is normalized for exact compare-report resolution", () => {
  assert.equal(displayDateToIso("28/08/2026"), "2026-08-28");
  assert.equal(displayDateToIso("2026-08-28"), null);
});

test("unknown or blank report tokens are rejected", () => {
  assert.equal(resolveReportId("ZZZ", reports), null);
  assert.equal(resolveReportId("  ", reports), null);
});

test("deep-link URL preserves unrelated query state and hash", () => {
  const url = withReportParam("https://example.com/research/?foo=1#action-radar", "AAA-20260910");
  assert.equal(url.searchParams.get("foo"), "1");
  assert.equal(url.searchParams.get("report"), "AAA-20260910");
  assert.equal(url.hash, "#action-radar");
});

test("report parameter can be removed without disturbing other URL state", () => {
  const url = withoutReportParam("https://example.com/research/?foo=1&report=AAA-20260910#research");
  assert.equal(url.searchParams.get("report"), null);
  assert.equal(url.searchParams.get("foo"), "1");
  assert.equal(url.hash, "#research");
});

test("production bundle imports the enhancement and all key report surfaces are covered", () => {
  const index = fs.readFileSync(path.join(root, "src/index.js"), "utf8");
  const module = fs.readFileSync(path.join(root, "src/scripts/report-deeplinks.js"), "utf8");

  assert.match(index, /report-deeplinks\.js/);
  for (const selector of ["priority-code", "table-ticker", "ledger-ticker", "ticker-mark", "coverage-card-head", "watchlist-item", "compare-code", "exclusion-list"]) {
    assert.match(module, new RegExp(selector));
  }
  assert.match(module, /Ngày định giá/);
  assert.match(module, /command-select/);
  assert.match(module, /share-report/);
  assert.match(module, /report-exclusion-link/);
  assert.match(module, /Mở hồ sơ định giá ↗/);
  assert.match(module, /\.action-table td \.table-ticker>\.report-deep-link/);
  assert.match(module, /font-size:1\.18rem!important/);
  assert.match(module, /searchParams\.set\(REPORT_PARAM/);
  assert.doesNotMatch(module, /report\.file/);
});

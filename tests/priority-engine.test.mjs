import assert from "node:assert/strict";
import test from "node:test";
import {
  buildPriorityUniverse,
  evaluatePriorityCandidate,
  latestReportDates,
  priorityDistanceText,
  priorityRelationDescription,
  priorityRelationLabel,
  valuationBase
} from "../src/scripts/priority-engine.mjs";

const range = (low, high, extras = {}) => ({
  zoneLow: low,
  zoneHigh: high,
  basisDate: "2026-08-18",
  eligibility: "active",
  ...extras
});

const quote = (ticker, close, action) => ({ ticker, close, priceDate: "2026-08-18", action });

test("entry priority loại mã đã có vị thế mở dù distance = 0", () => {
  const shb = quote("SHB", 11600, {
    zoneLow: null,
    zoneHigh: 11600,
    triggerType: "at-or-below",
    triggerPrice: 11600,
    basisDate: "2026-08-18",
    eligibility: "active",
    stop: 10950
  });
  const state = evaluatePriorityCandidate(shb, {
    openTickers: new Set(["SHB"]),
    reportDates: new Map([["SHB", "2026-08-18"]]),
    asOfDate: "2026-08-18"
  });
  assert.equal(state.distance.value, 0);
  assert.equal(state.eligible, false);
  assert.equal(state.reason, "open-position");
});

test("priority universe sau khi loại SHB đang mở xếp MSR -> MSN -> REE", () => {
  const coverage = [
    quote("SHB", 11600, { triggerType: "at-or-below", triggerPrice: 11600, basisDate: "2026-08-18", eligibility: "active" }),
    quote("MSR", 42400, range(37753, 40450)),
    quote("MSN", 66800, range(57500, 61500)),
    quote("REE", 45350, range(38000, 40700)),
    quote("DDV", 18100, range(15100, 16200))
  ];
  const reports = coverage.map((item) => ({ ticker: item.ticker, date: "2026-08-18" }));
  const universe = buildPriorityUniverse(coverage, {
    openTickers: new Set(["SHB"]),
    reportDates: latestReportDates(reports),
    asOfDate: "2026-08-18"
  });
  assert.deepEqual(universe.slice(0, 3).map((item) => item.ticker), ["MSR", "MSN", "REE"]);
  assert.equal(universe.some((item) => item.ticker === "SHB"), false);
});

test("stop đã thủng chặn setup khỏi entry priority", () => {
  const item = quote("ABC", 94, range(100, 110, { stop: 95 }));
  const state = evaluatePriorityCandidate(item, { asOfDate: "2026-08-18" });
  assert.equal(state.eligible, false);
  assert.equal(state.reason, "stop-breached");
});

test("báo cáo định giá mới hơn basisDate chặn setup cũ mà không tự đặt số ngày hết hạn", () => {
  const item = quote("ABC", 105, { ...range(100, 110), basisDate: "2026-08-10" });
  const state = evaluatePriorityCandidate(item, {
    reportDates: new Map([["ABC", "2026-08-18"]]),
    asOfDate: "2026-08-18"
  });
  assert.equal(state.eligible, false);
  assert.equal(state.reason, "superseded");
});

test("trading report mới hơn không được supersede valuation entry", () => {
  const dates = latestReportDates([
    { ticker: "ABC", date: "2026-08-10" },
    { ticker: "ABC", date: "2026-08-18", reportType: "trading" }
  ]);
  assert.equal(dates.get("ABC"), "2026-08-10");
  const item = quote("ABC", 105, { ...range(100, 110), basisDate: "2026-08-10" });
  const state = evaluatePriorityCandidate(item, { reportDates: dates, asOfDate: "2026-08-18" });
  assert.equal(state.eligible, true);
});

test("validUntil nếu được khai báo thì được thực thi fail-closed", () => {
  const item = quote("ABC", 105, range(100, 110, { validUntil: "2026-08-17" }));
  const state = evaluatePriorityCandidate(item, { asOfDate: "2026-08-18" });
  assert.equal(state.eligible, false);
  assert.equal(state.reason, "expired");
});

test("one-sided dùng đúng ngôn ngữ ngưỡng, không gọi nhầm cận trên/cận dưới", () => {
  const action = { triggerType: "at-or-below", triggerPrice: 11600, basisDate: "2026-08-18", eligibility: "active" };
  const above = quote("SHB", 11650, action);
  const inside = quote("SHB", 11600, action);
  assert.equal(priorityRelationLabel(above), "GẦN NGƯỠNG MUA");
  assert.match(priorityRelationDescription(above, (v) => String(v), (v) => v.toFixed(1)), /cao hơn ngưỡng hành động/);
  assert.equal(priorityDistanceText(above, (v) => v.toFixed(1)).endsWith("trên ngưỡng"), true);
  assert.equal(priorityRelationLabel(inside), "ĐẠT NGƯỠNG HÀNH ĐỘNG");
  assert.match(priorityRelationDescription(inside, (v) => String(v)), /≤ 11600/);
  assert.equal(priorityDistanceText(inside), "0,0% • đạt ngưỡng");
});

test("valuation base dùng một precedence duy nhất cho card và table", () => {
  assert.equal(valuationBase({ calculationBase: 19478, baseValue: 19500 }, { baseValue: 19600 }), 19478);
  assert.equal(valuationBase({ baseValue: 19500 }, { baseValue: 19600 }), 19500);
  assert.equal(valuationBase({}, { baseValue: 19600 }), 19600);
});

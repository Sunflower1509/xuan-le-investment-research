import assert from "node:assert/strict";
import test from "node:test";
import { processEodLedger, quoteRelation } from "../scripts/process-trade-ledger.mjs";
import { projectTradeLedger } from "../src/scripts/trade-ledger.mjs";

const priceUrl = "https://example.com/eod";

const action = (overrides = {}) => ({
  zoneLow: 90,
  zoneHigh: 100,
  basisDate: "2026-08-10",
  eligibility: "active",
  recommendation: "CHỜ",
  condition: "Target trong văn bản không phải dữ liệu có cấu trúc.",
  stop: 88,
  ...overrides
});

const source = ({ date = "2026-08-13", close = 95, actionOverrides = {} } = {}) => ({
  meta: { updated: date },
  reports: [{ id: "abc-valuation", ticker: "ABC", date: "2026-08-12", file: "reports/ABC.pdf" }],
  coverage: [{ ticker: "ABC", close, priceDate: date, priceSource: priceUrl, action: action(actionOverrides) }]
});

const ledger = ({ snapshot = true, events = [] } = {}) => ({
  meta: {
    schemaVersion: 2,
    startedAt: "2026-08-13",
    dataMode: "EOD",
    performanceBasis: "gross-reference",
    owner: "Test",
    automation: {
      version: 1,
      enabled: true,
      trigger: "eod-close-transitioned-into-locked-zone",
      baselineDate: "2026-08-12",
      lastEvaluatedAt: "2026-08-12",
      lastEvaluatedQuotes: snapshot ? {
        ABC: {
          date: "2026-08-12",
          close: 110,
          relation: "above",
          zoneLow: 90,
          zoneHigh: 100,
          zoneBasisDate: "2026-08-10",
          eligibility: "active"
        }
      } : {}
    }
  },
  events
});

test("phân loại giá dùng cận vùng theo quy tắc bao hàm", () => {
  assert.equal(quoteRelation(89, action()), "below");
  assert.equal(quoteRelation(90, action()), "inside");
  assert.equal(quoteRelation(100, action()), "inside");
  assert.equal(quoteRelation(101, action()), "above");
});

test("khởi tạo mã mới mà không hồi tố tín hiệu", () => {
  const result = processEodLedger(source(), ledger({ snapshot: false }));
  assert.equal(result.stats.initialized, 1);
  assert.equal(result.stats.activated, 0);
  assert.equal(result.ledger.events.length, 0);
  assert.equal(result.ledger.meta.automation.lastEvaluatedQuotes.ABC.relation, "inside");
});

test("tự động kích hoạt một lần khi giá EOD đi từ ngoài vào vùng", () => {
  const first = processEodLedger(source(), ledger());
  assert.equal(first.stats.activated, 1);
  assert.equal(first.ledger.events.length, 1);
  const event = first.ledger.events[0];
  assert.equal(event.id, "auto-ABC-2026-08-13");
  assert.equal(event.mode, "automatic-eod");
  assert.equal(event.price, 95);
  assert.equal(event.confirmation.previousQuote.relation, "above");
  assert.deepEqual(event.targets, []);

  const second = processEodLedger(source(), first.ledger);
  assert.equal(second.changed, false);
  assert.equal(second.stats.activated, 0);
  assert.equal(second.ledger.events.length, 1);
});

test("không kích hoạt khi eligibility không active", () => {
  const result = processEodLedger(source({ actionOverrides: { eligibility: "veto" } }), ledger());
  assert.equal(result.stats.activated, 0);
  assert.equal(result.stats.blocked, 1);
  assert.equal(result.ledger.events.length, 0);
});

test("không kích hoạt giả khi vùng mua thay đổi quanh giá", () => {
  const result = processEodLedger(source({ actionOverrides: { zoneLow: 92, zoneHigh: 98, basisDate: "2026-08-13" } }), ledger());
  assert.equal(result.stats.activated, 0);
  assert.equal(result.stats.blocked, 1);
  assert.match(result.warnings[0], /vùng mua đã thay đổi/);
});

test("không ghi trùng khi giá tiếp tục nằm trong vùng ở phiên sau", () => {
  const base = ledger();
  base.meta.automation.lastEvaluatedQuotes.ABC = {
    ...base.meta.automation.lastEvaluatedQuotes.ABC,
    date: "2026-08-13",
    close: 96,
    relation: "inside"
  };
  base.meta.automation.lastEvaluatedAt = "2026-08-13";
  const result = processEodLedger(source({ date: "2026-08-14", close: 94 }), base);
  assert.equal(result.stats.activated, 0);
  assert.equal(result.ledger.events.length, 0);
});

test("bỏ qua dữ liệu lùi ngày và giữ nguyên snapshot mới hơn", () => {
  const base = ledger();
  base.meta.automation.lastEvaluatedQuotes.ABC.date = "2026-08-14";
  base.meta.automation.lastEvaluatedAt = "2026-08-14";
  const result = processEodLedger(source({ date: "2026-08-13", close: 95 }), base);
  assert.equal(result.stats.stale, 1);
  assert.equal(result.ledger.meta.automation.lastEvaluatedQuotes.ABC.date, "2026-08-14");
});

test("vị thế đang mở chặn kích hoạt lặp lại cùng mã", () => {
  const activation = processEodLedger(source(), ledger()).ledger.events[0];
  const base = ledger({ events: [activation] });
  base.meta.automation.lastEvaluatedQuotes.ABC = {
    ...base.meta.automation.lastEvaluatedQuotes.ABC,
    date: "2026-08-14",
    close: 105,
    relation: "above"
  };
  base.meta.automation.lastEvaluatedAt = "2026-08-14";
  const result = processEodLedger(source({ date: "2026-08-15", close: 95 }), base);
  assert.equal(result.stats.activated, 0);
  assert.equal(result.stats.blocked, 1);
  assert.equal(result.ledger.events.length, 1);
});

test("projector tự tính hiệu suất và chỉ cảnh báo stop, không tự đóng", () => {
  const activatedLedger = processEodLedger(source(), ledger()).ledger;
  const laterSource = source({ date: "2026-08-14", close: 87 });
  const projection = projectTradeLedger(activatedLedger, laterSource.coverage);
  assert.equal(projection.issues.length, 0);
  assert.equal(projection.positions[0].status, "open");
  assert.equal(projection.positions[0].monitoringState, "stop-alert");
  assert.equal(Number(projection.positions[0].performancePct.toFixed(4)), -8.4211);
});

test("dừng xử lý nếu sổ đầu vào có sự kiện sai", () => {
  const broken = ledger({ events: [{ id: "bad" }] });
  assert.throws(() => processEodLedger(source(), broken), /không hợp lệ/);
});


test("SHB one-sided: 11.650 -> 11.600 kích hoạt đúng một lần", () => {
  const shbAction = {
    zoneLow: null,
    zoneHigh: 11600,
    triggerType: "at-or-below",
    triggerPrice: 11600,
    basisDate: "2026-08-18",
    eligibility: "active",
    recommendation: "MUA",
    condition: "P <= 11.600",
    stop: 10950,
    targets: [12400, 16600]
  };
  assert.equal(quoteRelation(11650, shbAction), "above");
  assert.equal(quoteRelation(11600, shbAction), "inside");
  assert.equal(quoteRelation(11550, shbAction), "inside");

  const shbSource = {
    meta: { updated: "2026-08-18" },
    reports: [{ id: "SHB-20260818", ticker: "SHB", date: "2026-08-18", file: "reports/SHB_2026-08-18.pdf" }],
    coverage: [{ ticker: "SHB", close: 11600, priceDate: "2026-08-18", priceSource: priceUrl, action: shbAction }]
  };
  const shbLedger = ledger({ snapshot: false });
  shbLedger.meta.automation.lastEvaluatedQuotes = {
    SHB: {
      date: "2026-08-17",
      close: 11650,
      relation: "above",
      zoneLow: null,
      zoneHigh: 11600,
      triggerType: "at-or-below",
      triggerPrice: 11600,
      zoneBasisDate: "2026-08-18",
      eligibility: "active"
    }
  };
  shbLedger.meta.automation.lastEvaluatedAt = "2026-08-17";
  const first = processEodLedger(shbSource, shbLedger);
  assert.equal(first.stats.activated, 1);
  assert.equal(first.ledger.events.length, 1);
  const event = first.ledger.events[0];
  assert.equal(event.id, "auto-SHB-2026-08-18");
  assert.equal(event.mode, "automatic-eod");
  assert.equal(event.price, 11600);
  assert.equal(event.triggerType, "at-or-below");
  assert.equal(event.triggerPrice, 11600);
  assert.equal(event.confirmation.previousQuote.date, "2026-08-17");
  assert.equal(event.confirmation.previousQuote.close, 11650);
  assert.equal(event.confirmation.previousQuote.relation, "above");

  const projection = projectTradeLedger(first.ledger, shbSource.coverage);
  assert.equal(projection.issues.length, 0);
  assert.equal(projection.positions.length, 1);
  assert.equal(projection.positions[0].ticker, "SHB");
  assert.equal(projection.positions[0].triggerType, "at-or-below");
  assert.equal(projection.positions[0].triggerPrice, 11600);

  const second = processEodLedger(shbSource, first.ledger);
  assert.equal(second.changed, false);
  assert.equal(second.stats.activated, 0);
  assert.equal(second.ledger.events.length, 1);
});

test("one-sided không kích hoạt nếu ngưỡng bị thay đổi giữa hai EOD", () => {
  const shbSource = {
    meta: { updated: "2026-08-18" },
    reports: [],
    coverage: [{
      ticker: "SHB",
      close: 11600,
      priceDate: "2026-08-18",
      priceSource: priceUrl,
      action: { zoneLow: null, zoneHigh: 11600, triggerType: "at-or-below", triggerPrice: 11600, basisDate: "2026-08-18", eligibility: "active" }
    }]
  };
  const base = ledger({ snapshot: false });
  base.meta.automation.lastEvaluatedQuotes = {
    SHB: { date: "2026-08-17", close: 11650, relation: "above", zoneLow: null, zoneHigh: 11700, triggerType: "at-or-below", triggerPrice: 11700, zoneBasisDate: "2026-08-18", eligibility: "active" }
  };
  base.meta.automation.lastEvaluatedAt = "2026-08-17";
  const result = processEodLedger(shbSource, base);
  assert.equal(result.stats.activated, 0);
  assert.equal(result.stats.blocked, 1);
  assert.match(result.warnings[0], /ngưỡng kích hoạt đã thay đổi/);
});

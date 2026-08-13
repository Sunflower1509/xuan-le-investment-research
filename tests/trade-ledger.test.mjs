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

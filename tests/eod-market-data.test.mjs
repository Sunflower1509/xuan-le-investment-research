import test from "node:test";
import assert from "node:assert/strict";
import { isCoverageCurrent, parseCafeF, parseKbsDaily, parseVndirect, secondaryCloseDecision } from "../scripts/update-eod-market-data.mjs";

const date = "2026-08-20";

test("VNDIRECT chỉ chấp nhận đúng ticker và đúng ngày", () => {
  const payload = {
    data: [{ code: "BBB", date, open: 10, high: 11, low: 9, close: 10.5, basicPrice: 10, pctChange: 5, nmVolume: 100 }]
  };
  assert.throws(() => parseVndirect(payload, "AAA", date), /missing row/);
});

test("VNDIRECT tự kiểm tra pctChange với giá tham chiếu chính thức", () => {
  assert.throws(() => parseVndirect({
    data: [{ code: "AAA", date, open: 10, high: 11, low: 9, close: 10.5, basicPrice: 10, pctChange: 4, nmVolume: 100 }]
  }, "AAA", date), /changePct mismatch/);
});

test("CafeF chỉ lấy đúng dòng lịch sử của ngày yêu cầu", () => {
  const html = `
    <div>Tin tức 20/08/2026 không được dùng làm quote</div>
    <table>
      <tr><td class="col1">20/08</td><td class="col2"><div class="l">10,5</div><div class='r up green'>0,50 (5,00%)</div></td><td class="col3">1.234.500</td><td class="col4">12.345</td></tr>
      <tr><td class="col1">19/08</td><td class="col2"><div class="l">10</div><div class='r nochange orange'>0,00 (0,00%)</div></td><td class="col3">100</td><td class="col4">1</td></tr>
    </table>`;
  assert.deepEqual(parseCafeF(html, date), { close: 10500, volume: 1234500, changePct: 5 });
  assert.throws(() => parseCafeF(html, "2026-08-21"), /missing row/);
});

test("KBS chỉ chấp nhận đúng dòng OHLC ngày yêu cầu", () => {
  const payload = { data_day: [{ t: "2026-08-20T00:00:00", o: 10000, h: 11000, l: 9000, c: 10500, v: 123456 }] };
  assert.deepEqual(parseKbsDaily(payload, date), { open: 10000, high: 11000, low: 9000, close: 10500, volume: 123456 });
  assert.throws(() => parseKbsDaily(payload, "2026-08-21"), /missing row/);
});

test("giá đóng cửa khớp CafeF được xác minh trực tiếp", () => {
  const decision = secondaryCloseDecision({ ticker: "ACB", date: "2026-08-28", primaryClose: 22650, cafeFClose: 22650 });
  assert.equal(decision.ok, true);
  assert.equal(decision.mode, "cafef-direct");
  assert.match(decision.source, /cafef\.vn/);
});

test("ngoại lệ 28/08 chỉ được chấp nhận khi nguồn thứ ba khóa đúng giá VNDIRECT", () => {
  const msr = secondaryCloseDecision({ ticker: "MSR", date: "2026-08-28", primaryClose: 47200, cafeFClose: 47300 });
  assert.equal(msr.ok, true);
  assert.equal(msr.mode, "third-source-override");
  assert.match(msr.source, /investing\.com/);

  const wrongPrimary = secondaryCloseDecision({ ticker: "MSR", date: "2026-08-28", primaryClose: 47100, cafeFClose: 47300 });
  assert.equal(wrongPrimary.ok, false);

  const unrelated = secondaryCloseDecision({ ticker: "ABC", date: "2026-08-28", primaryClose: 10000, cafeFClose: 10100 });
  assert.equal(unrelated.ok, false);
});

test("ngoại lệ 08/09 chỉ chấp nhận đúng giá Vietcap/VCI đã xác minh", () => {
  const cases = [
    ["DRI", 14700, 14600],
    ["MSR", 47900, 47700],
    ["VGI", 86200, 85900]
  ];
  for (const [ticker, primaryClose, cafeFClose] of cases) {
    const decision = secondaryCloseDecision({ ticker, date: "2026-09-08", primaryClose, cafeFClose });
    assert.equal(decision.ok, true);
    assert.equal(decision.mode, "third-source-override");
    assert.match(decision.source, /vietcap.com.vn/);
    const wrong = secondaryCloseDecision({ ticker, date: "2026-09-08", primaryClose: primaryClose + 100, cafeFClose });
    assert.equal(wrong.ok, false);
  }
});

test("không bỏ qua lần chạy cùng ngày khi coverage mới chưa được khóa đủ hai nguồn", () => {
  const current = [{
    ticker: "AAA",
    close: 10500,
    changePct: 5,
    volume: 100,
    priceDate: date,
    priceSource: "https://primary.example/aaa",
    priceSourceSecondary: "https://secondary.example/aaa"
  }];
  assert.equal(isCoverageCurrent(current, date), true);
  assert.equal(isCoverageCurrent([...current, { ticker: "BBB" }], date), false);
  assert.equal(isCoverageCurrent([{ ...current[0], priceSourceSecondary: null }], date), false);
  assert.equal(isCoverageCurrent([{ ...current[0], volume: null }], date), false);
});

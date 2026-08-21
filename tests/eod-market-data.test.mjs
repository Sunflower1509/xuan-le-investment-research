import test from "node:test";
import assert from "node:assert/strict";
import { isCoverageCurrent, ohlcDifferences, parseDnse, parseVndirect } from "../scripts/update-eod-market-data.mjs";

const date = "2026-08-20";

test("VNDIRECT chỉ chấp nhận đúng ticker và đúng ngày", () => {
  const payload = {
    data: [{ code: "BBB", date, open: 10, high: 11, low: 9, close: 10.5, basicPrice: 10, pctChange: 5, nmVolume: 100 }]
  };
  assert.throws(() => parseVndirect(payload, "AAA", date), /missing row/);
});

test("hai nguồn phải khớp toàn bộ OHLC sau khi chuẩn hóa", () => {
  const primary = parseVndirect({
    data: [{ code: "AAA", date, open: 10, high: 11, low: 9, close: 10.5, basicPrice: 10, pctChange: 5, nmVolume: 100 }]
  }, "AAA", date);
  const secondary = parseDnse({
    o: [10000], h: [11000], l: [9000], c: [10500], v: [100], t: [1787220000]
  }, date);
  assert.deepEqual(ohlcDifferences(primary, secondary), []);
});

test("phát hiện sai khác OHLC dù giá đóng cửa vẫn khớp", () => {
  const primary = { open: 10000, high: 11000, low: 9000, close: 10500 };
  const secondary = { open: 10100, high: 11000, low: 9000, close: 10500 };
  assert.deepEqual(ohlcDifferences(primary, secondary), [{ field: "open", primary: 10000, secondary: 10100 }]);
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

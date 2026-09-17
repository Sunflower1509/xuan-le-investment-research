import fs from "node:fs";

const updaterPath = "scripts/update-eod-market-data.mjs";
let updater = fs.readFileSync(updaterPath, "utf8");
if (!updater.includes('"2026-09-17": Object.freeze({')) {
  const marker = "\n});\n\nconst argValue";
  if (!updater.includes(marker)) throw new Error("Updater insertion marker not found");
  const block = `,
  "2026-09-17": Object.freeze({
    OIL: Object.freeze({
      close: 14500,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/OIL/data_day?sdate=17-09-2026&edate=17-09-2026",
      reason: "CafeF 17/09 trả 14.400; KBS date-specific xác nhận OHLC 15.0/15.2/14.2/14.5, khối lượng 6.366.600, giá đóng cửa 14.500, trùng VNDIRECT."
    }),
    VGI: Object.freeze({
      close: 81800,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/VGI/data_day?sdate=17-09-2026&edate=17-09-2026",
      reason: "CafeF 17/09 trả 81.500; KBS date-specific xác nhận OHLC 82.8/82.8/81.4/81.8, khối lượng 192.900, giá đóng cửa 81.800, trùng VNDIRECT; Stockbiz lịch sử đúng ngày cũng ghi 81.800."
    })
  })`;
  updater = updater.replace(marker, `${block}${marker}`);
  fs.writeFileSync(updaterPath, updater);
}

const testPath = "tests/eod-market-data.test.mjs";
let tests = fs.readFileSync(testPath, "utf8");
if (!tests.includes("ngoại lệ 17/09 chỉ chấp nhận đúng giá KBS exact-date đã xác minh")) {
  const marker = 'test("không bỏ qua lần chạy cùng ngày khi coverage mới chưa được khóa đủ hai nguồn"';
  const index = tests.indexOf(marker);
  if (index < 0) throw new Error("Test insertion marker not found");
  const block = `test("ngoại lệ 17/09 chỉ chấp nhận đúng giá KBS exact-date đã xác minh", () => {
  const cases = [
    ["OIL", 14500, 14400],
    ["VGI", 81800, 81500]
  ];
  for (const [ticker, primaryClose, cafeFClose] of cases) {
    const decision = secondaryCloseDecision({ ticker, date: "2026-09-17", primaryClose, cafeFClose });
    assert.equal(decision.ok, true);
    assert.equal(decision.mode, "third-source-override");
    assert.match(decision.source, /kbsec\\.com\\.vn/);
    const wrong = secondaryCloseDecision({ ticker, date: "2026-09-17", primaryClose: primaryClose + 100, cafeFClose });
    assert.equal(wrong.ok, false);
  }
});
`;
  tests = tests.slice(0, index) + block + tests.slice(index);
  fs.writeFileSync(testPath, tests);
}

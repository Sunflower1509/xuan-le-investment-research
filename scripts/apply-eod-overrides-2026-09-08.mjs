#!/usr/bin/env node

import fs from "node:fs";

const sourcePath = "scripts/update-eod-market-data.mjs";
let source = fs.readFileSync(sourcePath, "utf8");

if (!source.includes('"2026-09-08": Object.freeze({')) {
  const marker = "\n  })\n});\n\nconst argValue";
  if (!source.includes(marker)) throw new Error("Override object closing marker not found");
  const block = `
  }),
  "2026-09-08": Object.freeze({
    DRI: Object.freeze({
      close: 14700,
      source: "https://trading.vietcap.com.vn/api/chart/OHLCChart/gap-chart",
      reason: "CafeF 08/09 trả 14.600; Vietcap VCI lịch sử đúng ngày xác nhận OHLC 14.3/14.8/14.2/14.7, khối lượng 1.104.800; KBS date-specific cũng xác nhận đóng cửa 14.700, trùng VNDIRECT."
    }),
    MSR: Object.freeze({
      close: 47900,
      source: "https://trading.vietcap.com.vn/api/chart/OHLCChart/gap-chart",
      reason: "CafeF 08/09 trả 47.700; Vietcap VCI lịch sử đúng ngày xác nhận OHLC 48.9/48.9/47.1/47.9, khối lượng 1.948.500; KBS date-specific cũng xác nhận đóng cửa 47.900, trùng VNDIRECT."
    }),
    VGI: Object.freeze({
      close: 86200,
      source: "https://trading.vietcap.com.vn/api/chart/OHLCChart/gap-chart",
      reason: "CafeF 08/09 trả 85.900; Vietcap VCI lịch sử đúng ngày xác nhận OHLC 86.4/86.5/85.6/86.2, khối lượng 98.900; KBS date-specific cũng xác nhận đóng cửa 86.200, trùng VNDIRECT."
    })
  })
});

const argValue`;
  source = source.replace(marker, block);
  fs.writeFileSync(sourcePath, source);
}

const testPath = "tests/eod-market-data.test.mjs";
let tests = fs.readFileSync(testPath, "utf8");
if (!tests.includes("ngoại lệ 08/09 chỉ chấp nhận đúng giá Vietcap/VCI đã xác minh")) {
  const marker = '\ntest("không bỏ qua lần chạy cùng ngày khi coverage mới chưa được khóa đủ hai nguồn", () => {';
  if (!tests.includes(marker)) throw new Error("Test insertion marker not found");
  const block = `
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
    assert.match(decision.source, /vietcap\.com\.vn/);
    const wrong = secondaryCloseDecision({ ticker, date: "2026-09-08", primaryClose: primaryClose + 100, cafeFClose });
    assert.equal(wrong.ok, false);
  }
});
`;
  tests = tests.replace(marker, block + marker);
  fs.writeFileSync(testPath, tests);
}

console.log("Verified 2026-09-08 DRI/MSR/VGI overrides prepared.");

#!/usr/bin/env node

import fs from 'node:fs';

const path = 'scripts/update-eod-market-data.mjs';
const before = fs.readFileSync(path, 'utf8');
if (before.includes('"2026-09-15": Object.freeze({')) {
  console.log('2026-09-15 overrides already present; no patch required.');
  process.exit(0);
}

const marker = '\n  })\n});\n\nconst argValue';
if (!before.includes(marker)) throw new Error('Expected SECONDARY_CLOSE_OVERRIDES closing marker not found');

const block = `
  }),
  "2026-09-15": Object.freeze({
    DDV: Object.freeze({
      close: 17100,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/DDV/data_day?sdate=15-09-2026&edate=15-09-2026",
      reason: "CafeF 15/09 trả 17.200; KBS date-specific xác nhận OHLC 17.0/17.2/16.6/17.1, khối lượng 398.800, giá đóng cửa 17.100, trùng VNDIRECT."
    }),
    MSR: Object.freeze({
      close: 48300,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/MSR/data_day?sdate=15-09-2026&edate=15-09-2026",
      reason: "CafeF 15/09 trả 48.400; KBS date-specific xác nhận OHLC 48.4/48.8/47.9/48.3, khối lượng 975.900, giá đóng cửa 48.300, trùng VNDIRECT."
    }),
    OIL: Object.freeze({
      close: 14800,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/OIL/data_day?sdate=15-09-2026&edate=15-09-2026",
      reason: "CafeF 15/09 trả 14.700; KBS date-specific xác nhận OHLC 13.9/15.0/13.8/14.8, khối lượng 8.785.300, giá đóng cửa 14.800, trùng VNDIRECT."
    }),
    PHP: Object.freeze({
      close: 43200,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/PHP/data_day?sdate=15-09-2026&edate=15-09-2026",
      reason: "CafeF 15/09 trả 43.100; KBS date-specific xác nhận OHLC 42.2/43.2/42.1/43.2, khối lượng 313.600, giá đóng cửa 43.200, trùng VNDIRECT."
    })
  })`;

const after = before.replace(marker, `${block}\n});\n\nconst argValue`);
fs.writeFileSync(path, after);
console.log('Patched verified 2026-09-15 overrides.');

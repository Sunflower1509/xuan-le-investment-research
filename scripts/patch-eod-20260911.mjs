#!/usr/bin/env node
import fs from 'node:fs';
const path = 'scripts/update-eod-market-data.mjs';
let s = fs.readFileSync(path, 'utf8');
if (s.includes('"2026-09-11": Object.freeze({')) process.exit(0);
const anchor = '\n});\n\nconst argValue';
if (!s.includes(anchor)) throw new Error('Override anchor not found');
const block = `
  ,"2026-09-11": Object.freeze({
    DRI: Object.freeze({
      close: 14500,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/DRI/data_day?sdate=11-09-2026&edate=11-09-2026",
      reason: "CafeF 11/09 trả 14.400; KBS date-specific xác nhận OHLC 14.7/14.7/14.3/14.5, khối lượng 676.700, giá đóng cửa 14.500, trùng VNDIRECT."
    }),
    OIL: Object.freeze({
      close: 13800,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/OIL/data_day?sdate=11-09-2026&edate=11-09-2026",
      reason: "CafeF 11/09 trả 13.700; KBS date-specific xác nhận OHLC 13.9/14.5/13.6/13.8, khối lượng 3.534.100; HNX sau phiên hiển thị OIL 13.800, trùng VNDIRECT."
    }),
    PHP: Object.freeze({
      close: 45500,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/PHP/data_day?sdate=11-09-2026&edate=11-09-2026",
      reason: "CafeF 11/09 trả 45.400; KBS date-specific xác nhận OHLC 46.0/47.3/44.9/45.5, khối lượng 234.800, giá đóng cửa 45.500, trùng VNDIRECT."
    }),
    VGI: Object.freeze({
      close: 84000,
      source: "https://kbbuddywts.kbsec.com.vn/iis-server/investment/stocks/VGI/data_day?sdate=11-09-2026&edate=11-09-2026",
      reason: "CafeF 11/09 trả 84.100; KBS date-specific xác nhận OHLC 85.8/86.6/83.9/84.0, khối lượng 279.300, giá đóng cửa 84.000, trùng VNDIRECT."
    })
  })`;
s = s.replace(anchor, block + anchor);
fs.writeFileSync(path, s);

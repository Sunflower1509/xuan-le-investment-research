#!/usr/bin/env node

import fs from "node:fs/promises";

const replaceOnce = (text, before, after, label) => {
  const first = text.indexOf(before);
  if (first < 0) throw new Error(`Không tìm thấy target: ${label}`);
  if (text.indexOf(before, first + before.length) >= 0) throw new Error(`Target không unique: ${label}`);
  return `${text.slice(0, first)}${after}${text.slice(first + before.length)}`;
};

const replaceRegexOnce = (text, regex, after, label) => {
  const matches = [...text.matchAll(new RegExp(regex.source, regex.flags.includes("g") ? regex.flags : `${regex.flags}g`))];
  if (matches.length !== 1) throw new Error(`Regex target ${label}: expected 1, got ${matches.length}`);
  return text.replace(regex, after);
};

const patchApp = async () => {
  const path = "src/scripts/app.js";
  let text = await fs.readFile(path, "utf8");

  text = replaceOnce(
    text,
    'import { projectTradeLedger } from "./trade-ledger.mjs";\nimport { distanceToTrigger, triggerDisplayModel } from "./action-trigger.mjs";',
    [
      'import { projectTradeLedger } from "./trade-ledger.mjs";',
      'import { distanceToTrigger, triggerDisplayModel } from "./action-trigger.mjs";',
      'import {',
      '  buildPriorityUniverse,',
      '  latestReportDates,',
      '  openPositionTickers,',
      '  priorityDistanceText,',
      '  priorityRelationDescription,',
      '  priorityRelationLabel,',
      '  valuationBase',
      '} from "./priority-engine.mjs";'
    ].join("\n"),
    "app imports"
  );

  text = replaceOnce(
    text,
    [
      '  [...reports]',
      '    .sort((a, b) => b.date.localeCompare(a.date) || Number(a.reportType === "trading") - Number(b.reportType === "trading"))',
      '    .forEach((report) => {',
      '      if (!latestByTicker.has(report.ticker)) latestByTicker.set(report.ticker, report);',
      '    });',
      '',
      '  const getStoredSet = (key) => {'
    ].join("\n"),
    [
      '  [...reports]',
      '    .sort((a, b) => b.date.localeCompare(a.date) || Number(a.reportType === "trading") - Number(b.reportType === "trading"))',
      '    .forEach((report) => {',
      '      if (!latestByTicker.has(report.ticker)) latestByTicker.set(report.ticker, report);',
      '    });',
      '',
      '  const ledgerProjection = projectTradeLedger(tradeLedgerSource, coverage);',
      '  const priorityContext = {',
      '    openTickers: openPositionTickers(ledgerProjection),',
      '    reportDates: latestReportDates(reports),',
      '    asOfDate: source.meta.updated',
      '  };',
      '',
      '  const getStoredSet = (key) => {'
    ].join("\n"),
    "app priority context"
  );

  text = replaceOnce(
    text,
    [
      '  const priorityUniverse = coverage',
      '    .filter((item) => item.action?.eligibility === "active" && actionDistance(item))',
      '    .sort((a, b) => actionDistance(a).value - actionDistance(b).value || a.ticker.localeCompare(b.ticker));'
    ].join("\n"),
    '  const priorityUniverse = buildPriorityUniverse(coverage, priorityContext);',
    "priority universe"
  );

  text = replaceRegexOnce(
    text,
    /  const relationLabel = \(item\) => \{\n[\s\S]*?\n  \};\n\n  const currentUpside/,
    '  const relationLabel = (item) => priorityRelationLabel(item);\n\n  const currentUpside',
    "relation label"
  );

  text = replaceOnce(
    text,
    [
      '  const currentUpside = (item) => {',
      '    const report = latestByTicker.get(item.ticker);',
      '    const base = report?.calculationBase || report?.baseValue || item.action?.baseValue;',
      '    return Number.isFinite(base) && Number.isFinite(item.close) ? ((base / item.close) - 1) * 100 : null;',
      '  };'
    ].join("\n"),
    [
      '  const currentUpside = (item) => {',
      '    const report = latestByTicker.get(item.ticker);',
      '    const base = valuationBase(report, item.action);',
      '    return Number.isFinite(base) && Number.isFinite(item.close) ? ((base / item.close) - 1) * 100 : null;',
      '  };'
    ].join("\n"),
    "current upside"
  );

  text = replaceOnce(
    text,
    [
      '  const reportUpside = (report, quote = reportQuote(report)) => {',
      '    if (report.reportType === "trading") return null;',
      '    const base = report.calculationBase || report.baseValue;',
      '    return Number.isFinite(base) && Number.isFinite(quote?.close) ? ((base / quote.close) - 1) * 100 : null;',
      '  };'
    ].join("\n"),
    [
      '  const reportUpside = (report, quote = reportQuote(report)) => {',
      '    if (report.reportType === "trading") return null;',
      '    const base = valuationBase(report, quote?.action);',
      '    return Number.isFinite(base) && Number.isFinite(quote?.close) ? ((base / quote.close) - 1) * 100 : null;',
      '  };'
    ].join("\n"),
    "report upside"
  );

  text = replaceOnce(text, 'Có vùng mua đã khóa • Không hard veto', 'Entry mới • chưa có vị thế mở • không hard veto', "priority summary copy");

  text = replaceRegexOnce(
    text,
    /      const relation = distance\.relation === "below"\n[\s\S]*?\n          : `Giá cao hơn cận trên \$\{decimal\(distance\.value\)\}%`;/,
    '      const relation = priorityRelationDescription(item, number, decimal);',
    "priority card relation"
  );

  text = replaceOnce(text, '        const base = report?.baseValue || action.baseValue;', '        const base = valuationBase(report, action);', "priority table base");

  text = replaceRegexOnce(
    text,
    /        const distanceText = distance\.relation === "inside" \? "0,0% • trong vùng" : `\$\{decimal\(distance\.value\)\}% • \$\{distance\.relation === "below" \? "dưới cận" : "trên cận"\}`;/,
    '        const distanceText = priorityDistanceText(item, decimal);',
    "priority table distance text"
  );

  text = replaceOnce(text, '    const projection = projectTradeLedger(tradeLedgerSource, coverage);', '    const projection = ledgerProjection;', "reuse ledger projection");

  await fs.writeFile(path, text, "utf8");
};

const patchAudit = async () => {
  const path = "scripts/audit-site.mjs";
  let text = await fs.readFile(path, "utf8");

  text = replaceOnce(
    text,
    '  const reportIds = new Set(reports.map((report) => report.id));',
    [
      '  const reportIds = new Set(reports.map((report) => report.id));',
      '  const latestReportDateByTicker = new Map();',
      '  reports.forEach((report) => {',
      '    const current = latestReportDateByTicker.get(report.ticker);',
      '    if (isIsoDate(report.date) && (!current || report.date > current)) latestReportDateByTicker.set(report.ticker, report.date);',
      '  });'
    ].join("\n"),
    "audit latest report dates"
  );

  text = replaceOnce(
    text,
    [
      '    if (item.action?.eligibility === "active") {',
      '      if (!parseActionTrigger(item.action)) fail(scope, "điều kiện kích hoạt active không hợp lệ theo shared Trigger Engine");',
      '      if (!isIsoDate(item.action.basisDate)) fail(scope, "basisDate của điều kiện active không hợp lệ");',
      '    }'
    ].join("\n"),
    [
      '    if (item.action?.eligibility === "active") {',
      '      if (!parseActionTrigger(item.action)) fail(scope, "điều kiện kích hoạt active không hợp lệ theo shared Trigger Engine");',
      '      if (!isIsoDate(item.action.basisDate)) fail(scope, "basisDate của điều kiện active không hợp lệ");',
      '      const latestReportDate = latestReportDateByTicker.get(item.ticker);',
      '      if (latestReportDate && isIsoDate(item.action.basisDate) && item.action.basisDate < latestReportDate) {',
      '        fail(scope, `setup active ${item.action.basisDate} đã bị báo cáo mới ${latestReportDate} thay thế`);',
      '      }',
      '      if (item.action.validUntil != null) {',
      '        if (!isIsoDate(item.action.validUntil)) fail(scope, "validUntil phải là ngày ISO hợp lệ nếu được khai báo");',
      '        if (isIsoDate(item.action.validUntil) && isIsoDate(item.action.basisDate) && item.action.validUntil < item.action.basisDate) {',
      '          fail(scope, "validUntil không được sớm hơn basisDate");',
      '        }',
      '      }',
      '    }'
    ].join("\n"),
    "audit active priority freshness"
  );

  await fs.writeFile(path, text, "utf8");
};

const patchResearchMethod = async () => {
  const path = "src/data/research-data.js";
  let text = await fs.readFile(path, "utf8");
  text = replaceOnce(
    text,
    [
      '    "formula": "Khoảng cách = |Giá đóng cửa − biên gần nhất của vùng mua| / biên gần nhất",',
      '    "rules": [',
      '      "Chỉ xếp hạng các mã có vùng mua/entry đã khóa và không mang khuyến nghị LOẠI hoặc TRÁNH MUA MỚI.",',
      '      "Nếu giá thấp hơn cận dưới, trạng thái là CẦN XÁC NHẬN LẠI — không tự động chuyển thành MUA.",',
      '      "Khuyến nghị điều kiện vẫn phải thỏa bộ lọc cơ bản hoặc kỹ thuật ghi trong báo cáo.",',
      '      "Thiết lập đã thủng stop, quá cũ hoặc thiếu vùng mua được tách khỏi bảng ưu tiên."',
      '    ]'
    ].join("\n"),
    [
      '    "formula": "Khoảng cách = khoảng cách phần trăm tới biên gần nhất của vùng mua hoặc tới ngưỡng trigger một phía; bằng 0 khi giá đang thỏa điều kiện giá.",',
      '    "rules": [',
      '      "Chỉ xếp hạng entry mới khi action còn active, trigger hợp lệ, giá EOD cùng phiên và không có hard veto.",',
      '      "Mã đã có vị thế mở được chuyển sang Nhật ký vị thế và không tiếp tục chiếm hạng entry mới.",',
      '      "Nếu giá thấp hơn cận dưới của vùng hai phía, trạng thái là CẦN XÁC NHẬN LẠI — không tự động chuyển thành MUA.",',
      '      "Thiết lập thủng stop, bị báo cáo mới hơn thay thế, hết validUntil nếu có hoặc thiếu trigger hợp lệ được tách khỏi bảng ưu tiên.",',
      '      "Không tự đặt số ngày hết hạn khi báo cáo không quy định; điều kiện định tính trong báo cáo vẫn phải được xác nhận trước khi giải ngân."',
      '    ]'
    ].join("\n"),
    "ranking method"
  );
  await fs.writeFile(path, text, "utf8");
};

const patchCacheToken = async () => {
  const path = "index.html";
  let text = await fs.readFile(path, "utf8");
  const next = text.replace(/assets\/js\/site\.min\.js\?v=[^"']+/, "assets/js/site.min.js?v=20260818-priority-engine1");
  if (next === text) throw new Error("Không tìm thấy JS cache token trong index.html");
  await fs.writeFile(path, next, "utf8");
};

await patchApp();
await patchAudit();
await patchResearchMethod();
await patchCacheToken();
console.log("Priority hardening patch applied.");

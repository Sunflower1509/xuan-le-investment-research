#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import {
  activationRelation,
  crossedLockedTrigger,
  finitePositive,
  sameLockedTrigger,
  snapshotTriggerState
} from "../src/scripts/action-trigger.mjs";
import { projectTradeLedger, validIsoDate, validSourceUrl } from "../src/scripts/trade-ledger.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RESEARCH_PATH = path.join(root, "src/data/research-data.js");
const LEDGER_PATH = path.join(root, "src/data/trade-ledger.json");
const PREVIOUS_EOD_COMMIT = "2a2e095f53d0b3acbc6996a075dc23647caf2dff";
const CURRENT_EOD_COMMIT = "8c8146e0cf99cfa74c3143e69098b9c441922967";
const EXPECTED = Object.freeze({
  ticker: "TCH",
  previousDate: "2026-08-28",
  previousClose: 13400,
  date: "2026-09-03",
  close: 11950,
  zoneLow: 12142,
  zoneHigh: 13010,
  zoneBasisDate: "2026-08-26",
  reportId: "TCH-20260826",
  reportFile: "reports/TCH_2026-08-26.pdf"
});
const RANGE_TRIGGER = "eod-close-crossed-locked-buy-ceiling";

const parseResearch = (code, label) => {
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename: label });
  const source = sandbox.window.RESEARCH_DATA;
  if (!source || !Array.isArray(source.coverage) || !Array.isArray(source.reports) || !validIsoDate(source.meta?.updated)) {
    throw new Error(`${label}: RESEARCH_DATA không hợp lệ.`);
  }
  return source;
};

const gitShowResearch = (sha) => {
  const code = execFileSync("git", ["show", `${sha}:src/data/research-data.js`], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024
  });
  return parseResearch(code, `${sha}:src/data/research-data.js`);
};

const fail = (message) => {
  throw new Error(`Migration fail-closed: ${message}`);
};

const assertEqual = (actual, expected, label) => {
  if (actual !== expected) fail(`${label}=${JSON.stringify(actual)} khác giá trị đã kiểm chứng ${JSON.stringify(expected)}.`);
};

const snapshot = (item) => ({
  date: item.priceDate,
  close: item.close,
  ...snapshotTriggerState(item.action),
  eligibility: item.action?.eligibility || "unknown"
});

const buildEvent = (currentItem, previousItem, report) => ({
  id: `auto-${EXPECTED.ticker}-${EXPECTED.date}`,
  tradeId: `${EXPECTED.ticker}-${EXPECTED.date}`,
  type: "activated",
  mode: "automatic-eod",
  ticker: EXPECTED.ticker,
  date: EXPECTED.date,
  price: currentItem.close,
  zoneLow: currentItem.action.zoneLow,
  zoneHigh: currentItem.action.zoneHigh,
  zoneBasisDate: currentItem.action.basisDate,
  stop: finitePositive(currentItem.action.stop) ? currentItem.action.stop : null,
  targets: Array.isArray(currentItem.action.targets) ? currentItem.action.targets.filter(finitePositive) : [],
  activationRelation: activationRelation(currentItem.close, currentItem.action),
  confirmation: {
    trigger: RANGE_TRIGGER,
    priceTriggerPassed: true,
    eligibilityAtTrigger: "active",
    noHardVeto: true,
    lockedActionUnchangedSincePreviousEod: true,
    previousQuote: {
      date: previousItem.priceDate,
      close: previousItem.close,
      relation: "above"
    }
  },
  sourceUrl: currentItem.priceSource,
  note: "Tự động ghi nhận tín hiệu đã kích hoạt khi giá đóng cửa EOD cắt xuyên dưới cận trên và đóng dưới cận dưới của vùng mua đã khóa.",
  ...(validSourceUrl(currentItem.priceSourceSecondary) ? { sourceUrlSecondary: currentItem.priceSourceSecondary } : {}),
  reportId: report.id,
  reportFile: report.file
});

const run = async () => {
  const apply = process.argv.includes("--apply");
  const currentSource = parseResearch(await fs.readFile(RESEARCH_PATH, "utf8"), "src/data/research-data.js");
  const previousSource = gitShowResearch(PREVIOUS_EOD_COMMIT);
  const lockedCurrentSource = gitShowResearch(CURRENT_EOD_COMMIT);
  const ledger = JSON.parse(await fs.readFile(LEDGER_PATH, "utf8"));

  assertEqual(previousSource.meta.updated, EXPECTED.previousDate, "previous meta.updated");
  assertEqual(lockedCurrentSource.meta.updated, EXPECTED.date, "locked current meta.updated");
  assertEqual(currentSource.meta.updated, EXPECTED.date, "working current meta.updated");

  const previousItem = previousSource.coverage.find((item) => item.ticker === EXPECTED.ticker);
  const lockedCurrentItem = lockedCurrentSource.coverage.find((item) => item.ticker === EXPECTED.ticker);
  const currentItem = currentSource.coverage.find((item) => item.ticker === EXPECTED.ticker);
  if (!previousItem || !lockedCurrentItem || !currentItem) fail("TCH không tồn tại đủ trong các snapshot yêu cầu.");

  assertEqual(previousItem.priceDate, EXPECTED.previousDate, "previous TCH priceDate");
  assertEqual(previousItem.close, EXPECTED.previousClose, "previous TCH close");
  assertEqual(lockedCurrentItem.priceDate, EXPECTED.date, "locked TCH priceDate");
  assertEqual(lockedCurrentItem.close, EXPECTED.close, "locked TCH close");
  assertEqual(currentItem.priceDate, EXPECTED.date, "current TCH priceDate");
  assertEqual(currentItem.close, EXPECTED.close, "current TCH close");

  for (const item of [previousItem, lockedCurrentItem, currentItem]) {
    assertEqual(item.action?.zoneLow, EXPECTED.zoneLow, `${item.priceDate} zoneLow`);
    assertEqual(item.action?.zoneHigh, EXPECTED.zoneHigh, `${item.priceDate} zoneHigh`);
    assertEqual(item.action?.basisDate, EXPECTED.zoneBasisDate, `${item.priceDate} basisDate`);
    assertEqual(item.action?.eligibility, "active", `${item.priceDate} eligibility`);
  }

  if (!sameLockedTrigger(snapshot(previousItem), snapshot(currentItem))) fail("Vùng mua TCH không được khóa nhất quán giữa hai EOD.");
  if (!crossedLockedTrigger(previousItem.close, currentItem.close, currentItem.action)) fail("TCH không thỏa crossing buy-ceiling theo dữ liệu đã khóa.");
  assertEqual(activationRelation(currentItem.close, currentItem.action), "below-zone", "TCH activationRelation");

  if (!validSourceUrl(currentItem.priceSource) || !validSourceUrl(currentItem.priceSourceSecondary)) {
    fail("Nguồn giá TCH chính/phụ không hợp lệ.");
  }
  assertEqual(currentItem.priceSource, lockedCurrentItem.priceSource, "TCH primary source");
  assertEqual(currentItem.priceSourceSecondary, lockedCurrentItem.priceSourceSecondary, "TCH secondary source");

  const report = currentSource.reports.find((item) => item.id === EXPECTED.reportId && item.ticker === EXPECTED.ticker);
  if (!report) fail("Không tìm thấy báo cáo TCH đã khóa.");
  assertEqual(report.file, EXPECTED.reportFile, "TCH reportFile");
  assertEqual(currentItem.reportId, EXPECTED.reportId, "TCH coverage reportId");

  const eventId = `auto-${EXPECTED.ticker}-${EXPECTED.date}`;
  const existing = ledger.events.find((event) => event.id === eventId);
  if (existing) {
    const expectedEvent = buildEvent(currentItem, previousItem, report);
    if (JSON.stringify(existing) !== JSON.stringify(expectedEvent)) fail("Event TCH đã tồn tại nhưng nội dung khác event được tái tạo từ bằng chứng.");
    if (ledger.meta?.automation?.version !== 3 || ledger.meta?.automation?.trigger !== RANGE_TRIGGER) {
      fail("Event TCH đã có nhưng metadata automation chưa ở v3.");
    }
    process.stdout.write(`${JSON.stringify({ status: "already-migrated", event: expectedEvent }, null, 2)}\n`);
    return;
  }

  if (ledger.events.some((event) => event.ticker === EXPECTED.ticker && event.type === "activated")) {
    fail("Đã có activation TCH khác; không tự ghi thêm.");
  }

  const event = buildEvent(currentItem, previousItem, report);
  assertEqual(event.stop, null, "TCH stop");
  assertEqual(event.targets.length, 0, "TCH targets.length");

  const next = structuredClone(ledger);
  next.meta.automation.version = 3;
  next.meta.automation.trigger = RANGE_TRIGGER;
  next.events.push(event);

  const projection = projectTradeLedger(next, currentSource.coverage);
  if (projection.issues.length) fail(`Projector phát hiện ${projection.issues.length} lỗi sau migration: ${JSON.stringify(projection.issues)}`);
  const projectedTch = projection.positions.find((position) => position.tradeId === event.tradeId);
  if (!projectedTch) fail("Projector không tạo được vị thế tham chiếu TCH sau migration.");
  assertEqual(projectedTch.activationRelation, "below-zone", "projected TCH activationRelation");

  if (apply) await fs.writeFile(LEDGER_PATH, `${JSON.stringify(next, null, 2)}\n`, "utf8");
  process.stdout.write(`${JSON.stringify({
    status: apply ? "migrated" : "verified-dry-run",
    evidence: {
      previousCommit: PREVIOUS_EOD_COMMIT,
      currentCommit: CURRENT_EOD_COMMIT,
      previousDate: EXPECTED.previousDate,
      previousClose: EXPECTED.previousClose,
      date: EXPECTED.date,
      close: EXPECTED.close,
      zoneLow: EXPECTED.zoneLow,
      zoneHigh: EXPECTED.zoneHigh,
      zoneBasisDate: EXPECTED.zoneBasisDate
    },
    event
  }, null, 2)}\n`);
};

run().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});

#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath, pathToFileURL } from "node:url";
import { projectTradeLedger, validIsoDate, validSourceUrl } from "../src/scripts/trade-ledger.mjs";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const researchPath = path.join(repositoryRoot, "src/data/research-data.js");
const ledgerPath = path.join(repositoryRoot, "src/data/trade-ledger.json");
const TRIGGER_ZONE = "eod-close-transitioned-into-locked-zone";
const TRIGGER_THRESHOLD = "eod-close-transitioned-into-locked-threshold";
const TICKER = /^[A-Z0-9]{2,8}$/;
const ONE_SIDED_TRIGGER_TYPES = new Set(["at-or-below", "at-or-above"]);

const finitePositive = (value) => Number.isFinite(value) && value > 0;
const clone = (value) => JSON.parse(JSON.stringify(value));
const oneSidedTrigger = (action = {}) => ONE_SIDED_TRIGGER_TYPES.has(action.triggerType) && finitePositive(action.triggerPrice)
  ? { type: action.triggerType, price: action.triggerPrice }
  : null;

export const quoteRelation = (close, action = {}) => {
  if (!finitePositive(close)) return "unavailable";
  const trigger = oneSidedTrigger(action);
  if (trigger?.type === "at-or-below") return close <= trigger.price ? "inside" : "above";
  if (trigger?.type === "at-or-above") return close >= trigger.price ? "inside" : "below";
  if (!finitePositive(action.zoneLow) || !finitePositive(action.zoneHigh) || action.zoneLow > action.zoneHigh) return "unavailable";
  if (close < action.zoneLow) return "below";
  if (close > action.zoneHigh) return "above";
  return "inside";
};

const snapshotFor = (item) => {
  const snapshot = {
    date: item.priceDate,
    close: item.close,
    relation: quoteRelation(item.close, item.action),
    zoneLow: finitePositive(item.action?.zoneLow) ? item.action.zoneLow : null,
    zoneHigh: finitePositive(item.action?.zoneHigh) ? item.action.zoneHigh : null,
    zoneBasisDate: validIsoDate(item.action?.basisDate) ? item.action.basisDate : null,
    eligibility: typeof item.action?.eligibility === "string" ? item.action.eligibility : "unknown"
  };
  const trigger = oneSidedTrigger(item.action);
  if (trigger) {
    snapshot.triggerType = trigger.type;
    snapshot.triggerPrice = trigger.price;
  }
  return snapshot;
};

const sameLockedAction = (previous, current) => {
  if (!previous || previous.zoneBasisDate !== current.zoneBasisDate || !validIsoDate(current.zoneBasisDate)) return false;
  if (current.triggerType) {
    return previous.triggerType === current.triggerType
      && previous.triggerPrice === current.triggerPrice
      && finitePositive(current.triggerPrice);
  }
  return previous.zoneLow === current.zoneLow
    && previous.zoneHigh === current.zoneHigh
    && finitePositive(current.zoneLow)
    && finitePositive(current.zoneHigh);
};

const latestReportByTicker = (reports = []) => {
  const result = new Map();
  [...reports]
    .filter((report) => report && TICKER.test(report.ticker || "") && validIsoDate(report.date))
    .sort((a, b) => b.date.localeCompare(a.date) || String(a.id || "").localeCompare(String(b.id || "")))
    .forEach((report) => {
      if (!result.has(report.ticker)) result.set(report.ticker, report);
    });
  return result;
};

const validateInputs = (source, ledger) => {
  if (!source || !Array.isArray(source.coverage) || !Array.isArray(source.reports) || !validIsoDate(source.meta?.updated)) {
    throw new Error("RESEARCH_DATA phải có meta.updated, coverage và reports hợp lệ.");
  }
  if (!ledger || !Array.isArray(ledger.events) || ledger.meta?.schemaVersion !== 2 || ledger.meta?.automation?.enabled !== true) {
    throw new Error("Sổ giao dịch phải dùng schemaVersion 2 và bật automation.");
  }
  if (!validIsoDate(ledger.meta.startedAt) || !validIsoDate(ledger.meta.automation.baselineDate)) {
    throw new Error("Sổ giao dịch thiếu startedAt hoặc baselineDate hợp lệ.");
  }
  const projection = projectTradeLedger(ledger, source.coverage);
  if (projection.issues.length) {
    throw new Error(`Sổ hiện tại có ${projection.issues.length} sự kiện không hợp lệ; dừng tự động để bảo toàn lịch sử.`);
  }
};

const automationEvent = (item, previous, report) => {
  const trigger = oneSidedTrigger(item.action);
  const event = {
    id: `auto-${item.ticker}-${item.priceDate}`,
    tradeId: `${item.ticker}-${item.priceDate}`,
    type: "activated",
    mode: "automatic-eod",
    ticker: item.ticker,
    date: item.priceDate,
    price: item.close,
    zoneLow: trigger ? null : item.action.zoneLow,
    zoneHigh: trigger ? null : item.action.zoneHigh,
    zoneBasisDate: item.action.basisDate,
    stop: finitePositive(item.action.stop) ? item.action.stop : null,
    targets: Array.isArray(item.action.targets) ? item.action.targets.filter(finitePositive) : [],
    confirmation: {
      trigger: trigger ? TRIGGER_THRESHOLD : TRIGGER_ZONE,
      priceTriggerPassed: true,
      eligibilityAtTrigger: "active",
      noHardVeto: true,
      lockedActionUnchangedSincePreviousEod: true,
      previousQuote: {
        date: previous.date,
        close: previous.close,
        relation: previous.relation
      }
    },
    sourceUrl: item.priceSource,
    note: trigger
      ? "Tự động kích hoạt theo giá đóng cửa EOD và ngưỡng một phía đã khóa; điều kiện định tính không được máy tự suy diễn."
      : "Tự động kích hoạt theo giá đóng cửa EOD; điều kiện định tính không được máy tự suy diễn."
  };
  if (trigger) {
    event.triggerType = trigger.type;
    event.triggerPrice = trigger.price;
  }
  if (validSourceUrl(item.priceSourceSecondary)) event.sourceUrlSecondary = item.priceSourceSecondary;
  if (report?.id) event.reportId = report.id;
  if (report?.file) event.reportFile = report.file;
  return event;
};

export const processEodLedger = (source, ledger) => {
  validateInputs(source, ledger);
  const next = clone(ledger);
  const automation = next.meta.automation;
  const snapshots = automation.lastEvaluatedQuotes && typeof automation.lastEvaluatedQuotes === "object" && !Array.isArray(automation.lastEvaluatedQuotes)
    ? automation.lastEvaluatedQuotes
    : {};
  automation.lastEvaluatedQuotes = snapshots;

  const seenTickers = new Set();
  const reportsByTicker = latestReportByTicker(source.reports);
  const projection = projectTradeLedger(next, source.coverage);
  const openTickers = new Set(projection.positions.filter((position) => position.status !== "closed").map((position) => position.ticker));
  const eventIds = new Set(next.events.map((event) => event.id));
  const stats = {
    evaluated: 0,
    initialized: 0,
    activated: 0,
    unchanged: 0,
    rebased: 0,
    blocked: 0,
    stale: 0,
    skipped: 0
  };
  const warnings = [];

  source.coverage.forEach((item) => {
    if (!item || !TICKER.test(item.ticker || "") || seenTickers.has(item.ticker)) {
      throw new Error(`Coverage có mã thiếu, sai định dạng hoặc trùng lặp: ${item?.ticker || "—"}.`);
    }
    seenTickers.add(item.ticker);
    if (!finitePositive(item.close) || !validIsoDate(item.priceDate) || !validSourceUrl(item.priceSource)) {
      stats.skipped += 1;
      warnings.push(`${item.ticker}: bỏ qua vì thiếu giá, ngày EOD hoặc URL nguồn hợp lệ.`);
      return;
    }
    if (item.priceDate > source.meta.updated) {
      throw new Error(`${item.ticker}: priceDate ${item.priceDate} mới hơn meta.updated ${source.meta.updated}.`);
    }

    stats.evaluated += 1;
    const previous = snapshots[item.ticker];
    const current = snapshotFor(item);
    if (!previous) {
      snapshots[item.ticker] = current;
      stats.initialized += 1;
      return;
    }
    if (!validIsoDate(previous.date) || !finitePositive(previous.close)) {
      throw new Error(`${item.ticker}: snapshot trước đó không hợp lệ.`);
    }
    if (item.priceDate < previous.date) {
      stats.stale += 1;
      warnings.push(`${item.ticker}: bỏ qua giá ${item.priceDate} vì cũ hơn snapshot ${previous.date}.`);
      return;
    }
    if (item.priceDate === previous.date) {
      if (JSON.stringify(previous) === JSON.stringify(current)) {
        stats.unchanged += 1;
      } else {
        snapshots[item.ticker] = current;
        stats.rebased += 1;
        warnings.push(`${item.ticker}: dữ liệu cùng phiên đã đổi; chỉ cập nhật đường cơ sở, không kích hoạt.`);
      }
      return;
    }

    const priceEnteredZone = previous.relation !== "inside" && current.relation === "inside";
    const eligible = item.action?.eligibility === "active";
    const lockedActionUnchanged = sameLockedAction(previous, current);
    const canStart = item.priceDate >= next.meta.startedAt;
    const hasOpenPosition = openTickers.has(item.ticker);
    const shouldActivate = priceEnteredZone && eligible && lockedActionUnchanged && canStart && !hasOpenPosition;

    if (shouldActivate) {
      const event = automationEvent(item, previous, reportsByTicker.get(item.ticker));
      if (!eventIds.has(event.id)) {
        next.events.push(event);
        eventIds.add(event.id);
        openTickers.add(item.ticker);
        stats.activated += 1;
      } else {
        stats.unchanged += 1;
      }
    } else if (priceEnteredZone) {
      stats.blocked += 1;
      const reason = !eligible
        ? `eligibility=${item.action?.eligibility || "unknown"}`
        : !lockedActionUnchanged
          ? current.triggerType ? "ngưỡng kích hoạt đã thay đổi" : "vùng mua đã thay đổi"
          : !canStart
            ? "trước ngày bắt đầu sổ"
            : "đã có vị thế đang mở";
      warnings.push(`${item.ticker}: giá vào vùng nhưng không kích hoạt (${reason}).`);
    } else {
      stats.unchanged += 1;
    }
    snapshots[item.ticker] = current;
  });

  const evaluatedDates = Object.values(snapshots).map((item) => item?.date).filter(validIsoDate);
  automation.lastEvaluatedAt = evaluatedDates.length
    ? evaluatedDates.sort((a, b) => b.localeCompare(a))[0]
    : automation.baselineDate;

  const finalProjection = projectTradeLedger(next, source.coverage);
  if (finalProjection.issues.length) {
    throw new Error(`Bộ xử lý tạo ra ${finalProjection.issues.length} sự kiện không hợp lệ; hủy cập nhật.`);
  }
  const changed = JSON.stringify(next) !== JSON.stringify(ledger);
  return { ledger: next, changed, stats, warnings };
};

export const loadResearchData = async (filePath = researchPath) => {
  const code = await fs.readFile(filePath, "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename: filePath });
  return sandbox.window.RESEARCH_DATA;
};

const runCli = async () => {
  const args = new Set(process.argv.slice(2));
  const source = await loadResearchData();
  const ledger = JSON.parse(await fs.readFile(ledgerPath, "utf8"));
  const result = processEodLedger(source, ledger);
  if (result.changed && !args.has("--dry-run") && !args.has("--check")) {
    await fs.writeFile(ledgerPath, `${JSON.stringify(result.ledger, null, 2)}\n`, "utf8");
  }
  result.warnings.forEach((warning) => process.stderr.write(`CẢNH BÁO: ${warning}\n`));
  process.stdout.write(`EOD ledger: ${JSON.stringify({ changed: result.changed, ...result.stats })}\n`);
  if (args.has("--check") && result.changed) process.exitCode = 1;
};

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  runCli().catch((error) => {
    process.stderr.write(`EOD ledger failed: ${error.message}\n`);
    process.exitCode = 1;
  });
}

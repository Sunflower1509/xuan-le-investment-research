#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath, pathToFileURL } from "node:url";
import { projectTradeLedger, validIsoDate, validSourceUrl } from "../src/scripts/trade-ledger.mjs";
import {
  activationRelation,
  classifyPrice,
  crossedLockedTrigger,
  finitePositive,
  parseActionTrigger,
  sameLockedTrigger,
  snapshotTriggerState
} from "../src/scripts/action-trigger.mjs";
import { evaluateAutomaticExit, TRADE_EXIT_POLICY } from "../src/scripts/trade-exit-policy.mjs";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const researchPath = path.join(repositoryRoot, "src/data/research-data.js");
const ledgerPath = path.join(repositoryRoot, "src/data/trade-ledger.json");
const TRIGGER_ZONE = "eod-close-crossed-locked-buy-ceiling";
const TRIGGER_THRESHOLD = "eod-close-transitioned-into-locked-threshold";
const TICKER = /^[A-Z0-9]{2,8}$/;

const clone = (value) => JSON.parse(JSON.stringify(value));

export const quoteRelation = (close, action = {}) => classifyPrice(close, action).relation;

const snapshotFor = (item) => ({
  date: item.priceDate,
  close: item.close,
  relation: classifyPrice(item.close, item.action).relation,
  zoneLow: snapshotTriggerState(item.action).zoneLow,
  zoneHigh: snapshotTriggerState(item.action).zoneHigh,
  zoneBasisDate: snapshotTriggerState(item.action).zoneBasisDate,
  eligibility: typeof item.action?.eligibility === "string" ? item.action.eligibility : "unknown",
  ...(snapshotTriggerState(item.action).triggerType ? { triggerType: snapshotTriggerState(item.action).triggerType, triggerPrice: snapshotTriggerState(item.action).triggerPrice } : {})
});

const automaticCloseEvent = (position, decision, quote) => {
  const reasonText = decision.reason === "stoploss"
    ? `Giá đóng cửa EOD ${decision.price} chạm/thủng stop ${decision.triggerPrice} đã khóa.`
    : decision.reason === "zone_floor_break"
      ? `Giá đóng cửa EOD ${decision.price} nằm dưới cận dưới vùng mua ${decision.triggerPrice} đã khóa.`
      : `Giá đóng cửa EOD ${decision.price} đạt/vượt target gần nhất ${decision.triggerPrice} đã khóa.`;

  const event = {
    id: `auto-close-${position.tradeId}-${decision.date}-${decision.reason}`,
    tradeId: position.tradeId,
    type: "closed",
    mode: "automatic-eod",
    ticker: position.ticker,
    date: decision.date,
    price: decision.price,
    reason: decision.reason,
    sourceUrl: decision.sourceUrl || quote?.priceSource,
    exitPolicy: {
      version: TRADE_EXIT_POLICY.version,
      basis: TRADE_EXIT_POLICY.basis,
      executionPrice: TRADE_EXIT_POLICY.executionPrice,
      rule: decision.rule,
      triggerPrice: decision.triggerPrice
    },
    note: `${reasonText} Đóng toàn bộ phần vị thế còn lại theo Trade Exit Policy v${TRADE_EXIT_POLICY.version}; giá chốt tham chiếu là giá đóng cửa EOD, không giả định khớp đúng tại ngưỡng.`
  };
  if (validSourceUrl(decision.sourceUrlSecondary || quote?.priceSourceSecondary)) {
    event.sourceUrlSecondary = decision.sourceUrlSecondary || quote.priceSourceSecondary;
  }
  return event;
};

const incrementExitStats = (stats, reason) => {
  stats.closed += 1;
  if (reason === "target") stats.closedTarget += 1;
  else if (reason === "stoploss") stats.closedStop += 1;
  else if (reason === "zone_floor_break") stats.closedZoneFloor += 1;
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
  const trigger = parseActionTrigger(item.action);
  const oneSided = trigger && trigger.kind !== "range";
  const activationState = activationRelation(item.close, item.action);
  const event = {
    id: `auto-${item.ticker}-${item.priceDate}`,
    tradeId: `${item.ticker}-${item.priceDate}`,
    type: "activated",
    mode: "automatic-eod",
    ticker: item.ticker,
    date: item.priceDate,
    price: item.close,
    zoneLow: oneSided ? null : item.action.zoneLow,
    zoneHigh: oneSided ? null : item.action.zoneHigh,
    zoneBasisDate: item.action.basisDate,
    stop: finitePositive(item.action.stop) ? item.action.stop : null,
    targets: Array.isArray(item.action.targets) ? item.action.targets.filter(finitePositive) : [],
    activationRelation: activationState,
    confirmation: {
      trigger: oneSided ? TRIGGER_THRESHOLD : TRIGGER_ZONE,
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
    note: oneSided
      ? "Tự động kích hoạt theo giá đóng cửa EOD và ngưỡng một phía đã khóa; điều kiện định tính không được máy tự suy diễn."
      : activationState === "inside-zone"
        ? "Tự động kích hoạt khi giá đóng cửa EOD cắt từ trên xuống vùng mua đã khóa."
        : activationState === "below-zone"
          ? "Tự động ghi nhận tín hiệu đã kích hoạt khi giá đóng cửa EOD cắt xuyên dưới cận trên và đóng dưới cận dưới của vùng mua đã khóa."
          : "Tự động ghi nhận tín hiệu giá đã kích hoạt nhưng giá đóng cửa EOD đồng thời vi phạm mức dừng lỗ đã khóa; không đồng nghĩa với vị thế mua còn hiệu lực."
  };
  if (oneSided) {
    event.triggerType = trigger.kind;
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
  const quoteByTicker = new Map(source.coverage.map((item) => [item.ticker, item]));
  const eventIds = new Set(next.events.map((event) => event.id));
  const stats = {
    evaluated: 0,
    initialized: 0,
    activated: 0,
    activatedAndClosed: 0,
    closed: 0,
    closedTarget: 0,
    closedStop: 0,
    closedZoneFloor: 0,
    unchanged: 0,
    rebased: 0,
    blocked: 0,
    stale: 0,
    skipped: 0
  };
  const warnings = [];
  const closedThisRun = new Set();

  // Exit gate runs before entry activation. This prevents stale open positions
  // from blocking the ledger and gives hard risk exits deterministic precedence.
  let projection = projectTradeLedger(next, source.coverage);
  for (const position of projection.positions.filter((item) => item.status !== "closed")) {
    const quote = quoteByTicker.get(position.ticker);
    const decision = evaluateAutomaticExit(position, quote);
    if (!decision) continue;
    const event = automaticCloseEvent(position, decision, quote);
    if (eventIds.has(event.id)) continue;
    next.events.push(event);
    eventIds.add(event.id);
    closedThisRun.add(position.ticker);
    incrementExitStats(stats, decision.reason);
  }

  projection = projectTradeLedger(next, source.coverage);
  const openTickers = new Set(projection.positions.filter((position) => position.status !== "closed").map((position) => position.ticker));

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

    const priceCrossedTrigger = crossedLockedTrigger(previous.close, item.close, item.action);
    const eligible = item.action?.eligibility === "active";
    const lockedActionUnchanged = sameLockedTrigger(previous, current);
    const canStart = item.priceDate >= next.meta.startedAt;
    const hasOpenPosition = openTickers.has(item.ticker);
    const closedEarlierThisEod = closedThisRun.has(item.ticker);
    const shouldActivate = priceCrossedTrigger && eligible && lockedActionUnchanged && canStart && !hasOpenPosition && !closedEarlierThisEod;

    if (shouldActivate) {
      const event = automationEvent(item, previous, reportsByTicker.get(item.ticker));
      if (!eventIds.has(event.id)) {
        next.events.push(event);
        eventIds.add(event.id);
        stats.activated += 1;

        // If a downward gap crosses the entire buy zone (or stop) on the same
        // EOD that creates the audit activation, close immediately instead of
        // carrying an invalid position into the open ledger.
        const activationPosition = {
          tradeId: event.tradeId,
          ticker: event.ticker,
          status: "open",
          remainingFraction: 1,
          activatedAt: event.date,
          lastEventDate: event.date,
          zoneLow: event.zoneLow,
          zoneHigh: event.zoneHigh,
          stop: event.stop,
          targets: event.targets
        };
        const immediateExit = evaluateAutomaticExit(activationPosition, item);
        if (immediateExit) {
          const closeEvent = automaticCloseEvent(activationPosition, immediateExit, item);
          if (!eventIds.has(closeEvent.id)) {
            next.events.push(closeEvent);
            eventIds.add(closeEvent.id);
            closedThisRun.add(item.ticker);
            incrementExitStats(stats, immediateExit.reason);
            stats.activatedAndClosed += 1;
          }
        } else {
          openTickers.add(item.ticker);
        }
      } else {
        stats.unchanged += 1;
      }
    } else if (priceCrossedTrigger) {
      stats.blocked += 1;
      const reason = !eligible
        ? `eligibility=${item.action?.eligibility || "unknown"}`
        : !lockedActionUnchanged
          ? current.triggerType ? "ngưỡng kích hoạt đã thay đổi" : "vùng mua đã thay đổi"
          : !canStart
            ? "trước ngày bắt đầu sổ"
            : closedEarlierThisEod
              ? "đã tự động đóng vị thế trong cùng EOD"
              : "đã có vị thế đang mở";
      warnings.push(`${item.ticker}: giá cắt qua ngưỡng kích hoạt nhưng không ghi nhận (${reason}).`);
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

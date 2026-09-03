#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import {
  activationRelation,
  classifyPrice,
  crossedLockedTrigger,
  finitePositive,
  sameLockedTrigger,
  snapshotTriggerState
} from "../src/scripts/action-trigger.mjs";
import { validIsoDate } from "../src/scripts/trade-ledger.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RESEARCH_PATH = "src/data/research-data.js";
const LEDGER_PATH = path.join(root, "src/data/trade-ledger.json");

const argValue = (name, fallback = null) => {
  const index = process.argv.indexOf(name);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
};

const git = (args) => execFileSync("git", args, {
  cwd: root,
  encoding: "utf8",
  maxBuffer: 64 * 1024 * 1024
}).trim();

const parseResearch = (code, label) => {
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename: label });
  const source = sandbox.window.RESEARCH_DATA;
  if (!source || !Array.isArray(source.coverage) || !validIsoDate(source.meta?.updated)) {
    throw new Error(`${label}: RESEARCH_DATA không hợp lệ.`);
  }
  return source;
};

const snapshotOf = (item) => ({
  date: item.priceDate,
  close: item.close,
  relation: classifyPrice(item.close, item.action).relation,
  ...snapshotTriggerState(item.action),
  eligibility: typeof item.action?.eligibility === "string" ? item.action.eligibility : "unknown"
});

const loadHistoricalSnapshots = (baselineDate, endDate) => {
  const commits = git(["log", "--format=%H", "--reverse", "--", RESEARCH_PATH])
    .split(/\r?\n/)
    .filter(Boolean);
  const byDate = new Map();
  const parseErrors = [];

  for (const sha of commits) {
    let code;
    try {
      code = git(["show", `${sha}:${RESEARCH_PATH}`]);
    } catch (error) {
      parseErrors.push({ sha, error: `Không đọc được ${RESEARCH_PATH}` });
      continue;
    }
    try {
      const source = parseResearch(code, `${sha}:${RESEARCH_PATH}`);
      const date = source.meta.updated;
      if (date < baselineDate || date > endDate) continue;
      byDate.set(date, { sha, source });
    } catch (error) {
      parseErrors.push({ sha, error: String(error?.message || error) });
    }
  }

  return {
    snapshots: [...byDate.entries()]
      .map(([date, value]) => ({ date, ...value }))
      .sort((a, b) => a.date.localeCompare(b.date)),
    parseErrors
  };
};

const firstActualActivationByTicker = (events = []) => {
  const map = new Map();
  [...events]
    .filter((event) => event?.type === "activated" && event?.ticker && validIsoDate(event.date))
    .sort((a, b) => a.date.localeCompare(b.date) || String(a.id).localeCompare(String(b.id)))
    .forEach((event) => {
      if (!map.has(event.ticker)) map.set(event.ticker, event);
    });
  return map;
};

const audit = (snapshots, ledger) => {
  const startedAt = ledger.meta.startedAt;
  const actualByTicker = firstActualActivationByTicker(ledger.events);
  const firstCandidateByTicker = new Map();
  const blocked = [];
  const unverifiableIntervals = [];

  for (let index = 1; index < snapshots.length; index += 1) {
    const previousSnapshot = snapshots[index - 1];
    const currentSnapshot = snapshots[index];
    if (currentSnapshot.date < startedAt) continue;

    const previousByTicker = new Map(previousSnapshot.source.coverage.map((item) => [item.ticker, item]));
    const currentByTicker = new Map(currentSnapshot.source.coverage.map((item) => [item.ticker, item]));

    for (const [ticker, currentItem] of currentByTicker) {
      if (firstCandidateByTicker.has(ticker)) continue;
      const previousItem = previousByTicker.get(ticker);
      if (!previousItem) continue;
      if (!finitePositive(previousItem.close) || !finitePositive(currentItem.close)) continue;
      if (!validIsoDate(previousItem.priceDate) || !validIsoDate(currentItem.priceDate)) continue;

      const previous = snapshotOf(previousItem);
      const current = snapshotOf(currentItem);
      const crossed = crossedLockedTrigger(previous.close, currentItem.close, currentItem.action);
      if (!crossed) continue;

      const basisLockedByPreviousEod = validIsoDate(previous.zoneBasisDate)
        && previous.zoneBasisDate <= previousSnapshot.date;
      const gates = {
        active: currentItem.action?.eligibility === "active",
        lockedTriggerUnchanged: sameLockedTrigger(previous, current),
        basisLockedByPreviousEod,
        afterLedgerStart: currentSnapshot.date >= startedAt
      };

      if (!Object.values(gates).every(Boolean)) {
        blocked.push({
          ticker,
          previousDate: previousSnapshot.date,
          currentDate: currentSnapshot.date,
          previousClose: previousItem.close,
          currentClose: currentItem.close,
          relationBefore: previous.relation,
          relationAfter: current.relation,
          gates
        });
        continue;
      }

      const candidate = {
        ticker,
        previousDate: previousSnapshot.date,
        date: currentSnapshot.date,
        previousClose: previousItem.close,
        close: currentItem.close,
        relationBefore: previous.relation,
        relationAfter: current.relation,
        activationRelation: activationRelation(currentItem.close, currentItem.action),
        zoneLow: current.zoneLow,
        zoneHigh: current.zoneHigh,
        triggerType: current.triggerType || null,
        triggerPrice: current.triggerPrice || null,
        zoneBasisDate: current.zoneBasisDate,
        previousCommit: previousSnapshot.sha,
        currentCommit: currentSnapshot.sha
      };
      firstCandidateByTicker.set(ticker, candidate);
    }

    const previousPriceDates = new Set(previousSnapshot.source.coverage.map((item) => item?.priceDate).filter(validIsoDate));
    const currentPriceDates = new Set(currentSnapshot.source.coverage.map((item) => item?.priceDate).filter(validIsoDate));
    if (previousPriceDates.size !== 1 || currentPriceDates.size !== 1) {
      unverifiableIntervals.push({
        previousDate: previousSnapshot.date,
        currentDate: currentSnapshot.date,
        reason: "Snapshot không khóa về đúng một priceDate duy nhất."
      });
    }
  }

  const candidates = [...firstCandidateByTicker.values()].sort((a, b) => a.date.localeCompare(b.date) || a.ticker.localeCompare(b.ticker));
  const matched = [];
  const missing = [];
  const late = [];
  const actualEarlier = [];

  for (const candidate of candidates) {
    const actual = actualByTicker.get(candidate.ticker);
    if (!actual) {
      missing.push(candidate);
      continue;
    }
    const comparison = {
      ...candidate,
      actualDate: actual.date,
      actualPrice: actual.price,
      actualEventId: actual.id
    };
    if (actual.date === candidate.date) matched.push(comparison);
    else if (actual.date > candidate.date) late.push(comparison);
    else actualEarlier.push(comparison);
  }

  const noCandidateForActual = [...actualByTicker.values()]
    .filter((event) => !firstCandidateByTicker.has(event.ticker))
    .map((event) => ({
      ticker: event.ticker,
      actualDate: event.date,
      actualPrice: event.price,
      actualEventId: event.id,
      reason: "Không tái tạo được candidate từ chuỗi snapshot Git đang lưu; không tự kết luận event sai."
    }));

  return {
    candidateCount: candidates.length,
    candidates,
    matched,
    missing,
    late,
    actualEarlier,
    noCandidateForActual,
    blocked,
    unverifiableIntervals
  };
};

const main = async () => {
  const ledger = JSON.parse(await fs.readFile(LEDGER_PATH, "utf8"));
  if (!validIsoDate(ledger.meta?.startedAt) || !validIsoDate(ledger.meta?.automation?.baselineDate)) {
    throw new Error("Ledger thiếu startedAt/baselineDate hợp lệ.");
  }
  const currentCode = await fs.readFile(path.join(root, RESEARCH_PATH), "utf8");
  const currentSource = parseResearch(currentCode, RESEARCH_PATH);
  const history = loadHistoricalSnapshots(ledger.meta.automation.baselineDate, currentSource.meta.updated);
  if (history.snapshots.length < 2) throw new Error("Không đủ snapshot lịch sử để audit.");

  const result = audit(history.snapshots, ledger);
  const report = {
    generatedFromGitHistory: true,
    policy: "Không nội suy giá hoặc ngày bị thiếu; chỉ kết luận từ snapshot đã commit và trigger đã khóa từ EOD trước.",
    baselineDate: ledger.meta.automation.baselineDate,
    startedAt: ledger.meta.startedAt,
    throughDate: currentSource.meta.updated,
    snapshotDates: history.snapshots.map((entry) => entry.date),
    parseErrors: history.parseErrors,
    ...result
  };

  const text = `${JSON.stringify(report, null, 2)}\n`;
  const reportPath = argValue("--report", null);
  if (reportPath) await fs.writeFile(path.resolve(root, reportPath), text, "utf8");
  process.stdout.write(text);
};

main().catch((error) => {
  process.stderr.write(`Historical trigger audit failed: ${error.message}\n`);
  process.exitCode = 1;
});

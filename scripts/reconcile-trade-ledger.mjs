#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { classifyPrice, sameLockedTrigger, snapshotTriggerState } from "../src/scripts/action-trigger.mjs";
import { projectTradeLedger, validIsoDate } from "../src/scripts/trade-ledger.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const argValue = (name, fallback) => {
  const index = process.argv.indexOf(name);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
};

const loadResearch = async (relativePath) => {
  const code = await fs.readFile(path.resolve(root, relativePath), "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename: relativePath });
  return sandbox.window.RESEARCH_DATA;
};

const loadJson = async (relativePath) => JSON.parse(await fs.readFile(path.resolve(root, relativePath), "utf8"));

const currentSnapshot = (item) => ({
  date: item.priceDate,
  close: item.close,
  relation: classifyPrice(item.close, item.action).relation,
  ...snapshotTriggerState(item.action),
  eligibility: typeof item.action?.eligibility === "string" ? item.action.eligibility : "unknown"
});

export const reconcileTradeLedger = (source, before, after) => {
  if (!source || !Array.isArray(source.coverage) || !validIsoDate(source.meta?.updated)) {
    throw new Error("RESEARCH_DATA không hợp lệ cho reconciliation.");
  }
  if (!before || !after || !Array.isArray(before.events) || !Array.isArray(after.events)) {
    throw new Error("Ledger trước/sau không hợp lệ cho reconciliation.");
  }

  const beforeProjection = projectTradeLedger(before, source.coverage);
  if (beforeProjection.issues.length) throw new Error(`Ledger trước xử lý có ${beforeProjection.issues.length} lỗi.`);
  const afterProjection = projectTradeLedger(after, source.coverage);
  if (afterProjection.issues.length) throw new Error(`Ledger sau xử lý có ${afterProjection.issues.length} lỗi.`);

  const openTickers = new Set(beforeProjection.positions.filter((position) => position.status !== "closed").map((position) => position.ticker));
  const previousSnapshots = before.meta?.automation?.lastEvaluatedQuotes || {};
  const beforeEventIds = new Set(before.events.map((event) => event.id));
  const expected = [];
  const blocked = [];

  for (const item of source.coverage) {
    const previous = previousSnapshots[item.ticker];
    if (!previous || !validIsoDate(previous.date) || !Number.isFinite(previous.close) || !validIsoDate(item.priceDate)) continue;
    if (item.priceDate <= previous.date) continue;

    const current = currentSnapshot(item);
    const priceEntered = previous.relation !== "inside" && current.relation === "inside";
    if (!priceEntered) continue;

    const gates = {
      active: item.action?.eligibility === "active",
      locked: sameLockedTrigger(previous, current),
      afterStart: !validIsoDate(after.meta?.startedAt) || item.priceDate >= after.meta.startedAt,
      noOpenPosition: !openTickers.has(item.ticker)
    };

    if (Object.values(gates).every(Boolean)) {
      expected.push({
        id: `auto-${item.ticker}-${item.priceDate}`,
        ticker: item.ticker,
        date: item.priceDate,
        close: item.close,
        relationBefore: previous.relation,
        relationAfter: current.relation
      });
    } else {
      blocked.push({ ticker: item.ticker, date: item.priceDate, gates });
    }
  }

  const actual = after.events
    .filter((event) => !beforeEventIds.has(event.id) && event.type === "activated" && event.mode === "automatic-eod")
    .map((event) => ({ id: event.id, ticker: event.ticker, date: event.date, close: event.price }));

  const expectedIds = new Set(expected.map((entry) => entry.id));
  const actualIds = new Set(actual.map((entry) => entry.id));
  const missing = expected.filter((entry) => !actualIds.has(entry.id));
  const unexpected = actual.filter((entry) => !expectedIds.has(entry.id));

  const snapshotMismatches = [];
  const afterSnapshots = after.meta?.automation?.lastEvaluatedQuotes || {};
  for (const item of source.coverage) {
    const snapshot = afterSnapshots[item.ticker];
    if (!snapshot || snapshot.date !== item.priceDate || snapshot.close !== item.close) continue;
    const expectedRelation = classifyPrice(item.close, item.action).relation;
    if (snapshot.relation !== expectedRelation) {
      snapshotMismatches.push({ ticker: item.ticker, expectedRelation, actualRelation: snapshot.relation });
    }
  }

  for (const entry of actual) {
    const item = source.coverage.find((candidate) => candidate.ticker === entry.ticker);
    if (!item || entry.date !== item.priceDate || entry.close !== item.close) {
      unexpected.push({ ...entry, reason: "event không khớp quote EOD hiện tại" });
    }
  }

  const ok = missing.length === 0 && unexpected.length === 0 && snapshotMismatches.length === 0;
  return { ok, expected, actual, missing, unexpected, blocked, snapshotMismatches };
};

const runCli = async () => {
  const researchPath = argValue("--research", "src/data/research-data.js");
  const beforePath = argValue("--before", "src/data/trade-ledger.before.json");
  const afterPath = argValue("--after", "src/data/trade-ledger.json");
  const reportPath = argValue("--report", null);
  const source = await loadResearch(researchPath);
  const before = await loadJson(beforePath);
  const after = await loadJson(afterPath);
  const result = reconcileTradeLedger(source, before, after);
  const text = `${JSON.stringify(result, null, 2)}\n`;
  if (reportPath) await fs.writeFile(path.resolve(root, reportPath), text, "utf8");
  process.stdout.write(text);
  if (!result.ok) process.exitCode = 2;
};

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  runCli().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

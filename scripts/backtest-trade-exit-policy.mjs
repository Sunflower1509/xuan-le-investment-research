#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { projectTradeLedger } from "../src/scripts/trade-ledger.mjs";
import { evaluateAutomaticExit, TRADE_EXIT_POLICY } from "../src/scripts/trade-exit-policy.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const argValue = (name, fallback = null) => {
  const index = process.argv.indexOf(name);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
};

const loadResearch = async (relativePath) => {
  const code = await fs.readFile(path.resolve(root, relativePath), "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename: relativePath });
  return sandbox.window.RESEARCH_DATA;
};

const loadLedger = async (relativePath) => JSON.parse(await fs.readFile(path.resolve(root, relativePath), "utf8"));

export const backtestCurrentExitPolicy = (source, ledger) => {
  const projection = projectTradeLedger(ledger, source.coverage);
  if (projection.issues.length) {
    throw new Error(`Ledger has ${projection.issues.length} validation issue(s); exit backtest aborted.`);
  }

  const quoteByTicker = new Map(source.coverage.map((item) => [item.ticker, item]));
  const openPositions = projection.positions.filter((position) => position.status !== "closed");
  const candidates = [];
  const retained = [];

  for (const position of openPositions) {
    const quote = quoteByTicker.get(position.ticker);
    const decision = evaluateAutomaticExit(position, quote);
    if (!decision) {
      retained.push({
        ticker: position.ticker,
        tradeId: position.tradeId,
        close: quote?.close ?? null,
        date: quote?.priceDate ?? null
      });
      continue;
    }
    candidates.push({
      ticker: position.ticker,
      tradeId: position.tradeId,
      activatedAt: position.activatedAt,
      activationPrice: position.activationPrice,
      close: decision.price,
      date: decision.date,
      reason: decision.reason,
      triggerPrice: decision.triggerPrice,
      zoneLow: position.zoneLow,
      stop: position.stop,
      target: position.targets?.length ? Math.min(...position.targets) : null,
      remainingFraction: position.remainingFraction
    });
  }

  const byReason = candidates.reduce((acc, item) => {
    acc[item.reason] = (acc[item.reason] || 0) + 1;
    return acc;
  }, {});

  return {
    policy: TRADE_EXIT_POLICY,
    asOf: source.meta?.updated || null,
    openPositions: openPositions.length,
    candidateCount: candidates.length,
    retainedCount: retained.length,
    byReason,
    candidates,
    retained
  };
};

const runCli = async () => {
  const researchPath = argValue("--research", "src/data/research-data.js");
  const ledgerPath = argValue("--ledger", "src/data/trade-ledger.json");
  const reportPath = argValue("--report", null);
  const source = await loadResearch(researchPath);
  const ledger = await loadLedger(ledgerPath);
  const result = backtestCurrentExitPolicy(source, ledger);
  const output = `${JSON.stringify(result, null, 2)}\n`;
  if (reportPath) await fs.writeFile(path.resolve(root, reportPath), output, "utf8");
  process.stdout.write(output);
};

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  runCli().catch((error) => {
    console.error(`Trade exit policy backtest failed: ${error.message}`);
    process.exit(1);
  });
}

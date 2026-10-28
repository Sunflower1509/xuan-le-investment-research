// Pure calculations for the public reference watchlist.
// EOD comparisons are NOT trade returns and never trigger Trade Ledger events.
const isPositive = (value) => Number.isFinite(value) && value > 0;
const isIsoDate = (value) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return false;
  const [y, m, d] = value.split("-").map(Number);
  const actual = new Date(Date.UTC(y, m - 1, d));
  return actual.getUTCFullYear() === y && actual.getUTCMonth() === m - 1 && actual.getUTCDate() === d;
};

export const validateReferencePortfolio = (config) => {
  if (config?.schemaVersion !== 1 || !isIsoDate(config.approvedOn) || !Array.isArray(config.entries)
    || !isPositive(config.stopPercent) || config.stopPercent >= 100
    || !isPositive(config.criticalPercent) || config.criticalPercent < config.stopPercent
    || !isIsoDate(config.stopPolicyEffectiveFrom) || config.stopPolicyEffectiveFrom < config.approvedOn
    || typeof config.stopPolicyVersion !== "string" || !config.stopPolicyVersion) {
    return false;
  }
  const tickers = new Set();
  for (const entry of config.entries) {
    if (!/^[A-Z]{3}$/.test(entry?.ticker || "") || tickers.has(entry.ticker)
      || !isPositive(entry.zoneLow) || !isPositive(entry.zoneHigh)
      || entry.zoneLow > entry.zoneHigh) return false;
    tickers.add(entry.ticker);
  }
  return true;
};

export const buildReferencePortfolioRow = (entry, coverage, asOfDate, stopPercent = 5) => {
  const zoneValid = isPositive(entry?.zoneLow) && isPositive(entry?.zoneHigh)
    && entry.zoneLow <= entry.zoneHigh;
  const midpoint = zoneValid ? (entry.zoneLow + entry.zoneHigh) / 2 : null;
  const stopReference = midpoint !== null && isPositive(stopPercent) && stopPercent < 100
    ? midpoint * (1 - stopPercent / 100) : null;
  const quoteValid = isPositive(coverage?.close) && Number.isFinite(coverage?.changePct)
    && isIsoDate(coverage?.priceDate) && coverage.priceDate === asOfDate
    && typeof coverage?.priceSource === "string" && coverage.priceSource.startsWith("https://");
  const close = quoteValid ? coverage.close : null;
  const zoneRelation = close === null || !zoneValid ? "unavailable"
    : close < entry.zoneLow ? "below"
    : close > entry.zoneHigh ? "above" : "inside";
  const differencePct = close === null || midpoint === null ? null : (close / midpoint - 1) * 100;
  const stopBreached = close !== null && stopReference !== null && close <= stopReference;
  const reportVeto = coverage?.action?.eligibility === "veto";
  const researchState = !quoteValid ? "data-unavailable" : reportVeto ? "report-veto"
    : stopBreached ? "stop-warning"
    : zoneRelation === "below" ? "below-zone"
    : zoneRelation === "inside" ? "inside-zone" : "above-zone";
  return {
    ticker: entry?.ticker || "",
    zoneLow: zoneValid ? entry.zoneLow : null,
    zoneHigh: zoneValid ? entry.zoneHigh : null,
    midpoint,
    stopReference,
    close,
    changePct: close === null ? null : coverage.changePct,
    priceDate: close === null ? null : coverage.priceDate,
    priceSource: close === null ? null : coverage.priceSource,
    differencePct,
    zoneRelation,
    stopBreached,
    reportVeto,
    researchState
  };
};

export const buildReferencePortfolio = (config, source, exitState = null) => {
  if (!validateReferencePortfolio(config)) throw new Error("Cấu hình danh mục tham khảo không hợp lệ.");
  if (!Array.isArray(source?.coverage) || !isIsoDate(source?.meta?.updated)) {
    throw new Error("Thiếu dữ liệu EOD đã khóa của Research Terminal.");
  }
  if (exitState !== null && !validateReferencePortfolioExitState(config, exitState)) {
    throw new Error("Lịch sử loại mã không hợp lệ.");
  }
  const excludedByTicker = new Map((exitState?.events || []).map((event) => [event.ticker, event]));
  const byTicker = new Map(source.coverage.map((item) => [item.ticker, item]));
  return config.entries.map((entry) => ({
    ...buildReferencePortfolioRow(entry, byTicker.get(entry.ticker), source.meta.updated, config.stopPercent),
    exclusion: excludedByTicker.get(entry.ticker) || null
  }));
};

// Stop policy is a persistent WATCHLIST exclusion, never a broker order or Trade Ledger exit.
// The reference price is the unrounded midpoint of the owner-approved AmiBroker zone.
export const validateReferencePortfolioExitState = (config, state) => {
  if (!validateReferencePortfolio(config) || state?.schemaVersion !== 1 || !Array.isArray(state.events)) return false;
  const allowed = new Set(config.entries.map((entry) => entry.ticker));
  const tickers = new Set();
  const ids = new Set();
  for (const event of state.events) {
    if (!allowed.has(event?.ticker) || tickers.has(event.ticker)
      || typeof event.id !== "string" || ids.has(event.id)
      || event.id !== `risk-stop-${event.ticker}-${event.date}`
      || event.kind !== "eod-midpoint-stop" || !isIsoDate(event.date)
      || !isIsoDate(event.zoneApprovedOn) || event.date < event.zoneApprovedOn
      || event.date < config.stopPolicyEffectiveFrom
      || !isPositive(event.zoneLow) || !isPositive(event.zoneHigh) || event.zoneLow > event.zoneHigh
      || !isPositive(event.midpoint) || !isPositive(event.stopReference) || !isPositive(event.close)
      || !Number.isFinite(event.changePct) || !Number.isFinite(event.differencePct)
      || !isPositive(event.stopPercent) || event.stopPercent >= 100
      || !isPositive(event.criticalPercent) || event.criticalPercent < event.stopPercent
      || typeof event.policyVersion !== "string" || !event.policyVersion
      || typeof event.priceSource !== "string" || !event.priceSource.startsWith("https://")
      || Math.abs(event.midpoint - (event.zoneLow + event.zoneHigh) / 2) > 1e-7
      || Math.abs(event.stopReference - event.midpoint * (1 - event.stopPercent / 100)) > 1e-7
      || Math.abs(event.differencePct - ((event.close / event.midpoint) - 1) * 100) > 1e-7
      || event.close > event.stopReference
      || event.severity !== (event.close * 100 <= event.midpoint * (100 - event.criticalPercent) ? "critical-7" : "stop-5")
    ) return false;
    tickers.add(event.ticker);
    ids.add(event.id);
  }
  return true;
};

export const planReferencePortfolioExits = (config, source, state) => {
  if (!validateReferencePortfolioExitState(config, state)) {
    throw new Error("Lịch sử loại mã không hợp lệ; dừng xử lý để bảo toàn dữ liệu.");
  }
  const rows = buildReferencePortfolio(config, source, state);
  if (source.meta.updated < config.stopPolicyEffectiveFrom) {
    return { nextState: state, added: [], rows };
  }
  const added = [];
  for (const row of rows) {
    // Never backdate, and never remove on a stale, absent or unverified quote.
    if (row.exclusion || row.close === null || !row.stopBreached) continue;
    const entry = config.entries.find((candidate) => candidate.ticker === row.ticker);
    added.push({
      id: `risk-stop-${row.ticker}-${row.priceDate}`,
      kind: "eod-midpoint-stop",
      ticker: row.ticker,
      date: row.priceDate,
      zoneApprovedOn: config.approvedOn,
      policyVersion: config.stopPolicyVersion,
      zoneLow: entry.zoneLow,
      zoneHigh: entry.zoneHigh,
      midpoint: row.midpoint,
      stopPercent: config.stopPercent,
      criticalPercent: config.criticalPercent,
      stopReference: row.stopReference,
      close: row.close,
      changePct: row.changePct,
      differencePct: row.differencePct,
      severity: row.close * 100 <= row.midpoint * (100 - config.criticalPercent) ? "critical-7" : "stop-5",
      priceSource: row.priceSource
    });
  }
  const nextState = added.length ? { ...state, events: [...state.events, ...added] } : state;
  if (!validateReferencePortfolioExitState(config, nextState)) {
    throw new Error("Lịch sử loại mã sau xử lý không hợp lệ.");
  }
  return { nextState, added, rows: buildReferencePortfolio(config, source, nextState) };
};

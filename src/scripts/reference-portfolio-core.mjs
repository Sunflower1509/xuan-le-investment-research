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
    || !isPositive(config.stopPercent) || config.stopPercent >= 100) {
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

export const buildReferencePortfolio = (config, source) => {
  if (!validateReferencePortfolio(config)) throw new Error("Cấu hình danh mục tham khảo không hợp lệ.");
  if (!Array.isArray(source?.coverage) || !isIsoDate(source?.meta?.updated)) {
    throw new Error("Thiếu dữ liệu EOD đã khóa của Research Terminal.");
  }
  const byTicker = new Map(source.coverage.map((item) => [item.ticker, item]));
  return config.entries.map((entry) => buildReferencePortfolioRow(
    entry, byTicker.get(entry.ticker), source.meta.updated, config.stopPercent
  ));
};

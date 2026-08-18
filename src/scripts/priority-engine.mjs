import { distanceToTrigger, finitePositive, parseActionTrigger } from "./action-trigger.mjs";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

const validIsoDate = (value) => {
  if (!ISO_DATE.test(value || "")) return false;
  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return parsed.getUTCFullYear() === year
    && parsed.getUTCMonth() === month - 1
    && parsed.getUTCDate() === day;
};

export const valuationBase = (report, action = {}) => {
  const candidates = [report?.calculationBase, report?.baseValue, action?.baseValue];
  return candidates.find(finitePositive) ?? null;
};

export const latestReportDates = (reports = []) => {
  const dates = new Map();
  for (const report of reports) {
    if (!report?.ticker || report.reportType === "trading" || !validIsoDate(report.date)) continue;
    const current = dates.get(report.ticker);
    if (!current || report.date > current) dates.set(report.ticker, report.date);
  }
  return dates;
};

export const openPositionTickers = (projection = {}) => new Set(
  (Array.isArray(projection.positions) ? projection.positions : [])
    .filter((position) => position?.ticker && position.status !== "closed")
    .map((position) => position.ticker)
);

const exclusionReason = (gates) => {
  if (!gates.active) return "not-active";
  if (!gates.validQuote) return "invalid-quote";
  if (!gates.currentEod) return "stale-quote";
  if (!gates.validTrigger) return "invalid-trigger";
  if (!gates.noOpenPosition) return "open-position";
  if (!gates.stopIntact) return "stop-breached";
  if (!gates.notSuperseded) return "superseded";
  if (!gates.notExpired) return "expired";
  return null;
};

export const evaluatePriorityCandidate = (item, {
  openTickers = new Set(),
  reportDates = new Map(),
  asOfDate = null
} = {}) => {
  const action = item?.action || {};
  const trigger = parseActionTrigger(action);
  const distance = distanceToTrigger(item?.close, action);
  const reportDate = reportDates.get(item?.ticker) || null;
  const validUntil = validIsoDate(action.validUntil) ? action.validUntil : null;
  const stopBreached = finitePositive(action.stop) && finitePositive(item?.close) && item.close <= action.stop;
  const superseded = validIsoDate(reportDate)
    && validIsoDate(action.basisDate)
    && action.basisDate < reportDate;
  const expired = validUntil && validIsoDate(item?.priceDate) && item.priceDate > validUntil;

  const gates = {
    active: action.eligibility === "active",
    validQuote: finitePositive(item?.close) && validIsoDate(item?.priceDate),
    currentEod: !asOfDate || item?.priceDate === asOfDate,
    validTrigger: Boolean(trigger && distance),
    noOpenPosition: !openTickers.has(item?.ticker),
    stopIntact: !stopBreached,
    notSuperseded: !superseded,
    notExpired: !expired
  };

  return {
    eligible: Object.values(gates).every(Boolean),
    gates,
    reason: exclusionReason(gates),
    trigger,
    distance,
    reportDate,
    validUntil
  };
};

export const buildPriorityUniverse = (coverage = [], context = {}) => coverage
  .map((item) => ({ item, state: evaluatePriorityCandidate(item, context) }))
  .filter(({ state }) => state.eligible)
  .sort((a, b) => a.state.distance.value - b.state.distance.value || a.item.ticker.localeCompare(b.item.ticker))
  .map(({ item }) => item);

export const priorityRelationLabel = (item) => {
  const distance = distanceToTrigger(item?.close, item?.action);
  if (!distance) return "CHƯA ĐỦ DỮ LIỆU";
  if (distance.relation === "inside") {
    return distance.kind === "range" ? "TRONG VÙNG HÀNH ĐỘNG" : "ĐẠT NGƯỠNG HÀNH ĐỘNG";
  }
  if (distance.kind === "at-or-above" && distance.relation === "below") {
    return distance.value <= 12 ? "GẦN NGƯỠNG XÁC NHẬN" : "CHỜ NGƯỠNG XÁC NHẬN";
  }
  if (distance.kind === "range" && distance.relation === "below") return "DƯỚI CẬN — XÁC NHẬN LẠI";
  if (distance.value <= 12) return distance.kind === "range" ? "GẦN VÙNG MUA" : "GẦN NGƯỠNG MUA";
  if (distance.value <= 30) return "THEO DÕI KHOẢNG CÁCH";
  return distance.kind === "range" ? "CHƯA GẦN VÙNG MUA" : "CHƯA GẦN NGƯỠNG MUA";
};

export const priorityRelationDescription = (item, numberFormatter = (value) => String(value), decimalFormatter = (value) => String(value)) => {
  const distance = distanceToTrigger(item?.close, item?.action);
  if (!distance) return "Chưa đủ dữ liệu để xác định khoảng cách";
  if (distance.kind === "range") {
    if (distance.relation === "inside") return "Giá đang trong vùng hành động";
    return distance.relation === "below"
      ? `Giá thấp hơn cận dưới ${decimalFormatter(distance.value)}%`
      : `Giá cao hơn cận trên ${decimalFormatter(distance.value)}%`;
  }
  const threshold = numberFormatter(distance.edge);
  if (distance.relation === "inside") {
    return distance.kind === "at-or-below"
      ? `Giá đang đáp ứng ngưỡng ≤ ${threshold}`
      : `Giá đang đáp ứng ngưỡng ≥ ${threshold}`;
  }
  return distance.relation === "above"
    ? `Giá cao hơn ngưỡng hành động ${decimalFormatter(distance.value)}%`
    : `Giá thấp hơn ngưỡng hành động ${decimalFormatter(distance.value)}%`;
};

export const priorityDistanceText = (item, decimalFormatter = (value) => String(value)) => {
  const distance = distanceToTrigger(item?.close, item?.action);
  if (!distance) return "—";
  if (distance.relation === "inside") return distance.kind === "range" ? "0,0% • trong vùng" : "0,0% • đạt ngưỡng";
  if (distance.kind === "range") return `${decimalFormatter(distance.value)}% • ${distance.relation === "below" ? "dưới cận" : "trên cận"}`;
  return `${decimalFormatter(distance.value)}% • ${distance.relation === "below" ? "dưới ngưỡng" : "trên ngưỡng"}`;
};

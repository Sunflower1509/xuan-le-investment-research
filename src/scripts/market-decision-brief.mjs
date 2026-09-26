export const MARKET_DECISION_BRIEF_STANDARD = Object.freeze({
  version: "2.2.0",
  effectiveDate: "2026-09-25",
  name: "Daily Market Research Brief v2.2 — Semantic Data Color & Layout Consolidation",
  layout: Object.freeze({
    shellArchive: "220px",
    desktop: "analysis:minmax(0,1fr) + snapshot:340px",
    tablet: "single-column snapshot-after-analysis",
    mobile: "regime-session-headline-thesis-evidence-action-snapshot-playbook-audit"
  }),
  typography: Object.freeze({
    headline: Object.freeze({ min: "32px", preferred: "2.15vw", max: "36px", lineHeight: 1.14, family: "editorial" }),
    headlineDate: Object.freeze({ format: "DD/MM", size: "13px", lineHeight: 1.35, family: "ui", position: "kicker-above-headline", source: "entry.date" }),
    thesis: Object.freeze({ size: "16px", lineHeight: 1.58, measure: "64ch", family: "ui" }),
    evidence: Object.freeze({ size: "14px", lineHeight: 1.48, family: "ui" }),
    meta: Object.freeze({ size: "11px", lineHeight: 1.4, family: "ui" }),
    label: Object.freeze({ size: "12px", lineHeight: 1.35, family: "ui" }),
    metric: Object.freeze({ size: "22px", lineHeight: 1.16, family: "ui", numeric: "tabular-nums" })
  }),
  spacing: Object.freeze({
    xs: "6px",
    sm: "10px",
    md: "16px",
    lg: "24px",
    xl: "32px"
  }),
  measures: Object.freeze({
    thesis: "64ch",
    narrative: "68ch",
    headline: "34ch"
  }),
  semanticParts: Object.freeze({
    renderer: "shared",
    supported: Object.freeze(["valueParts", "changeParts", "signalParts", "detailParts"]),
    inheritance: "atomic-value-over-row-tone"
  }),
  directions: Object.freeze({
    up: Object.freeze({ label: "Tăng", symbol: "▲", tone: "positive" }),
    down: Object.freeze({ label: "Giảm", symbol: "▼", tone: "negative" }),
    flat: Object.freeze({ label: "Tham chiếu", symbol: "•", tone: "neutral" }),
    caution: Object.freeze({ label: "Cảnh báo", symbol: "!", tone: "warning" }),
    neutral: Object.freeze({ label: "Trung tính", symbol: "•", tone: "neutral" })
  }),
  snapshotStates: Object.freeze({
    price_up: Object.freeze({ label: "Tăng", symbol: "▲", tone: "positive" }),
    price_down: Object.freeze({ label: "Giảm", symbol: "▼", tone: "negative" }),
    breadth_positive: Object.freeze({ label: "Độ rộng tích cực", symbol: "▲", tone: "positive" }),
    breadth_negative: Object.freeze({ label: "Độ rộng tiêu cực", symbol: "▼", tone: "negative" }),
    liquidity_above_average: Object.freeze({ label: "Trên trung bình", symbol: "▲", tone: "positive" }),
    liquidity_below_average: Object.freeze({ label: "Dưới TB20", symbol: "▼", tone: "warning" }),
    technical_positive: Object.freeze({ label: "Kỹ thuật tích cực", symbol: "▲", tone: "positive" }),
    technical_negative: Object.freeze({ label: "Kỹ thuật yếu", symbol: "▼", tone: "negative" }),
    neutral: Object.freeze({ label: "Trung tính", symbol: "•", tone: "neutral" })
  }),
  palette: Object.freeze({
    positive: "#08785A",
    negative: "#B42318",
    warning: "#8A5A00",
    neutral: "#55636E",
    ink: "#17324D"
  }),
  requiredBriefFields: Object.freeze([
    "thesis",
    "evidence",
    "actions",
    "dataIntegrity"
  ])
});

export const marketDirectionMeta = (value, fallbackTone = "neutral") => {
  const key = String(value || "").trim().toLowerCase();
  if (key && MARKET_DECISION_BRIEF_STANDARD.directions[key]) {
    return MARKET_DECISION_BRIEF_STANDARD.directions[key];
  }
  return {
    label: fallbackTone === "positive" ? "Tích cực" : fallbackTone === "negative" ? "Tiêu cực" : fallbackTone === "warning" ? "Cảnh báo" : "Trung tính",
    symbol: fallbackTone === "positive" ? "▲" : fallbackTone === "negative" ? "▼" : fallbackTone === "warning" ? "!" : "•",
    tone: ["positive", "negative", "warning"].includes(fallbackTone) ? fallbackTone : "neutral"
  };
};

export const marketSnapshotStateMeta = (value, fallbackDirection = null, fallbackTone = "neutral") => {
  const key = String(value || "").trim().toLowerCase();
  if (key && MARKET_DECISION_BRIEF_STANDARD.snapshotStates[key]) {
    return MARKET_DECISION_BRIEF_STANDARD.snapshotStates[key];
  }
  return marketDirectionMeta(fallbackDirection, fallbackTone);
};

export const validateMarketDecisionBrief = (entry) => {
  if (!entry?.brief) return { applies: false, valid: true, missing: [] };
  const missing = MARKET_DECISION_BRIEF_STANDARD.requiredBriefFields.filter((field) => {
    const value = entry.brief[field];
    if (Array.isArray(value)) return value.length === 0;
    return value === undefined || value === null || String(value).trim() === "";
  });
  return { applies: true, valid: missing.length === 0, missing };
};

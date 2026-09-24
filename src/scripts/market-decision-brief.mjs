export const MARKET_DECISION_BRIEF_STANDARD = Object.freeze({
  version: "1.0.0",
  effectiveDate: "2026-09-24",
  layout: Object.freeze({
    desktop: "65/35 narrative-snapshot",
    tablet: "single-column snapshot-after-thesis",
    mobile: "regime-headline-thesis-snapshot-action-details"
  }),
  directions: Object.freeze({
    up: Object.freeze({ label: "Tăng", symbol: "▲", tone: "positive" }),
    down: Object.freeze({ label: "Giảm", symbol: "▼", tone: "negative" }),
    flat: Object.freeze({ label: "Tham chiếu", symbol: "•", tone: "neutral" }),
    caution: Object.freeze({ label: "Cảnh báo", symbol: "!", tone: "warning" }),
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

export const validateMarketDecisionBrief = (entry) => {
  if (!entry?.brief) return { applies: false, valid: true, missing: [] };
  const missing = MARKET_DECISION_BRIEF_STANDARD.requiredBriefFields.filter((field) => {
    const value = entry.brief[field];
    if (Array.isArray(value)) return value.length === 0;
    return value === undefined || value === null || String(value).trim() === "";
  });
  return { applies: true, valid: missing.length === 0, missing };
};

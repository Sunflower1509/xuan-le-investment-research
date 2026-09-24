import { finitePositive } from "./action-trigger.mjs";

export const TRADE_EXIT_POLICY = Object.freeze({
  version: 1,
  effectiveDate: "2026-09-24",
  basis: "eod-close",
  executionPrice: "same-eod-close",
  closeScope: "remaining-position",
  precedence: Object.freeze(["stoploss", "zone_floor_break", "target"]),
  boundaries: Object.freeze({
    stoploss: "close <= locked stop",
    zoneFloor: "range trigger only: close < locked zoneLow",
    target: "close >= nearest locked target"
  })
});

const validQuote = (quote, position) => finitePositive(quote?.close)
  && typeof quote?.priceDate === "string"
  && quote.priceDate >= (position?.activatedAt || "0000-00-00")
  && quote.priceDate >= (position?.lastEventDate || position?.activatedAt || "0000-00-00");

export const nearestLockedTarget = (targets = []) => {
  const valid = Array.isArray(targets) ? targets.filter(finitePositive) : [];
  return valid.length ? Math.min(...valid) : null;
};

export const evaluateAutomaticExit = (position, quote) => {
  if (!position || position.status === "closed" || !(Number(position.remainingFraction ?? 1) > 0)) return null;
  if (!validQuote(quote, position)) return null;

  const close = Number(quote.close);
  const stop = finitePositive(position.stop) ? Number(position.stop) : null;
  const zoneLow = finitePositive(position.zoneLow) ? Number(position.zoneLow) : null;
  const target = nearestLockedTarget(position.targets);

  // Hard-risk precedence is intentional and deterministic. If malformed data
  // makes more than one condition true, the most defensive reason wins.
  if (stop !== null && close <= stop) {
    return {
      reason: "stoploss",
      rule: "stoploss",
      triggerPrice: stop,
      price: close,
      date: quote.priceDate,
      sourceUrl: quote.priceSource || null,
      sourceUrlSecondary: quote.priceSourceSecondary || null
    };
  }

  // The buy zone is inclusive. Exactly at zoneLow is still inside the locked
  // setup; only an EOD close strictly below the lower boundary invalidates it.
  if (zoneLow !== null && close < zoneLow) {
    return {
      reason: "zone_floor_break",
      rule: "zoneFloor",
      triggerPrice: zoneLow,
      price: close,
      date: quote.priceDate,
      sourceUrl: quote.priceSource || null,
      sourceUrlSecondary: quote.priceSourceSecondary || null
    };
  }

  if (target !== null && close >= target) {
    return {
      reason: "target",
      rule: "target",
      triggerPrice: target,
      price: close,
      date: quote.priceDate,
      sourceUrl: quote.priceSource || null,
      sourceUrlSecondary: quote.priceSourceSecondary || null
    };
  }

  return null;
};

export const automaticExitReasonLabel = (reason) => ({
  target: "ĐẠT TARGET",
  stoploss: "STOPLOSS",
  zone_floor_break: "THỦNG CẬN DƯỚI VÙNG MUA"
}[reason] || null);

const EVENT_TYPES = new Set(["activated", "partial_exit", "closed"]);
const ACTIVATION_MODES = new Set(["manual", "automatic-eod"]);
const AUTOMATIC_TRIGGERS = new Set(["eod-close-transitioned-into-locked-zone", "eod-close-transitioned-into-locked-threshold"]);
const ONE_SIDED_TRIGGER_TYPES = new Set(["at-or-below", "at-or-above"]);
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

const finitePositive = (value) => Number.isFinite(value) && value > 0;
const oneSidedTrigger = (value = {}) => ONE_SIDED_TRIGGER_TYPES.has(value.triggerType) && finitePositive(value.triggerPrice)
  ? { type: value.triggerType, price: value.triggerPrice }
  : null;

export const validIsoDate = (value) => {
  if (!ISO_DATE.test(value || "")) return false;
  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return parsed.getUTCFullYear() === year && parsed.getUTCMonth() === month - 1 && parsed.getUTCDate() === day;
};

export const validSourceUrl = (value) => {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
};

const issue = (issues, event, code, message) => {
  issues.push({ eventId: event?.id || null, tradeId: event?.tradeId || null, code, message });
};

const activationIsConfirmed = (event) => {
  const mode = event.mode || "manual";
  if (!ACTIVATION_MODES.has(mode) || event.confirmation?.noHardVeto !== true) return false;
  if (mode === "automatic-eod") {
    return event.confirmation?.priceTriggerPassed === true
      && event.confirmation?.eligibilityAtTrigger === "active"
      && AUTOMATIC_TRIGGERS.has(event.confirmation?.trigger);
  }
  return event.confirmation?.reportConditionsPassed === true;
};

export const projectTradeLedger = (ledger, coverage = []) => {
  const events = Array.isArray(ledger?.events) ? ledger.events : [];
  const quoteByTicker = new Map(coverage.map((item) => [item.ticker, item]));
  const positions = new Map();
  const issues = [];
  const eventIds = new Set();
  const ledgerStartedAt = validIsoDate(ledger?.meta?.startedAt) ? ledger.meta.startedAt : null;

  events.forEach((event) => {
    if (!event || typeof event !== "object") {
      issue(issues, null, "invalid_event", "Sự kiện không phải là một object hợp lệ.");
      return;
    }
    if (!event.id || eventIds.has(event.id)) {
      issue(issues, event, "duplicate_event_id", "Mỗi sự kiện phải có id duy nhất.");
      return;
    }
    eventIds.add(event.id);
    if (!event.tradeId || !EVENT_TYPES.has(event.type) || !validIsoDate(event.date) || !finitePositive(event.price) || !validSourceUrl(event.sourceUrl)) {
      issue(issues, event, "invalid_required_field", "Thiếu tradeId, loại sự kiện, ngày, mức giá hoặc URL nguồn hợp lệ.");
      return;
    }
    if (ledgerStartedAt && event.date < ledgerStartedAt) {
      issue(issues, event, "event_before_ledger_start", "Không ghi hồi tố sự kiện trước ngày bắt đầu sổ.");
      return;
    }

    if (event.type === "activated") {
      if (positions.has(event.tradeId)) {
        issue(issues, event, "duplicate_activation", "Một tradeId chỉ được kích hoạt một lần.");
        return;
      }
      const lockedRange = finitePositive(event.zoneLow) && finitePositive(event.zoneHigh) && event.zoneLow <= event.zoneHigh;
      const trigger = oneSidedTrigger(event);
      if (!event.ticker || (!lockedRange && !trigger) || !validIsoDate(event.zoneBasisDate)) {
        issue(issues, event, "invalid_activation", "Sự kiện kích hoạt thiếu mã, ngày khóa hoặc điều kiện giá hợp lệ.");
        return;
      }
      const priceTriggerPassed = trigger?.type === "at-or-below"
        ? event.price <= trigger.price
        : trigger?.type === "at-or-above"
          ? event.price >= trigger.price
          : event.price >= event.zoneLow && event.price <= event.zoneHigh;
      if (!priceTriggerPassed) {
        issue(issues, event, "price_outside_locked_zone", "Giá kích hoạt không thỏa vùng/ngưỡng đã khóa.");
        return;
      }
      if (!activationIsConfirmed(event)) {
        issue(issues, event, "activation_not_confirmed", "Sự kiện kích hoạt chưa vượt qua cổng xác nhận tương ứng với chế độ ghi nhận.");
        return;
      }
      positions.set(event.tradeId, {
        tradeId: event.tradeId,
        ticker: event.ticker,
        activationMode: event.mode || "manual",
        activatedAt: event.date,
        activationPrice: event.price,
        zoneLow: finitePositive(event.zoneLow) ? event.zoneLow : null,
        zoneHigh: finitePositive(event.zoneHigh) ? event.zoneHigh : null,
        triggerType: trigger?.type || null,
        triggerPrice: trigger?.price || null,
        zoneBasisDate: event.zoneBasisDate,
        stop: finitePositive(event.stop) ? event.stop : null,
        targets: Array.isArray(event.targets) ? event.targets.filter(finitePositive) : [],
        remainingFraction: 1,
        realizedContributionPct: 0,
        exitedFraction: 0,
        weightedExitValue: 0,
        lastEventDate: event.date,
        closedAt: null,
        closeReason: null,
        events: [{ ...event }]
      });
      return;
    }

    const position = positions.get(event.tradeId);
    if (!position) {
      issue(issues, event, "missing_activation", "Sự kiện thoát không có sự kiện kích hoạt đứng trước.");
      return;
    }
    if (position.remainingFraction <= 0) {
      issue(issues, event, "event_after_close", "Không thể thêm sự kiện sau khi vị thế đã đóng.");
      return;
    }
    if (event.date < position.lastEventDate) {
      issue(issues, event, "non_chronological_event", "Ngày sự kiện phải tăng dần trong cùng một vị thế.");
      return;
    }
    if (!event.reason) {
      issue(issues, event, "missing_exit_reason", "Mọi sự kiện chốt phải có lý do.");
      return;
    }

    const exitFraction = event.type === "closed" ? position.remainingFraction : Number(event.portionPct) / 100;
    if (!finitePositive(exitFraction) || exitFraction > position.remainingFraction + Number.EPSILON) {
      issue(issues, event, "invalid_exit_fraction", "Tỷ trọng chốt phải lớn hơn 0 và không vượt phần vị thế còn lại.");
      return;
    }

    position.realizedContributionPct += exitFraction * ((event.price / position.activationPrice) - 1) * 100;
    position.weightedExitValue += exitFraction * event.price;
    position.exitedFraction += exitFraction;
    position.remainingFraction = Math.max(0, position.remainingFraction - exitFraction);
    position.lastEventDate = event.date;
    position.events.push({ ...event, exitFraction });
    if (position.remainingFraction <= Number.EPSILON) {
      position.remainingFraction = 0;
      position.closedAt = event.date;
      position.closeReason = event.reason || null;
    }
  });

  const projected = [...positions.values()].map((position) => {
    const quote = quoteByTicker.get(position.ticker);
    const quoteIsCurrent = finitePositive(quote?.close)
      && validIsoDate(quote?.priceDate)
      && quote.priceDate >= position.activatedAt;
    const currentPrice = quoteIsCurrent ? quote.close : null;
    const unrealizedContributionPct = position.remainingFraction > 0 && currentPrice
      ? position.remainingFraction * ((currentPrice / position.activationPrice) - 1) * 100
      : position.remainingFraction === 0 ? 0 : null;
    const performancePct = Number.isFinite(unrealizedContributionPct)
      ? position.realizedContributionPct + unrealizedContributionPct
      : null;
    const status = position.remainingFraction === 0
      ? "closed"
      : position.exitedFraction > 0 ? "partial" : "open";
    const monitoringState = status === "closed"
      ? "closed"
      : currentPrice && position.stop && currentPrice <= position.stop
        ? "stop-alert"
        : currentPrice && position.targets.length && currentPrice >= Math.min(...position.targets)
          ? "target-alert"
          : "normal";

    return {
      ...position,
      status,
      monitoringState,
      currentPrice,
      currentPriceDate: quoteIsCurrent ? quote.priceDate : null,
      currentPriceSource: quoteIsCurrent ? quote.priceSource : null,
      unrealizedContributionPct,
      performancePct,
      averageExitPrice: position.exitedFraction > 0 ? position.weightedExitValue / position.exitedFraction : null
    };
  }).sort((a, b) => b.activatedAt.localeCompare(a.activatedAt) || a.ticker.localeCompare(b.ticker));

  return { positions: projected, issues };
};

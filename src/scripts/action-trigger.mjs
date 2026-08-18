const ONE_SIDED_TRIGGER_TYPES = new Set(["at-or-below", "at-or-above"]);

export const finitePositive = (value) => Number.isFinite(value) && value > 0;

const basisDateOf = (value = {}) => value.zoneBasisDate || value.basisDate || null;

export const parseActionTrigger = (action = {}) => {
  if (!action || typeof action !== "object") return null;

  const hasOneSidedMetadata = action.triggerType != null || action.triggerPrice != null;
  if (hasOneSidedMetadata) {
    if (!ONE_SIDED_TRIGGER_TYPES.has(action.triggerType) || !finitePositive(action.triggerPrice)) return null;
    return {
      kind: action.triggerType,
      price: Number(action.triggerPrice)
    };
  }

  if (finitePositive(action.zoneLow) && finitePositive(action.zoneHigh) && action.zoneLow <= action.zoneHigh) {
    return {
      kind: "range",
      low: Number(action.zoneLow),
      high: Number(action.zoneHigh)
    };
  }

  return null;
};

export const classifyPrice = (close, action = {}) => {
  const trigger = parseActionTrigger(action);
  if (!finitePositive(close) || !trigger) {
    return { relation: "unavailable", trigger };
  }

  if (trigger.kind === "at-or-below") {
    return {
      relation: close <= trigger.price ? "inside" : "above",
      trigger
    };
  }

  if (trigger.kind === "at-or-above") {
    return {
      relation: close >= trigger.price ? "inside" : "below",
      trigger
    };
  }

  if (close < trigger.low) return { relation: "below", trigger };
  if (close > trigger.high) return { relation: "above", trigger };
  return { relation: "inside", trigger };
};

export const distanceToTrigger = (close, action = {}) => {
  const classified = classifyPrice(close, action);
  const { trigger, relation } = classified;
  if (!trigger || relation === "unavailable") return null;
  if (relation === "inside") {
    return {
      value: 0,
      relation,
      edge: close,
      kind: trigger.kind
    };
  }

  if (trigger.kind === "range") {
    const edge = relation === "below" ? trigger.low : trigger.high;
    return {
      value: Math.abs(close - edge) / edge * 100,
      relation,
      edge,
      kind: trigger.kind
    };
  }

  return {
    value: Math.abs(close - trigger.price) / trigger.price * 100,
    relation,
    edge: trigger.price,
    kind: trigger.kind
  };
};

export const snapshotTriggerState = (action = {}) => {
  const trigger = parseActionTrigger(action);
  const snapshot = {
    zoneLow: finitePositive(action.zoneLow) ? Number(action.zoneLow) : null,
    zoneHigh: finitePositive(action.zoneHigh) ? Number(action.zoneHigh) : null,
    zoneBasisDate: basisDateOf(action)
  };

  if (trigger && trigger.kind !== "range") {
    snapshot.triggerType = trigger.kind;
    snapshot.triggerPrice = trigger.price;
  }

  return snapshot;
};

export const sameLockedTrigger = (previous = {}, current = {}) => {
  const previousBasis = basisDateOf(previous);
  const currentBasis = basisDateOf(current);
  if (!previousBasis || previousBasis !== currentBasis) return false;

  const previousTrigger = parseActionTrigger(previous);
  const currentTrigger = parseActionTrigger(current);
  if (!previousTrigger || !currentTrigger || previousTrigger.kind !== currentTrigger.kind) return false;

  if (currentTrigger.kind === "range") {
    return previousTrigger.low === currentTrigger.low && previousTrigger.high === currentTrigger.high;
  }

  return previousTrigger.price === currentTrigger.price;
};

export const triggerDisplayModel = (action = {}) => {
  const trigger = parseActionTrigger(action);
  if (!trigger) return null;
  if (trigger.kind === "range") return { kind: trigger.kind, low: trigger.low, high: trigger.high };
  return { kind: trigger.kind, price: trigger.price };
};

import assert from "node:assert/strict";
import test from "node:test";
import {
  activationRelation,
  classifyPrice,
  crossedLockedTrigger,
  distanceToTrigger,
  parseActionTrigger,
  sameLockedTrigger,
  snapshotTriggerState,
  triggerSatisfied
} from "../src/scripts/action-trigger.mjs";

test("range trigger giữ semantics hiển thị bao hàm hai cận", () => {
  const action = { zoneLow: 100, zoneHigh: 110, basisDate: "2026-08-18" };
  assert.deepEqual(parseActionTrigger(action), { kind: "range", low: 100, high: 110 });
  assert.equal(classifyPrice(99, action).relation, "below");
  assert.equal(classifyPrice(100, action).relation, "inside");
  assert.equal(classifyPrice(110, action).relation, "inside");
  assert.equal(classifyPrice(111, action).relation, "above");
  assert.equal(Number(distanceToTrigger(111, action).value.toFixed(4)), Number(((1 / 110) * 100).toFixed(4)));
});

test("range activation dùng cận trên làm buy ceiling và chấp nhận đóng dưới cận dưới", () => {
  const action = { zoneLow: 100, zoneHigh: 110, basisDate: "2026-08-18", stop: 95 };
  assert.equal(triggerSatisfied(109, action), true);
  assert.equal(triggerSatisfied(99, action), true);
  assert.equal(triggerSatisfied(111, action), false);
  assert.equal(crossedLockedTrigger(111, 105, action), true);
  assert.equal(crossedLockedTrigger(111, 99, action), true);
  assert.equal(crossedLockedTrigger(99, 105, action), false);
  assert.equal(crossedLockedTrigger(105, 99, action), false);
  assert.equal(activationRelation(105, action), "inside-zone");
  assert.equal(activationRelation(99, action), "below-zone");
  assert.equal(activationRelation(95, action), "stop-breached");
  assert.equal(activationRelation(111, action), "not-triggered");
});

test("at-or-below hiểu đúng SHB <= 11.600", () => {
  const action = { triggerType: "at-or-below", triggerPrice: 11600, zoneLow: null, zoneHigh: 11600, basisDate: "2026-08-18" };
  assert.deepEqual(parseActionTrigger(action), { kind: "at-or-below", price: 11600 });
  assert.equal(classifyPrice(11650, action).relation, "above");
  assert.equal(classifyPrice(11600, action).relation, "inside");
  assert.equal(classifyPrice(11550, action).relation, "inside");
  assert.equal(crossedLockedTrigger(11650, 11550, action), true);
  assert.equal(distanceToTrigger(11600, action).value, 0);
});

test("at-or-above hiểu đúng ngưỡng breakout", () => {
  const action = { triggerType: "at-or-above", triggerPrice: 25000, basisDate: "2026-08-18" };
  assert.equal(classifyPrice(24900, action).relation, "below");
  assert.equal(classifyPrice(25000, action).relation, "inside");
  assert.equal(classifyPrice(25100, action).relation, "inside");
  assert.equal(crossedLockedTrigger(24900, 25100, action), true);
  assert.equal(crossedLockedTrigger(25100, 24900, action), false);
});

test("metadata one-sided sai không được fallback âm thầm sang range", () => {
  const malformed = { triggerType: "at-or-below", triggerPrice: null, zoneLow: 100, zoneHigh: 110, basisDate: "2026-08-18" };
  assert.equal(parseActionTrigger(malformed), null);
  assert.equal(classifyPrice(105, malformed).relation, "unavailable");
  assert.equal(triggerSatisfied(105, malformed), false);
});

test("sameLockedTrigger khóa cả loại trigger, ngưỡng và basisDate", () => {
  const action = { triggerType: "at-or-below", triggerPrice: 11600, basisDate: "2026-08-18" };
  const snapshot = snapshotTriggerState(action);
  assert.equal(sameLockedTrigger(snapshot, action), true);
  assert.equal(sameLockedTrigger(snapshot, { ...action, triggerPrice: 11500 }), false);
  assert.equal(sameLockedTrigger(snapshot, { ...action, basisDate: "2026-08-19" }), false);
});

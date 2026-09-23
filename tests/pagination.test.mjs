import test from "node:test";
import assert from "node:assert/strict";

import {
  clampPage,
  normalizePageSize,
  paginateItems,
  paginationTokens
} from "../src/scripts/pagination.mjs";

test("paginateItems splits a 127-row universe into 30-row pages without losing rank offsets", () => {
  const rows = Array.from({ length: 127 }, (_, index) => index + 1);
  const model = paginateItems(rows, 5, 30);
  assert.equal(model.page, 5);
  assert.equal(model.totalPages, 5);
  assert.equal(model.start, 120);
  assert.equal(model.end, 127);
  assert.deepEqual(model.items, [121, 122, 123, 124, 125, 126, 127]);
});

test("paginateItems clamps an invalid page to the final available page", () => {
  const rows = Array.from({ length: 61 }, (_, index) => index + 1);
  const model = paginateItems(rows, 99, 30);
  assert.equal(model.page, 3);
  assert.equal(model.start, 60);
  assert.deepEqual(model.items, [61]);
});

test("paginationTokens keeps bounded navigation compact with ellipses", () => {
  assert.deepEqual(paginationTokens(8, 23), [1, "ellipsis", 7, 8, 9, "ellipsis", 23]);
  assert.deepEqual(paginationTokens(2, 5), [1, 2, 3, 4, 5]);
});

test("normalizePageSize accepts only approved sizes", () => {
  assert.equal(normalizePageSize("30", [15, 20, 30, 50], 30), 30);
  assert.equal(normalizePageSize("100", [15, 20, 30, 50], 30), 30);
  assert.equal(normalizePageSize(undefined, [12, 24, 36], 12), 12);
});

test("clampPage returns page one for an empty result set", () => {
  assert.equal(clampPage(4, 0), 1);
});

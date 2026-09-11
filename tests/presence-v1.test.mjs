import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("Online Presence v1 is wired into the production entrypoint", async () => {
  const entry = await read("src/index.js");
  assert.match(entry, /\.\/scripts\/presence\.js/);
});

test("presence runtime config is safe and explicit", async () => {
  const config = JSON.parse(await read("assets/js/presence-config.json"));
  assert.equal(config.version, 1);
  assert.equal(typeof config.enabled, "boolean");
  assert.equal(typeof config.websocketUrl, "string");
  if (config.enabled) assert.match(config.websocketUrl, /^wss:\/\//);
});

test("presence backend keeps privacy, origin and de-duplication guards", async () => {
  const worker = await read("workers/presence/src/index.js");
  assert.match(worker, /https:\/\/sunflower1509\.github\.io/);
  assert.match(worker, /serializeAttachment/);
  assert.match(worker, /new Set\(\)/);
  assert.match(worker, /origin_not_allowed/);
});

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

test("presence backend keeps privacy, origin, de-duplication and hibernation guards", async () => {
  const worker = await read("workers/presence/src/index.js");
  assert.match(worker, /https:\/\/sunflower1509\.github\.io/);
  assert.match(worker, /serializeAttachment/);
  assert.match(worker, /new Set\(\)/);
  assert.match(worker, /origin_not_allowed/);
  assert.match(worker, /setWebSocketAutoResponse/);
  assert.match(worker, /hello-already-registered/);
  assert.match(worker, /hello-required/);
  assert.match(worker, /MAX_SOCKET_COUNT/);
});

test("presence Worker deployment config is production-hardened", async () => {
  const wrangler = JSON.parse(await read("workers/presence/wrangler.jsonc"));
  assert.equal(wrangler.name, "xuan-le-online-presence");
  assert.equal(wrangler.workers_dev, true);
  assert.equal(wrangler.preview_urls, false);
  assert.equal(wrangler.observability?.enabled, true);
  assert.equal(wrangler.observability?.logs?.head_sampling_rate, 1);
  assert.equal(wrangler.observability?.traces?.enabled, true);
  assert.equal(wrangler.observability?.traces?.head_sampling_rate, 0.01);
});

test("presence deploy tooling is pinned to an exact Wrangler version", async () => {
  const pkg = JSON.parse(await read("workers/presence/package.json"));
  const wrangler = pkg.devDependencies?.wrangler;
  assert.equal(typeof wrangler, "string");
  assert.match(wrangler, /^\d+\.\d+\.\d+$/);
});

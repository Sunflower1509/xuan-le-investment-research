import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import {
  MARKET_DECISION_BRIEF_STANDARD,
  marketDirectionMeta,
  validateMarketDecisionBrief
} from "../src/scripts/market-decision-brief.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const loadDaily = () => {
  const context = { window: {} };
  vm.runInNewContext(read("src/data/daily-insights.js"), context, { filename: "src/data/daily-insights.js" });
  vm.runInNewContext(read("src/data/daily-insights-auto.js"), context, { filename: "src/data/daily-insights-auto.js" });
  return context.window.DAILY_MARKET_INSIGHTS;
};

const channel = (value) => {
  const v = value / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex) => {
  const raw = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((offset) => Number.parseInt(raw.slice(offset, offset + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

test("Market Decision Brief standard is versioned and locks 65/35 desktop structure", () => {
  assert.equal(MARKET_DECISION_BRIEF_STANDARD.version, "1.0.0");
  assert.match(MARKET_DECISION_BRIEF_STANDARD.layout.desktop, /65\/35/);
  assert.deepEqual(
    [...MARKET_DECISION_BRIEF_STANDARD.requiredBriefFields],
    ["thesis", "evidence", "actions", "dataIntegrity"]
  );
});

test("semantic market palette meets WCAG AA normal-text contrast on white", () => {
  const white = "#FFFFFF";
  for (const key of ["positive", "negative", "warning", "neutral", "ink"]) {
    const color = MARKET_DECISION_BRIEF_STANDARD.palette[key];
    assert.ok(contrast(color, white) >= 4.5, `${key} ${color} must be >=4.5:1 on white`);
  }
});

test("direction metadata never relies on color alone", () => {
  const up = marketDirectionMeta("up");
  const down = marketDirectionMeta("down");
  assert.equal(up.symbol, "▲");
  assert.equal(up.label, "Tăng");
  assert.equal(down.symbol, "▼");
  assert.equal(down.label, "Giảm");
});

test("latest published market view carries the locked brief schema", () => {
  const daily = loadDaily();
  const entry = daily.entries.find((item) => item.date === "2026-09-24");
  assert.ok(entry, "Missing 24/09/2026 market view");
  const validation = validateMarketDecisionBrief(entry);
  assert.equal(validation.applies, true);
  assert.equal(validation.valid, true, `Missing: ${validation.missing.join(", ")}`);
  assert.equal(entry.brief.evidence.length, 3);
  assert.equal(entry.brief.actions.length, 3);
  assert.equal(entry.sentiment, "cautious");
  assert.equal(entry.metrics[0].direction, "down");
  assert.equal(entry.metrics[1].valueParts[0].tone, "positive");
  assert.equal(entry.metrics[1].valueParts[2].tone, "negative");
});

test("renderer separates narrative, snapshot, action and audit layers", () => {
  const app = read("src/scripts/app.js");
  assert.match(app, /class="daily-brief-grid"/);
  assert.match(app, /class="daily-market-snapshot"/);
  assert.match(app, /class="daily-decision-bar/);
  assert.match(app, /class="daily-data-integrity"/);
  assert.match(app, /marketDirectionMeta\(metric\.direction, metric\.tone\)/);
});

test("daily market renderer puts PHIÊN + session date immediately after the headline", () => {
  const app = read("src/scripts/app.js");
  const headline = app.indexOf('<h3 id="daily-brief-title-');
  const sessionLine = app.indexOf('class="daily-title-session"');
  assert.ok(headline >= 0, "Missing daily headline");
  assert.ok(sessionLine > headline, "PHIÊN date must render after the daily headline");
  assert.match(app, /<span>PHIÊN<\/span>/);
  assert.match(app, /<time datetime="\$\{escapeHtml\(entry\.date\)\}">\$\{date\(entry\.date\)\}<\/time>/);
  assert.equal(app.includes('class="daily-brief-dateline"'), false, "Old date-before-title line must be removed");
  for (const legacy of ["MARKET DECISION BRIEF", "MARKET SNAPSHOT", "TRADING PLAYBOOK", "FULL MARKET READ", "DATA INTEGRITY"]) {
    assert.equal(app.includes(legacy), false, `Legacy English label remains: ${legacy}`);
  }
});

test("PHIÊN date after headline has dedicated responsive styling", () => {
  const css = read("assets/css/market-decision-brief.css");
  assert.match(css, /\.daily-title-session\s*\{/);
  assert.match(css, /\.daily-title-session time\s*\{/);
  assert.match(css, /font-variant-numeric:\s*tabular-nums/);
});


test("Market Decision Brief CSS preserves semantic color and responsive hierarchy", () => {
  const css = read("assets/css/market-decision-brief.css");
  assert.match(css, /--brief-positive:\s*#08785a/i);
  assert.match(css, /--brief-negative:\s*#b42318/i);
  assert.match(css, /--brief-warning:\s*#8a5a00/i);
  assert.match(css, /grid-template-columns:\s*minmax\(0,1\.72fr\)\s+minmax\(330px,\.92fr\)/);
  assert.match(css, /@media \(max-width: 760px\)/);
});

test("future VNINDEX prompt references the locked Market Decision Brief contract", () => {
  const prompt = read("docs/prompt-nhan-dinh-vnindex-v3.md");
  const standard = read("docs/market-decision-brief-standard.md");
  assert.match(prompt, /WEB PRESENTATION CONTRACT — MARKET DECISION BRIEF v1\.0/);
  assert.match(prompt, /brief: \{/);
  assert.match(standard, /REGIME → THESIS → EVIDENCE → MARKET SNAPSHOT → ACTION/);
  assert.match(standard, /Không dùng màu một mình/);
});

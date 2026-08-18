from pathlib import Path
import json
import subprocess

ROOT = Path(__file__).resolve().parents[1]


def p(rel):
    return ROOT / rel


def replace_once(rel, old, new):
    path = p(rel)
    text = path.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{rel}: expected one match, got {count}")
    path.write_text(text.replace(old, new, 1))


def git_blob(rel):
    return subprocess.check_output(["git", "hash-object", rel], cwd=ROOT, text=True).strip()


EXPECTED = {
    "index.html": "14ab09be55012c4885bb359de641d1e5ebeca9a6",
    "src/scripts/app.js": "6b71991202f316b7957dfa3277a3f33962748210",
    "src/scripts/trade-ledger.mjs": "c35295db534f7cc7d3cf0112ba85ff6b041bb067",
    "scripts/process-trade-ledger.mjs": "68d0d5ff1b09a5a89e3bab8f9399872ecfc0c905",
    "scripts/audit-site.mjs": "4ba5822dbe5f609ad4ce70d0e247a87538cf5775",
    "tests/trade-ledger.test.mjs": "405184e6d1eb2ec4bb0a2789d7f12dd6bc5e959a",
}
for rel, sha in EXPECTED.items():
    actual = git_blob(rel)
    if actual != sha:
        raise SystemExit(f"{rel}: unexpected pre-fix blob {actual}, expected {sha}")

replace_once(
    "scripts/process-trade-ledger.mjs",
    '''const TRIGGER = "eod-close-transitioned-into-locked-zone";
const TICKER = /^[A-Z0-9]{2,8}$/;

const finitePositive = (value) => Number.isFinite(value) && value > 0;
const clone = (value) => JSON.parse(JSON.stringify(value));

export const quoteRelation = (close, action = {}) => {
  if (!finitePositive(close) || !finitePositive(action.zoneLow) || !finitePositive(action.zoneHigh) || action.zoneLow > action.zoneHigh) return "unavailable";
  if (close < action.zoneLow) return "below";
  if (close > action.zoneHigh) return "above";
  return "inside";
};
''',
    '''const TRIGGER_ZONE = "eod-close-transitioned-into-locked-zone";
const TRIGGER_THRESHOLD = "eod-close-transitioned-into-locked-threshold";
const TICKER = /^[A-Z0-9]{2,8}$/;
const ONE_SIDED_TRIGGER_TYPES = new Set(["at-or-below", "at-or-above"]);

const finitePositive = (value) => Number.isFinite(value) && value > 0;
const clone = (value) => JSON.parse(JSON.stringify(value));
const oneSidedTrigger = (action = {}) => ONE_SIDED_TRIGGER_TYPES.has(action.triggerType) && finitePositive(action.triggerPrice)
  ? { type: action.triggerType, price: action.triggerPrice }
  : null;

export const quoteRelation = (close, action = {}) => {
  if (!finitePositive(close)) return "unavailable";
  const trigger = oneSidedTrigger(action);
  if (trigger?.type === "at-or-below") return close <= trigger.price ? "inside" : "above";
  if (trigger?.type === "at-or-above") return close >= trigger.price ? "inside" : "below";
  if (!finitePositive(action.zoneLow) || !finitePositive(action.zoneHigh) || action.zoneLow > action.zoneHigh) return "unavailable";
  if (close < action.zoneLow) return "below";
  if (close > action.zoneHigh) return "above";
  return "inside";
};
'''
)

replace_once(
    "scripts/process-trade-ledger.mjs",
    '''const snapshotFor = (item) => ({
  date: item.priceDate,
  close: item.close,
  relation: quoteRelation(item.close, item.action),
  zoneLow: finitePositive(item.action?.zoneLow) ? item.action.zoneLow : null,
  zoneHigh: finitePositive(item.action?.zoneHigh) ? item.action.zoneHigh : null,
  zoneBasisDate: validIsoDate(item.action?.basisDate) ? item.action.basisDate : null,
  eligibility: typeof item.action?.eligibility === "string" ? item.action.eligibility : "unknown"
});

const sameLockedZone = (previous, current) => previous
  && previous.zoneLow === current.zoneLow
  && previous.zoneHigh === current.zoneHigh
  && previous.zoneBasisDate === current.zoneBasisDate
  && finitePositive(current.zoneLow)
  && finitePositive(current.zoneHigh)
  && validIsoDate(current.zoneBasisDate);
''',
    '''const snapshotFor = (item) => {
  const snapshot = {
    date: item.priceDate,
    close: item.close,
    relation: quoteRelation(item.close, item.action),
    zoneLow: finitePositive(item.action?.zoneLow) ? item.action.zoneLow : null,
    zoneHigh: finitePositive(item.action?.zoneHigh) ? item.action.zoneHigh : null,
    zoneBasisDate: validIsoDate(item.action?.basisDate) ? item.action.basisDate : null,
    eligibility: typeof item.action?.eligibility === "string" ? item.action.eligibility : "unknown"
  };
  const trigger = oneSidedTrigger(item.action);
  if (trigger) {
    snapshot.triggerType = trigger.type;
    snapshot.triggerPrice = trigger.price;
  }
  return snapshot;
};

const sameLockedAction = (previous, current) => {
  if (!previous || previous.zoneBasisDate !== current.zoneBasisDate || !validIsoDate(current.zoneBasisDate)) return false;
  if (current.triggerType) {
    return previous.triggerType === current.triggerType
      && previous.triggerPrice === current.triggerPrice
      && finitePositive(current.triggerPrice);
  }
  return previous.zoneLow === current.zoneLow
    && previous.zoneHigh === current.zoneHigh
    && finitePositive(current.zoneLow)
    && finitePositive(current.zoneHigh);
};
'''
)

replace_once(
    "scripts/process-trade-ledger.mjs",
    '''const automationEvent = (item, previous, report) => {
  const event = {
    id: `auto-${item.ticker}-${item.priceDate}`,
    tradeId: `${item.ticker}-${item.priceDate}`,
    type: "activated",
    mode: "automatic-eod",
    ticker: item.ticker,
    date: item.priceDate,
    price: item.close,
    zoneLow: item.action.zoneLow,
    zoneHigh: item.action.zoneHigh,
    zoneBasisDate: item.action.basisDate,
    stop: finitePositive(item.action.stop) ? item.action.stop : null,
    targets: Array.isArray(item.action.targets) ? item.action.targets.filter(finitePositive) : [],
    confirmation: {
      trigger: TRIGGER,
      priceTriggerPassed: true,
      eligibilityAtTrigger: "active",
      noHardVeto: true,
      zoneUnchangedSincePreviousEod: true,
      previousQuote: {
        date: previous.date,
        close: previous.close,
        relation: previous.relation
      }
    },
    sourceUrl: item.priceSource,
    note: "Tự động kích hoạt theo giá đóng cửa EOD; điều kiện định tính không được máy tự suy diễn."
  };
  if (validSourceUrl(item.priceSourceSecondary)) event.sourceUrlSecondary = item.priceSourceSecondary;
  if (report?.id) event.reportId = report.id;
  if (report?.file) event.reportFile = report.file;
  return event;
};
''',
    '''const automationEvent = (item, previous, report) => {
  const trigger = oneSidedTrigger(item.action);
  const event = {
    id: `auto-${item.ticker}-${item.priceDate}`,
    tradeId: `${item.ticker}-${item.priceDate}`,
    type: "activated",
    mode: "automatic-eod",
    ticker: item.ticker,
    date: item.priceDate,
    price: item.close,
    zoneLow: trigger ? null : item.action.zoneLow,
    zoneHigh: trigger ? null : item.action.zoneHigh,
    zoneBasisDate: item.action.basisDate,
    stop: finitePositive(item.action.stop) ? item.action.stop : null,
    targets: Array.isArray(item.action.targets) ? item.action.targets.filter(finitePositive) : [],
    confirmation: {
      trigger: trigger ? TRIGGER_THRESHOLD : TRIGGER_ZONE,
      priceTriggerPassed: true,
      eligibilityAtTrigger: "active",
      noHardVeto: true,
      lockedActionUnchangedSincePreviousEod: true,
      previousQuote: {
        date: previous.date,
        close: previous.close,
        relation: previous.relation
      }
    },
    sourceUrl: item.priceSource,
    note: trigger
      ? "Tự động kích hoạt theo giá đóng cửa EOD và ngưỡng một phía đã khóa; điều kiện định tính không được máy tự suy diễn."
      : "Tự động kích hoạt theo giá đóng cửa EOD; điều kiện định tính không được máy tự suy diễn."
  };
  if (trigger) {
    event.triggerType = trigger.type;
    event.triggerPrice = trigger.price;
  }
  if (validSourceUrl(item.priceSourceSecondary)) event.sourceUrlSecondary = item.priceSourceSecondary;
  if (report?.id) event.reportId = report.id;
  if (report?.file) event.reportFile = report.file;
  return event;
};
'''
)

replace_once(
    "scripts/process-trade-ledger.mjs",
    '''    const priceEnteredZone = previous.relation !== "inside" && current.relation === "inside";
    const eligible = item.action?.eligibility === "active";
    const zoneUnchanged = sameLockedZone(previous, current);
    const canStart = item.priceDate >= next.meta.startedAt;
    const hasOpenPosition = openTickers.has(item.ticker);
    const shouldActivate = priceEnteredZone && eligible && zoneUnchanged && canStart && !hasOpenPosition;
''',
    '''    const priceEnteredZone = previous.relation !== "inside" && current.relation === "inside";
    const eligible = item.action?.eligibility === "active";
    const lockedActionUnchanged = sameLockedAction(previous, current);
    const canStart = item.priceDate >= next.meta.startedAt;
    const hasOpenPosition = openTickers.has(item.ticker);
    const shouldActivate = priceEnteredZone && eligible && lockedActionUnchanged && canStart && !hasOpenPosition;
'''
)

replace_once(
    "scripts/process-trade-ledger.mjs",
    '''      const reason = !eligible
        ? `eligibility=${item.action?.eligibility || "unknown"}`
        : !zoneUnchanged
          ? "vùng mua đã thay đổi"
          : !canStart
''',
    '''      const reason = !eligible
        ? `eligibility=${item.action?.eligibility || "unknown"}`
        : !lockedActionUnchanged
          ? current.triggerType ? "ngưỡng kích hoạt đã thay đổi" : "vùng mua đã thay đổi"
          : !canStart
'''
)

replace_once(
    "src/scripts/trade-ledger.mjs",
    '''const EVENT_TYPES = new Set(["activated", "partial_exit", "closed"]);
const ACTIVATION_MODES = new Set(["manual", "automatic-eod"]);
const ISO_DATE = /^\\d{4}-\\d{2}-\\d{2}$/;

const finitePositive = (value) => Number.isFinite(value) && value > 0;
''',
    '''const EVENT_TYPES = new Set(["activated", "partial_exit", "closed"]);
const ACTIVATION_MODES = new Set(["manual", "automatic-eod"]);
const AUTOMATIC_TRIGGERS = new Set(["eod-close-transitioned-into-locked-zone", "eod-close-transitioned-into-locked-threshold"]);
const ONE_SIDED_TRIGGER_TYPES = new Set(["at-or-below", "at-or-above"]);
const ISO_DATE = /^\\d{4}-\\d{2}-\\d{2}$/;

const finitePositive = (value) => Number.isFinite(value) && value > 0;
const oneSidedTrigger = (value = {}) => ONE_SIDED_TRIGGER_TYPES.has(value.triggerType) && finitePositive(value.triggerPrice)
  ? { type: value.triggerType, price: value.triggerPrice }
  : null;
'''
)

replace_once(
    "src/scripts/trade-ledger.mjs",
    '''    return event.confirmation?.priceTriggerPassed === true
      && event.confirmation?.eligibilityAtTrigger === "active"
      && event.confirmation?.trigger === "eod-close-transitioned-into-locked-zone";
''',
    '''    return event.confirmation?.priceTriggerPassed === true
      && event.confirmation?.eligibilityAtTrigger === "active"
      && AUTOMATIC_TRIGGERS.has(event.confirmation?.trigger);
'''
)

replace_once(
    "src/scripts/trade-ledger.mjs",
    '''      if (!event.ticker || !finitePositive(event.zoneLow) || !finitePositive(event.zoneHigh) || event.zoneLow > event.zoneHigh || !validIsoDate(event.zoneBasisDate)) {
        issue(issues, event, "invalid_activation", "Sự kiện kích hoạt thiếu mã, ngày khóa hoặc vùng mua hợp lệ.");
        return;
      }
      if (event.price < event.zoneLow || event.price > event.zoneHigh) {
        issue(issues, event, "price_outside_locked_zone", "Giá kích hoạt không nằm trong vùng mua đã khóa.");
        return;
      }
''',
    '''      const lockedRange = finitePositive(event.zoneLow) && finitePositive(event.zoneHigh) && event.zoneLow <= event.zoneHigh;
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
'''
)

replace_once(
    "src/scripts/trade-ledger.mjs",
    '''        zoneLow: event.zoneLow,
        zoneHigh: event.zoneHigh,
        zoneBasisDate: event.zoneBasisDate,
''',
    '''        zoneLow: finitePositive(event.zoneLow) ? event.zoneLow : null,
        zoneHigh: finitePositive(event.zoneHigh) ? event.zoneHigh : null,
        triggerType: trigger?.type || null,
        triggerPrice: trigger?.price || null,
        zoneBasisDate: event.zoneBasisDate,
'''
)

replace_once(
    "src/scripts/app.js",
    '''  const ledgerReason = (value) => LEDGER_REASON_LABELS[value] || (value ? String(value).toLocaleUpperCase("vi") : "CHƯA GHI NHẬN");

  const renderLedgerEvent = (event) => {
''',
    '''  const ledgerReason = (value) => LEDGER_REASON_LABELS[value] || (value ? String(value).toLocaleUpperCase("vi") : "CHƯA GHI NHẬN");

  const lockedActionLabel = (value) => {
    if (value?.triggerType === "at-or-below" && Number.isFinite(value.triggerPrice)) return `Ngưỡng ≤ ${number(value.triggerPrice)}`;
    if (value?.triggerType === "at-or-above" && Number.isFinite(value.triggerPrice)) return `Ngưỡng ≥ ${number(value.triggerPrice)}`;
    return `Vùng ${number(value?.zoneLow)}–${number(value?.zoneHigh)}`;
  };

  const renderLedgerEvent = (event) => {
'''
)

replace_once(
    "src/scripts/app.js",
    '''    const detail = event.type === "activated"
      ? `Vùng khóa ${number(event.zoneLow)}–${number(event.zoneHigh)}`
      : ledgerReason(event.reason);
''',
    '''    const detail = event.type === "activated"
      ? `${lockedActionLabel(event)} đã khóa`
      : ledgerReason(event.reason);
'''
)

replace_once(
    "src/scripts/app.js",
    '''            <td data-label="Giá kích hoạt"><strong>${number(position.activationPrice)}</strong><span>Vùng ${number(position.zoneLow)}–${number(position.zoneHigh)}</span></td>
''',
    '''            <td data-label="Giá kích hoạt"><strong>${number(position.activationPrice)}</strong><span>${escapeHtml(lockedActionLabel(position))}</span></td>
'''
)

replace_once(
    "scripts/audit-site.mjs",
    '''    if (item.action?.eligibility === "active") {
      if (!isPositive(item.action.zoneLow) || !isPositive(item.action.zoneHigh) || item.action.zoneLow > item.action.zoneHigh) {
        fail(scope, "vùng mua active không hợp lệ");
      }
      if (!isIsoDate(item.action.basisDate)) fail(scope, "basisDate của vùng mua active không hợp lệ");
    }
''',
    '''    if (item.action?.eligibility === "active") {
      const lockedRange = isPositive(item.action.zoneLow) && isPositive(item.action.zoneHigh) && item.action.zoneLow <= item.action.zoneHigh;
      const lockedThreshold = ["at-or-below", "at-or-above"].includes(item.action.triggerType) && isPositive(item.action.triggerPrice);
      if (!lockedRange && !lockedThreshold) {
        fail(scope, "vùng mua/ngưỡng kích hoạt active không hợp lệ");
      }
      if (!isIsoDate(item.action.basisDate)) fail(scope, "basisDate của điều kiện active không hợp lệ");
    }
'''
)

# Regression tests: preserve all existing tests and add SHB one-sided cases.
test_path = p("tests/trade-ledger.test.mjs")
tests = test_path.read_text()
if "SHB one-sided: 11.650 -> 11.600" in tests:
    raise SystemExit("SHB regression tests already present unexpectedly")
insert = r'''

test("SHB one-sided: 11.650 -> 11.600 kích hoạt đúng một lần", () => {
  const shbAction = {
    zoneLow: null,
    zoneHigh: 11600,
    triggerType: "at-or-below",
    triggerPrice: 11600,
    basisDate: "2026-08-18",
    eligibility: "active",
    recommendation: "MUA",
    condition: "P <= 11.600",
    stop: 10950,
    targets: [12400, 16600]
  };
  assert.equal(quoteRelation(11650, shbAction), "above");
  assert.equal(quoteRelation(11600, shbAction), "inside");
  assert.equal(quoteRelation(11550, shbAction), "inside");

  const shbSource = {
    meta: { updated: "2026-08-18" },
    reports: [{ id: "SHB-20260818", ticker: "SHB", date: "2026-08-18", file: "reports/SHB_2026-08-18.pdf" }],
    coverage: [{ ticker: "SHB", close: 11600, priceDate: "2026-08-18", priceSource: priceUrl, action: shbAction }]
  };
  const shbLedger = ledger({ snapshot: false });
  shbLedger.meta.automation.lastEvaluatedQuotes = {
    SHB: {
      date: "2026-08-17",
      close: 11650,
      relation: "above",
      zoneLow: null,
      zoneHigh: 11600,
      triggerType: "at-or-below",
      triggerPrice: 11600,
      zoneBasisDate: "2026-08-18",
      eligibility: "active"
    }
  };
  shbLedger.meta.automation.lastEvaluatedAt = "2026-08-17";
  const first = processEodLedger(shbSource, shbLedger);
  assert.equal(first.stats.activated, 1);
  assert.equal(first.ledger.events.length, 1);
  const event = first.ledger.events[0];
  assert.equal(event.id, "auto-SHB-2026-08-18");
  assert.equal(event.mode, "automatic-eod");
  assert.equal(event.price, 11600);
  assert.equal(event.triggerType, "at-or-below");
  assert.equal(event.triggerPrice, 11600);
  assert.equal(event.confirmation.previousQuote.date, "2026-08-17");
  assert.equal(event.confirmation.previousQuote.close, 11650);
  assert.equal(event.confirmation.previousQuote.relation, "above");

  const projection = projectTradeLedger(first.ledger, shbSource.coverage);
  assert.equal(projection.issues.length, 0);
  assert.equal(projection.positions.length, 1);
  assert.equal(projection.positions[0].ticker, "SHB");
  assert.equal(projection.positions[0].triggerType, "at-or-below");
  assert.equal(projection.positions[0].triggerPrice, 11600);

  const second = processEodLedger(shbSource, first.ledger);
  assert.equal(second.changed, false);
  assert.equal(second.stats.activated, 0);
  assert.equal(second.ledger.events.length, 1);
});

test("one-sided không kích hoạt nếu ngưỡng bị thay đổi giữa hai EOD", () => {
  const shbSource = {
    meta: { updated: "2026-08-18" },
    reports: [],
    coverage: [{
      ticker: "SHB",
      close: 11600,
      priceDate: "2026-08-18",
      priceSource: priceUrl,
      action: { zoneLow: null, zoneHigh: 11600, triggerType: "at-or-below", triggerPrice: 11600, basisDate: "2026-08-18", eligibility: "active" }
    }]
  };
  const base = ledger({ snapshot: false });
  base.meta.automation.lastEvaluatedQuotes = {
    SHB: { date: "2026-08-17", close: 11650, relation: "above", zoneLow: null, zoneHigh: 11700, triggerType: "at-or-below", triggerPrice: 11700, zoneBasisDate: "2026-08-18", eligibility: "active" }
  };
  base.meta.automation.lastEvaluatedAt = "2026-08-17";
  const result = processEodLedger(shbSource, base);
  assert.equal(result.stats.activated, 0);
  assert.equal(result.stats.blocked, 1);
  assert.match(result.warnings[0], /ngưỡng kích hoạt đã thay đổi/);
});
'''
test_path.write_text(tests + insert)

replace_once("index.html", "assets/js/site.min.js?v=20260817-eod3", "assets/js/site.min.js?v=20260818-shb-threshold1")

# Update internal SHB action metadata without inventing a lower bound.
data_path = p("src/data/research-data.js")
raw = data_path.read_text().strip()
prefix = "window.RESEARCH_DATA = "
if not raw.startswith(prefix) or not raw.endswith(";"):
    raise SystemExit("Unexpected research-data.js serialization")
data = json.loads(raw[len(prefix):-1])
shb_cov = next((x for x in data["coverage"] if x.get("ticker") == "SHB"), None)
shb_report = next((x for x in data["reports"] if x.get("id") == "SHB-20260818"), None)
if not shb_cov or not shb_report:
    raise SystemExit("SHB report/coverage missing")
if shb_cov.get("close") != 11600 or shb_cov.get("priceDate") != "2026-08-18":
    raise SystemExit("SHB current EOD is not the verified 18 Aug close")
for holder in (shb_cov, shb_report):
    action = holder.get("action") or {}
    if action.get("zoneLow") is not None or action.get("zoneHigh") != 11600:
        raise SystemExit("Unexpected SHB one-sided source condition")
    action["triggerType"] = "at-or-below"
    action["triggerPrice"] = 11600
    action["eligibility"] = "active"
    holder["action"] = action
data_path.write_text("window.RESEARCH_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")

# Restore only SHB's verified previous EOD baseline so the upgraded engine can
# create the missing 18 Aug event itself; do not fabricate or hand-write the event.
ledger_path = p("src/data/trade-ledger.json")
ledger = json.loads(ledger_path.read_text())
if any(e.get("ticker") == "SHB" and e.get("type") == "activated" for e in ledger.get("events", [])):
    raise SystemExit("SHB activation already exists; refuse duplicate recovery")
current = ledger.get("meta", {}).get("automation", {}).get("lastEvaluatedQuotes", {}).get("SHB")
if not current or current.get("date") != "2026-08-18" or current.get("close") != 11600 or current.get("relation") != "unavailable":
    raise SystemExit("Current SHB ledger snapshot is not the known bug state")
old_text = subprocess.check_output(
    ["git", "show", "22396d8a1c8c442ae2e0bd58d6571db360a111c5^:src/data/trade-ledger.json"],
    cwd=ROOT,
    text=True,
)
old_ledger = json.loads(old_text)
previous = old_ledger["meta"]["automation"]["lastEvaluatedQuotes"]["SHB"]
if previous.get("date") != "2026-08-17" or previous.get("close") != 11650:
    raise SystemExit("Verified SHB 17 Aug baseline not found in repository history")
automation = ledger["meta"]["automation"]
automation["version"] = 2
automation["lastEvaluatedQuotes"]["SHB"] = {
    "date": "2026-08-17",
    "close": 11650,
    "relation": "above",
    "zoneLow": None,
    "zoneHigh": 11600,
    "triggerType": "at-or-below",
    "triggerPrice": 11600,
    "zoneBasisDate": "2026-08-18",
    "eligibility": "active",
}
ledger_path.write_text(json.dumps(ledger, ensure_ascii=False, indent=2) + "\n")

print("Prepared SHB one-sided trigger repair; engine must create event on next EOD processing step.")

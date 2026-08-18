from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]

EXPECTED = {
    "index.html": "c4a4cbfb4efc01ee664ad97719d8bec05e573ef4",
    "src/scripts/app.js": "e4d2e33a837835c671d6a4e1c02f91651da79d16",
    "src/scripts/trade-ledger.mjs": "c6fe3f314aa24e12b376480b89417e7cfe1dff4f",
    "scripts/process-trade-ledger.mjs": "42fe6296c8e2b007e0b481c6fa0b52480675961f",
    "scripts/audit-site.mjs": "93caa423ee4404a79e9643d40682af974252d7dd",
    ".github/workflows/pages.yml": "4be9130193723e2d0db547757080cf3cb94c5537",
}


def git_blob(rel):
    return subprocess.check_output(["git", "hash-object", rel], cwd=ROOT, text=True).strip()


def replace_once(rel, old, new):
    path = ROOT / rel
    text = path.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{rel}: expected exactly one literal match, got {count}")
    path.write_text(text.replace(old, new, 1))


def regex_once(rel, pattern, replacement, flags=0):
    path = ROOT / rel
    text = path.read_text()
    updated, count = re.subn(pattern, replacement, text, count=1, flags=flags)
    if count != 1:
        raise SystemExit(f"{rel}: expected exactly one regex match, got {count}: {pattern}")
    path.write_text(updated)


for rel, expected in EXPECTED.items():
    actual = git_blob(rel)
    if actual != expected:
        raise SystemExit(f"{rel}: unexpected pre-hardening blob {actual}, expected {expected}")

# 1) Backend EOD processor -> shared trigger engine.
replace_once(
    "scripts/process-trade-ledger.mjs",
    'import { projectTradeLedger, validIsoDate, validSourceUrl } from "../src/scripts/trade-ledger.mjs";\n',
    'import { projectTradeLedger, validIsoDate, validSourceUrl } from "../src/scripts/trade-ledger.mjs";\nimport { classifyPrice, finitePositive, parseActionTrigger, sameLockedTrigger, snapshotTriggerState } from "../src/scripts/action-trigger.mjs";\n'
)
regex_once(
    "scripts/process-trade-ledger.mjs",
    r'''const TRIGGER_ZONE = "eod-close-transitioned-into-locked-zone";\nconst TRIGGER_THRESHOLD = "eod-close-transitioned-into-locked-threshold";\nconst TICKER = /\^\[A-Z0-9\]\{2,8\}\$/;\nconst ONE_SIDED_TRIGGER_TYPES = new Set\(\["at-or-below", "at-or-above"\]\);\n\nconst finitePositive = \(value\) => Number\.isFinite\(value\) && value > 0;\nconst clone = \(value\) => JSON\.parse\(JSON\.stringify\(value\)\);\nconst oneSidedTrigger = \(action = \{\}\) => ONE_SIDED_TRIGGER_TYPES\.has\(action\.triggerType\) && finitePositive\(action\.triggerPrice\)\n  \? \{ type: action\.triggerType, price: action\.triggerPrice \}\n  : null;\n\nexport const quoteRelation = \(close, action = \{\}\) => \{\n  if \(!finitePositive\(close\)\) return "unavailable";\n  const trigger = oneSidedTrigger\(action\);\n  if \(trigger\?\.type === "at-or-below"\) return close <= trigger\.price \? "inside" : "above";\n  if \(trigger\?\.type === "at-or-above"\) return close >= trigger\.price \? "inside" : "below";\n  if \(!finitePositive\(action\.zoneLow\) \|\| !finitePositive\(action\.zoneHigh\) \|\| action\.zoneLow > action\.zoneHigh\) return "unavailable";\n  if \(close < action\.zoneLow\) return "below";\n  if \(close > action\.zoneHigh\) return "above";\n  return "inside";\n\};\n\nconst snapshotFor = \(item\) => \{.*?\n\};\n\nconst sameLockedAction = \(previous, current\) => \{.*?\n\};''',
    '''const TRIGGER_ZONE = "eod-close-transitioned-into-locked-zone";\nconst TRIGGER_THRESHOLD = "eod-close-transitioned-into-locked-threshold";\nconst TICKER = /^[A-Z0-9]{2,8}$/;\n\nconst clone = (value) => JSON.parse(JSON.stringify(value));\n\nexport const quoteRelation = (close, action = {}) => classifyPrice(close, action).relation;\n\nconst snapshotFor = (item) => ({\n  date: item.priceDate,\n  close: item.close,\n  relation: classifyPrice(item.close, item.action).relation,\n  ...snapshotTriggerState(item.action),\n  eligibility: typeof item.action?.eligibility === "string" ? item.action.eligibility : "unknown"\n});''',
    flags=re.S
)
replace_once(
    "scripts/process-trade-ledger.mjs",
    "  const trigger = oneSidedTrigger(item.action);\n  const event = {",
    "  const trigger = parseActionTrigger(item.action);\n  const oneSided = trigger && trigger.kind !== \"range\";\n  const event = {"
)
for old, new in [
    ("    zoneLow: trigger ? null : item.action.zoneLow,", "    zoneLow: oneSided ? null : item.action.zoneLow,"),
    ("    zoneHigh: trigger ? null : item.action.zoneHigh,", "    zoneHigh: oneSided ? null : item.action.zoneHigh,"),
    ("      trigger: trigger ? TRIGGER_THRESHOLD : TRIGGER_ZONE,", "      trigger: oneSided ? TRIGGER_THRESHOLD : TRIGGER_ZONE,"),
    ("    note: trigger\n", "    note: oneSided\n"),
    ("  if (trigger) {\n    event.triggerType = trigger.type;\n    event.triggerPrice = trigger.price;\n  }", "  if (oneSided) {\n    event.triggerType = trigger.kind;\n    event.triggerPrice = trigger.price;\n  }"),
    ("    const lockedActionUnchanged = sameLockedAction(previous, current);", "    const lockedActionUnchanged = sameLockedTrigger(previous, current);")
]:
    replace_once("scripts/process-trade-ledger.mjs", old, new)

# 2) Ledger projector -> same shared trigger parser/classifier.
regex_once(
    "src/scripts/trade-ledger.mjs",
    r'''^const EVENT_TYPES = new Set\(\["activated", "partial_exit", "closed"\]\);\nconst ACTIVATION_MODES = new Set\(\["manual", "automatic-eod"\]\);\nconst AUTOMATIC_TRIGGERS = new Set\(\["eod-close-transitioned-into-locked-zone", "eod-close-transitioned-into-locked-threshold"\]\);\nconst ONE_SIDED_TRIGGER_TYPES = new Set\(\["at-or-below", "at-or-above"\]\);\nconst ISO_DATE = /\^\\d\{4\}-\\d\{2\}-\\d\{2\}\$/;\n\nconst finitePositive = \(value\) => Number\.isFinite\(value\) && value > 0;\nconst oneSidedTrigger = \(value = \{\}\) => ONE_SIDED_TRIGGER_TYPES\.has\(value\.triggerType\) && finitePositive\(value\.triggerPrice\)\n  \? \{ type: value\.triggerType, price: value\.triggerPrice \}\n  : null;''',
    '''import { classifyPrice, finitePositive, parseActionTrigger } from "./action-trigger.mjs";\n\nconst EVENT_TYPES = new Set(["activated", "partial_exit", "closed"]);\nconst ACTIVATION_MODES = new Set(["manual", "automatic-eod"]);\nconst AUTOMATIC_TRIGGERS = new Set(["eod-close-transitioned-into-locked-zone", "eod-close-transitioned-into-locked-threshold"]);\nconst ISO_DATE = /^\\d{4}-\\d{2}-\\d{2}$/;''',
    flags=re.M
)
old_activation = '''      const lockedRange = finitePositive(event.zoneLow) && finitePositive(event.zoneHigh) && event.zoneLow <= event.zoneHigh;\n      const trigger = oneSidedTrigger(event);\n      if (!event.ticker || (!lockedRange && !trigger) || !validIsoDate(event.zoneBasisDate)) {\n        issue(issues, event, "invalid_activation", "Sự kiện kích hoạt thiếu mã, ngày khóa hoặc điều kiện giá hợp lệ.");\n        return;\n      }\n      const priceTriggerPassed = trigger?.type === "at-or-below"\n        ? event.price <= trigger.price\n        : trigger?.type === "at-or-above"\n          ? event.price >= trigger.price\n          : event.price >= event.zoneLow && event.price <= event.zoneHigh;\n      if (!priceTriggerPassed) {\n        issue(issues, event, "price_outside_locked_zone", "Giá kích hoạt không thỏa vùng/ngưỡng đã khóa.");\n        return;\n      }'''
new_activation = '''      const trigger = parseActionTrigger(event);\n      if (!event.ticker || !trigger || !validIsoDate(event.zoneBasisDate)) {\n        issue(issues, event, "invalid_activation", "Sự kiện kích hoạt thiếu mã, ngày khóa hoặc điều kiện giá hợp lệ.");\n        return;\n      }\n      if (classifyPrice(event.price, event).relation !== "inside") {\n        issue(issues, event, "price_outside_locked_zone", "Giá kích hoạt không thỏa vùng/ngưỡng đã khóa.");\n        return;\n      }'''
replace_once("src/scripts/trade-ledger.mjs", old_activation, new_activation)
for old, new in [
    ("        zoneLow: finitePositive(event.zoneLow) ? event.zoneLow : null,", "        zoneLow: trigger.kind === \"range\" ? trigger.low : null,"),
    ("        zoneHigh: finitePositive(event.zoneHigh) ? event.zoneHigh : null,", "        zoneHigh: trigger.kind === \"range\" ? trigger.high : null,"),
    ("        triggerType: trigger?.type || null,", "        triggerType: trigger.kind === \"range\" ? null : trigger.kind,"),
    ("        triggerPrice: trigger?.price || null,", "        triggerPrice: trigger.kind === \"range\" ? null : trigger.price,")
]:
    replace_once("src/scripts/trade-ledger.mjs", old, new)

# 3) Site audit -> active action validity comes from the shared engine.
replace_once(
    "scripts/audit-site.mjs",
    'import { projectTradeLedger } from "../src/scripts/trade-ledger.mjs";\n',
    'import { projectTradeLedger } from "../src/scripts/trade-ledger.mjs";\nimport { parseActionTrigger } from "../src/scripts/action-trigger.mjs";\n'
)
old_audit = '''    if (item.action?.eligibility === "active") {\n      const lockedRange = isPositive(item.action.zoneLow) && isPositive(item.action.zoneHigh) && item.action.zoneLow <= item.action.zoneHigh;\n      const lockedThreshold = ["at-or-below", "at-or-above"].includes(item.action.triggerType) && isPositive(item.action.triggerPrice);\n      if (!lockedRange && !lockedThreshold) {\n        fail(scope, "vùng mua/ngưỡng kích hoạt active không hợp lệ");\n      }\n      if (!isIsoDate(item.action.basisDate)) fail(scope, "basisDate của điều kiện active không hợp lệ");\n    }'''
new_audit = '''    if (item.action?.eligibility === "active") {\n      if (!parseActionTrigger(item.action)) fail(scope, "điều kiện kích hoạt active không hợp lệ theo shared Trigger Engine");\n      if (!isIsoDate(item.action.basisDate)) fail(scope, "basisDate của điều kiện active không hợp lệ");\n    }'''
replace_once("scripts/audit-site.mjs", old_audit, new_audit)

# 4) Frontend -> same distance/parser semantics as backend.
replace_once(
    "src/scripts/app.js",
    'import { projectTradeLedger } from "./trade-ledger.mjs";\n',
    'import { projectTradeLedger } from "./trade-ledger.mjs";\nimport { distanceToTrigger, triggerDisplayModel } from "./action-trigger.mjs";\n'
)
old_distance = '''  const actionDistance = (item) => {\n    const action = item?.action;\n    if (!action || !Number.isFinite(item.close) || !Number.isFinite(action.zoneLow) || !Number.isFinite(action.zoneHigh)) return null;\n    if (item.close < action.zoneLow) return { value: ((action.zoneLow - item.close) / action.zoneLow) * 100, relation: "below", edge: action.zoneLow };\n    if (item.close > action.zoneHigh) return { value: ((item.close - action.zoneHigh) / action.zoneHigh) * 100, relation: "above", edge: action.zoneHigh };\n    return { value: 0, relation: "inside", edge: item.close };\n  };'''
new_distance = '''  const actionDistance = (item) => distanceToTrigger(item?.close, item?.action);\n\n  const actionTriggerText = (action) => {\n    const trigger = triggerDisplayModel(action);\n    if (!trigger) return "—";\n    if (trigger.kind === "range") return `${number(trigger.low)}–${number(trigger.high)}`;\n    if (trigger.kind === "at-or-below") return `≤ ${number(trigger.price)}`;\n    return `≥ ${number(trigger.price)}`;\n  };'''
replace_once("src/scripts/app.js", old_distance, new_distance)
old_locked_label = '''  const lockedActionLabel = (value) => {\n    if (value?.triggerType === "at-or-below" && Number.isFinite(value.triggerPrice)) return `Ngưỡng ≤ ${number(value.triggerPrice)}`;\n    if (value?.triggerType === "at-or-above" && Number.isFinite(value.triggerPrice)) return `Ngưỡng ≥ ${number(value.triggerPrice)}`;\n    return `Vùng ${number(value?.zoneLow)}–${number(value?.zoneHigh)}`;\n  };'''
new_locked_label = '''  const lockedActionLabel = (value) => {\n    const trigger = triggerDisplayModel(value);\n    if (!trigger) return "Điều kiện —";\n    if (trigger.kind === "range") return `Vùng ${number(trigger.low)}–${number(trigger.high)}`;\n    if (trigger.kind === "at-or-below") return `Ngưỡng ≤ ${number(trigger.price)}`;\n    return `Ngưỡng ≥ ${number(trigger.price)}`;\n  };'''
replace_once("src/scripts/app.js", old_locked_label, new_locked_label)
app_path = ROOT / "src/scripts/app.js"
app = app_path.read_text()
app = app.replace('${number(action.zoneLow)}–${number(action.zoneHigh)}', '${actionTriggerText(action)}')
old_card = '${action && Number.isFinite(action.zoneLow) ? `<div class="card-action-band"><span>${isTrading ? "Vùng mua kỹ thuật" : rank ? `Ưu tiên #${rank}` : "Vùng mua"}</span><strong>${actionTriggerText(action)}</strong><small>${distance ? `${decimal(distance.value)}% • ${relationLabel(quoteWithAction)}` : "—"}</small></div>` : ""}'
new_card = '${action && triggerDisplayModel(action) ? `<div class="card-action-band"><span>${isTrading ? "Vùng mua kỹ thuật" : rank ? `Ưu tiên #${rank}` : "Vùng mua"}</span><strong>${actionTriggerText(action)}</strong><small>${distance ? `${decimal(distance.value)}% • ${relationLabel(quoteWithAction)}` : "—"}</small></div>` : ""}'
if old_card not in app:
    raise SystemExit("src/scripts/app.js: report card trigger condition not found after range-label replacement")
app = app.replace(old_card, new_card, 1)
app_path.write_text(app)

# 5) Production Pages workflow -> reconciliation + full tests + post-deploy byte verification.
pages = '''name: Deploy website to GitHub Pages\n\non:\n  push:\n    branches:\n      - main\n  workflow_dispatch:\n\npermissions:\n  contents: write\n  pages: write\n  id-token: write\n\nconcurrency:\n  group: pages\n  cancel-in-progress: false\n\njobs:\n  deploy:\n    environment:\n      name: github-pages\n      url: ${{ steps.deployment.outputs.page_url }}\n    runs-on: ubuntu-latest\n    timeout-minutes: 30\n    steps:\n      - name: Check out repository\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 2\n      - name: Set up Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: 22\n      - name: Record pre-processing ledger\n        run: cp src/data/trade-ledger.json "${RUNNER_TEMP}/trade-ledger-before.json"\n      - name: Process EOD activation ledger\n        run: node scripts/process-trade-ledger.mjs\n      - name: Reconcile expected versus actual activations\n        run: |\n          node scripts/reconcile-trade-ledger.mjs \\\n            --before "${RUNNER_TEMP}/trade-ledger-before.json" \\\n            --after src/data/trade-ledger.json \\\n            --research src/data/research-data.js \\\n            --report "${RUNNER_TEMP}/ledger-reconciliation.json"\n      - name: Run all trigger and ledger tests\n        run: node --test tests/*.test.mjs\n      - name: Build production assets\n        run: bash scripts/build/build-assets.sh\n      - name: Audit site integrity\n        run: node scripts/audit-site.mjs\n      - name: Prepare lean production artifact\n        run: bash scripts/build/prepare-site.sh "${RUNNER_TEMP}/site"\n      - name: Persist new EOD ledger events\n        run: |\n          if ! git diff --quiet -- src/data/trade-ledger.json; then\n            git config user.name "github-actions[bot]"\n            git config user.email "41898282+github-actions[bot]@users.noreply.github.com"\n            git add src/data/trade-ledger.json\n            git commit -m "Record EOD signal activations [skip ci]"\n            git push\n          fi\n      - name: Configure GitHub Pages\n        uses: actions/configure-pages@v5\n        with:\n          enablement: true\n      - name: Upload website artifact\n        uses: actions/upload-pages-artifact@v4\n        with:\n          path: ${{ runner.temp }}/site\n      - name: Deploy to GitHub Pages\n        id: deployment\n        uses: actions/deploy-pages@v4\n      - name: Post-deploy byte verification\n        run: |\n          node scripts/verify-live-site.mjs \\\n            --site-url "${{ steps.deployment.outputs.page_url }}" \\\n            --artifact-root "${RUNNER_TEMP}/site"\n'''
(ROOT / ".github/workflows/pages.yml").write_text(pages)

# 6) Cache-bust the hardening deployment only; no DOM/layout change.
replace_once(
    "index.html",
    'assets/js/site.min.js?v=20260818-shb-threshold1',
    'assets/js/site.min.js?v=20260818-trigger-engine2'
)

# Structural guard inside the patcher.
html = (ROOT / "index.html").read_text()
order = [match.group(2) for match in re.finditer(r'<section\\b[^>]*\\bid=([\'\"])([^\'\"]+)\\1[^>]*>', html)]
expected_order = ["overview", "daily-market", "position-ledger", "action-radar", "research"]
if order != expected_order:
    raise SystemExit(f"Section order changed: {order}")

print("Trigger-engine hardening patch applied successfully.")

from pathlib import Path

path = Path(__file__).resolve().parent / "harden-trigger-engine-once.py"
text = path.read_text()

old = "updated, count = re.subn(pattern, replacement, text, count=1, flags=flags)"
new = "updated, count = re.subn(pattern, lambda _match: replacement, text, count=1, flags=flags)"
if text.count(old) != 1:
    raise SystemExit(f"Expected one regex helper line, found {text.count(old)}")
text = text.replace(old, new, 1)

old_snapshot = '''const snapshotFor = (item) => ({\n  date: item.priceDate,\n  close: item.close,\n  relation: classifyPrice(item.close, item.action).relation,\n  ...snapshotTriggerState(item.action),\n  eligibility: typeof item.action?.eligibility === "string" ? item.action.eligibility : "unknown"\n});'''
new_snapshot = '''const snapshotFor = (item) => {\n  const triggerState = snapshotTriggerState(item.action);\n  const snapshot = {\n    date: item.priceDate,\n    close: item.close,\n    relation: classifyPrice(item.close, item.action).relation,\n    zoneLow: triggerState.zoneLow,\n    zoneHigh: triggerState.zoneHigh,\n    zoneBasisDate: triggerState.zoneBasisDate,\n    eligibility: typeof item.action?.eligibility === "string" ? item.action.eligibility : "unknown"\n  };\n  if (triggerState.triggerType) {\n    snapshot.triggerType = triggerState.triggerType;\n    snapshot.triggerPrice = triggerState.triggerPrice;\n  }\n  return snapshot;\n};'''
if text.count(old_snapshot) != 1:
    raise SystemExit(f"Expected one generated snapshot block, found {text.count(old_snapshot)}")
text = text.replace(old_snapshot, new_snapshot, 1)

lines = text.splitlines()
matches = [i for i, line in enumerate(lines) if line.startswith("order = [match.group(2) for match in re.finditer(")]
if len(matches) != 1:
    raise SystemExit(f"Expected one structural guard line, found {len(matches)}")
lines[matches[0]] = r'''order = [match.group(2) for match in re.finditer(r'<section\b[^>]*\bid=([\'\"])([^\'\"]+)\1[^>]*>', html)]'''

path.write_text("\n".join(lines) + "\n")
print("Hardening patcher escaping, structural guard and snapshot idempotence fixed.")

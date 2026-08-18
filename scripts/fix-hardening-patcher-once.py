from pathlib import Path

path = Path(__file__).resolve().parent / "harden-trigger-engine-once.py"
text = path.read_text()

old = "updated, count = re.subn(pattern, replacement, text, count=1, flags=flags)"
new = "updated, count = re.subn(pattern, lambda _match: replacement, text, count=1, flags=flags)"
if text.count(old) != 1:
    raise SystemExit(f"Expected one regex helper line, found {text.count(old)}")
text = text.replace(old, new, 1)

old_ordering = '''  ...snapshotTriggerState(item.action),\\n  eligibility: typeof item.action?.eligibility === "string" ? item.action.eligibility : "unknown"'''
new_ordering = '''  zoneLow: snapshotTriggerState(item.action).zoneLow,\\n  zoneHigh: snapshotTriggerState(item.action).zoneHigh,\\n  zoneBasisDate: snapshotTriggerState(item.action).zoneBasisDate,\\n  eligibility: typeof item.action?.eligibility === "string" ? item.action.eligibility : "unknown",\\n  ...(snapshotTriggerState(item.action).triggerType ? { triggerType: snapshotTriggerState(item.action).triggerType, triggerPrice: snapshotTriggerState(item.action).triggerPrice } : {})'''
if text.count(old_ordering) != 1:
    raise SystemExit(f"Expected one generated snapshot ordering fragment, found {text.count(old_ordering)}")
text = text.replace(old_ordering, new_ordering, 1)

lines = text.splitlines()
matches = [i for i, line in enumerate(lines) if line.startswith("order = [match.group(2) for match in re.finditer(")]
if len(matches) != 1:
    raise SystemExit(f"Expected one structural guard line, found {len(matches)}")
lines[matches[0]] = r'''order = [match.group(2) for match in re.finditer(r'<section\b[^>]*\bid=([\'\"])([^\'\"]+)\1[^>]*>', html)]'''

path.write_text("\n".join(lines) + "\n")
print("Hardening patcher escaping, structural guard and snapshot ordering fixed.")

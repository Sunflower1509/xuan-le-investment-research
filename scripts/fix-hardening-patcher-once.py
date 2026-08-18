from pathlib import Path

path = Path(__file__).resolve().parent / "harden-trigger-engine-once.py"
text = path.read_text()
old = "updated, count = re.subn(pattern, replacement, text, count=1, flags=flags)"
new = "updated, count = re.subn(pattern, lambda _match: replacement, text, count=1, flags=flags)"
if text.count(old) != 1:
    raise SystemExit(f"Expected one regex helper line, found {text.count(old)}")
path.write_text(text.replace(old, new, 1))
print("Hardening patcher replacement escaping fixed.")

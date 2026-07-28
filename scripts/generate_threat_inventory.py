import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SERVER = Path(r"C:\TrueUO")
SOURCE = SERVER / "Scripts"
INPUT = ROOT / "docs" / "data" / "threat-inventory-v2.json"
OUTPUT = ROOT / "docs" / "data" / "threat-inventory-v3.json"

CLASS_RE = re.compile(r"\bclass\s+(\w+)(?:\s*<[^>{}]+>)?\s*:\s*([\w.<>]+)")
HITS_RE = re.compile(r"\bSetHits\(\s*(\d+)\s*(?:,\s*(\d+)\s*)?\)")
SEED_RE = re.compile(r"\bHitsMaxSeed\s*=\s*(\d+)")
HITS_MAX_RE = re.compile(r"\bHitsMax\s*=>\s*([^;]+)")

THRESHOLDS = [
    (200, "Trivial"), (450, "Common"), (1000, "Dangerous"),
    (4000, "Deadly"), (20000, "Legendary"), (80000, "Mythic"),
    (150000, "Cataclysmic"), (300000, "World Threat"),
]

ANCHORS = {
    "Zombie": "Trivial", "Skeleton": "Trivial", "Harpy": "Trivial",
    "Troll": "Trivial", "Drake": "Common", "Dragon": "Dangerous",
    "GreaterDragon": "Deadly", "Neira": "Legendary", "Harrower": "Mythic",
}


def block(text, opening):
    depth = 0
    for index in range(opening, len(text)):
        if text[index] == "{":
            depth += 1
        elif text[index] == "}":
            depth -= 1
            if depth == 0:
                return text[opening:index + 1]
    return text[opening:]


def classes():
    result = {}
    for path in SOURCE.rglob("*.cs"):
        text = path.read_text(encoding="utf-8-sig", errors="ignore")
        for match in CLASS_RE.finditer(text):
            opening = text.find("{", match.end())
            if opening < 0:
                continue
            result.setdefault(match.group(1), []).append({
                "base": match.group(2).split("<", 1)[0].split(".")[-1],
                "body": block(text, opening),
                "path": path,
            })
    return result


def own_range(body):
    values = []
    for match in HITS_RE.finditer(body):
        low = int(match.group(1))
        high = int(match.group(2) or match.group(1))
        values.append((low, high))
    for match in SEED_RE.finditer(body):
        value = int(match.group(1))
        values.append((value, value))
    for match in HITS_MAX_RE.finditer(body):
        numbers = [int(value) for value in re.findall(r"\d+", match.group(1))]
        if numbers:
            values.append((min(numbers), max(numbers)))
    if not values:
        return None
    return min(value[0] for value in values), max(value[1] for value in values)


def resolve(name, catalog, stack=None):
    stack = set(stack or ())
    if name in stack:
        return None
    stack.add(name)
    candidates = catalog.get(name, ())
    for candidate in candidates:
        value = own_range(candidate["body"])
        if value:
            return value
    for candidate in candidates:
        value = resolve(candidate["base"], catalog, stack)
        if value:
            return value
    return None


def threat_class(value):
    for ceiling, name in THRESHOLDS:
        if value < ceiling:
            return name
    return "Apocalyptic"


def main():
    source_rows = json.loads(INPUT.read_text(encoding="utf-8-sig"))
    catalog = classes()
    rows = []
    unresolved = []
    for source in source_rows:
        name = source["name"]
        value = resolve(name, catalog)
        if value is None:
            unresolved.append(name)
            low = high = None
            low_class = high_class = "Não resolvido"
        else:
            low, high = value
            low_class, high_class = threat_class(low), threat_class(high)
        expected = ANCHORS.get(name)
        rows.append({
            "name": name,
            "class": low_class if low_class == high_class else f"{low_class}–{high_class}",
            "abilities": source.get("abilities", "Nenhuma detectada"),
            "anchor": expected is not None,
            "expectedClass": expected,
            "validation": None if expected is None else ("pass" if low_class == high_class == expected else "review"),
        })
    OUTPUT.write_text(json.dumps(rows, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"generated {len(rows)} rows; unresolved={len(unresolved)}")
    if unresolved:
        print("unresolved: " + ", ".join(unresolved))
    return 0


if __name__ == "__main__":
    sys.exit(main())

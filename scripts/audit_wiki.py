import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"

BASELINE_PATHS = {
    "arena.md", "comandos.md", "index.md", "patches.md", "personagem.md",
    "proximo-patch.md", "sistemas-desativados.md", "assets/favicon.png",
    "assets/logo.png", "stylesheets/extra.css", "combate/armor-parrying.md",
    "combate/cura-recursos.md", "combate/exemplos-dano.md", "combate/magery.md",
    "combate/melee-archery.md", "combate/poison.md",
}

REQUIRED_HEADINGS = {
    "arena.md": ["# Arena", "## Arenas disponíveis", "## PvP Trainer"],
    "comandos.md": ["# Comandos de jogador", "## `[PvPCamp`", "## `.arena`"],
    "personagem.md": ["# Personagem", "## Base inicial", "## Stats e buffs", "## Raça"],
    "combate/magery.md": ["# Magery", "## Fluxo de cast", "## Dano e mana"],
    "combate/melee-archery.md": ["# Melee e Archery", "## Chance de acerto", "## Velocidade"],
    "combate/armor-parrying.md": ["# Armor e Parrying", "## Regiões corporais", "## Escudos"],
    "combate/cura-recursos.md": ["# Cura e recursos", "## Faixas de cura", "## Mana"],
    "combate/exemplos-dano.md": ["# Exemplos de dano", "## Faixas de dano bruto"],
    "combate/poison.md": ["# Poison"],
    "patches.md": ["# Patch notes", "## 0.1.0", "## 0.7.0"],
    "proximo-patch.md": ["# Próximo Patch Planejado"],
    "sistemas-desativados.md": ["# Sistemas desativados", "## Pets e summons"],
}


def anchors(text):
    result = set()
    for heading in re.findall(r"^#{1,6}\s+(.+?)\s*$", text, re.M):
        value = re.sub(r"[`*_]", "", heading).strip().lower()
        value = re.sub(r"[^\w\s-]", "", value, flags=re.UNICODE)
        result.add(re.sub(r"[\s-]+", "-", value).strip("-"))
    return result


def main():
    errors = []
    for relative in sorted(BASELINE_PATHS):
        if not (DOCS / relative).is_file():
            errors.append(f"baseline path missing: {relative}")

    for relative, headings in REQUIRED_HEADINGS.items():
        text = (DOCS / relative).read_text(encoding="utf-8-sig")
        for heading in headings:
            if heading not in text:
                errors.append(f"baseline heading missing: {relative}: {heading}")

    link_pattern = re.compile(r"(?<!!)\[[^\]]+\]\(([^)]+)\)")
    for page in DOCS.rglob("*.md"):
        text = page.read_text(encoding="utf-8-sig")
        for target in link_pattern.findall(text):
            if target.startswith(("http://", "https://", "mailto:")):
                continue
            path_part, _, fragment = target.partition("#")
            destination = (page.parent / path_part).resolve() if path_part else page.resolve()
            if not destination.is_file():
                errors.append(f"broken link: {page.relative_to(DOCS)} -> {target}")
                continue
            if fragment and destination.suffix.lower() == ".md":
                target_text = destination.read_text(encoding="utf-8-sig")
                if fragment not in anchors(target_text):
                    errors.append(f"broken anchor: {page.relative_to(DOCS)} -> {target}")

    if errors:
        print("\n".join(errors))
        return 1
    print(f"wiki audit passed: {len(BASELINE_PATHS)} baseline paths preserved")
    return 0


if __name__ == "__main__":
    sys.exit(main())

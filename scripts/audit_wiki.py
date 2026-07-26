import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"

BASELINE_PATHS = {
    "arena.md", "comandos.md", "index.md", "patches.md", "personagem.md",
    "proximo-patch.md", "sistemas-desativados.md", "primeiros-passos/dob-razor.md",
    "assets/favicon.png",
    "assets/logo.png", "stylesheets/extra.css", "combate/armor-parrying.md",
    "combate/cura-recursos.md", "combate/exemplos-dano.md", "combate/magery.md",
    "combate/melee-archery.md", "combate/poison.md",
}

REQUIRED_HEADINGS = {
    "arena.md": ["# Arena", "## Arenas disponíveis", "## PvP Trainer"],
    "primeiros-passos/dob-razor.md": [
        "# DoB Razor", "## Funções reutilizáveis", "## Compatibilidade e diagnóstico",
    ],
    "comandos.md": [
        "# Comandos de jogador", "## `.arena`", "## `.pvpcamp`",
        "## `.patchnotes`", "## `.pvptrainer`",
    ],
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

REQUIRED_LIVE_CLAIMS = {
    "personagem.md": ["primeiro personagem elegível por IP"],
    "primeiros-passos/personagem-inicial.md": ["primeiro personagem elegível por IP"],
    "combate/melee-archery.md": ["Speed 4.5", "permanece parado por 250 ms"],
    "combate/exemplos-dano.md": ["| Kryss | 10-13 | 19-24 | +9 | **28-33** |", "| Bow | 17-22 | 32-41 | +9 | **41-50** |"],
    "combate/magery.md": ["Reserva de 40 dividida entre os alvos PvP", "reserva máxima de 40 pontos", "uma carga", "alcance padrão de Magery de 12 tiles"],
    "mundo/index.md": ["Felucca é a única faceta pública"],
    "mundo/mapas-viagem.md": ["Trammel não é uma faceta pública"],
    "itens/armas.md": ["não determinam a compatibilidade da arma com poison"],
}

FORBIDDEN_LIVE_CLAIMS = {
    "combate/melee-archery.md": ["Speed 4.0", "action delay de **25 ms**"],
    "combate/magery.md": [
        "causa metade dos hits atuais mais 0 a 15",
        "| Earthquake | 50% dos hits atuais + 0-15 |",
        "por 60 segundos, sem penalidades modernas",
        "a reflexão clássica de dano também ainda não está implementada",
        "Magic Reflection usa uma reserva calculada",
        "integra a reserva de Magic Reflection",
        "target de até 15 tiles",
        "curses direcionadas possuem alcance 10",
        "Resurrection, ou An Corp, usa alcance 10",
        "Mobile` vivo e válido em alcance 10",
        "elementais de Air, Earth, Fire e Water aceitam como referência o chão ou um `Mobile` em alcance 10",
    ],
    "mundo/index.md": ["Britannia utiliza Felucca e Trammel"],
    "mundo/mapas-viagem.md": ["Trammel utiliza regras de combate equivalentes"],
    "itens/armas.md": ["definição possui Infectious Strike"],
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
    compatibility_command_pattern = re.compile(r"`\[[^`\r\n]*`")
    for relative in sorted(BASELINE_PATHS):
        if not (DOCS / relative).is_file():
            errors.append(f"baseline path missing: {relative}")

    for relative, headings in REQUIRED_HEADINGS.items():
        text = (DOCS / relative).read_text(encoding="utf-8-sig")
        for heading in headings:
            if heading not in text:
                errors.append(f"baseline heading missing: {relative}: {heading}")

    for relative, claims in REQUIRED_LIVE_CLAIMS.items():
        text = (DOCS / relative).read_text(encoding="utf-8-sig")
        for claim in claims:
            if claim not in text:
                errors.append(f"required live claim missing: {relative}: {claim}")

    for relative, claims in FORBIDDEN_LIVE_CLAIMS.items():
        text = (DOCS / relative).read_text(encoding="utf-8-sig")
        for claim in claims:
            if claim in text:
                errors.append(f"stale live claim exposed: {relative}: {claim}")

    link_pattern = re.compile(r"(?<!!)\[[^\]]+\]\(([^)]+)\)")
    for page in DOCS.rglob("*.md"):
        text = page.read_text(encoding="utf-8-sig")
        for command in compatibility_command_pattern.findall(text):
            errors.append(
                f"compatibility command exposed: {page.relative_to(DOCS)}: {command}"
            )
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

"""Guard the home layout during automatic patch-note reconciliation.

The scheduled reconciliation may update *text* on the home (version number and
"latest update" label) but must never change its structure. This audit compares
the current tree with a base git ref (default ``origin/main``) and fails when:

1. the HTML skeleton of ``docs/index.md`` or ``docs/index.en.md`` changed, that
   is, any tag, attribute or attribute value was added, removed or reordered
   (text between tags may change freely), or the front-matter ``template``
   changed;
2. with ``--auto-scope``, any file outside the content allow-list changed
   (templates, CSS, JavaScript, assets, hooks and workflows are off limits).

Usage::

    python scripts/audit_home_layout.py                  # layout only
    python scripts/audit_home_layout.py --auto-scope     # layout + file scope
    python scripts/audit_home_layout.py --base origin/main
"""

from __future__ import annotations

import argparse
import fnmatch
import re
import subprocess
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HOME_PAGES = ("docs/index.md", "docs/index.en.md")

# Files an automatic reconciliation is allowed to touch.
AUTO_ALLOWED = (
    "docs/*.md",
    "docs/**/*.md",
    "mkdocs.yml",
    "scripts/audit_wiki.py",
    "internal/facts/*",
)

FRONT_MATTER_RE = re.compile(r"\A---\n(.*?)\n---\n", re.S)
TEMPLATE_RE = re.compile(r"^template:\s*(\S+)\s*$", re.M)


class Skeleton(HTMLParser):
    """Collect tags and attributes in document order, ignoring text."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.items: list[tuple[int, str]] = []

    def _add(self, kind: str, tag: str, attrs=None) -> None:
        line = self.getpos()[0]
        if attrs is None:
            self.items.append((line, f"</{tag}>"))
            return
        rendered = " ".join(f'{k}="{v}"' if v is not None else k for k, v in attrs)
        self.items.append((line, f"<{tag}{' ' + rendered if rendered else ''}{kind}>"))

    def handle_starttag(self, tag, attrs):
        self._add("", tag, attrs)

    def handle_startendtag(self, tag, attrs):
        self._add("/", tag, attrs)

    def handle_endtag(self, tag):
        self._add("", tag)


def skeleton(text: str) -> tuple[str | None, list[tuple[int, str]]]:
    template = None
    offset = 0
    match = FRONT_MATTER_RE.match(text)
    body = text
    if match:
        tmatch = TEMPLATE_RE.search(match.group(1))
        template = tmatch.group(1) if tmatch else None
        body = text[match.end():]
        offset = text[: match.end()].count("\n")
    # HTML comments are notes for editors, not layout (keep line numbers).
    body = re.sub(r"<!--.*?-->", lambda m: "\n" * m.group(0).count("\n"), body, flags=re.S)
    parser = Skeleton()
    parser.feed(body)
    parser.close()
    return template, [(line + offset, item) for line, item in parser.items]


def git(*args: str) -> str:
    return subprocess.run(
        ["git", "-C", str(ROOT), *args],
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
    ).stdout


def check_layout(base: str) -> list[str]:
    errors: list[str] = []
    for page in HOME_PAGES:
        current = (ROOT / page).read_text(encoding="utf-8")
        try:
            previous = git("show", f"{base}:{page}")
        except subprocess.CalledProcessError:
            errors.append(f"{page}: não encontrado em {base}")
            continue
        old_tpl, old = skeleton(previous)
        new_tpl, new = skeleton(current)
        if old_tpl != new_tpl:
            errors.append(f"{page}: template mudou de {old_tpl!r} para {new_tpl!r}")
        if [i for _, i in old] != [i for _, i in new]:
            for idx, (a, b) in enumerate(zip(old, new)):
                if a[1] != b[1]:
                    errors.append(
                        f"{page}:{b[0]}: estrutura da home mudou\n"
                        f"    antes: {a[1][:160]}\n    agora: {b[1][:160]}"
                    )
                    break
            else:
                errors.append(
                    f"{page}: número de tags mudou ({len(old)} -> {len(new)})"
                )
    return errors


def check_scope(base: str) -> list[str]:
    changed = git("diff", "--name-only", base, "--").split()
    changed += git("ls-files", "--others", "--exclude-standard").split()
    errors = []
    for path in sorted(set(changed)):
        if not any(fnmatch.fnmatch(path, pattern) for pattern in AUTO_ALLOWED):
            errors.append(f"{path}: fora do escopo de uma reconciliação automática")
    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--base", default="origin/main")
    parser.add_argument("--auto-scope", action="store_true")
    args = parser.parse_args()

    errors = check_layout(args.base)
    if args.auto_scope:
        errors += check_scope(args.base)
    if errors:
        print("Layout da home: FALHOU")
        for error in errors:
            print(f"- {error}")
        return 1
    print(f"Layout da home: OK (estrutura igual a {args.base})")
    return 0


if __name__ == "__main__":
    sys.exit(main())

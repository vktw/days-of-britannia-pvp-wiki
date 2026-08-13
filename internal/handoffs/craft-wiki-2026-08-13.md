---
audit_type: craft-catalog-preview
status: local_preview
created: 2026-08-13
target_version: "0.26.3"
production_source: "live-server/v0.26.3"
branch: "codex/craft-wiki"
publication_authorized: false
---

# Handoff: seção local de Craft

## Objetivo

Adicionar uma seção pública bilíngue de Craft na branch `codex/craft-wiki`,
com catálogo player-facing, material, custo, skill mínima e um controle visual
de skill. Esta alteração é somente uma prévia local; não autoriza commit, push,
merge ou deploy.

## Fontes oficiais consultadas

- `live-server/v0.26.3` como versão de produção registrada pelo servidor.
- Política oficial de equipamentos: materiais DoB, qualidade, Arms Lore,
  famílias DoB Tools e linhas temáticas de Blacksmithy.
- Patch oficial `0.16.0`: custos, skills mínimas, bônus das famílias Artisan,
  Reliable e Refined e seus pontos de criação.
- Patch oficial `0.19.0`: seis receitas Bloodrock e seis Blackrock, custo de 30
  ingots, skill mínima 75.0 e pontos oficiais de chance em 75.0 e 92.5.
- Patch oficial `0.23.5`: materiais, skills mínimas e pontos publicados para
  Fire Bow e Elven Bow.
- Patches oficiais `0.23.5` e `0.25.0`/catálogo de craft: DoB Jewelry e Total
  Mana Potion.
- Catálogo oficial de Blacksmithy: custos e faixas nativas das quatro peças
  Chain apresentadas na página.

Os documentos de fonte foram usados para extrair fatos player-facing. Caminhos
de código, nomes de classes, testes, logs e detalhes de implementação não
foram colocados em `docs/`.

## Conteúdo implementado

| Superfície | Resultado | Fonte de skill |
|---|---|---|
| `docs/itens/craft.md` e `.en.md` | Nova referência de receitas especiais, DoB Tools, qualidade e links relacionados | Catálogo oficial e patches aprovados |
| `docs/scripts/dob.js` | Seletor de família + slider de skill que mostra pontos oficiais sem interpolação | Pontos publicados nos patches/catálogo |
| `docs/stylesheets/extra.css` | Card do controle e ajustes para desktop, tablet e narrow | Padrão visual Atlas |
| `mkdocs.yml` e `docs/itens/index*` | Navegação e entrada da nova seção, sem alterar URLs existentes | Contrato de navegação |

O controle cobre Artisan, Reliable, Refined, Elven Bow, Fire Bow, Bloodrock e
Blackrock. Em pontos intermediários, ele mostra os limites publicados; não
calcula uma chance aproximada. O bloco de Exceptional continua separado da
chance de sucesso.

## Divergências mantidas para aprovação

1. A fonte oficial consultada para as linhas Bloodrock/Blackrock registra uma
   curva cujo ponto final diverge da página pública atual de armas, que mantém
   a decisão editorial de 105.0. A nova página mostra somente 0% em 75.0 e 50%
   em 92.5 e marca o ponto final como em revisão. Não deve ser adicionado um
   endpoint até o responsável escolher qual estado será canônico.
2. A fonte oficial do Fire Bow contém um endpoint que foi deliberadamente
   retirado da wiki por decisão do responsável. A nova página mostra 75% em
   100.0, sem republicar o endpoint, e o controle não extrapola a curva.

Essas omissões são intencionais: o resultado público não transforma uma fonte
contraditória ou um endpoint editorialmente removido em uma nova afirmação.

## Próximo agente

- Revisar visualmente `/itens/craft/` em desktop, tablet e narrow.
- Confirmar se o escopo deve crescer para um catálogo completo das receitas
  nativas ou permanecer concentrado nas receitas especiais do DoB.
- Resolver as duas divergências acima com o responsável pelo servidor antes de
  transformar os pontos finais em fatos públicos.
- Depois da aprovação, atualizar os registros de fatos canônicos para apontar
  a seção Craft e remover duplicações somente com revisão dos links.

## Estado

- Branch: `codex/craft-wiki`.
- Prévia: local.
- Commit, push, merge e deploy: não realizados.

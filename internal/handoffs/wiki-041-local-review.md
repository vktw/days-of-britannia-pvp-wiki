# Revisão local 0.41.0

Branch: `codex/wiki-041-reconciliation`, criada da main `166c448`.
Tipo: referência e landing page; pares PT-BR/EN atualizados juntos.
Fonte: catálogo público e regras da tag de produção `v0.41.0`,
`2f87ed24418b450af2ba7d1a6ceaf57926584252`; publicação registrada em 01/09/2026.

Escopo aprovado: itens 1–5 e 11–13 da tabela de reconciliação, mais tempos
de respawn. Itens 6–10 foram inicialmente excluídos por decisão do usuário,
inclusive das notas novas: perdas Blacksmithy, alterações de montarias, War
Mode e Meditation/0.40.1. Bowcraft foi autorizado posteriormente e está
documentado na seção abaixo. Patchnotes são um resumo editorial, não catálogo
integral.
A tabela de respawn contempla somente eventos ativos; não foi realizada a
revisão de pets/montarias recusada pelo usuário. A menção antiga ao Frenzied
nos textos existentes permanece como pendência editorial conhecida.

Home: seleção local de quatro artigos modificados nesta revisão; patchnotes
excluídos. Tags de páginas não auditadas profundamente preservam sua versão
anterior. Nenhum ajuste visual dos mockups foi trazido para esta worktree.

Prévia da revisão Bowcraft: http://127.0.0.1:8003/craft/bowcraft/ (site estático
gerado para esta branch).
Sem commit, push ou deploy. Aguardando teste manual do usuário.

## Revisão adicional de Bowcraft

Solicitação posterior autorizou reconciliar o simulador de Bowcraft com o
padrão já aplicado em Alchemy e Blacksmithy. A fonte aprovada é o catálogo e
as regras da tag de produção `v0.41.0`.

O menu público foi conferido com 14 receitas em quatro categorias: Materials
(Kindling e Shaft), Ammunition (Arrow e Bolt), Weapons (oito arcos e bestas
convencionais) e DoB Weapons (Fire Bow e Elven Bow). A página PT-BR e a versão
em inglês foram atualizadas em conjunto, com busca no índice, seleção de
material e simulador em uma única tela de trabalho.

As receitas comuns usam a curva-base oficial de Fletching; as receitas com
curva própria preservam os pontos publicados. A visualização foi limitada a
105.0, conforme a regra editorial já aplicada ao craft, sem exibir skill ou
ponto de consulta acima desse teto. Fire Bow agora inclui o ponto publicado
em 105.0; Elven Bow mantém 100% a partir do seu ponto de sucesso integral.
Madeiras selecionáveis alteram o recurso e a skill mínima para seleção, sem
bônus de chance na consulta.

Para armas, Exceptional passou a ser calculado no simulador pela rolagem
separada oficial `chance × 0.5 − 10`, limitada entre 0% e 100%, sem bônus de
equipamento. Materials e Ammunition exibem que Exceptional não se aplica.

Foi atualizada a invalidação de cache de `dob.js`. Auditorias, build estrito e
QA no navegador foram concluídos: 14 itens no índice, busca por Arrow, curvas
de Heavy Crossbow/Fire Bow/Elven Bow e ausência de overflow em 390, 820 e 1300
px. Não houve commit, push ou deploy desta revisão adicional.

## Revisão adicional de Blacksmithy

Solicitação posterior autorizou reconciliar o simulador de Blacksmithy com o
mesmo padrão de Alchemy. Catálogo de 71 receitas individuais, oito categorias
oficiais e submenus Bloodrock/Blackrock. Regras verificadas na mesma tag live:
filtros do menu, materiais e custos, curvas Iron, metais e armas temáticas,
Arms Lore como rolagem separada. Ferramenta comum, sem bônus de equipamento.
Não foram adicionadas as notas de perda de materiais anteriormente recusadas.

Valores públicos e controles limitados a 0–105, preservando a probabilidade
no teto e a chance inicial das receitas cujo mínimo original era negativo.
Os dados antigos corrompidos (como 805 de skill e 80 ingots na Chain Coif)
foram substituídos; cada arma temática agora tem sua própria receita.
Auditorias, build e QA no navegador: Iron Plate Chest em 100 = 50%; Bronze
em 35 = 20%; Brittanium em 105 = 77%; Crimson Rite em 105 = 85.71%; Arms Lore
105 = 76.5% de Exceptional após sucesso. Sem overflow em 390, 820 e 1300 px.

## Revisão adicional de Carpentry

Solicitação atual autorizou reconciliar Carpentry com o mesmo simulador de
menu aplicado a Alchemy, Blacksmithy e Bowcraft. A fonte aprovada é a classe
`DefCarpentry` e as regras de `CraftItem` na tag de produção `v0.41.0`.

O catálogo local agora contém 184 receitas visíveis em nove grupos do menu
oficial: Other, Furniture, Containers, Weapons, Instruments, Misc, Tailoring
and Cooking, Anvils and Forges e Training. A contagem foi calculada após os
filtros reais do servidor: o grupo Armor é removido e `RemoveRecipeGatedCrafts`
retira as entradas dependentes de recipe. A seleção de madeira replica Board,
Oak, Ash, Yew, Heartwood, Bloodwood e Frostwood com os mínimos publicados de
0.0, 65.0, 75.0, 85.0 e 95.0, sem bônus de chance pela madeira.

Cada entrada traz material principal, quantidade, recursos adicionais,
requisitos de skill secundária quando presentes, mínimo de Carpentry e a
curva de sucesso. Quando a curva oficial termina depois do limite editorial,
o simulador preserva o ponto calculado em 105.0 sem exibir valores acima
desse teto. Itens marcados pelo servidor como `ForceNonExceptional` mostram
Exceptional como não aplicável; os demais usam a rolagem Carpentry oficial
`ChanceMinusSixtyToFourtyFive`, calculada sem bônus de equipamento.

Ajustes compartilhados: o simulador passou a mostrar requisitos adicionais,
a mensagem da skill de seleção de madeira usa a skill da própria página e a
curva de Exceptional do Carpentry foi adicionada ao JavaScript. O cache de
`dob.js` foi incrementado. Auditorias, build estrito e QA visual local foram
concluídos: 184 itens no índice PT/EN, busca por Keg, troca para Frostwood,
Exceptional dinâmico em Weapons, Exceptional não aplicável em Keg, ausência
de overflow na viewport local e zero erros de console. Não houve commit, push
ou deploy desta revisão.

## Revisão adicional: Cartography, Cooking, Inscription, Tailoring e Tinkering

Solicitação posterior autorizou aplicar a mesma reconciliação de menu às cinco
skills restantes. Os catálogos foram lidos diretamente dos `Def*.cs` e das
regras comuns de `CraftItem` na tag de produção `v0.41.0`.

| Página | Receitas visíveis | Tratamento aplicado |
|---|---:|---|
| Cartography | 6 | Eodonian Wall Map recipe-gated omitido; mapas comuns e as duas orientações de Tattered Wall Map preservadas. |
| Cooking | 61 | Grupos Enchanted e Magical Fish Pies removidos pelo servidor; bebidas, chocolate e preparos ativos incluídos. |
| Inscription | 87 | 64 scrolls de magia, 17 scrolls de Necromancy e seis livros/materiais ativos; Scrapper's Compendium e Runic Atlas recipe-gated omitidos. |
| Tailoring | 156 | Roupas, couro, studded, gargoyle, grupos especiais e três robes DoB Cloth incluídos; entradas recipe-gated omitidas; chance-base normal corrigida para 50%. |
| Tinkering | 270 | 100 entradas diretas, 54 joias geradas por nove `AddJewelrySet` e 116 ferramentas especiais geradas por `AddDoBSpecialToolRecipes`; madeira/cestaria, ferramentas, componentes, utensílios, projetos, armadilhas e grupos DoB incluídos. |

As páginas PT-BR e EN têm o mesmo índice, pesquisa por item/grupo/material e
curva do simulador. Skills mínimas e materiais adicionais vêm das chamadas
oficiais de craft; requisitos de skill secundária são exibidos quando a fonte
os declara. Nenhum controle ou ponto público ultrapassa 105.0. Quando a fonte
começa acima desse teto, a página informa a fronteira pública em 105.0 com
chance zero dentro do intervalo consultável, sem expor o valor superior.
Tailoring usa 50% na skill mínima nas receitas normais; as curvas especiais
foram recalculadas no teto público sem revelar skills superiores. Tinkering
preserva a exceção de 50% para Potion Keg e as curvas especiais dos itens DoB.
Exceptional segue a política ECA oficial do sistema; itens marcados como
`ForceNonExceptional` mostram que não se aplica.

Glassblowing e Masonry foram retiradas do índice do Craft e do hub público,
mas os arquivos Markdown foram mantidos fora da navegação para preservar URLs
antigas e permitir redirect/remoção formal em uma revisão específica.

## Correção pós-reconciliação baseada no patchnotes

O patchnotes 0.41.0 já registrava Mantle of the Titan, Windrunner Robe e
Sage's Robe, mas o índice de 153 itens havia sido fechado sem essas três
entradas. O catálogo PT-BR/EN foi corrigido para 156 receitas, com os bônus de
atributo, reagentes oficiais e a curva linear de 0% em 65.0 a 100% em 105.0.

O mesmo confronto corrigiu três materiais que ainda refletiam a definição
genérica do catálogo no Tinkering: Metal Chest agora mostra 150 Ingots, e os
deeds de Suit Of Gold/Silver Armor mostram 200 Ingots, preservando no texto a
escolha de metal do menu e sua cor no resultado, conforme o patchnotes 0.39.0.

# Revisão local 0.41.0

Branch: `codex/wiki-041-reconciliation`, criada da main `166c448`.
Tipo: referência e landing page; pares PT-BR/EN atualizados juntos.
Fonte: catálogo público e regras da tag de produção `v0.41.0`,
`d159cdbbae5de563c098d535bc7e2335a9d7b021`; publicação registrada em 01/09/2026.

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

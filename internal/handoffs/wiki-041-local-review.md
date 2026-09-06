# Revisão local 0.41.0

Branch: `codex/wiki-041-reconciliation`, criada da main `166c448`.
Tipo: referência e landing page; pares PT-BR/EN atualizados juntos.
Fonte: catálogo público e regras da tag de produção `v0.41.0`,
`d159cdbbae5de563c098d535bc7e2335a9d7b021`; publicação registrada em 01/09/2026.

Escopo aprovado: itens 1–5 e 11–13 da tabela de reconciliação, mais tempos
de respawn. Itens 6–10 excluídos por decisão do usuário, inclusive das notas
novas: Bowcraft, perdas Blacksmithy, alterações de montarias, War Mode e
Meditation/0.40.1. Patchnotes são um resumo editorial, não catálogo integral.
A tabela de respawn contempla somente eventos ativos; não foi realizada a
revisão de pets/montarias recusada pelo usuário. A menção antiga ao Frenzied
nos textos existentes permanece como pendência editorial conhecida.

Home: seleção local de quatro artigos modificados nesta revisão; patchnotes
excluídos. Tags de páginas não auditadas profundamente preservam sua versão
anterior. Nenhum ajuste visual dos mockups foi trazido para esta worktree.

Prévia: http://127.0.0.1:8001/ (site estático gerado; rebuild após editar).
Sem commit, push ou deploy. Aguardando teste manual do usuário.

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

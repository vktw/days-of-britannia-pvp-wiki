---
audit_type: patchnotes-reconciliation
status: approved-for-publication
created: 2026-08-24
target_version: "0.37.0"
production_source: "live-server/v0.37.0"
wiki_base: "900061b"
publication_authorized: true
---

# Reconciliação proposta: wiki × Live 0.37.0

## Objetivo e autoridade

Este handoff compara a wiki, ainda identificada como **Beta 0.34.0**, com os
patchnotes player-facing oficiais dos releases `0.35.0`, `0.36.0` e `0.37.0`.
A fonte consultada foi o catálogo bilíngue presente na tag de produção
`v0.37.0` do repositório oficial do servidor (commit de release `be47455ac`,
datado de 2026-08-23). O conteúdo abaixo resume somente comportamento público;
nenhum código ou detalhe privado do servidor deve ser transferido para a wiki.

Esta branch serve apenas para análise e futura implementação local. Não há
autorização para merge, push e deploy concedida pelo responsável em 24/08/2026.

## Diagnóstico geral

| Superfície | Estado encontrado | Ação sugerida | Prioridade |
|---|---|---|---|
| Versão global | `mkdocs.yml`, home, próximo patch e diversos banners ainda mostram Beta 0.34.0. | Promover o estado atual para **Beta 0.37.0**, preservando números antigos quando forem contexto histórico explícito. | Obrigatória |
| Patch notes | A página pública termina em 0.34.0. | Inserir 0.35.0, 0.36.0 e 0.37.0 em PT-BR e inglês, em ordem decrescente. | Obrigatória |
| Home | O card de atualização ainda anuncia 0.34.0. | Exibir `0.37.0 · Player Vendors em Nujelm`, data de 21/08/2026 e resumo player-friendly. | Obrigatória |
| Próximo patch | A página chama 0.34.0 de versão atual. | Atualizar para 0.37.0 sem anunciar conteúdo futuro. | Obrigatória |
| Registro de fatos | O registry se identifica como 0.34.0. | Registrar os fatos novos de alto risco e atualizar somente claims de estado atual. | Obrigatória |

## Matriz por release

| Release | Mudança oficial relevante | Cobertura atual | Correção recomendada |
|---|---|---|---|
| 0.35.0 | Maestrias PvM passam a nível 20, retornos decrescentes após 10 e até 95 pontos. | **Conflitante:** `sistemas/pvm-mastery*` afirma 10 níveis e 45 pontos. | Atualizar progressão, faixas das Maestrias e exemplos de builds; confirmar no catálogo oficial os valores por nível antes de recalcular tabelas. |
| 0.35.0 | Tratamento bem-sucedido tem 70% de chance de gerar Bloody Bandage; falha não gera; água natural adjacente e segura lava o stack inteiro. | **Conflitante/parcial:** `itens/consumiveis*` apresenta a conversão como certa e descreve apenas “uma fonte de água”. | Corrigir chance, condição de sucesso e requisito de água. Informar que bandagens limpas/sujas do starter são itens comuns e transferíveis. |
| 0.35.0 + 0.37.0 | As 49 skills recebem curvas uniformes; no 0.37, ganho protegido começa em 30.0 somente atrás da curva, com garantia em 8 horas nas skills rápidas e 10 nas demais. | **Ausente:** a wiki preserva referências antigas de calibração, mas não explica o modelo atual. | Criar uma explicação curta e player-facing em Personagem/Comece aqui; evitar prometer ganho contínuo abaixo de 30.0. |
| 0.36.0 | Tome of Expertise tem 7,5% de drop em criaturas PvM elegíveis, exceto animais, e concede progresso permanente em uma das 49 skills; Craft/Harvesting têm ganho máximo de 1.0. | **Ausente.** | Adicionar em Recompensas PvM e fazer ponte em Sistemas/Maestria; explicar que ganhos altos são raros. |
| 0.36.0 | Anatomy, Evaluating Intelligence, Fencing, Wrestling, Parrying e Mace Fighting ganham 0.2 quando um ganho normal é aprovado em PvM elegível. | **Ausente.** | Registrar nas patch notes e em uma referência curta de progressão de skills, sem sugerir aumento na chance do skillcheck. |
| 0.36.0 | Forensic Evaluation pode ser treinada repetidamente em qualquer cadáver existente, de 0.0 a 100.0. | **Ausente.** | Registrar em patch notes e na referência de skills/progressão. |
| 0.36.0 | Caminhar montado não interrompe Stealth; correr montado revela. | **Ausente/parcial:** Personagem diz apenas que correr revela. | Tornar explícita a regra montada em `personagem*`. |
| 0.36.0 | Animais, summons e criaturas atuais ou anteriormente domadas não geram gold, XP ou loot de morte; carving só entrega recursos autorizados. | **Ausente.** | Atualizar Recompensas PvM e Caça PvM com a exclusão, sem listar implementação interna. |
| 0.36.0 | Starter PvP kit passa a ser comum e lootável, sem joias nem bag de potions; novos personagens recebem 15 Heal Potions normais. Livros, gold e ShrunkenHorse continuam vinculados. | **Conflito crítico:** Comece aqui, Personagem e Armas tratam o kit como vinculado/permanente e com potions e joias. | Corrigir todas as referências PT/EN e separar claramente itens comuns dos itens vinculados. |
| 0.36.0 | Mining entrega somente ore normal da veia; gemas, granito, areia, Blackrock, niter e elementais deixam de sair da skill; Gargoyle's Pickaxe fica desativada. | **Ausente.** | Registrar em patch notes e em uma referência de coleta/ferramentas. Não confundir com materiais que continuam existindo por outras fontes. |
| 0.36.0 | Abrir target de uma segunda magia não interrompe o cast atual; o segundo cast válido causa fizzle e consumo normal. | **Ausente.** | Incluir na visão geral de PvP/combate, pois afeta uso prático de Magery. |
| 0.37.0 | Nujelm recebe até 42 Player Vendors públicos instalados por contrato de emprego, limitados a um por conta e IP público. | **Ausente:** Nujelm só descreve proteção e retornos. | Criar seção “Mercado público” em Nujelm com instalação, limites e diferença para vendors de casas. |
| 0.37.0 | Vendor de Nujelm é fixo/protegido, cobra diária nativa + 1.500 Gold, exige reserva inicial de três diárias (4.680 Gold vazio), tem tolerância de 24 h e cooldown de 7 dias após encerramento. | **Ausente.** | Documentar custos, reserva, tolerância, bloqueio de novas adições e devolução de estoque/Gold ao bank. |
| 0.37.0 | Mage, Alchemist e Docks Alchemist mantêm 160 de cada reagente clássico; Mage mantém 160 Blank Scrolls. | **Parcial:** a wiki menciona reagentes, mas não a regra atual completa. | Atualizar a referência prática de primeiros passos/consumíveis; manter o detalhe também no histórico do patch. |
| 0.37.0 | SkillCheck separa sucesso e ganho, explica tentativas sem treino/saturadas e mostra progresso protegido; crafts exibem check interno e resultado final separadamente. | **Desatualizado:** Comandos diz apenas “valor, chances e resultado”. | Ampliar `.skillcheck` em Comandos e Comece aqui. |
| 0.37.0 | Pets controlados ou já pertencentes ao mesmo domador não concedem Animal Taming; Taming usa tentativa média de 10,5 s; Herding entra em cooldown de 4 s já no uso do crook. | **Ausente.** | Registrar na referência de skills/progressão e nas patch notes. |
| 0.37.0 | Menus de craft removem categorias e receitas de Tinkering, Blacksmithing, Fletching, Inscription, Alchemy, Carpentry, Cartography, Tailoring e Cooking. | **Conflito crítico:** simuladores ainda oferecem, entre outros, Elven Fletching, Fukiya Darts, Runic Atlas, Scrapper's Compendium, Elixir of Rebirth, Eodonian Wall Map e Star Chart. | Reextrair cada menu diretamente da tag 0.37.0 e reconstruir os índices dos nove simuladores afetados. Não fazer remoção só pelos exemplos: há grupos inteiros e dezenas de receitas. |
| 0.37.0 | Contrato de caça incompleto concede +50% de XP de Maestria nas criaturas do grupo alvo, acumulando com Young e Daily Dungeon e incluindo a kill final. | **Ausente.** | Atualizar Caça PvM e Maestria PvM. |
| 0.37.0 | Royal Banking Charter I custa 50.000 Gold da conta e eleva permanentemente o banco do personagem de 125 para 250 itens. | **Ausente.** | Documentar em Nujelm ou Comece aqui, com ponte para Banker; deixar claro que `bank` continua abrindo a bankbox normal. |
| 0.37.0 | Hiding/Stealth permitem movimento durante os três segundos de preparação; só exigem imobilidade no final. Reativar enquanto oculto revela e reinicia a preparação. | **Conflitante:** `personagem*` afirma que movimento interrompe a tentativa. | Corrigir a regra canônica PT/EN e a nota histórica do patch. |

## Auditoria especial dos simuladores de craft

O 0.37.0 transforma a reconciliação de craft em uma atualização de dados, não
em uma simples nota editorial. A implementação deve comparar o menu efetivo de
cada skill com o simulador e remover entradas que já não podem ser fabricadas.

| Página | Evidência de conflito já localizada | Escopo mínimo da revisão |
|---|---|---|
| Bowcraft | Elven Fletching e Fukiya Darts ainda estão no simulador. | Remover esses itens e os 13 arcos recipe-gated; preservar itens existentes apenas como contexto histórico, não como craft ativo. |
| Inscription | Runic Atlas e Scrapper's Compendium ainda aparecem. | Remover Mysticism, itens especiais excluídos e qualquer recipe-gated retirado do menu. |
| Alchemy | Elixir of Rebirth ainda aparece. | Manter somente Healing and Curative, Enhancement e Toxic; preservar Invisibility Potion sem recipe. |
| Cartography | Eodonian Wall Map recipe-gated e Star Chart ainda aparecem. | Remover todos os recipe-gated e Star Chart. |
| Tinkering | O simulador precisa ser comparado com as novas exclusões. | Manter joias comuns, três joias mágicas DoB e itens efetivamente presentes; remover OSI Magic Jewelry, Miscellaneous e itens nomeados no patch. |
| Blacksmithy | A amostra atual não prova cobertura dos 45 recipe-gated. | Reextrair menu completo e remover categorias/itens excluídos, preservando DoB Weapons que continuam ativos. |
| Carpentry | Há receitas especiais de referência no simulador. | Remover os 27 recipe-gated e a categoria Armor; validar cada entrada restante. |
| Tailoring | Requer confronto integral com o menu novo. | Remover recipe-gated, Materials, Bone Armor, Robe of Rite, peças orientais e famílias Ninja/Leaf/Jingasa/Hide especificadas. |
| Cooking | Requer confronto integral com o menu novo. | Remover recipe-gated, Enchanted e Magical Fish Pies. |

Masonry e Glassblowing não são citados como removidos no patch 0.37.0, mas
devem passar por smoke de regressão para assegurar que links, materiais e
controles continuem coerentes após a atualização dos dados compartilhados.

## Ordem sugerida de implementação

1. Atualizar versão global, home, próximo patch e as notas 0.35–0.37.
2. Corrigir os conflitos críticos de Starter kit, Maestrias, bandagens e
   Hiding/Stealth.
3. Adicionar Tomes, regras de recompensa/Mining, SkillCheck e progressão.
4. Documentar Player Vendors, Royal Banking Charter e bônus dos contratos.
5. Reextrair e revisar os nove simuladores de craft afetados, sempre em pares
   PT-BR/inglês.
6. Atualizar o registro de fatos e procurar duplicações/contradições em todo
   `docs/`.

## Verificação exigida antes de publicação

- Conferir cada claim player-facing contra `v0.37.0`, sem copiar código.
- Executar `python scripts\audit_wiki.py` e
  `python -m mkdocs build --strict --clean`.
- Executar os audits de localização, paridade e fatos aplicáveis.
- Executar `git diff --check` e revisar o diff completo.
- Fazer QA visual da home, Patch notes, Comece aqui, Personagem, Nujelm,
  Comandos, Maestria PvM, Caça PvM, Recompensas e todos os simuladores de craft
  alterados, em desktop e mobile.
- Publicação aprovada manualmente em 24/08/2026.

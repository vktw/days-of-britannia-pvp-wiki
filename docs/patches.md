# Patch notes

Esta página resume mudanças percebidas pelos jogadores. Números atuais e instruções completas ficam nas páginas de referência.

## 0.23.5 · Bowcraft, joias, Maestria PvM e mundo

- Fire Feathers obtidas ao esculpir uma Rare Phoenix passam a poder ser usadas para fabricar o Fire Bow.
- Fire Bow e Elven Bow entram na categoria **DoB Weapons** da Bowcraft, com materiais, efeitos e bônus próprios.
- A curva de sucesso do Fire Bow atinge 75% em Bowcraft 100.0.
- O Fire Bow mostra somente a animação e o som do impacto do Fireball no alvo, sem projétil de fogo em movimento.
- Armas fabricadas na Bowcraft deixam de receber bônus de combate derivados do tipo de madeira; a identidade do recurso e os bônus próprios do Fire Bow e Elven Bow permanecem.
- A nova Maestria PvM **Ruptura Arcana** pode fazer uma criatura selvagem falhar ao conjurar quando dano direto positivo do jogador acerta durante a conjuração.
- Tinkering passa a oferecer Magic Earrings, Magic Ring e Magic Bracelet com os bônus das joias da Arena; novas joias de Loot Pack podem receber bônus de Maestria PvM.
- Joias de Loot Pack recebem bônus de Maestria entre +1,00% e +5,00%, em incrementos de 0,25%; ao equipá-las, a Maestria correspondente fica ativa temporariamente e aparece no Compendium.
- Rare Events podem gerar Desert Ostard, Forest Ostard e Frenzied Ostard em pontos fixos, e Town Criers podem compartilhar esses rumores por Whispers of Britannia.
- O gump de Whispers of Britannia fica mais largo e oferece mais espaço para os rumores.
- As Patch Notes em português passam a usar a acentuação correta.
- O Nujelm Safe Haven bloqueia Fields, Recall, Mark, Gate Travel e Teleport, além de ganho de skill e dano recebido, fora das regras próprias da Arena NuJelm; a restrição de skill também vale para Newcomers.
- A área `A Turnip Field in Britain 2`, em Felucca, deixa de ser guardada; o campo equivalente de Trammel permanece inalterado.
- Felucca recebe o visual sazonal Spring, sem mudança de geometria, recursos ou colisão do mapa.
- Elven Bow equipado aplica uma única vez +10 de Tactics e +10 de Archery, inclusive acima do cap comum; ao desequipar, ambas retornam ao valor normal.

## 0.23.3 · Hiding/Stealth, coleta e PvM

- Hiding e Stealth passam a compartilhar a ocultação: caminhar consome um limite combinado de até 25 passos, esgotar o limite revela o personagem e correr revela imediatamente.
- Entrar em Hidden por Hiding ou Stealth inicializa corretamente o limite do primeiro movimento escondido.
- Stealth deixa de ser bloqueado ou penalizado pela armadura ao iniciar ou renovar o movimento escondido.
- A coleta em área 5x5 é finalizada corretamente para Mining, Lumberjacking e Fishing, reconhece Fishing Poles equipadas ou na mochila e repete o banco atual após falha de skillcheck enquanto houver estoque.
- Fishing Poles exibem os usos restantes, começam com 50 usos, quebram ao chegar a zero e podem ser equipadas e usadas com dois cliques.
- A conquista First Trainer Fight é concluída ao terminar uma luta contra o PvP Trainer e concede 200 XP de Maestria PvM uma única vez.
- Tinkers passam a vender Hatchet, Pickaxe e Shovel; Carpenters passam a vender Fishing Pole como ferramenta básica.
- Criaturas comuns que conjuram exibem Words of Power e ficam paradas durante a conjuração; o PvP Trainer mantém sua mobilidade.
- O dano mágico direto de criaturas selvagens elegíveis contra jogadores no PvM é reduzido em 25%, sem alterar PvP, poison, pets, summons ou ataques de jogadores.
- Dano direto positivo causado pelo jogador a uma criatura selvagem elegível no PvM encerra Hiding, Stealth e invisibilidade ativa; misses, dano zero, ticks de poison e PvP não ativam essa regra.

## 0.23.2 · Arena, economia, resistências e ferramentas

- A Arena verifica antecipadamente o gold necessário antes de preparar uma luta, evitando sessões que não podem começar.
- O multiplicador base de Physical Resist de armaduras e shields passa a ser `1.60`.
- Novos itens perdidos pela Honesty deixam de ser gerados no chão; itens existentes permanecem preservados.
- O sistema nativo de Platinum fica desativado; saldos legados são preservados, mas não podem ser criados, gastos ou transferidos.
- A recuperação base de stamina dos jogadores passa a ser de 1 ponto por segundo, preservando bônus adicionais.
- As descrições das Maestrias ficam abaixo dos controles de nível, com o layout compacto do Compendium alinhado.
- A Mina de Minoc na Felucca e em Trammel passa a ser protegida por guards dentro dos limites definidos.
- Provisioners passam a vender Hatchet, Pickaxe, Shovel e Fishing Pole como ferramentas básicas de coleta.

## 0.23.1 · Modos de loot da Arena e aviso de Alpha

- O primeiro login exibe um aviso bilíngue de Alpha sobre patches frequentes, possíveis problemas, duração de uma semana, reset de contas e Beta Test oficial em 14/08/2026; esta é uma comunicação histórica daquela versão.
- O PvP Trainer cobra 1.000 gold no início da luta e usa kit Iron fixo; a seleção de tiers não faz parte desse fluxo.
- Duelos entre jogadores escolhem System Loot ou Personal Loot, com cobrança de 5.000 gold por participante no início da luta; System Loot usa kit Iron fixo e restaura a configuração original.
- No Personal Loot, somente o vencedor pode saquear o corpo por 60 segundos; o perdedor fica retido por 15 segundos e o conteúdo restante é perdido.
- NuJelm aceita somente Personal Loot; os rankings de jogadores são separados por modo e os tempos do Trainer ficam em sua própria tabela.

## 0.23.0 · Arena NuJelm e Safe Haven de Nujelm

- A Arena NuJel'm agora oferece duelos entre jogadores em Felucca pelo comando `.arena`, com as mesmas regras da Arena Yew.
- O Safe Haven oficial passa de Ocllo para Nujelm; retornos de morte, Stuck e recuperação usam o ponto central de Nujelm (`3767,1296,0`).
- Ocllo e os cemitérios canônicos de Felucca deixam de receber proteção de guards nas regiões definidas.
- Gates de evento com destinos de Felucca podem ser administrados pela equipe e exigem personagem vivo, recuperado e fora de combate.
- Itens novos ou alterados dos tiers Invulnerability e Vanquishing usam hue `2483`; itens salvos não são migrados.

## 0.22.1 · Movimento montado, magias defensivas e bandagens

- A corrida montada agora suporta uma rajada maior de movimento antes de aplicar a proteção contra excesso de velocidade.
- A perda de stamina por excesso de peso foi reduzida pela metade, mantendo as regras de corrida, montado e perda mínima.
- O gold das recompensas PvM centralizadas usa fator 1,9 em vez de 2,3; XP, Loot Packs e bônus de Newcomer permanecem com as mesmas regras.
- Protection e Reactive Armor usam os efeitos visuais e sons de conjuração históricos do Sphere 0.51a; Reactive Armor mantém apenas o efeito vermelho histórico no atacante durante o reflexo.
- Bandagens limpas usadas com sucesso viram Bloody Bandages com o mesmo peso. Quando o jogador está sobrecarregado, elas caem no chão em vez de aumentar o peso carregado.
- Bloody Bandages podem ser lavadas em uma fonte de água: uma unidade limpa o stack inteiro e envia o stack limpo para a mochila.
- Jogadores não recebem mais uma robe automática ao serem ressuscitados; itens e robes já existentes permanecem preservados.
- Apóstrofos e aspas nos gumps aparecem corretamente, sem entidades HTML visíveis.
- Os itens bônus do Lumberjacking, como Bark Fragment, Fungi e Switch, foram temporariamente desativados; logs e boards continuam disponíveis.
- Area Miner, Area Fisher e Area Lumberjack concedem 200 XP de Maestria PvM cada; Rare Phoenix Hunter concede 350 XP.
- Avisos de manutenção aparecem em português e inglês antes do próximo save automático; após o save, os jogadores são desconectados para aplicar o patch.

## 0.22.0 · Conquistas de Days of Britannia

- O primeiro login apresenta o sistema de Achievements e o comando `.achievements`.
- A trilha inicial guia o jogador por Undead, Trolls e Lizardmen e recompensa XP de Maestria, gold e Scrolls of Knowledge.
- O catálogo completo inclui conquistas para Mining, Fishing, Lumberjacking em 5x5 e Rare Phoenix.
- O painel de Achievements usa cards mais altos, mostra a orientação completa e separa visualmente cada conquista.
- A base de Physical Resist de armaduras e shields usa o multiplicador 1.50.
- Detect Hidden é uma busca de área fixa de 12 tiles que revela players escondidos, inclusive em PvP, após dois segundos, sem afetar mobs ou itens.
- Harm tem tempo de conjuração de 1 segundo; no PvP, causa de 5 a 7 de dano por conjuração, enquanto o dano PvM permanece igual.
- A barra de cooldown de potions vem desligada por padrão e pode ser ativada no painel `.pvp`.
- Todas as magias podem ser conjuradas em cidades; restrições específicas de arena, viagem, geometria e alvos continuam valendo.
- Fire Field também causa dano no próprio caster; o primeiro tick ocorre em 0,5 segundo e os seguintes a cada 1,6 segundo.

## 0.21.1 · Nascimento seguro da Rare Phoenix

- A Rare Phoenix agora evita áreas protegidas por guards.
- Nujel'm continuou elegível para o evento naquela versão; a regra atual de guards é a consolidação posterior do patch 0.23.0.

## 0.21.0 · IA mágica e Threat proporcional

- Spellbinders recebem o mesmo peso de Threat das demais criaturas mágicas.
- Criaturas Necro usam Magery e mantêm comportamento de conjurador ao fugir quando Necromancia está desativada.
- Brittanium usa sua nova cor visual em equipamentos novos ou alterados por recurso.
- Dano comum de criaturas não retira stamina; drenos explícitos e Vigor Shield continuam funcionando.
- Criaturas selvagens hostis mostram fumaça e som de fizzle quando a magia perde alcance, visão ou um alvo válido antes de ser concluída.
- Criaturas selvagens hostis aparecem em vermelho, sem alterar as regras de combate ou criminalidade.
- Clean Up Britannia está desativado para o ruleset Sphere 51a; novos pontos, avaliações e recompensas do sistema não estão disponíveis.
- Ultima Store está desativada para o ruleset Sphere 51a; novas compras, entregas e uso da moeda Sovereigns pela loja não estão disponíveis.
- Vice vs Virtue está desativado para o ruleset Sphere 51a; novas adesões, batalhas, silver e recompensas não estão disponíveis.
- A criação automática de contas permite até 10 contas por IP.

## 0.20.0 · Criação de personagens mais limpa

- A criação de personagens deixa de entregar armas, ferramentas, reagentes, bandages e livros legados de profissão ou skill.
- Novos personagens surgem próximos ao banco de Britain.
- O kit DoB, Spellbook, Runebook, cavalo, gold inicial e cosméticos básicos continuam disponíveis.

## 0.19.0 · Armas temáticas

- Armas comuns continuam usando Iron; as linhas de Bloodrock e Blackrock passam a ficar separadas em DoB Weapons.
- Crimson Rite, Blood Vow, Vein Sever, Ritual Conduit, Sanguine Toll e Crimson Verdict formam a linha Bloodrock.
- Dusk Reaver, Nightfang, Gloom Sever, Umbral Conduit, Dark Toll e Midnight Verdict formam a linha Blackrock.
- As novas armas usam 30 ingots e exigem Blacksmithy entre 75 e 110; cannons deixam de ser produzidos em Blacksmithy.

## 0.18.4 · Invasão de Blackthorn desativada

- A invasão de Blackthorn e suas recompensas são desativadas.
- Blackthorn Dungeon, quests e conteúdos independentes permanecem separados dessa desativação.

## 0.18.3 · Ameaça mágica proporcional

- A ameaça de criaturas com inteligência mágica passa a escalar com 25% da vida.
- Arqueiros recebem um ajuste proporcional de 10%, e habilidades especiais de criaturas selvagens contribuem com limites definidos.

## 0.18.1 · Estabilidade dos avisos

- O aviso de manutenção permanece disponível após reinícios e salvamentos automáticos.

## 0.18.0 · Ajuda e retorno seguro

- `.help` oferece descrições curtas dos comandos e acesso direto às ações disponíveis.
- `.store` abre diretamente a Ultima Store.
- O retorno Stuck leva o personagem a Ocllo após dois minutos quando ele está com vida, stamina e mana completas e fora de combate, mediante confirmação e condições do sistema.
- O programa legado de Veteran Rewards é desativado; itens já recebidos continuam utilizáveis.

## 0.17.2 · Atualização do mapa de Felucca

- Nujelm e outros locais de Felucca recebem paisagem e decoração novas do DoB.

## 0.17.0 · Primeiros passos nas Maestrias

- A primeira Maestria PvM aprendida entra automaticamente na build no nível 1 quando o log de combate está habilitado.
- O Compendium recebe controles e orientações mais claros.

## 0.16.0 · Ferramentas especiais

- Ferramentas Light, Hardened e Tempered passam a usar Bronze, Shadow e Silver.
- Artisan Gold melhora itens Exceptional; Reliable Bloodrock aumenta a segurança do craft; Refined Blackrock combina materiais.
- Amuletos de skill podem ser efetivos até 105, enquanto skills iniciais permanecem limitadas a 100.
- `.skillcheck` exibe valor, chances e resultado do teste.

## 0.15.0 · Domínio dos recursos vitais

- Mana Shield e Vigor Shield pagam parte do dano PvM recebido com mana e stamina.
- Arcane Exertion e Blood Magic pagam parte do custo de mana de magias com stamina e vida.
- Hit Stamina Leech recupera stamina a partir de dano direto efetivo de armas contra criaturas PvM.
- As cinco Maestrias escalam de 5% a 9,5% e não alteram PvP nem Arena.
- Deadly Poison usa a mesma fórmula de dano no PvM e no PvP, mantendo regras de aplicação diferentes em cada contexto.

## 0.14.1 · Montes de ore mais claros

- Montes de ore passam a usar aparências diferentes para 1, 2, 3 e 4 ou mais unidades.
- Item Identification preserva parte do resultado após uma tentativa de smelt malsucedida, incluindo bônus de amuletos.
- Guardas, conexões simultâneas e limites de venda a vendors recebem regras mais claras.

## 0.14.0 · Coleta em área

- Ferramentas compatíveis podem iniciar coleta sequencial em uma área 5x5.
- Pickaxe e hatchet podem ser equipadas e direcionadas com dois cliques.
- Pontos esgotados são ignorados, com ciclos de quatro segundos para mineração e corte.

## 0.13.1 · Movimento e conjuração consistentes

- Movimento sem sobrepeso deixa de consumir stamina; sobrepeso aplica fadiga de 20%, com mínimo de 1, e o custo de shove permanece.
- Magery valida reagentes antes do alvo e os consome no início do cast.

## 0.13.0 · Novos metais de Britannia

- O catálogo de metais passa a incluir Iron, Bronze, Shadow, Silver, Gold, Bloodrock, Blackrock, Mythril e Brittanium.
- O metal define a proteção física adicional de armaduras e shields; qualidade define durabilidade, não proteção.
- O sistema moderno de Enhance deixa de definir materiais; equipamentos mágicos de PvM continuam em Iron.

## 0.12.0 · Sussurros de Britannia

- Uma Phoenix rara pode surgir a cada hora em um cemitério de Britannia.
- Town Criers agora negociam sussurros sobre acontecimentos raros por meio de um diálogo próprio.
- Phoenixes raras fornecem Fire Feathers ao serem esfoladas, com bônus baseado em Forensic Evaluation.

## 0.11.5 · Invisibilidade no impacto

- Magias direcionadas falham quando o alvo está invisível no momento do impacto.
- Um atacante invisível só é revelado quando seu ataque ou magia atinge validamente outro jogador.
- Detect Hidden resolve a busca após dois segundos, sem cooldown adicional.

## 0.11.4 · Decisão de Paralyze mais precisa

- O treinamento do PvP Trainer recebe ajustes de contenção e finalização, sem expor decisões táticas internas.

## 0.11.3 · Contenção mais precisa

- O PvP Trainer melhora a consistência do controle durante o treinamento, sem expor sua lógica interna.
- Wall of Stone bloqueia corretamente passagens diagonais durante a contenção.
- Ao terminar uma luta, a Arena remove objetos temporários produzidos pelo combate.

## 0.11.1 · Stats e recursos em sintonia

- STR, DEX e INT efetivas determinam respectivamente os limites máximos de Hits, Stamina e Mana; Hits permanecem limitados a 120.

## 0.11.0 · Daily Dungeon

- Uma Daily Dungeon recebe 25% de bônus de experiência de Maestria PvM até a próxima rotação.
- A frequência de Loot Packs personalizados dobra para criaturas elegíveis na Daily Dungeon.
- `.dailydungeon` mostra a dungeon selecionada e o tempo restante.

## 0.10.3 · Ataques mais consistentes

- Com skills de Melee ou Archery equivalentes, a chance inicial de acerto no PvP passa a ser 90%.
- Archery exige uma parada contínua de 0,5 segundo antes de liberar o disparo preparado.
- `.pvp` permite configurar a barra colorida de cooldown de poções e as mensagens de aplicação de poison.
- Total Mana Potions não são consumidas quando a mana já está cheia.

## 0.10.2 · Novos caminhos de Maestria

- Entram Resonant Cascade para Bardos e Summoned Vitality para invocadores.
- Dragon Breath passa a aumentar o Threat e as recompensas proporcionais da criatura.
- Loot Packs recebem uma distribuição mais equilibrada entre equipamentos, joias, amuletos e utilidades.
- Joias mágicas de atributos passam a ter durabilidade e podem ser reparadas com Tinkering.
- Magic Arrow usada no próprio personagem sincroniza efeito e dano com o fim do cast.

## 0.10.1 · Seleção de armas

- O catálogo de armas disponíveis é refinado e os kits oficiais passam a compartilhar Bow, War Mace, Kryss, Bardiche, Black Staff, War Hammer e Axe.
- Kryss, Bardiche e Axe dos kits recebem Deadly Poison; armas curtas de duas mãos de Fencing ou Swords também podem aceitar poison.
- Bow passa a usar Speed 3.75 com 100 DEX, e Harm passa a ter cast de 1,75 segundo.
- Iniciar uma magia aceita cancela a bandage pendente.
- Em Felucca, a proteção de guards de Britain e Moonglow fica restrita aos núcleos urbanos clássicos.
- O painel `.patchnotes` passa a permitir alternância entre português e inglês.

## 0.10.0 · Maestria PvM

- O Hunter's Compendium entra em operação com progressão por personagem, Scrolls of Knowledge e builds de até cinco Maestrias.
- Criaturas elegíveis passam a conceder experiência de Maestria PvM, gold e oportunidades de Loot Pack proporcionais ao encontro.
- No PvM, skills equivalentes resultam em 50% de chance base de acerto e até 50% de bloqueio com Parrying.
- Newcomers elegíveis recebem 25% adicionais de experiência de Maestria PvM e gold de criaturas.
- Loot Packs podem entregar equipamentos clássicos, joias de atributos, amuletos de skill e utilidades.

## 0.9.12 · Equilíbrio PvP

- Ajustes de acerto, Magery, poison, fields e Meditation.
- Dispel passa a remover somente efeitos clássicos compatíveis.

## 0.9.11 · Recuperação

- Ghosts podem pedir ressurreição a healers com dois cliques durante a recuperação DoB.
- Reforços operacionais de proteção do mundo, sem mudança na rotina do jogador.

## 0.9.10 · Ghosts em movimento

- Ghosts podem caminhar enquanto escolhem como retornar a Ocllo.

## 0.9.9 · Estabilidade

- Melhor uso de recursos do servidor sem alterar o ritmo do jogo.

## 0.9.8 · Ocllo conectado

- Ocllo entra na rede pública de moongates de Felucca e recebe Animal Trainer.

## 0.9.7 · Precisão de combate

- Ajuste da chance de acerto de Melee e Archery.

## 0.9.6 · Armas e armaduras

- Reequilíbrio dos papéis de armas, armor, shields e Macing.
- Black Staff entra nos kits oficiais.

## 0.9.5 · Threat Rating

- Criaturas passam a exibir uma classificação textual de ameaça.

## 0.9.4 · Preparação PvP

- Ajustes de armas longas e do PvP Trainer.
- Novos personagens recebem o Starter PvP Iron kit.

## 0.9.3 · Armas longas e Poison

- Mais armas clássicas passam a aceitar poison; opções incompatíveis deixam de circular para jogadores.

## 0.9.2 · Viagem mágica

- Recall e Gate Travel recebem tempo uniforme após a escolha de um destino válido.

## 0.9.1 · Correções de equipamento e kit PvP

- Dois cliques em um Spellbook acessível na mochila abrem o livro sem mover armas ou shields.

## 0.9.0 · Fundação do Mundo

- Ocllo torna-se o Safe Haven; mortes fora da Arena recebem opções de recuperação.
- Felucca torna-se a única faceta pública, com Trammel reservado às arenas.
- Entram Threat Rating, proteção Newcomer, regras clássicas de Magery e o novo equilíbrio de equipamentos.

## 0.8.0 · Combate e resposta

- Ações comuns ficam mais imediatas e recebem ajustes Hiding, bandages, Magery, poison e Arena.

## 0.7.0 · Equipamentos e estratégia

- Armor regional, Parrying, Protection e qualidades de equipamento passam a ter papéis mais claros.
- A Arena recebe seleção de tiers e kits ampliados.

## 0.6.0 · Ajustes de combate

- Melhorias em acerto, Parrying e acompanhamento das lutas oficiais.

## 0.5.0 · Estabilidade do servidor

- Recuperação automática após falhas e monitoramento de disponibilidade.

## 0.4.2 · Proteção do mundo

- Backups externos criptografados e verificações de recuperação.

## 0.4.1 · Persistência do mundo

- Correções de persistência de contas, personagens e mundo.

## 0.4.0 · Refinamentos de combate

- Evolução de Arena, armor regional, Parrying, cura, potions, Meditation e poison.

## 0.3.0 · Arena e fields

- Sistema de Arena e ajustes de Paralyze, fields e viagem.

## 0.2.0 · Combate clássico

- Consolidação de stats, skills, Magery, armas, armaduras e combate PvP.

## 0.1.0 · Fundação

- Primeira versão pública do ruleset Days of Britannia.

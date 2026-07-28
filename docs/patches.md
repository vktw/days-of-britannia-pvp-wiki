# Patch notes

## 0.9.6 · Equilíbrio de armas e armaduras

- Archery foi normalizada para aproximadamente 6,00 DPS Vanquishing esperado; armas de uma mão com shield e poison permanecem próximas de 6,50, e armas longas com poison ficam próximas de 7,00.
- Quarter Staff, Black Staff, Gnarled Staff e Skull Gnarled Staff formam uma progressão própria próxima de 5,00 DPS.
- Armors e shields passaram a usar multiplicador-base 1,40 no Physical Resist clássico.
- Shepherd's Crook passou a ser um utilitário de Herding fora do ranking competitivo.
- Armas competitivas de Macing agora removem stamina igual ao dano final aplicado.
- Kits iniciais, `.pvpcamp` e Arena incluem Black Staff no tier correspondente.

## 0.9.5 · Threat por MaxHits

- O índice oculto de Threat passa a ser o snapshot de MaxHits da criatura.
- As âncoras apenas validam as classes; não atribuem nem forçam scores.
- Paragon usa seu MaxHits efetivo e não recebe um segundo bônus de 10%.
- Neira valida Legendary e cada forma do Harrower valida Mythic com seu próprio snapshot.

## 0.9.4 · Armas e preparação PvP

- As armas longas poisonable foram recalibradas para aproximadamente 7,50 DPS Vanquishing esperado.
- O PvP Trainer ganhou uma sequência mais persistente após Paralyze.
- Todo novo personagem recebe um Starter PvP Iron kit permanente baseado no catálogo compartilhado da Arena e do PvP Camp.

## 0.9.3 · Armas longas e Poison

- Pitchfork, Double Bladed Staff, Spear, Bladed Staff, Pike e Lajatang passaram a aceitar Poison pelo fluxo normal da skill.
- Tribal Spear deixou de circular para jogadores e permanece apenas em equipamentos próprios de NPCs.

## 0.9.2 · Tempo uniforme de viagem mágica

- Recall e Gate Travel usam quatro segundos reais de cast por Spellbook, scroll, Runebook, Runic Atlas e demais destinos suportados.
- O cast começa depois de um destino válido, não recebe redução de Faster Casting ou Faster Cast Recovery e pode sofrer fizzle por dano.
- Gate Travel cria os dois gates ao concluir os quatro segundos, sem um timer oculto adicional.

## 0.9.1 · Correções de equipamento e kit PvP

### Melhoria

- O kit entregue por `.pvpcamp` agora inclui uma bolsa de joias mágicas com Magic Earrings (+5 INT), Magic Ring (+5 STR) e Magic Bracelet (+5 DEX), igual ao conjunto usado na arena. As joias seguem as regras normais de loot e não são Blessed.

### Correção

- Dois cliques em um Spellbook acessível na mochila agora abrem corretamente o livro sem equipá-lo, mover armas ou shields das mãos, nem alterar a regra que impede jogadores de equipar Spellbooks.

## 0.9.0 · Fundação do Mundo

### Novidades

- Ocllo, em Felucca, agora é o **Safe Haven** oficial: conflito entre jogadores, stealing e ações nocivas de pets ou summons ficam bloqueados em toda a ilha.
- Mortes fora da arena oferecem retorno imediato a Ocllo, recuperação dos itens restantes no corpo após 60 segundos ou espera por ajuda por até cinco minutos.
- O **Threat Rating** passa a exibir uma classificação textual das criaturas, mantendo Paragons como variante separada.
- O benefício newcomer dura 168 horas para o primeiro personagem elegível por conta e IP.

### Melhorias

- Felucca passa a ser a única faceta pública. As arenas oficiais em Trammel continuam como exceção controlada.
- `.arena` permanece como o único sistema oficial de duelos e treinamento.
- Magery com alvo usa alcance uniforme de 12 tiles e permite substituir uma magia em preparo por outra, com fizzle normal da anterior.
- Magic Reflection possui uma carga e reflete integralmente a próxima magia ou field nocivo. Na reflexão dupla, as duas cargas são consumidas sem dano.
- Reactive Armor dura 90 segundos e devolve 20% do dano melee final; Protection também dura 90 segundos e mantém absorção de 5% a 10%.
- Mana Drain e Mana Vampire não afetam jogadores ou o PvP Trainer, preservando o funcionamento contra criaturas.
- Armas melee e ranged receberam novas escadas de velocidade e dano; Archery competitivo mantém alcance 10.
- Spellbooks permanecem na mochila; wands e artefatos modernos selecionados passam a ser históricos; itens incompatíveis com humanos deixam de circular para jogadores.
- A economia concede 10.000 gold somente ao primeiro personagem elegível por IP e limita vendas a vendors a 20.000 gold por IP por dia.
- Quests originais ficam temporariamente indisponíveis, preservando scripts e estado salvo.
- O PvM passa a usar uma baseline central sem loot ou recompensas diretas para criaturas elegíveis nesta primeira fase.

### Correções

- Ocllo foi removida permanentemente das batalhas Vice vs Virtue.
- Questers sem lista de quests deixam de causar erro durante a classificação de Threat.
- Magic Reflection é removida corretamente em morte ou logout.
- Personagens fora de Felucca sem sessão válida de arena retornam para Ocllo.

Para números exatos, consulte as páginas de Magery, Melee e Archery, Armor e Parrying, Poison e Cura e recursos.

!!! info "Histórico oficial"
    Esta página preserva as versões já publicadas no servidor.

## 0.8.0 · Combate e Resposta

### Melhorias

- Ações comuns de itens e equipamentos agora respondem imediatamente. Delays próprios de potions, bandagens, skills, magias e ataques continuam valendo normalmente.
- Bandagens de cura completam o efeito em **3,5 segundos**; a remoção imediata de poison permanece inalterada.
- Hiding agora possui **3 segundos de preparação** e pode ser interrompido antes de esconder o personagem.
- Resurrection usa alcance 10, começa sua faixa de sucesso em 60.0 Magery e pode recuperar itens quando o ghost está junto do próprio corpse.
- Weaken, Clumsy e Feeblemind aplicam -15 ao stat correspondente; Curse e Mass Curse aplicam -10 a STR, DEX e INT.
- O dano direto máximo de Magery foi redistribuído em uma progressão de **10/15/20/25/30/35/40**, de Magic Arrow a Flame Strike. Harm não perde mais dano pela distância.
- Reaplicar o mesmo nível de poison renova sua duração silenciosamente, e os avisos periódicos foram reduzidos.
- O PvP Trainer foi reconstruído para exercer pressão de melee, recuperar-se com mais critério e reservar magias ofensivas para finalizações.

### Correções

- Falhas de Magery na revalidação do alvo agora exibem o efeito completo de fizzle depois do consumo dos recursos.
- Toda saída da arena limpa estados temporários de combate antes de restaurar o personagem em seu local de origem.

### Segurança e compatibilidade

- O servidor agora protege conexões contra excesso sustentado de ações sem adicionar atraso artificial ao uso legítimo.
- Saves, personagens, escrows antigos e os cooldowns específicos de combate permanecem compatíveis.

## 0.7.0 · Equipamentos e Estratégia

### Alterações de PvP

- O `Physical Resist` exibido em cada peça agora representa diretamente o percentual de dano físico absorvido quando aquela região corporal é atingida.
- Exemplo: uma peça com 10% de Physical Resist absorve 4 pontos de um golpe bruto de 40.
- A resistência-base de armors e shields Regular foi aumentada em **30%**. O resultado é arredondado para o inteiro mais próximo.
- O bônus mágico é somado depois da resistência-base e vale integralmente por peça: Defense +1, Guarding +3, Hardening +5, Fortification +7 e Invulnerability +9 pontos percentuais.
- Assim, uma versão Invulnerability sempre exibe e absorve exatamente 9 pontos percentuais a mais que uma peça Regular equivalente nas mesmas condições.
- Quando um golpe de melee ou archery passa pelo Parrying e acerta uma região sem armor, ele recebe **15% de dano físico adicional**.
- Roupas comuns e joias sem Physical Resist não contam como armor e não evitam esse bônus.
- Em um Parrying bem-sucedido, o shield absorve o percentual de Physical Resist exibido nele. Nenhuma região corporal é sorteada nesse golpe.
- Protection permanece separada: seus 5% a 10% são aplicados sobre o dano restante depois da armor ou do shield.
- Todo dano final continua limitado ao mínimo de 1 ponto.
- Essas fórmulas percentuais são exclusivas do PvP Sphere. O PvM mantém a absorção aleatória anterior baseada em Armor Rating.
- O intervalo da regeneração passiva de mana dos jogadores foi dobrado, reduzindo a recuperação passiva em aproximadamente **50%**.
- Meditation ativa não foi reduzida e continua usando sua velocidade normal.
- Deadly Poison Potion pode ser usada para aplicar poison em armas sem ativar nem consumir o cooldown global de 15 segundos das potions bebíveis.

### Sistema de PvP

- `.arena` agora permite escolher separadamente o tier das armors e das weapons antes da abertura da luta.
- Os tiers de armor disponíveis são **Regular, Defense, Guarding, Hardening, Fortification e Invulnerability**.
- Os tiers de weapon disponíveis são **Regular, Ruin, Might, Force, Power e Vanquishing**.
- Em duelos entre jogadores, quem abre o desafio define o perfil. Os dois participantes recebem exatamente os mesmos tiers, apresentados também no anúncio global e nos gumps de aceitação e confirmação.
- Lutas contra o PvP Trainer seguem o mesmo perfil de armor e weapon escolhido pelo jogador.
- `.pvpcamp` também abre o seletor de equipamento antes de entregar o kit.
- Os kits de Arena, PvPCamp e PvP Trainer agora incluem **15 Greater Heal Potions**, **15 Total Mana Potions** e **3 Deadly Poison Potions**.
- Os comandos `.pvpcamp` e `.patchnotes` foram adicionados. `.patchnotes` abre o patch mais recente sem alterar o controle de primeira leitura do personagem.
- `.pvptrainer` foi mantido apenas como orientação para usar `.arena`; o Trainer continua exclusivo da Arena Moonglow.
- Novos personagens começam também com **Hiding, Stealth, Detect Hidden e Poisoning em 100.0**.
- Personagens existentes recebem essas quatro skills em 100.0 uma única vez no primeiro login após o patch, sem reduzir ou reiniciar outras skills.
- Os logs unificados da Arena agora identificam com maior precisão a origem de danos e curas e registram os componentes de absorção usados nas lutas.

### PvP Trainer

- O PvP Trainer recebeu melhorias gerais em suas decisões de combate, posicionamento, administração de recursos e resposta às ações do adversário.

### Correções e compatibilidade

- O perfil de equipamento escolhido é persistido no escrow da Arena. Escrows criados por versões anteriores continuam compatíveis e usam Invulnerability/Vanquishing como fallback.
- Saves, personagens existentes e regras de PvM permanecem compatíveis.

## 0.6.0 · Ajustes de Combate

**Melhorias:** chance de acerto de 65% em 100 contra 100; Parrying com chance máxima de 45%.

**Novidades:** acompanhamento unificado das lutas oficiais de arena para orientar ajustes.

## 0.5.0 · Estabilidade do Servidor

Recuperação automática do processo após falhas e monitoramento externo de disponibilidade.

## 0.4.2 · Proteção do Mundo

Backups externos criptografados e verificações periódicas de recuperação.

## 0.4.1 · Persistência do Mundo

Correções de persistência de contas, personagens, mundo e geração de spawns.

## 0.4.0 · Refinamentos de Combate

Janela de Paralyze Field, buffs até 120, joias mágicas da arena, absorção regional de armor, Parrying com escudo, cura sob poison, potions imediatas, Meditation sem restrição de equipamento, novo poison e proteção de montarias na arena.

## 0.3.0 · Arena e campos

Sistema de arena, refinamentos de Paralyze e Wall of Stone, expansão de logs de combate e ajustes de viagem em Trammel.

## 0.2.0 · Combate clássico

Consolidação de dano físico e mágico, caps, skills iniciais, armas e armaduras clássicas, PvPCamp e principais regras Sphere 51.

## 0.1.0 · Fundação

Primeira versão do ruleset Days of Britannia sobre TrueUO, incluindo o núcleo de Magery Sphere 51.

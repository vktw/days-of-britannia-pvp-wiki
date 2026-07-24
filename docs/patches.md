# Patch notes

!!! info "Histórico oficial"
    Esta página preserva as versões já publicadas no servidor.

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

- `.arena` e `[Arena` agora permitem escolher separadamente o tier das armors e das weapons antes da abertura da luta.
- Os tiers de armor disponíveis são **Regular, Defense, Guarding, Hardening, Fortification e Invulnerability**.
- Os tiers de weapon disponíveis são **Regular, Ruin, Might, Force, Power e Vanquishing**.
- Em duelos entre jogadores, quem abre o desafio define o perfil. Os dois participantes recebem exatamente os mesmos tiers, apresentados também no anúncio global e nos gumps de aceitação e confirmação.
- Lutas contra o PvP Trainer seguem o mesmo perfil de armor e weapon escolhido pelo jogador.
- `[PvPCamp` também abre o seletor de equipamento antes de entregar o kit.
- Os kits de Arena, PvPCamp e PvP Trainer agora incluem **15 Greater Heal Potions**, **15 Total Mana Potions** e **3 Deadly Poison Potions**.
- Os atalhos `.pvpcamp` e `.patchnotes` foram adicionados. `.patchnotes` abre o patch mais recente sem alterar o controle de primeira leitura do personagem.
- `.pvptrainer` foi mantido apenas como orientação para usar `.arena`; o Trainer continua exclusivo da Arena Moonglow.
- Novos personagens começam também com **Hiding, Stealth, Detect Hidden e Poisoning em 100.0**.
- Personagens existentes recebem essas quatro skills em 100.0 uma única vez no primeiro login após o patch, sem reduzir ou reiniciar outras skills.
- Os logs unificados da Arena agora identificam com maior precisão a origem de danos e curas e registram os componentes de absorção usados nas lutas.

### PvP Trainer

- O PvP Trainer recebeu melhorias gerais em suas decisões de combate, posicionamento, administração de recursos e resposta às ações do adversário.

### Correções e compatibilidade

- O perfil de equipamento escolhido é persistido no escrow da Arena. Escrows criados por versões anteriores continuam compatíveis e usam Invulnerability/Vanquishing como fallback.
- Saves, personagens existentes, regras de PvM e comandos tradicionais com `[` permanecem compatíveis.

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

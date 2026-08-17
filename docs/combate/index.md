# PvP

O PvP customizado de Days of Britannia roda em um emulador moderno e é baseado
em pressão e resposta, não em uma rotação fixa. O jogador combina dano físico,
magia e poison para obrigar uma
resposta defensiva; depois administra vida, mana, bandages e posicionamento até
criar uma janela de finalização.

Fora da Arena e durante a luta na Arena, o ruleset de PvP é o mesmo: chance de
acerto, dano, poison, cura, bandage, cast delay e custo de mana seguem as mesmas
regras. A Arena acrescenta fluxo de sessão, preparação, limite de área e loot;
essas diferenças estão descritas em [Arena e treinamento](../arena.md).

## Como funciona uma luta

- **Criar pressão:** use uma arma, poison ou magia para manter o adversário
  respondendo em vez de atacar livremente.
- **Forçar a resposta:** dano acumulado, poison e controle podem obrigar o alvo
  a usar bandage, potion, proteção ou movimento.
- **Ler o compromisso:** uma bandage, um cast longo ou uma defesa consumida abre
  uma oportunidade, mas também pode ser uma isca. O objetivo é reconhecer a
  janela, não repetir uma sequência automática.
- **Finalizar:** Flame Strike (FS), Lightning e Harm são exemplos de magias usadas
  para confirmar dano quando a recuperação do alvo está limitada.

## Pressão física, mágica e poison

O pacote de pressão mais consistente mistura fontes que exigem respostas
diferentes:

- **Arma melee ou archery:** mantém dano físico e ameaça de acerto enquanto o
  alvo tenta se reposicionar.
- **Poison:** cria dano recorrente e faz a bandage virar uma decisão imediata.
- **Magery:** alterna pressão, controle e confirmação. O alvo imediato é
  escolhido antes do cast delay; o efeito só é liberado ao fim desse tempo.

## Bandage e poison

O tratamento da bandage é escolhido automaticamente quando ela começa:

- se houver poison no início, a aplicação tenta curá-lo imediatamente;
- essa aplicação de cura de poison não recupera vida;
- uma bandage normal de vida ou bleed termina em 3,5 segundos;
- poison aplicado depois do início não substitui o tratamento de vida ou bleed
  que já foi escolhido;
- iniciar uma magia aceita cancela uma bandage pendente.

Por isso, aplicar poison não é apenas causar dano: é testar se o adversário vai
gastar a resposta agora. Da mesma forma, atacar durante a janela de tratamento
é uma decisão de tempo, não uma garantia de dano.

## Cast delay e mana

Estes são os valores base das magias de Magery mais relevantes para o PvP. O
cast delay é fixo por magia neste ruleset; FC e FCR não o alteram. O custo é o
gasto base de mana da magia; LRC e LMC não reduzem os custos neste ruleset.

| Magia | Papel no PvP | Cast delay | Mana |
| --- | --- | ---: | ---: |
| Magic Arrow | Pressão barata | 1,0 s | 4 |
| Harm | Pressão curta | 1,0 s | 6 |
| Fireball | Pressão mágica | 2,5 s | 9 |
| Lightning | Finalização rápida | 2,5 s | 11 |
| Mind Blast | Ofensiva | 3,0 s | 14 |
| Energy Bolt | Ofensiva | 3,5 s | 20 |
| Explosion | Ofensiva com impacto atrasado | 3,5 s | 20 |
| Flame Strike | Finalização pesada | 3,5 s | 40 |
| Paralyze | Controle e abertura | 2,5 s | 14 |
| Cure | Cura poison | 1,5 s | 6 |
| Heal | Cura | 1,0 s | 4 |
| Greater Heal | Cura forte | 2,5 s | 11 |
| Protection | Defesa | 1,4 s | 6 |
| Reactive Armor | Defesa contra melee | 1,0 s | 4 |
| Magic Reflection | Defesa contra magia | 4,0 s | 14 |

O delay da tabela é o tempo de conjuração, não necessariamente o instante do
impacto visual. Algumas magias têm uma espera adicional até o dano chegar ao
alvo.

## A janela de finalização

“Finisher” descreve uma decisão de timing, não uma rotação obrigatória:

- **Lightning** é uma confirmação direta e mais rápida, adequada quando a
  recuperação do alvo está comprometida.
- **Flame Strike** exige um compromisso maior de tempo e mana, mas é uma opção
  de dano direto pesado para uma janela bem preparada.
- **Harm** tem cast muito curto e alcance curto; no PvP causa 5–7 de dano e
  funciona como pressão ou confirmação quando a distância permite.

Exemplos práticos, sem transformar a luta em uma sequência fixa:

- uma arma com poison força o alvo a iniciar uma bandage; acompanhe o
  compromisso e procure Lightning ou Flame Strike quando a recuperação não
  puder responder ao impacto;
- Fireball ou Explosion podem manter a pressão enquanto você administra mana e
  posição; Lightning pode confirmar a janela seguinte;
- Paralyze pode criar espaço, mas o alvo pode renovar a defesa ou quebrar o
  efeito, então o cast deve ser lido junto com a resposta adversária.

## Defesa que compra tempo

- **Parrying:** em golpes diretos no PvP, a chance escala com a Parrying base e
  chega a **20% em 100.0**. Um Parry bem-sucedido pode zerar o golpe direto.
- **Protection:** dura 90 segundos e reduz parte do dano restante depois das
  outras etapas de absorção.
- **Reactive Armor:** dura 90 segundos e devolve parte do dano melee ao
  atacante.
- **Magic Reflection:** possui uma carga contra a próxima magia ou field
  nocivo elegível.
- **Armor Rating:** armaduras e shields exibem um valor calculado pelo custo de
  ingots, material e tier de proteção. Golpes diretos contra jogadores usam a
  absorção global do Armor Rating equipado; não há uma rolagem pública por
  região corporal.

Defesa não é apenas esperar a vida subir: ela compra o tempo necessário para
reposicionar, recuperar mana ou preparar a próxima resposta.

!!! success "Status: Beta 0.31.1"
    Esta página resume o ruleset ativo no servidor oficial. Os valores de
    gameplay foram conferidos na fonte oficial do servidor.

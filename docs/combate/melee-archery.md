# Melee e Archery

!!! success "Status: Live 0.9.0"
    Fórmulas e comportamentos ativos no servidor oficial.

## Chance de acerto

Com skill ofensiva 100.0 contra defesa 100.0, Melee e Archery possuem **65% de chance de acerto**. A fórmula é:

`chance = 1,30 × (ataque + 50) ÷ [2 × (defesa + 50)]`

O resultado final fica limitado entre 2% e 98%.

A defesa utiliza a skill adequada ao equipamento do alvo. Wrestling cobre o personagem sem arma.

## Velocidade

O valor `Speed` da arma representa o delay em segundos com 100 DEX:

`delay = Speed × 200 ÷ (DEX + 100)`

A DEX efetiva usada na fórmula fica entre 0 e 120 e existe um delay mínimo global de 1,25 segundo. O bow clássico tem Speed 4.0, portanto dispara a cada 4 segundos com 100 DEX.

O swing pertence ao alvo atual. Caminhar não reinicia o preparo do tiro, mas Archery mantém o disparo em buffer e só o libera quando o personagem para e continua em alcance válido.

Trocas de equipamento usam um action delay de **25 ms** por item. Esse intervalo controla ações de equipar e desequipar; ele não substitui nem reduz o swing delay da arma.

## Dano e alcance

Cada golpe que acerta sorteia primeiro um valor inteiro entre `MinDamage` e `MaxDamage` da arma. Esse valor é o **dano-base sorteado**.

A escala do atacante é:

`escala = 1 + (Tactics − 50)/100 + Anatomy/500 + STR efetiva/500`

A STR efetiva fica limitada entre 0 e 120. O dano bruto é calculado na seguinte ordem:

`dano bruto = truncar(dano-base sorteado × escala) + bônus clássico da arma`

`truncar` descarta a parte decimal. O resultado da escala nunca fica abaixo de 1 ponto antes do bônus clássico.

| Propriedade | Bônus somado após a escala |
|---|---:|
| Regular | 0 |
| Ruin | +1 |
| Might | +3 |
| Force | +5 |
| Power | +7 |
| Vanquishing | +9 |

O mesmo cálculo é usado por Melee e Archery. A skill da arma determina a chance de acerto, mas não aparece novamente na fórmula de dano bruto.

Armas envenenadas consomem uma carga e aplicam poison em todo golpe bem-sucedido.

### Armas com range 2

As seguintes armas de duas mãos alcançam dois tiles:

- Polearms, incluindo Bardiche, Halberd e Scythe.
- Pike, Gargish Pike, Lance e Gargish Lance.
- Spear, Tribal Spear e Pitchfork.
- Bladed Staff, Double Bladed Staff e Lajatang.
- Quarter Staff, Black Staff, Gnarled Staff e Shepherd's Crook.

O range adicional não modifica a velocidade da arma.

## Archery e plate

Armas de Archery não podem ser equipadas enquanto o personagem usa uma peça de plate corporal. Também não é possível vestir plate corporal com uma arma de Archery equipada.

**Plate Gorget e shields são exceções** e podem ser combinados com Archery.

Consulte [Exemplos de dano](exemplos-dano.md) para acompanhar o cálculo completo do sorteio da arma até os hits retirados do alvo.

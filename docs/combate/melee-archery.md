# Melee e Archery

!!! success "Status: Live 0.9.6"
    Fórmulas e comportamentos ativos no servidor oficial.

## Chance de acerto

Com skill ofensiva 100.0 contra defesa 100.0, Melee e Archery possuem **65% de chance de acerto**. A fórmula é:

`chance = 1,30 × (ataque + 50) ÷ [2 × (defesa + 50)]`

O resultado final fica limitado entre 2% e 98%.

A defesa utiliza a skill adequada ao equipamento do alvo. Wrestling cobre o personagem sem arma.

## Velocidade

O valor `Speed` da arma representa o delay em segundos com 100 DEX:

`delay = Speed × 200 ÷ (DEX + 100)`

A DEX efetiva usada na fórmula fica entre 0 e 120 e existe um delay mínimo global de 1,25 segundo. O Bow clássico tem Speed 4.5, portanto dispara a cada 4,5 segundos com 100 DEX.

O swing pertence ao alvo atual. Caminhar não reinicia o preparo do tiro, mas Archery mantém o disparo em buffer e só o libera quando o personagem continua em alcance válido e permanece parado por 250 ms.

Ações comuns de equipar e desequipar respondem imediatamente, sem action delay artificial. Os delays próprios de ataques, magias, potions, bandages e skills continuam valendo normalmente.

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

### Papéis competitivos

| Papel | Referência de DPS Vanquishing esperado |
|---|---:|
| Archery | aproximadamente 6,00 |
| Uma mão, shield e poison | aproximadamente 6,50 |
| Duas mãos, range 2 e poison | aproximadamente 7,00 |
| Staves longos sem poison | aproximadamente 5,00 |

O DPS de referência usa 100 STR, 100 DEX, 100.0 Tactics, 100.0 Anatomy, skill da arma 100.0 e chance-base de acerto de 65%. Poison, armor, Parrying e tempo fora de combate não entram nessa comparação. Armas competitivas de Macing também removem stamina igual ao dano final do golpe.

### Armas com range 2

As seguintes armas de duas mãos alcançam dois tiles:

- Polearms, incluindo Bardiche, Halberd e Scythe.
- Pike, Gargish Pike, Lance e Gargish Lance.
- Spear e Pitchfork. Tribal Spear não circula para jogadores.
- Bladed Staff, Double Bladed Staff e Lajatang.
- Quarter Staff, Black Staff e Gnarled Staff. Shepherd's Crook permanece como utilitário de Herding fora do ranking competitivo.

O range adicional não modifica a velocidade da arma.

## Archery e plate

Armas de Archery não podem ser equipadas enquanto o personagem usa uma peça de plate corporal. Também não é possível vestir plate corporal com uma arma de Archery equipada.

**Plate Gorget e shields são exceções** e podem ser combinados com Archery.

Consulte [Exemplos de dano](exemplos-dano.md) para acompanhar o cálculo completo do sorteio da arma até os hits retirados do alvo.

# Melee e Archery

## Chance de acerto

Com skill ofensiva 100.0 contra defesa 100.0, Melee e Archery possuem **65% de chance de acerto**. Valores diferentes de ataque e defesa escalonam a chance a partir dessa referência.

A defesa utiliza a skill adequada ao equipamento do alvo. Wrestling cobre o personagem sem arma.

## Velocidade

O valor `Speed` da arma representa o delay em segundos com 100 DEX:

`delay = Speed × 200 ÷ (DEX + 100)`

A DEX efetiva usada na fórmula fica entre 0 e 120 e existe um delay mínimo global de 1,25 segundo. O bow clássico tem Speed 4.0, portanto dispara a cada 4 segundos com 100 DEX.

O swing pertence ao alvo atual. Caminhar não reinicia o preparo do tiro, mas Archery mantém o disparo em buffer e só o libera quando o personagem para e continua em alcance válido.

## Dano e alcance

O dano físico considera a arma, sua propriedade clássica, STR, Tactics e Anatomy. Ruin, Might, Force, Power e Vanquishing acrescentam, respectivamente, +1, +3, +5, +7 e +9 ao dano.

Armas longas de duas mãos configuradas pelo ruleset alcançam dois tiles. Armas envenenadas consomem uma carga e aplicam poison em todo golpe bem-sucedido.


# Melee e Archery

## Chance de acerto

Com ataque e defesa em 100.0, a chance inicial de acerto em PvP é **90%**. No
PvM do Live 0.26.3, armas padrão usam a curva-base
`max(2%, 75% * clamp(skill, 0, 100) / 100)`: a skill de ataque efetiva chega a
**75% em 100.0**, com piso operacional de 2%.

No ramo PvM, a chance-base usa a skill ofensiva efetiva da arma e não é reduzida
pela defesa da criatura. A mesma skill mantém a mesma chance-base contra alvos
com defesas diferentes. O bônus relativo de PvM Mastery é aplicado depois dessa
etapa; a fórmula de PvP continua baseada no confronto com a defesa.

A defesa considera a skill adequada ao equipamento usado no caminho PvP. Sem
arma, o personagem depende de Wrestling.

## Velocidade

O `Speed` mostrado pela arma representa seu delay com 100 DEX. Mais DEX acelera os ataques até o limite permitido; menos DEX deixa o intervalo maior. Todo ataque respeita o delay mínimo global de 1,25 segundo.

O Bow clássico tem Speed 3.75 e dispara a cada 3,75 segundos com 100 DEX.

Em Archery, caminhar não perde o disparo preparado. A flecha é liberada quando o alvo está em alcance e o arqueiro permanece parado por **500 ms**.

## Dano e alcance

- STR, Tactics, Anatomy, qualidade e tipo da arma influenciam o dano físico.
- Ruin, Might, Force, Power e Vanquishing aumentam o dano nessa ordem.
- Poison é aplicado quando uma arma compatível acerta e possui cargas.
- Armas competitivas de Macing também retiram stamina conforme o dano causado.
- Armas de haste e algumas lanças alcançam dois tiles; a maioria das armas melee alcança um.
- Archery competitivo alcança dez tiles.

Em PvP, atingir uma região sem armor efetiva concede **25% de dano adicional**. Protection é aplicada depois. Consulte [Armor e Parrying](armor-parrying.md).

## Arcos da Bowcraft no Live 0.26.3

- **Fire Bow:** recebe +6 de dano temático e mostra apenas o impacto de Fireball no alvo.
- **Elven Bow:** usa Speed 3.00, dano base 7–12 e concede +10 de Tactics e +10 de Archery enquanto equipado; ao desequipar, as skills retornam ao valor normal. No PvM, o +10 de Archery pode ser usado acima de 100, chegando a **82,5%** de chance-base em 110.0; o +10 de Tactics também influencia o dano acima de 100.

Veja os recursos e as curvas de craft em [Armas clássicas](../itens/armas.md).

## Escolha prática

- Uma mão permite usar shield e favorece defesa.
- Duas mãos trocam o shield por maior pressão ou alcance.
- Archery oferece distância, mas exige parar brevemente para disparar.
- Velocidade, alcance, poison e Stamina Damage costumam importar mais que pequenas diferenças teóricas de dano.

Armas de Archery não podem ser usadas com plate corporal. Plate Gorget e shields são exceções.

Veja [Armas clássicas](../itens/armas.md) e [Exemplos de dano](exemplos-dano.md).

!!! success "Status: Live 0.26.3"
    Regras práticas para escolher armas, distância e ritmo de ataque.

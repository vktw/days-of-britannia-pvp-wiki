# PvM Mastery

!!! warning "Planejado para 0.10.0"
    Este sistema está habilitado somente no ambiente local para testes de aceitação. Ele ainda não faz parte do servidor oficial Live 0.9.6.

O **Hunter's Compendium** cria uma progressão PvM por personagem. Scrolls of Knowledge encontrados em famílias Slayer revelam masteries; o jogador distribui pontos genéricos entre elas e monta uma build com até **cinco masteries ativas**.

## Progressão e pontos

- O primeiro ponto exige 1.000 XP; cada ponto seguinte exige 500 XP a mais que o anterior.
- Atingir a meta deixa o ponto pendente. Para liberá-lo, o personagem paga 1.000 gold no primeiro, 2.000 no segundo e mais 1.000 a cada ponto adquirido.
- O pagamento consome gold da mochila ou do banco.
- Depois de comprado, o ponto pertence ao personagem e pode ser redistribuído entre conhecimentos descobertos fora de combate.
- Cada mastery chega ao nível 10; o personagem possui limite de 45 pontos.

## XP e participação

O XP-base de uma criatura é `floor(MaxHits / 6)`. Participantes com direito nativo ao loot, vivos, conectados, no mesmo mapa e a até 18 tiles recebem:

| Participantes elegíveis | XP para cada um |
| ---: | ---: |
| 1 | 100% |
| 2 | 80% |
| 3 | 70% |
| 4 | 60% |
| 5 ou mais | 50% |

## Scrolls of Knowledge

Cada morte produz no máximo um scroll. Todos os grupos Slayer, inclusive Undead, usam a mesma tabela:

| Raridade | Chance |
| --- | ---: |
| Basic | 1% |
| Proc | 0,5% |
| Synergy | 0,25% |
| Area | 0,1% |

As faixas são exclusivas. Se uma raridade sorteada não possuir mastery operacional naquele grupo, nenhum scroll é criado.

## Masteries do MVP

| Mastery | Família do scroll | Resumo |
| --- | --- | --- |
| Hit Life Leech | Undead | Recupera vida a partir do dano PvM efetivo |
| Hit Mana Leech | Undead | Recupera mana a partir do dano PvM efetivo |
| Spell Effect Resistance | Undead | Pode negar efeitos mágicos hostis compatíveis |
| Melee Damage Increase | Humanoid | Aumenta dano melee direto |
| Melee Hit Chance Increase | Humanoid | Aumenta relativamente a chance de acerto melee |
| Focused Hunter | Humanoid | Acumula bônus ao matar consecutivamente o mesmo grupo Slayer |
| Archery Damage Increase | Reptilian | Aumenta dano direto de Archery |
| Archery Hit Chance Increase | Reptilian | Aumenta relativamente a chance de acerto de Archery |
| Spell Damage Increase | Abyssal | Aumenta dano mágico PvM do jogador |
| Magic Damage Resistance | Abyssal | Reduz dano mágico PvM restante |
| Relentless Focus | Abyssal | Aumenta dano ao persistir no mesmo alvo |
| Parrying Block Chance Increase | Fey | Aumenta relativamente o bloqueio normal de Parrying |
| Versatile Hunter | Fey | Fortalece o primeiro hit contra um tipo de criatura não visto recentemente |
| Physical Damage Resistance | Elemental | Reduz dano físico PvM restante |
| Hit Lightning Chance | Elemental | Pode disparar Lightning em dano compatível |
| Hit Effect Area | Elemental | Divide um efeito entre criaturas PvM próximas |
| Hit Paralyze Chance | Arachnid | Pode paralisar após um hit direto de arma |
| Paralyzed Damage Bonus | Arachnid | Aumenta o próximo hit compatível contra criatura paralisada |

## Gold e Loot Pack

- Gold centralizado: `floor(MaxHits × 2,3)`, dividido em pilhas de até 7.500.
- Cada 10.000 MaxHits garante um roll do Loot Pack; o restante vira a chance exata de um roll adicional.
- Cada roll produz um item: 20% equipamento clássico, 40% joia mágica ou 40% amuleto mágico de skill.
- As duas formas do Harrower concedem XP, gold e rolls separadamente.

Threat e recompensa usam o mesmo snapshot de MaxHits, mas a classe textual não concede multiplicador.

## Limites de combate

Masteries funcionam somente contra criaturas PvM elegíveis. Jogadores, pets controlados, summons, participantes de Arena e personagens com agressão PvP recente ficam fora do sistema. Cada mastery pode ativar um log persistente que relata somente efeitos realmente aplicados.

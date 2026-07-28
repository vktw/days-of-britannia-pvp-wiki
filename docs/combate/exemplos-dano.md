# Exemplos de dano

!!! success "Status: Live 0.9.6"
    Os exemplos utilizam as fórmulas atualmente publicadas.

Os exemplos abaixo seguem o servidor oficial **Live 0.9.6**. Eles isolam um golpe que ja acertou; a chance de acerto e a chance de Parrying sao sorteios anteriores e independentes.

## Atacante usado

Nos primeiros exemplos, o atacante possui:

- 100 Tactics.
- 100 Anatomy.
- 100 STR.
- Arma of Vanquishing, com bonus final de +9.

Sua escala e:

```text
escala = 1 + (100 - 50)/100 + 100/500 + 100/500
escala = 1 + 0,50 + 0,20 + 0,20
escala = 1,90
```

## Faixas de dano bruto

| Arma | Dano-base | Depois da escala e truncamento | Vanquishing | Dano bruto final |
|---|---:|---:|---:|---:|
| Kryss | 10-13 | 19-24 | +9 | **28-33** |
| Bardiche | 29-33 | 55-62 | +9 | **64-71** |
| Bow | 15-20 | 28-38 | +9 | **37-47** |

Cada golpe sorteia um inteiro dentro da faixa de dano-base. Por isso, os valores intermediarios nao formam necessariamente uma progressao perfeitamente uniforme depois da multiplicacao e do truncamento.

## Exemplo 1: regiao sem armor

Um Bow of Vanquishing sorteia dano-base 19:

```text
dano escalado = truncar(19 x 1,90) = truncar(36,10) = 36
dano bruto = 36 + 9 = 45
bonus por regiao descoberta = arredondar(45 x 15%) = 7
dano final = 45 + 7 = 52
```

O personagem perde **52 hits**. Roupas comuns e joias sem Physical Resist nao eliminam esse bonus.

## Exemplo 2: armor regional

O mesmo golpe bruto de 45 acerta uma peca que exibe 18% de Physical Resist:

```text
absorcao = arredondar(45 x 18%) = 8
dano final = 45 - 8 = 37
```

O personagem perde **37 hits**. Nao ha sorteio de absorcao: o percentual exibido pela peca determina diretamente o resultado.

## Exemplo 3: armor com Protection

A regiao possui 18% de Physical Resist e Protection concedeu 8%:

```text
absorcao da armor = arredondar(45 x 18%) = 8
apos armor = 45 - 8 = 37
absorcao de Protection = arredondar(37 x 8%) = 3
dano final = 37 - 3 = 34
```

O personagem perde **34 hits**.

Se a regiao estiver vazia, primeiro entra o bonus de 15% e depois Protection:

```text
apos bonus de regiao descoberta = 45 + arredondar(45 x 15%) = 52
absorcao de Protection = arredondar(52 x 8%) = 4
dano final = 52 - 4 = 48
```

## Exemplo 4: Parrying com shield

O defensor possui Parrying 100.0 e um shield que exibe 31% de Physical Resist:

```text
chance de bloquear = 45%
absorcao em bloqueio bem-sucedido = arredondar(45 x 31%) = 14
dano final = 45 - 14 = 31
```

Se o bloqueio acontecer, o personagem perde **31 hits** e nenhuma peca corporal e consultada. Se o Parrying falhar, o servidor sorteia normalmente uma regiao corporal e aplica a armor daquela regiao. Protection, quando ativa, e calculada sobre os 31 pontos restantes.

## Exemplo 5: comparacao completa

Para o mesmo dano bruto de 45:

| Defesa encontrada | Calculo | Dano final |
|---|---|---:|
| Regiao vazia, sem Protection | 45 + 15% | **52** |
| Peca com 18% Physical Resist | 45 - 18% | **37** |
| Peca com 18% e Protection 8% | 45 - 18%, depois -8% | **34** |
| Regiao vazia e Protection 8% | 45 + 15%, depois -8% | **48** |
| Parry com shield de 31% | 45 - 31% | **31** |

O resultado pratico pode envolver tres sorteios separados: acerto do ataque, sucesso do Parrying e, quando nao ha bloqueio, regiao corporal. Os percentuais de absorcao deixam de ser aleatorios.

# Exemplos de dano

Os exemplos abaixo seguem o servidor oficial **Live 0.6.0**. Eles isolam um golpe que já acertou; a chance de acerto e a chance de Parrying são sorteios anteriores e independentes.

!!! note "Ambiente de testes"
    O bônus de 15% ao atingir uma região sem armor ainda está apenas em [Em teste](../em-teste.md) e não entra nestes exemplos.

## Atacante usado

Nos primeiros exemplos, o atacante possui:

- 100 Tactics.
- 100 Anatomy.
- 100 STR.
- Arma of Vanquishing, com bônus final de +9.

Sua escala é:

```text
escala = 1 + (100 − 50)/100 + 100/500 + 100/500
escala = 1 + 0,50 + 0,20 + 0,20
escala = 1,90
```

## Faixas de dano bruto

| Arma | Dano-base | Depois da escala e truncamento | Vanquishing | Dano bruto final |
|---|---:|---:|---:|---:|
| Kryss | 10–12 | 19–22 | +9 | **28–31** |
| Bardiche | 17–20 | 32–38 | +9 | **41–47** |
| Bow | 17–21 | 32–39 | +9 | **41–48** |

Cada golpe sorteia um inteiro dentro da faixa de dano-base. Por isso, os valores intermediários não formam necessariamente uma progressão perfeitamente uniforme depois da multiplicação e do truncamento.

## Exemplo 1: região sem armor

Um Bow of Vanquishing sorteia dano-base 19:

```text
dano escalado = truncar(19 × 1,90) = truncar(36,10) = 36
dano bruto = 36 + 9 = 45
AR efetivo = 0
absorção = 0
dano final = 45
```

O personagem perde **45 hits**.

## Exemplo 2: armor regional

O mesmo golpe bruto de 45 acerta uma região com AR efetivo 13:

```text
absorção mínima = floor(13 / 4) = 3
absorção máxima = ceil(13 / 2) = 7
```

O servidor sorteia um inteiro entre 3 e 7:

| Absorção sorteada | Dano bruto | Dano final |
|---:|---:|---:|
| 3 | 45 | 42 |
| 4 | 45 | 41 |
| 5 | 45 | 40 |
| 6 | 45 | 39 |
| 7 | 45 | 38 |

Essa região reduz o golpe para uma faixa de **38–42 hits**.

## Exemplo 3: armor com Protection

A região possui AR 13 e Protection concedeu +8:

```text
AR efetivo = 13 + 8 = 21
absorção mínima = floor(21 / 4) = 5
absorção máxima = ceil(21 / 2) = 11
dano final = 45 − inteiro aleatório entre 5 e 11
```

O golpe causa entre **34 e 40 hits**.

Protection também funcionaria se a região estivesse vazia. Nesse caso, com bônus +8, a absorção seria de 2 a 4 e o golpe causaria entre 41 e 43 hits.

## Exemplo 4: Parrying com shield

O defensor possui Parrying 100.0 e um shield com `ArmorRatingScaled` efetivo de 22:

```text
chance de bloquear = 45%
absorção em bloqueio bem-sucedido = round(22) = 22
dano final = max(1, 45 − 22) = 23
```

Se o bloqueio acontecer, o personagem perde **23 hits** e nenhuma peça corporal é consultada. Se o Parrying falhar, o servidor sorteia normalmente uma região corporal e aplica a armor daquela região. Protection não aumenta os 22 pontos absorvidos pelo shield.

## Exemplo 5: comparação completa

Para o mesmo dano bruto de 45:

| Defesa encontrada | Absorção | Dano final |
|---|---:|---:|
| Região vazia, sem Protection | 0 | **45** |
| Região com AR 13 | 3–7 | **38–42** |
| Região com AR 13 e Protection +8 | 5–11 | **34–40** |
| Região vazia e Protection +8 | 2–4 | **41–43** |
| Parry bem-sucedido com shield AR 22 | 22 | **23** |

O resultado prático pode envolver até quatro sorteios separados: acerto do ataque, sucesso do Parrying e, quando não há bloqueio, região corporal e absorção aleatória da armor.

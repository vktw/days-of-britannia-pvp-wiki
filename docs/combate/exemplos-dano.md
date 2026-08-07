# Exemplos de dano

## Faixas de dano bruto

O dano varia conforme arma, qualidade, STR, Tactics e Anatomy. A skill da arma determina principalmente a chance de acertar; armor, Parrying e Protection entram depois do acerto.

## Região sem armor

Em PvP, um golpe que encontra uma região sem armor efetiva recebe **25% de dano adicional**. Por isso, deixar Neck, Hands ou Head descobertos pode ser arriscado mesmo que as peças principais sejam fortes.

## Armor regional

Quando o golpe encontra uma peça, o `Physical Resist` exibido nela reduz aquele ataque. Uma peça melhor protege apenas sua própria região; ela não compensa outra região vazia.

## Protection

Protection reduz parte do dano que restou depois da armor, do shield ou do bônus de região descoberta. Isso significa que a ordem prática é:

1. verificar Parrying;
2. usar shield ou região corporal;
3. aplicar o bônus se a região estiver sem armor;
4. aplicar Protection, quando ativa.

## Parrying

Em um bloqueio bem-sucedido, o shield é usado no lugar da região corporal. Se o bloqueio falhar, a armor da região sorteada decide a proteção.

## Comparação rápida

Para o mesmo golpe que acertou:

| Situação | Resultado esperado |
| --- | --- |
| Região sem armor | Maior dano recebido |
| Região com armor | Dano reduzido pelo Physical Resist da peça |
| Armor e Protection | Redução em duas etapas |
| Bloqueio com shield | Shield substitui a região corporal |

**Proteção muda o resultado final**, mas cobertura completa também importa. Consulte [Armor e Parrying](armor-parrying.md) para montar seu equipamento.

!!! success "Status: Live 0.21.0"
    Exemplos práticos para entender decisões de equipamento, sem reproduzir a fórmula interna do servidor.

# Poison

!!! success "Status: Live 0.9.6"
    Níveis, ticks e renovação correspondem ao servidor oficial.

Poison é um recurso de pressão, especialmente útil para disputar janelas de cura. Nova aplicação reinicia sua duração.

| Nível | Dano calculado por tick | Limites | Primeiro tick | Intervalo | Ticks |
|---|---:|---:|---:|---:|---:|
| Lesser | 1 + 1% da vida atual | 1–16 | 3 s | 5 s | 8 |
| Regular | 1 + 2% da vida atual | 1–18 | 3 s | 4,5 s | 8 |
| Greater | 1 + 3% da vida atual | 1–20 | 2,5 s | 4 s | 10 |
| Deadly | 1 + 4% da vida atual | 1–30 | 2 s | 3,5 s | 12 |

O percentual usa a vida atual do alvo; depois do cálculo, o servidor aplica o mínimo e o máximo do respectivo nível. Poison de magia e de arma seguem a mesma cadência. Darkglow, Parasitic e Lethal permanecem desativados para o ruleset.

Reaplicar o mesmo nível reinicia a duração sem repetir a mensagem inicial. Os avisos periódicos são reduzidos e variam por nível: Lesser e Regular não repetem aviso local durante os ticks; Greater e Deadly repetem duas vezes. Observadores próximos recebem um aviso periódico em Lesser e Regular, dois em Greater e três em Deadly. As mensagens de aplicação e encerramento são separadas dessas repetições. Os ticks e números visíveis de dano permanecem inalterados.

Armas envenenadas aplicam poison em todo golpe bem-sucedido e consomem uma carga. A linha de propriedade da arma mostra nível e cargas restantes.

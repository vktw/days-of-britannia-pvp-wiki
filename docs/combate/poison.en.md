# Poison

!!! success "Status: Live 0.9.6"
Levels, ticks and renewal correspond to the official server.

Poison is a pressure feature, especially useful for fighting healing windows. New application resets its duration.

| Level | Damage calculated per tick | Limits | First tick | Interval | Ticks |
|---|---:|---:|---:|---:|---:|
| Lesser | 1 + 1% of current life | 1–16 | 3 s | 5s | 8 |
| Regular | 1 + 2% of current life | 1–18 | 3 s | 4.5s | 8 |
| Greater | 1 + 3% of current life | 1–20 | 2.5s | 4 s | 10 |
| Deadly | 1 + 4% of current life | 1–30 | 2 s | 3.5s | 12 |

The percentage uses the target's current health; After calculation, the server applies the minimum and maximum of the respective level. Magic and weapon Poison follow the same cadence. Darkglow, Parasitic and Lethal remain disabled for the ruleset.

Reapplying the same level resets the duration without repeating the initial message. Periodic warnings are reduced and vary by level: Lesser and Regular do not repeat local warnings during ticks; Greater and Deadly repeat twice. Nearby observers receive a periodic warning on Lesser and Regular, two on Greater, and three on Deadly. The apply and terminate messages are separate from these repetitions. Visible damage ticks and numbers remain unchanged.

Poisoned weapons poison every successful hit and consume a charge. The weapon's ownership line shows level and remaining charges.

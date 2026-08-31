# DoB Razor

The official launcher automatically launches **DoB Razor** together with the client. There is no need to open the wizard manually.

DoB Razor is a standalone release based on Razor CE 1.10.85.0. In addition to traditional Razor features, the `1.10.85.0-dob.1` version allows you to organize extensive scripts with reusable functions.

## Reusable functions

```text
def anunciar item quantidade
    sysmsg 'Item:' item
    sysmsg 'Quantidade:' quantidade
enddef

call anunciar 'Bandage' 50
```

- `def` and `enddef` delimit the function and its local parameters.
- `call` performs the function; the number of arguments must correspond to the declared parameters.
- `return` ends the current function without producing a value.
- Functions can call each other, with a limit of 32 simultaneous calls.

Statements can appear before or after the call. Each execution keeps its parameters in a local scope, including in nested calls.

### Example with routes and parameters

```text
def ir_para x y
    walkto x y any 1 run
enddef

call ir_para 2574 478
```

Parameters exist only inside the function. A function runs only through
`call`; `return` immediately ends the current function.

## Automatic routes

### `walkto`

Calculates a route through Razor pathfinding:

```text
walkto X Y [Z or any] [distance] [run]
```

- `X` and `Y` identify the destination.
- `Z` requires the exact level; `any` ignores height and uses only `X` and `Y`.
- `distance` defines how many tiles away still count as arrival.
- `run` requests running movement in ClassicUO.

```text
walkto 2558 504 0 1 run
walkto 2548 501 any 1 run
```

`walk` sends only one directional step, such as `walk 'North'`. `walkto`
calculates a complete route around obstacles known to the client. Use several
`walkto` waypoints for bridges, ramps, rivers, or elevation changes.

### `walkstop`

Cancels an active `walkto` route:

```text
walkstop
```

## Coordinates and Boolean loops

The `x`, `y`, and `z` expressions return the character's current ClassicUO
position and can be used in `if` and `while`:

```text
if y > 499
    sysmsg 'The character left the mining area.'
    walkto 2574 478 any 1 run
endif
```

`while true` repeats until `break`, `return`, or `stop`. `while false`,
`not true`, and `not false` are also accepted.

```text
while true
    say 'Running macro'
    wait 1000
endwhile
```

## dob.9 commands

!!! info "Optional download available"
    **dob.9** is already available as an optional download. After installing
    this version, the commands in this section can be used in scripts.

### `findtypein`

Searches for an item type only inside the specified container:

```text
findtypein container graphic [hue] [recursive]
```

When it finds an item, it returns `true` and saves the serial to the `found`
alias. `hue -1` accepts any color; `recursive true` includes nested containers.

```text
if findtypein resource_chest 0x1BF2 0 true
    sysmsg "Found ingots"
endif
```

### `counttypein`

Counts the total amount of an item in the specified container, adding stacks:

```text
counttypein container graphic [hue] [recursive]
```

```text
if counttypein backpack 0x1BF2 0 true < 100
    sysmsg "I have fewer than 100 ingots"
endif
```

### `moveitem`

Transfers an item through a controlled operation:

```text
moveitem item destination [amount] [timeout]
```

```text
if findtypein resource_chest 0x1BF2 0 true
    moveitem found backpack 100 30000
endif
```

The command waits for the shared queue, performs one `lift` followed by one
`drop`, waits for the cursor to clear, and applies a 150 ms interval before the
script continues. It does not interfere with Dress, Restock, or Organizer.

### `log`

Appends a timestamped line to a text file under `Scripts\Logs`:

```text
log "file.txt" "message" [other values]

log "blacksmith.txt" "Ingots:" counttypein backpack 0x1BF2 0 true
```

Only `.txt` files are accepted. Absolute paths, `..\`, and writes outside
`Scripts\Logs` are blocked; existing file content is not erased.

### dob.9 safety limits

- `findtypein` and `counttypein` do not search the ground, corpses, or world.
- External containers must be open, known, and nearby.
- `moveitem` does not allow autoloot, corpses, loose ground items, or direct
  transfers between two external containers.
- At least one side of the transfer must belong to the player.
- The update does not replace player logins, passwords, profiles, scripts,
  macros, hotkeys, or settings.

## Compatibility and diagnostics

Scripts that don't use the new functions should continue to work as before. In the project's published tests, commands such as `wait` and `target`, in addition to pausing and canceling, preserve their normal behavior within functions.

Errors continue to indicate the original lines in the editor, making it easier to find missing functions, incorrect arguments, incomplete definitions, and excessively deep calls.

!!! warning "Status: optional dob.9"
    dob.9 is available as an optional download. Use copies of your scripts for
    the first tests and preserve your current profiles and settings.

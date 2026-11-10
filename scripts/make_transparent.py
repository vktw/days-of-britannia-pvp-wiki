"""Make the outer background of the bonsai catalog transparent.

Flood-fill from the image borders, replacing pixels close to the sampled
corner color (within tolerance) with full transparency. Card interiors are
enclosed by their own borders, so only the outside goes transparent.
"""

import sys
from collections import deque

from PIL import Image

SRC = sys.argv[1]
DST = sys.argv[2]
TOLERANCE = int(sys.argv[3]) if len(sys.argv) > 3 else 18

img = Image.open(SRC).convert("RGBA")
w, h = img.size
px = img.load()


def base_color():
    samples = [
        px[0, 0],
        px[w - 1, 0],
        px[0, h - 1],
        px[w - 1, h - 1],
        px[w // 2, 0],
        px[w // 2, h - 1],
    ]
    rs = sum(c[0] for c in samples) // len(samples)
    gs = sum(c[1] for c in samples) // len(samples)
    bs = sum(c[2] for c in samples) // len(samples)
    return rs, gs, bs


br, bg, bb = base_color()
print(f"base=#{br:02x}{bg:02x}{bb:02x} size={w}x{h}")


def close(p):
    r, g, b, _a = p
    return abs(r - br) <= TOLERANCE and abs(g - bg) <= TOLERANCE and abs(b - bb) <= TOLERANCE


seen = bytearray(w * h)
queue = deque()
for x in list(range(w)) + list(range(w)):
    queue.append((x, 0))
    queue.append((x, h - 1))
for y in range(1, h - 1):
    queue.append((0, y))
    queue.append((w - 1, y))

cleared = 0
while queue:
    x, y = queue.popleft()
    idx = y * w + x
    if seen[idx]:
        continue
    seen[idx] = 1
    if not close(px[x, y]):
        continue
    px[x, y] = (0, 0, 0, 0)
    cleared += 1
    if x > 0:
        queue.append((x - 1, y))
    if x < w - 1:
        queue.append((x + 1, y))
    if y > 0:
        queue.append((x, y - 1))
    if y < h - 1:
        queue.append((x, y + 1))

print(f"cleared={cleared}")
img.save(DST)

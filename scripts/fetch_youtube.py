"""Fetch the DoB YouTube channel RSS into docs/api/youtube.json.

No API key needed: the public channel feed carries video IDs, titles and
publish dates. Thumbnails resolve as https://i.ytimg.com/vi/<id>/hqdefault.jpg.
The script never fails the build: on any error it keeps the previous file.
"""

from __future__ import annotations

import datetime
import json
import sys
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

CHANNEL_ID = "UClBq7Rve-svfRhuOl7YzXCg"
CHANNEL_URL = "https://www.youtube.com/@DaysOfBritannia"
FEED_URL = f"https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}"

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / "docs" / "api" / "youtube.json"

NS = {
    "atom": "http://www.w3.org/2005/Atom",
    "yt": "http://www.youtube.com/xml/schemas/2015",
}


def fetch_entries() -> list[dict]:
    request = urllib.request.Request(FEED_URL, headers={"User-Agent": "DoBWiki/1.0"})
    with urllib.request.urlopen(request, timeout=30) as response:
        payload = response.read()
    feed = ET.fromstring(payload)
    videos = []
    for entry in feed.findall("atom:entry", NS):
        video_id = (entry.findtext("yt:videoId", namespaces=NS) or "").strip()
        title = (entry.findtext("atom:title", namespaces=NS) or "").strip()
        published = (entry.findtext("atom:published", namespaces=NS) or "").strip()
        if video_id and title:
            videos.append({"id": video_id, "title": title, "published": published})
    return videos


def main() -> int:
    try:
        videos = fetch_entries()
    except Exception as error:  # noqa: BLE001 - build must survive feed outages
        print(f"youtube fetch skipped ({error}); keeping previous file")
        return 0
    if not videos:
        print("youtube fetch returned no videos; keeping previous file")
        return 0
    TARGET.parent.mkdir(parents=True, exist_ok=True)
    TARGET.write_text(
        json.dumps(
            {
                "channel": CHANNEL_URL,
                "fetched_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
                "videos": videos,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(f"youtube fetch saved {len(videos)} videos")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

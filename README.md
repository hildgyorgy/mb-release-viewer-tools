# MusicBrainz Explorer – Tools

Small browser integration tools for **MusicBrainz Explorer**.

This repository contains lightweight helper tools that make it easier to open
MusicBrainz Explorer directly from MusicBrainz release pages.

The tools do **not** replace or modify MusicBrainz functionality.
They provide a convenient bridge between the MusicBrainz website and
the external Explorer.

---

## Included tools

### 🔖 Bookmarklet

A simple bookmarklet that:

- extracts the release MBID from the current MusicBrainz release page
- opens MusicBrainz Explorer with the correct release preloaded

Works in all major desktop browsers (Safari, Chrome, Firefox).

→ See: `bookmarklet/`

---

### 🧩 Userscript

A userscript (Userscripts / Tampermonkey / Greasemonkey) that:

- injects a **MusicBrainz Explorer** button into MusicBrainz release pages
- places the button next to existing sidebar controls
- opens the external viewer with one click

Designed to be visually consistent with the MusicBrainz interface,
while remaining clearly distinguishable as an external tool.

→ See: `userscript/`

---

## MusicBrainz Explorer

The tools in this repository are companions to MusicBrainz Explorer,
which lives in a separate repository:

- Explorer (live): https://hildgyorgy.github.io/mb-explorer/
- Explorer (source): https://github.com/hildgyorgy/mb-explorer

The userscript updates existing version 1.0.0 installations automatically.
The bookmarklet cannot update itself and must be copied again manually.

---

## Scope and intent

- Personal / experimental project
- Read-only usage of public MusicBrainz data
- No data modification
- No tracking, analytics, or external dependencies

Feedback, ideas and improvements are welcome.

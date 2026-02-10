# MB Release Viewer – Tools

Small browser integration tools for the **MB Release Viewer**.

This repository contains lightweight helper tools that make it easier to open
the external MB Release Viewer directly from MusicBrainz release pages.

The tools do **not** replace or modify MusicBrainz functionality.
They provide a convenient bridge between the MusicBrainz website and
an external, read-only release viewer.

---

## Included tools

### 🔖 Bookmarklet

A simple bookmarklet that:

- extracts the release MBID from the current MusicBrainz release page
- opens the MB Release Viewer with the correct release preloaded

Works in all major desktop browsers (Safari, Chrome, Firefox).

→ See: `bookmarklet/`

---

### 🧩 Userscript

A userscript (Userscripts / Tampermonkey / Greasemonkey) that:

- injects an **MB Release Viewer** button into MusicBrainz release pages
- places the button next to existing sidebar controls
- opens the external viewer with one click

Designed to be visually consistent with the MusicBrainz interface,
while remaining clearly distinguishable as an external tool.

→ See: `userscript/`

---

## MB Release Viewer

The tools in this repository are companions to the MB Release Viewer itself,
which lives in a separate repository:

- Viewer (live):  
  https://hildgyorgy.github.io/mb-release-viewer/
- Viewer (source):  
  https://github.com/hildgyorgy/mb-release-viewer

---

## Scope and intent

- Personal / experimental project
- Read-only usage of public MusicBrainz data
- No data modification
- No tracking, analytics, or external dependencies

Feedback, ideas and improvements are welcome.

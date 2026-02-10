# MB Release Viewer – Userscript

A userscript that integrates the **MB Release Viewer** directly into
MusicBrainz release pages.

It adds a dedicated button next to the existing
**Play on ListenBrainz** control.

## What it does

On MusicBrainz release pages, the userscript:

- injects an **MB Release Viewer** button into the right-hand sidebar
- places it directly below the *Play on ListenBrainz* button
- opens the external MB Release Viewer with the current release preloaded

The button is visually aligned with the MusicBrainz UI,
but clearly distinguishable as an external tool.

## Requirements

One of the following userscript managers:

- **Userscripts** (Safari)
- **Tampermonkey** (Chrome, Safari, Firefox)
- **Greasemonkey** (Firefox)

## How to install

1. Install a userscript manager for your browser
2. Open the file  
   `mb-release-viewer.user.js`
3. Install the script via your userscript manager
4. Visit any MusicBrainz release page

## How to use

- Open a MusicBrainz release page
- Look for the **MB Release Viewer** button in the sidebar
- Click it to open the viewer with the current release

## Scope & safety

- The script runs **only** on `musicbrainz.org` release pages
- No data is modified or submitted to MusicBrainz
- No tracking, no analytics, no external dependencies

## Design note

The button intentionally does **not** fully replicate native MusicBrainz controls,
to remain visually consistent while still clearly identifiable as an external tool.

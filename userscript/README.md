# MusicBrainz Explorer – Userscript

A userscript that integrates **MusicBrainz Explorer** directly into
MusicBrainz release pages.

It adds a dedicated button next to the existing
**Play on ListenBrainz** control.

## What it does

On MusicBrainz release pages, the userscript:

- injects a **MusicBrainz Explorer** button into the right-hand sidebar
- places it directly below the *Play on ListenBrainz* button
- opens MusicBrainz Explorer with the current release preloaded

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
- Look for the **MusicBrainz Explorer** button in the sidebar
- Click it to open the Explorer with the current release

Existing installations of version 1.0.0 update automatically through their
userscript manager. The legacy filename is intentionally retained so that this
update path remains intact.

## Scope & safety

- The script runs **only** on `musicbrainz.org` release pages
- No data is modified or submitted to MusicBrainz
- No tracking, no analytics, no external dependencies

## Design note

The button intentionally does **not** fully replicate native MusicBrainz controls,
to remain visually consistent while still clearly identifiable as an external tool.

# MusicBrainz Explorer – Bookmarklet

A simple bookmarklet that opens **MusicBrainz Explorer** for the currently viewed
MusicBrainz release page.

## What it does

When clicked on a MusicBrainz release page, the bookmarklet:

- extracts the release MBID from the current page URL
- opens MusicBrainz Explorer
- automatically loads the corresponding release

## How to install

1. Open the file  
   `mb-release-viewer.bookmarklet.txt`
2. Copy the **entire line** (it starts with `javascript:`)
3. Create a new browser bookmark
4. Paste the copied code into the **URL / Location** field of the bookmark
5. Give it a name, for example:  
   **MusicBrainz Explorer**

## How to use

- Navigate to any MusicBrainz release page  
  (e.g. `https://musicbrainz.org/release/...`)
- Click the bookmark
- MusicBrainz Explorer opens in a new tab with the release preloaded

## Compatibility

- Works in all major desktop browsers  
  (Safari, Chrome, Firefox)

## Notes

- This bookmarklet does **not** modify MusicBrainz pages
- It only opens an external viewer using publicly available data

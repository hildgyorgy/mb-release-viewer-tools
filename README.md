MB Release Viewer – Tools

Browser integration tools for MB Release Viewer.

This repository contains small helper tools that make it easier to open the
MB Release Viewer directly from MusicBrainz release pages.

The tools do not replace MusicBrainz functionality – they provide a convenient
bridge between the MusicBrainz website and the external release viewer.

⸻

Included tools

🔖 Bookmarklet

A simple bookmarklet that:
	•	extracts the release MBID from the current MusicBrainz release page
	•	opens the MB Release Viewer with the correct release preloaded

Works in all major desktop browsers (Safari, Chrome, Firefox).

⸻

🧩 Userscript

A userscript (Tampermonkey / Userscripts / Greasemonkey) that:
	•	injects an “MB Release Viewer” button into MusicBrainz release pages
	•	places the button next to the existing Play on ListenBrainz control
	•	opens the external viewer for the current release with one click

Designed to be visually consistent with the MusicBrainz interface,
while remaining clearly distinguishable as an external tool.

⸻

MB Release Viewer

The viewer itself lives in a separate repository:

👉 https://hildgyorgy.github.io/mb-release-viewer/
👉 https://github.com/hildgyorgy/mb-release-viewer

⸻

Status
	•	Actively developed
	•	Experimental / personal project
	•	Feedback and ideas are welcome

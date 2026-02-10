// ==UserScript==
// @name         MusicBrainz → MB Release Viewer button
// @namespace    https://hildgyorgy.github.io/
// @version      1.0.0
// @description  Adds a ListenBrainz-looking button on MusicBrainz release pages that opens MB Release Viewer with current MBID.
// @match        https://musicbrainz.org/release/*
// @match        https://beta.musicbrainz.org/release/*
// @grant        none
// @author       hildgyorgy
// ==/UserScript==

(() => {
  "use strict";

  const VIEWER_BASE = "https://hildgyorgy.github.io/mb-release-viewer/?mbid=";
  const BTN_ID = "mb-release-viewer-btn";

  function extractMBIDFromUrl(url) {
    const m = String(url || "").match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i);
    return m ? m[0] : null;
  }

  function openViewer(mbid) {
    if (!mbid) return;
    const url = VIEWER_BASE + encodeURIComponent(mbid);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function injectTinyCSSOnce() {
    if (document.getElementById("mb-rv-style")) return;

    const css = `
      /* csak minimális: a MB gombjának stílusát klónozzuk, ezért itt alig kell bármi */
      #${BTN_ID} { cursor: pointer; }
      #${BTN_ID}:hover { filter: brightness(1.03); }
      #${BTN_ID}:active { transform: translateY(1px); }
    `;

    const style = document.createElement("style");
    style.id = "mb-rv-style";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function findListenBrainzButton(root = document) {
    return root.querySelector('a.styled-button.listenbrainz-button');
  }

  function findSidebar(root = document) {
    return root.querySelector(".sidebar") || root.querySelector("#sidebar") || null;
  }

  function buildButtonLike(listenBtn, mbid) {
    const clone = listenBtn.cloneNode(true);

    clone.id = BTN_ID;

    clone.textContent = "MB Release Viewer";

    clone.removeAttribute("href");
    clone.setAttribute("role", "button");
    clone.setAttribute("tabindex", "0");

    const w = Math.round(listenBtn.getBoundingClientRect().width);
    if (w > 0) {
      clone.style.width = w + "px";
      clone.style.display = "block";
    }

    const onActivate = (e) => {
      e.preventDefault();
      e.stopPropagation();
      openViewer(mbid);
    };

    clone.addEventListener("click", onActivate);
    clone.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") onActivate(e);
    });

    return clone;
  }

  function ensureButton() {
    injectTinyCSSOnce();

    if (document.getElementById(BTN_ID)) return true;

    const mbid = extractMBIDFromUrl(location.href);
    if (!mbid) return false;

    const sidebar = findSidebar(document);
    if (!sidebar) return false;

    const listenBtn = findListenBrainzButton(sidebar) || findListenBrainzButton(document);
    if (!listenBtn) return false;

    const btn = buildButtonLike(listenBtn, mbid);

    const parent = listenBtn.parentElement;
    if (parent) {
      parent.insertBefore(btn, listenBtn.nextSibling);
      return true;
    }

    listenBtn.insertAdjacentElement("afterend", btn);
    return true;
  }

  function run() {
    if (ensureButton()) return;

    const obs = new MutationObserver(() => {
      if (ensureButton()) obs.disconnect();
    });

    obs.observe(document.documentElement, { childList: true, subtree: true });

    setTimeout(() => obs.disconnect(), 10000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();

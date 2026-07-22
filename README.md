# TurkEats — Unofficial Restaurant Directory

A static, no-build-tools website (plain HTML/CSS/JS) for browsing every
restaurant a content creator has visited. Ships with 10 placeholder
restaurants so you can see it working immediately.

## Running it

No install, no server required for basic use — just open `index.html`
in a browser. If your browser blocks local scripts from loading, run a
tiny local server instead (from inside this folder):

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Adding real restaurants

Everything lives in **`data.js`**. Each entry is one restaurant:

```js
{
  slug: "unique-url-safe-id",
  name: "Restaurant Name",
  cuisine: "Cuisine label",
  city: "City, ST",
  address: "Full street address",
  lat: 30.2669,
  lon: -97.7396,
  dateVisited: "2026-06-02",
  website: "https://restaurant-website.com",
  videoPlatform: "youtube", // "youtube" | "tiktok" | "instagram" | ""
  videoId: "abc123",        // see field guide comments at top of data.js
}
```

Add, edit, or remove entries in the `RESTAURANTS` array — the directory
grid and every detail page update automatically, no other files need
to change.

- Leave `videoPlatform`/`videoId` empty (`""`) to show a "no video yet"
  placeholder instead of a broken embed.
- `lat`/`lon` power the embedded map. Look them up on Google Maps or
  openstreetmap.org (right-click a spot → "What's here?" / "Show
  address").

## What's built in

- **Directory page** (`index.html`) — IMDb-style grid of every
  restaurant, toggle between "Recently Visited" and "A–Z" sort.
- **Detail page** (`restaurant.html?slug=...`) — embedded video
  (YouTube/TikTok/Instagram), address, embedded map, link to the
  restaurant's own website.
- No rating system (left out per your call) — easy to add back later
  if you change your mind; the data schema has room for it.

## Branding

Currently branded "TurkEats" with a placeholder "unofficial fan
directory" tag and a disclaimer footer. Swap the name in `index.html`
and `restaurant.html` (`<div class="brand">` / `<a class="brand">`)
and in the `<title>` tags whenever you're ready to finalize it.

## Note on this build

This was built and logic-tested in a sandboxed environment without
browser access, so testing was done via a headless JS harness (data
loading, sorting, video/map embed generation, missing-data fallbacks,
not-found handling) rather than visually. Give it a look in an actual
browser and flag anything that looks off — happy to adjust colors,
layout, or copy.

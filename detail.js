/**
 * Restaurant detail page logic. Reads ?slug=... from the URL, looks
 * it up in RESTAURANTS (data.js), and fills in the page.
 */

function videoSectionHtml(restaurant) {
  const embed = videoEmbedUrl(restaurant);
  const frameClass = embed && embed.wide ? "video-frame wide" : "video-frame";

  if (!embed) {
    return `
      <div class="${frameClass}">
        <div class="video-placeholder">
          No video linked yet. Add a videoPlatform + videoId for
          "${restaurant.slug}" in data.js to embed the TikTok, Instagram,
          or YouTube visit here.
        </div>
      </div>
    `;
  }

  return `
    <div class="${frameClass}">
      <iframe
        src="${embed.url}"
        title="${restaurant.name} video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
  `;
}

function mapSectionHtml(restaurant) {
  const hasCoords = typeof restaurant.lat === "number" && typeof restaurant.lon === "number";
  const mapsLink = hasCoords
    ? `https://www.google.com/maps/search/?api=1&query=${restaurant.lat},${restaurant.lon}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        restaurant.address || restaurant.name
      )}`;

  const mapFrame = hasCoords
    ? `<div class="map-frame"><iframe src="${mapEmbedUrl(restaurant.lat, restaurant.lon)}" title="Map"></iframe></div>`
    : `<div class="map-frame"><div class="video-placeholder">Add lat/lon in data.js to show a map.</div></div>`;

  return `
    <div class="map-wrap">
      ${mapFrame}
      <div class="address-card">
        <div class="label">Address</div>
        <div class="value">${restaurant.address || "Address not added yet"}</div>
        <a class="directions-link" href="${mapsLink}" target="_blank" rel="noopener">
          Get directions →
        </a>
      </div>
    </div>
  `;
}

function render() {
  const slug = getSlugFromQuery();
  const restaurant = slug ? findRestaurant(slug) : null;
  const app = document.getElementById("app");

  if (!restaurant) {
    app.innerHTML = `
      <a class="back-link" href="index.html">← Back to directory</a>
      <div class="empty-state">
        Couldn't find that restaurant. It may have been removed from data.js.
      </div>
    `;
    document.title = "Not found — TurkEats";
    return;
  }

  document.title = `${restaurant.name} — TurkEats`;

  app.innerHTML = `
    <a class="back-link" href="index.html">← Back to directory</a>

    <div class="detail-header">
      <div>
        <h1 class="detail-name">${restaurant.name}</h1>
        <div class="detail-meta">
          <span class="pill">${restaurant.cuisine}</span>
          <span class="pill">${restaurant.city}</span>
          <span class="pill">Visited ${formatDate(restaurant.dateVisited)}</span>
        </div>
      </div>
      ${
        restaurant.website
          ? `<a class="site-btn" href="${restaurant.website}" target="_blank" rel="noopener">Visit Website ↗</a>`
          : ""
      }
    </div>

    <div class="section">
      <div class="section-title">The Video</div>
      ${videoSectionHtml(restaurant)}
    </div>

    <div class="section">
      <div class="section-title">Location</div>
      ${mapSectionHtml(restaurant)}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", render);

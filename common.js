/**
 * Small shared helpers used by both app.js (directory page) and
 * detail.js (restaurant page).
 */

// Deterministic "poster" background color per restaurant, so cards
// without real photos still look visually distinct.
function posterGradient(seedStr) {
  let hash = 0;
  for (let i = 0; i < seedStr.length; i++) {
    hash = seedStr.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue1 = Math.abs(hash) % 360;
  const hue2 = (hue1 + 42) % 360;
  return `linear-gradient(155deg, hsl(${hue1} 55% 22%), hsl(${hue2} 55% 14%))`;
}

function initialsFor(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getSlugFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("slug");
}

function findRestaurant(slug) {
  return RESTAURANTS.find((r) => r.slug === slug);
}

function videoEmbedUrl(restaurant) {
  const { videoPlatform, videoId } = restaurant;
  if (!videoPlatform || !videoId) return null;
  if (videoPlatform === "youtube") {
    return { url: `https://www.youtube.com/embed/${videoId}`, wide: true };
  }
  if (videoPlatform === "tiktok") {
    return { url: `https://www.tiktok.com/embed/v2/${videoId}`, wide: false };
  }
  if (videoPlatform === "instagram") {
    return { url: `https://www.instagram.com/p/${videoId}/embed`, wide: false };
  }
  return null;
}

function mapEmbedUrl(lat, lon, delta) {
  const d = delta || 0.01;
  const left = lon - d;
  const right = lon + d;
  const top = lat + d;
  const bottom = lat - d;
  const bbox = `${left},${bottom},${right},${top}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&marker=${lat},${lon}&layer=mapnik`;
}

/**
 * Directory / browse page logic: renders the grid and handles the
 * A-Z vs Recently Visited sort toggle.
 */

let currentSort = "date"; // "date" | "alpha"
let RESTAURANTS = [];

function sortedRestaurants() {
  const list = [...RESTAURANTS];
  if (currentSort === "alpha") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    list.sort((a, b) => new Date(b.dateVisited) - new Date(a.dateVisited));
  }
  return list;
}

function cardHtml(restaurant, rank) {
  const gradient = posterGradient(restaurant.slug);
  const initials = initialsFor(restaurant.name);
  const thumbnail =
    restaurant.videoPlatform === "youtube" && restaurant.videoId
      ? `<img class="poster-img" src="https://img.youtube.com/vi/${restaurant.videoId}/hqdefault.jpg" alt="" loading="lazy" onerror="this.remove()" />`
      : "";
  return `
    <a class="card" href="restaurant.html?slug=${encodeURIComponent(restaurant.slug)}">
      <div class="poster" style="background:${gradient}">
        ${initials}
        ${thumbnail}
      </div>
      <div class="card-body">
        <div class="card-name">${restaurant.name}</div>
        <div class="card-meta">${restaurant.cuisine}</div>
        <div class="card-meta">${restaurant.city}</div>
        <div class="card-date">Posted ${formatDate(restaurant.dateVisited)}</div>
      </div>
    </a>
  `;
}

function renderGrid() {
  const grid = document.getElementById("grid");
  const countEl = document.getElementById("result-count");
  const list = sortedRestaurants();

  if (list.length === 0) {
    grid.innerHTML = "";
    grid.insertAdjacentHTML(
      "afterend",
      `<div class="empty-state">No restaurants yet. Add rows to the sheet.</div>`
    );
    countEl.textContent = "0 restaurants";
    return;
  }

  grid.innerHTML = list.map((r, i) => cardHtml(r, i + 1)).join("");
  countEl.textContent = `${list.length} restaurant${list.length === 1 ? "" : "s"}`;
}

function setSort(sort) {
  currentSort = sort;
  document
    .querySelectorAll(".sort-btn")
    .forEach((btn) => btn.classList.toggle("active", btn.dataset.sort === sort));
  renderGrid();
}

document.addEventListener("DOMContentLoaded", async () => {
  document.querySelectorAll(".sort-btn").forEach((btn) => {
    btn.addEventListener("click", () => setSort(btn.dataset.sort));
  });

  const grid = document.getElementById("grid");
  grid.innerHTML = `<div class="empty-state">Loading directory…</div>`;

  try {
    RESTAURANTS = await loadRestaurants();
  } catch (err) {
    grid.innerHTML = `<div class="empty-state">Couldn't load the directory. Please refresh to try again.</div>`;
    return;
  }

  renderGrid();
});

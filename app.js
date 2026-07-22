/**
 * Directory / browse page logic: renders the grid and handles the
 * A-Z vs Recently Visited sort toggle.
 */

let currentSort = "date"; // "date" | "alpha"

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
  return `
    <a class="card" href="restaurant.html?slug=${encodeURIComponent(restaurant.slug)}">
      <div class="poster" style="background:${gradient}">
        <span class="rank">#${rank}</span>
        ${initials}
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
      `<div class="empty-state">No restaurants yet. Add entries in data.js.</div>`
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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sort-btn").forEach((btn) => {
    btn.addEventListener("click", () => setSort(btn.dataset.sort));
  });
  renderGrid();
});

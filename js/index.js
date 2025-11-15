const grid = document.getElementById('grid');
const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const resetBtn = document.getElementById('resetBtn');

function renderGrid(list) {
  grid.innerHTML = '';
  if (list.length === 0) {
    grid.innerHTML = '<p class="small">No movies found.</p>';
    return;
  }

  list.forEach(m => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${m.Poster}" alt="${m.Title} poster" onerror="this.style.opacity=.6">
      <h3>${m.Title}</h3>
      <div class="meta">${m.Year} • ${m.Genre}</div>
      <div style="margin-top:auto;display:flex;gap:8px">
        <button class="button" onclick="goToDetails('${m.imdbID}')">Details</button>
        <button class="button" onclick="addToWatchlistById('${m.imdbID}')">Add to Watchlist</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

searchBtn.addEventListener('click', () => {
  const q = search.value.trim().toLowerCase();
  if (!q) return renderGrid(MOVIES);

  const found = MOVIES.filter(m =>
    m.Title.toLowerCase().includes(q) ||
    (m.Genre && m.Genre.toLowerCase().includes(q))
  );
  renderGrid(found);
});

resetBtn.addEventListener('click', () => {
  search.value = '';
  renderGrid(MOVIES);
});

renderGrid(MOVIES);
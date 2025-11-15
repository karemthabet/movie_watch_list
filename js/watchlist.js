const listEl = document.getElementById('list');
const clearAll = document.getElementById('clearAll');

function renderList() {
  const items = loadWatchlist();
  listEl.innerHTML = '';

  if (items.length === 0) {
    listEl.innerHTML = '<p class="small">Your watchlist is empty.</p>';
    return;
  }

  items.forEach(m => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${m.Poster}" alt="${m.Title} poster" onerror="this.style.opacity=.6">
      <h3>${m.Title}</h3>
      <div class="meta">${m.Year} • ${m.Genre}</div>
      <div style="margin-top:auto;display:flex;gap:8px">
        <button class="button" onclick="goToDetails('${m.imdbID}')">Details</button>
        <button class="button" onclick="removeFromWatchlistById('${m.imdbID}'); renderList();">Remove</button>
      </div>
    `;
    listEl.appendChild(card);
  });
}

clearAll.addEventListener('click', () => {
  if (confirm('Clear watchlist?')) {
    saveWatchlist([]);
    renderList();
  }
});

renderList();

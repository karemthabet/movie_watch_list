function qs(name){
  const params = new URLSearchParams(location.search);
  return params.get(name);
}

const id = qs('id');
const main = document.getElementById('main');

if (!id) {
  main.innerHTML = '<p class="small">No movie selected.</p>';
} else {
  const movie = MOVIES.find(m => m.imdbID === id);
  if (!movie) {
    main.innerHTML = '<p class="small">Movie not found.</p>';
  } else {
    const inWL = isInWatchlist(id);

    main.innerHTML = `
      <div class="details">
        <img src="${movie.Poster}" alt="${movie.Title} poster" onerror="this.style.opacity=.6">
        <div>
          <h2>${movie.Title} <span class="small">(${movie.Year})</span></h2>
          <div class="meta"><strong>Genre:</strong> ${movie.Genre}</div>
          <div class="meta"><strong>Director:</strong> ${movie.Director}</div>
          <div class="meta"><strong>Runtime:</strong> ${movie.Runtime}</div>
          <div class="meta"><strong>Actors:</strong> ${movie.Actors}</div>
          <div class="meta"><strong>IMDb Rating:</strong> ${movie.imdbRating}</div>
          <p style="margin-top:12px">${movie.Plot}</p>
          <div style="margin-top:12px;display:flex;gap:8px">
            <button id="wlBtn" class="button">${ inWL ? 'Remove from Watchlist' : 'Add to Watchlist' }</button>
            <button onclick="location.href='index.html'" class="button">Back to Home</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('wlBtn').addEventListener('click', () => {
      if (isInWatchlist(id)) {
        removeFromWatchlistById(id);
        wlBtn.textContent = 'Add to Watchlist';
      } else {
        addToWatchlistById(id);
        wlBtn.textContent = 'Remove from Watchlist';
      }
    });
  }
}

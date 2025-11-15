
function saveWatchlist(list){
  localStorage.setItem('watchlist', JSON.stringify(list));
}
function loadWatchlist(){
  try{ return JSON.parse(localStorage.getItem('watchlist')||'[]'); }catch(e){ return []; }
}
function isInWatchlist(id){
  return loadWatchlist().some(m=>m.imdbID===id);
}
function addToWatchlistById(id){
  const movie = MOVIES.find(m=>m.imdbID===id);
  if(!movie) return;
  const list = loadWatchlist();
  if(list.some(m=>m.imdbID===id)) return;
  list.push(movie);
  saveWatchlist(list);
}
function removeFromWatchlistById(id){
  let list = loadWatchlist();
  list = list.filter(m=>m.imdbID!==id);
  saveWatchlist(list);
}
function goToDetails(id){
  window.location.href = 'details.html?id=' + encodeURIComponent(id);
}

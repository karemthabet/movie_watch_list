# 🎬 Movie Watchlist

A simple, interactive web application to browse movies, view details, and manage your personal watchlist using **localStorage**.  

---

## 🌟 Features

- Browse a curated list of popular movies.
- Search movies by **title** or **genre**.
- View detailed information for each movie:
  - Title, Year, Genre
  - Director, Runtime, Actors
  - IMDb rating and Plot
- Add or remove movies from a **personal watchlist**.
- Persistent watchlist stored locally in the browser.
- Responsive and modern UI with **dark theme**.

---

## 🗂 Project Structure

movie-watchlist/
│
├─ data/
│ └─ movies.js # Movie database (array of movie objects)
│
├─ js/
│ ├─ app.js # Core functions for watchlist management
│ ├─ index.js # Home page logic (search, render grid)
│ ├─ watchlist.js # Watchlist page logic (render, remove, clear)
│ └─ details.js # Movie details page logic
│
├─ styles/
│ └─ styles.css # Global styles and dark theme
│
├─ index.html # Home page
├─ watchlist.html # Watchlist page
├─ details.html # Movie details page
└─ README.md # Project documentation



## 💻 How to Use

1. Clone the repository:
```bash
git clone <repository-url>
Open index.html in your browser to browse movies.

Use the Search box to filter movies by title or genre.

Click Details on a movie card to see full information.

Add movies to your watchlist using the Add to Watchlist button.

Go to Watchlist page to manage your saved movies:

Remove individual movies

Clear the entire watchlist

All watchlist data is saved in your browser's localStorage, so it persists across page reloads.

🎨 UI & Styling
Dark mode gradient theme.

Responsive grid layout for movie cards.

Modern buttons and search input.

Details page shows movie poster, info, and watchlist action.

🧩 Technologies Used
HTML5 – Structure

CSS3 – Styling

JavaScript (ES6) – Logic and localStorage management

Fully frontend-based, no backend required.

📌 Future Improvements
Add sorting (by rating, year).

Include pagination for large movie lists.

Integrate with real API like OMDb or TMDb.

Add user authentication to save watchlists online.
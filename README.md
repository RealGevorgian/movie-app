# Movie App

A modern and visually appealing React.js application that allows users to:

* View popular movies fetched from the TMDb API
* Search for movies dynamically with a live filter
* View detailed movie descriptions, genres, and ratings
* Add and remove movies to and from favorites
* Use route protection and basic authentication
* Experience rich animations and responsive design

## Features

* Fully responsive UI with gradient background and animations (Framer Motion)
* Integrated TMDb API for real-time movie data
* Favorites list with persistent localStorage support
* NavigationBar reused across all pages
* Protected and public routes with authentication
* Movie detail view with proper back navigation to Home or Movies page
* Animated interactive UI for better user experience

## Project Structure

```
movie-app/
├── public/
│   ├── index.html
│   ├── logo192.png
│   ├── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── mockMovies.js
│   │   ├── Navigation.js
│   │   └── NavigationBar.js
│   ├── pages/
│   │   ├── FavoritesPage.js
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── MovieDetailPage.js
│   │   ├── MoviesPage.js
│   │   └── StaticMovieDetailPage.js
│   ├── redux/
│   │   ├── favoritesSlice.js
│   │   └── store.js
│   ├── routes/
│   │   ├── AppRouter.js
│   │   ├── PrivateRoute.js
│   │   └── PublicRoute.js
│   ├── utils/
│   │   ├── auth.js
│   │   └── App.css
├── index.css
├── index.js
├── App.jspackage.json
└── README.md
```

## Installation & Setup

1. Clone the repo:

```bash
git clone https://github.com/RealGevorgian/movie-app.git
cd movie-app
```

2. Install dependencies:

```bash
npm install
```

3. Add your TMDb API key inside `MovieDetailPage.js` and wherever applicable, or you can use mine:

```js
const API_KEY = "56624e735c4d065e5f06729a21b19253";
```

4. Run the development server:

```bash
npm start
```

## Tech Stack

* React.js
* React Router
* Redux Toolkit
* TMDb API
* Framer Motion (for animations)
* LocalStorage
* Plain CSS

## Future Enhancements

* Add user signup/login with backend
* Store favorites per user in database
* Improve accessibility
* Implement dark/light theme toggle
* Infinite scroll or pagination on MoviesPage

## License

This project is for educational/demo purposes only.

---

Built with passion for great UI/UX and modern React development.

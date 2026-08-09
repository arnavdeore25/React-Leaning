# News HUB

A React news app built with Vite, Tailwind CSS, and NewsAPI. Users can browse top headlines by category, search for stories, and view article previews in a clean responsive UI.

## Features

- Category filtering for general, technology, business, entertainment, health, science, and sports
- Search bar to query headline results
- Top headlines pulled from the NewsAPI `top-headlines` endpoint
- Simple responsive UI powered by Tailwind CSS
- Clean component structure for easy maintenance

## Project Structure

- `src/App.jsx` - root application component
- `src/pages/Home.jsx` - home page with news fetching, search, and category selection
- `src/components/Navbar.jsx` - header navigation bar
- `src/components/SearchBar.jsx` - search input and button
- `src/components/CatagoryBar.jsx` - category selection buttons
- `src/components/NewsList.jsx` - list of news cards
- `src/components/NewsCard.jsx` - single article preview
- `src/components/Footer.jsx` - footer section

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`)


## Notes

- The app currently uses a hard-coded NewsAPI key inside `src/pages/Home.jsx`.
- For production use, move the API key to an environment variable and avoid committing secrets.
- News are fetched from `https://newsapi.org/v2/top-headlines` with `country=us` and the selected category.

## Dependencies

- `react`
- `react-dom`
- `vite`
- `axios`
- `tailwindcss`
- `@tailwindcss/vite`

## Dev Dependencies

- `@vitejs/plugin-react`
- `eslint`
- `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `@types/react`
- `@types/react-dom`

## License

For learning purposes.

# College Finder

A modern, responsive React application for searching and listing universities worldwide using the free [Hipolabs Universities API](http://universities.hipolabs.com/search?).

## Deployment
[Netlify Deployment](https://college-finder022-app.netlify.app/)

## Features

- Search universities by country and/or name
- Sort results by name or country
- Paginated results for large lists
- Responsive design for mobile and desktop
- Dark/Light mode toggle (with icons)
- Beautiful UI with Tailwind CSS
- Total results count
- Individual university cards with details and website link
- Helpful messages for empty search and no results

## Tech Stack

- React
- Tailwind CSS
- Axios
- [react-icons](https://react-icons.github.io/react-icons/)
- Vite

## Getting Started

1. **Install dependencies:**
    ```sh
    npm install
    ```
2. **Start the development server:**
    ```sh
    npm run dev
    ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## Project Structure

```
src/
	App.jsx
	components/
		Header.jsx
		SearchForm.jsx
		UniversityList.jsx
		UniversityCard.jsx
	...
index.html
vite.config.js
package.json
README.md
```

## API Reference

- [Hipolabs Universities API](http://universities.hipolabs.com/)

## License

MIT

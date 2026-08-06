# Gaurav Kadam — Portfolio

Personal portfolio site built with React + Vite. A single-page, terminal/code-themed site with a boot-sequence intro, animated hero, and sections for experience, projects, skills, education, and contact.

**Live site:** _add your deployed URL here once live_

## Features

- Boot-sequence intro animation on load
- Terminal-style hero section with a typing effect (Application.java code block)
- Sticky header with scroll-spy active-link highlighting
- Fully responsive layout, including a mobile hamburger nav
- Scroll-reveal animations and animated stat counters
- Sections: Hero, About, Experience, Projects, Skills, Education, Contact

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- Plain CSS (no framework) — see `src/index.css`
- [Oxlint](https://oxc.rs/) for linting

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Section and UI components (Header, Hero, Projects, etc.)
├── hooks/          # Custom hooks (scroll reveal, scroll spy, typewriter, boot sequence, etc.)
├── assets/         # Images used in the site
├── index.css       # Global styles
├── App.jsx         # Page composition
└── main.jsx        # Entry point
```

## Customizing

- **Content:** update copy directly in the components under `src/components/` (e.g. `Hero.jsx`, `About.jsx`, `Projects.jsx`, `Experience.jsx`).
- **Resume:** replace `public/Gaurav_Kadam_Resume.pdf` with your own file (keep the same filename, or update the links in `Header.jsx` and `Hero.jsx`).
- **Styling:** all styling lives in `src/index.css`; color tokens are defined as CSS variables near the top of the file.

## Deployment

This is a static Vite build, so it deploys cleanly to any static host:

- **Vercel:** import the GitHub repo, framework preset auto-detects as Vite — no config needed.
- **Netlify:** build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** build with `npm run build` and deploy the `dist` folder (set `base` in `vite.config.js` to your repo name if deploying to a project page).

## License

Personal project — feel free to use this as a template for your own portfolio, but please swap out the content and resume for your own.

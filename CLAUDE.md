# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is Rodrigo's personal portfolio website: a single-page React app (bootstrapped with Create React App, `react-scripts` 5) showcasing his projects, skills, and a contact form. It's deployed as a static site (built via `npm run build`).

## Commands

- `npm start` — run the dev server at http://localhost:3000 with hot reload.
- `npm run build` — produce the production build in `build/`.
- `npm test` — run CRA's Jest test runner in interactive watch mode (there are currently no test files in `src/`).
- There is no lint script; ESLint runs implicitly via `react-scripts` (config: `react-app`, `react-app/jest` in `package.json`).

## Architecture

- **Routing**: `react-router-dom` v5 (`Switch`/`Route`, not v6). Routes are defined in `src/App.js` and each route composes the same section components in different combinations (e.g. `/` renders `NavBar, Header, Work, Interviews, Skills, Form`; `/about` renders `NavBar, About`). There is no nested/shared layout component — each `<Route>` block repeats the components it needs.
- **Section-per-folder structure**: top-level UI sections each live in their own folder under `src/` (`Header/`, `NavBar/`, `Body/`, `About/`, `Skills/`, `Stack/`, `Interviews/`, `Footer/`), each containing a `.js` component and often a co-located `.module.css` file for scoped styles.
- **Styling is mixed**: CSS Modules (`*.module.css`, imported as `classes` and applied via `classes.Foo`) are used for layout/structure, while Tailwind utility classes (configured in `tailwind.config.js`, using the `flowbite` plugin) are used inline for one-off styling (badges, buttons, spacing). `src/App.css` and `src/index.css` hold global styles.
- **Work/projects section**: `src/Body/Work.js` simply renders `WorkDesktop.js`, which contains a hardcoded list of project cards (image, title, tech-stack badges, description, external link). To add/edit a portfolio project, edit the card markup directly in `src/Body/WorkDesktop.js`.
- **Contact form**: `src/Footer/Form.js` uses `emailjs-com` (`emailjs.sendForm`) with hardcoded service/template/public keys to send form submissions directly from the client — there is no backend.
- **Animations**: `aos` (Animate on Scroll) is initialized per-component via `useEffect` (see `WorkDesktop.js`) and applied through `data-aos` attributes. `framer-motion` is also a dependency and may be used for other animated elements.
- **Static assets are duplicated in two places**: `src/Assets/` holds assets imported directly into JS/CSS (e.g. the CV PDF), while `public/` holds images referenced by plain string paths (e.g. `<img src="mercado.png">` in `WorkDesktop.js`) so they resolve relative to the public root at runtime. When adding a new project image referenced by a bare filename in a component, place it in `public/`, not `src/Assets/`.
- Icons come from both `@fortawesome/*` (via `FontAwesomeIcon`) and `react-icons`, depending on the component.

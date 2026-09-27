# Engineer / Artist portfolio

Vite + React + Tailwind, single-page-ish site (one scrollable home page with
anchor sections) plus a dedicated full-portfolio route and per-project pages.

## Start here — swap in your real content
Everything that needs to change to make this *yours* lives in `src/data/`.
No component code needs to change to update content.

- `src/data/profile.js` — your name, role tags, tagline, statement, resume
  path, email, social links. Edit this file first.
- `src/data/interests.js` — the engineering/art concentration split shown on
  the homepage.
- `src/data/experience.js` — work history entries (role, org, dates, skills).
- `src/data/projects.js` — add a project by copying an existing object; the
  homepage grid, the full portfolio page, and each project's detail page all
  read from this one array automatically.
- `public/assets/resume.pdf` — your actual resume (see the placeholder note
  in that folder). Also drop project/experience images here and reference
  them by path (`/assets/whatever.jpg`) in the data files.

## Structure
- `src/pages/Home.jsx` — homepage: hero, concentrations, featured work,
  statement, experience, contact.
- `src/pages/Portfolio.jsx` — `/work`, the full project list with timelines.
- `src/pages/ProjectDetail.jsx` — `/work/:slug`, auto-generated per project.
- `src/components/` — Nav, Hero, Interests, Statement, Experience,
  ProjectCard (click to expand), Contact, Footer, Icons.
- `tailwind.config.js` — the Asiimov-inspired palette (`bg`, `ink`, `orange`,
  `inkdim`, `rule`) and the three-typeface system (display / body / mono).

## Commands
- `npm install` — install dependencies (first time only)
- `npm run dev` — start local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally

## Deploying to GitHub Pages
1. In `vite.config.js`, set `base: '/your-repo-name/'` (skip this if you're
   using a custom domain pointed at the repo root).
2. Push this project to a GitHub repo.
3. Run:
   ```
   npm install
   npm run build
   npx gh-pages -d dist
   ```
4. In the repo's Settings -> Pages, set the source to the `gh-pages` branch.
5. For a custom domain: add a `CNAME` file with your domain to `public/`
   (it'll be copied into `dist/` on build), then point your domain's DNS at
   GitHub Pages per their docs, and set it in the repo's Pages settings.

## Notes on what's still placeholder
Nav links, resume button, social icons, the statement, the experience
entries, and all three sample projects are placeholder content -- replace
them via the data files above before shipping.

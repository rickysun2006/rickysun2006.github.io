# Ricky Sun · Academic Homepage

Personal academic homepage built with **Next.js 15 + Tailwind CSS**, statically exported and deployed to GitHub Pages.

Live site (once deployed): <https://rickysun2006.github.io>

## Features

- Modern, minimal academic design (light + dark mode)
- Responsive layout (mobile-first)
- Smooth scroll nav with active-section highlighting
- Publications with year / type filters and one-click BibTeX copy
- Highlighted author name in publication lists
- Static export — no server required, free GitHub Pages hosting
- Automated deployment via GitHub Actions

## Editing content

All user-visible content lives in `data/`, so you don't need to touch JSX to update most of the site:

| File | What to edit |
| --- | --- |
| `data/site.ts` | Name, role, affiliation, bio-level metadata, CV/avatar paths |
| `data/socials.ts` | Social & contact links |
| `data/news.ts` | News items (newest first) |
| `data/experience.ts` | Education / research / visiting experience |
| `data/publications.ts` | Publication list. The template inside the file shows all supported fields. |
| `components/About.tsx` | The long-form "About" paragraphs |
| `public/avatar.svg` | Replace with your own photo (or use `avatar.jpg` — remember to update `avatarPath` in `data/site.ts`) |
| `public/cv.pdf` | Drop your CV here (referenced by the "CV" button in the nav) |

Author names that match `siteConfig.highlightName` in `data/site.ts` are automatically bolded and underlined in publication lists.

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Visit <http://localhost:3000>.

## Building

```bash
npm run build
```

The static site is exported to `out/`. You can preview it with any static server:

```bash
npx serve out
```

## Deploying to GitHub Pages

1. Create a GitHub repository named **`rickysun2006.github.io`** (this gives you a clean root URL). If you use a different repo name, set `basePath` and `assetPrefix` in `next.config.mjs`.
2. In the repo settings, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Push this project to `main`:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/rickysun2006/rickysun2006.github.io.git
git push -u origin main
```

The included workflow at `.github/workflows/deploy.yml` will build and deploy automatically on every push to `main`.

## License

Content © Ruqi (Ricky) Sun. Code under the MIT License.

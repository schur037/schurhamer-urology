# Benjamin Schurhamer, MD — Urologic Oncology Website

A static clinical-practice website for a urologic oncologist specializing in prostate cancer and urologic oncology research. Pure HTML/CSS/vanilla JS — no build step. Designed to be hosted on **GitHub Pages**.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home / landing |
| `about.html` | Bio, training, expertise, memberships |
| `conditions.html` | Conditions treated + WellPrept education deep links |
| `resources.html` | Patient education library (WellPrept), nutrition, lifestyle |
| `research.html` | Research program, projects & clinical trials |
| `team.html` | Contact, profiles, live X feed, office hours & map |
| `404.html` | Friendly not-found page (served automatically by GitHub Pages) |

## Structure

```
/
├── *.html
├── css/        style.css
├── js/         main.js
├── assets/
│   ├── images/ headshots
│   ├── favicon.svg
├── robots.txt, sitemap.xml, .nojekyll
```

Each page includes `Physician` schema.org JSON-LD (in `<head>`) for local SEO.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Editing content

- **Social handles** — edit the `SOCIAL` object at the top of `js/main.js` (one place updates every link/icon). The live X feed handle is set directly in `team.html` (`twitter.com/<handle>`).
- **Conditions / Resources** — WellPrept module deep links are inline in `conditions.html` and `resources.html`.
- **Clinical trials** — edit the Clinical Trials section in `research.html`.
- **Office hours** — edit the hours list in `team.html`.

## Deploy to GitHub Pages

1. Push these files to the repo root of a `username.github.io` repo (or any repo with Pages enabled on the root).
2. The included `.nojekyll` ensures files are served as-is.
3. Update the `https://example.com/` URLs in `robots.txt` and `sitemap.xml` to your real domain.

## Contact

The Contact page (`team.html`) uses secure **contact actions** instead of a message form — Call `(479) 404-1100`, Washington Regional "Request an Appointment", and the MyChart patient portal. This avoids collecting PHI on a static site. (Confirm with Washington Regional compliance before launch.)

## Notes / TODO before launch

- [ ] Set real **ORCID / Google Scholar / LinkedIn** URLs (currently generic).
- [ ] Confirm any **academic title** / **Arkansas license** to display.
- [ ] Confirm **office hours** in `team.html` are correct.
- [ ] Update `https://example.com/` in `robots.txt`, `sitemap.xml`, and the JSON-LD `image`/`url` (in each page `<head>`) to the real domain.
- [ ] Claim/optimize the **Google Business Profile** for local search.
- [ ] Get **Washington Regional compliance/marketing** sign-off before publishing.

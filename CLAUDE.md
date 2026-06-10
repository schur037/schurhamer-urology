# CLAUDE.md — Urologic Oncology Clinical Practice Website

## Project Overview

Build a **static HTML/CSS/JS clinical practice website** for a urologic oncologist specializing in prostate cancer and urologic oncology research. The site will be hosted on **GitHub Pages**.

The site should look modern, professional, and trustworthy — appropriate for a physician-researcher. Use a clean medical aesthetic: navy/teal accent colors, plenty of white space, professional typography (Inter or similar sans-serif for body, serif for headings if desired).

---

## Tech Stack

- **Pure HTML5, CSS3, vanilla JavaScript** — no frameworks, no build tools
- Responsive design (mobile-first)
- CSS custom properties for theming
- No external dependencies except:
  - Font Awesome (CDN) for icons
  - Google Fonts (CDN) for typography
- All pages must work as static files served from GitHub Pages

## File Structure

```
/
├── index.html              # Home / landing page
├── about.html              # About / Bio
├── publications.html       # Publications list
├── research.html           # Research & Projects
├── team.html               # Team & Contact
├── dashboard.html          # Surgery Dashboard
├── css/
│   ├── style.css           # Global styles, layout, typography
│   └── dashboard.css       # Dashboard-specific styles
├── js/
│   ├── main.js             # Navigation, shared utilities
│   ├── publications.js     # Publication filtering/search
│   └── dashboard.js        # Dashboard charts and interactivity
├── assets/
│   ├── images/             # Photos, logos, icons
│   └── data/               # JSON data files for publications, surgery stats
└── README.md
```

---

## Pages & Sections

### 1. Home / Landing Page (`index.html`)

- Hero section with name, title, and a one-line mission statement
- Brief intro paragraph (2–3 sentences)
- Three highlight cards linking to: Research, Publications, Surgery Dashboard
- "Featured Publication" or "Recent News" callout
- Call-to-action: "Schedule a Consultation" or "Contact Us"

### 2. About / Bio (`about.html`)

- Professional headshot placeholder
- Sections:
  - **Background & Training** — education, residency, fellowship
  - **Clinical Expertise** — list of conditions treated and procedures performed (prostate cancer, bladder cancer, kidney cancer, robotic surgery, etc.)
  - **Research Interests** — prostate cancer biomarkers, genomics, clinical trials, outcomes research
  - **Awards & Honors**
- Use a two-column layout on desktop (photo left, text right) that stacks on mobile

### 3. Publications (`publications.html`)

- Load publication data from `assets/data/publications.json`
- Each publication entry should include: title, authors, journal, year, DOI link, and tags (e.g., "prostate cancer", "biomarkers", "clinical trial")
- **Features:**
  - Search bar (filters by title/author/keyword)
  - Filter buttons by tag/category
  - Sort by year (newest first by default)
  - Each entry is a card with a subtle hover effect
- Include a sample `publications.json` with 5–8 realistic placeholder entries relevant to urologic oncology

### 4. Research & Projects (`research.html`)

- Grid of project cards, each with:
  - Project title
  - Status badge (Active, Completed, Recruiting)
  - Brief description (2–3 sentences)
  - Key collaborators
  - Link to ClinicalTrials.gov or publication (if applicable)
- Include 3–4 placeholder projects covering:
  - A prostate cancer biomarker study
  - A robotic surgery outcomes trial
  - A bladder cancer genomics project
  - A quality-of-life / survivorship study

### 5. Team & Contact (`team.html`)

- Team member grid: photo placeholder, name, role, brief bio
- Include placeholder slots for: PI/Surgeon, Research Coordinator, Fellow, Lab Manager
- Contact section:
  - Office address, phone, email (use placeholders like `email@institution.edu`)
  - Embedded Google Maps placeholder (use an iframe with a generic location or a styled placeholder div)
  - Simple contact form (Name, Email, Message, Submit) — form should use `mailto:` or a Formspree-style action placeholder
- Social/academic links: ORCID, Google Scholar, Twitter/X, LinkedIn (placeholder URLs)

### 6. Surgery Dashboard (`dashboard.html`)

This is a **data visualization page** showing surgical outcomes and practice metrics. Use vanilla JS with inline SVG or Canvas for charts — no charting libraries required (but Chart.js via CDN is acceptable if simpler).

- **Metrics cards** at the top:
  - Total cases (e.g., 1,200+)
  - Robotic-assisted procedures (%)
  - Positive margin rate (%)
  - Average length of stay (days)
- **Charts:**
  - Case volume by year (bar chart)
  - Procedure type breakdown (donut/pie chart)
  - Outcomes trend over time (line chart)
  - Complication rate comparison (grouped bar chart)
- Load data from `assets/data/surgery-stats.json`
- Include a realistic sample JSON with 5 years of data
- Add a note/disclaimer: "Data shown is for illustrative purposes"

---

## Design System

### Colors
```css
:root {
  --color-primary: #1a365d;       /* Navy blue */
  --color-primary-light: #2b6cb0;
  --color-accent: #2c7a7b;        /* Teal */
  --color-accent-light: #38b2ac;
  --color-bg: #ffffff;
  --color-bg-alt: #f7fafc;
  --color-text: #1a202c;
  --color-text-light: #718096;
  --color-border: #e2e8f0;
  --color-success: #38a169;
  --color-warning: #d69e2e;
  --color-error: #e53e3e;
}
```

### Typography
- **Headings:** 'Inter', sans-serif — bold, navy
- **Body:** 'Inter', sans-serif — regular, dark gray
- **Font sizes:** Use a modular scale (1rem base, 1.25 ratio)

### Components
- **Cards:** White background, subtle shadow (`box-shadow: 0 1px 3px rgba(0,0,0,0.1)`), rounded corners (8px), hover lift effect
- **Buttons:** Solid primary color, white text, rounded (6px), hover darkens
- **Navigation:** Sticky top nav with logo/name on left, links on right, hamburger menu on mobile
- **Footer:** Dark background (navy), white text, links to all pages, copyright

---

## Accessibility & SEO

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- All images must have `alt` attributes
- Skip-to-content link
- ARIA labels on interactive elements
- `<meta>` description and Open Graph tags on every page
- `robots.txt` and `sitemap.xml` for GitHub Pages

---

## GitHub Pages Deployment

- The site should work from the repo root (no subdirectory)
- Include a minimal `README.md` with setup instructions
- No build step required — just push and serve
- Add a `.nojekyll` file so GitHub Pages serves raw HTML

---

## Placeholder Content Guidelines

Use realistic but clearly placeholder content:
- Physician name: `[Your Name], MD, FACS`
- Institution: `[Institution Name] Department of Urology`
- All phone numbers, emails, and addresses should be obviously placeholder
- Publication entries should have realistic titles about prostate cancer, bladder cancer, kidney cancer, robotic surgery
- Surgery statistics should be plausible but clearly labeled as illustrative

---

## Development Instructions

1. Start by creating the file structure and global CSS
2. Build the shared navigation and footer as reusable HTML (copy across pages)
3. Build each page in order: Home → About → Publications → Research → Team → Dashboard
4. Create the JSON data files before building Publications and Dashboard
5. Test responsive layout at 320px, 768px, and 1200px breakpoints
6. Validate HTML with W3C validator
7. Test all internal links work correctly for GitHub Pages (relative paths, no leading `/` that would break on subdomain hosting)

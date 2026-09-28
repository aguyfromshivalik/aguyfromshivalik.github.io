# How to update: main website

Short guide for the parts of this site you change most often.
Detailed notes for Memories, the journal-cover strip, and Others live in sibling files in this folder.

This `how-to-update/` folder (and the root `README.md`) are **excluded from the built website** — they are for you in the repo only.

## Map of the site

| What visitors see | What you edit |
| --- | --- |
| Home (`/`) | `_pages/about.md`, plus includes driven by its front matter |
| News (`/news/`, also “What happened recently” on Home) | `_news/*.md` |
| Publications (`/publications/`) | `_bibliography/papers.bib` + `assets/img/publication_preview/` |
| Research (`/research/`) | `_pages/research.md` (+ `assets/html/pes_interactive.html` for the demo) |
| Memories (`/memories/`) | See [memories.md](memories.md) |
| Others (`/others/`) and Quotes | See [others.md](others.md) |
| Contact (`/contact/`) | `_pages/contact.md` |
| Nav bar tabs | `_pages/*.md` → `nav: true` / `nav_order` |
| Social icons (Home bottom) | `_data/socials.yml` |
| “Where the work appeared” covers | See [journal_covers.md](journal_covers.md) |
| Site title / URL / footer text | `_config.yml` |

---

## Home page

**File:** `_pages/about.md`  
**Layout:** `_layouts/about.liquid`

### Intro text

Everything below the `---` front matter is the intro (Ciao, bio, links). Edit that markdown/HTML directly.

### Subtitle under your name

```yaml
subtitle: Postdoc working in theoretical chemistry @ <a href='...'> DiSC</a> ...
```

### Profile photo

```yaml
profile:
  align: right
  image: profile_pic.jpg          # file under assets/img/
  image_circular: false           # false = square, true = circle
```

Put the image in `assets/img/` (e.g. `assets/img/profile_pic.jpg`).

### Home sections (on / off)

In the same front matter:

```yaml
selected_papers: true    # “Recent publications” (bib entries with selected = {true})
journal_covers: true     # “Where the work appeared” cover strip
social: true             # email / ORCID / Scholar / GitHub icons
announcements:
  enabled: true
  scrollable: true
  limit: 3               # how many news items on Home
```

---

## News / announcements

**Folder:** `_news/`  
Each item is its own `.md` file (date + short text). They show on:

- Home → **What happened recently** (limited by `announcements.limit`)
- News page (`_pages/information.md` / `/news/` depending on your permalinks)

To add news: copy an existing `_news/announcement_*.md`, set a new date/title/body, save. Newer dates appear first.

### Optional photo(s)

1. Put the image(s) in `assets/img/news/` (create the folder if needed).
2. In the news `.md` front matter, use either one photo:

```yaml
image: news/my-photo.jpg
image_alt: Short description   # optional
```

or two (or more):

```yaml
images:
  - news/one.jpg
  - news/two.jpg
```

Optional alts with the list form:

```yaml
images:
  - path: news/one.jpg
    alt: First photo
  - path: news/two.jpg
    alt: Second photo
```

Paths are relative to `assets/img/`. Small photos appear before the news text on the **News** page (`/news/`); Home → **What happened recently** stays text-only. Click a photo to open a same-page popup (blurred background). If there are two or more photos, use the arrows (or ←/→) to switch between them. Close with the button, backdrop click, or Escape.

---

## Publications

**Bibliography:** `_bibliography/papers.bib`  
**Page:** `_pages/publications.md`  
**List style:** `_layouts/bib.liquid` (rarely touch)

### Add a paper

1. Add a BibTeX `@article{...}` (or `@book`, etc.) to `papers.bib`.
2. Optional fields used by this site:

```bibtex
preview = {my_figure.jpg},   % file in assets/img/publication_preview/
selected = {true},           % also list under Home → Recent publications
pdf = {file.pdf},            % optional, if you host a PDF
doi = {10.xxxx/...},
```

3. For a preview thumbnail, put the image in `assets/img/publication_preview/` and set `preview = {filename}`.

### Tip

Keep BibTeX keys unique. After editing, rebuild so the publications page refreshes.

---

## Research page

**File:** `_pages/research.md`  
Edit the prose and sections there.

The interactive PES block uses:

```text
assets/html/pes_interactive.html
```

Change the iframe `src` in `research.md` only if you rename or move that HTML file.

---

## Social icons

**File:** `_data/socials.yml`

Order in the file = order of icons. Supported keys include `email`, `orcid_id`, `scholar_userid`, `github_username`, etc. Comment a line with `#` to hide that icon.

Home must have `social: true` in `_pages/about.md` (already set).

---

## Navigation tabs

Each page in `_pages/` can appear in the top nav:

```yaml
nav: true
nav_order: 2    # smaller = earlier (left)
```

Examples currently used: Research, Publications, Contact, News, Memories. Set `nav: false` (or remove `nav`) to hide a page from the bar without deleting it.

---

## Memories (photos by place)

See **[memories.md](memories.md)** — folders under `assets/img/memories/<place>/` + `_data/photos.yml`.

---

## Journal cover strip (Home)

See **[journal_covers.md](journal_covers.md)** — images in `assets/img/journal_covers/` + `_data/journal_covers.yml`.

---

## Others (quotes and later squares)

See **[others.md](others.md)** — quote files in `_quotes/` and square tiles from pages with `others_section: true`.

---

## Site-wide settings

**File:** `_config.yml`

Useful fields: `first_name` / `middle_name` / `last_name`, `url`, `baseurl`, `footer_text`, `contact_note`.

Avoid casual edits to plugin/theme blocks unless you know what they do.

---

## Preview changes locally

From the repo root (with Ruby/Bundler set up as for al-folio):

```bash
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Then open `http://127.0.0.1:4000/`.

After editing `_data/*.yml` or many assets, a refresh (or restart serve) may be needed.

---

## Deploy

This repo is meant for **GitHub Pages**. Commit and push to the branch that Pages builds from (usually `main` / `master`). The live site updates after the Pages build finishes — not instantly when you only edit files locally.

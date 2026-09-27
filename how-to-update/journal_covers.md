# How to update: Journal cover strip (“Where the work appeared”)

On the **Home** page, under the heading **Where the work appeared**, there is a horizontal strip of journal **issue covers**. Each cover should match the **volume/issue where the paper was published** (not a generic journal logo).

You normally edit only the image folder and the data file — not the layout include.

## Where things live

| What | Path |
| --- | --- |
| Cover images | `assets/img/journal_covers/` |
| Strip list + captions + links | `_data/journal_covers.yml` |
| Markup / L–R scroll (rarely touch) | `_includes/journal_covers.liquid` |
| Toggle on Home | `_pages/about.md` → `journal_covers: true` |
| Section heading | `_layouts/about.liquid` (“Where the work appeared”) |

## Add a cover for a new paper

1. Find the **issue cover** for the volume/issue of the paper (publisher TOC / front-cover page). Prefer the real issue cover; use a graphical abstract only if the journal has no custom cover for that issue.
2. Save a `.jpg` into `assets/img/journal_covers/`.  
   Suggested naming: `<journal>_<volume>_<issue>.jpg`  
   Examples: `jcp_165_12.jpg`, `jpca_127_51.jpg`, `pccp_23_48.jpg`.
3. Rough size: cover-shaped, long side ~400–800 px is enough for the strip (larger is fine).
4. Open `_data/journal_covers.yml` and add an entry (newest first is the usual order):

```yaml
- image: jcc_47_14.jpg
  journal: J. Comput. Chem.
  volume: "47"
  issue: "14"
  year: 2026
  url: https://doi.org/10.1002/jcc.70397
```

| Field | Meaning |
| --- | --- |
| `image` | Filename under `assets/img/journal_covers/` |
| `journal` | Short journal name shown under the cover |
| `volume` / `issue` | Shown as “Vol. …, …” |
| `year` | Publication year |
| `url` | Click target (DOI of the paper, or publisher front-cover page) |

5. Rebuild / refresh the site so Jekyll reloads `_data` and new images.

## Change order, caption, or link

Edit `_data/journal_covers.yml` only:

- **Order in the file** = order left → right in the strip.
- Change `journal`, `volume`, `issue`, `year` to fix the caption.
- Change `url` to point at a different DOI or cover page.
- To remove a cover: delete (or comment out) its YAML block and optionally delete the image file.

## Turn the strip off

In `_pages/about.md`:

```yaml
journal_covers: false
```

Or set `journal_covers: true` again to show it.

## What you should not need

- No change to Publications bibliography for this strip (that page uses `preview` images separately under `assets/img/publication_preview/`).
- No edit to CSS unless you want different strip sizing (`_sass/_base.scss`, classes `.journal-cover-*`).

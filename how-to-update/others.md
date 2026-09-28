# How to update: Others (quotes and later squares)

The **Others** tab (`/others/`) is a page of square tiles. Each tile is an image with a title under it. Clicking a tile opens that section.

Right now there is one tile: **Quotes** (`/others/quotes/`).

You normally do **not** edit `_pages/others.md`.

## Where things live

| What | Path |
| --- | --- |
| Others page (the grid) | `_pages/others.md` |
| Quotes tile + page | `_pages/quotes.md` |
| Each quote | `_quotes/*.md` |
| Blank quote to copy | `_quotes/copy-me.md` |
| Quotes tile image | `assets/img/others/quotes.svg` |
| List markup (rarely touch) | `_includes/quotes.liquid` |

## Add a quote

1. Copy `_quotes/copy-me.md` to a new file, for example  
   `_quotes/2026-09-28-a-line.md`
2. Set `published: true`. Leave `copy-me.md` as `published: false` so it stays hidden.
3. Set `date`. Newer dates appear first.
4. Optionally set `author` and `source`. They show on one line under the text.
5. Write the quote or paragraph under the `---` block. Blank lines start a new paragraph.

```yaml
---
published: true
date: 2026-09-28
author: Someone
source: A book, a talk, or a place
---

The line you want to keep.

A second paragraph, if you want one.
```

6. Save and refresh. If the quote does not appear, restart the local server once:

```bash
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

The quotes folder is registered in `_config.yml`. A server that was already running before that change will not see new quote files until it is restarted.

## Change the Quotes picture

Replace `assets/img/others/quotes.svg`, or point `img` in `_pages/quotes.md` at another file under `assets/img/`. The tile is square; the picture is cropped to fill it. The word **Quotes** is the page `title`, shown under the picture.

## Add another square later (blog, and so on)

1. Add a page under `_pages/`, for example `_pages/notes.md`.
2. Use front matter like this:

```yaml
---
layout: page
title: Blog
permalink: /others/blog/
nav: false
others_section: true
others_order: 2
img: /assets/img/others/blog.jpg
---
```

3. Put the image in `assets/img/others/`.
4. `others_order` sets the order of squares, left to right. Quotes is `1`.
5. Write the page body under the front matter. It is what visitors see after they click the square.

`nav: false` keeps the page off the top bar. It still appears as a square on Others because `others_section: true`.

## What you should not need

- No nav edit: Others is already `_pages/others.md` with `nav: true`.
- Do not set `published: true` on `_quotes/copy-me.md`.
- A quote file with `published: false` stays off the site.

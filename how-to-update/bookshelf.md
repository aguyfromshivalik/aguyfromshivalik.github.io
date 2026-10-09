# How to update: My bookshelf

**My bookshelf** (`/others/bookshelf/`) is the tile on **Others**.
Each book is its own file. The page lines the covers up, with the title and the author under each cover. Clicking a cover opens a popup with the note you wrote.

You normally do **not** edit `_pages/my-bookshelf.md`.

## Where things live

| What | Path |
| --- | --- |
| Each book | `_shelf/*.md` |
| Blank book to copy | `_shelf/copy-me.md` |
| Cover images | `assets/img/shelf/` |
| Page (rarely touch) | `_pages/my-bookshelf.md` |
| Markup (rarely touch) | `_includes/bookshelf.liquid` |

The page file is named `my-bookshelf.md`, not `bookshelf.md`. A file whose name starts with `_pages/books` is left out of the site.

## Add a book

1. Put the cover in `assets/img/shelf/`.  
   Example: `assets/img/shelf/pride-and-prejudice.jpg`  
   A vertical picture is enough. The shelf makes every cover the same height.
2. Copy `_shelf/copy-me.md` to a new name, for example `_shelf/pride-and-prejudice.md`.
3. Set the front matter:

```yaml
---
published: true
title: Pride and Prejudice
author: Jane Austen
cover: /assets/img/shelf/pride-and-prejudice.jpg
order: 2
---

What the book was for you.
```

4. `title` is the line under the cover. `author` is the line under the title.
5. The text under the `---` block is the popup. Blank lines start a new paragraph. Leave it empty if you only want the cover for now.
6. `order` is left to right. The Prophet is `1`, Pride and Prejudice is `2`. Use the next number for a new book.
7. Leave `_shelf/copy-me.md` as `published: false`.

Save and refresh `/others/bookshelf/`.

If the new book does not appear, restart the local server once:

```bash
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

The `_shelf/` folder is registered in `_config.yml`. A server that was already running before that folder existed will not see new book files until it is restarted.

## Replace a cover

1. Save the new picture over the old file, or save it under a new name in `assets/img/shelf/`.
2. If the name changed, update `cover:` in that book's `_shelf/*.md` file.

Keep the path starting with `/assets/img/shelf/`.

## Change the title, author, or note

Edit that book's file in `_shelf/`. The title and author under the cover, and the popup text, all come from that one file.

## Hide a book

Set `published: false` in its file, or delete the file. The cover image can stay in `assets/img/shelf/`.

## What you should not need

- No change to the Others nav. My bookshelf is already a tile.
- Do not add books by editing `_pages/my-bookshelf.md`.
- Do not set `published: true` on `_shelf/copy-me.md`.

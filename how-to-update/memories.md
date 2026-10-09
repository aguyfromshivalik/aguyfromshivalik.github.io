# How to update: Memories (photos)

The **Memories** page (`/memories/`) shows horizontal strips by place.
It is driven by two things only — you normally do **not** edit `_pages/photos.md`.

## Where things live

| What | Path |
| --- | --- |
| Photo files | `assets/img/memories/<strip-id>/` |
| Strip list + captions | `_data/photos.yml` |
| Page layout (rarely touch) | `_pages/photos.md` |

Examples of strip ids: `hcu`, `unipd`.

## Add photos to an existing strip

1. Copy images into the strip folder, e.g.  
   `assets/img/memories/unipd/lab_2026.jpg`
2. Prefer `.jpg`. Keep names simple (letters, numbers, `_`, `-`).
3. For the website, a long side of about **1600–2400 px** is enough. Full camera originals are fine but large.
4. Open `_data/photos.yml` and, under that strip’s `photos:`, append:

```yaml
    - file: lab_2026.jpg
      width: 2000
      height: 1333
      alt: Short caption for accessibility
```

5. Match `width` / `height` to the real image size (pixels).  
   Order in the YAML = order left → right in the strip.
6. Rebuild / refresh the site so Jekyll reloads `_data` and new assets.

### Quick tip for dimensions

```bash
python3 -c "from PIL import Image; im=Image.open('assets/img/memories/unipd/lab_2026.jpg'); print(im.size)"
```

## Add a new strip (new place)

1. Create a folder: `assets/img/memories/<new-id>/`  
   Example: `assets/img/memories/home/`
2. Put photos in that folder.
3. In `_data/photos.yml`, add a new top-level block (or edit an empty one like UniPD):

```yaml
- id: home
  title: Home
  subtitle: Optional one-line subtitle
  photos:
    - file: first.jpg
      width: 2400
      height: 1600
      alt: Caption
```

4. Order of blocks in the YAML = order of strips on the page (top → bottom).

## Optional workflow from Downloads

1. Drop originals in something like `~/Downloads/UniPD/` or `~/Downloads/HCU/`.
2. Copy (and optionally resize) into `assets/img/memories/<id>/`.
3. Update `_data/photos.yml` as above.

## What you should not need

- No change to nav: Memories is already `_pages/photos.md` with `nav: true`.
- No PhotoSwipe / popup config for normal adds.
- Do not put large private notes in `_pages/` if you do not want them on the public site.

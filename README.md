## Home page:
Page is visible as the first page when website url is opened.

**Location:** _pages/about.md

## New announcements:
Appears on 'News' section of the website. 

**Location:** Each announcement is written as a separate `.md` file inside **_news** folder.

## Publication
* _bibliography/papers.bib : Contain the list of publications, book chapters, etc.
* The style of the this page is defined by: _layouts/bib.liquid
* For preview (a small image next to the publication name): .bib file should have a preview = { } section. The image goes into assests/img/publication_preview.

## Social Icons

The social icons displayed at the bottom of the website are managed through:

```text
_data/socials.yml
```

The About page has social links enabled with:

```yaml
social: true
```

### Changing the Order

The order of the entries in `_data/socials.yml` determines the order in which the corresponding social icons are displayed.

For example:

```yaml
github_username: aguyfromshivalik
orcid_id: 0009-0000-9395-8194
scholar_userid: W15sff4AAAAJ
```

will display the icons in the order:

**GitHub → ORCID → Google Scholar**

To disable a social icon, comment out its corresponding entry:

```yaml
# github_username:
```

No changes to `_pages/about.md` are required when simply enabling or disabling a supported social platform.


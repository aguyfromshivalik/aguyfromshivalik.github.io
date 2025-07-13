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

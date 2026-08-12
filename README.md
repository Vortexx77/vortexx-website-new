# Vortexx Website — Image Guide

This site now uses real image files instead of embedded code, so photos
can be replaced without touching any HTML.

## Folder structure

```
vortexx-site/
├── index.html                 Homepage
├── about.html                 About page
└── assets/
    └── images/
        ├── logo.png            Vortexx logo (used in nav + footer, both pages)
        ├── team-group.jpg      Full team photo (About page)
        ├── team/
        │   ├── ceo.jpg          Kamugisha Ali — CEO & Founder
        │   ├── ops.jpg          Nassuuna Gloria — Operations Manager
        │   └── swe.jpg          Abdenigo Stephen — Head of Software Dept.
        └── work/
            ├── vortexx-pos.jpg
            ├── chanse-clinic.jpg
            ├── library-system.jpg
            └── old-homepage.jpg
```

## How to replace an existing photo

1. Rename your new photo to match the file it's replacing exactly
   (e.g. new CEO photo → `ceo.jpg`).
2. Drop it into the matching folder, overwriting the old one.
3. Refresh the page. That's it — no code edits needed.

Keep the same file extension if you can (`.jpg` → `.jpg`). If you use a
different one (e.g. `.png`), you'll also need to update that one line in
the HTML where the filename is referenced — search the file for the old
filename and change it.

## How to add a new team member to the carousel

1. Add their photo to `assets/images/team/` (e.g. `jane.jpg`).
2. Open `about.html`, find the `<!-- MEMBER 3 -->` block near the bottom
   of the "Meet Our Team" section, and copy the whole
   `<div class="team-slide"> ... </div>` block.
3. Paste your copy right after it, then edit:
   - the `src="assets/images/team/..."` path to your new photo
   - the `alt="..."` text to their name
   - the name, role, and bio text inside `<div class="member-info">`
4. Save. The carousel automatically picks up the new slide — the dots
   and next/prev buttons are generated from however many slides exist.

## Hosting this

Any basic static hosting works, since this is plain HTML/CSS/JS with no
server or database required:

- **Netlify / Vercel** — drag the whole `vortexx-site` folder onto their
  dashboard, or connect it to a GitHub repo for automatic redeploys.
- **GitHub Pages** — push this folder to a repo and enable Pages.
- **Traditional web hosting (cPanel etc.)** — upload the whole folder via
  their File Manager or FTP, keeping the folder structure intact.

Whichever you choose, replacing a photo later is the same everywhere:
overwrite the file in `assets/images/...` and re-upload just that file.

## Note on the current state

- Kamugisha and Gloria's bios were written as placeholder copy — have
  them confirm the wording before this goes live.
- Stephen's bio is generic — happy to make it more specific if you send
  details.
- `Careers`, `Privacy Policy`, and `Terms of Service` links in the footer
  still point nowhere (`#`) — these need real pages or should be removed.

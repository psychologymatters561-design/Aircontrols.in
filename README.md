# aircontrols.in — Air Control, Delhi NCR

Static site for Air Control, an AC maintenance contractor operating in Delhi NCR since 1987.
Rebuilt August 2026 against the two-door spec: a commercial door (AMC-first, procurement-grade)
and a residential door at `/homes/`, sharing no pages.

No build step. Every page is a self-contained HTML file served by GitHub Pages; shared
`assets/css/main.css` + `assets/js/main.js` (vanilla, ~2 KB) + self-hosted WOFF2 fonts
(Inter Tight variable, IBM Plex Mono). Custom domain via `CNAME`.

## Structure

- Commercial: `/` · `/ac-amc-delhi/` (money page) · `/commercial-ac-amc/` · `/ac-repair-delhi/`
  · `/ac-installation-delhi/` · `/ac-assessment/` · `/about/` · `/documentation/` · `/contact/`
- Sectors: `/ac-amc-for-{offices, hospitals-clinics, hotels-restaurants, cold-storage, coworking-spaces}/`
- Locations (each ≥600 unique local words): `/ac-amc-{south-delhi, nehru-place, connaught-place,
  gurugram, noida, okhla-industrial-area}/`
- Residential: `/homes/` · `/homes/calculator/` · `/homes/ac-service-charges-delhi/`
- Content: `/guides/` + 8 articles (1,200–1,800 words each)
- Legacy URLs (`/blog/*.html`, `/calculator.html`) are meta-refresh + canonical stubs to their
  successors — do not delete them.

Forms post to Web3Forms (access key in the markup, same key as the previous site) and redirect
to `/thank-you/` (noindex). The footer email is assembled by JS — never add a plain-text
`mailto:` anywhere; it is what generated the job-application spam previously.

## Editing rules (from the spec — please keep)

1. **No unverifiable claims.** Every number must have a source. The old "4.9/5 · 97 reviews",
   "most trusted", "10,000+ ACs", embassy/Fortune-500 name-drops were removed deliberately;
   do not reintroduce them without evidence (see below for the review badge).
2. **"HVAC" is banned** everywhere except its single mention on `/about/` (technical-credentials
   context). Schema uses `LocalBusiness`, not `HVACBusiness`, for the same reason.
3. **No residential prices on commercial pages.** Home pricing lives under `/homes/` only.
   No WhatsApp links outside `/homes/`.
4. **NAP is sacred.** Name, address, phone must stay byte-identical across every page, the
   Google Business Profile, IndiaMART and JustDial:
   `Air Control · Ground Floor, 209, Sant Nagar, East of Kailash, New Delhi 110065 · +91 93122 64832`
5. Voice: senior engineer, short declaratives, no exclamation marks, no "solutions".

## Missing `[SUPPLY]` items — the site omits these sections until real inputs exist

Per the spec, missing facts were **omitted, not invented**. Supplying each unlocks a section:

1. **Units under contract + engineer headcount** → replaces the "All brands / All system types"
   credential cells on `/` with the stronger scale numbers.
2. **3 real anonymised jobs with outcomes** (sector, location, unit count, one hard number)
   → enables the case-study section on `/` and proof points on sector/location pages.
3. **A real redacted condition report (PDF)** → replaces the HTML "specimen — format
   illustration" on `/` and `/documentation/` and becomes the gated download. This is the
   single highest-value asset on the site.
4. **GST number, Udyam/MSME registration, insurance cover** → added to the credentials block
   on `/` and the vendor pack; also unlocks the downloadable capability statement.
5. **Field photographs** (engineer with gauges, cleaned vs fouled coil, team, van, report on
   clipboard, rooftop condenser bank) → hero background and the "people since 1987" section,
   both currently omitted. Phone-shot in daylight is fine; no stock, no AI images.
6. **Founder/team names and photos** → the people section on `/` and `/about/`.
7. **Google Business Profile confirmation** → the only permitted form of ratings on the site
   is a live-linked GBP badge. If the 4.9/97 figure is real GBP data, add the badge (linked to
   the profile) — never as static text. `aggregateRating` schema may then be added, sourced
   from GBP.
8. **Vendor documentation pack (PDF)** → becomes an ungated download on `/documentation/`
   (the sample report stays gated; the vendor pack does not).

## What the website alone will not do

Organic search will deliver a minority of AMC revenue. The site is the credibility anchor;
revenue depends on pairing it with: a fully built **Google Business Profile** (photos, service
list, 30+ reviews requested from existing clients — NAP identical to the footer), **IndiaMART**
presence, and **GeM registration** for institutional tenders, all pointing back here.
Everything must be indexed well before January — March–June is ~70% of demand, and content
published in April is published for next year. Submit `sitemap.xml` in Search Console
(verification file `google3fce558d89fb4d03.html` is already in place).

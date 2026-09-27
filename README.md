# Nawa roastery

Arabic/English static company website. GitHub Pages serves the repository root without a build step.

## Features
- Six coffee names with country filters and current-lot enquiries.
- Three-question preference finder that asks the team for a suitable available lot.
- Source-linked hot and iced V60, espresso, upright AeroPress, Chemex, French press and HARIO bottle cold brew.
- Reference-dose reset, proportional dose calculator, copyable recipes and elapsed timer.
- WhatsApp enquiry with quantities and grind selection; no automatic sending or fabricated prices.
- Arabic RTL and English LTR, responsive layout and native dialogs.

## Content accuracy
See [AUDIT.md](AUDIT.md) for sources, corrections and verification limits. Scaled quantities are calculations, not physically tested recipes. Reference recipes need adjustment for beans, equipment and taste.

Coffee names, origins and contact destinations were retained from the supplied site. Confirm current lots, spelling, availability, roast information, tasting notes, pack sizes and prices with the company before adding specifications. WhatsApp: 966599721275; Instagram: roastery.ksa. Account ownership has not been independently verified.

The hero is an AI-created illustrative still life, not a product or farm photograph. Coffee artwork and brewing diagrams are SVG illustrations. Google Fonts have system fallbacks.

## Checks and preview
Run `node --check script.js` and `node tests/audit.cjs` from this folder. The audit uses a DOM stub for logic checks; it is not a substitute for browser testing.

Run `python3 -m http.server 8000` and open http://localhost:8000. `tests/viewport.html` provides selectable iframe widths for responsive visual checks.

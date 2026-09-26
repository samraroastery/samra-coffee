# SAMRA Coffee

Bilingual Arabic/English static coffee discovery and brewing site. Deploy the repository root with GitHub Pages; no build step is needed.

## Features
- Six-coffee collection with details, flavour filters and a three-question finder.
- V60 (balanced, light, rich, iced), espresso, AeroPress, Chemex, French press and refrigerated cold-brew recipes.
- Dose calculator, scaled cumulative pour weights, brew timer and recipe copy.
- Multi-product WhatsApp enquiry with pack quantities and grind selection. Prices and availability are confirmed by the roaster, not fabricated in a checkout.
- Arabic RTL by default, English LTR, responsive layout, keyboard-accessible native dialogs, reduced-motion support.

## Content and assets
Edit `coffees` in `script.js` for coffee names, suggested flavour directions and method recommendations. Current lot process, altitude, roast, pack size, price and availability are intentionally not invented. Confirm these with the roaster before adding product specifications.

The WhatsApp number and Instagram profile are retained from the supplied original site: 966599721275 and roastery.ksa. WhatsApp links open a prepared enquiry; they do not send messages automatically.

`assets/hero.webp` is an AI-created editorial coffee still life, not a photo of a SAMRA product or farm. Collection artwork and brewing diagrams are original SVG illustrations. Typography uses Google Fonts with local system fallbacks. Brewing guidance is an adjustable starting point, not a guarantee of taste. HARIO learning resources are linked in the academy.

## Local preview
Run `python3 -m http.server 8000` in this folder and open http://localhost:8000.

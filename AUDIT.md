# Website content and functional audit

Reviewed 27 September 2026. This is an editorial and software review, not a sensory certification or a guarantee of zero defects.

## Corrections
- Replaced unattributed V60 taste presets with identified hot and iced reference recipes.
- Corrected iced coffee to distinguish hot brewing water from ice, including copied recipes.
- Separated calculated dose scaling from reference-dose timings, and added a reference-dose reset.
- Aligned upright AeroPress steps and timing with Fuglen's reference.
- Replaced the unsupported cold-brew concentrate/dilution instructions with the fixed HARIO bottle recipe.
- Removed inferred lot tasting notes and automatic product recommendations. The finder now sends customer preferences for staff advice.
- Clarified espresso output versus input water, brewing capacity, and the scope of paper-filter lessons.
- Preserved the existing Nawa roastery spelling and improved bilingual labels and recipe layout.

## Recipe sources
These are adapted summaries with direct links displayed beside recipes; the sources do not endorse Nawa roastery. Reference quantities are shown below.

| Method | Reference | Quantities |
| --- | --- | --- |
| Hot V60 | [Baratza](https://www.baratza.com/en-us/blog/brew-guides/hario-v60-brew-guide) | 20 g coffee / 320 g water |
| Iced V60 | [Vibrant Coffee Roasters](https://www.vibrantcoffeeroasters.com/v60-iced) | 21 g coffee / 215 g hot water / 150 g ice |
| Espresso | [La Marzocco](https://www.lamarzocco.com/ie/en/using-espresso-brew-ratios/) | 18 g coffee / 36 g espresso output |
| Upright AeroPress | [Fuglen](https://fuglencoffee.jp/en/pages/recipe_aeropress) | 15 g coffee / 200 g water |
| Chemex | [Baratza](https://www.baratza.com/en-us/blog/brew-guides/chemex-brew-guide) | 50 g coffee / 800 g water |
| French press | [Stumptown](https://www.stumptowncoffee.com/pages/brew-guide-french-press) | 56 g coffee / 850 g water |
| Cold-brew bottle | [HARIO](https://www.hario-europe.com/blogs/hario-community/cold-brew-recipes) | 55 g coffee / about 700 ml water; eight hours refrigerated |

La Marzocco's direct page restricted automated access; its official indexed text supported the ratio, temperature and approximate time. Other guides were inspected directly. Sources and third-party availability may change.

## Automated verification
`node tests/audit.cjs` passed 452 assertions covering both languages, all allowed doses, water/ice totals, scaling labels, recipe text and source URLs, country filters, all finder answer combinations, order quantities and encoded enquiries, HTML IDs, anchors, local assets and brand spelling. `node --check script.js` passed. These are code-level checks using a DOM stub, not 452 browser or physical brewing tests.

## Company confirmation still needed
- Actual current lots, product spelling and origins, roast date/level, process, sensory notes, availability, pack sizes, prices and delivery terms.
- Ownership and operational status of the supplied WhatsApp number and Instagram account.
- Physical brewing and tasting with the company's beans and intended equipment. No sensory validation was performed.

Unverified batch-specific claims are not presented as established product specifications. The website directs customers to staff for confirmation before ordering.

## Live browser checks
The deployed page was checked in Arabic and English. Verified recipe selection, reference reset, scaled-dose notice, clipboard recipe output, disabled cold-brew timer, finder preference summary and a two-pack filter-grind WhatsApp enquiry. No enquiry was sent. A narrow-screen grid overflow was found and corrected with shrinkable recipe columns and compact spacing. GitHub Pages deployment succeeded.

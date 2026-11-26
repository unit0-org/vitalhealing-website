# Vital Healing website — rules

Follow these every time a page, section or line of copy is added or changed.
The visual source of truth is the **Vital Healing** design system (claude.ai artifact
`https://claude.ai/artifact/513hSEdtGRyGkpLD5rUSv3`). Its tokens are mirrored in `src/styles/global.css`.

## 1. Voice and copy

Inspiration: Megan Winter (meganwinter.com.au). Simple, direct, personal, warm.

- **Dianeris speaks in the first person** (changed 2026-11-25). "I help you…", "Te acompaño…", "I believe…". On the home page she introduces herself once ("Soy Dianeris Posada…"). Exceptions that stay in the third person: the About page story and the home "Conoce a Dianeris" section (written as an interview profile; their title is her quote, in quotation marks), meta titles/descriptions, photo alt text, testimonials (clients' own words), video captions, and the privacy policy (Vital Healing as "we").
- **The reader is "you".** Spanish: informal *tú*, and feminine when the page is for women (*cansada*, *lista*, *acompañada*).
- **Short sentences.** One idea each, usually 8–18 words. Two short sentences beat one long one.
- **Say it plainly.** Words a friend would use. No jargon. If a technical term is needed (HTMA), explain it once in plain words.
- **Name the real feeling.** Concrete symptoms and moments ("tired by 3 p.m.", "you lose words") over abstractions ("wellness journey").
- **Highlight:** one key phrase per headline can get the hand-drawn leaf underline (`<mark class="mark">`), as in "no es normal". Keep the copy in `i18n` split into start / mark / end.
- **Headlines:** sentence case, a full thought, often ending in a period. The script accent (Allura) carries **one** emotional word per headline at most: *increíble*, *amazing*.
- **CTAs:** short, active, benefit-led. "Save your free spot", "Book your free call", "A little about me". Never "Submit" or "Click here".
- **No medical claims.** Say "helps calm", "quiet", "support". Never "cure", "treat", "heal [a disease]", "guaranteed". Keep the educational disclaimer in the footer.
- **No fear, no urgency tricks, no piles of exclamation marks, no decorative emoji.**
- **Testimonials:** real words from real clients only, lightly edited for length and grammar, never changed in meaning. Name only clients who agreed to be named (currently: Dulce López). Others are "Participant · Hormone Reset program". Never pair a stock photo with a testimonial.

## 2. Bilingual

- Every page exists in **Spanish and English**. Spanish is the source language (`src/i18n/es.ts`); English mirrors it (`src/i18n/en.ts`). TypeScript fails the build if a key is missing in English.
- **No copy is hard-coded in components.** All text lives in `src/i18n/*.ts`.
- Each page has its own slug per language, defined in `src/i18n/routes.ts` (e.g. `/es/sobre-dianeris/` ↔ `/en/about-dianeris/`). New page = add a route key, a view in `src/views/`, and two thin files in `src/pages/es/` and `src/pages/en/`.
- Translate meaning and tone, not word for word. Each version should sound native.
- **Language selection** (in `src/layouts/Base.astro` and `src/pages/index.astro`):
  - First visit ever (nothing saved in `localStorage['vh-lang']`): use the browser's first language (`es*` → Spanish, anything else → English), save it, and redirect to the same page in that language if needed.
  - After that, never auto-redirect again. The switcher shows only the current language (ES or EN); one click goes to the other language and saves the choice.
  - Crawlers are never redirected; `hreflang` tags link the two versions.

## 3. Visual

- **Colours:** use the CSS tokens only (`var(--forest)` etc.), never raw hex in components.
  - Text: `forest` (titles) and `slate` (body) on `cream`, `white` or `sage`; `white` on `forest`.
  - Green text (eyebrows, links, captions) is `leaf-deep`, never `leaf`.
  - `leaf` is for shapes and the mark only. Exception: on forest, the masterclass eyebrows ("Masterclass gratuita" on the home page and the masterclass page hero, plus its "Fecha" and "Formato" labels) are `leaf` (`.eyebrow--leaf`), so the event stands out without orange.
  - **Program tints** (site addition, not yet in the design system): `sage`, `sand` and `mist` give each program card its own colour so they don't read as one green block. Use them in that order, as backgrounds only; `sand-deep`, `leaf` and `slate` are the matching accent bars. Don't use them for anything else.
  - **Orange marks the call to action and nothing else:** at most one orange marker per section (`.btn--marked`), never orange text or an orange button fill.
  - **No orange text.** (Tried and dropped 2026-11-25: it read too loud.) Home "Tiene solución" uses `leaf` instead (`.accent--leaf`), as the client asked, even though leaf on white reads below 4.5:1; it is large script text.
- **Space before a CTA:** 40px between the text above and the button (48px in heroes).
- **Buttons:** forest with white text (`.btn`), or outline (`.btn--ghost`); white (`.btn--light`) on forest sections.
- **Type:** Libre Baskerville for titles (regular weight only), Lato for text, Allura only for the single accent word. Eyebrows: Lato bold, uppercase, 0.2em letter-spacing, `leaf-deep`.
- **Shape:** photos and the forest name band are square (`--radius-none`); cards and panels use `--radius-md`; buttons `--radius-sm`. Separate sections with background changes or a 2–3px `sage` rule, not shadows.
- **Rhythm:** alternate section backgrounds (cream → white → forest → sage) so each section reads as its own block.
- **No labels on photos.** The hero photo of Dianeris carries no name tag.
- **Header:** logo, page links and the ES/EN switch only. No CTA button in the header; the calls to action live in the page sections.
- **Hero:** must fit the first screen (photo height follows the viewport) on desktop.
- **Masterclass form:** first name, last name, email and phone, all required.
- **Testimonials** use the carousel (`src/components/Stories.astro`). A new one goes in `stories` in both `es.ts` and `en.ts`, and its photo path goes in the `photos` list in the same order.
- **Photos:** real photos of Dianeris, her clients and spaces: natural light, outdoors, greenery, sage/cream/neutral tones. Until photos arrive, use `PhotoSlot` (the sage "Photo coming soon" frame), never stock people.
  - **Exception: AI illustrative photos on the program cards only** (`public/images/program-*.webp`, approved 2026-11-16). They show a type of person, never a named client. Never use them next to a testimonial, in a story, or as a photo of Dianeris. Replace them with real photos when they arrive.
- **Accessibility:** text contrast 4.5:1 minimum, visible focus rings, alt text on every meaningful image, 44px minimum tap targets, layout works at 360px wide with no horizontal scroll.

## 4. Where things live

| What | Where |
|---|---|
| Email, booking link, social links, credential URL | `src/config.ts` → `site` |
| Masterclass date and form endpoint | `src/config.ts` → `masterclass` |
| All copy | `src/i18n/es.ts`, `src/i18n/en.ts` |
| Routes / slugs | `src/i18n/routes.ts` |
| Tokens and shared styles | `src/styles/global.css` |
| Page layouts | `src/views/*.astro` |
| Photos | `public/images/`; logos in `public/brand/` |

# Vital Healing · website

Bilingual (Spanish / English) website for Vital Healing, Dianeris Posada's health coaching brand. Static Astro site; deploys anywhere (Vercel, Netlify, any static host).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # output in dist/
```

## Pages

| Page | Spanish | English |
|---|---|---|
| Home | `/es/` | `/en/` |
| Masterclass | `/es/masterclass/` | `/en/masterclass/` |
| About Dianeris | `/es/sobre-dianeris/` | `/en/about-dianeris/` |
| Programs (placeholders) | `/es/programas/{menopausia,familias-autismo,vitalidad}/` | `/en/programs/{menopause,autism-families,vitality}/` |
| Privacy policy | `/es/privacidad/` | `/en/privacy/` |

`/` sends visitors to their language (browser language on first visit, then their saved choice).

## Before launch

- [ ] **Photos:** replace `public/images/dianeris-*.webp` (taken from the old site) with the new shoot, and fill the "Photo coming soon" slots (`PhotoSlot` in `src/views/Home.astro`).
- [ ] **Masterclass date:** set `masterclass.date` in `src/config.ts`.
- [ ] **Masterclass form:** set `masterclass.formAction` to the email platform / CRM endpoint. Until then, the form opens a pre-filled email to Dianeris.
- [ ] **Testimonials:** confirm the three Hormone Reset participants are happy to be quoted (anonymously), and whether they want their names shown.
- [ ] **Privacy policy:** have it reviewed; it is a plain-language starting point.
- [ ] **Program pages:** write content for the three programs.

Writing and design rules: see [CONTENT_RULES.md](CONTENT_RULES.md).

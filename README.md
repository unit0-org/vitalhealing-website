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

## Hosting (Cloudflare, free plan)

The site is static and served by Cloudflare Workers static assets (`wrangler.jsonc`).

- Account: Abel's Cloudflare account for now (pinned by `account_id` in `wrangler.jsonc`). First time on a machine: `npx wrangler login`.
- Deploy: automatic on every push/merge to `main` (`.github/workflows/deploy.yml`, needs the `CLOUDFLARE_API_TOKEN` repo secret). Manual fallback: `npm run deploy` (builds, then uploads `dist/`). Live at https://vitalhealing-website.vitalhealing-website.workers.dev.
- Preview without going live: `npm run deploy:preview`.
- Custom domain: in Cloudflare, Workers & Pages → vitalhealing-website → Settings → Domains & Routes (the domain must be on Cloudflare DNS).
- Sign-ups will go to the CRM's public site API once it exists (see `src/config.ts` → `masterclass.formAction`).

## Before launch

- [ ] **Photos:** replace `public/images/dianeris-*.webp` (taken from the old site) with the new shoot, and fill the "Photo coming soon" slots (`PhotoSlot` in `src/views/Home.astro`).
- [ ] **Masterclass date:** set `masterclass.date` in `src/config.ts`.
- [ ] **Masterclass form:** set `masterclass.formAction` to the email platform / CRM endpoint. Until then, the form opens a pre-filled email to Dianeris.
- [ ] **Testimonials:** confirm the three Hormone Reset participants are happy to be quoted (anonymously), and whether they want their names shown.
- [ ] **Privacy policy:** have it reviewed; it is a plain-language starting point.
- [ ] **Program pages:** write content for the three programs.

Writing and design rules: see [CONTENT_RULES.md](CONTENT_RULES.md).

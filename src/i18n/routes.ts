// One entry per page. Each page has its own slug in each language.
// The language switcher uses this map to jump to the same page in the other language.

export const languages = ['es', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'es';

export const routes = {
  home: { es: '/es/', en: '/en/' },
  masterclass: { es: '/es/masterclass/', en: '/en/masterclass/' },
  about: { es: '/es/sobre-dianeris/', en: '/en/about-dianeris/' },
  privacy: { es: '/es/privacidad/', en: '/en/privacy/' },
  programMenopause: { es: '/es/programas/menopausia/', en: '/en/programs/menopause/' },
  programAutism: { es: '/es/programas/familias-autismo/', en: '/en/programs/autism-families/' },
  programVitality: { es: '/es/programas/vitalidad/', en: '/en/programs/vitality/' },
} satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

export const path = (key: RouteKey, lang: Lang) => routes[key][lang];
export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');

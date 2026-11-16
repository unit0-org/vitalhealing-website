import es from './es';
import en from './en';
import type { Lang } from './routes';

export const dict = { es, en } as const;
export const t = (lang: Lang) => dict[lang];

export * from './routes';

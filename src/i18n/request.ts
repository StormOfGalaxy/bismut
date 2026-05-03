import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

const locales = ['de', 'en'] as const;
type Locale = (typeof locales)[number];

function isSupportedLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale)
}

const messages: Record<Locale, () => Promise<{ default: Record<string, unknown> }>> = {
  de: () => import('../../messages/de.json'),
  en: () => import('../../messages/en.json'),
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const raw = cookieStore.get('locale')?.value;
  const locale: Locale = isSupportedLocale(raw) ? raw : 'de';

  return {
    locale,
    messages: (await messages[locale]()).default as Record<string, unknown>,
  };
});

import { createContext, useContext, useState, type ReactNode } from 'react';
import { type Locale, translations, type TranslationKey } from './translations';

export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
  ta: (key: TranslationKey) => string[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('fr');

  const t = (key: TranslationKey): string => {
    const val = translations[locale][key];
    if (Array.isArray(val)) return (val as string[]).join(', ');
    return val as string;
  };

  const ta = (key: TranslationKey): string[] => {
    const val = translations[locale][key];
    if (Array.isArray(val)) return val as string[];
    return [val as string];
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, ta }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

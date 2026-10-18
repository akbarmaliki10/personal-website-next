"use client";

import * as React from "react";
import { defaultLocale, dictionaries, Dictionary, Locale } from "@/i18n/translations";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "locale";

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "id" || value === "ja";
}

/** Saved preference first, then the browser language, then the default. */
function readLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (isLocale(saved)) return saved;
  const browser = navigator.language.slice(0, 2).toLowerCase();
  return isLocale(browser) ? browser : defaultLocale;
}

// Tiny external store so the locale can be read from localStorage
// without setting state inside an effect (and without hydration mismatches).
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function saveLocale(next: Locale) {
  localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = React.useSyncExternalStore(subscribe, readLocale, () => defaultLocale);

  // Keep <html lang>, the tab title and the meta description in sync.
  React.useEffect(() => {
    document.documentElement.lang = locale;
    document.title = dictionaries[locale].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", dictionaries[locale].meta.description);
  }, [locale]);

  const value = React.useMemo(
    () => ({ locale, setLocale: saveLocale, t: dictionaries[locale] }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

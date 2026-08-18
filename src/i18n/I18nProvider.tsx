import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, isLocale, LOCALE_STORAGE_KEY, localeMeta, type Locale } from "./locales";
import { getByPath } from "./get-by-path";
import { en, type Messages } from "./messages/en";
import { ta } from "./messages/ta";
import { kn } from "./messages/kn";
import { te } from "./messages/te";
import { ml } from "./messages/ml";
import { hi } from "./messages/hi";
import type { PartialMessages } from "./types";

const catalogs: Record<Locale, PartialMessages | Messages> = {
  en,
  ta,
  kn,
  te,
  ml,
  hi,
};

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  messages: PartialMessages | Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function interpolate(template: string, vars?: Record<string, string | number>) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, name: string) =>
    vars[name] !== undefined ? String(vars[name]) : `{${name}}`,
  );
}

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}

function applyDocumentLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  const meta = localeMeta[locale];
  document.documentElement.lang = meta.htmlLang;
  document.documentElement.classList.remove(
    "locale-en",
    "locale-ta",
    "locale-kn",
    "locale-te",
    "locale-ml",
    "locale-hi",
  );
  document.documentElement.classList.add(meta.fontClass);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = readStoredLocale();
    setLocaleState(initial);
    applyDocumentLocale(initial);
    setReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    applyDocumentLocale(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const messages = catalogs[locale] ?? en;

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const fromLocale = getByPath(messages, key);
      const fromEn = getByPath(en, key);
      const value = fromLocale ?? fromEn ?? key;
      return interpolate(value, vars);
    },
    [messages],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, messages }),
    [locale, setLocale, t, messages],
  );

  // Avoid flash of wrong language after hydration
  if (!ready && typeof window !== "undefined") {
    // still render with default; effect will sync
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}

export function useT() {
  const { t, locale, setLocale, messages } = useI18n();
  return { t, locale, setLocale, messages };
}

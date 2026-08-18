export const LOCALES = ["en", "ta", "kn", "te", "ml", "hi"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_STORAGE_KEY = "shakthi-locale";

export const localeMeta: Record<
  Locale,
  { code: Locale; label: string; nativeLabel: string; htmlLang: string; fontClass: string }
> = {
  en: {
    code: "en",
    label: "English",
    nativeLabel: "English",
    htmlLang: "en",
    fontClass: "locale-en",
  },
  ta: {
    code: "ta",
    label: "Tamil",
    nativeLabel: "தமிழ்",
    htmlLang: "ta",
    fontClass: "locale-ta",
  },
  kn: {
    code: "kn",
    label: "Kannada",
    nativeLabel: "ಕನ್ನಡ",
    htmlLang: "kn",
    fontClass: "locale-kn",
  },
  te: {
    code: "te",
    label: "Telugu",
    nativeLabel: "తెలుగు",
    htmlLang: "te",
    fontClass: "locale-te",
  },
  ml: {
    code: "ml",
    label: "Malayalam",
    nativeLabel: "മലയാളം",
    htmlLang: "ml",
    fontClass: "locale-ml",
  },
  hi: {
    code: "hi",
    label: "Hindi",
    nativeLabel: "हिन्दी",
    htmlLang: "hi",
    fontClass: "locale-hi",
  },
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

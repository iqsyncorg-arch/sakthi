import { Globe } from "lucide-react";
import { LOCALES, localeMeta, useT, type Locale } from "../../i18n";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export function LanguageSwitcher({ variant = "dark", className = "" }: Props) {
  const { locale, setLocale, t } = useT();
  const isLight = variant === "light";

  return (
    <label
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1.5 ${
        isLight
          ? "border-white/20 bg-white/10 text-white"
          : "border-slate-200 bg-slate-50 text-slate-700"
      } ${className}`}
    >
      <Globe className={`h-3.5 w-3.5 shrink-0 ${isLight ? "text-[#F4B400]" : "text-[#0A3D62]"}`} aria-hidden />
      <span className="sr-only">{t("nav.language")}</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        aria-label={t("nav.language")}
        className={`appearance-none bg-transparent text-[11px] xl:text-xs font-bold outline-none cursor-pointer pr-1 max-w-[7.5rem] ${
          isLight ? "text-white" : "text-slate-700"
        }`}
      >
        {LOCALES.map((code) => (
          <option key={code} value={code} className="text-slate-800">
            {localeMeta[code].nativeLabel}
          </option>
        ))}
      </select>
    </label>
  );
}

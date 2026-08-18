import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { scrollToSection } from "../../lib/scroll-to-section";
import { useT } from "../../i18n";

type NavLink =
  | { kind: "scroll"; target: string; labelKey: string }
  | {
      kind: "route";
      to:
        | "/about"
        | "/courses"
        | "/admissions"
        | "/careers"
        | "/contact"
        | "/student-life"
        | "/gallery"
        | "/employment-services";
      labelKey: string;
    };

const navLinks: NavLink[] = [
  { kind: "scroll", target: "home", labelKey: "nav.home" },
  { kind: "route", to: "/about", labelKey: "nav.about" },
  { kind: "route", to: "/courses", labelKey: "nav.courses" },
  { kind: "route", to: "/admissions", labelKey: "nav.admissions" },
  { kind: "route", to: "/student-life", labelKey: "nav.studentLife" },
  { kind: "route", to: "/gallery", labelKey: "nav.gallery" },
  { kind: "route", to: "/employment-services", labelKey: "nav.employment" },
  { kind: "route", to: "/careers", labelKey: "nav.careers" },
  { kind: "route", to: "/contact", labelKey: "nav.contact" },
];

export function Navbar() {
  const { t, locale } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouterState();
  const pathname = router.location.pathname;
  const isDenseLocale = locale !== "en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [locale, pathname]);

  const linkClass = "text-slate-700 hover:text-[#0A3D62]";
  const linkSize = isDenseLocale
    ? "px-1.5 xl:px-2 py-2 text-[10px] xl:text-[12px]"
    : "px-2 xl:px-2.5 py-2 text-[11px] xl:text-[13px]";

  const handleNavClick = (target: string) => {
    scrollToSection(target);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex items-center justify-between gap-2 sm:gap-3 rounded-2xl px-3 sm:px-5 py-3 bg-white border border-slate-200 shadow-md">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group shrink-0 min-w-0"
            aria-label={t("nav.goHomeAria")}
          >
            <Logo variant="default" size="md" />
          </button>

          <ul
            className={`hidden items-center min-w-0 flex-1 justify-center ${
              isDenseLocale ? "xl:flex gap-0" : "lg:flex gap-0.5"
            }`}
          >
            {navLinks.map((l) => (
              <li key={l.labelKey} className="min-w-0">
                {l.kind === "route" ? (
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`${linkSize} font-bold transition-colors duration-300 whitespace-nowrap ${linkClass}`}
                  >
                    {t(l.labelKey)}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleNavClick(l.target)}
                    className={`${linkSize} font-bold transition-colors duration-300 whitespace-nowrap ${linkClass}`}
                  >
                    {t(l.labelKey)}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="hidden sm:block">
              <LanguageSwitcher variant="dark" />
            </div>
            <button
              className={`p-2 rounded-lg text-[#0A3D62] transition-colors duration-300 ${
                isDenseLocale ? "xl:hidden" : "lg:hidden"
              }`}
              aria-label={t("nav.toggleMenuAria")}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div
            className={`mt-2 rounded-2xl p-4 shadow-md bg-white border border-slate-200/90 text-slate-800 ${
              isDenseLocale ? "xl:hidden" : "lg:hidden"
            }`}
          >
            <div className="mb-3 sm:hidden">
              <LanguageSwitcher variant="dark" className="w-full justify-between" />
            </div>
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.labelKey}>
                  {l.kind === "route" ? (
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      {t(l.labelKey)}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleNavClick(l.target)}
                      className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      {t(l.labelKey)}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

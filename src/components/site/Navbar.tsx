import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { trainingTests } from "../../data/training-tests";
import { Logo } from "./Logo";
import { scrollToSection } from "../../lib/scroll-to-section";

type NavLink =
  | { kind: "scroll"; target: string; label: string }
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
      label: string;
    };

const navLinks: NavLink[] = [
  { kind: "scroll", target: "home", label: "Home" },
  { kind: "route", to: "/about", label: "About Us" },
  { kind: "route", to: "/courses", label: "Courses" },
  { kind: "route", to: "/admissions", label: "Admissions" },
  { kind: "route", to: "/student-life", label: "Student Life" },
  { kind: "route", to: "/gallery", label: "Gallery" },
  { kind: "route", to: "/employment-services", label: "Employment" },
  { kind: "route", to: "/careers", label: "Careers" },
  { kind: "route", to: "/contact", label: "Contact Us" },
];

const heroPaths = new Set([
  "/",
  "/about",
  "/courses",
  "/admissions",
  "/careers",
  "/contact",
  "/student-life",
  "/gallery",
  "/employment-services",
  "/university-admissions",
  "/mbbs-to-md",
  "/career-counseling",
  "/other-programs",
  "/visa-assistance",
  "/travel-assistance",
  "/sop-writing",
  "/education-loan",
  "/blogs-events",
  ...trainingTests.map((t) => `/${t.id}`),
]);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouterState();
  const pathname = router.location.pathname;
  const isHeroPage = heroPaths.has(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDarkNavbar = isHeroPage && !scrolled;

  const linkClass = isDarkNavbar
    ? "text-white hover:text-white/80"
    : "text-slate-700 hover:text-[#0A3D62]";

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
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-300 ${
            isDarkNavbar
              ? "bg-black/20 backdrop-blur-md border border-white/10"
              : "bg-white border border-slate-200 shadow-md"
          }`}
        >
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group shrink-0"
            aria-label="Go to home"
          >
            <Logo
              variant={isDarkNavbar ? "light" : "default"}
              size="md"
              showTagline
            />
          </button>

          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((l) => (
              <li key={l.label}>
                {l.kind === "route" ? (
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`px-2 xl:px-2.5 py-2 text-[11px] xl:text-[13px] font-bold transition-colors duration-300 whitespace-nowrap ${linkClass}`}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleNavClick(l.target)}
                    className={`px-2 xl:px-2.5 py-2 text-[11px] xl:text-[13px] font-bold transition-colors duration-300 whitespace-nowrap ${linkClass}`}
                  >
                    {l.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isDarkNavbar ? "text-white" : "text-[#0A3D62]"
            }`}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div
            className={`lg:hidden mt-2 rounded-2xl p-4 shadow-md transition-all duration-300 ${
              isDarkNavbar
                ? "glass-dark text-white border border-white/10"
                : "bg-white border border-slate-200/90 text-slate-800"
            }`}
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.label}>
                  {l.kind === "route" ? (
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                        isDarkNavbar
                          ? "text-white hover:bg-white/10"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleNavClick(l.target)}
                      className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                        isDarkNavbar
                          ? "text-white hover:bg-white/10"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {l.label}
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

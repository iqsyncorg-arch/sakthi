import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar, R as Reveal, F as Footer } from "./Reveal-BR6Ce8yz.mjs";
import { m as mbbsPrograms, p as programRegions, a as programHasDetails, b as partnerNote, g as gusCaribbeanUniversityNames, o as otherCaribbeanUniversityNames } from "./mbbs-programs-CHr46y9b.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { G as GraduationCap, E as Earth, s as BookOpen, K as ClipboardCheck, N as DollarSign, O as Search, X, H as House, A as ArrowRight, n as Sparkles, a as MessageCircle, C as CircleCheck, Q as Building2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./Logo-DDrCU-to.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./router-DSxx-_6s.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const gusSchools = [
  {
    id: "susom",
    name: "Saba School of Medicine (SUSOM)",
    location: "The Bottom, Netherlands",
    climate: "Tropical: 25–28°C (77–82°F)",
    highlights: [
      "Accredited by NVAO — only Caribbean medical school with European accreditation standards.",
      "Recognized by WFME.",
      "USMLE Step 1 first-time pass rate 95%+, Step 2 CK 95%+, 99% three-year U.S. residency placement.",
      "3,500+ graduates with extensive academic and personal faculty support."
    ],
    scholarships: [
      "International Student Scholarship: $75,000 over 10 semesters (tuition).",
      "Opportunity Grant: $5,000."
    ],
    intakes: "January / May / September",
    entryRequirements: [
      "10+2 with minimum 80% in Physics, Chemistry, and Biology.",
      "TOEFL or comparable exam if English is not the principal language."
    ]
  },
  {
    id: "smusom",
    name: "St. Matthews University School of Medicine (SMUSOM)",
    location: "Grand Cayman",
    climate: "Tropical: 27–30°C (80–86°F)",
    highlights: [
      "Accredited by ACCM; recognized by WFME and NCFMEA.",
      "USMLE Step 1 @ 90%, Step 2 CK @ 97%, 100% residency placement rate.",
      "7:1 student-to-faculty ratio."
    ],
    scholarships: ["Up to $65,000 USD in grants for eligible international MD students."],
    intakes: "January / May / September",
    entryRequirements: [
      "10+2 with minimum 80% in Physics, Chemistry, and Biology.",
      "TOEFL or comparable exam if English is not the principal language."
    ]
  },
  {
    id: "smusvm",
    name: "St. Matthew's University School of Veterinary Medicine (SMUSVM)",
    location: "Grand Cayman Island",
    climate: "Tropical: 27–30°C (80.6–86°F)",
    highlights: [
      "Listed with AVMA; provisional AAVMC member institution.",
      "DVM: 10 semesters on-campus (1–7) then U.S./Canada/U.K. rotations (8–10).",
      "Pre-Veterinary Master's and Gateway Veterinary pathway programs available."
    ],
    programs: [
      "Doctor of Veterinary Medicine (DVM) — full-time, 10 semesters.",
      "Pre-Veterinary Master's — 8 months full-time or part-time.",
      "Gateway Veterinary — 15 weeks full-time or 30 weeks part-time."
    ]
  },
  {
    id: "mua",
    name: "The Medical University of Americas (MUA)",
    location: "St. Kitts & Nevis",
    climate: "Tropical: 27–30°C (80–86°F)",
    highlights: [
      "ACCM accredited; USMLE-aligned curriculum from day one.",
      "Step 1 pass rate @ 90%, Step 2 @ 96% over the last three years.",
      "72 weeks clinical exposure at ACGME-accredited hospitals (U.S. & Canada).",
      "Cadaver labs, small class sizes, end-to-end residency prep and mock interviews."
    ],
    scholarships: ["International Grant: $25,000 over 10 MD semesters for eligible Indian students."],
    intakes: "January / May / September",
    entryRequirements: [
      "10+2 with minimum 75% in Physics, Chemistry, and Biology.",
      "4-year Bachelor's or 5/6-year track for 12th with 75+%.",
      "TOEFL or comparable exam if English is not the principal language."
    ]
  }
];
const otherCaribbeanMedicalSchools = [
  {
    id: "sgu",
    name: "St. George's University School of Medicine (SGU)",
    location: "Grenada",
    climate: "Tropical Caribbean",
    highlights: [
      "Largest source of physicians for the U.S. workforce — 22,000+ graduates.",
      "94% USMLE pass rate, 89% U.S. residency placement rate.",
      "75+ hospitals for clinical rotations; UK pathway via Northumbria University.",
      "4/5/6/7-year MD tracks; study in Grenada, UK, U.S., and/or UK for clinical years."
    ],
    intakes: "January/April/September (4-year) · January/August/September (5–7 year)",
    entryRequirements: [
      "10+2 with 80% and no grade below 80% in Biology, Chemistry, Maths, Physics, and English.",
      "IELTS 7.0 each band, TOEFL 94–101, PTE 66.3, or Duolingo 130 for direct entry."
    ]
  },
  {
    id: "rgust",
    name: "Rajiv Gandhi University of Science & Technology (RGUST)",
    location: "Guyana, South America",
    climate: "Tropical: 24–31°C (75–88°F) year-round",
    highlights: [
      "NAC accredited; recognized by WHO, WDOMS, and ECFMG.",
      "4.5-year MD, 5.5-year BSc/MD, MBBS-to-MD pathway, and U.S. clinical rotations.",
      "Pre-medicals + basic sciences in Guyana; clinical rotations in Guyana or U.S. hospitals.",
      "USMLE preparation with small, tuition-like class sizes."
    ],
    intakes: "January / May / September",
    entryRequirements: ["10+2 from English medium school with minimum 60%."]
  }
];
const gusUsmleHighlight = "GUS Medical students achieve exceptional USMLE pass rates and residency match outcomes across Saba, St. Matthew's, and Medical University of the Americas — a deliberate, student-centric approach to international medical training.";
const helpItems = ["University shortlisting based on your profile & budget", "Complete application & documentation support", "Visa guidance and pre-departure orientation"];
function MedicalSchoolCard({
  school
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-100 bg-slate-50/80 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[#0A3D62]", children: school.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-[#4DA8DA] font-medium mt-0.5", children: [
      school.location,
      " · ",
      school.climate
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1.5", children: school.highlights.slice(0, 3).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-slate-600 flex items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 shrink-0 text-[#4DA8DA] mt-0.5" }),
      h
    ] }, h)) })
  ] });
}
function PartnerUniversityList({
  names
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-2", children: names.map((uni) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 rounded-xl border border-slate-100 px-4 py-3 text-sm text-slate-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 shrink-0 text-[#4DA8DA]" }),
    uni
  ] }, uni)) });
}
function statusBadgeClass(status) {
  if (status === "Private") return "bg-violet-50 text-violet-700 border-violet-100";
  if (status === "Public Research University") return "bg-sky-50 text-sky-700 border-sky-100";
  return "bg-emerald-50 text-emerald-700 border-emerald-100";
}
function MedicalUniversityTable({
  entries
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-2xl border border-slate-200 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full text-left text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-100 bg-slate-50/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500", children: "Country / City" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500", children: "University" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500", children: "Status" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500", children: "Stream / Duration" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-100", children: entries.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-50/60 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 align-top text-slate-600 font-medium whitespace-nowrap", children: entry.city }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 align-top font-semibold text-[#0A3D62] leading-snug", children: entry.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 align-top", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide ${statusBadgeClass(entry.status)}`, children: entry.status }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3.5 align-top text-slate-600 leading-relaxed min-w-[220px]", children: entry.stream })
    ] }, `${entry.city}-${entry.name}`)) })
  ] }) });
}
function ProgramDetailPanel({
  program
}) {
  const detailed = programHasDetails(program);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 12
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -8
  }, transition: {
    duration: 0.25
  }, className: "rounded-3xl border border-slate-200 bg-white shadow-soft overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-6 py-5 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-[#0A3D62]/10 px-2.5 py-0.5 text-xs font-semibold text-[#0A3D62]", children: program.region }),
          program.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-[#F4B400]/15 px-2.5 py-0.5 text-xs font-semibold text-[#0A3D62]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-[#F4B400]" }),
            "Featured"
          ] }),
          detailed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700", children: "Full details available" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-extrabold text-[#0A3D62]", children: program.title }),
        program.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-[#4DA8DA] font-medium", children: program.subtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-5 py-3 shadow-glow hover:translate-y-[-1px] transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
        "Free Consultation"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 md:p-8 space-y-8", children: detailed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      program.intro && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-relaxed text-base md:text-lg", children: program.intro }),
      program.highlights && program.highlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "section-label mb-3", children: [
          "Why students choose ",
          program.shortName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: program.highlights.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3 text-sm text-slate-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0 text-[#4DA8DA] mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: item })
        ] }, item)) })
      ] }),
      program.details && program.details.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "section-label mb-3", children: "Program at a glance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: program.details.map((d) => {
          const isClimate = d.label === "Climate / Temperature";
          if (isClimate) {
            const text = d.value.toLowerCase();
            let weatherType = "mild";
            if (text.includes("cold") || text.includes("winter") || text.includes("snow") || text.includes("-12") || text.includes("-30") || text.includes("heaters")) {
              weatherType = "snow";
            } else if (text.includes("tropical") || text.includes("hot") || text.includes("summer") || text.includes("sun") || text.includes("30°c")) {
              weatherType = "sun";
            } else if (text.includes("rain") || text.includes("rainy") || text.includes("thunder") || text.includes("monsoon") || text.includes("wet")) {
              weatherType = "rain";
            }
            let cardBorder = "border-sky-100 hover:border-sky-300";
            let cardBg = "bg-gradient-to-br from-sky-50/70 via-white to-amber-50/50";
            let iconBg = "bg-sky-100 text-sky-600";
            let iconEmoji = "🌤️";
            let headerText = "text-sky-500";
            if (weatherType === "snow") {
              cardBorder = "border-blue-300 hover:border-blue-400";
              cardBg = "bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-900 text-white";
              iconBg = "bg-blue-900/50 text-blue-200 border border-blue-500/30";
              iconEmoji = "❄️";
              headerText = "text-blue-300";
            } else if (weatherType === "sun") {
              cardBorder = "border-amber-200 hover:border-amber-300";
              cardBg = "bg-gradient-to-br from-amber-50/70 via-white to-rose-50/30";
              iconBg = "bg-amber-100 text-amber-650";
              iconEmoji = "☀️";
              headerText = "text-amber-600";
            } else if (weatherType === "rain") {
              cardBorder = "border-indigo-200 hover:border-indigo-300";
              cardBg = "bg-gradient-to-br from-slate-50 via-indigo-50/30 to-sky-50/30";
              iconBg = "bg-indigo-100 text-indigo-650";
              iconEmoji = "⛈️";
              headerText = "text-indigo-600";
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
              scale: 1.03
            }, transition: {
              type: "spring",
              stiffness: 300,
              damping: 15
            }, className: `rounded-xl border ${cardBorder} ${cardBg} p-4 shadow-sm hover:shadow-soft transition-all duration-300 flex items-start gap-3 relative overflow-hidden group`, children: [
              weatherType === "snow" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [...Array(8)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute w-1.5 h-1.5 bg-white rounded-full opacity-60", style: {
                left: `${10 + i * 12}%`,
                top: `-10px`
              }, animate: {
                y: [0, 90],
                x: [0, i % 2 === 0 ? 10 : -10]
              }, transition: {
                duration: 3 + i % 3 * 0.8,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3
              } }, i)) }),
              weatherType === "sun" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-amber-400/20 blur-md", animate: {
                scale: [1, 1.25, 1]
              }, transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              } }) }),
              weatherType === "rain" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [...Array(8)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute w-[1px] h-3.5 bg-indigo-300/40", style: {
                left: `${15 + i * 11}%`,
                top: `-15px`
              }, animate: {
                y: [0, 90],
                x: [-5, -15]
              }, transition: {
                duration: 1.1 + i % 3 * 0.2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.15
              } }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 group-hover:scale-110 transition-transform duration-500 select-none pointer-events-none text-7xl font-bold", children: iconEmoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-9 w-9 rounded-lg ${iconBg} grid place-items-center shrink-0 mt-0.5 z-10`, children: weatherType === "sun" ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "text-lg", animate: {
                rotate: 360
              }, transition: {
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }, children: "☀️" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg z-10", children: iconEmoji }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 z-10 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-[11px] font-extrabold uppercase tracking-wider ${headerText} flex items-center gap-1`, children: [
                  d.label,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block animate-bounce", children: weatherType === "snow" ? "❄️" : weatherType === "sun" ? "☀️" : "🌤️" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-1 text-xs sm:text-sm font-bold leading-snug ${weatherType === "snow" ? "text-slate-100" : "text-slate-800"}`, children: d.value })
              ] })
            ] }, d.label);
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-slate-100 p-4 hover:border-[#4DA8DA]/30 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-wider text-slate-400", children: d.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm font-semibold text-[#0A3D62] leading-snug", children: d.value })
          ] }, d.label);
        }) })
      ] }),
      program.id === "caribbean" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        program.medicalUniversities && program.medicalUniversities.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "section-label mb-3", children: "Partner universities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MedicalUniversityTable, { entries: program.medicalUniversities })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-[#4DA8DA]/25 bg-gradient-to-br from-[#4DA8DA]/5 via-white to-slate-50/80 p-5 md:p-6 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "section-label mb-1", children: "GUS Medical & Veterinary Schools" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600 leading-relaxed", children: gusUsmleHighlight })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PartnerUniversityList, { names: gusCaribbeanUniversityNames }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: gusSchools.map((school) => /* @__PURE__ */ jsxRuntimeExports.jsx(MedicalSchoolCard, { school }, school.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-200 bg-white p-5 md:p-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-slate-600", children: "Independent partners" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "section-label mt-3 mb-1", children: "Other Caribbean Medical Schools" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 leading-relaxed", children: "SGU and Rajiv Gandhi are separate institutions — not part of the GUS group — listed here for your reference." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PartnerUniversityList, { names: otherCaribbeanUniversityNames }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: otherCaribbeanMedicalSchools.map((school) => /* @__PURE__ */ jsxRuntimeExports.jsx(MedicalSchoolCard, { school }, school.id)) })
        ] })
      ] }) : program.medicalUniversities && program.medicalUniversities.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "section-label mb-3", children: "Partner universities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MedicalUniversityTable, { entries: program.medicalUniversities })
      ] }) : program.universities && program.universities.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "section-label mb-3", children: "Partner universities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PartnerUniversityList, { names: program.universities })
      ] }),
      program.note && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#F4B400]/25 bg-[#F4B400]/5 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-[#0A3D62] mb-1.5", children: "Important note" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600 leading-relaxed", children: program.note })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-600 leading-relaxed", children: [
          "Planning to study MBBS/MD in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#0A3D62]", children: program.shortName }),
          "? Shakthi Academy guides you from university selection to visa and departure — with personalized counseling at every step."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5", children: helpItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm text-slate-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0 text-[#4DA8DA] mt-0.5" }),
          item
        ] }, item)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl gradient-primary p-6 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-8 w-8 text-[#F4B400]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-bold text-lg", children: "Get personalized guidance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-white/85 leading-relaxed", children: [
          "Share your preferred program and budget — our counselors will recommend the best-fit universities in ",
          program.shortName,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "mt-5 inline-flex items-center gap-2 rounded-xl bg-white text-[#0A3D62] text-sm font-semibold px-5 py-2.5 hover:bg-white/90 transition", children: [
          "Enquire Now ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) })
  ] }, program.id);
}
function UniversityAdmissionsPage() {
  const [activeId, setActiveId] = reactExports.useState("caribbean");
  const [search, setSearch] = reactExports.useState("");
  const [region, setRegion] = reactExports.useState("All");
  const detailRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && mbbsPrograms.some((p) => p.id === hash)) {
      setActiveId(hash);
    }
  }, []);
  const filteredPrograms = reactExports.useMemo(() => {
    const q = search.trim().toLowerCase();
    return mbbsPrograms.filter((p) => {
      const matchesRegion = region === "All" || p.region === region;
      const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.shortName.toLowerCase().includes(q) || p.subtitle?.toLowerCase().includes(q);
      return matchesRegion && matchesSearch;
    }).sort((a, b) => a.shortName.localeCompare(b.shortName));
  }, [search, region]);
  const activeProgram = mbbsPrograms.find((p) => p.id === activeId) ?? filteredPrograms[0] ?? mbbsPrograms[0];
  const selectProgram = (id) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80", alt: "Medical Admissions", className: "w-full h-full object-cover opacity-45" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/15 blur-3xl z-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-3.5 w-3.5 text-[#F4B400]" }),
            "Medical Admissions"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white", children: [
            "Study",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent", children: "MBBS / MD" }),
            " ",
            "abroad"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed", children: "Picking the right destination, and where you want to practice medicine, will be the key factor in your successful medical career ahead! Explore program details below and connect with our dedicated team for MBBS & MD guidance." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.1
        }, className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#programs", className: "inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 hover:bg-white/15 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-4 w-4 text-[#F4B400]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-white", children: [
              mbbsPrograms.length,
              " Destinations"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/mbbs-to-md", className: "inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 hover:bg-white/15 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 text-[#F4B400]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-white", children: "MBBS to MD Pathway" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/usmle", className: "inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 hover:bg-white/15 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCheck, { className: "h-4 w-4 text-[#F4B400]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-white", children: "USMLE Coaching" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-[#F4B400]/20 border border-[#F4B400]/40 px-4 py-2 hover:bg-[#F4B400]/30 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-4 w-4 text-[#F4B400]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-white", children: "Expert Guidance" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "programs", className: "py-14 md:py-20 bg-slate-50/70 scroll-mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Medical programs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]", children: "Choose your destination" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-slate-600 max-w-xl", children: [
            "Search or filter by region, then tap a destination to view details.",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/mbbs-to-md", className: "font-semibold text-[#4DA8DA] hover:underline", children: "MBBS to MD pathways →" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full lg:max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "search", placeholder: "Search country or university...", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full rounded-xl border border-slate-200 bg-white pl-10 pr-10 py-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4DA8DA]/40 focus:border-[#4DA8DA]" }),
          search && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSearch(""), className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600", "aria-label": "Clear search", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setRegion("All"), className: `rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${region === "All" ? "gradient-primary text-white shadow-glow" : "bg-white text-slate-600 border border-slate-200 hover:border-[#4DA8DA]/40"}`, children: [
          "All (",
          mbbsPrograms.length,
          ")"
        ] }),
        programRegions.map((r) => {
          const count = mbbsPrograms.filter((p) => p.region === r).length;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setRegion(r), className: `rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${region === r ? "gradient-primary text-white shadow-glow" : "bg-white text-slate-600 border border-slate-200 hover:border-[#4DA8DA]/40"}`, children: [
            r,
            " (",
            count,
            ")"
          ] }, r);
        })
      ] }) }),
      filteredPrograms.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-[repeat(auto-fill,minmax(108px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(118px,1fr))] gap-2", children: filteredPrograms.map((program) => {
        const isActive = program.id === activeId;
        const detailed = programHasDetails(program);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => selectProgram(program.id), className: `group relative overflow-hidden text-left rounded-xl border h-[118px] sm:h-[124px] transition-all duration-300 ${isActive ? "border-[#F4B400] shadow-glow ring-2 ring-[#F4B400]/50" : "border-slate-200/80 hover:border-[#4DA8DA]/60 hover:-translate-y-0.5 hover:shadow-soft"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: program.image, alt: program.shortName, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 transition-colors duration-300 ${isActive ? "bg-gradient-to-t from-[#0A3D62]/95 via-[#0A3D62]/50 to-[#0A3D62]/20" : "bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10 group-hover:from-[#0A3D62]/90"}` }),
          program.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1.5 right-1.5 z-10 rounded-full bg-[#F4B400] px-1.5 py-0.5 text-[9px] font-bold text-[#0A3D62] shadow", children: "Popular" }),
          detailed && !program.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1.5 right-1.5 z-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-1.5 py-0.5 text-[9px] font-semibold text-white", children: "Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-full flex-col justify-end p-2 sm:p-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[11px] sm:text-xs leading-tight text-white drop-shadow line-clamp-2", children: program.shortName }),
            program.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[9px] text-white/80 line-clamp-1", children: program.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[9px] font-medium text-white/60 line-clamp-1", children: program.region })
          ] })
        ] }, program.id);
      }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-10 w-10 text-slate-300 mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-semibold text-[#0A3D62]", children: "No destinations found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-slate-500", children: "Try a different search term or clear filters." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
          setSearch("");
          setRegion("All");
        }, className: "mt-4 text-sm font-semibold text-[#4DA8DA] hover:underline", children: "Reset filters" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: detailRef, className: "mt-10 scroll-mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramDetailPanel, { program: activeProgram }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-primary p-8 md:p-12 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#F4B400]/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-10 w-10 text-[#F4B400]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl sm:text-3xl font-extrabold", children: "Your preferred program, university & country" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/85 leading-relaxed", children: partnerNote }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-[#0A3D62] text-sm font-semibold px-6 py-3.5 hover:bg-white/90 transition", children: [
          "Tell Us Your Preference ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  UniversityAdmissionsPage as component
};

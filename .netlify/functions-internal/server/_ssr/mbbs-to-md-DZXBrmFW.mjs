import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar, R as Reveal, F as Footer } from "./Reveal-BR6Ce8yz.mjs";
import { P as PARTNER_NOTE } from "./router-DSxx-_6s.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { ae as Stethoscope, s as BookOpen, A as ArrowRight, G as GraduationCap, C as CircleCheck, Q as Building2, a as MessageCircle } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const mbbsToMdPathways = [
  {
    university: "The Medical University of Americas (MUA)",
    location: "St. Kitts & Nevis",
    summary: "Eligible MBBS graduates may transfer into the MD program with advanced standing. The curriculum prepares graduates for professional practice in the U.S. and Canada, with early clinical exposure before U.S. rotations and residency.",
    journey: [
      "Join the 5th semester of the MD program for 4 months at Nevis.",
      "Successfully clear USMLE Step 1.",
      "Complete MD semesters 6–10 with clinical rotations at U.S. teaching hospitals."
    ],
    highlights: [
      "96% sustained residency placement rate (2021–2023).",
      "7:1 student-to-faculty ratio.",
      "Clinical network of 25+ teaching hospitals in the USA."
    ],
    scholarships: ["International Grant of $15,000 USD per semester for eligible applicants."],
    entryRequirements: [
      "MBBS degree from a recognized university.",
      "Transfer statement from your medical school.",
      "Valid passport copy.",
      "Valid ECFMG certificate (if available).",
      "English proficiency: IELTS / TOEFL / OET.",
      "CV / Resume."
    ]
  },
  {
    university: "Rajiv Gandhi University School of Medicine",
    location: "Guyana, South America",
    summary: "A structured bridge for MBBS graduates seeking U.S. licensing readiness, clinical exposure, and residency placement support.",
    highlights: [
      "Refresh degree and dedicated USMLE preparation course.",
      "USA clinical rotations with U-World 100% Q-bank access.",
      "Live interactive sessions with expert USMLE faculty.",
      "Regular NBME-based assessments and personalized mentorship.",
      "Small batch size with dedicated student support."
    ],
    entryRequirements: [
      "MBBS degree from a recognized university.",
      "Transfer statement from your medical school.",
      "Valid passport copy.",
      "Valid ECFMG certificate (if available).",
      "English proficiency: IELTS / TOEFL / OET.",
      "CV / Resume."
    ]
  }
];
function MbbsToMdPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/destinations/dest-caribbean.png", alt: "MBBS to MD pathway", className: "w-full h-full object-cover opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-3.5 w-3.5 text-[#F4B400]" }),
          "Medical Admissions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white", children: [
          "MBBS to MD",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent", children: "Pathway Programs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed", children: "Your bridge to MD advanced standing — USMLE preparation, U.S. clinical rotations, and residency placement support for eligible MBBS graduates." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/university-admissions", className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4DA8DA] hover:text-white transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }),
          "Explore all medical destinations ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 space-y-10", children: mbbsToMdPathways.map((pathway, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-slate-200 bg-white shadow-soft overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-6 py-5 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl gradient-primary grid place-items-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold text-[#0A3D62]", children: pathway.university }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#4DA8DA] font-medium", children: pathway.location })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-relaxed", children: pathway.summary }),
        pathway.journey && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "section-label mb-3", children: "Student journey" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-2", children: pathway.journey.map((step, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm text-slate-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 h-6 w-6 rounded-full bg-[#0A3D62]/10 text-[#0A3D62] text-xs font-bold grid place-items-center", children: j + 1 }),
            step
          ] }, step)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "section-label mb-3", children: "Highlights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-3", children: pathway.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3 text-sm text-slate-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0 text-[#4DA8DA] mt-0.5" }),
            h
          ] }, h)) })
        ] }),
        pathway.scholarships && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "section-label mb-3", children: "Scholarships" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: pathway.scholarships.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-slate-700 flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 shrink-0 text-[#F4B400] mt-0.5" }),
            s
          ] }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "section-label mb-3", children: "Entry requirements" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: pathway.entryRequirements.map((req) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-slate-600 flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0 text-emerald-500 mt-0.5" }),
            req
          ] }, req)) })
        ] })
      ] })
    ] }) }, pathway.university)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-primary p-8 md:p-12 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80 leading-relaxed max-w-3xl", children: PARTNER_NOTE }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-white text-[#0A3D62] text-sm font-semibold px-6 py-3.5 hover:bg-white/90 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
        "Enquire About MBBS to MD ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  MbbsToMdPage as component
};

import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as trainingTests, N as Navbar, R as Reveal, F as Footer } from "./Reveal-BR6Ce8yz.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { s as BookOpen, A as ArrowRight, t as Clock, u as Monitor, e as Calendar, m as Award, h as FileText, C as CircleCheck, n as Sparkles, a as MessageCircle, v as Headphones, w as PenTool, g as MessageSquare, x as Atom, y as Beaker, D as Dna, z as Cpu, V as Video, J as Binary } from "../_libs/lucide-react.mjs";
const getSectionIcon = (name) => {
  const norm = name.toLowerCase();
  if (norm.includes("reading")) return BookOpen;
  if (norm.includes("listening")) return Headphones;
  if (norm.includes("writing")) return PenTool;
  if (norm.includes("speaking")) return MessageSquare;
  if (norm.includes("physics")) return Atom;
  if (norm.includes("chemistry")) return Beaker;
  if (norm.includes("biology")) return Dna;
  if (norm.includes("adaptive")) return Cpu;
  if (norm.includes("sample")) return Video;
  if (norm.includes("quant")) return Binary;
  if (norm.includes("verbal")) return BookOpen;
  return FileText;
};
function IndividualTestPage({ testId }) {
  const currentTest = trainingTests.find((t) => t.id === testId) || trainingTests[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: currentTest.heroImage,
            alt: `${currentTest.label} Coaching & Preparation`,
            className: "w-full h-full object-cover opacity-50 object-right md:object-center"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent md:hidden" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/15 blur-3xl z-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3.5 w-3.5 text-[#F4B400]" }),
          "Training & Tests Preparation"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white", children: [
          currentTest.label,
          " Coaching &",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent", children: "Preparation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed", children: [
          "Ace your ",
          currentTest.label,
          " exam under the guidance of certified trainers. Structured curriculum, mock tests, and personalized reviews."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "/contact",
            className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-semibold px-6 py-3.5 shadow-glow hover:scale-[1.02] transition duration-200",
            children: [
              "Book Free Consultation ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 md:py-20 bg-slate-50/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl gradient-primary grid place-items-center text-white shadow-glow shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(currentTest.icon, { className: "h-7 w-7" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: currentTest.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-extrabold text-[#0A3D62] mt-1", children: [
                  currentTest.fullTitle,
                  " (",
                  currentTest.label,
                  ")"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-slate-600 leading-relaxed text-base md:text-lg whitespace-pre-line", children: currentTest.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-100 pt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-50 border border-slate-100/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-slate-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-[#4DA8DA]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Duration" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm font-extrabold text-[#0A3D62] leading-tight", children: currentTest.duration })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-50 border border-slate-100/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-slate-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "h-4 w-4 text-[#4DA8DA]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Exam Mode" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm font-extrabold text-[#0A3D62] leading-tight", children: currentTest.mode })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-50 border border-slate-100/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-slate-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-[#4DA8DA]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Validity" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm font-extrabold text-[#0A3D62] leading-tight", children: currentTest.validity })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-slate-50 border border-slate-100/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-slate-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4 text-[#4DA8DA]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Scoring" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm font-extrabold text-[#0A3D62] leading-tight", children: currentTest.scoring })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-extrabold text-[#0A3D62] mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5 text-[#4DA8DA]" }),
            "Exam Structure & Format"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: currentTest.sections.map((sec) => {
            const Icon = getSectionIcon(sec.name);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-2xl border border-slate-100 bg-slate-50/40 p-5 hover:bg-white hover:border-[#4DA8DA]/30 hover:shadow-soft transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#4DA8DA] group-hover:bg-[#4DA8DA] group-hover:text-white transition-colors duration-300 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#4DA8DA]/10 text-[#0A3D62]", children: sec.duration })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-[#0A3D62] text-sm sm:text-base mb-2 group-hover:text-[#4DA8DA] transition-colors duration-200", children: sec.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: sec.details })
            ] }, sec.name);
          }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-extrabold text-[#0A3D62] mb-5", children: currentTest.id === "ielts" ? "Why Take IELTS?" : "Key Highlights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: currentTest.highlights.map((h, idx) => {
            const splitIdx = h.indexOf(":");
            if (splitIdx !== -1) {
              const title = h.substring(0, splitIdx);
              const rest = h.substring(splitIdx + 1);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-slate-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 shrink-0 text-[#F4B400] mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-[#0A3D62]", children: [
                    title,
                    ":"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: rest })
                ] })
              ] }, idx);
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-slate-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 shrink-0 text-[#F4B400] mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h })
            ] }, idx);
          }) })
        ] }) }),
        currentTest.types && currentTest.types.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-extrabold text-[#0A3D62] mb-5", children: [
            "Types of ",
            currentTest.label,
            " Tests"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: currentTest.types.map((type, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-100 bg-slate-50/50 p-5 hover:border-[#4DA8DA]/30 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-[#0A3D62] text-sm mb-1", children: type.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-600 leading-relaxed", children: type.desc })
          ] }, idx)) })
        ] }) }),
        currentTest.tips && currentTest.tips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-extrabold text-[#0A3D62] mb-5", children: [
            "Tips for ",
            currentTest.label,
            " Prep"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3.5", children: currentTest.tips.map((tip, idx) => {
            const splitIdx = tip.indexOf(":");
            if (splitIdx !== -1) {
              const title = tip.substring(0, splitIdx);
              const rest = tip.substring(splitIdx + 1);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-xs text-slate-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 shrink-0 text-[#F4B400] mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-[#0A3D62]", children: [
                    title,
                    ":"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: rest })
                ] })
              ] }, idx);
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-xs text-slate-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 shrink-0 text-[#F4B400] mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tip })
            ] }, idx);
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-extrabold text-[#0A3D62] mb-5 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-[#F4B400]" }),
            "Why Shakthi Academy?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3.5", children: currentTest.whyShakthi.map((why, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-xs text-slate-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0 text-[#4DA8DA] mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: why })
          ] }, idx)) })
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-primary text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: currentTest.heroImage,
          alt: "",
          "aria-hidden": true,
          className: "absolute inset-0 w-full h-full object-cover opacity-20"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#F4B400]/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-8 md:p-12 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-10 w-10 text-[#F4B400]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-2xl sm:text-3xl font-extrabold", children: [
          currentTest.label,
          " Coaching & Preparation"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/85 leading-relaxed", children: currentTest.contactHeading }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "/contact",
            className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-[#0A3D62] text-sm font-semibold px-6 py-3.5 hover:bg-white/90 transition",
            children: [
              "Book Free Consultation ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  IndividualTestPage as I
};

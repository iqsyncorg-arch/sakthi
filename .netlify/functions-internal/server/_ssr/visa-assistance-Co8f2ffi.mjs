import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, R as Reveal, F as Footer } from "./Reveal-BR6Ce8yz.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { F as FileCheckCorner, a as MessageCircle, H as House, A as ArrowRight, b as Users, S as ShieldAlert, c as FolderOpen, E as Earth, d as Plane, W as Wallet, T as TriangleAlert, R as Radar, e as Calendar, f as RefreshCw, g as MessageSquare, h as FileText, C as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const visaIntro = "Shakthi Academy, as an education consulting company, can play a crucial role in guiding students through the often-complex visa application process. Here's how we support you every step of the way.";
const visaClosing = "By providing these services, Shakthi Academy can significantly reduce the stress and uncertainty associated with the visa application process, increasing the chances of students obtaining their visas successfully.";
const visaSections = [
  {
    id: "guidance",
    title: "Comprehensive Visa Guidance",
    summary: "Expert support tailored to your destination country's requirements.",
    items: [
      {
        title: "Country-specific expertise",
        desc: "Understanding the visa requirements, procedures, and timelines for different countries."
      },
      {
        title: "Documentation assistance",
        desc: "Helping students gather all necessary documents, such as financial statements, academic transcripts, and letters of recommendation."
      },
      {
        title: "Application form completion",
        desc: "Providing support in accurately filling out visa application forms."
      },
      {
        title: "Interview preparation",
        desc: "Offering tips and practice sessions for visa interviews."
      },
      {
        title: "Visa refusal handling",
        desc: "Assisting students in understanding the reasons for visa rejection and reapplying."
      }
    ]
  },
  {
    id: "process",
    title: "Streamlined Process",
    summary: "Organized workflows so nothing falls through the cracks.",
    items: [
      {
        title: "Efficient document management",
        desc: "Organizing and managing student documents to ensure timely submission."
      },
      {
        title: "Appointment scheduling",
        desc: "Booking visa appointments and managing the application timeline."
      },
      {
        title: "Visa tracking",
        desc: "Monitoring the visa application status and providing updates to students."
      }
    ]
  },
  {
    id: "risk",
    title: "Risk Mitigation",
    summary: "Proactive measures to avoid delays and rejections.",
    items: [
      {
        title: "Visa policy updates",
        desc: "Keeping students informed about changes in visa regulations and requirements."
      },
      {
        title: "Error prevention",
        desc: "Identifying potential errors in the application process and providing corrective measures."
      },
      {
        title: "Financial security",
        desc: "Ensuring students are aware of potential financial risks and providing guidance on financial documentation."
      }
    ]
  },
  {
    id: "support",
    title: "Additional Support",
    summary: "Care that continues beyond visa approval.",
    items: [
      {
        title: "Post-arrival assistance",
        desc: "Offering guidance on accommodation, airport pick-up, and other initial arrangements."
      },
      {
        title: "Student support network",
        desc: "Connecting students with other students for peer support and information sharing."
      }
    ]
  }
];
const visaHighlights = [
  { label: "Success Rate", value: "98%" },
  { label: "Countries Covered", value: "25+" },
  { label: "End-to-End", value: "Full support" },
  { label: "Reapplication", value: "Refusal help" }
];
const visaImages = {
  hero: "/visa/visa-hero.png",
  intro: "/visa/visa-intro.png",
  whyChooseUs: "/visa/visa-guidance.png",
  sections: {
    guidance: "/visa/visa-guidance.png",
    process: "/visa/visa-process.png",
    risk: "/visa/visa-risk.png",
    support: "/visa/visa-support.png"
  }
};
const itemIcons = {
  "Country-specific expertise": Earth,
  "Documentation assistance": FileText,
  "Application form completion": FileCheckCorner,
  "Interview preparation": MessageSquare,
  "Visa refusal handling": RefreshCw,
  "Efficient document management": FolderOpen,
  "Appointment scheduling": Calendar,
  "Visa tracking": Radar,
  "Visa policy updates": ShieldAlert,
  "Error prevention": TriangleAlert,
  "Financial security": Wallet,
  "Post-arrival assistance": Plane,
  "Student support network": Users
};
const sectionIcons = {
  guidance: Earth,
  process: FolderOpen,
  risk: ShieldAlert,
  support: Users
};
function ServiceSectionBlock({
  section
}) {
  const SectionIcon = sectionIcons[section.id] ?? FileCheckCorner;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white border border-slate-100 shadow-soft overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 sm:h-52", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: visaImages.sections[section.id], alt: section.title, loading: "lazy", className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#0A3D62]/90 via-[#0A3D62]/70 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center px-6 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 grid place-items-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionIcon, { className: "h-6 w-6 text-[#F4B400]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-extrabold text-white", children: section.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80 mt-0.5", children: section.summary })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 md:p-8 grid sm:grid-cols-2 gap-4", children: section.items.map((item) => {
      const Icon = itemIcons[item.title] ?? CircleCheck;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-slate-100 p-5 hover:border-[#4DA8DA]/30 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 h-10 w-10 rounded-xl bg-[#0A3D62]/8 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-[#4DA8DA]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[#0A3D62]", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-slate-600 leading-relaxed", children: item.desc })
        ] })
      ] }) }, item.title);
    }) })
  ] });
}
function VisaAssistancePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950 min-h-[85vh] flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: visaImages.hero, alt: "Visa assistance for students studying abroad", className: "w-full h-full object-cover opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/20 blur-3xl z-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-4 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheckCorner, { className: "h-3.5 w-3.5 text-[#F4B400]" }),
            "Visa Assistance"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white", children: [
            "How Shakthi Academy assists students with the",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent", children: "visa process" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed", children: "From documentation to interview prep and reapplication — we guide you through every step with confidence." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
            "Get Visa Support"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-3 max-w-md", children: visaHighlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/10 border border-white/15 px-4 py-3 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-extrabold text-[#F4B400]", children: h.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-white/70 mt-0.5", children: h.label })
          ] }, h.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          x: 20
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          delay: 0.15
        }, className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: visaImages.intro, alt: "Visa counseling session", className: "w-full aspect-[4/3] object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 left-5 right-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-lg", children: "Expert visa counseling" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 text-sm mt-1", children: "Personalized guidance for every destination" })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-3xl overflow-hidden border border-slate-100 shadow-soft order-2 lg:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: visaImages.whyChooseUs, alt: "Visa guidance consultation with a student advisor", className: "w-full aspect-[4/3] object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-1 lg:order-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Why choose us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]", children: "Your trusted visa partner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-600 leading-relaxed text-base md:text-lg", children: visaIntro })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 md:py-20 bg-slate-50/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Our visa services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]", children: "End-to-end visa support" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-8", children: visaSections.map((section, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceSectionBlock, { section }) }, section.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-relaxed text-base md:text-lg max-w-4xl", children: visaClosing }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-primary text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: visaImages.hero, alt: "", "aria-hidden": true, className: "absolute inset-0 w-full h-full object-cover opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#F4B400]/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-8 md:p-12 max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-10 w-10 text-[#F4B400]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl sm:text-3xl font-extrabold", children: "Ready to start your visa application?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/85 leading-relaxed", children: "Speak with our visa specialists for personalized guidance on your destination country, documentation checklist, and timeline." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-[#0A3D62] text-sm font-semibold px-6 py-3.5 hover:bg-white/90 transition", children: [
            "Book Free Consultation ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  VisaAssistancePage as component
};

import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, R as Reveal, F as Footer } from "./Reveal-BR6Ce8yz.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { d as Plane, a as MessageCircle, A as ArrowRight, Z as Luggage, _ as Map, v as Headphones, $ as Compass, a0 as Car, Q as Building2, a1 as Package, a2 as HeartPulse, F as FileCheckCorner, a3 as Coins, a4 as Shield, H as House, E as Earth, C as CircleCheck } from "../_libs/lucide-react.mjs";
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
const travelIntro = "As an overseas education consulting company, Shakthi Academy can provide invaluable support to students in navigating the complexities of international travel. Here's how we help you every step of the way.";
const travelClosing = "By offering these services, Shakthi Academy can significantly reduce the stress and hassle associated with international travel, allowing students to focus on their academic pursuits.";
const travelSections = [
  {
    id: "pre-travel",
    title: "Pre-Travel Assistance",
    summary: "Everything you need before you board your flight.",
    items: [
      {
        title: "Destination guidance",
        desc: "Providing information about your chosen destination, including climate, culture, cost of living, and safety."
      },
      {
        title: "Travel itinerary planning",
        desc: "Assisting students in creating a travel itinerary based on their academic goals and personal interests."
      },
      {
        title: "Flight booking",
        desc: "Offering guidance on flight options, booking, and baggage allowances."
      },
      {
        title: "Accommodation arrangements",
        desc: "Helping students find suitable accommodation options, such as student housing or off-campus apartments."
      },
      {
        title: "Travel insurance recommendations",
        desc: "Advising students on the importance of travel insurance and recommending suitable plans."
      },
      {
        title: "Currency exchange guidance",
        desc: "Providing information on currency exchange rates and options."
      }
    ]
  },
  {
    id: "travel-support",
    title: "Travel Support",
    summary: "Confident departure with the right documents and preparation.",
    items: [
      {
        title: "Visa and passport assistance",
        desc: "Ensuring students have the necessary documentation for their travel."
      },
      {
        title: "Health and safety briefings",
        desc: "Providing information on health precautions, vaccinations, and emergency contacts."
      },
      {
        title: "Packing advice",
        desc: "Offering tips on what to pack for their journey."
      },
      {
        title: "Airport assistance",
        desc: "Providing guidance on airport procedures, check-in, and security."
      }
    ]
  },
  {
    id: "post-travel",
    title: "Post-Travel Support",
    summary: "A smooth landing and a confident start abroad.",
    items: [
      {
        title: "Arrival assistance",
        desc: "Offering support upon arrival, such as airport pick-up or accommodation check-in."
      },
      {
        title: "Orientation assistance",
        desc: "Helping students acclimate to their new environment through orientation programs or resources."
      },
      {
        title: "Ongoing support",
        desc: "Providing continued support and guidance throughout their stay abroad."
      }
    ]
  }
];
const itemIcons = {
  "Destination guidance": Earth,
  "Travel itinerary planning": Map,
  "Flight booking": Plane,
  "Accommodation arrangements": House,
  "Travel insurance recommendations": Shield,
  "Currency exchange guidance": Coins,
  "Visa and passport assistance": FileCheckCorner,
  "Health and safety briefings": HeartPulse,
  "Packing advice": Package,
  "Airport assistance": Building2,
  "Arrival assistance": Car,
  "Orientation assistance": Compass,
  "Ongoing support": Headphones
};
const sectionIcons = {
  "pre-travel": Map,
  "travel-support": Plane,
  "post-travel": Luggage
};
function ServiceSectionBlock({
  section
}) {
  const SectionIcon = sectionIcons[section.id] ?? Plane;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white border border-slate-100 shadow-soft overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-6 py-5 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl gradient-primary grid place-items-center text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionIcon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-extrabold text-[#0A3D62]", children: section.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 mt-0.5", children: section.summary })
      ] })
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
function TravelAssistancePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80", alt: "Personalized Travel Assistance", className: "w-full h-full object-cover opacity-45" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/15 blur-3xl z-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "h-3.5 w-3.5 text-[#F4B400]" }),
          "Personalized Travel Assistance"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white", children: [
          "How Shakthi Academy assists students with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent", children: "travel" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed", children: "From pre-travel planning to post-arrival support — we handle the logistics so you can focus on your studies." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          "Get Travel Support"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Why choose us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]", children: "Your travel companion abroad" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-600 leading-relaxed text-base md:text-lg", children: travelIntro })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 md:py-20 bg-slate-50/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Our travel services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]", children: "End-to-end travel support" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-8", children: travelSections.map((section, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceSectionBlock, { section }) }, section.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-relaxed text-base md:text-lg max-w-4xl", children: travelClosing }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-primary text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#F4B400]/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-8 md:p-12 max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "h-10 w-10 text-[#F4B400]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl sm:text-3xl font-extrabold", children: "Ready to plan your journey abroad?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/85 leading-relaxed", children: "Speak with our travel specialists for personalized guidance on flights, accommodation, insurance, and arrival support." }),
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
  TravelAssistancePage as component
};

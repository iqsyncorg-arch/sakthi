import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, R as Reveal, F as Footer } from "./Reveal-BR6Ce8yz.mjs";
import { o as otherProgramsAlphabeticalPartners, i as introParagraphs, p as programStreams, s as stemCourses, a as phdCourses, b as pgCourses, u as ugCourses, c as partnerNote, d as stemWhyStudy, e as stemServices, f as popularStemCourses, g as universitySpecificPrograms } from "./other-programs-BzBgGpcj.mjs";
import { a as apiSubmitInquiry } from "./router-DSxx-_6s.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { aa as School, P as Phone, ab as Microscope, ac as FlaskConical, G as GraduationCap, s as BookOpen, C as CircleCheck, O as Search, E as Earth, ad as ChevronRight, X, t as Clock, a7 as Check, U as User, M as Mail, H as House, A as ArrowRight, z as Cpu } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const bhmsHighlights = [
  "Accredited by Institute of Hospitality.",
  "BHMS is an eduQua certified institute in the State of Lucerne.",
  "eduQua is the Swiss Association for Quality & Management Systems (SQS), certifying education institutions in Switzerland.",
  "Industry Internship BSc (Hons.) with four pillars: quality education, assured internship, personal development, and international career placement.",
  "Global Rank #12 for Hospitality & Leisure Management.",
  "Employer Reputation #7 globally in the hospitality sector.",
  "5-Star institution overall; Masters in Management #151–200 globally."
];
const bhmsPillars = [
  {
    title: "Quality Education",
    desc: "Academic and theoretical knowledge for the global hospitality and service management industry."
  },
  {
    title: "Assured Internship",
    desc: "Apply classroom knowledge in real workplace settings through structured industry placements."
  },
  {
    title: "Personal Development",
    desc: "Soft skills, social skills, and discipline that motivate and strengthen students to succeed."
  },
  {
    title: "Career Placement",
    desc: "The successful outcome of all three pillars — a successful international career placement."
  }
];
const bhmsAccreditationLabels = [
  "Institute of Hospitality",
  "eduQua (SQS)",
  "QS Hospitality #12",
  "Employer Reputation #7"
];
const streamMeta = {
  UG: {
    label: "Undergraduate",
    title: "Undergraduate (UG) Courses",
    icon: BookOpen,
    rows: ugCourses
  },
  PG: {
    label: "Postgraduate",
    title: "Postgraduate (PG) Courses",
    icon: GraduationCap,
    rows: pgCourses
  },
  PhD: {
    label: "Doctoral",
    title: "Doctoral (PhD) Courses",
    icon: FlaskConical,
    rows: phdCourses
  },
  STEM: {
    label: "STEM",
    title: "STEM Courses Abroad",
    icon: Microscope,
    rows: stemCourses
  }
};
function CourseTable({
  rows
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-2xl border border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[600px] text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3.5 font-bold text-[#0A3D62] w-[30%]", children: "Field" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3.5 font-bold text-[#0A3D62]", children: "Courses" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.tr, { initial: {
      opacity: 0,
      x: -8
    }, animate: {
      opacity: 1,
      x: 0
    }, transition: {
      delay: i * 0.04,
      duration: 0.2
    }, className: i % 2 === 0 ? "bg-white" : "bg-slate-50/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 font-semibold text-[#0A3D62] align-top border-t border-slate-100", children: row.field }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-slate-600 leading-relaxed align-top border-t border-slate-100", children: row.courses })
    ] }, row.field)) })
  ] }) });
}
function StemSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-relaxed text-base md:text-lg", children: "STEM (Science, Technology, Engineering, and Mathematics) courses have gained immense popularity worldwide due to their practical applications and career prospects. Studying STEM abroad offers a unique opportunity to delve deeper into these fields and gain valuable international experience. Shakthi Academy can provide invaluable guidance and support throughout this journey." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "section-label mb-4", children: "Why study STEM abroad?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: stemWhyStudy.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: idx * 0.05,
        duration: 0.2
      }, whileHover: {
        y: -3
      }, className: "rounded-xl bg-slate-50 border border-slate-100 p-5 hover:border-[#4DA8DA]/30 hover:shadow-soft transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[#0A3D62]", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-slate-600 leading-relaxed", children: item.desc })
      ] }, item.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "section-label mb-4", children: "How Shakthi Academy helps" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-3", children: stemServices.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { initial: {
        opacity: 0,
        x: -8
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        delay: idx * 0.04,
        duration: 0.2
      }, className: "flex items-start gap-2.5 text-sm text-slate-700 rounded-xl border border-slate-100 px-4 py-3 bg-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0 text-[#4DA8DA] mt-0.5" }),
        item
      ] }, item)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "section-label mb-4", children: "Popular STEM courses abroad" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: popularStemCourses.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: idx * 0.05,
        duration: 0.2
      }, whileHover: {
        y: -3
      }, className: "rounded-xl border border-slate-100 p-5 hover:border-[#4DA8DA]/30 hover:shadow-soft bg-white transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-4 w-4 text-[#4DA8DA]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[#0A3D62]", children: item.field })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600 leading-relaxed", children: item.courses })
      ] }, item.field)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-relaxed", children: "Studying STEM courses abroad can be a transformative experience, providing students with the knowledge, skills, and global perspective needed to succeed in today's competitive job market. With the support of Shakthi Academy, aspiring STEM students can navigate the application process, explore diverse opportunities, and embark on a fulfilling academic journey." })
  ] });
}
function partnerLocationLabel(uni) {
  return uni.state ? `${uni.state}, ${uni.country}` : uni.country;
}
const partnerUniversities = otherProgramsAlphabeticalPartners;
function getProgramsForUniversity(uniName) {
  const nameLower = uniName.toLowerCase().trim();
  const keys = Object.keys(universitySpecificPrograms);
  const exact = keys.find((key) => key.toLowerCase() === nameLower);
  if (exact) return universitySpecificPrograms[exact];
  const alias = keys.filter((key) => {
    const k = key.toLowerCase();
    const [shorter, longer] = nameLower.length <= k.length ? [nameLower, k] : [k, nameLower];
    if (!longer.startsWith(shorter)) return false;
    const rest = longer.slice(shorter.length);
    if (nameLower === shorter) {
      return /^\s*\([^)-]+\)$/.test(rest);
    }
    return /^\s*(\(|-|–)/.test(rest);
  }).sort((a, b) => b.length - a.length)[0];
  if (alias && universitySpecificPrograms[alias]) {
    return universitySpecificPrograms[alias];
  }
  const name = uniName.toLowerCase();
  if (name.includes("business") || name.includes("management") || name.includes("school") || name.includes("icn") || name.includes("idrac")) {
    return [{
      degree: "Undergraduate",
      title: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      stream: "Management"
    }, {
      degree: "Undergraduate",
      title: "B.Sc. in Hospitality & Hotel Management",
      duration: "3 Years",
      stream: "Hospitality"
    }, {
      degree: "Postgraduate",
      title: "Master of Business Administration (MBA)",
      duration: "1-2 Years",
      stream: "Management"
    }, {
      degree: "Postgraduate",
      title: "M.Sc. in International Finance & Marketing",
      duration: "1.5 Years",
      stream: "Finance"
    }];
  } else if (name.includes("technical") || name.includes("aviation") || name.includes("technology") || name.includes("applied") || name.includes("engineering") || name.includes("epsi") || name.includes("estiam") || name.includes("telecommunication")) {
    return [{
      degree: "Undergraduate",
      title: "B.Sc. in Computer Science & AI",
      duration: "3 Years",
      stream: "IT & Tech"
    }, {
      degree: "Undergraduate",
      title: "Bachelor of Engineering (B.Eng) in Tech",
      duration: "4 Years",
      stream: "Engineering"
    }, {
      degree: "Postgraduate",
      title: "M.Sc. in Data Science & Cyber Security",
      duration: "2 Years",
      stream: "STEM"
    }, {
      degree: "Postgraduate",
      title: "Master in Software Engineering",
      duration: "2 Years",
      stream: "IT & Tech"
    }];
  } else {
    return [{
      degree: "Undergraduate",
      title: "B.Sc. in Biotechnology & Applied Genetics",
      duration: "3 Years",
      stream: "Science"
    }, {
      degree: "Undergraduate",
      title: "Bachelor of Arts (BA) in Psychology",
      duration: "3 Years",
      stream: "Humanities"
    }, {
      degree: "Postgraduate",
      title: "M.Sc. in Environmental Sciences",
      duration: "2 Years",
      stream: "Science"
    }, {
      degree: "Postgraduate",
      title: "Master of Laws (LL.M.) in International Law",
      duration: "1.5 Years",
      stream: "Law"
    }, {
      degree: "Doctoral",
      title: "PhD in Economics & Social Sciences",
      duration: "3-4 Years",
      stream: "PhD"
    }];
  }
}
function OtherProgramsPage() {
  const [activeStream, setActiveStream] = reactExports.useState("UG");
  const [search, setSearch] = reactExports.useState("");
  const [activeLetter, setActiveLetter] = reactExports.useState("All");
  const [activeCountry, setActiveCountry] = reactExports.useState("All");
  const [selectedUni, setSelectedUni] = reactExports.useState(null);
  const [formSubmitted, setFormSubmitted] = reactExports.useState(false);
  const [leadForm, setLeadForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    year: "2026",
    message: ""
  });
  const partnerCountries = [...new Set(partnerUniversities.map((u) => u.country).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const filteredPartners = partnerUniversities.filter((uni) => {
    const matchesLetter = activeLetter === "All" || uni.name.toUpperCase().startsWith(activeLetter);
    const matchesCountry = activeCountry === "All" || uni.country === activeCountry;
    const q = search.toLowerCase().trim();
    const location = partnerLocationLabel(uni).toLowerCase();
    const matchesSearch = !q || uni.name.toLowerCase().includes(q) || uni.country.toLowerCase().includes(q) || (uni.state?.toLowerCase().includes(q) ?? false) || location.includes(q) || q === "usa" && uni.country.toLowerCase() === "usa" || q.includes("united states") && uni.country.toLowerCase() === "usa";
    return matchesLetter && matchesCountry && matchesSearch;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/other-programs-hero.png", alt: "Other Programs & Universities", className: "w-full h-full object-cover opacity-45" }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(School, { className: "h-3.5 w-3.5 text-[#F4B400]" }),
          "Other Programs & Universities"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white", children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent", children: "Programs for every passion" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed", children: "UG, PG, PhD and STEM courses across reputed universities worldwide — tailored to your goals, qualifications, and budget." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+917993473399", className: "mt-8 inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          "Call Us"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl space-y-4", children: introParagraphs.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-relaxed text-base md:text-lg", children: p }, p.slice(0, 40))) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-3", children: programStreams.map((s) => {
        const Icon = streamMeta[s].icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-[#0A3D62]/8 border border-[#0A3D62]/10 px-4 py-2 text-sm font-semibold text-[#0A3D62]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-[#4DA8DA]" }),
          streamMeta[s].label
        ] }, s);
      }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 md:py-20 bg-slate-50/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Streams / Courses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]", children: "UG / PG / PhD / STEM" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: programStreams.map((s) => {
        const Icon = streamMeta[s].icon;
        const isActive = activeStream === s;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { whileHover: {
          scale: 1.04
        }, whileTap: {
          scale: 0.96
        }, type: "button", onClick: () => setActiveStream(s), className: `inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${isActive ? "gradient-primary text-white shadow-glow" : "bg-white text-slate-650 border border-slate-200 hover:border-[#4DA8DA]/45"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
          streamMeta[s].label
        ] }, s);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-3xl bg-white border border-slate-100 shadow-soft p-6 md:p-8 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 15
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: -15
      }, transition: {
        duration: 0.22,
        ease: "easeInOut"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-extrabold text-[#0A3D62] mb-6", children: streamMeta[activeStream].title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CourseTable, { rows: streamMeta[activeStream].rows }),
        activeStream === "STEM" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-6 border-t border-slate-100 pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StemSection, {}) })
      ] }, activeStream) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 md:py-20 bg-slate-50/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Switzerland" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]", children: "B.H.M.S — Business & Hotel Management School, Lucerne" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-slate-600 max-w-3xl leading-relaxed", children: "BHMS holds a prestigious global position in hospitality education. Industry internship BSc (Hons.) pathways combine quality academics, assured internships, personal development, and international career placement." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white border border-slate-100 shadow-soft p-6 md:p-8 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "section-label mb-4", children: "Highlights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: bhmsHighlights.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm text-slate-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0 text-[#4DA8DA] mt-0.5" }),
            item
          ] }, item)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: bhmsAccreditationLabels.map((label) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 rounded-lg bg-[#0A3D62]/5 border border-[#0A3D62]/10 text-xs font-bold text-[#0A3D62]", children: label }, label)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-primary p-6 md:p-8 text-white h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-[#F4B400] mb-4", children: "Four pillars at BHMS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: bhmsPillars.map((pillar) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/10 border border-white/15 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: pillar.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/85 leading-relaxed", children: pillar.desc })
          ] }, pillar.title)) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-14 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Partner universities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]", children: "Explore Institutions Alphabetically" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-slate-600 max-w-2xl", children: "Filter by name, country, or alphabetical directory to explore degrees, credit waivers, and admission guidelines." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-4 items-stretch lg:items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full lg:max-w-md shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search university or country...", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full pl-10 pr-4 py-3.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#4DA8DA] focus:ring-1 focus:ring-[#4DA8DA]/35 transition bg-white shadow-soft" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full lg:w-72 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: activeCountry, onChange: (e) => setActiveCountry(e.target.value), "aria-label": "Filter by country", className: "w-full appearance-none pl-10 pr-10 py-3.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#4DA8DA] focus:ring-1 focus:ring-[#4DA8DA]/35 transition bg-white shadow-soft font-semibold text-[#0A3D62] cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All countries" }),
                partnerCountries.map((country) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: country, children: country }, country))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 rotate-90 pointer-events-none" })
            ] }),
            (activeCountry !== "All" || activeLetter !== "All" || search) && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
              setActiveCountry("All");
              setActiveLetter("All");
              setSearch("");
            }, className: "inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-xs font-bold text-slate-500 hover:text-[#0A3D62] hover:border-[#4DA8DA]/40 transition shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }),
              "Clear filters"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 items-center p-1.5 rounded-2xl bg-slate-50 border border-slate-200/60 max-w-full", children: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce((acc, letter) => {
            if (partnerUniversities.some((u) => u.name.toUpperCase().startsWith(letter))) {
              acc.push(letter);
            }
            return acc;
          }, ["All"]).map((letter) => {
            const isActive = activeLetter === letter;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
              scale: 1.05
            }, whileTap: {
              scale: 0.95
            }, type: "button", onClick: () => setActiveLetter(letter), className: `h-9 min-w-9 px-2.5 rounded-xl text-xs font-extrabold transition flex items-center justify-center ${isActive ? "gradient-primary text-white shadow-md" : "bg-transparent text-slate-500 hover:bg-white hover:text-slate-800 hover:shadow-sm"}`, children: letter }, letter);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-slate-400", children: [
            "Showing ",
            filteredPartners.length,
            " institution",
            filteredPartners.length === 1 ? "" : "s",
            activeCountry !== "All" ? ` in ${activeCountry}` : ""
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: filteredPartners.map((uni) => {
          const initials = uni.name.split(" ").filter((w) => w.length > 1).map((w) => w.charAt(0)).join("").slice(0, 2).toUpperCase();
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
            y: -3,
            borderColor: "#4DA8DA"
          }, onClick: () => {
            setSelectedUni(uni);
            setFormSubmitted(false);
          }, className: "group relative flex flex-col justify-between rounded-2xl border border-slate-200/70 bg-white p-5 cursor-pointer hover:shadow-soft transition-all duration-300 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-extrabold tracking-widest text-[#0A3D62] bg-slate-100 px-2.5 py-1 rounded-full uppercase border border-slate-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-2.5 w-2.5" }),
                  partnerLocationLabel(uni)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-slate-300 group-hover:text-[#4DA8DA] group-hover:translate-x-0.5 transition-all duration-300" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-to-br from-slate-900 via-[#0A3D62] to-[#0A3D62] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm transition-all duration-300 group-hover:shadow-soft", children: initials || "UN" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs sm:text-[13px] font-extrabold text-[#0A3D62] leading-snug group-hover:text-[#4DA8DA] transition-colors duration-300 line-clamp-2", children: uni.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-bold mt-1.5 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(School, { className: "h-3 w-3 text-[#4DA8DA]/70" }),
                    "Partner Institution"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#4DA8DA]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
          ] }, uni.name);
        }) }) })
      ] }),
      selectedUni && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white w-full max-w-4xl rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row max-h-[85vh] animate-fade-in relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSelectedUni(null), className: "absolute right-4 top-4 h-9 w-9 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-500 z-20 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-1/2 p-6 md:p-8 overflow-y-auto border-r border-slate-100 max-h-[40vh] md:max-h-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-4 border-b border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-12 w-12 rounded-xl flex items-center justify-center font-extrabold text-sm shadow-sm ${selectedUni.logoBg}`, children: selectedUni.name.split(" ").filter((w) => w.length > 1).map((w) => w.charAt(0)).join("").slice(0, 2).toUpperCase() || "UN" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-lg text-[#0A3D62] leading-snug", children: selectedUni.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block section-label-sm mt-0.5", children: partnerLocationLabel(selectedUni) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-400 mb-3", children: "Programs Offered" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: getProgramsForUniversity(selectedUni.name).map((prog) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 bg-slate-50 border border-slate-100 rounded-xl hover:border-[#4DA8DA]/20 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-[#0A3D62] bg-[#0A3D62]/10 rounded px-1.5 py-0.5 uppercase tracking-wider", children: prog.degree }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-[#0A3D62] mt-1.5 leading-snug", children: prog.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-slate-400 font-bold mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3 text-slate-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Duration: ",
                  prog.duration
                ] })
              ] })
            ] }, prog.title)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-1/2 p-6 md:p-8 bg-slate-50/50 flex flex-col justify-center max-h-[45vh] md:max-h-none overflow-y-auto", children: formSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 grid place-items-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-[#0A3D62] text-lg", children: "Request Registered!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto", children: [
            "Thank you for your interest. A Shakthi Academy admissions advisor will reach out via email/phone within 24 hours with prerequisites, credit waivers, and enrollment steps for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedUni.name }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSelectedUni(null), className: "mt-6 w-full rounded-xl bg-[#0A3D62] text-white text-xs font-bold py-3 hover:bg-[#0A3D62]/90 transition", children: "Close Portal" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-[#0A3D62] text-base mb-1", children: "Check Eligibility & Deadlines" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-slate-400 font-semibold mb-5", children: [
            "Request custom requirements for ",
            selectedUni.name,
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: async (e) => {
            e.preventDefault();
            try {
              await apiSubmitInquiry({
                formName: "University Programs Inquiry",
                name: leadForm.name,
                email: leadForm.email,
                phone: leadForm.phone,
                subject: `Inquiry for ${selectedUni.name}`,
                message: `Preferred program: ${leadForm.program || "Not selected"}. Intake year: ${leadForm.year}.`
              });
              setFormSubmitted(true);
            } catch (err) {
              console.error("Failed to save submission", err);
            }
          }, className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "John Doe", value: leadForm.name, onChange: (e) => setLeadForm({
                  ...leadForm,
                  name: e.target.value
                }), className: "w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "john@example.com", value: leadForm.email, onChange: (e) => setLeadForm({
                    ...leadForm,
                    email: e.target.value
                  }), className: "w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", required: true, placeholder: "+91 XXXXX XXXXX", value: leadForm.phone, onChange: (e) => setLeadForm({
                    ...leadForm,
                    phone: e.target.value
                  }), className: "w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1", children: "Preferred Program" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, value: leadForm.program, onChange: (e) => setLeadForm({
                ...leadForm,
                program: e.target.value
              }), className: "w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Choose Offered Degree --" }),
                getProgramsForUniversity(selectedUni.name).map((prog) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: prog.title, children: prog.title }, prog.title))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1", children: "Intended Intake" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: leadForm.year, onChange: (e) => setLeadForm({
                ...leadForm,
                year: e.target.value
              }), className: "w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2026", children: "2026 Intake" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2027", children: "2027 Intake" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-2 w-full rounded-xl gradient-primary text-white text-xs font-bold py-3 shadow-glow hover:opacity-95 transition", children: "Submit Request Info" })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-primary p-8 md:p-12 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#F4B400]/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-10 w-10 text-[#F4B400]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl sm:text-3xl font-extrabold", children: "Find your perfect program" }),
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
  OtherProgramsPage as component
};

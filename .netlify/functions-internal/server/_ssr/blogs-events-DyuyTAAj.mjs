import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, R as Reveal, F as Footer } from "./Reveal-BR6Ce8yz.mjs";
import { g as getAnnouncementTypeConfig, A as AnnouncementTypeIcon } from "./AnnouncementTypeIcon-UhCTDZtA.mjs";
import { f as fallbackEvents, b as apiGetPublicContent, a as apiSubmitInquiry } from "./router-DSxx-_6s.mjs";
import { V as Video, h as FileText, e as Calendar, t as Clock, A as ArrowRight, X, C as CircleCheck, aq as ChevronLeft, ad as ChevronRight, ar as Eye } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
function AlertCard({ ann, compact = false }) {
  const config = getAnnouncementTypeConfig(ann.type);
  if (compact) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border p-4 ${config.cardClass}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementTypeIcon, { type: ann.type, size: "sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${config.badgeClass}`, children: config.label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[#0A3D62] leading-relaxed", children: ann.text }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[11px] font-semibold text-slate-500 flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
        ann.time
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border p-5 sm:p-6 ${config.cardClass}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementTypeIcon, { type: ann.type, size: "md" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border ${config.badgeClass}`, children: config.publicLabel })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg font-semibold text-[#0A3D62] leading-relaxed", children: ann.text }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-slate-500 flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
        ann.time
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#4DA8DA] flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3" }),
        "Public feed"
      ] })
    ] })
  ] });
}
function LiveAlertCenter({ announcements, variant = "hero", title = "Live Alerts" }) {
  const [activeIndex, setActiveIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    setActiveIndex(0);
  }, [announcements.length]);
  reactExports.useEffect(() => {
    if (announcements.length <= 1 || variant !== "hero") return;
    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % announcements.length);
    }, 8e3);
    return () => window.clearInterval(timer);
  }, [announcements.length, variant]);
  if (announcements.length === 0) return null;
  const active = announcements[activeIndex] ?? announcements[0];
  if (variant === "sidebar") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3.5 border-b border-slate-100 bg-gradient-to-r from-[#0A3D62] to-[#4DA8DA] text-white flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-300 opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-rose-400" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-extrabold", children: title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold bg-white/15 px-2 py-0.5 rounded-full", children: [
          announcements.length,
          " Active"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-3 max-h-[min(480px,65vh)] overflow-y-auto [scrollbar-width:thin]", children: announcements.map((ann) => /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCard, { ann, compact: true }, ann.id)) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-b from-slate-100/80 to-white border-y border-slate-200/80 py-6 sm:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-200 bg-white shadow-soft overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3.5 bg-[#0A3D62] text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold uppercase tracking-widest", children: "Live Alerts" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold bg-white/15 px-2.5 py-1 rounded-full", children: [
        announcements.length,
        " Active"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCard, { ann: active }),
      announcements.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: announcements.map((ann, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveIndex(i),
            className: `h-2 rounded-full transition-all ${i === activeIndex ? "w-6 bg-[#0A3D62]" : "w-2 bg-slate-300 hover:bg-slate-400"}`,
            "aria-label": `Show alert ${i + 1}`
          },
          ann.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setActiveIndex((i) => (i - 1 + announcements.length) % announcements.length),
              className: "h-8 w-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50",
              "aria-label": "Previous alert",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setActiveIndex((i) => (i + 1) % announcements.length),
              className: "h-8 w-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50",
              "aria-label": "Next alert",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    ] })
  ] }) }) });
}
function usePublicAnnouncements() {
  const [announcements, setAnnouncements] = reactExports.useState([]);
  const [announcementsEnabled, setAnnouncementsEnabled] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const load = reactExports.useCallback(async () => {
    try {
      const content = await apiGetPublicContent();
      setAnnouncements(content.announcements);
      setAnnouncementsEnabled(content.announcementsEnabled !== false);
    } catch {
      setAnnouncements([]);
      setAnnouncementsEnabled(false);
    } finally {
      setIsLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    void load();
    const onVisible = () => {
      if (document.visibilityState === "visible") void load();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [load]);
  return {
    announcements,
    announcementsEnabled,
    isLoading,
    reload: load
  };
}
const fallbackBlogs = [{
  id: "usa-f1-visa-guide",
  tag: "Visa Update",
  title: "Guide to US F-1 Student Visas for Fall Admissions",
  desc: "A comprehensive checklist detailing documentation, SEVIS fee payments, ds-160 processing, and mock question preparations for the US F-1 consular interview.",
  date: "June 25, 2026",
  readTime: "6 min read",
  author: "Admissions Team",
  img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=70"
}, {
  id: "mbbs-abroad-opportunities",
  tag: "MBBS Special",
  title: "Why Studying MBBS Abroad in Poland & Georgia is Rising",
  desc: "An in-depth look at WHO-approved medical schools, tuition costs, clinical internship structures, and MCI/NMC screening exam assistance in Europe.",
  date: "June 18, 2026",
  readTime: "5 min read",
  author: "Dr. R. Sharma",
  img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=70"
}, {
  id: "ielts-cracking-tips",
  tag: "Test Prep",
  title: "Cracking the IELTS: 5 Essential Tips to Score 8.0+ Band",
  desc: "Discover advanced grammar tips, structure tactics for Writing Task 2, vocabulary builders, and reading strategies that elite trainers use to push scores.",
  date: "June 10, 2026",
  readTime: "4 min read",
  author: "Certified IELTS Trainer",
  img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=70"
}];
function BlogsEventsPage() {
  const [activeTab, setActiveTab] = reactExports.useState("blogs");
  const [blogsList, setBlogsList] = reactExports.useState(fallbackBlogs);
  const [eventsList, setEventsList] = reactExports.useState(fallbackEvents);
  const {
    announcements: liveAnnouncements
  } = usePublicAnnouncements();
  const [selectedEvent, setSelectedEvent] = reactExports.useState(null);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    test: "IELTS"
  });
  const [isRegistered, setIsRegistered] = reactExports.useState(false);
  reactExports.useEffect(() => {
    void apiGetPublicContent().then((content) => {
      setBlogsList(content.blogs);
      setEventsList(content.events);
    }).catch(() => {
    });
  }, []);
  const tabMeta = {
    blogs: {
      label: "Latest Blogs & Articles",
      icon: FileText,
      title: "Expert insights for your study-abroad journey",
      subtitle: "Visa updates, admission guides, and test-prep strategies from our counseling team.",
      count: blogsList.length
    },
    events: {
      label: "Webinars & Events",
      icon: Video,
      title: "Live sessions with university representatives",
      subtitle: "Register for free webinars on admissions, scholarships, and visa preparation.",
      count: eventsList.length
    }
  };
  const activeMeta = tabMeta[activeTab];
  const ActiveIcon = activeMeta.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-50 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-28 md:pt-36 md:pb-32 overflow-hidden bg-slate-950 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80", alt: "", "aria-hidden": true, className: "w-full h-full object-cover opacity-35" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/85 to-slate-950" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-4 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow-dark", children: "Stay Informed & Connected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight", children: "Blogs, Insights & Global Events" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed", children: "Explore expert tips on international admissions, visa regulations, test prep hacks, and register for free webinars with global university representatives." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 md:mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "tablist", "aria-label": "Content type", className: "inline-flex w-full sm:w-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-1.5 shadow-lg", children: ["blogs", "events"].map((tab) => {
          const meta = tabMeta[tab];
          const Icon = meta.icon;
          const isActive = activeTab === tab;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", role: "tab", "aria-selected": isActive, onClick: () => setActiveTab(tab), className: `flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${isActive ? "bg-white text-[#0A3D62] shadow-md" : "text-white/80 hover:text-white hover:bg-white/10"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap", children: meta.label })
          ] }, tab);
        }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 relative z-10 -mt-14 md:-mt-16 pb-20 md:pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-6 lg:gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] border border-slate-200/80 bg-white shadow-soft overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 sm:px-8 md:px-10 pt-8 md:pt-10 pb-6 border-b border-slate-100 bg-gradient-to-r from-slate-50/80 to-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-[#0A3D62]/10 text-[#0A3D62] flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveIcon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-extrabold uppercase tracking-widest text-[#4DA8DA]", children: activeMeta.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 text-xl sm:text-2xl font-extrabold text-[#0A3D62] leading-snug", children: activeMeta.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-slate-500 max-w-2xl leading-relaxed", children: activeMeta.subtitle })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex self-start sm:self-auto items-center rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600", children: [
            activeMeta.count,
            " ",
            activeTab === "blogs" ? "articles" : "upcoming events"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 sm:p-8 md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: activeTab === "blogs" ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -8
        }, transition: {
          duration: 0.22
        }, className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch", children: blogsList.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#4DA8DA]/30 hover:shadow-soft transition-all duration-300 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[16/10] overflow-hidden relative shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.img, alt: b.title, className: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500", loading: "lazy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 left-4 rounded-lg bg-slate-900/90 text-[#4DA8DA] text-[10px] font-extrabold px-2.5 py-1 uppercase tracking-wider", children: b.tag })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 sm:p-6 flex flex-col flex-1 min-h-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-slate-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
                " ",
                b.date
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
                " ",
                b.readTime
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-extrabold text-[#0A3D62] text-base sm:text-lg group-hover:text-[#4DA8DA] transition-colors leading-snug line-clamp-2 min-h-[3rem]", children: b.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1", children: b.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-[#0A3D62]/10 flex items-center justify-center text-[10px] font-bold text-[#0A3D62] uppercase shrink-0", children: b.author.charAt(0) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-500 truncate", children: b.author })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "inline-flex items-center gap-1 text-xs font-bold text-[#4DA8DA] hover:text-[#0A3D62] transition-colors shrink-0", children: [
                "Read Article ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
              ] })
            ] })
          ] })
        ] }) }, b.id)) }, "blogs") : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -8
        }, transition: {
          duration: 0.22
        }, className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch", children: eventsList.map((e, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 0.05, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-emerald-500/25 hover:shadow-soft transition-all duration-300 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[16/10] overflow-hidden relative shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: e.img, alt: e.title, className: "w-full h-full object-cover", loading: "lazy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 left-4 rounded-lg bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-1 uppercase tracking-wider", children: "Free Registration" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 sm:p-6 flex flex-col flex-1 min-h-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[#0A3D62]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 text-[#4DA8DA]" }),
                " ",
                e.date
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-300 hidden sm:inline", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: e.time })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-extrabold text-[#0A3D62] text-base sm:text-lg leading-snug line-clamp-2 min-h-[3rem]", children: e.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-600 leading-snug line-clamp-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800", children: "Speaker:" }),
                " ",
                e.speaker
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-600 leading-snug line-clamp-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800", children: "Format:" }),
                " ",
                e.platform
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1", children: e.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSelectedEvent(e), className: "mt-5 w-full rounded-xl bg-[#0A3D62] text-white hover:bg-[#4DA8DA] transition text-sm font-bold py-3", children: "Register Free Seat" })
          ] })
        ] }) }, e.id)) }, "events") }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-3 order-first lg:order-none lg:sticky lg:top-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LiveAlertCenter, { announcements: liveAnnouncements, variant: "sidebar", title: "Live Alerts" }) })
    ] }) }) }),
    selectedEvent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-tr from-[#0A3D62] to-[#4DA8DA] text-white p-5 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-amber-300 uppercase tracking-widest", children: "Webinar Ticket Booking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-base leading-tight mt-0.5", children: "Register for Seminar" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setSelectedEvent(null);
          setIsRegistered(false);
        }, className: "h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: !isRegistered ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: async (e) => {
        e.preventDefault();
        try {
          await apiSubmitInquiry({
            formName: "Webinars & Events",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: `Registration for ${selectedEvent.title}`,
            message: `Event date: ${selectedEvent.date} at ${selectedEvent.time}. Speaker: ${selectedEvent.speaker}.`
          });
          setIsRegistered(true);
        } catch (err) {
          console.error("Failed to save registration", err);
        }
      }, className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-wide", children: "Selected Event" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-extrabold text-[#0A3D62] text-sm mt-0.5 leading-snug", children: selectedEvent.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500 mt-1 font-semibold", children: [
            selectedEvent.date,
            " • ",
            selectedEvent.time
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-slate-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "modal-name", className: "text-xs font-bold text-slate-500", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "modal-name", type: "text", required: true, placeholder: "Enter your name", value: formData.name, onChange: (e) => setFormData({
            ...formData,
            name: e.target.value
          }), className: "rounded-xl border border-slate-100 bg-slate-50/50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#4DA8DA]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "modal-email", className: "text-xs font-bold text-slate-500", children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "modal-email", type: "email", required: true, placeholder: "Enter your email", value: formData.email, onChange: (e) => setFormData({
            ...formData,
            email: e.target.value
          }), className: "rounded-xl border border-slate-100 bg-slate-50/50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#4DA8DA]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "modal-phone", className: "text-xs font-bold text-slate-500", children: "Phone Number (WhatsApp)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "modal-phone", type: "tel", required: true, placeholder: "Enter mobile number", value: formData.phone, onChange: (e) => setFormData({
            ...formData,
            phone: e.target.value
          }), className: "rounded-xl border border-slate-100 bg-slate-50/50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#4DA8DA]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-2 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 transition shadow-md", children: "Confirm Free Booking" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 text-center flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-[#0A3D62] text-lg", children: "Registration Successful!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-600 mt-2 max-w-xs leading-relaxed mx-auto", children: [
          "Hi ",
          formData.name,
          ", we have reserved your seat. The seminar webinar access link will be sent to your WhatsApp number (",
          formData.phone,
          ") before the event!"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setSelectedEvent(null);
          setIsRegistered(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            test: "IELTS"
          });
        }, className: "mt-6 px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition text-sm font-bold", children: "Done" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  BlogsEventsPage as component
};

import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, R as Reveal, F as Footer } from "./Reveal-BR6Ce8yz.mjs";
import { m as mbbsPrograms } from "./mbbs-programs-CHr46y9b.mjs";
import { h as europeanUniversities, j as otherUniversities } from "./other-programs-BzBgGpcj.mjs";
import { C as COMPANY_NAME } from "./router-DSxx-_6s.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { aG as Flame, A as ArrowRight, a5 as Target, ar as Eye, aH as Quote, ap as ShieldCheck, aI as HeartHandshake, H as House, aJ as Layers, r as UserCheck, aa as School, h as FileText, au as Stamp, d as Plane, m as Award, n as Sparkles, aK as Network, aL as TrendingUp, C as CircleCheck, E as Earth, G as GraduationCap, aM as Trophy, P as Phone } from "../_libs/lucide-react.mjs";
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
const aboutImg = "/assets/about-hero-new-C0KBLtW4.png";
const medicalMarqueeNames = mbbsPrograms.flatMap(
  (p) => (p.universities ?? []).map((name) => ({ name, region: p.shortName }))
);
const nonMedicalMarqueeNames = [...europeanUniversities, ...otherUniversities].flatMap(
  (c) => c.universities.map((name) => ({ name, region: c.country }))
);
function normalizePartnerName(name) {
  return name.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/\s*\(ieu\)\s*/gi, " ").replace(/\s*\(ud\)\s*/gi, " ").replace(/\s*\(rudn\)\s*/gi, " ").replace(/\s*\(kbsu\)\s*/gi, " ").replace(/\s*\(ciu\)\s*/gi, " ").replace(/\s*\(seu\)\s*/gi, " ").replace(/\s*-\s*malta|\s*-\s*poland/gi, " ").replace(/pitirim sorokin syktyvkar state university/g, "pitrim sorokin").replace(/\bpeoples?\b/g, "peoples").replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}
function partnerDedupeKey(name, country) {
  return `${normalizePartnerName(name)}|${country.trim().toLowerCase()}`;
}
function dedupePartners(items) {
  return items.filter(
    (p, idx, arr) => arr.findIndex((x) => partnerDedupeKey(x.name, x.country) === partnerDedupeKey(p.name, p.country)) === idx
  );
}
const logoBgs = [
  "bg-red-500/10 text-red-700",
  "bg-blue-600/10 text-blue-700",
  "bg-emerald-500/10 text-emerald-700",
  "bg-amber-500/10 text-amber-700",
  "bg-indigo-500/10 text-indigo-700",
  "bg-sky-500/10 text-sky-700"
];
const medicalPartners = medicalMarqueeNames.map((p, i) => ({
  name: p.name,
  country: p.region,
  logoBg: logoBgs[i % logoBgs.length]
}));
const medicalKeys = new Set(medicalPartners.map((p) => partnerDedupeKey(p.name, p.country)));
const nonMedicalPartners = nonMedicalMarqueeNames.map((p, i) => ({
  name: p.name,
  country: p.region,
  logoBg: logoBgs[(i + 3) % logoBgs.length]
})).filter((p) => !medicalKeys.has(partnerDedupeKey(p.name, p.country)));
const otherProgramPartnersOnly = dedupePartners(nonMedicalPartners);
dedupePartners([
  ...medicalPartners,
  ...nonMedicalPartners
]).sort((a, b) => a.name.localeCompare(b.name));
const pillars = [{
  icon: Target,
  title: "Our Mission",
  desc: "Partnering with students to create seamless and rewarding overseas education experiences, tailored to their individual goals and needs."
}, {
  icon: Eye,
  title: "Our Vision",
  desc: "To be the premier global education platform, empowering students to excel academically and professionally, and fostering a lifelong love of learning."
}, {
  icon: Flame,
  title: "Our Promise",
  desc: "We ignite excellence. Beyond finding you a course, we craft an educational odyssey tailored to your unique profile — matching the ideal program and country to the career path that lights a fire in you."
}];
const carePoints = [{
  icon: ShieldCheck,
  title: "Safety & Wellbeing",
  desc: "Your security abroad matters. We guide you on safe neighborhoods, local norms, and resources so you can focus on your studies with peace of mind."
}, {
  icon: HeartHandshake,
  title: "Cultural Comfort",
  desc: "From preferred food options to community connections, we help you feel at home in a new country from day one."
}, {
  icon: House,
  title: "Housing That Fits",
  desc: "We go the extra mile to find accommodation that meets your needs and expectations — not just a place to stay, but a place to thrive."
}, {
  icon: Layers,
  title: "With You Every Step",
  desc: "Our support doesn't end at admission. We're beside you until you're fully settled into your new academic journey with complete satisfaction."
}];
const services = [{
  icon: UserCheck,
  title: "Personalized Counseling",
  desc: "Every student is unique. Our counselors assess your academic profile, career goals, and preferences to recommend the best-suited universities and courses."
}, {
  icon: School,
  title: "University Selection",
  desc: "With in-depth knowledge of universities worldwide, we help you choose the right institution based on your aspirations, budget, and long-term ambitions."
}, {
  icon: FileText,
  title: "Application Assistance",
  desc: "We guide you through every step — essay writing, letters of recommendation, financial aid applications, and documentation that stands out."
}, {
  icon: Stamp,
  title: "Visa Guidance",
  desc: "Our experts provide comprehensive visa support, from document preparation to interview coaching, ensuring a smooth and confident application process."
}, {
  icon: Plane,
  title: "Pre-Departure Orientation",
  desc: "We equip you with essential information about your destination — accommodation, cultural nuances, student life, and what to expect before you fly."
}, {
  icon: House,
  title: "Post-Landing Support",
  desc: "Our support extends beyond admission — assistance with accommodation, bank accounts, local registrations, and everything you need to settle in."
}];
const whyChoose = [{
  icon: Award,
  title: "Expertise",
  desc: "Our team comprises experienced counselors with in-depth knowledge of the global education landscape and evolving admission trends."
}, {
  icon: Sparkles,
  title: "Personalized Approach",
  desc: "We treat every student as an individual. No cookie-cutter advice — only strategies shaped around your profile, goals, and dreams."
}, {
  icon: Network,
  title: "Strong University Network",
  desc: "Established partnerships with renowned universities worldwide give you access to opportunities that align with your ambitions."
}, {
  icon: TrendingUp,
  title: "High Success Rate",
  desc: "Our track record speaks for itself — numerous students have successfully pursued their overseas education dreams with Shakthi Academy by their side."
}, {
  icon: CircleCheck,
  title: "Comprehensive Support",
  desc: "End-to-end assistance from your first counseling session to the moment you're settled abroad. One partner, every step covered."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutImg, alt: "The Shakthi Academy story — passion ignited", className: "w-full h-full object-cover opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-4 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-6 border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3.5 w-3.5 text-[#F4B400]" }),
          "The Shakthi Academy Story"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6
        }, className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white", children: [
          "Inspiring Minds.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent", children: "Igniting Potential." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.1
        }, className: "mt-5 text-lg text-slate-200 max-w-xl leading-relaxed", children: [
          COMPANY_NAME,
          " wasn't born in a boardroom — it emerged from a spark of passion to make the student journey abroad not just efficient, but truly inspirational."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.2
        }, className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#our-story", className: "inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-5 py-3 shadow-glow hover:translate-y-[-1px] transition", children: [
            "Read Our Story ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/contact", className: "inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-sm font-semibold px-5 py-3 border border-white/20 hover:bg-white/15 transition", children: "Book Free Consultation" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "What drives us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]", children: "Vision & Mission" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: pillars.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-2xl p-7 bg-white border border-slate-100 shadow-soft hover:-translate-y-1 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl gradient-primary grid place-items-center text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-bold text-[#0A3D62]", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-slate-600 leading-relaxed", children: v.desc })
      ] }) }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "our-story", className: "py-24 bg-slate-50/60 scroll-mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "The story of Shakthi Academy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62] leading-tight", children: "Born from experience, built for students" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4 text-slate-600 leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Witnessing the challenges students faced during my time as a Senior Client Relations Manager at an overseas education company, I saw a clear opportunity to do better. Students deserved more than transactional advice — they deserved a partner who genuinely cared about their journey." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Shakthi Academy emerged from a deep desire to transform how students experience studying abroad. We don't just find you a course — we identify the perfect career path that lights a fire in you, then match you with the ideal program and country to achieve your goals." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our experienced team makes the entire process simple and effective. We understand that safety, finding preferred food, and comfortable housing are crucial for your success — not afterthoughts, but foundations of a great experience." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#4DA8DA]/20 to-[#F4B400]/20 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl bg-white border border-slate-100 shadow-soft p-8 md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-10 w-10 text-[#F4B400]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-xl font-medium text-[#0A3D62] leading-relaxed", children: `"We go beyond admissions. We're with you every step of the way — until you're settled into your new academic journey with complete satisfaction."` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3 pt-6 border-t border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full gradient-primary text-white grid place-items-center font-bold text-lg", children: "E" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-[#0A3D62]", children: "The Shakthi Academy Team" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: "Student-first, always" })
            ] })
          ] })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Beyond admissions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]", children: "We sweat the small stuff too" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-600 leading-relaxed", children: "A successful study-abroad experience isn't just about getting in — it's about thriving once you're there. That's why we handle the details that matter most to you." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: carePoints.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-2xl p-6 bg-slate-50 border border-slate-100 hover:border-[#4DA8DA]/30 hover:-translate-y-1 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-[#0A3D62]/10 grid place-items-center text-[#0A3D62]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-bold text-[#0A3D62]", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-slate-600 leading-relaxed", children: c.desc })
      ] }) }, c.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-slate-50/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "How we help" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]", children: "How Shakthi Academy can help you" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-600 leading-relaxed", children: "Shakthi Academy is committed to making your dream of studying abroad a reality. Our expert team provides comprehensive guidance and support throughout your entire journey." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-2xl p-7 bg-white border border-slate-100 shadow-soft hover:-translate-y-1 hover:shadow-lg transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl gradient-primary grid place-items-center text-white shadow-glow group-hover:scale-105 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-bold text-[#0A3D62]", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-slate-600 leading-relaxed", children: s.desc })
      ] }) }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Why choose us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]", children: "The Shakthi Academy difference" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: whyChoose.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-2xl p-7 border border-slate-100 shadow-soft hover:-translate-y-1 transition ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 h-11 w-11 rounded-xl bg-[#F4B400]/15 grid place-items-center text-[#0A3D62]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(w.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-[#0A3D62]", children: w.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-slate-600 leading-relaxed", children: w.desc })
        ] })
      ] }) }) }, w.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Global reach" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]", children: "A strong university network worldwide" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 relative overflow-hidden rounded-3xl gradient-primary p-10 md:p-16 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#F4B400]/30 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-2 gap-10 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-12 w-12 text-[#F4B400]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-2xl font-bold", children: "Your gateway to the world" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/85", children: "With partnerships across direct medical and non-medical universities worldwide, we connect you to the program and country that best fits your ambitions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-3", children: [{
              i: GraduationCap,
              l: `${medicalMarqueeNames.length}+ medical partners`
            }, {
              i: School,
              l: `${otherProgramPartnersOnly.length}+ other programs`
            }].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/10 p-3 border border-white/15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(b.i, { className: "h-5 w-5 text-[#F4B400]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-semibold", children: b.l })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-72 overflow-y-auto pr-2 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-[#F4B400] mb-2", children: "Medical universities" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: medicalMarqueeNames.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs", children: u.name }, `${u.name}-${u.region}`)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-[#F4B400] mb-2", children: "Other universities & programs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: otherProgramPartnersOnly.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs", children: u.name }, `${u.name}-${u.country}`)) })
            ] })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-12 w-12 text-[#F4B400] mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-5xl font-extrabold text-[#0A3D62] leading-tight", children: "Let us be your guiding light" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-slate-600 max-w-2xl mx-auto leading-relaxed", children: "At Shakthi Academy, we believe that education is the key to unlocking your full potential. Embark on this exciting chapter of your life with a partner who is with you every step of the way." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+917993473399", className: "inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
        "Call Us"
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  AboutPage as component
};

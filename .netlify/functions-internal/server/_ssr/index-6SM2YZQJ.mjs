import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, R as Reveal, F as Footer } from "./Reveal-BR6Ce8yz.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, G as GraduationCap, b as Users, a6 as Briefcase, aN as LogIn, E as Earth, a5 as Target, aL as TrendingUp, ai as Handshake, aa as School, aO as Wrench, aP as BadgeCheck, d as Plane, aQ as Building, a as MessageCircle, aR as Lightbulb, m as Award, z as Cpu, aS as Heart, aT as Scale, n as Sparkles, C as CircleCheck, t as Clock, k as MapPin, aH as Quote } from "../_libs/lucide-react.mjs";
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
function Counter({ to, suffix = "", duration = 1800 }) {
  const [val, setVal] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.floor(eased * to));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    val.toLocaleString(),
    suffix
  ] });
}
const studentPortalImg = "/assets/women-CLYnBDu3.png";
const parentsPortalImg = "/assets/men2-FDsrdO7P.png";
const employersPortalImg = "/assets/men-ClgyLN2D.png";
const threeEPillars = [{
  label: "Education",
  desc: "Strong foundations from school to higher learning.",
  icon: GraduationCap
}, {
  label: "Employment",
  desc: "Job-ready skills, placements, and career pathways.",
  icon: Briefcase
}, {
  label: "Entrepreneurship",
  desc: "Innovation, leadership, and startup success.",
  icon: Lightbulb
}];
const academyEssentials = [{
  label: "Who We Are",
  tagline: "A global academy committed to academic excellence, skill development, and real-world success.",
  desc: "Shakthi Academy is a global institution built on a simple belief — education must prepare people for life, not just exams. For over 25 years, we have united academic rigour with practical learning, helping learners grow into capable professionals, responsible citizens, and confident leaders.",
  highlights: ["25+ years of educational excellence", "Global presence across 50+ countries", "Holistic development of mind, skills & character"],
  icon: GraduationCap
}, {
  label: "What We Do",
  tagline: "Design pathways from school to career — programs, training, placements, and entrepreneurship support.",
  desc: "We design complete pathways from school to career. From nursery to postgraduate programs, skill certifications, corporate training, and entrepreneurship hubs — every offering is structured to turn learning into measurable outcomes: knowledge gained, jobs secured, and ventures launched.",
  highlights: ["School, college & professional programs", "Industry-aligned skill development", "Placement support & entrepreneurship hubs"],
  icon: Target
}, {
  label: "Who We Serve",
  tagline: "Students, parents, employers, and learners worldwide seeking growth at every stage of life.",
  desc: "Our ecosystem serves every stakeholder in the learning journey. Students gain future-ready skills, parents stay connected through dedicated portals, employers access trained talent, and institutions partner with us to build workforce-ready graduates across the globe.",
  highlights: ["Students & young professionals", "Parents & guardians", "Employers & industry partners"],
  icon: Users
}, {
  label: "What Makes Us Different",
  tagline: "Future-ready curriculum, expert mentors, global exposure, and values-based holistic development.",
  desc: "We go beyond textbooks. Our future-ready curriculum, expert mentors, global collaborations, and technology-driven classrooms create an environment where learners don't just study — they transform. Strong ethics and holistic development ensure every graduate leaves with both competence and character.",
  highlights: ["Future-ready, industry-relevant curriculum", "Expert mentors & global collaborations", "Technology-driven, values-based learning"],
  icon: Sparkles
}];
const portals = [{
  title: "Student Portal",
  desc: "Access your courses, assignments, results and more.",
  cta: "Login Now",
  icon: GraduationCap,
  accent: "from-[#4DA8DA]/20 to-[#4DA8DA]/5",
  iconColor: "text-[#4DA8DA]",
  image: studentPortalImg
}, {
  title: "Parents Portal",
  desc: "Track your child's program, attendance and progress.",
  cta: "Login Now",
  icon: Users,
  accent: "from-amber-400/20 to-amber-400/5",
  iconColor: "text-amber-500",
  image: parentsPortalImg
}, {
  title: "Employers Portal",
  desc: "Hire talent, manage recruitments and build your team.",
  cta: "Login Now",
  icon: Briefcase,
  accent: "from-emerald-400/20 to-emerald-400/5",
  iconColor: "text-emerald-600",
  image: employersPortalImg
}];
const highlights = [{
  icon: Earth,
  title: "Global Network",
  desc: "Partners in 20+ Countries"
}, {
  icon: Target,
  title: "Industry Aligned",
  desc: "Designed for Real World"
}, {
  icon: TrendingUp,
  title: "Career Focused",
  desc: "Skills for Tomorrow"
}, {
  icon: Handshake,
  title: "Inclusive & Ethical",
  desc: "Building a Better Future"
}];
const offerings = [{
  icon: School,
  title: "School Programs",
  desc: "Nursery to Grade 12"
}, {
  icon: GraduationCap,
  title: "College Programs",
  desc: "UG, PG & Diploma"
}, {
  icon: Wrench,
  title: "Skill Development",
  desc: "Job-ready Skills"
}, {
  icon: BadgeCheck,
  title: "Certification Courses",
  desc: "Industry Recognized"
}, {
  icon: Plane,
  title: "International Programs",
  desc: "Global Exposure"
}, {
  icon: Building,
  title: "Corporate Training",
  desc: "Future Ready Workforce"
}, {
  icon: MessageCircle,
  title: "Counselling & Guidance",
  desc: "Plan. Prepare. Succeed."
}];
const strengths = [{
  icon: Lightbulb,
  title: "Future-Ready Curriculum",
  desc: "Modern, industry-relevant learning for tomorrow's world."
}, {
  icon: Award,
  title: "Expert Mentors",
  desc: "Learn from the best guides in the field."
}, {
  icon: Earth,
  title: "Global Exposure",
  desc: "International opportunities & global collaborations."
}, {
  icon: Cpu,
  title: "Technology Driven",
  desc: "Smart tools for smarter learning."
}, {
  icon: Heart,
  title: "Holistic Development",
  desc: "Nurturing mind, body & creativity."
}, {
  icon: Scale,
  title: "Values & Ethics Based Education",
  desc: "Strong character, better society."
}];
const events = [{
  day: "25",
  month: "MAY",
  year: "2025",
  tag: "SUMMIT",
  title: "Global Education Summit 2025",
  time: "9:00 AM - 5:00 PM",
  venue: "Main Auditorium"
}, {
  day: "12",
  month: "JUN",
  year: "2025",
  tag: "CAREER",
  title: "Industry Connect Career Fair",
  time: "10:00 AM - 4:00 PM",
  venue: "Innovation Hall"
}, {
  day: "08",
  month: "JUL",
  year: "2025",
  tag: "BOOTCAMP",
  title: "Entrepreneurship Bootcamp",
  time: "9:30 AM - 6:00 PM",
  venue: "Tech Lab"
}];
const testimonials = [{
  name: "Anita Desai",
  role: "Parent & Alumni",
  quote: "As a parent, the portal keeps me informed and connected with my child's progress every step."
}, {
  name: "Priya Yahanan",
  role: "Data Scientist, Google",
  quote: "Shakthi Academy transformed my career. The placement support and mentorship were exceptional."
}, {
  name: "Rahul Sharma",
  role: "Founder, TechVentures",
  quote: "The entrepreneurship hub gave me the confidence and skills to launch my own startup successfully."
}];
const communityStats = [{
  value: 50,
  suffix: "+",
  label: "Countries"
}, {
  value: 200,
  suffix: "+",
  label: "Global Partners"
}, {
  value: 500,
  suffix: "+",
  label: "Events"
}, {
  value: null,
  suffix: "",
  label: "Opportunities",
  display: "LIMITLESS"
}];
const partners = ["Google", "Microsoft", "AWS", "IBM", "Infosys", "Wipro", "Deloitte", "HCL"];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center overflow-hidden bg-slate-950", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: "https://res.cloudinary.com/dq6gr5zjc/video/upload/v1779950368/A_cinematic_premium_animation_hw4nlh.mp4", autoPlay: true, loop: true, muted: true, playsInline: true, className: "w-full h-full object-cover opacity-55" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-4 w-full pt-24 pb-16 md:pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.5
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight", style: {
            fontFamily: '"Inter", system-ui, sans-serif'
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#F4B400]", children: "Shakthi" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Academy" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-lg sm:text-xl font-bold text-white tracking-wide", children: [
            "Education",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#4DA8DA] font-normal", children: "|" }),
            " Employment",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#4DA8DA] font-normal", children: "|" }),
            " Entrepreneurship"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xl sm:text-2xl font-semibold text-slate-200 leading-snug", children: "Inspiring Minds. Igniting Potential. Creating Impact." })
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
        }, className: "mt-10 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#offerings", className: "inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-semibold px-6 py-3.5 shadow-glow hover:scale-[1.02] transition duration-200", children: [
            "Explore Programs ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#portals", className: "inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-sm font-semibold px-6 py-3.5 border border-white/20 hover:bg-white/20 transition", children: "Access Portals" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "portals", className: "py-20 bg-white border-b border-slate-100 scroll-mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: portals.map((portal, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative h-full min-h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br ${portal.accent} border border-slate-100 hover:-translate-y-1 hover:shadow-soft transition-all duration-300`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-full flex-col justify-between p-7 pr-[42%]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-12 w-12 rounded-xl bg-white shadow-sm grid place-items-center ${portal.iconColor}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(portal.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-extrabold text-[#0A3D62] uppercase tracking-wide", children: portal.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-slate-600 leading-relaxed", children: portal.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0A3D62] hover:text-[#4DA8DA] transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4" }),
          portal.cta
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portal.image, alt: portal.title, className: "absolute bottom-0 right-0 h-[88%] max-h-60 w-auto max-w-[58%] object-contain object-bottom pointer-events-none select-none" })
    ] }) }, portal.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "careers", className: "py-16 md:py-20 border-y border-slate-100 bg-slate-50/60 scroll-mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: highlights.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-100 p-6 bg-white hover:shadow-soft hover:border-[#4DA8DA]/20 transition-all duration-300 h-full text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-11 w-11 rounded-xl bg-[#4DA8DA]/10 text-[#4DA8DA] grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-extrabold text-[#0A3D62]", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-slate-600", children: item.desc })
    ] }) }, item.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "offerings", className: "py-24 scroll-mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "✦ Our Offerings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]", children: "Explore Our Programs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-600", children: "Pathways from school to career — designed for every stage of growth." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: offerings.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/other-programs", className: "group block h-full rounded-2xl p-6 bg-white border border-slate-100 hover:border-[#4DA8DA]/40 hover:-translate-y-1 hover:shadow-soft transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl gradient-primary grid place-items-center text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-bold text-[#0A3D62] group-hover:text-[#4DA8DA] transition-colors", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-slate-600", children: item.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4DA8DA]", children: [
          "Learn more ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition" })
        ] })
      ] }) }, item.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 relative overflow-hidden bg-slate-950 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center bg-fixed opacity-15 z-0", style: {
        backgroundImage: "url('https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?auto=format&fit=crop&w=1600&q=80')"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-slate-900/90 z-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow-dark", children: "✦ Our Strength" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-extrabold text-white", children: "What Makes Shakthi Academy Unique?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-300", children: "We go beyond textbooks to build confident, skilled and future-ready individuals. Here's what sets us apart:" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: strengths.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-6 glass-dark border border-white/10 shadow-soft h-full hover:border-[#4DA8DA]/30 transition duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-[#F4B400]/15 text-[#F4B400] grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: item.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-slate-300 leading-relaxed", children: item.desc })
        ] }) }, item.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about-shakthi", className: "py-24 md:py-32 bg-white border-b border-slate-100 scroll-mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 lg:gap-20 items-end pb-16 md:pb-20 border-b border-slate-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "About Shakthi Academy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0A3D62] leading-[1.12] tracking-tight", children: "Built for learners. Trusted worldwide." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-slate-600 leading-relaxed lg:border-l-4 lg:border-[#0A3D62] lg:pl-8", children: "We go beyond textbooks to build confident, skilled, and future-ready individuals — trusted by learners, families, and employers worldwide." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-slate-100", children: academyEssentials.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid lg:grid-cols-12 gap-8 lg:gap-12 py-14 md:py-16 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 rounded-2xl bg-[#0A3D62]/8 text-[#0A3D62] items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-6 w-6", strokeWidth: 1.75 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-extrabold text-[#0A3D62] tracking-tight", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm sm:text-base font-medium text-[#0A3D62]/80 leading-relaxed", children: item.tagline })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 lg:pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-[17px] text-slate-600 leading-[1.75]", children: item.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3", children: item.highlights.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-[#0A3D62]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0 text-[#0A3D62]" }),
            point
          ] }, point)) })
        ] })
      ] }) }, item.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16 md:mt-20 overflow-hidden rounded-[2rem] gradient-primary text-white shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#F4B400]/20 blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#4DA8DA]/15 blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-8 py-12 md:px-14 md:py-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-[#F4B400]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-white/80", children: "Our 3E Vision" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-2xl sm:text-3xl font-extrabold leading-tight", children: "From knowledge to career to impact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm sm:text-base text-white/85 leading-relaxed", children: "The 3E Model connects learning to livelihood and leadership — so every learner can grow from knowledge to career to impact." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid md:grid-cols-3 gap-6 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-white/20" }),
            threeEPillars.map((pillar, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-7 md:p-8 hover:bg-white/15 transition-colors duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto md:mx-0 mb-5 h-14 w-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(pillar.icon, { className: "h-7 w-7 text-[#F4B400]", strokeWidth: 1.75 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.25em] text-[#F4B400]/90 mb-2", children: String(i + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-extrabold", children: pillar.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-white/80 leading-relaxed", children: pillar.desc })
            ] }, pillar.label))
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "student-life", className: "py-24 bg-slate-50/60 scroll-mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Upcoming Events" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]", children: "Be Part of Our Next Big Event" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/blogs-events", className: "inline-flex items-center gap-2 text-sm font-bold text-[#0A3D62] hover:text-[#4DA8DA] transition shrink-0", children: [
          "View All Events ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: events.map((event, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "h-full rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-soft hover:border-[#4DA8DA]/25 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 w-24 bg-[#0A3D62] text-white flex flex-col items-center justify-center py-6 px-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-black leading-none", children: event.day }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest mt-1", children: event.month }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white/70 mt-0.5", children: event.year })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#4DA8DA] bg-[#4DA8DA]/10 px-2.5 py-1 rounded-full", children: event.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-extrabold text-[#0A3D62] text-lg leading-snug", children: event.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1.5 text-xs text-slate-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-[#4DA8DA]" }),
              event.time
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-[#4DA8DA]" }),
              event.venue
            ] })
          ] })
        ] })
      ] }) }) }, event.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "gallery", className: "py-24 bg-white scroll-mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "✦ Success Stories ✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]", children: "Voices of Impact. Stories of Success." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-600", children: "Real experiences from our students, parents and alumni who've achieved their goals with us." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 marquee-track relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee-testimonials gap-6", children: [...testimonials, ...testimonials].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[min(85vw,360px)] shrink-0 rounded-3xl bg-slate-50 p-7 border border-slate-100 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-8 w-8 text-[#F4B400]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-slate-700 leading-relaxed", children: [
            '"',
            t.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full gradient-primary text-white grid place-items-center font-bold", children: t.name.charAt(0) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-[#0A3D62]", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: t.role })
            ] })
          ] })
        ] }, `${t.name}-${i}`)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] gradient-primary p-10 md:p-16 text-white shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#F4B400]/30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-amber-200", children: "Be Part of a Global Community" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-extrabold leading-tight", children: "Join thousands of learners, innovators and leaders from 50+ countries." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center", children: communityStats.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/10 border border-white/15 p-6 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl sm:text-4xl font-black text-[#F4B400]", children: item.display ?? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: item.value, suffix: item.suffix }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-bold text-white/90", children: item.label })
        ] }) }, item.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-semibold px-8 py-3.5 hover:opacity-95 transition", children: [
          "Join the Journey ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 pb-24 bg-white border-t border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center max-w-xl mx-auto mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Our Global Partners" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "marquee-track relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee-partners items-center gap-8 sm:gap-12 px-4", children: [...partners, ...partners].map((name, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-2xl sm:text-3xl font-extrabold text-slate-300 hover:text-[#0A3D62] transition-colors tracking-tight select-none", children: name }, `${name}-${i}`)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  HomePage as component
};

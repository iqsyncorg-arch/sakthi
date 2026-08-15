import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  Briefcase,
  GraduationCap,
  Users,
  Award,
  Heart,
  Clock,
  MapPin,
  Quote,
  Target,
  Lightbulb,
  Cpu,
  Scale,
  School,
  Wrench,
  BadgeCheck,
  Plane,
  Building,
  MessageCircle,
  LogIn,
  TrendingUp,
  Handshake,
  BookOpen,
} from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { Counter } from "../components/site/Counter";
import { AboutAcademySections } from "../components/site/AboutAcademySections";
import { scrollToHashOnLoad } from "../lib/scroll-to-section";
import { coursePrograms } from "../data/courses";
import { portals } from "../data/portals";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shakthi Academy — Inspiring Minds. Igniting Potential. Creating Impact." },
      {
        name: "description",
        content:
          "A global academy committed to academic excellence, skill development and real-world success. Explore programs from school to career.",
      },
      { property: "og:title", content: "Shakthi Academy" },
      {
        property: "og:description",
        content: "Education, Employment, Entrepreneurship — pathways designed for every stage of growth.",
      },
    ],
  }),
  component: HomePage,
});

const threeEPillars = [
  {
    label: "Education",
    desc: "Strong foundations from school to higher learning — building academic excellence, global readiness, and lifelong curiosity at every stage.",
    points: [
      "School & college curriculum support",
      "Study abroad & university admissions",
      "IELTS, PTE & competitive exam prep",
      "Scholarships & education loan guidance",
    ],
    icon: GraduationCap,
  },
  {
    label: "Employment",
    desc: "Job-ready skills, placements, and career pathways — connecting talent with real opportunities across industries and geographies.",
    points: [
      "Industry-aligned skill development",
      "Internships & placement assistance",
      "Resume, interview & soft-skills training",
      "Career counseling at every stage",
    ],
    icon: Briefcase,
  },
  {
    label: "Entrepreneurship",
    desc: "Innovation, leadership, and startup success — nurturing creators who turn ideas into ventures and drive meaningful change.",
    points: [
      "Business & leadership fundamentals",
      "Startup mentorship & incubation",
      "Innovation labs & project-based learning",
      "Networking with founders & industry leaders",
    ],
    icon: Lightbulb,
  },
];

const highlights = [
  {
    icon: Globe2,
    title: "Global Network",
    desc: "Partners across 20+ countries worldwide.",
  },
  {
    icon: Target,
    title: "Industry Aligned",
    desc: "Programs designed with employer input.",
  },
  {
    icon: TrendingUp,
    title: "Career Focused",
    desc: "Pathways from learning to employment.",
  },
  {
    icon: Handshake,
    title: "Inclusive & Ethical",
    desc: "Education open to every background.",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learning",
    desc: "Growth that continues beyond graduation.",
  },
  {
    icon: BadgeCheck,
    title: "Expert Guidance",
    desc: "Dedicated counselors supporting every step of your journey.",
  },
];

const offerings = coursePrograms.map(({ id, icon, name, tagline }) => ({
  id,
  icon,
  title: name,
  desc: tagline.replace(/\.$/, ""),
}));

const strengths = [
  {
    icon: Lightbulb,
    title: "Future-Ready Curriculum",
    desc: "Programs updated with industry trends and emerging technologies, preparing learners for careers today and tomorrow.",
  },
  {
    icon: Award,
    title: "Expert Mentors",
    desc: "Experienced educators and industry professionals provide personalized guidance to help every learner excel.",
  },
  {
    icon: Globe2,
    title: "Global Exposure",
    desc: "International partnerships and cross-border collaborations build cultural awareness and global confidence.",
  },
  {
    icon: Cpu,
    title: "Technology Driven",
    desc: "Smart classrooms and digital platforms enhance learning and build the digital fluency employers expect.",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    desc: "We nurture mind, body, and creativity through academics, sports, arts, leadership, and community engagement.",
  },
  {
    icon: Scale,
    title: "Values & Ethics Based Education",
    desc: "Integrity, responsibility, and respect are woven into every program to shape ethical, capable graduates.",
  },
];

const events = [
  {
    day: "25",
    month: "MAY",
    year: "2025",
    tag: "SUMMIT",
    title: "Global Education Summit 2025",
    desc: "Join educators, counselors, and students for a full-day forum on study abroad trends, admissions strategies, and global career pathways.",
    time: "9:00 AM - 5:00 PM",
    venue: "Main Auditorium",
  },
  {
    day: "12",
    month: "JUN",
    year: "2025",
    tag: "CAREER",
    title: "Industry Connect Career Fair",
    desc: "Meet hiring partners, explore internships and full-time roles, and get on-the-spot guidance from Shakthi Academy career advisors.",
    time: "10:00 AM - 4:00 PM",
    venue: "Innovation Hall",
  },
  {
    day: "08",
    month: "JUL",
    year: "2025",
    tag: "BOOTCAMP",
    title: "Entrepreneurship Bootcamp",
    desc: "A hands-on intensive covering business planning, pitching, and startup fundamentals — led by founders and industry mentors.",
    time: "9:30 AM - 6:00 PM",
    venue: "Tech Lab",
  },
];

const corporateSolutions = [
  { icon: Building, title: "Specialized Corporate Training" },
  { icon: Briefcase, title: "Streamlined Corporate Hiring" },
  { icon: Heart, title: "Corporate Social Responsibility" },
  { icon: Target, title: "Skill Assessment Programs" },
  { icon: GraduationCap, title: "End-to-End Campus Hiring" },
];

const testimonials = [
  {
    name: "Anita Desai",
    role: "Parent & Alumni",
    quote:
      "As a parent, the portal keeps me informed and connected with my child's progress every step.",
  },
  {
    name: "Priya Yahanan",
    role: "Data Scientist, Google",
    quote:
      "Shakthi Academy transformed my career. The placement support and mentorship were exceptional.",
  },
  {
    name: "Rahul Sharma",
    role: "Founder, TechVentures",
    quote:
      "The entrepreneurship hub gave me the confidence and skills to launch my own startup successfully.",
  },
];

const communityStats = [
  { value: 50, suffix: "+", label: "Countries" },
  { value: 200, suffix: "+", label: "Global Partners" },
  { value: 500, suffix: "+", label: "Events" },
  { value: null, suffix: "", label: "Opportunities", display: "LIMITLESS" },
];

const partners = ["Google", "Microsoft", "AWS", "IBM", "Infosys", "Wipro", "Deloitte", "HCL"];

function HomePage() {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* HERO — full opening screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <video
            src="https://res.cloudinary.com/dq6gr5zjc/video/upload/v1779950368/A_cinematic_premium_animation_hw4nlh.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 w-full pt-24 pb-16 md:pt-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
                style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                <span className="text-[#F4B400]">Shakthi</span>{" "}
                <span className="text-white">Academy</span>
              </h1>

              <p className="mt-5 text-lg sm:text-xl font-bold text-white tracking-wide">
                Education{" "}
                <span className="text-[#4DA8DA] font-normal">|</span> Employment{" "}
                <span className="text-[#4DA8DA] font-normal">|</span> Entrepreneurship
              </p>

              <p className="mt-6 text-xl sm:text-2xl font-semibold text-slate-200 leading-snug">
                Inspiring Minds. Igniting Potential. Creating Impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-semibold px-6 py-3.5 shadow-glow hover:scale-[1.02] transition duration-200"
              >
                Explore Programs <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/admissions"
                hash="application"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-sm font-semibold px-6 py-3.5 border border-white/20 hover:bg-white/20 transition"
              >
                Access Portals
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3E VISION */}
      <section className="bg-[#0A3D62] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Our 3E Vision
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
                From knowledge to career to impact
              </h2>
              <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed">
                The 3E Model connects learning to livelihood and leadership — so every learner
                can grow from knowledge to career to impact.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 md:mt-20 grid md:grid-cols-3 md:divide-x divide-white/10 border-y border-white/10 md:border-y-0">
            {threeEPillars.map((pillar, i) => (
              <Reveal key={pillar.label} delay={i * 0.08}>
                <article className="py-10 md:py-0 md:px-10 lg:px-12 border-b border-white/10 md:border-b-0 last:border-b-0">
                  <p className="text-4xl sm:text-5xl font-extralight text-white/25 tabular-nums leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <pillar.icon className="h-5 w-5 text-[#F4B400]" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-xl font-bold tracking-tight">{pillar.label}</h3>
                  </div>
                  <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                    {pillar.desc}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {pillar.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-white/60 leading-relaxed"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#F4B400]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTALS / ADMISSIONS */}
      <section id="portals" className="py-20 bg-white border-b border-slate-100 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div className="max-w-xl">
                <span className="section-eyebrow">Admissions</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]">Apply & Access Portals</h2>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Register online or access your student, parent, or employer portal.
                </p>
              </div>
              <Link
                to="/admissions"
                hash="application"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-5 py-3 shadow-glow hover:opacity-95 transition shrink-0"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {portals.map((portal, i) => (
              <Reveal key={portal.title} delay={i * 0.06}>
                <div
                  className={`relative h-full min-h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br ${portal.accent} border border-slate-100 hover:-translate-y-1 hover:shadow-soft transition-all duration-300`}
                >
                  <div className="relative z-10 flex h-full flex-col justify-between p-7 pr-[42%]">
                    <div>
                      <div
                        className={`h-12 w-12 rounded-xl bg-white shadow-sm grid place-items-center ${portal.iconColor}`}
                      >
                        <portal.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-lg font-extrabold text-[#0A3D62] uppercase tracking-wide">
                        {portal.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{portal.desc}</p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0A3D62]">
                      <LogIn className="h-4 w-4" />
                      {portal.cta}
                    </span>
                  </div>
                  <img
                    src={portal.image}
                    alt={portal.title}
                    className="absolute bottom-0 right-0 h-[88%] max-h-60 w-auto max-w-[58%] object-contain object-bottom pointer-events-none select-none"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS / CAREERS CTA */}
      <section id="careers" className="gradient-primary scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Why Shakthi Academy</p>
                <h2 className="mt-2 text-xl sm:text-2xl font-extrabold text-white">Built for global careers</h2>
              </div>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-5 py-2.5 shadow-glow hover:opacity-95 transition shrink-0"
              >
                Explore Careers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm px-4 py-5 hover:bg-white/15 hover:border-[#F4B400]/40 transition-all duration-300 h-full text-center">
                  <div className="mx-auto h-11 w-11 rounded-xl bg-[#F4B400]/20 text-[#F4B400] grid place-items-center">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-3 font-extrabold text-white text-sm sm:text-base">{item.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section id="offerings" className="py-24 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <span className="section-eyebrow">✦ Our Offerings</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]">
                Explore Our Programs
              </h2>
              <p className="mt-4 text-slate-600">
                Pathways from school to career — designed for every stage of growth.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {offerings.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <Link
                  to="/courses"
                  hash={item.id}
                  className="group block h-full rounded-2xl p-6 bg-white border border-slate-100 hover:border-[#4DA8DA]/40 hover:-translate-y-1 hover:shadow-soft transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center text-white shadow-glow">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#0A3D62] group-hover:text-[#4DA8DA] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4DA8DA]">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="py-24 relative overflow-hidden gradient-primary text-white">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#F4B400]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#4DA8DA]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                ✦ Our Strength
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                What Makes Shakthi Academy Unique?
              </h2>
              <p className="mt-4 text-white/80">
                We go beyond textbooks to build confident, skilled and future-ready individuals.
                Here's what sets us apart:
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {strengths.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <div className="rounded-2xl p-6 border border-white/15 bg-white/10 backdrop-blur-sm h-full hover:bg-white/15 hover:border-[#F4B400]/40 transition duration-300">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-[#F4B400]/20 text-[#F4B400] grid place-items-center shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm sm:text-[15px] text-white/75 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AboutAcademySections sectionId="about-shakthi" />

      {/* CORPORATE SOLUTIONS */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <header className="mx-auto max-w-2xl text-center mb-14 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] tracking-tight">
                Shakthi Academy for Corporates
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Explore tailored solutions for organizations, employers, and institutions.
              </p>
            </header>
          </Reveal>

          <div className="mx-auto max-w-6xl overflow-x-auto pb-2">
            <div className="flex min-w-[720px] md:min-w-0 md:grid md:grid-cols-5 gap-0">
              {corporateSolutions.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <article className="relative flex-1 px-3 md:px-2">
                    <div className="flex items-start">
                      <div className="relative shrink-0">
                        <div className="grid h-16 w-16 place-items-center rounded-2xl gradient-primary shadow-md">
                          <item.icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                        </div>
                        <div
                          className="absolute left-1/2 top-full h-10 w-px -translate-x-1/2 border-l border-dashed border-[#0A3D62]/35"
                          aria-hidden
                        />
                      </div>
                      {i < corporateSolutions.length - 1 && (
                        <div
                          className="mt-8 h-px flex-1 border-t border-dashed border-[#0A3D62]/35"
                          aria-hidden
                        />
                      )}
                    </div>
                    <h3 className="mt-10 pr-2 text-sm sm:text-base font-bold text-[#0A3D62] leading-snug">
                      {item.title}
                    </h3>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="student-life" className="py-24 bg-slate-50/60 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <div className="max-w-xl">
                <span className="section-eyebrow">Upcoming Events</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]">
                  Be Part of Our Next Big Event
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <Reveal key={event.title} delay={i * 0.06}>
                <article className="h-full rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-soft hover:border-[#4DA8DA]/25 transition-all duration-300">
                  <div className="flex">
                    <div className="shrink-0 w-24 gradient-primary text-white flex flex-col items-center justify-center py-6 px-3 text-center">
                      <span className="text-3xl font-black leading-none">{event.day}</span>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest mt-1">
                        {event.month}
                      </span>
                      <span className="text-[10px] text-white/70 mt-0.5">{event.year}</span>
                    </div>
                    <div className="flex-1 p-5">
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#4DA8DA] bg-[#4DA8DA]/10 px-2.5 py-1 rounded-full">
                        {event.tag}
                      </span>
                      <h3 className="mt-3 font-extrabold text-[#0A3D62] text-lg leading-snug">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{event.desc}</p>
                      <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                        <p className="flex items-center gap-2">
                          <Clock className="h-3.5 w-3.5 text-[#4DA8DA]" />
                          {event.time}
                        </p>
                        <p className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-[#4DA8DA]" />
                          {event.venue}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="gallery" className="py-24 bg-white scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="section-eyebrow">✦ Success Stories ✦</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]">
                Voices of Impact. Stories of Success.
              </h2>
              <p className="mt-4 text-slate-600">
                Real experiences from our students, parents and alumni who've achieved their goals
                with us.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 marquee-track relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent" />
            <div className="flex w-max animate-marquee-testimonials gap-6">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="relative w-[min(85vw,360px)] shrink-0 rounded-3xl bg-slate-50 p-7 border border-slate-100 shadow-soft"
                >
                  <Quote className="h-8 w-8 text-[#F4B400]" />
                  <p className="mt-4 text-slate-700 leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full gradient-primary text-white grid place-items-center font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A3D62]">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL COMMUNITY */}
      <section className="py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-[2rem] gradient-primary p-10 md:p-16 text-white shadow-glow">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#F4B400]/30 blur-3xl" />
            <div className="relative">
              <Reveal>
                <div className="text-center max-w-2xl mx-auto">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-200">
                    Be Part of a Global Community
                  </span>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
                    Join thousands of learners, innovators and leaders from 50+ countries.
                  </h2>
                </div>
              </Reveal>

              <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {communityStats.map((item, i) => (
                  <Reveal key={item.label} delay={i * 0.05}>
                    <div className="rounded-2xl bg-white/10 border border-white/15 p-6 backdrop-blur-sm">
                      <span className="text-3xl sm:text-4xl font-black text-[#F4B400]">
                        {item.display ?? (
                          <>
                            <Counter to={item.value!} suffix={item.suffix} />
                          </>
                        )}
                      </span>
                      <p className="mt-2 text-sm font-bold text-white/90">{item.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-10 text-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-semibold px-8 py-3.5 hover:opacity-95 transition"
                >
                  Join the Journey <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 pb-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="section-eyebrow">Our Global Partners</span>
            </div>
          </Reveal>

          <div className="marquee-track relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent" />
            <div className="flex w-max animate-marquee-partners items-center gap-8 sm:gap-12 px-4">
              {[...partners, ...partners].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="shrink-0 text-2xl sm:text-3xl font-extrabold text-slate-300 hover:text-[#0A3D62] transition-colors tracking-tight select-none"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

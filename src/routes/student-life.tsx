import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Heart } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import studentLifeHeroImg from "../assets/student-life-hero.jpg";
import coursesImg from "../assets/courses-hero.jpg";
import {
  campusMoments,
  studentClubs,
  studentLifeCta,
  studentLifeHero,
  studentLifeIntro,
  studentLifePillars,
  studentLifeStats,
  studentSupport,
} from "../data/student-life";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: "Student Life | Shakthi Academy" },
      {
        name: "description",
        content:
          "Life at Shakthi Academy — clubs, activities, student support, and a vibrant community beyond the classroom.",
      },
    ],
  }),
  component: StudentLifePage,
});

function Ornament() {
  return (
    <span className="inline-block text-[#F4B400] text-lg leading-none select-none" aria-hidden>
      ❧
    </span>
  );
}

function StudentLifePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative overflow-hidden bg-[#0A3D62] min-h-[420px] sm:min-h-[460px] lg:min-h-[500px]">
        {/* Right photo with diagonal cut */}
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-[58%] z-0"
          style={{
            clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <img
            src={studentLifeHeroImg}
            alt="Student learning in classroom"
            className="h-full w-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62] via-[#0A3D62]/35 to-transparent lg:via-[#0A3D62]/20" />
          <div className="absolute inset-0 bg-[#0A3D62]/25 lg:bg-transparent" />
        </div>

        {/* Soft gold glow */}
        <div className="pointer-events-none absolute -left-24 top-1/3 h-56 w-56 rounded-full bg-[#F4B400]/15 blur-3xl z-[1]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-12 lg:pb-14 flex min-h-[420px] sm:min-h-[460px] lg:min-h-[500px] items-center">
          <div className="max-w-xl lg:max-w-[42%]">
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#F4B400]"
            >
              <Heart className="h-3 w-3" />
              {studentLifeHero.eyebrow}
            </motion.p>

            {/* Compact stacked headline */}
            <div className="mt-4 space-y-0.5">
              {["Learn.", "Connect.", "Experience.", "Grow."].map((word, i) => (
                <motion.h1
                  key={word}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.06 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.05] tracking-tight ${
                    i === 3 ? "text-[#F4B400]" : "text-white"
                  }`}
                >
                  {word}
                </motion.h1>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center gap-2.5"
            >
              <a
                href="#life-at-shakthi"
                className="inline-flex items-center gap-2 rounded-full bg-[#F4B400] text-[#0A3D62] text-xs sm:text-sm font-bold px-5 py-2.5 shadow-glow hover:opacity-95 transition"
              >
                Explore Student Life <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#clubs"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white text-xs sm:text-sm font-bold px-4 py-2.5 hover:bg-white/10 transition"
              >
                Clubs & Activities
              </a>
            </motion.div>

            {/* Quick jump chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.55 }}
              className="mt-6 flex flex-wrap gap-1.5"
            >
              {[
                { href: "#life-at-shakthi", label: "Campus Life" },
                { href: "#clubs", label: "Clubs" },
                { href: "#support", label: "Support" },
              ].map((chip) => (
                <a
                  key={chip.href}
                  href={chip.href}
                  className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/85 hover:bg-white/15 transition"
                >
                  {chip.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="life-at-shakthi" className="py-16 md:py-20 bg-white border-b border-slate-100 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Reveal>
              <div className="relative">
                <div className="relative overflow-hidden rounded-[1.75rem] aspect-[4/3] lg:min-h-[380px] shadow-lg">
                  <img
                    src={studentLifeHeroImg}
                    alt="Students participating in class at Shakthi Academy"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A3D62]/35 to-transparent" />
                </div>
                <div className="absolute -bottom-5 -right-3 sm:right-6 rounded-2xl bg-[#0A3D62] text-white px-5 py-4 shadow-glow max-w-[220px]">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#F4B400]">Campus spirit</p>
                  <p className="mt-1 text-sm font-semibold leading-snug">Learning, friendship &amp; growth — every day.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="lg:pl-2 lg:pt-2">
                <span className="section-eyebrow">{studentLifeIntro.eyebrow}</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                  {studentLifeIntro.title}
                </h2>
                <div className="mt-3">
                  <Ornament />
                </div>
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {studentLifeIntro.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {studentLifeIntro.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-[#4DA8DA]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {studentLifeStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.05}>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-5 py-6 text-center">
                  <p className="text-2xl font-extrabold text-[#0A3D62]">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {studentLifePillars.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:border-[#4DA8DA]/35 hover:shadow-soft transition">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4DA8DA]/15 text-[#0A3D62] group-hover:bg-[#0A3D62] group-hover:text-[#F4B400] transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-[#0A3D62]">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                    {item.points.map((point) => (
                      <li key={point} className="text-xs font-medium text-slate-500 flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#F4B400]" />
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

      <section className="py-16 md:py-20 bg-[#0A3D62] text-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#F4B400]">
                Campus moments
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold">Experiences That Shape You</h2>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">
                Beyond lectures — moments that build belonging, confidence and lifelong memories.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {campusMoments.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4B400]/15 text-[#F4B400]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="clubs" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-100 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="section-eyebrow">Clubs &amp; Activities</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                  Discover. Participate. Lead.
                </h2>
                <div className="mt-3">
                  <Ornament />
                </div>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Find your people, build new skills, and take the lead in clubs that match your interests.
                </p>
              </div>
              <div className="relative hidden lg:block w-56 h-36 overflow-hidden rounded-2xl shadow-md">
                <img src={coursesImg} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[#0A3D62]/25" />
              </div>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {studentClubs.map((club, i) => (
              <Reveal key={club.title} delay={i * 0.04}>
                <article className="group h-full rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-soft hover:border-[#4DA8DA]/30 transition overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#4DA8DA]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-[#F4B400]">
                      <club.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-extrabold tabular-nums text-slate-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="relative mt-4 font-bold text-[#0A3D62]">{club.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-600 leading-relaxed">{club.desc}</p>
                  <div className="relative mt-4 flex flex-wrap gap-1.5">
                    {club.activities.map((activity) => (
                      <span
                        key={activity}
                        className="rounded-full bg-slate-50 border border-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-100 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="section-eyebrow">Student Support</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                We&apos;re Here for You
              </h2>
              <div className="mt-3">
                <Ornament />
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                From academics to wellbeing and campus logistics — support is built into everyday student life.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {studentSupport.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="h-full rounded-2xl bg-white border border-slate-100 p-6 sm:p-7 shadow-sm hover:shadow-soft hover:border-[#4DA8DA]/30 transition">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4B400]/15 text-[#0A3D62]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A3D62] text-lg">{item.title}</h3>
                      <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      <p className="mt-3 text-xs text-slate-500 leading-relaxed border-l-2 border-[#4DA8DA]/40 pl-3">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-8 rounded-2xl gradient-primary p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-white">
              <div>
                <h3 className="text-lg font-bold">Need help right away?</h3>
                <p className="mt-1 text-sm text-white/80">
                  Reach our team for counselling, academic help or campus assistance.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-5 py-3 hover:opacity-95 transition shrink-0"
              >
                Contact Support <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 gradient-primary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-amber-200">
              {studentLifeCta.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
              {studentLifeCta.title}
            </h2>
            <p className="mt-3 text-white/80 leading-relaxed">{studentLifeCta.desc}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-6 py-3.5 shadow-glow hover:opacity-95 transition"
              >
                Explore Admissions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-sm font-bold px-6 py-3.5 border border-white/20 hover:bg-white/15 transition"
              >
                View Gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

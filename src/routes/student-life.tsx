import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Code2,
  Compass,
  Heart,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  Palette,
  Sparkles,
  Target,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { useT } from "../i18n";
import studentLifeHeroImg from "../assets/student-life-hero.jpg";
import coursesImg from "../assets/courses-hero.jpg";

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

const pillarDefs = [
  { id: "academic", icon: BookOpen },
  { id: "skill", icon: Wrench },
  { id: "community", icon: Users },
  { id: "personal", icon: Sparkles },
] as const;

const clubDefs = [
  { id: "academic", icon: Target },
  { id: "technology", icon: Code2 },
  { id: "creative", icon: Palette },
  { id: "entrepreneurship", icon: Lightbulb },
  { id: "communication", icon: Megaphone },
  { id: "social", icon: HeartHandshake },
] as const;

const supportDefs = [
  { id: "academic", icon: BookOpen },
  { id: "career", icon: Compass },
  { id: "counselling", icon: HeartHandshake },
  { id: "assistance", icon: Briefcase },
] as const;

const momentDefs = [
  { id: "orientation" as const, icon: CalendarDays },
  { id: "competitions" as const, icon: Trophy },
  { id: "mentorship" as const, icon: Users },
  { id: "cultural" as const, icon: Sparkles },
];

const statsDefs = [
  { value: "6+", key: "clubs" as const },
  { valueKey: "events" as const, key: "events" as const },
  { value: "1:1", key: "mentorship" as const },
  { valueKey: "support" as const, key: "support" as const },
];

function StudentLifePage() {
  const { t } = useT();

  const heroWords = [
    t("studentLife.hero.learn"),
    t("studentLife.hero.connect"),
    t("studentLife.hero.experience"),
    t("studentLife.hero.grow"),
  ];

  const introHighlights = [0, 1, 2].map((i) => t(`studentLife.intro.highlights.${i}`));

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative overflow-hidden bg-[#0A3D62] min-h-[420px] sm:min-h-[460px] lg:min-h-[500px]">
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
              {t("studentLife.hero.eyebrow")}
            </motion.p>

            <div className="mt-4 space-y-0.5">
              {heroWords.map((word, i) => (
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
                {t("actions.explore")} <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#clubs"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white text-xs sm:text-sm font-bold px-4 py-2.5 hover:bg-white/10 transition"
              >
                {t("studentLife.clubs.eyebrow")}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.55 }}
              className="mt-6 flex flex-wrap gap-1.5"
            >
              {[
                { href: "#life-at-shakthi", label: t("studentLife.moments.eyebrow") },
                { href: "#clubs", label: t("studentLife.clubs.eyebrow") },
                { href: "#support", label: t("studentLife.support.eyebrow") },
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
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#F4B400]">
                    {t("studentLife.moments.eyebrow")}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-snug">{t("studentLife.cta.desc")}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="lg:pl-2 lg:pt-2">
                <span className="section-eyebrow">{t("studentLife.intro.eyebrow")}</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                  {t("studentLife.intro.title")}
                </h2>
                <div className="mt-3">
                  <Ornament />
                </div>
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {t("studentLife.intro.body")}
                </p>
                <ul className="mt-6 space-y-3">
                  {introHighlights.map((item) => (
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
            {statsDefs.map((stat, i) => (
              <Reveal key={stat.key} delay={i * 0.05}>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-5 py-6 text-center">
                  <p className="text-2xl font-extrabold text-[#0A3D62]">
                    {"valueKey" in stat
                      ? t(`studentLifeMoments.statsValues.${stat.valueKey}`)
                      : stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {t(`studentLife.stats.${stat.key}`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 mb-4">
            <span className="section-eyebrow">{t("studentLife.pillars.eyebrow")}</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
              {t("studentLife.pillars.title")}
            </h2>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillarDefs.map((item, i) => {
              const points = [0, 1, 2].map((idx) => t(`studentLife.pillars.${item.id}.points.${idx}`));
              return (
                <Reveal key={item.id} delay={i * 0.05}>
                  <article className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:border-[#4DA8DA]/35 hover:shadow-soft transition">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4DA8DA]/15 text-[#0A3D62] group-hover:bg-[#0A3D62] group-hover:text-[#F4B400] transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-bold text-[#0A3D62]">{t(`studentLife.pillars.${item.id}.title`)}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {t(`studentLife.pillars.${item.id}.desc`)}
                    </p>
                    <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                      {points.map((point) => (
                        <li key={point} className="text-xs font-medium text-slate-500 flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-[#F4B400]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#0A3D62] text-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#F4B400]">
                {t("studentLife.moments.eyebrow")}
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold">{t("studentLife.moments.title")}</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {momentDefs.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4B400]/15 text-[#F4B400]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold">{t(`studentLifeMoments.${item.id}.title`)}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {t(`studentLifeMoments.${item.id}.desc`)}
                  </p>
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
                <span className="section-eyebrow">{t("studentLife.clubs.eyebrow")}</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                  {t("studentLife.clubs.title")}
                </h2>
                <div className="mt-3">
                  <Ornament />
                </div>
              </div>
              <div className="relative hidden lg:block w-56 h-36 overflow-hidden rounded-2xl shadow-md">
                <img src={coursesImg} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[#0A3D62]/25" />
              </div>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clubDefs.map((club, i) => {
              const activities = [0, 1, 2].map((idx) => t(`studentLife.clubs.${club.id}.activities.${idx}`));
              return (
                <Reveal key={club.id} delay={i * 0.04}>
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
                    <h3 className="relative mt-4 font-bold text-[#0A3D62]">{t(`studentLife.clubs.${club.id}.title`)}</h3>
                    <p className="relative mt-2 text-sm text-slate-600 leading-relaxed">
                      {t(`studentLife.clubs.${club.id}.desc`)}
                    </p>
                    <div className="relative mt-4 flex flex-wrap gap-1.5">
                      {activities.map((activity) => (
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
              );
            })}
          </div>
        </div>
      </section>

      <section id="support" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-100 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="section-eyebrow">{t("studentLife.support.eyebrow")}</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                {t("studentLife.support.title")}
              </h2>
              <div className="mt-3">
                <Ornament />
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {t("studentLife.support.subtitle")}
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {supportDefs.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <article className="h-full rounded-2xl bg-white border border-slate-100 p-6 sm:p-7 shadow-sm hover:shadow-soft hover:border-[#4DA8DA]/30 transition">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4B400]/15 text-[#0A3D62]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A3D62] text-lg">
                        {t(`studentLife.support.${item.id}.title`)}
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                        {t(`studentLife.support.${item.id}.desc`)}
                      </p>
                      <p className="mt-3 text-xs text-slate-500 leading-relaxed border-l-2 border-[#4DA8DA]/40 pl-3">
                        {t(`studentLife.support.${item.id}.detail`)}
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
                <h3 className="text-lg font-bold">{t("studentLife.support.contactCta")}</h3>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-5 py-3 hover:opacity-95 transition shrink-0"
              >
                {t("actions.contactUs")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 gradient-primary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-amber-200">
              {t("studentLife.cta.eyebrow")}
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
              {t("studentLife.cta.title")}
            </h2>
            <p className="mt-3 text-white/80 leading-relaxed">{t("studentLife.cta.desc")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-6 py-3.5 shadow-glow hover:opacity-95 transition"
              >
                {t("actions.explore")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-sm font-bold px-6 py-3.5 border border-white/20 hover:bg-white/15 transition"
              >
                {t("studentLife.cta.gallery")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import studentLifeHeroImg from "../assets/student-life-hero.jpg";
import {
  studentClubs,
  studentLifeCta,
  studentLifeHero,
  studentLifeIntro,
  studentLifePillars,
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

      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={studentLifeHeroImg}
            alt="Student learning in classroom"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62]/92 via-[#0A3D62]/85 to-[#4DA8DA]/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/15">
              <Heart className="h-3.5 w-3.5 text-[#F4B400]" />
              {studentLifeHero.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {studentLifeHero.titleLead}{" "}
              <span className="text-[#F4B400]">{studentLifeHero.titleAccent}</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              {studentLifeHero.intro}
            </p>
            <a
              href="#life-at-shakthi"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-6 py-3 shadow-glow hover:opacity-95 transition"
            >
              Explore Student Life <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="life-at-shakthi" className="py-16 md:py-20 bg-white border-b border-slate-100 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Reveal className="order-1 lg:order-none">
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
                <img
                  src={studentLifeHeroImg}
                  alt="Students participating in class at Shakthi Academy"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A3D62]/20 to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={0.08} className="order-2 lg:order-none">
              <div className="lg:pl-2">
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
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {studentLifePillars.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-slate-100 bg-slate-50/50 p-6 hover:border-[#4DA8DA]/30 transition">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4DA8DA]/15 text-[#0A3D62]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-[#0A3D62]">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="clubs" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-100 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="section-eyebrow">Clubs & Activities</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                Discover. Participate. Lead.
              </h2>
              <div className="mt-3">
                <Ornament />
              </div>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {studentClubs.map((club, i) => (
              <Reveal key={club.title} delay={i * 0.04}>
                <article className="h-full rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-soft hover:border-[#4DA8DA]/25 transition">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-[#F4B400]">
                    <club.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-[#0A3D62]">{club.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{club.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-16 md:py-20 bg-white border-b border-slate-100 scroll-mt-28">
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
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {studentSupport.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-slate-100 bg-slate-50/50 p-6 hover:border-[#4DA8DA]/30 transition">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4B400]/15 text-[#0A3D62]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-[#0A3D62]">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
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
                to="/"
                hash="gallery"
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

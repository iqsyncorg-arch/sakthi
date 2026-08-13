import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Compass, Target, RefreshCw, BarChart3,
  Mic, ShieldCheck, MessageCircle, CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import {
  careerChallenges, careerClosing, careerCommitment, careerIntro, careerPhilosophy,
  careerImages,
} from "../data/career-counseling";

export const Route = createFileRoute("/career-counseling")({
  head: () => ({
    meta: [
      { title: "Career Counseling | Shakthi Academy" },
      { name: "description", content: "Crafting a future, not just a job. Psychometric assessments, career roadmaps, and ethical counseling from Shakthi Academy." },
    ],
  }),
  component: CareerCounselingPage,
});

const challengeIcons: LucideIcon[] = [Compass, Target, RefreshCw, BarChart3, Mic];

function CareerCounselingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-950 min-h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={careerImages.hero}
            alt="Career counseling session with a professional advisor"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 w-full pb-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10">
              <Compass className="h-3.5 w-3.5 text-[#F4B400]" />
              Career Counseling
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              Crafting a Future,{" "}
              <span className="bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent">
                Not Just a Job
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              {careerIntro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY + IMAGE */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Reveal>
              <div>
                <span className="section-eyebrow">Our philosophy</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                  Career counseling that eliminates confusion
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed text-base md:text-lg">{careerPhilosophy}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative rounded-3xl overflow-hidden shadow-soft aspect-[4/3] lg:aspect-auto lg:min-h-[360px]">
                <img
                  src={careerImages.philosophy}
                  alt="One-on-one career guidance with an Shakthi Academy advisor"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm font-semibold drop-shadow">
                    Personalized, ethical guidance — never pre-packaged agendas.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ROADMAP IMAGE BANNER */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden h-48 sm:h-56 md:h-64 shadow-soft">
              <img
                src={careerImages.roadmap}
                alt="Strategic career roadmap and planning"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62]/85 via-[#0A3D62]/60 to-transparent flex items-center">
                <div className="px-8 md:px-12 max-w-xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#F4B400]">Strategic planning</p>
                  <p className="mt-2 text-lg sm:text-xl font-bold text-white leading-snug">
                    From psychometric insight to a step-by-step roadmap — we map every milestone with you.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-16 md:py-20 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto mb-14">
              <span className="text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase text-[#0A3D62]">
                How we help
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A3D62] leading-tight">
                The real challenges we help you solve
              </h2>
            </div>
          </Reveal>
          <div className="space-y-6">
            {careerChallenges.map((c, i) => {
              const Icon = challengeIcons[i] ?? CheckCircle2;
              return (
                <Reveal key={c.title} delay={i * 0.04}>
                  <div className="rounded-3xl bg-white border border-slate-100 shadow-soft p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                      <div className="shrink-0 h-12 w-12 rounded-xl gradient-primary grid place-items-center text-white shadow-glow">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#0A3D62]">{c.title}</h3>
                        <p className="mt-3 text-sm font-semibold text-slate-500">The reality</p>
                        <p className="mt-1 text-slate-600 leading-relaxed">{c.reality}</p>
                        <p className="mt-4 text-sm font-semibold text-[#4DA8DA]">How we help</p>
                        <p className="mt-1 text-slate-600 leading-relaxed">{c.help}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMITMENT + IMAGE */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="rounded-3xl gradient-primary overflow-hidden shadow-glow relative">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#F4B400]/20 blur-3xl" />
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[280px] lg:min-h-full order-2 lg:order-1">
                  <img
                    src={careerImages.narrative}
                    alt="Collaborative career coaching and professional growth"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0A3D62]/30 lg:bg-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0A3D62]/80" />
                </div>
                <div className="relative p-8 md:p-12 text-white order-1 lg:order-2">
                  <ShieldCheck className="h-10 w-10 text-[#F4B400]" />
                  <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold">The Shakthi Academy Commitment</h2>
                  <p className="mt-4 text-white/85 leading-relaxed">{careerCommitment}</p>
                  <p className="mt-6 text-lg font-semibold text-[#F4B400]">{careerClosing}</p>
                  <a
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-[#0A3D62] text-sm font-semibold px-6 py-3.5 hover:bg-white/90 transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Schedule a Discovery Session <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

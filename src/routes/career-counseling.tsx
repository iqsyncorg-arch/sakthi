import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Compass, ShieldCheck, MessageCircle } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { useT } from "../i18n";
import { careerChallengeDefs, careerImages } from "../data/career-counseling";

export const Route = createFileRoute("/career-counseling")({
  head: () => ({
    meta: [
      { title: "Career Counseling | Shakthi Academy" },
      {
        name: "description",
        content:
          "Crafting a future, not just a job. Psychometric assessments, career roadmaps, and ethical counseling from Shakthi Academy.",
      },
    ],
  }),
  component: CareerCounselingPage,
});

function CareerCounselingPage() {
  const { t } = useT();
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

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
              {t("services.careerCounseling.hero.eyebrow")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {t("services.careerCounseling.hero.title")}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              {t("careerCounselingBody.intro")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Reveal>
              <div>
                <p className="mt-4 text-slate-600 leading-relaxed text-base md:text-lg">
                  {t("careerCounselingBody.philosophy")}
                </p>
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
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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
                  <p className="mt-2 text-lg sm:text-xl font-bold text-white leading-snug">
                    {t("careerCounselingBody.challenges.roadmap.title")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-6">
            {careerChallengeDefs.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.04}>
                <div className="rounded-3xl bg-white border border-slate-100 shadow-soft p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-5">
                    <div className="shrink-0 h-12 w-12 rounded-xl gradient-primary grid place-items-center text-white shadow-glow">
                      <c.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0A3D62]">
                        {t(`careerCounselingBody.challenges.${c.id}.title`)}
                      </h3>
                      <p className="mt-3 text-slate-600 leading-relaxed">
                        {t(`careerCounselingBody.challenges.${c.id}.reality`)}
                      </p>
                      <p className="mt-4 text-slate-600 leading-relaxed">
                        {t(`careerCounselingBody.challenges.${c.id}.help`)}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
                  <p className="mt-4 text-white/85 leading-relaxed">
                    {t("careerCounselingBody.commitment")}
                  </p>
                  <p className="mt-6 text-lg font-semibold text-[#F4B400]">
                    {t("careerCounselingBody.closing")}
                  </p>
                  <a
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-[#0A3D62] text-sm font-semibold px-6 py-3.5 hover:bg-white/90 transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t("actions.bookConsultation")} <ArrowRight className="h-4 w-4" />
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

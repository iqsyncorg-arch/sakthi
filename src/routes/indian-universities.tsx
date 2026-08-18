import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Landmark, Sparkles, GraduationCap, Building2, MapPin } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { useT } from "../i18n";

export const Route = createFileRoute("/indian-universities")({
  head: () => ({
    meta: [
      { title: "Indian Universities | Shakthi Academy" },
      {
        name: "description",
        content: "Shakthi Academy guidance for top Indian universities — admissions counseling for UG, PG, and professional programs across India.",
      },
    ],
  }),
  component: IndianUniversitiesPage,
});

const highlights = [
  "University shortlisting aligned with your academic profile and goals",
  "Admission strategy for engineering, management, sciences, and professional courses",
  "Counseling for entrance exams, deadlines, and documentation",
  "End-to-end support from application to enrollment",
];

function IndianUniversitiesPage() {
  const { t } = useT();
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/indian-universities-hero.png"
            alt="Indian Universities"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/15 blur-3xl z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10">
              <Landmark className="h-3.5 w-3.5 text-[#F4B400]" />
              {t("services.indianUniversities.hero.eyebrow")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {t("services.indianUniversities.hero.title")}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t("services.indianUniversities.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="rounded-3xl border border-[#F4B400]/30 bg-[#F4B400]/10 p-6 md:p-8 text-center max-w-3xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0A3D62] mb-2">Note</p>
              <p className="text-lg md:text-xl font-extrabold text-[#0A3D62]">
                Adding Top Universities soon!
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                We are curating our partner list of India&apos;s top universities. Reach out now for early counseling and priority updates when listings go live.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-2 gap-8 items-start">
            <Reveal delay={0.05}>
              <div className="rounded-3xl bg-white border border-slate-100 shadow-soft p-6 md:p-8 h-full">
                <h2 className="text-xl font-extrabold text-[#0A3D62] flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#F4B400]" />
                  How we help
                </h2>
                <ul className="mt-6 space-y-4">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                      <GraduationCap className="h-4 w-4 shrink-0 text-[#4DA8DA] mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Building2, title: "Top Institutions", desc: "IITs, NITs, central & state universities — expanding soon." },
                  { icon: MapPin, title: "Pan-India Options", desc: "Counseling across metros and tier-2 education hubs." },
                  { icon: GraduationCap, title: "UG & PG Programs", desc: "Engineering, management, sciences, law, and more." },
                  { icon: Landmark, title: "Domestic Focus", desc: "Dedicated support for students choosing India-first pathways." },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft"
                  >
                    <card.icon className="h-6 w-6 text-[#4DA8DA]" />
                    <h3 className="mt-3 font-bold text-[#0A3D62] text-sm">{card.title}</h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Plane, MessageCircle, CheckCircle2 } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { useT } from "../i18n";
import {
  travelItemIcons,
  travelSectionDefs,
  travelSectionIcons,
  type TravelSectionDef,
} from "../data/travel-assistance";

export const Route = createFileRoute("/travel-assistance")({
  head: () => ({
    meta: [
      { title: "Personalized Travel Assistance | Shakthi Academy" },
      {
        name: "description",
        content:
          "Shakthi Academy travel assistance — pre-travel planning, flight booking, accommodation, airport support, and post-arrival orientation for students studying abroad.",
      },
    ],
  }),
  component: TravelAssistancePage,
});

function ServiceSectionBlock({ section }: { section: TravelSectionDef }) {
  const { t } = useT();
  const SectionIcon = travelSectionIcons[section.id] ?? Plane;

  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-soft overflow-hidden">
      <div className="flex items-center gap-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-6 py-5 md:px-8">
        <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center text-white shadow-glow">
          <SectionIcon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A3D62]">
            {t(`travelBody.sections.${section.id}.title`)}
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            {t(`travelBody.sections.${section.id}.summary`)}
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8 grid sm:grid-cols-2 gap-4">
        {section.itemIds.map((itemId) => {
          const Icon = travelItemIcons[itemId] ?? CheckCircle2;
          return (
            <div
              key={itemId}
              className="rounded-2xl border border-slate-100 p-5 hover:border-[#4DA8DA]/30 transition"
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 h-10 w-10 rounded-xl bg-[#0A3D62]/8 grid place-items-center">
                  <Icon className="h-5 w-5 text-[#4DA8DA]" />
                </div>
                <div>
                  <p className="font-bold text-[#0A3D62]">
                    {t(`travelBody.sections.${section.id}.items.${itemId}.title`)}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {t(`travelBody.sections.${section.id}.items.${itemId}.desc`)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TravelAssistancePage() {
  const { t } = useT();
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80"
            alt="Personalized Travel Assistance"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/15 blur-3xl z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10">
              <Plane className="h-3.5 w-3.5 text-[#F4B400]" />
              {t("services.travel.hero.eyebrow")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {t("services.travel.hero.title")}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              {t("services.travel.hero.subtitle")}
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition"
            >
              <MessageCircle className="h-4 w-4" />
              {t("actions.contactUs")}
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-3xl">
              <p className="mt-4 text-slate-600 leading-relaxed text-base md:text-lg">
                {t("travelBody.intro")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-10 space-y-8">
            {travelSectionDefs.map((section, i) => (
              <Reveal key={section.id} delay={i * 0.05}>
                <ServiceSectionBlock section={section} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 space-y-8">
          <Reveal>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg max-w-4xl">
              {t("travelBody.closing")}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-3xl gradient-primary text-white relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#F4B400]/20 blur-3xl" />
              <div className="relative p-8 md:p-12 max-w-3xl">
                <Plane className="h-10 w-10 text-[#F4B400]" />
                <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold">
                  {t("actions.bookConsultation")}
                </h2>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-[#0A3D62] text-sm font-semibold px-6 py-3.5 hover:bg-white/90 transition"
                >
                  {t("actions.bookConsultation")} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileCheck2,
  CheckCircle2,
  MessageCircle,
  Home,
} from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { useT } from "../i18n";
import {
  visaHighlightIds,
  visaImages,
  visaItemIcons,
  visaSectionDefs,
  visaSectionIcons,
  type VisaSectionDef,
} from "../data/visa-assistance";

export const Route = createFileRoute("/visa-assistance")({
  head: () => ({
    meta: [
      { title: "Visa Assistance | Shakthi Academy" },
      {
        name: "description",
        content:
          "Expert visa guidance from Shakthi Academy — documentation, interview prep, application tracking, refusal handling, and post-arrival support for students studying abroad.",
      },
    ],
  }),
  component: VisaAssistancePage,
});

function ServiceSectionBlock({ section }: { section: VisaSectionDef }) {
  const { t } = useT();
  const SectionIcon = visaSectionIcons[section.id] ?? FileCheck2;

  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-soft overflow-hidden">
      <div className="relative h-44 sm:h-52">
        <img
          src={visaImages.sections[section.id]}
          alt={t(`visaBody.sections.${section.id}.title`)}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62]/90 via-[#0A3D62]/70 to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 md:px-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 grid place-items-center text-white">
              <SectionIcon className="h-6 w-6 text-[#F4B400]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {t(`visaBody.sections.${section.id}.title`)}
              </h3>
              <p className="text-sm text-white/80 mt-0.5">
                {t(`visaBody.sections.${section.id}.summary`)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 grid sm:grid-cols-2 gap-4">
        {section.itemIds.map((itemId) => {
          const Icon = visaItemIcons[itemId] ?? CheckCircle2;
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
                    {t(`visaBody.sections.${section.id}.items.${itemId}.title`)}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {t(`visaBody.sections.${section.id}.items.${itemId}.desc`)}
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

function VisaAssistancePage() {
  const { t } = useT();
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={visaImages.hero}
            alt="Visa assistance for students studying abroad"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/20 blur-3xl z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10">
                <FileCheck2 className="h-3.5 w-3.5 text-[#F4B400]" />
                {t("services.visa.hero.eyebrow")}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                {t("services.visa.hero.title")}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                {t("services.visa.hero.subtitle")}
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition"
              >
                <MessageCircle className="h-4 w-4" />
                {t("actions.contactUs")}
              </a>

              <div className="mt-10 grid grid-cols-2 gap-3 max-w-md">
                {visaHighlightIds.map((id) => (
                  <div
                    key={id}
                    className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 backdrop-blur-sm"
                  >
                    <p className="text-lg font-extrabold text-[#F4B400]">
                      {t(`visaBody.highlights.${id}.value`)}
                    </p>
                    <p className="text-xs font-medium text-white/70 mt-0.5">
                      {t(`visaBody.highlights.${id}.label`)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
                <img
                  src={visaImages.intro}
                  alt="Visa counseling session"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-soft order-2 lg:order-1">
                <img
                  src={visaImages.whyChooseUs}
                  alt="Visa guidance consultation with a student advisor"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="mt-4 text-slate-600 leading-relaxed text-base md:text-lg">
                  {t("visaBody.intro")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-10 space-y-8">
            {visaSectionDefs.map((section, i) => (
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
              {t("visaBody.closing")}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-3xl gradient-primary text-white relative overflow-hidden">
              <img
                src={visaImages.hero}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#F4B400]/20 blur-3xl" />
              <div className="relative p-8 md:p-12 max-w-3xl">
                <Home className="h-10 w-10 text-[#F4B400]" />
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, CheckCircle2, ClipboardList } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import employmentHeroBg from "../assets/employment-services-hero.jpg";
import { useT } from "../i18n";
import {
  applicationProcessDefs,
  employerHighlightDefs,
  employmentServiceDefs,
  registrationBenefitCount,
} from "../data/employment-services";

export const Route = createFileRoute("/employment-services")({
  head: () => ({
    meta: [
      { title: "Shakthi Employment Services | Jobs, Recruitment & Career Support" },
      {
        name: "description",
        content:
          "Shakthi Employment Services — job opportunities, recruitment, career guidance, resume support, interview prep, skill development, employer services and candidate registration.",
      },
    ],
  }),
  component: EmploymentServicesPage,
});

function EmploymentServicesPage() {
  const { t } = useT();
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={employmentHeroBg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62] via-[#0A3D62]/88 to-[#0A3D62]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/50 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#F4B400]">
                <Briefcase className="h-3.5 w-3.5" />
                {t("employment.hero.eyebrow")}
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-white">
                {t("employment.hero.brandTitle")}
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-semibold text-white/90">
                {t("employment.hero.titleLead")}{" "}
                <span className="text-[#F4B400]">{t("employment.hero.titleAccent")}</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-5 sm:p-6">
                <p className="text-sm text-white/85 leading-relaxed">
                  {t("employment.hero.intro")}
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <a
                    href="#register"
                    className="inline-flex items-center gap-2 rounded-full bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-5 py-2.5 shadow-glow hover:opacity-95 transition"
                  >
                    {t("employment.hero.register")} <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 rounded-full border border-white/35 text-white text-sm font-bold px-5 py-2.5 hover:bg-white/10 transition"
                  >
                    {t("employment.hero.explore")}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-20 bg-white border-b border-slate-100 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-eyebrow">{t("employment.services.eyebrow")}</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
              {t("employment.services.title")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              {t("employment.services.subtitle")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {employmentServiceDefs.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: (i % 4) * 0.1 + Math.floor(i / 4) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group h-full rounded-2xl border border-slate-100 bg-slate-50/40 p-6 transition-[border-color,box-shadow,background-color] duration-500 hover:border-[#4DA8DA]/35 hover:bg-white hover:shadow-[0_18px_40px_-28px_rgba(10,61,98,0.35)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4DA8DA]/12 text-[#0A3D62] transition-colors duration-500 group-hover:bg-[#0A3D62] group-hover:text-[#F4B400]">
                  <item.icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 font-bold text-[#0A3D62]">
                  {t(`employmentBody.services.${item.id}.title`)}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {t(`employmentBody.services.${item.id}.desc`)}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="application-process" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-100 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="section-eyebrow">{t("employment.process.eyebrow")}</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                {t("employment.process.title")}
              </h2>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {t("employment.process.subtitle")}
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {applicationProcessDefs.map((step, i) => (
              <Reveal key={step} delay={i * 0.05}>
                <article className="h-full rounded-2xl gradient-primary p-5 text-white">
                  <p className="text-2xl font-extralight text-white/30 tabular-nums">{step}</p>
                  <h3 className="mt-3 font-bold text-sm">{t(`employmentBody.process.${step}.title`)}</h3>
                  <p className="mt-2 text-xs text-white/80 leading-relaxed">
                    {t(`employmentBody.process.${step}.desc`)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <Reveal>
              <div>
                <span className="section-eyebrow">{t("employment.employers.eyebrow")}</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                  {t("employment.employers.title")}
                </h2>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed mb-8">
                  {t("employmentBody.employers.blurb")}
                </p>
                <div className="space-y-4">
                  {employerHighlightDefs.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4B400]/15 text-[#0A3D62]">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0A3D62]">
                          {t(`employmentBody.employers.${item.id}.title`)}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                          {t(`employmentBody.employers.${item.id}.desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div
                id="register"
                className="rounded-2xl border border-slate-100 bg-[#0A3D62] p-7 sm:p-8 text-white h-full scroll-mt-28"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4B400]/20 text-[#F4B400]">
                  <ClipboardList className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{t("employment.register.title")}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  {t("employment.register.subtitle")}
                </p>
                <ul className="mt-6 space-y-3">
                  {Array.from({ length: registrationBenefitCount }, (_, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/90">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-[#F4B400]" />
                      {t(`employmentBody.benefits.${i}`)}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-5 py-3 hover:opacity-95 transition"
                >
                  {t("actions.register")} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-primary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{t("employmentBody.cta.title")}</h2>
            <p className="mt-3 text-white/80 leading-relaxed">{t("employmentBody.cta.desc")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-6 py-3.5 shadow-glow hover:opacity-95 transition"
              >
                {t("actions.getStarted")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-sm font-bold px-6 py-3.5 border border-white/20 hover:bg-white/15 transition"
              >
                {t("nav.careers")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

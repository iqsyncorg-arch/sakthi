import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Briefcase, ChevronDown, MapPin } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import {
  departmentIcons,
  hiringProcessIds,
  jobDepartments,
  jobLocations,
  lifeAtShakthiDefs,
  openPositionDefs,
} from "../data/careers";
import { CONTACT_EMAIL } from "../data/brand";
import careersHeroBg from "../assets/careers-hero.jpg";
import { useT } from "../i18n";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Shakthi Academy — Join Our Team" },
      {
        name: "description",
        content:
          "Build your career at Shakthi Academy. View open positions in teaching, counseling, marketing, technology, and administration.",
      },
    ],
  }),
  component: CareersPage,
});

function applyMailto(jobTitle: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Job Application: ${jobTitle}`)}`;
}

function CareersPage() {
  const { t } = useT();
  const [department, setDepartment] = useState<string>(jobDepartments[0]);
  const [location, setLocation] = useState<string>(jobLocations[0]);

  const filterLabel = (value: string) => {
    if (value === "All Departments") return t("careersBody.filters.allDepartments");
    if (value === "All Locations") return t("careersBody.filters.allLocations");
    return t(`careersBody.filters.${value}`);
  };

  const jobs = openPositionDefs.filter((job) => {
    const deptOk = department === "All Departments" || job.department === department;
    const locOk = location === "All Locations" || location === "Bangalore, India";
    return deptOk && locOk;
  });

  const handleViewPositions = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById("open-positions")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] w-full">
          <img
            src={careersHeroBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pb-20 lg:pb-24 flex min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-2xl w-full"
            >
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/75">
                {t("careers.hero.eyebrow")}
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                {t("careers.hero.title")}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/85 max-w-xl leading-relaxed">
                {t("careersBody.heroIntro")}
              </p>

              <form
                onSubmit={handleViewPositions}
                className="mt-8 sm:mt-10 flex w-full max-w-xl flex-col sm:flex-row sm:items-center gap-2 rounded-2xl bg-white p-2 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.45)]"
              >
                <label className="relative flex flex-1 items-center gap-2 px-3 py-2.5 min-w-0">
                  <Briefcase className="h-4 w-4 text-slate-400 shrink-0" />
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full appearance-none bg-transparent text-sm font-medium text-slate-700 outline-none cursor-pointer pr-5"
                    aria-label={t("careers.hero.department")}
                  >
                    {jobDepartments.map((dept) => (
                      <option key={dept} value={dept}>
                        {filterLabel(dept)}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2 h-3.5 w-3.5 text-slate-400" />
                </label>

                <div className="hidden sm:block h-8 w-px bg-slate-200 shrink-0" />

                <label className="relative flex flex-1 items-center gap-2 px-3 py-2.5 min-w-0">
                  <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full appearance-none bg-transparent text-sm font-medium text-slate-700 outline-none cursor-pointer pr-5"
                    aria-label={t("careers.hero.location")}
                  >
                    {jobLocations.map((loc) => (
                      <option key={loc} value={loc}>
                        {filterLabel(loc)}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2 h-3.5 w-3.5 text-slate-400" />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4DA8DA] text-white text-sm font-bold px-5 py-3 hover:opacity-95 transition shrink-0 w-full sm:w-auto"
                >
                  {t("careers.hero.viewPositions")}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="section-eyebrow">{t("careers.culture.eyebrow")}</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">{t("careers.culture.title")}</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lifeAtShakthiDefs.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-slate-100 bg-slate-50/50 p-6 hover:border-[#4DA8DA]/30 transition">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4DA8DA]/15 text-[#0A3D62]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-[#0A3D62]">
                    {t(`careersBody.lifeAtShakthi.${item.id}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {t(`careersBody.lifeAtShakthi.${item.id}.desc`)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="open-positions" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-100 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <span className="section-eyebrow">{t("careers.positions.eyebrow")}</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">{t("careers.positions.title")}</h2>
                <p className="mt-2 text-sm text-slate-500">
                  {jobs.length}{" "}
                  {jobs.length === 1 ? "role" : "roles"}
                  {department !== "All Departments" ? ` · ${filterLabel(department)}` : ""}
                  {location !== "All Locations" ? ` · ${filterLabel(location)}` : ""}
                </p>
              </div>
              {(department !== "All Departments" || location !== "All Locations") && (
                <button
                  type="button"
                  onClick={() => {
                    setDepartment(jobDepartments[0]);
                    setLocation(jobLocations[0]);
                  }}
                  className="text-sm font-semibold text-[#4DA8DA] hover:underline"
                >
                  {t("actions.viewAll")}
                </button>
              )}
            </div>
          </Reveal>

          {jobs.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
              <p className="text-slate-600 text-sm">
                {t("careers.positions.empty")}
              </p>
              <button
                type="button"
                onClick={() => {
                  setDepartment(jobDepartments[0]);
                  setLocation(jobLocations[0]);
                }}
                className="mt-4 text-sm font-bold text-[#0A3D62] hover:underline"
              >
                {t("actions.viewAll")}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job, i) => {
                const DeptIcon = departmentIcons[job.department] ?? Briefcase;
                const title = t(`careersBody.positions.${job.id}.title`);
                return (
                  <Reveal key={job.id} delay={i * 0.04}>
                    <article className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-soft hover:border-[#4DA8DA]/25 transition">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                        <div className="flex gap-4 min-w-0">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-primary text-[#F4B400]">
                            <DeptIcon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-lg font-extrabold text-[#0A3D62]">{title}</h3>
                            <p className="mt-1 text-xs font-semibold text-[#4DA8DA]">
                              {t(`careersBody.positions.${job.id}.type`)} •{" "}
                              {t(`careersBody.filters.${job.department}`)}
                            </p>
                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                              {t(`careersBody.positions.${job.id}.desc`)}
                            </p>
                            <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                              <MapPin className="h-3.5 w-3.5 text-[#4DA8DA]" />
                              {t(`careersBody.positions.${job.id}.location`)}
                            </p>
                          </div>
                        </div>
                        <a
                          href={applyMailto(title)}
                          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-5 py-3 hover:opacity-95 transition lg:min-w-[140px]"
                        >
                          {t("careers.positions.apply")} <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="section-eyebrow">{t("careers.hiring.eyebrow")}</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">{t("careers.hiring.title")}</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hiringProcessIds.map((step, i) => (
              <Reveal key={step} delay={i * 0.05}>
                <article className="h-full rounded-2xl gradient-primary p-5 text-white">
                  <p className="text-2xl font-extralight text-white/30 tabular-nums">{step}</p>
                  <h3 className="mt-3 font-bold text-sm">
                    {t(`careersBody.hiringProcess.${step}.title`)}
                  </h3>
                  <p className="mt-2 text-xs text-white/80 leading-relaxed">
                    {t(`careersBody.hiringProcess.${step}.desc`)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-primary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t("careersBody.closingTitle")}
            </h2>
            <p className="mt-3 text-white/80 leading-relaxed">{t("careersBody.closingDesc")}</p>
            <a
              href="#open-positions"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-6 py-3.5 shadow-glow hover:opacity-95 transition"
            >
              {t("careers.hero.viewPositions")} <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

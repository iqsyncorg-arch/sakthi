import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import {
  careersClosingDesc,
  careersClosingTitle,
  careersHeroIntro,
  departmentIcons,
  hiringProcess,
  lifeAtShakthi,
  openPositions,
} from "../data/careers";
import { CONTACT_EMAIL } from "../data/brand";
import careersHeroBg from "../assets/careers-hero.jpg";

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
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={careersHeroBg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62]/92 via-[#0A3D62]/85 to-[#4DA8DA]/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/15">
              <Briefcase className="h-3.5 w-3.5 text-[#F4B400]" />
              Careers at Shakthi
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              Build Your Career.{" "}
              <span className="text-[#F4B400]">Make a Difference.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              {careersHeroIntro}
            </p>
            <a
              href="#open-positions"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-6 py-3 shadow-glow hover:opacity-95 transition"
            >
              View Open Positions <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="section-eyebrow">Culture</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">Life at Shakthi</h2>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                A supportive environment where your work creates real change in students&apos; lives.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lifeAtShakthi.map((item, i) => (
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

      <section id="open-positions" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-100 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <span className="section-eyebrow">Join our team</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">Open Positions</h2>
              </div>
              <p className="text-sm text-slate-500 sm:text-right">View All Jobs</p>
            </div>
          </Reveal>
          <div className="space-y-4">
            {openPositions.map((job, i) => {
              const DeptIcon = departmentIcons[job.department] ?? Briefcase;
              return (
                <Reveal key={job.id} delay={i * 0.04}>
                  <article className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-soft hover:border-[#4DA8DA]/25 transition">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                      <div className="flex gap-4 min-w-0">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-primary text-[#F4B400]">
                          <DeptIcon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-extrabold text-[#0A3D62]">{job.title}</h3>
                          <p className="mt-1 text-xs font-semibold text-[#4DA8DA]">
                            {job.type} • {job.department}
                          </p>
                          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{job.desc}</p>
                          <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                            <MapPin className="h-3.5 w-3.5 text-[#4DA8DA]" />
                            {job.location}
                          </p>
                        </div>
                      </div>
                      <a
                        href={applyMailto(job.title)}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-5 py-3 hover:opacity-95 transition lg:min-w-[140px]"
                      >
                        Apply Now <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="section-eyebrow">How we hire</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">Our Hiring Process</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hiringProcess.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.05}>
                <article className="h-full rounded-2xl gradient-primary p-5 text-white">
                  <p className="text-2xl font-extralight text-white/30 tabular-nums">{item.step}</p>
                  <h3 className="mt-3 font-bold text-sm">{item.title}</h3>
                  <p className="mt-2 text-xs text-white/80 leading-relaxed">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-primary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{careersClosingTitle}</h2>
            <p className="mt-3 text-white/80 leading-relaxed">{careersClosingDesc}</p>
            <a
              href="#open-positions"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-6 py-3.5 shadow-glow hover:opacity-95 transition"
            >
              Explore Open Positions <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, ClipboardList } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { AdmissionsApplicationForm } from "../components/site/AdmissionsApplicationForm";
import {
  admissionsAudiences,
  admissionsDocuments,
  admissionsHighlights,
  admissionsIntro,
  admissionsServices,
  admissionsSteps,
} from "../data/admissions";
import { scrollToHashOnLoad } from "../lib/scroll-to-section";
import admissionsHeroBg from "../assets/admissions-hero.jpg";
import avatar1 from "../assets/women.png";
import avatar2 from "../assets/men.png";
import avatar3 from "../assets/men2.png";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions & Application | Shakthi Academy" },
      {
        name: "description",
        content:
          "Apply to Shakthi Academy — admissions process, support services, document checklist, and online application form.",
      },
    ],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] w-full"
        >
          {/* Photo from navbar, edge to edge */}
          <img
            src={admissionsHeroBg}
            alt="Students and counselors at Shakthi Academy admissions"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

          {/* Left content on the photo */}
          <div className="relative z-10 mx-auto flex h-full min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] max-w-7xl items-end px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 lg:pb-14 lg:pr-[48%] pt-32">
            <div className="max-w-lg">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/75">
                Admissions
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold leading-[1.08] tracking-tight text-white">
                Start Your Journey with Shakthi Academy
              </h1>
              <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed max-w-md">
                {admissionsIntro}
              </p>
              <Link
                to="/admissions"
                hash="application"
                className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-white text-[#0A3D62] text-sm font-bold pl-5 pr-2 py-2 shadow-md hover:bg-white/95 transition"
              >
                Apply Now
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A3D62] text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* White interlocking panel — bottom-right */}
          <div className="absolute bottom-0 right-0 z-20 w-full sm:w-[55%] lg:w-[46%] xl:w-[42%]">
            <div
              className="relative bg-white p-7 sm:p-8 lg:p-10 xl:p-12"
              style={{
                borderTopLeftRadius: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              <h2 className="text-2xl sm:text-[1.75rem] lg:text-3xl font-extrabold text-[#0A3D62] leading-tight tracking-tight">
                Guided Admissions. Made Simple.
              </h2>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-md">
                Personalized counseling from first enquiry to enrolment — clear steps, dedicated
                support, and pathways matched to your goals.
              </p>

              <div className="mt-8 flex items-end justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex -space-x-3">
                    {[avatar1, avatar2, avatar3].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        className="h-10 w-10 rounded-full border-2 border-white object-cover object-top bg-slate-200"
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                    {admissionsHighlights[0].value} years guiding learners worldwide
                  </p>
                </div>
                <a
                  href="#admissions-process"
                  className="shrink-0 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-[1.25rem] bg-[#0A3D62] text-[#F4B400] hover:opacity-95 transition"
                  aria-label="See admissions process"
                >
                  <ArrowDownRight className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.25} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-10 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {admissionsHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-6 text-center"
              >
                <dt className="text-2xl font-extrabold text-[#0A3D62]">{item.value}</dt>
                <dd className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="admissions-process" className="py-16 md:py-20 bg-white border-b border-slate-100 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="section-eyebrow">How it works</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">Admissions Process</h2>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                A clear, step-by-step path from your first enquiry to successful enrolment.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {admissionsSteps.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-slate-100 bg-slate-50/50 p-5 hover:border-[#4DA8DA]/30 transition">
                  <p className="text-2xl font-extralight text-[#0A3D62]/25 tabular-nums">{item.step}</p>
                  <h3 className="mt-3 font-bold text-[#0A3D62] text-sm leading-snug">{item.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="section-eyebrow">What we provide</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">Admissions Support</h2>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Comprehensive guidance at every stage — not just form filling, but real counseling.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {admissionsServices.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <article className="h-full rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-soft transition">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-[#F4B400]">
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

      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <Reveal>
              <div>
                <span className="section-eyebrow">Who can apply</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">Built for Every Learner</h2>
                <div className="mt-8 space-y-4">
                  {admissionsAudiences.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4DA8DA]/15 text-[#0A3D62]">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0A3D62]">{item.title}</h3>
                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-slate-100 bg-[#0A3D62] p-7 sm:p-8 text-white h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4B400] text-[#0A3D62]">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Documents to Keep Ready</h3>
                <p className="mt-2 text-sm text-white/75">
                  Having these ready speeds up your application review.
                </p>
                <ul className="mt-6 space-y-3">
                  {admissionsDocuments.map((doc) => (
                    <li key={doc} className="flex items-start gap-2.5 text-sm text-white/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F4B400]" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="application" className="py-16 md:py-24 bg-slate-50/60 scroll-mt-28">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="section-eyebrow">Registration / Application</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                Online Enquiry / Application Form
              </h2>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                Fill in all required fields. Our admissions team will respond within 24 business hours.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-6 md:p-10 shadow-soft">
              <AdmissionsApplicationForm />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

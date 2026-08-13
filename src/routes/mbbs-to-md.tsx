import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, GraduationCap, Stethoscope, Building2, CheckCircle2,
  MessageCircle, BookOpen,
} from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { mbbsToMdPathways } from "../data/mbbs-to-md";
import { PARTNER_NOTE } from "../data/brand";

export const Route = createFileRoute("/mbbs-to-md")({
  head: () => ({
    meta: [
      { title: "MBBS to MD Pathway Programs | Shakthi Academy" },
      { name: "description", content: "Bridge programs for MBBS graduates seeking MD advanced standing, USMLE readiness, and U.S. clinical rotations at partner Caribbean and Guyana medical schools." },
    ],
  }),
  component: MbbsToMdPage,
});

function MbbsToMdPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/destinations/dest-caribbean.png"
            alt="MBBS to MD pathway"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10">
              <Stethoscope className="h-3.5 w-3.5 text-[#F4B400]" />
              Medical Admissions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              MBBS to MD{" "}
              <span className="bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent">
                Pathway Programs
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Your bridge to MD advanced standing — USMLE preparation, U.S. clinical rotations, and residency placement support for eligible MBBS graduates.
            </p>
            <Link
              to="/university-admissions"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4DA8DA] hover:text-white transition"
            >
              <BookOpen className="h-4 w-4" />
              Explore all medical destinations <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 space-y-10">
          {mbbsToMdPathways.map((pathway, i) => (
            <Reveal key={pathway.university} delay={i * 0.05}>
              <div className="rounded-3xl border border-slate-200 bg-white shadow-soft overflow-hidden">
                <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-6 py-5 md:px-8">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center text-white">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-extrabold text-[#0A3D62]">{pathway.university}</h2>
                      <p className="text-sm text-[#4DA8DA] font-medium">{pathway.location}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                  <p className="text-slate-600 leading-relaxed">{pathway.summary}</p>

                  {pathway.journey && (
                    <div>
                      <h3 className="section-label mb-3">Student journey</h3>
                      <ol className="space-y-2">
                        {pathway.journey.map((step, j) => (
                          <li key={step} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <span className="shrink-0 h-6 w-6 rounded-full bg-[#0A3D62]/10 text-[#0A3D62] text-xs font-bold grid place-items-center">
                              {j + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  <div>
                    <h3 className="section-label mb-3">Highlights</h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {pathway.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3 text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#4DA8DA] mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pathway.scholarships && (
                    <div>
                      <h3 className="section-label mb-3">Scholarships</h3>
                      <ul className="space-y-2">
                        {pathway.scholarships.map((s) => (
                          <li key={s} className="text-sm text-slate-700 flex items-start gap-2">
                            <Building2 className="h-4 w-4 shrink-0 text-[#F4B400] mt-0.5" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h3 className="section-label mb-3">Entry requirements</h3>
                    <ul className="space-y-2">
                      {pathway.entryRequirements.map((req) => (
                        <li key={req} className="text-sm text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="rounded-3xl gradient-primary p-8 md:p-12 text-white">
              <p className="text-sm text-white/80 leading-relaxed max-w-3xl">{PARTNER_NOTE}</p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white text-[#0A3D62] text-sm font-semibold px-6 py-3.5 hover:bg-white/90 transition"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire About MBBS to MD <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

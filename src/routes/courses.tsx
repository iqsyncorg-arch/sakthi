import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Layers,
  Monitor,
  Phone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import coursesHeroBg from "../assets/courses-hero.jpg";
import { coursePrograms } from "../data/courses";
import { CONTACT_PHONE_PRIMARY } from "../data/brand";
import { scrollToHashOnLoad } from "../lib/scroll-to-section";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses & Programmes | Shakthi Academy" },
      {
        name: "description",
        content:
          "Explore Shakthi Academy programmes — school, college, skills, certifications, international study, corporate training, and counselling. Full details on objectives, eligibility, modules, and enrolment.",
      },
    ],
  }),
  component: CoursesPage,
});

const detailSections = [
  { key: "objective" as const, label: "Objective", icon: Target },
  { key: "targetAudience" as const, label: "Target Audience", icon: Users, list: true },
  { key: "duration" as const, label: "Duration", icon: Clock, single: true },
  { key: "eligibility" as const, label: "Eligibility", icon: CheckCircle2, list: true },
  { key: "modules" as const, label: "Key Topics / Modules", icon: BookOpen, list: true },
  { key: "deliveryMode" as const, label: "Mode of Delivery", icon: Monitor, list: true },
  { key: "benefits" as const, label: "Benefits", icon: Sparkles, list: true },
];

function CoursesPage() {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={coursesHeroBg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62]/92 via-[#0A3D62]/88 to-[#4DA8DA]/45" />
        </div>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#F4B400]/10 blur-3xl pointer-events-none z-[1]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/15">
              <GraduationCap className="h-3.5 w-3.5 text-[#F4B400]" />
              Courses & Programmes
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              Explore Our{" "}
              <span className="text-[#F4B400]">Programmes</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Pathways from school to career — each programme includes clear objectives, eligibility,
              modules, delivery mode, and benefits. Register or enquire to get started.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 space-y-10">
          {coursePrograms.map((program, index) => (
            <Reveal key={program.id} delay={index * 0.04}>
              <article
                id={program.id}
                className="scroll-mt-32 rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden"
              >
                <div className="gradient-primary px-6 py-7 sm:px-8 sm:py-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15 text-[#F4B400]">
                        <program.icon className="h-7 w-7" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                          Programme {String(index + 1).padStart(2, "0")}
                        </p>
                        <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">{program.name}</h2>
                        <p className="mt-2 text-sm text-white/80 max-w-xl">{program.tagline}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 shrink-0">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-5 py-2.5 hover:opacity-95 transition"
                      >
                        Register / Enquire
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      {CONTACT_PHONE_PRIMARY ? (
                        <a
                          href={`tel:${CONTACT_PHONE_PRIMARY.tel}`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white text-sm font-bold px-5 py-2.5 hover:bg-white/10 transition"
                        >
                          <Phone className="h-4 w-4" />
                          Call Us
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 grid md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4DA8DA]/10 text-[#0A3D62]">
                        <Target className="h-4 w-4" />
                      </div>
                      <h3 className="font-bold text-[#0A3D62] text-sm uppercase tracking-wide">Objective</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pl-[2.875rem]">{program.objective}</p>
                  </div>

                  {detailSections.slice(1).map(({ key, label, icon: Icon, list, single }) => (
                    <div key={key}>
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4DA8DA]/10 text-[#0A3D62]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="font-bold text-[#0A3D62] text-sm uppercase tracking-wide">{label}</h3>
                      </div>

                      {single ? (
                        <p className="text-sm text-slate-600 leading-relaxed pl-[2.875rem]">{program.duration}</p>
                      ) : (
                        <ul className="space-y-2 pl-[2.875rem]">
                          {(program[key] as string[]).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                              <Layers className="h-3.5 w-3.5 mt-1 shrink-0 text-[#4DA8DA]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 gradient-primary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to enrol?</h2>
            <p className="mt-3 text-white/80 leading-relaxed">
              Speak with a Shakthi Academy counsellor to find the right programme for your goals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-6 py-3.5 shadow-glow hover:opacity-95 transition"
              >
                Register / Enquire Now <ArrowRight className="h-4 w-4" />
              </Link>
              {CONTACT_PHONE_PRIMARY ? (
                <a
                  href={`tel:${CONTACT_PHONE_PRIMARY.tel}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-sm font-bold px-6 py-3.5 border border-white/20 hover:bg-white/15 transition"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT_PHONE_PRIMARY.display}
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

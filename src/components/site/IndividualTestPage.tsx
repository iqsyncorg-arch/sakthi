import { motion } from "framer-motion";
import {
  BookOpen, Clock, Monitor, Calendar, Award,
  CheckCircle2, Sparkles, FileText, ArrowRight, MessageCircle,
  Headphones, PenTool, MessageSquare, Atom, Beaker, Dna,
  Cpu, Video, Binary,
} from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { trainingTests } from "../../data/training-tests";

type IndividualTestPageProps = {
  testId: string;
};

const getSectionIcon = (name: string) => {
  const norm = name.toLowerCase();
  if (norm.includes("reading")) return BookOpen;
  if (norm.includes("listening")) return Headphones;
  if (norm.includes("writing")) return PenTool;
  if (norm.includes("speaking")) return MessageSquare;
  if (norm.includes("physics")) return Atom;
  if (norm.includes("chemistry")) return Beaker;
  if (norm.includes("biology")) return Dna;
  if (norm.includes("adaptive")) return Cpu;
  if (norm.includes("sample")) return Video;
  if (norm.includes("quant")) return Binary;
  if (norm.includes("verbal")) return BookOpen;
  return FileText;
};

export function IndividualTestPage({ testId }: IndividualTestPageProps) {
  const currentTest = trainingTests.find((t) => t.id === testId) || trainingTests[0];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentTest.heroImage}
            alt={`${currentTest.label} Coaching & Preparation`}
            className="w-full h-full object-cover opacity-50 object-right md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent md:hidden" />
        </div>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/15 blur-3xl z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10">
              <BookOpen className="h-3.5 w-3.5 text-[#F4B400]" />
              Training & Tests Preparation
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {currentTest.label} Coaching &{" "}
              <span className="bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent">
                Preparation
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Ace your {currentTest.label} exam under the guidance of certified trainers. Structured curriculum, mock tests, and personalized reviews.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-semibold px-6 py-3.5 shadow-glow hover:scale-[1.02] transition duration-200"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="py-12 md:py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 space-y-8">
          
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Main Info & Structure */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* DETAILS CARD */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-soft">
                <Reveal>
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 rounded-2xl gradient-primary grid place-items-center text-white shadow-glow shrink-0">
                      <currentTest.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="section-eyebrow">
                        {currentTest.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A3D62] mt-1">
                        {currentTest.fullTitle} ({currentTest.label})
                      </h2>
                    </div>
                  </div>



                  <div className="mt-6 text-slate-600 leading-relaxed text-base md:text-lg whitespace-pre-line">
                    {currentTest.desc}
                  </div>
                </Reveal>

                {/* FACTS DASHBOARD */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-100 pt-6">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100/80">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="h-4 w-4 text-[#4DA8DA]" />
                      <span className="text-xs font-bold uppercase tracking-wider">Duration</span>
                    </div>
                    <p className="mt-1.5 text-sm font-extrabold text-[#0A3D62] leading-tight">{currentTest.duration}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100/80">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Monitor className="h-4 w-4 text-[#4DA8DA]" />
                      <span className="text-xs font-bold uppercase tracking-wider">Exam Mode</span>
                    </div>
                    <p className="mt-1.5 text-sm font-extrabold text-[#0A3D62] leading-tight">{currentTest.mode}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100/80">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="h-4 w-4 text-[#4DA8DA]" />
                      <span className="text-xs font-bold uppercase tracking-wider">Validity</span>
                    </div>
                    <p className="mt-1.5 text-sm font-extrabold text-[#0A3D62] leading-tight">{currentTest.validity}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100/80">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Award className="h-4 w-4 text-[#4DA8DA]" />
                      <span className="text-xs font-bold uppercase tracking-wider">Scoring</span>
                    </div>
                    <p className="mt-1.5 text-sm font-extrabold text-[#0A3D62] leading-tight">{currentTest.scoring}</p>
                  </div>
                </div>
              </div>

              {/* TEST STRUCTURE */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-soft">
                <Reveal>
                  <h3 className="text-xl font-extrabold text-[#0A3D62] mb-6 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#4DA8DA]" />
                    Exam Structure & Format
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {currentTest.sections.map((sec) => {
                      const Icon = getSectionIcon(sec.name);
                      return (
                        <div key={sec.name} className="group relative rounded-2xl border border-slate-100 bg-slate-50/40 p-5 hover:bg-white hover:border-[#4DA8DA]/30 hover:shadow-soft transition-all duration-300">
                          <div className="flex items-center justify-between gap-3 mb-4">
                            <div className="h-10 w-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#4DA8DA] group-hover:bg-[#4DA8DA] group-hover:text-white transition-colors duration-300 shadow-sm">
                              <Icon className="h-5 w-5" />
                            </div>
                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#4DA8DA]/10 text-[#0A3D62]">
                              {sec.duration}
                            </span>
                          </div>
                          <h4 className="font-bold text-[#0A3D62] text-sm sm:text-base mb-2 group-hover:text-[#4DA8DA] transition-colors duration-200">
                            {sec.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {sec.details}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </Reveal>
              </div>

            </div>

            {/* RIGHT COLUMN: Highlights, Tips, Why-Us */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* WHY TAKE / KEY HIGHLIGHTS */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-soft">
                <Reveal>
                  <h3 className="text-xl font-extrabold text-[#0A3D62] mb-5">
                    {currentTest.id === "ielts" ? "Why Take IELTS?" : "Key Highlights"}
                  </h3>
                  <ul className="space-y-4">
                    {currentTest.highlights.map((h, idx) => {
                      const splitIdx = h.indexOf(":");
                      if (splitIdx !== -1) {
                        const title = h.substring(0, splitIdx);
                        const rest = h.substring(splitIdx + 1);
                        return (
                          <li key={idx} className="flex items-start gap-3 text-slate-600">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F4B400] mt-0.5" />
                            <div>
                              <strong className="text-[#0A3D62]">{title}:</strong>
                              <span>{rest}</span>
                            </div>
                          </li>
                        );
                      }
                      return (
                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F4B400] mt-0.5" />
                          <span>{h}</span>
                        </li>
                      );
                    })}
                  </ul>
                </Reveal>
              </div>

              {/* TYPES (e.g. for IELTS) */}
              {currentTest.types && currentTest.types.length > 0 && (
                <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-soft">
                  <Reveal>
                    <h3 className="text-xl font-extrabold text-[#0A3D62] mb-5">
                      Types of {currentTest.label} Tests
                    </h3>
                    <div className="space-y-4">
                      {currentTest.types.map((type, idx) => (
                        <div key={idx} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 hover:border-[#4DA8DA]/30 transition">
                          <h4 className="font-bold text-[#0A3D62] text-sm mb-1">{type.name}</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">{type.desc}</p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              )}

              {/* TIPS FOR PREPARATION */}
              {currentTest.tips && currentTest.tips.length > 0 && (
                <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-soft">
                  <Reveal>
                    <h3 className="text-xl font-extrabold text-[#0A3D62] mb-5">
                      Tips for {currentTest.label} Prep
                    </h3>
                    <ul className="space-y-3.5">
                      {currentTest.tips.map((tip, idx) => {
                        const splitIdx = tip.indexOf(":");
                        if (splitIdx !== -1) {
                          const title = tip.substring(0, splitIdx);
                          const rest = tip.substring(splitIdx + 1);
                          return (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                              <Sparkles className="h-4 w-4 shrink-0 text-[#F4B400] mt-0.5" />
                              <div>
                                <strong className="text-[#0A3D62]">{title}:</strong>
                                <span>{rest}</span>
                              </div>
                            </li>
                          );
                        }
                        return (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <Sparkles className="h-4 w-4 shrink-0 text-[#F4B400] mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </Reveal>
                </div>
              )}

              {/* WHY SHAKTHI ACADEMY */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-soft">
                <Reveal>
                  <h3 className="text-xl font-extrabold text-[#0A3D62] mb-5 flex items-center gap-1.5">
                    <Sparkles className="h-5 w-5 text-[#F4B400]" />
                    Why Shakthi Academy?
                  </h3>
                  <ul className="space-y-3.5">
                    {currentTest.whyShakthi.map((why, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#4DA8DA] mt-0.5" />
                        <span>{why}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="rounded-3xl gradient-primary text-white relative overflow-hidden">
              <img
                src={currentTest.heroImage}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#F4B400]/20 blur-3xl" />
              <div className="relative p-8 md:p-12 max-w-3xl">
                <MessageCircle className="h-10 w-10 text-[#F4B400]" />
                <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold">
                  {currentTest.label} Coaching & Preparation
                </h2>
                <p className="mt-4 text-white/85 leading-relaxed">
                  {currentTest.contactHeading}
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-[#0A3D62] text-sm font-semibold px-6 py-3.5 hover:bg-white/90 transition"
                >
                  Book Free Consultation <ArrowRight className="h-4 w-4" />
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

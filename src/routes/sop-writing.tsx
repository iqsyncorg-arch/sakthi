import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, FileText, CheckCircle2, XCircle, Sparkles, Target,
  Compass, HelpCircle, AlertCircle, BookOpen, Users, PenTool,
  Check, X, MessageCircle, Info, Landmark, Briefcase, GraduationCap
} from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { useT } from "../i18n";

export const Route = createFileRoute("/sop-writing")({
  head: () => ({
    meta: [
      { title: "SOP Writing Guide | How to Write a Compelling SOP | Shakthi Academy" },
      {
        name: "description",
        content: "Learn how to write a compelling Statement of Purpose (SOP) for your university application. Explore SOP structure, writing tips, and Do's & Don'ts with Shakthi Academy.",
      },
    ],
  }),
  component: SOPWritingPage,
});

const understandingItems = [
  {
    icon: Target,
    title: "Purpose",
    desc: "Clearly articulate your reasons for pursuing the chosen course or program.",
    color: "from-blue-500/20 to-[#4DA8DA]/20",
    iconColor: "text-[#4DA8DA]",
  },
  {
    icon: Compass,
    title: "Goals",
    desc: "Outline your short-term and long-term career objectives.",
    color: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-500",
  },
  {
    icon: Sparkles,
    title: "Fit",
    desc: "Demonstrate how the program aligns with your academic and professional goals.",
    color: "from-indigo-500/20 to-purple-500/20",
    iconColor: "text-indigo-500",
  },
  {
    icon: Award,
    title: "Unique Selling Point",
    desc: "Highlight your distinctive qualities, achievements, and experiences.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
  },
];

// Fallback icon definition since Award might not be imported or matches
function Award(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

const structureSteps = [
  {
    step: "01",
    title: "Introduction & Hook",
    summary: "Set the theme and capture the admissions officer's interest.",
    icon: Sparkles,
    details: [
      "Start with an attention-grabbing lead: an anecdote, an inspiring quote, a key question, or a descriptive scene.",
      "State your thesis or central theme clearly — this is the main point you want to communicate.",
      "Introduce your academic interest and explain what motivated you to pursue this path.",
    ],
  },
  {
    step: "02",
    title: "Academic Background",
    summary: "Establish your academic credentials and learning history.",
    icon: GraduationCap,
    details: [
      "Highlight relevant university courses, major projects, or academic achievements.",
      "Discuss key takeaways or realizations that shaped your academic journey.",
      "Address any GPA discrepancies or test score setbacks constructively if necessary.",
    ],
  },
  {
    step: "03",
    title: "Professional & Research Experience",
    summary: "Detail your real-world credentials and capabilities.",
    icon: Briefcase,
    details: [
      "Highlight work experience, internships, or academic research projects.",
      "Focus on specific responsibilities, challenges faced, and results achieved.",
      "Demonstrate professional growth, team collaboration, and leadership qualities.",
    ],
  },
  {
    step: "04",
    title: "Why This Course?",
    summary: "Establish a direct link between the program and your gap in knowledge.",
    icon: BookOpen,
    details: [
      "Detail specific courses, electives, or specializations that excite you.",
      "Explain what skills or knowledge you hope to acquire from this specific curriculum.",
      "Connect the coursework directly to resolving professional or academic challenges you have identified.",
    ],
  },
  {
    step: "05",
    title: "Why This University?",
    summary: "Explain why this institution is the perfect fit for your studies.",
    icon: Landmark,
    details: [
      "Research and name specific professors whose research aligns with your interest.",
      "Mention research labs, campus resources, student associations, or cultural values unique to the school.",
      "Show how the university's geographic location or industry connections benefit you.",
    ],
  },
  {
    step: "06",
    title: "Future Goals & Conclusion",
    summary: "Sum up your trajectory and exit with impact.",
    icon: Target,
    details: [
      "Clearly outline your short-term goals (immediately post-graduation) and long-term career aspirations.",
      "Explain how the program serves as a critical bridge to achieving these objectives.",
      "Provide a memorable concluding thought that refers back to your opening lead and restates your thesis.",
    ],
  },
];

const mainTips = [
  {
    title: "Be Specific",
    desc: "Avoid generic statements. Use concrete examples and instances from your academic and personal life to illustrate your points.",
  },
  {
    title: "Be Honest",
    desc: "Authenticity is key. Write in your own voice, avoid exaggeration, and represent your achievements and story truthfully.",
  },
  {
    title: "Show, Don’t Tell",
    desc: "Instead of saying you are hardworking or passionate, describe a scenario or project where you demonstrated these qualities.",
  },
  {
    title: "Proofread Carefully",
    desc: "Ensure zero spelling or grammatical errors. Read your essay out loud or run it past editing tools to keep the flow smooth.",
  },
  {
    title: "Seek Feedback",
    desc: "Ask academic mentors, professors, or professional editors to critique your draft. Fresh eyes find hidden gaps and errors.",
  },
];

const additionalTips = [
  {
    title: "Start Early",
    desc: "Give yourself ample time to brainstorm ideas, structure thoughts, and write multiple drafts without rushing.",
  },
  {
    title: "Research Thoroughly",
    desc: "Deep-dive into the university website to learn about their values, curriculum details, and research publications.",
  },
  {
    title: "Tailor Your SOP",
    desc: "Never submit a copy-pasted document. Customize sections of your SOP for each application to fit the specific institution.",
  },
  {
    title: "Use Strong Language",
    desc: "Choose active verbs and vocabulary that convey determination, maturity, and passion for the subject.",
  },
  {
    title: "Highlight Achievements",
    desc: "Showcase your academic merits, extracurricular triumphs, or work wins confidently without sounding boastful.",
  },
  {
    title: "Address Challenges",
    desc: "If you have faced setbacks like gap years or low grades, explain them briefly and focus on how you overcame them.",
  },
];

const dosList = [
  "Unite your essay and give it direction with a strong theme or thesis statement.",
  "Choose what you want to discuss and outline the logical structure before you start writing.",
  "Use concrete, real-life examples to distinguish yourself from other applicants.",
  "Write about what interests and excites you — passion is contagious to readers.",
  "Start your essay with an attention-grabbing lead (an anecdote, description, or question).",
  "End with a conclusion that refers back to the lead and reinforces your thesis.",
  "Revise your essay at least three times to refine your message and tone.",
  "Ask trusted mentors, advisors, or friends to critique and review your statement.",
  "Proofread by reading your personal statement out loud to verify sentence flow.",
  "Write clearly, concisely, and keep your paragraphs focused.",
];

const dontsList = [
  "Don't include trivial information that does not support your central thesis.",
  "Don't start your essay with clichés like 'I was born in...' or 'My parents came from...'.",
  "Don't write a boring autobiography, itinerary, or a resume in prose format.",
  "Don't try to be a clown (gentle, mature humor is fine, but avoid forced jokes).",
  "Don't be afraid to start over from scratch if the current essay isn't working.",
  "Don't try to impress the reader by using overly complex or flowery vocabulary.",
  "Don't rely exclusively on automated computer spellcheckers to catch errors.",
  "Don't provide a collection of generic statements, buzzwords, and platitudes.",
  "Don't offer weak, mealy-mouthed excuses for a lower GPA or test scores.",
  "Don't make things up or exaggerate your achievements.",
];

function SOPWritingPage() {
  const { t } = useT();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80"
            alt="SOP Writing Services"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/15 blur-3xl z-0" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10">
              <FileText className="h-3.5 w-3.5 text-[#F4B400]" />
              {t("services.sop.hero.eyebrow")}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              {t("services.sop.hero.title")}
            </h1>
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed">
              {t("services.sop.hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition"
              >
                <MessageCircle className="h-4 w-4" />
                Get SOP Consultation
              </a>
              <a
                href="#structure"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-sm font-semibold px-6 py-3.5 border border-white/20 hover:bg-white/20 transition"
              >
                Explore SOP Structure
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: UNDERSTANDING THE SOP */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-3xl">
              <span className="section-eyebrow">
                The Core Foundation
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#0A3D62] sm:text-4xl">
                Understanding the SOP
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Before putting pen to paper, it is essential to understand what an admissions committee
                looks for in a Statement of Purpose. A great SOP addresses four pillars:
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {understandingItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-slate-100 p-6 bg-slate-50/50 hover:bg-white hover:border-[#4DA8DA]/30 hover:shadow-soft transition-all duration-300 group">
                    <div
                      className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} grid place-items-center mb-5 group-hover:scale-110 transition duration-300`}
                    >
                      <Icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A3D62]">{item.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE SOP STRUCTURE */}
      <section 
        id="structure" 
        className="relative py-16 md:py-24 overflow-hidden bg-fixed bg-cover bg-center border-y border-slate-800"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Dark overlay for contrast and readability */}
        <div className="absolute inset-0 bg-slate-950/85 z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="section-eyebrow-dark">
                Anatomy of a Strong SOP
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Structure Your SOP
              </h2>
              <p className="mt-4 text-slate-300">
                A typical SOP follows a clear, logical structure. Click through the paragraphs below to
                understand how to organize your story.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
            {/* Step Selection Tabs */}
            <div className="lg:col-span-4 space-y-3">
              {structureSteps.map((step, idx) => {
                const StepIcon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full flex items-center gap-4 text-left p-4 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "bg-white border-white shadow-soft text-[#0A3D62]"
                        : "bg-black/40 border-white/10 hover:bg-white/10 text-slate-300 hover:border-white/20 backdrop-blur-sm"
                    }`}
                  >
                    <span
                      className={`h-9 w-9 rounded-lg grid place-items-center font-bold text-sm shrink-0 transition-colors ${
                        isActive ? "gradient-primary text-white" : "bg-white/10 text-slate-300"
                      }`}
                    >
                      {step.step}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-sm sm:text-base truncate">{step.title}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step Detail Card */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl bg-white border border-slate-100 p-6 md:p-8 shadow-soft min-h-[360px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
                    <div className="h-10 w-10 rounded-lg bg-[#0A3D62]/5 text-[#0A3D62] grid place-items-center shrink-0">
                      {(() => {
                        const Icon = structureSteps[activeStep].icon;
                        return <Icon className="h-5 w-5" />;
                      })()}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0A3D62]">
                        Paragraph {structureSteps[activeStep].step}
                      </span>
                      <h3 className="text-xl font-extrabold text-[#0A3D62]">
                        {structureSteps[activeStep].title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 text-sm text-slate-500 font-medium italic">
                    {structureSteps[activeStep].summary}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {structureSteps[activeStep].details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-slate-650 leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Interactive Guide</span>
                  <span>{activeStep + 1} of {structureSteps.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TIPS FOR WRITING EFFECTIVE SOP */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-3xl">
              <span className="section-eyebrow">
                Best Practices
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#0A3D62] sm:text-4xl">
                Tips for Writing an Effective SOP
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Writing an SOP is an iterative process. Keep these core principles and additional tips in
                mind as you draft and refine your personal statement.
              </p>
            </div>
          </Reveal>

          {/* Core Tips Grid */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainTips.map((tip, index) => (
              <Reveal key={tip.title} delay={index * 0.05}>
                <div className="rounded-2xl border border-slate-100 p-6 bg-slate-50/30 hover:border-[#4DA8DA]/20 transition-all duration-300">
                  <div className="h-9 w-9 rounded-lg bg-[#0A3D62]/5 text-[#0A3D62] grid place-items-center mb-4">
                    <PenTool className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0A3D62]">{tip.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{tip.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 border-t border-slate-100 pt-16">
            <Reveal>
              <h3 className="text-xl font-bold text-[#0A3D62] mb-8">Additional Strategy Tips</h3>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalTips.map((tip, index) => (
                <Reveal key={tip.title} delay={index * 0.05}>
                  <div className="flex gap-4">
                    <div className="shrink-0 h-6 w-6 rounded-full bg-amber-500/10 text-amber-600 grid place-items-center font-bold text-xs mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base">{tip.title}</h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {tip.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DO'S AND DON'TS SECTION */}
      <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62]/40 via-slate-950 to-slate-950" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-eyebrow-dark">
                The Checklist
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Ten Do's and Don'ts for Your SOP
              </h2>
              <p className="mt-4 text-slate-300">
                Keep this quick reference guide handy to avoid common traps and make your statement shine.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* The Do's */}
            <Reveal>
              <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 md:p-8 backdrop-blur-sm shadow-soft">
                <div className="flex items-center gap-3 pb-5 border-b border-white/10 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 grid place-items-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">The Do's</h3>
                    <p className="text-xs text-slate-400">Implement these essential elements</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {dosList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="shrink-0 h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-400 grid place-items-center mt-0.5 border border-emerald-500/20">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* The Don'ts */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 md:p-8 backdrop-blur-sm shadow-soft">
                <div className="flex items-center gap-3 pb-5 border-b border-white/10 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-red-500/20 text-red-400 grid place-items-center shrink-0">
                    <XCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">The Don'ts</h3>
                    <p className="text-xs text-slate-400">Common mistakes to completely avoid</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {dontsList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="shrink-0 h-5 w-5 rounded-full bg-red-500/10 text-red-400 grid place-items-center mt-0.5 border border-red-500/20">
                        <X className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA & SUMMARY */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="rounded-3xl bg-slate-50 border border-slate-100 p-8 md:p-12 max-w-4xl mx-auto text-center relative overflow-hidden">
              <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#4DA8DA]/10 blur-2xl" />
              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-amber-500/10 blur-2xl" />

              <div className="relative z-10">
                <div className="inline-flex h-12 w-12 rounded-full bg-[#0A3D62]/5 text-[#0A3D62] items-center justify-center mb-6">
                  <Info className="h-6 w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0A3D62] leading-tight max-w-2xl mx-auto">
                  Remember, your SOP is a reflection of you. Make it personal, engaging, and persuasive.
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                  Would you like to focus on a specific part of the SOP, such as the introduction or
                  conclusion? Let us guide you on drafting, structuring, and editing your final statement.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-6 py-3.5 shadow-glow hover:opacity-95 transition"
                  >
                    Schedule Free SOP Review <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

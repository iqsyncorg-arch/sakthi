import {
  BadgeCheck,
  BookOpen,
  Compass,
  Eye,
  Flame,
  GraduationCap,
  Target,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { ShutterHoverCard } from "./ShutterHoverCard";
import { AboutFeatureCard } from "./AboutFeatureCard";
import aboutObjectivesBg from "../../assets/hero-students.jpg";
import aboutObjectivesAccent from "../../assets/about-hero-new.png";
import {
  aboutBackground,
  aboutCoreValues,
  aboutGrowthVision,
  aboutIntro,
  aboutMission,
  aboutObjectives,
  aboutPurpose,
  aboutStats,
  aboutThreeE,
  aboutVision,
} from "../../data/about-academy";

type AboutAcademySectionsProps = {
  showHeader?: boolean;
  sectionId?: string;
};

export function AboutAcademySections({ showHeader = true, sectionId }: AboutAcademySectionsProps) {
  return (
    <section id={sectionId} className="py-24 md:py-28 bg-slate-50 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {showHeader && (
          <Reveal>
            <header className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                About Shakthi Academy
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gradient tracking-tight leading-tight">
                Built for learners. Trusted worldwide.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                We go beyond textbooks to build confident, skilled, and future-ready individuals —
                trusted by learners, families, and employers worldwide.
              </p>
            </header>
          </Reveal>
        )}

        <Reveal delay={0.06}>
          <dl className={`${showHeader ? "mt-14" : "mt-0"} grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden gradient-primary shadow-glow`}>
            {aboutStats.map((stat) => (
              <div key={stat.label} className="px-4 py-8 sm:px-6 text-center border-white/10 lg:border-r last:border-r-0">
                <dt className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{stat.value}</dt>
                <dd className="mt-2 text-[10px] sm:text-xs font-medium uppercase tracking-[0.14em] text-white/75">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="mt-12 rounded-2xl border border-slate-100 bg-white p-7 sm:p-9 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-primary text-white shadow-md">
                <GraduationCap className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A3D62]">Introduction</h3>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">{aboutIntro}</p>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <ShutterHoverCard icon={Flame} title="Purpose of Establishing the Academy">
              {aboutPurpose}
            </ShutterHoverCard>
          </Reveal>
          <Reveal delay={0.12}>
            <ShutterHoverCard
              icon={BookOpen}
              title="Background"
              iconWrapClassName="bg-[#4DA8DA]/15 text-[#0A3D62] group-hover:bg-white/15 group-hover:text-[#F4B400]"
            >
              {aboutBackground}
            </ShutterHoverCard>
          </Reveal>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Reveal delay={0.14}>
            <article className="h-full rounded-2xl bg-[#F4B400] border border-[#F4B400]/80 p-7 sm:p-8 text-[#0A3D62] shadow-[0_16px_40px_rgba(244,180,0,0.35)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary shadow-md">
                <Eye className="h-5 w-5 text-[#4DA8DA]" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-bold">Vision</h3>
              <p className="mt-3 text-sm text-[#0A3D62]/85 leading-relaxed">{aboutVision}</p>
            </article>
          </Reveal>
          <AboutFeatureCard
            size="compact"
            icon={Target}
            title="Mission"
            description={aboutMission}
          />
        </div>

        <Reveal delay={0.18}>
          <div className="mt-12">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-[#0A3D62]">Core Values</h3>
            <p className="mt-2 text-center text-sm text-slate-500 max-w-xl mx-auto">
              The principles that guide every program, partnership, and decision at Shakthi Academy.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aboutCoreValues.map((value) => (
                <div
                  key={value.label}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:border-[#4DA8DA]/30 transition"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DA8DA]/10 text-[#0A3D62]">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-3 font-bold text-[#0A3D62] text-sm">{value.label}</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <article className="relative mt-10 overflow-hidden rounded-2xl border border-[#0A3D62]/10 shadow-lg min-h-[420px]">
            <img
              src={aboutObjectivesBg}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />
            <img
              src={aboutObjectivesAccent}
              alt=""
              aria-hidden
              className="pointer-events-none absolute -right-8 top-1/2 hidden h-[115%] w-auto max-w-none -translate-y-1/2 object-cover opacity-25 mix-blend-luminosity lg:block"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62]/92 via-[#0A3D62]/88 to-[#4DA8DA]/75" />

            <div className="relative z-10 p-7 sm:p-9 lg:p-10">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4B400] text-[#0A3D62] shadow-md">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Objectives</h3>
                  <p className="mt-1 text-sm text-white/75">
                    What we set out to achieve for every learner and partner.
                  </p>
                </div>
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {aboutObjectives.map((objective, i) => (
                  <li
                    key={objective}
                    className="flex items-start gap-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3 text-sm text-white/90 leading-relaxed"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4B400] text-[10px] font-bold text-[#0A3D62]">
                      {i + 1}
                    </span>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-[#0A3D62]">3E Philosophy</h3>
            <p className="mt-2 text-center text-sm text-slate-500 max-w-2xl mx-auto">
              Education, Employment, and Entrepreneurship — the foundation of everything we do.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {aboutThreeE.map((pillar, i) => (
                <article key={pillar.label} className="rounded-2xl bg-[#0A3D62] p-6 text-white">
                  <p className="text-3xl font-extralight text-white/25 tabular-nums leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                      <pillar.icon className="h-4 w-4 text-[#F4B400]" />
                    </span>
                    <h4 className="font-bold">{pillar.label}</h4>
                  </div>
                  <p className="mt-3 text-sm text-white/75 leading-relaxed">{pillar.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <article className="mt-10 rounded-2xl border border-[#F4B400]/30 bg-gradient-to-br from-[#0A3D62]/5 via-white to-[#4DA8DA]/10 p-7 sm:p-9 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-primary text-[#F4B400] shadow-md">
                <Compass className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A3D62]">Long-Term Growth Vision</h3>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">{aboutGrowthVision}</p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, GraduationCap, BookOpen, Building2, DollarSign, Home,
  ClipboardCheck, Globe2, Search, Sparkles, CheckCircle2, MessageCircle,
  X,
} from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import {
  mbbsPrograms, partnerNote, programRegions, programHasDetails,
  gusCaribbeanUniversityNames, otherCaribbeanUniversityNames,
  type MBBSProgram, type ProgramRegion, type MedicalUniversityEntry,
} from "../data/mbbs-programs";
import { gusSchools, otherCaribbeanMedicalSchools, gusUsmleHighlight, type GUSSchool } from "../data/gus-medical-schools";

export const Route = createFileRoute("/university-admissions")({
  head: () => ({
    meta: [
      { title: "Medical Admissions — Study MBBS/MD Abroad | Shakthi Academy" },
      { name: "description", content: "Explore MBBS and MD programs across Poland, Kazakhstan, Russia, Georgia, Caribbean and more. Expert medical admissions guidance from Shakthi Academy." },
    ],
  }),
  component: UniversityAdmissionsPage,
});

const helpItems = [
  "University shortlisting based on your profile & budget",
  "Complete application & documentation support",
  "Visa guidance and pre-departure orientation",
];

function MedicalSchoolCard({ school }: { school: GUSSchool }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
      <p className="font-bold text-[#0A3D62]">{school.name}</p>
      <p className="text-xs text-[#4DA8DA] font-medium mt-0.5">
        {school.location} · {school.climate}
      </p>
      <ul className="mt-3 space-y-1.5">
        {school.highlights.slice(0, 3).map((h) => (
          <li key={h} className="text-sm text-slate-600 flex items-start gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#4DA8DA] mt-0.5" />
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PartnerUniversityList({ names }: { names: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-2">
      {names.map((uni) => (
        <div
          key={uni}
          className="flex items-center gap-2.5 rounded-xl border border-slate-100 px-4 py-3 text-sm text-slate-700"
        >
          <Building2 className="h-4 w-4 shrink-0 text-[#4DA8DA]" />
          {uni}
        </div>
      ))}
    </div>
  );
}

function statusBadgeClass(status: MedicalUniversityEntry["status"]) {
  if (status === "Private") return "bg-violet-50 text-violet-700 border-violet-100";
  if (status === "Public Research University") return "bg-sky-50 text-sky-700 border-sky-100";
  return "bg-emerald-50 text-emerald-700 border-emerald-100";
}

function MedicalUniversityTable({ entries }: { entries: MedicalUniversityEntry[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50/80">
            <th className="px-4 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Country / City</th>
            <th className="px-4 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">University</th>
            <th className="px-4 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Status</th>
            <th className="px-4 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Stream / Duration</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {entries.map((entry) => (
            <tr key={`${entry.city}-${entry.name}`} className="hover:bg-slate-50/60 transition-colors">
              <td className="px-4 py-3.5 align-top text-slate-600 font-medium whitespace-nowrap">{entry.city}</td>
              <td className="px-4 py-3.5 align-top font-semibold text-[#0A3D62] leading-snug">{entry.name}</td>
              <td className="px-4 py-3.5 align-top">
                <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide ${statusBadgeClass(entry.status)}`}>
                  {entry.status}
                </span>
              </td>
              <td className="px-4 py-3.5 align-top text-slate-600 leading-relaxed min-w-[220px]">{entry.stream}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProgramDetailPanel({ program }: { program: MBBSProgram }) {
  const detailed = programHasDetails(program);

  return (
    <motion.div
      key={program.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-slate-200 bg-white shadow-soft overflow-hidden"
    >
      {/* Panel header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-6 py-5 md:px-8">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center rounded-full bg-[#0A3D62]/10 px-2.5 py-0.5 text-xs font-semibold text-[#0A3D62]">
              {program.region}
            </span>
            {program.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F4B400]/15 px-2.5 py-0.5 text-xs font-semibold text-[#0A3D62]">
                <Sparkles className="h-3 w-3 text-[#F4B400]" />
                Featured
              </span>
            )}
            {detailed && (
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                Full details available
              </span>
            )}
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A3D62]">{program.title}</h3>
          {program.subtitle && (
            <p className="mt-1 text-sm text-[#4DA8DA] font-medium">{program.subtitle}</p>
          )}
        </div>
        <a
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-5 py-3 shadow-glow hover:translate-y-[-1px] transition"
        >
          <MessageCircle className="h-4 w-4" />
          Free Consultation
        </a>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {detailed ? (
          <>
            {program.intro && (
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">{program.intro}</p>
            )}

            {program.highlights && program.highlights.length > 0 && (
              <div>
                <h4 className="section-label mb-3">
                  Why students choose {program.shortName}
                </h4>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {program.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#4DA8DA] mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {program.details && program.details.length > 0 && (
              <div>
                <h4 className="section-label mb-3">
                  Program at a glance
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {program.details.map((d) => {
                    const isClimate = d.label === "Climate / Temperature";
                    if (isClimate) {
                      const text = d.value.toLowerCase();
                      let weatherType: "snow" | "sun" | "rain" | "mild" = "mild";
                      if (text.includes("cold") || text.includes("winter") || text.includes("snow") || text.includes("-12") || text.includes("-30") || text.includes("heaters")) {
                        weatherType = "snow";
                      } else if (text.includes("tropical") || text.includes("hot") || text.includes("summer") || text.includes("sun") || text.includes("30°c")) {
                        weatherType = "sun";
                      } else if (text.includes("rain") || text.includes("rainy") || text.includes("thunder") || text.includes("monsoon") || text.includes("wet")) {
                        weatherType = "rain";
                      }

                      // Card styling based on weather type
                      let cardBorder = "border-sky-100 hover:border-sky-300";
                      let cardBg = "bg-gradient-to-br from-sky-50/70 via-white to-amber-50/50";
                      let iconBg = "bg-sky-100 text-sky-600";
                      let iconEmoji = "🌤️";
                      let headerText = "text-sky-500";

                      if (weatherType === "snow") {
                        cardBorder = "border-blue-300 hover:border-blue-400";
                        cardBg = "bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-900 text-white";
                        iconBg = "bg-blue-900/50 text-blue-200 border border-blue-500/30";
                        iconEmoji = "❄️";
                        headerText = "text-blue-300";
                      } else if (weatherType === "sun") {
                        cardBorder = "border-amber-200 hover:border-amber-300";
                        cardBg = "bg-gradient-to-br from-amber-50/70 via-white to-rose-50/30";
                        iconBg = "bg-amber-100 text-amber-650";
                        iconEmoji = "☀️";
                        headerText = "text-amber-600";
                      } else if (weatherType === "rain") {
                        cardBorder = "border-indigo-200 hover:border-indigo-300";
                        cardBg = "bg-gradient-to-br from-slate-50 via-indigo-50/30 to-sky-50/30";
                        iconBg = "bg-indigo-100 text-indigo-650";
                        iconEmoji = "⛈️";
                        headerText = "text-indigo-600";
                      }

                      return (
                        <motion.div
                          key={d.label}
                          whileHover={{ scale: 1.03 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                          className={`rounded-xl border ${cardBorder} ${cardBg} p-4 shadow-sm hover:shadow-soft transition-all duration-300 flex items-start gap-3 relative overflow-hidden group`}
                        >
                          {/* Weather-Specific Animated Overlays */}
                          {weatherType === "snow" && (
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                              {[...Array(8)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-60"
                                  style={{
                                    left: `${10 + i * 12}%`,
                                    top: `-10px`,
                                  }}
                                  animate={{
                                    y: [0, 90],
                                    x: [0, i % 2 === 0 ? 10 : -10],
                                  }}
                                  transition={{
                                    duration: 3 + (i % 3) * 0.8,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.3,
                                  }}
                                />
                              ))}
                            </div>
                          )}

                          {weatherType === "sun" && (
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                              <motion.div
                                className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-amber-400/20 blur-md"
                                animate={{
                                  scale: [1, 1.25, 1],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                            </div>
                          )}

                          {weatherType === "rain" && (
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                              {[...Array(8)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-[1px] h-3.5 bg-indigo-300/40"
                                  style={{
                                    left: `${15 + i * 11}%`,
                                    top: `-15px`,
                                  }}
                                  animate={{
                                    y: [0, 90],
                                    x: [-5, -15],
                                  }}
                                  transition={{
                                    duration: 1.1 + (i % 3) * 0.2,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.15,
                                  }}
                                />
                              ))}
                            </div>
                          )}

                          {/* Watermark */}
                          <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 group-hover:scale-110 transition-transform duration-500 select-none pointer-events-none text-7xl font-bold">
                            {iconEmoji}
                          </div>
                          
                          <div className={`h-9 w-9 rounded-lg ${iconBg} grid place-items-center shrink-0 mt-0.5 z-10`}>
                            {weatherType === "sun" ? (
                              <motion.span
                                className="text-lg"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                              >
                                ☀️
                              </motion.span>
                            ) : (
                              <span className="text-lg z-10">{iconEmoji}</span>
                            )}
                          </div>
                          
                          <div className="min-w-0 z-10 flex-1">
                            <p className={`text-[11px] font-extrabold uppercase tracking-wider ${headerText} flex items-center gap-1`}>
                              {d.label}
                              <span className="inline-block animate-bounce">{weatherType === "snow" ? "❄️" : weatherType === "sun" ? "☀️" : "🌤️"}</span>
                            </p>
                            <p className={`mt-1 text-xs sm:text-sm font-bold leading-snug ${weatherType === "snow" ? "text-slate-100" : "text-slate-800"}`}>{d.value}</p>
                          </div>
                        </motion.div>
                      );
                    }

                    return (
                      <div key={d.label} className="rounded-xl border border-slate-100 p-4 hover:border-[#4DA8DA]/30 transition">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{d.label}</p>
                        <p className="mt-1.5 text-sm font-semibold text-[#0A3D62] leading-snug">{d.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {program.id === "caribbean" ? (
              <>
                {program.medicalUniversities && program.medicalUniversities.length > 0 && (
                  <div>
                    <h4 className="section-label mb-3">Partner universities</h4>
                    <MedicalUniversityTable entries={program.medicalUniversities} />
                  </div>
                )}

                <div className="rounded-2xl border-2 border-[#4DA8DA]/25 bg-gradient-to-br from-[#4DA8DA]/5 via-white to-slate-50/80 p-5 md:p-6 space-y-5">
                  <div>
                    <h4 className="section-label mb-1">
                      GUS Medical & Veterinary Schools
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{gusUsmleHighlight}</p>
                  </div>
                  <PartnerUniversityList names={gusCaribbeanUniversityNames} />
                  <div className="space-y-4">
                    {gusSchools.map((school) => (
                      <MedicalSchoolCard key={school.id} school={school} />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 space-y-4">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-slate-600">
                      Independent partners
                    </span>
                    <h4 className="section-label mt-3 mb-1">
                      Other Caribbean Medical Schools
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      SGU and Rajiv Gandhi are separate institutions — not part of the GUS group — listed here for your reference.
                    </p>
                  </div>
                  <PartnerUniversityList names={otherCaribbeanUniversityNames} />
                  <div className="space-y-4">
                    {otherCaribbeanMedicalSchools.map((school) => (
                      <MedicalSchoolCard key={school.id} school={school} />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              program.medicalUniversities && program.medicalUniversities.length > 0 ? (
                <div>
                  <h4 className="section-label mb-3">
                    Partner universities
                  </h4>
                  <MedicalUniversityTable entries={program.medicalUniversities} />
                </div>
              ) : (
                program.universities &&
                program.universities.length > 0 && (
                  <div>
                    <h4 className="section-label mb-3">
                      Partner universities
                    </h4>
                    <PartnerUniversityList names={program.universities} />
                  </div>
                )
              )
            )}

            {program.note && (
              <div className="rounded-2xl border border-[#F4B400]/25 bg-[#F4B400]/5 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0A3D62] mb-1.5">Important note</p>
                <p className="text-sm text-slate-600 leading-relaxed">{program.note}</p>
              </div>
            )}
          </>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-600 leading-relaxed">
                Planning to study MBBS/MD in <strong className="text-[#0A3D62]">{program.shortName}</strong>?
                Shakthi Academy guides you from university selection to visa and departure — with personalized counseling at every step.
              </p>
              <ul className="mt-5 space-y-2.5">
                {helpItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#4DA8DA] mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl gradient-primary p-6 text-white">
              <GraduationCap className="h-8 w-8 text-[#F4B400]" />
              <p className="mt-4 font-bold text-lg">Get personalized guidance</p>
              <p className="mt-2 text-sm text-white/85 leading-relaxed">
                Share your preferred program and budget — our counselors will recommend the best-fit universities in {program.shortName}.
              </p>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white text-[#0A3D62] text-sm font-semibold px-5 py-2.5 hover:bg-white/90 transition"
              >
                Enquire Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function UniversityAdmissionsPage() {
  const [activeId, setActiveId] = useState("caribbean");
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<ProgramRegion | "All">("All");
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && mbbsPrograms.some((p) => p.id === hash)) {
      setActiveId(hash);
    }
  }, []);

  const filteredPrograms = useMemo(() => {
    const q = search.trim().toLowerCase();
    return mbbsPrograms
      .filter((p) => {
        const matchesRegion = region === "All" || p.region === region;
        const matchesSearch =
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.shortName.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q);
        return matchesRegion && matchesSearch;
      })
      .sort((a, b) => a.shortName.localeCompare(b.shortName));
  }, [search, region]);

  const activeProgram =
    mbbsPrograms.find((p) => p.id === activeId) ??
    filteredPrograms[0] ??
    mbbsPrograms[0];

  const selectProgram = (id: string) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80"
            alt="Medical Admissions"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/15 blur-3xl z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10">
              <GraduationCap className="h-3.5 w-3.5 text-[#F4B400]" />
              Medical Admissions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              Study{" "}
              <span className="bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent">
                MBBS / MD
              </span>{" "}
              abroad
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Picking the right destination, and where you want to practice medicine, will be the key factor in your successful medical career ahead! Explore program details below and connect with our dedicated team for MBBS & MD guidance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 hover:bg-white/15 transition"
            >
              <Globe2 className="h-4 w-4 text-[#F4B400]" />
              <span className="text-xs font-semibold text-white">{mbbsPrograms.length} Destinations</span>
            </a>
            <Link
              to="/mbbs-to-md"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 hover:bg-white/15 transition"
            >
              <BookOpen className="h-4 w-4 text-[#F4B400]" />
              <span className="text-xs font-semibold text-white">MBBS to MD Pathway</span>
            </Link>
            <a
              href="/usmle"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 hover:bg-white/15 transition"
            >
              <ClipboardCheck className="h-4 w-4 text-[#F4B400]" />
              <span className="text-xs font-semibold text-white">USMLE Coaching</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F4B400]/20 border border-[#F4B400]/40 px-4 py-2 hover:bg-[#F4B400]/30 transition"
            >
              <DollarSign className="h-4 w-4 text-[#F4B400]" />
              <span className="text-xs font-semibold text-white">Expert Guidance</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-14 md:py-20 bg-slate-50/70 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
              <div>
                <span className="section-eyebrow">Medical programs</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                  Choose your destination
                </h2>
                <p className="mt-2 text-slate-600 max-w-xl">
                  Search or filter by region, then tap a destination to view details.{" "}
                  <Link to="/mbbs-to-md" className="font-semibold text-[#4DA8DA] hover:underline">
                    MBBS to MD pathways →
                  </Link>
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full lg:max-w-sm">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search country or university..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-10 py-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4DA8DA]/40 focus:border-[#4DA8DA]"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </Reveal>

          {/* Region filters */}
          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-1.5 mb-5">
              <button
                type="button"
                onClick={() => setRegion("All")}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${
                  region === "All"
                    ? "gradient-primary text-white shadow-glow"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-[#4DA8DA]/40"
                }`}
              >
                All ({mbbsPrograms.length})
              </button>
              {programRegions.map((r) => {
                const count = mbbsPrograms.filter((p) => p.region === r).length;
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRegion(r)}
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${
                      region === r
                        ? "gradient-primary text-white shadow-glow"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-[#4DA8DA]/40"
                    }`}
                  >
                    {r} ({count})
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Destination cards */}
          {filteredPrograms.length > 0 ? (
            <Reveal delay={0.08}>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(108px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(118px,1fr))] gap-2">
                {filteredPrograms.map((program) => {
                  const isActive = program.id === activeId;
                  const detailed = programHasDetails(program);
                  return (
                    <button
                      key={program.id}
                      type="button"
                      onClick={() => selectProgram(program.id)}
                      className={`group relative overflow-hidden text-left rounded-xl border h-[118px] sm:h-[124px] transition-all duration-300 ${
                        isActive
                          ? "border-[#F4B400] shadow-glow ring-2 ring-[#F4B400]/50"
                          : "border-slate-200/80 hover:border-[#4DA8DA]/60 hover:-translate-y-0.5 hover:shadow-soft"
                      }`}
                    >
                      {/* Background image */}
                      <img
                        src={program.image}
                        alt={program.shortName}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className={`absolute inset-0 transition-colors duration-300 ${
                        isActive
                          ? "bg-gradient-to-t from-[#0A3D62]/95 via-[#0A3D62]/50 to-[#0A3D62]/20"
                          : "bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10 group-hover:from-[#0A3D62]/90"
                      }`} />

                      {program.featured && (
                        <span className="absolute top-1.5 right-1.5 z-10 rounded-full bg-[#F4B400] px-1.5 py-0.5 text-[9px] font-bold text-[#0A3D62] shadow">
                          Popular
                        </span>
                      )}

                      {detailed && !program.featured && (
                        <span className="absolute top-1.5 right-1.5 z-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-1.5 py-0.5 text-[9px] font-semibold text-white">
                          Details
                        </span>
                      )}

                      {/* Text content */}
                      <div className="relative z-10 flex h-full flex-col justify-end p-2 sm:p-2.5">
                        <p className="font-bold text-[11px] sm:text-xs leading-tight text-white drop-shadow line-clamp-2">
                          {program.shortName}
                        </p>
                        {program.subtitle && (
                          <p className="mt-0.5 text-[9px] text-white/80 line-clamp-1">{program.subtitle}</p>
                        )}
                        <p className="mt-1 text-[9px] font-medium text-white/60 line-clamp-1">
                          {program.region}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </Reveal>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center">
              <Search className="h-10 w-10 text-slate-300 mx-auto" />
              <p className="mt-4 font-semibold text-[#0A3D62]">No destinations found</p>
              <p className="mt-1 text-sm text-slate-500">Try a different search term or clear filters.</p>
              <button
                type="button"
                onClick={() => { setSearch(""); setRegion("All"); }}
                className="mt-4 text-sm font-semibold text-[#4DA8DA] hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Detail panel */}
          <div ref={detailRef} className="mt-10 scroll-mt-28">
            <AnimatePresence mode="wait">
              <ProgramDetailPanel program={activeProgram} />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PARTNER NOTE */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="rounded-3xl gradient-primary p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#F4B400]/20 blur-3xl" />
              <div className="relative max-w-3xl">
                <Home className="h-10 w-10 text-[#F4B400]" />
                <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold">
                  Your preferred program, university & country
                </h2>
                <p className="mt-4 text-white/85 leading-relaxed">{partnerNote}</p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-[#0A3D62] text-sm font-semibold px-6 py-3.5 hover:bg-white/90 transition"
                >
                  Tell Us Your Preference <ArrowRight className="h-4 w-4" />
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

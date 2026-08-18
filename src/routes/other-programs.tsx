import { createFileRoute } from '@tanstack/react-router'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, School, BookOpen, GraduationCap, FlaskConical, Globe2,
  CheckCircle2, Building2, Microscope, Cpu, Home,
  Search, X, ChevronRight, Mail, Phone, User, Check, Clock
} from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import {
  introParagraphs, ugCourses, pgCourses, phdCourses, stemCourses,
  stemWhyStudy, stemServices, popularStemCourses,
  europeanUniversities, otherUniversities, partnerNote,
  programStreams, type ProgramStream, type CourseRow,
  universitySpecificPrograms, otherProgramsAlphabeticalPartners,
} from "../data/other-programs";
import { bhmsHighlights, bhmsPillars, bhmsAccreditationLabels } from "../data/bhms-switzerland";
import { apiSubmitInquiry } from "../lib/api/cms.api";
import { CONTACT_PHONE_PRIMARY } from "../data/brand";
import { useT } from "../i18n";

export const Route = createFileRoute("/other-programs")({
  head: () => ({
    meta: [
      { title: "Other Programs & Universities | Shakthi Academy" },
      { name: "description", content: "Explore UG, PG, PhD and STEM programs abroad — Computer Science, Psychology, Biotechnology, Law, Management and more. Personalized guidance from Shakthi Academy." },
    ],
  }),
  component: OtherProgramsPage,
});

const streamMeta: Record<ProgramStream, { label: string; title: string; icon: typeof BookOpen; rows: CourseRow[] }> = {
  UG: { label: "Undergraduate", title: "Undergraduate (UG) Courses", icon: BookOpen, rows: ugCourses },
  PG: { label: "Postgraduate", title: "Postgraduate (PG) Courses", icon: GraduationCap, rows: pgCourses },
  PhD: { label: "Doctoral", title: "Doctoral (PhD) Courses", icon: FlaskConical, rows: phdCourses },
  STEM: { label: "STEM", title: "STEM Courses Abroad", icon: Microscope, rows: stemCourses },
};

function CourseTable({ rows }: { rows: CourseRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-100">
      <table className="w-full min-w-[600px] text-sm">
        <thead>
          <tr className="bg-slate-50 text-left">
            <th className="px-5 py-3.5 font-bold text-[#0A3D62] w-[30%]">Field</th>
            <th className="px-5 py-3.5 font-bold text-[#0A3D62]">Courses</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <motion.tr
              key={row.field}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04, duration: 0.2 }}
              className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
            >
              <td className="px-5 py-4 font-semibold text-[#0A3D62] align-top border-t border-slate-100">{row.field}</td>
              <td className="px-5 py-4 text-slate-600 leading-relaxed align-top border-t border-slate-100">{row.courses}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function UniversityGrid({ items, title }: { items: typeof europeanUniversities; title: string }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-[#0A3D62] mb-4">{title}</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.country} className="rounded-2xl border border-slate-100 bg-white p-5 hover:border-[#4DA8DA]/30 hover:shadow-soft transition">
            <div className="flex items-center gap-2 mb-3">
              <Globe2 className="h-4 w-4 text-[#4DA8DA]" />
              <h4 className="font-bold text-[#0A3D62]">{item.country}</h4>
            </div>
            <ul className="space-y-2">
              {item.universities.map((uni) => (
                <li key={uni} className="flex items-start gap-2 text-sm text-slate-600">
                  <Building2 className="h-3.5 w-3.5 shrink-0 text-[#4DA8DA] mt-0.5" />
                  <span>{uni}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function StemSection() {
  return (
    <div className="space-y-8">
      <p className="text-slate-600 leading-relaxed text-base md:text-lg">
        STEM (Science, Technology, Engineering, and Mathematics) courses have gained immense popularity worldwide due to their practical applications and career prospects. Studying STEM abroad offers a unique opportunity to delve deeper into these fields and gain valuable international experience. Shakthi Academy can provide invaluable guidance and support throughout this journey.
      </p>

      <div>
        <h4 className="section-label mb-4">Why study STEM abroad?</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          {stemWhyStudy.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.2 }}
              whileHover={{ y: -3 }}
              className="rounded-xl bg-slate-50 border border-slate-100 p-5 hover:border-[#4DA8DA]/30 hover:shadow-soft transition-all duration-300"
            >
              <p className="font-bold text-[#0A3D62]">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="section-label mb-4">How Shakthi Academy helps</h4>
        <ul className="grid sm:grid-cols-2 gap-3">
          {stemServices.map((item, idx) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.04, duration: 0.2 }}
              className="flex items-start gap-2.5 text-sm text-slate-700 rounded-xl border border-slate-100 px-4 py-3 bg-white"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#4DA8DA] mt-0.5" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="section-label mb-4">Popular STEM courses abroad</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          {popularStemCourses.map((item, idx) => (
            <motion.div
              key={item.field}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.2 }}
              whileHover={{ y: -3 }}
              className="rounded-xl border border-slate-100 p-5 hover:border-[#4DA8DA]/30 hover:shadow-soft bg-white transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="h-4 w-4 text-[#4DA8DA]" />
                <p className="font-bold text-[#0A3D62]">{item.field}</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{item.courses}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="text-slate-600 leading-relaxed">
        Studying STEM courses abroad can be a transformative experience, providing students with the knowledge, skills, and global perspective needed to succeed in today's competitive job market. With the support of Shakthi Academy, aspiring STEM students can navigate the application process, explore diverse opportunities, and embark on a fulfilling academic journey.
      </p>
    </div>
  );
}

interface PartnerUniversity {
  name: string;
  country: string;
  state?: string;
  logoBg: string;
}

function partnerLocationLabel(uni: Pick<PartnerUniversity, "country" | "state">) {
  return uni.state ? `${uni.state}, ${uni.country}` : uni.country;
}

const partnerUniversities = otherProgramsAlphabeticalPartners;

function getProgramsForUniversity(uniName: string) {
  const nameLower = uniName.toLowerCase().trim();
  const keys = Object.keys(universitySpecificPrograms);

  const exact = keys.find((key) => key.toLowerCase() === nameLower);
  if (exact) return universitySpecificPrograms[exact];

  // Alias expansions only: "Foo" ↔ "Foo (SEU)". Do not map a bare name onto a
  // different campus like "Foo (IEU) - Poland".
  const alias = keys
    .filter((key) => {
      const k = key.toLowerCase();
      const [shorter, longer] =
        nameLower.length <= k.length ? [nameLower, k] : [k, nameLower];
      if (!longer.startsWith(shorter)) return false;
      const rest = longer.slice(shorter.length);
      if (nameLower === shorter) {
        return /^\s*\([^)-]+\)$/.test(rest);
      }
      return /^\s*(\(|-|–)/.test(rest);
    })
    .sort((a, b) => b.length - a.length)[0];

  if (alias && universitySpecificPrograms[alias]) {
    return universitySpecificPrograms[alias];
  }

  const name = uniName.toLowerCase();
  if (name.includes("business") || name.includes("management") || name.includes("school") || name.includes("icn") || name.includes("idrac")) {
    return [
      { degree: "Undergraduate", title: "Bachelor of Business Administration (BBA)", duration: "3 Years", stream: "Management" },
      { degree: "Undergraduate", title: "B.Sc. in Hospitality & Hotel Management", duration: "3 Years", stream: "Hospitality" },
      { degree: "Postgraduate", title: "Master of Business Administration (MBA)", duration: "1-2 Years", stream: "Management" },
      { degree: "Postgraduate", title: "M.Sc. in International Finance & Marketing", duration: "1.5 Years", stream: "Finance" },
    ];
  } else if (name.includes("technical") || name.includes("aviation") || name.includes("technology") || name.includes("applied") || name.includes("engineering") || name.includes("epsi") || name.includes("estiam") || name.includes("telecommunication")) {
    return [
      { degree: "Undergraduate", title: "B.Sc. in Computer Science & AI", duration: "3 Years", stream: "IT & Tech" },
      { degree: "Undergraduate", title: "Bachelor of Engineering (B.Eng) in Tech", duration: "4 Years", stream: "Engineering" },
      { degree: "Postgraduate", title: "M.Sc. in Data Science & Cyber Security", duration: "2 Years", stream: "STEM" },
      { degree: "Postgraduate", title: "Master in Software Engineering", duration: "2 Years", stream: "IT & Tech" },
    ];
  } else {
    return [
      { degree: "Undergraduate", title: "B.Sc. in Biotechnology & Applied Genetics", duration: "3 Years", stream: "Science" },
      { degree: "Undergraduate", title: "Bachelor of Arts (BA) in Psychology", duration: "3 Years", stream: "Humanities" },
      { degree: "Postgraduate", title: "M.Sc. in Environmental Sciences", duration: "2 Years", stream: "Science" },
      { degree: "Postgraduate", title: "Master of Laws (LL.M.) in International Law", duration: "1.5 Years", stream: "Law" },
      { degree: "Doctoral", title: "PhD in Economics & Social Sciences", duration: "3-4 Years", stream: "PhD" },
    ];
  }
}

function OtherProgramsPage() {
  const { t } = useT();
  const [activeStream, setActiveStream] = useState<ProgramStream>("UG");
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState("All");
  const [activeCountry, setActiveCountry] = useState("All");
  const [selectedUni, setSelectedUni] = useState<PartnerUniversity | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "", program: "", year: "2026", message: "" });

  const partnerCountries = [
    ...new Set(partnerUniversities.map((u) => u.country).filter(Boolean)),
  ].sort((a, b) => a.localeCompare(b));

  const filteredPartners = partnerUniversities.filter((uni) => {
    const matchesLetter = activeLetter === "All" || uni.name.toUpperCase().startsWith(activeLetter);
    const matchesCountry = activeCountry === "All" || uni.country === activeCountry;
    const q = search.toLowerCase().trim();
    const location = partnerLocationLabel(uni).toLowerCase();
    const matchesSearch =
      !q ||
      uni.name.toLowerCase().includes(q) ||
      uni.country.toLowerCase().includes(q) ||
      (uni.state?.toLowerCase().includes(q) ?? false) ||
      location.includes(q) ||
      (q === "usa" && uni.country.toLowerCase() === "usa") ||
      (q.includes("united states") && uni.country.toLowerCase() === "usa");
    return matchesLetter && matchesCountry && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/other-programs-hero.png"
            alt="Other Programs & Universities"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/15 blur-3xl z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10">
              <School className="h-3.5 w-3.5 text-[#F4B400]" />
              {t("services.otherPrograms.hero.eyebrow")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {t("services.otherPrograms.hero.title")}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t("services.otherPrograms.hero.subtitle")}
            </p>
            <a
              href={CONTACT_PHONE_PRIMARY ? `tel:${CONTACT_PHONE_PRIMARY.tel}` : "/contact"}
              className="mt-8 inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition"
            >
              {CONTACT_PHONE_PRIMARY ? <Phone className="h-4 w-4" /> : null}
              {CONTACT_PHONE_PRIMARY ? "Call Us" : "Contact Us"}
            </a>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-4xl space-y-4">
              {introParagraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-slate-600 leading-relaxed text-base md:text-lg">{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 flex flex-wrap gap-3">
              {programStreams.map((s) => {
                const Icon = streamMeta[s].icon;
                return (
                  <span key={s} className="inline-flex items-center gap-2 rounded-full bg-[#0A3D62]/8 border border-[#0A3D62]/10 px-4 py-2 text-sm font-semibold text-[#0A3D62]">
                    <Icon className="h-4 w-4 text-[#4DA8DA]" />
                    {streamMeta[s].label}
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STREAMS / COURSES */}
      <section className="py-14 md:py-20 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <span className="section-eyebrow">Streams / Courses</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
              UG / PG / PhD / STEM
            </h2>
          </Reveal>

          {/* Stream tabs */}
          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap gap-2">
              {programStreams.map((s) => {
                const Icon = streamMeta[s].icon;
                const isActive = activeStream === s;
                return (
                  <motion.button
                    key={s}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => setActiveStream(s)}
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "gradient-primary text-white shadow-glow"
                        : "bg-white text-slate-650 border border-slate-200 hover:border-[#4DA8DA]/45"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {streamMeta[s].label}
                  </motion.button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 rounded-3xl bg-white border border-slate-100 shadow-soft p-6 md:p-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStream}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                >
                  <h3 className="text-xl font-extrabold text-[#0A3D62] mb-6">
                    {streamMeta[activeStream].title}
                  </h3>
                  <CourseTable rows={streamMeta[activeStream].rows} />
                  {activeStream === "STEM" && (
                    <div className="mt-8 space-y-6 border-t border-slate-100 pt-8">
                      <StemSection />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BHMS SWITZERLAND */}
      <section className="py-14 md:py-20 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <span className="section-eyebrow">Switzerland</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
              B.H.M.S — Business & Hotel Management School, Lucerne
            </h2>
            <p className="mt-3 text-slate-600 max-w-3xl leading-relaxed">
              BHMS holds a prestigious global position in hospitality education. Industry internship BSc (Hons.) pathways combine quality academics, assured internships, personal development, and international career placement.
            </p>
          </Reveal>

          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            <Reveal delay={0.05}>
              <div className="rounded-3xl bg-white border border-slate-100 shadow-soft p-6 md:p-8 h-full">
                <h3 className="section-label mb-4">Highlights</h3>
                <ul className="space-y-3">
                  {bhmsHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#4DA8DA] mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {bhmsAccreditationLabels.map((label) => (
                    <span key={label} className="px-3 py-1.5 rounded-lg bg-[#0A3D62]/5 border border-[#0A3D62]/10 text-xs font-bold text-[#0A3D62]">
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-3xl gradient-primary p-6 md:p-8 text-white h-full">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#F4B400] mb-4">Four pillars at BHMS</h3>
                <div className="space-y-4">
                  {bhmsPillars.map((pillar) => (
                    <div key={pillar.title} className="rounded-xl bg-white/10 border border-white/15 p-4">
                      <p className="font-bold">{pillar.title}</p>
                      <p className="mt-1 text-sm text-white/85 leading-relaxed">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <span className="section-eyebrow">Partner universities</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
              Explore Institutions Alphabetically
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Filter by name, country, or alphabetical directory to explore degrees, credit waivers, and admission guidelines.
            </p>
          </Reveal>

          {/* Directory Search & Filters */}
          <Reveal delay={0.05}>
            <div className="mt-10 space-y-4">
              <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
                {/* Search Box */}
                <div className="relative w-full lg:max-w-md shrink-0">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search university or country..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#4DA8DA] focus:ring-1 focus:ring-[#4DA8DA]/35 transition bg-white shadow-soft"
                  />
                </div>

                {/* Country filter */}
                <div className="relative w-full lg:w-72 shrink-0">
                  <Globe2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  <select
                    value={activeCountry}
                    onChange={(e) => setActiveCountry(e.target.value)}
                    aria-label="Filter by country"
                    className="w-full appearance-none pl-10 pr-10 py-3.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#4DA8DA] focus:ring-1 focus:ring-[#4DA8DA]/35 transition bg-white shadow-soft font-semibold text-[#0A3D62] cursor-pointer"
                  >
                    <option value="All">All countries</option>
                    {partnerCountries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 rotate-90 pointer-events-none" />
                </div>

                {(activeCountry !== "All" || activeLetter !== "All" || search) && (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCountry("All");
                      setActiveLetter("All");
                      setSearch("");
                    }}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-xs font-bold text-slate-500 hover:text-[#0A3D62] hover:border-[#4DA8DA]/40 transition shrink-0"
                  >
                    <X className="h-3.5 w-3.5" />
                    Clear filters
                  </button>
                )}
              </div>

              {/* Alphabet list wrapper */}
              <div className="flex flex-wrap gap-1 items-center p-1.5 rounded-2xl bg-slate-50 border border-slate-200/60 max-w-full">
                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce<string[]>(
                  (acc, letter) => {
                    if (partnerUniversities.some((u) => u.name.toUpperCase().startsWith(letter))) {
                      acc.push(letter);
                    }
                    return acc;
                  },
                  ["All"],
                ).map((letter) => {
                  const isActive = activeLetter === letter;
                  return (
                    <motion.button
                      key={letter}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={() => setActiveLetter(letter)}
                      className={`h-9 min-w-9 px-2.5 rounded-xl text-xs font-extrabold transition flex items-center justify-center ${
                        isActive
                          ? "gradient-primary text-white shadow-md"
                          : "bg-transparent text-slate-500 hover:bg-white hover:text-slate-800 hover:shadow-sm"
                      }`}
                    >
                      {letter}
                    </motion.button>
                  );
                })}
              </div>

              <p className="text-xs font-semibold text-slate-400">
                Showing {filteredPartners.length} institution{filteredPartners.length === 1 ? "" : "s"}
                {activeCountry !== "All" ? ` in ${activeCountry}` : ""}
              </p>
            </div>
          </Reveal>

          {/* Alphabetical Grid */}
          <Reveal delay={0.08}>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredPartners.map((uni) => {
                  const initials = uni.name
                    .split(" ")
                    .filter((w) => w.length > 1)
                    .map((w) => w.charAt(0))
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();
                  return (
                    <motion.div
                      key={uni.name}
                      whileHover={{ y: -3, borderColor: "#4DA8DA" }}
                      onClick={() => {
                        setSelectedUni(uni);
                        setFormSubmitted(false);
                      }}
                      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/70 bg-white p-5 cursor-pointer hover:shadow-soft transition-all duration-300 overflow-hidden"
                    >
                      <div>
                        {/* Top Accent Country Pill */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="inline-flex items-center gap-1 text-xs font-extrabold tracking-widest text-[#0A3D62] bg-slate-100 px-2.5 py-1 rounded-full uppercase border border-slate-200">
                            <Globe2 className="h-2.5 w-2.5" />
                            {partnerLocationLabel(uni)}
                          </span>
                          <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-[#4DA8DA] group-hover:translate-x-0.5 transition-all duration-300" />
                        </div>

                        <div className="flex items-start gap-3.5">
                          {/* Unified crest emblem representation */}
                          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-slate-900 via-[#0A3D62] to-[#0A3D62] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm transition-all duration-300 group-hover:shadow-soft">
                            {initials || "UN"}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-xs sm:text-[13px] font-extrabold text-[#0A3D62] leading-snug group-hover:text-[#4DA8DA] transition-colors duration-300 line-clamp-2">
                              {uni.name}
                            </h4>
                            <p className="text-[10px] text-slate-400 font-bold mt-1.5 flex items-center gap-1.5">
                              <School className="h-3 w-3 text-[#4DA8DA]/70" />
                              Partner Institution
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Top border decoration line */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#4DA8DA]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  );
                })}
            </div>
          </Reveal>
        </div>

        {/* Dynamic Programs & Lead Capture Modal */}
        {selectedUni && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <div className="bg-white w-full max-w-4xl rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row max-h-[85vh] animate-fade-in relative">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedUni(null)}
                className="absolute right-4 top-4 h-9 w-9 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-500 z-20 transition"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Left Column: Uni Info & Programs list */}
              <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto border-r border-slate-100 max-h-[40vh] md:max-h-none">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center font-extrabold text-sm shadow-sm ${selectedUni.logoBg}`}>
                    {selectedUni.name
                      .split(" ")
                      .filter((w) => w.length > 1)
                      .map((w) => w.charAt(0))
                      .join("")
                      .slice(0, 2)
                      .toUpperCase() || "UN"}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-[#0A3D62] leading-snug">{selectedUni.name}</h3>
                    <span className="inline-block section-label-sm mt-0.5">
                      {partnerLocationLabel(selectedUni)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Programs Offered</h4>
                    <div className="space-y-2">
                      {getProgramsForUniversity(selectedUni.name).map((prog) => (
                        <div key={prog.title} className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl hover:border-[#4DA8DA]/20 transition">
                          <span className="text-xs font-extrabold text-[#0A3D62] bg-[#0A3D62]/10 rounded px-1.5 py-0.5 uppercase tracking-wider">
                            {prog.degree}
                          </span>
                          <p className="text-xs font-bold text-[#0A3D62] mt-1.5 leading-snug">{prog.title}</p>
                          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold mt-1">
                            <Clock className="h-3 w-3 text-slate-300" />
                            <span>Duration: {prog.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Capture Form */}
              <div className="md:w-1/2 p-6 md:p-8 bg-slate-50/50 flex flex-col justify-center max-h-[45vh] md:max-h-none overflow-y-auto">
                {formSubmitted ? (
                  <div className="text-center py-6">
                    <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 grid place-items-center mb-4">
                      <Check className="h-6 w-6" />
                    </div>
                    <h4 className="font-extrabold text-[#0A3D62] text-lg">Request Registered!</h4>
                    <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                      Thank you for your interest. A Shakthi Academy admissions advisor will reach out via email/phone within 24 hours with prerequisites, credit waivers, and enrollment steps for <strong>{selectedUni.name}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedUni(null)}
                      className="mt-6 w-full rounded-xl bg-[#0A3D62] text-white text-xs font-bold py-3 hover:bg-[#0A3D62]/90 transition"
                    >
                      Close Portal
                    </button>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-extrabold text-[#0A3D62] text-base mb-1">Check Eligibility & Deadlines</h4>
                    <p className="text-[11px] text-slate-400 font-semibold mb-5">
                      Request custom requirements for {selectedUni.name}.
                    </p>

                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                          await apiSubmitInquiry({
                            formName: "University Programs Inquiry",
                            name: leadForm.name,
                            email: leadForm.email,
                            phone: leadForm.phone,
                            subject: `Inquiry for ${selectedUni.name}`,
                            message: `Preferred program: ${leadForm.program || "Not selected"}. Intake year: ${leadForm.year}.`,
                          });
                          setFormSubmitted(true);
                        } catch (err) {
                          console.error("Failed to save submission", err);
                        }
                      }}
                      className="space-y-3"
                    >
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={leadForm.name}
                            onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition"
                          />
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">Email</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                            <input
                              type="email"
                              required
                              placeholder="john@example.com"
                              value={leadForm.email}
                              onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">Phone</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                            <input
                              type="tel"
                              required
                              placeholder="+91 XXXXX XXXXX"
                              value={leadForm.phone}
                              onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Course Selection */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">Preferred Program</label>
                        <select
                          required
                          value={leadForm.program}
                          onChange={(e) => setLeadForm({ ...leadForm, program: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition"
                        >
                          <option value="">-- Choose Offered Degree --</option>
                          {getProgramsForUniversity(selectedUni.name).map((prog) => (
                            <option key={prog.title} value={prog.title}>
                              {prog.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Intake Year */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">Intended Intake</label>
                        <select
                          value={leadForm.year}
                          onChange={(e) => setLeadForm({ ...leadForm, year: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition"
                        >
                          <option value="2026">2026 Intake</option>
                          <option value="2027">2027 Intake</option>
                        </select>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="mt-2 w-full rounded-xl gradient-primary text-white text-xs font-bold py-3 shadow-glow hover:opacity-95 transition"
                      >
                        Submit Request Info
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="rounded-3xl gradient-primary p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#F4B400]/20 blur-3xl" />
              <div className="relative max-w-3xl">
                <Home className="h-10 w-10 text-[#F4B400]" />
                <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold">
                  Find your perfect program
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

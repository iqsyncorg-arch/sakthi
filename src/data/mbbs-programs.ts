import { PARTNER_NOTE } from "./brand";
import {
  medicalUniversitiesByProgram,
  type MedicalUniversityEntry,
} from "./mbbs-universities";

export type { MedicalUniversityEntry } from "./mbbs-universities";
export { medicalUniversitiesByProgram } from "./mbbs-universities";

export type ProgramDetail = {
  label: string;
  value: string;
};

export type ProgramRegion = "Europe" | "Central Asia" | "Caribbean" | "Other";

export type MBBSProgram = {
  id: string;
  title: string;
  shortName: string;
  region: ProgramRegion;
  image: string;
  subtitle?: string;
  featured?: boolean;
  intro?: string;
  highlights?: string[];
  details?: ProgramDetail[];
  universities?: string[];
  medicalUniversities?: MedicalUniversityEntry[];
  /** Independent partners shown separately from GUS (Caribbean only). */
  otherUniversities?: string[];
  note?: string;
};

export const programRegions: ProgramRegion[] = ["Caribbean", "Central Asia", "Europe", "Other"];

export function programImage(id: string) {
  return `/destinations/dest-${id}.png`;
}

function u(...names: string[]) {
  return [...names].sort((a, b) => a.localeCompare(b));
}

function withMedicalCatalog(id: string, fallbackNames?: string[]) {
  const medicalUniversities = medicalUniversitiesByProgram[id];
  const universities = medicalUniversities
    ? u(...medicalUniversities.map((entry) => entry.name))
    : fallbackNames
      ? u(...fallbackNames)
      : undefined;
  return { medicalUniversities, universities };
}

const note = PARTNER_NOTE;

export const gusCaribbeanUniversityNames = u(
  "The Medical University of Americas (MUA)",
  "Saba School of Medicine (SUSOM)",
  "St. Matthews University School of Medicine (SMUSOM)",
);

export const otherCaribbeanUniversityNames = u(
  "St. George's University School of Medicine (SGU)",
  "Rajiv Gandhi University of Science & Technology (RGUST)",
);

export const mbbsProgramDefinitions: MBBSProgram[] = [
  {
    id: "poland",
    title: "Study MBBS/MD in Poland",
    shortName: "Poland",
    region: "Europe",
    image: programImage("poland"),
    intro:
      "Shakthi Academy is the best consultants for study MBBS in Poland. Secure your admission to WHO-recognized medical universities with excellent European clinical training standards.",
    highlights: [
      "100% Indian syllabus with Indian faculty.",
      "English language tests not required for English-medium students.",
      "WHO and NMC approved medical programs.",
    ],
    details: [
      { label: "Program", value: "MBBS (6 years) with mandatory internship for one year" },
      { label: "Language of Instruction", value: "English" },
      { label: "Climate / Temperature", value: "Temperate climate, warm summers (+20°C to +25°C) and cold winters (-5°C to 0°C)" },
      { label: "English Proficiency", value: "Not required for English-medium background students" },
    ],
    ...withMedicalCatalog("poland"),
    note,
  },
  {
    id: "caribbean",
    title: "Study MBBS/MD in Caribbean Islands",
    shortName: "Caribbean",
    region: "Caribbean",
    subtitle: "Local Language — English",
    image: programImage("caribbean"),
    intro:
      "Shakthi Academy presents premium clinical pathways via the Caribbean. Tropical climate tempered by sea breezes, with a rainy season from May to November. Indian groceries and food, housing from $400–$1,100/month, and scholarship opportunities.",
    highlights: [
      "USMLE Step 1 first-time pass rate: 98%.",
      "USMLE Step 2 pass rate: 96.7%.",
      "Residency placement rate @ 98% — excellent gateway for residency / PG studies in affiliated hospitals with stipend.",
      "Practice anywhere in the globe.",
    ],
    details: [
      { label: "Program Mode", value: "Doctor of Medicine (MD) – 5 and 6 years / MBBS pathway to MD – 2.5 years" },
      { label: "Online Modules", value: "Pre-medical Master's in Biological Science (Online Mode)" },
      { label: "Language of Instruction", value: "English" },
      { label: "Climate / Temperature", value: "Tropical climate, tempered by constant sea breezes (average 26°C to 30°C)" },
      { label: "Deadlines", value: "Application submission: One month prior to start date for international applicants" },
      { label: "Intakes", value: "January / May / September" },
    ],
    universities: withMedicalCatalog("caribbean").universities,
    medicalUniversities: withMedicalCatalog("caribbean").medicalUniversities,
    otherUniversities: otherCaribbeanUniversityNames,
    note,
  },
  {
    id: "georgia",
    title: "MBBS In Georgia",
    shortName: "Georgia",
    region: "Europe",
    image: programImage("georgia"),
    intro:
      "Shakthi Academy is the best consultants for study MBBS in Georgia. Benefit from high educational quality and advanced European medical methodologies.",
    highlights: [
      "English language tests not required for English-medium students.",
      "Direct entry with NEET qualification.",
      "Globally recognized medical training.",
    ],
    details: [
      { label: "Program", value: "MD (6 years) with mandatory internship for one year" },
      { label: "Language of Instruction", value: "English" },
      { label: "Course Fee (USD)", value: "$3,000–$10,000 (depending on the University)" },
      { label: "Housing", value: "$300–$500 per month" },
      { label: "NEET Requirement", value: "Mandatory for Indian Students" },
      { label: "Climate / Temperature", value: "Warm humid summers (+28°C to +32°C) and cool winters (average +2°C)" },
    ],
    ...withMedicalCatalog("georgia"),
    note,
  },
  {
    id: "germany",
    title: "Study MBBS/MD in Germany",
    shortName: "Germany",
    region: "Europe",
    image: programImage("germany"),
    intro:
      "Shakthi Academy guides students to UMCH Hamburg — the German campus pathway for English-medium medicine with European clinical standards and structured MD training.",
    highlights: [
      "English-medium MD program at the Hamburg medical campus.",
      "European clinical training environment.",
      "Structured 6-year medicine pathway.",
    ],
    details: [
      { label: "Program", value: "MD / MBBS (6 years)" },
      { label: "Language of Instruction", value: "English" },
      { label: "Campus", value: "Hamburg, Germany" },
    ],
    ...withMedicalCatalog("germany"),
    note,
  },
  {
    id: "hungary",
    title: "Study MBBS/MD in Hungary",
    shortName: "Hungary",
    region: "Europe",
    image: programImage("hungary"),
    intro:
      "Shakthi Academy supports admissions to the University of Debrecen — one of Central Europe's established medical universities with English-medium MD programs.",
    highlights: [
      "English-medium medicine at a leading Hungarian university.",
      "European degree recognition.",
      "6-year MD / MBBS pathway.",
    ],
    details: [
      { label: "Program", value: "MD / MBBS (6 years)" },
      { label: "Language of Instruction", value: "English" },
      { label: "Campus", value: "Debrecen, Hungary" },
    ],
    ...withMedicalCatalog("hungary"),
    note,
  },
  {
    id: "russia",
    title: "Study MBBS/MD in Russia",
    shortName: "Russia",
    region: "Europe",
    image: programImage("russia"),
    intro:
      "Shakthi Academy is the best consultants for study MBBS in Russia. Affordable fees, high-quality medical education, fully equipped heated hostels, and part-time work options for international students.",
    highlights: [
      "Option to work part-time while studying.",
      "Russian government-subsidized medical universities.",
      "Russian language learning mandatory in first year for clinical communication.",
    ],
    details: [
      { label: "Program", value: "MD (6 years) with mandatory internship for one year" },
      { label: "Language of Instruction", value: "English & Russian medium" },
      { label: "Course Fee (USD)", value: "$35,000–$50,050 total fee (depending on the University)" },
      { label: "Housing", value: "$300–$700 per month" },
      { label: "NEET Requirement", value: "Not required for admission but mandatory to practice in India later" },
      { label: "Climate / Temperature", value: "Extremely cold winters (-15°C to -30°C) and temperate summers (+20°C)" },
    ],
    ...withMedicalCatalog("russia"),
    note,
  },
  {
    id: "kyrgyzstan",
    title: "Study MBBS/MD in Kyrgyzstan",
    shortName: "Kyrgyzstan",
    region: "Central Asia",
    image: programImage("kyrgyzstan"),
    intro:
      "Shakthi Academy is the best consultants for study MBBS in Kyrgyzstan. Among the most budget-friendly medical destinations with a large community of international students and English-medium instruction.",
    highlights: [
      "Affordable tuition and living costs.",
      "WHO-recognized medical universities.",
      "English-medium programs with growing Indian student community.",
    ],
    details: [
      { label: "Program", value: "MBBS/MD (6 years) with mandatory internship" },
      { label: "Language of Instruction", value: "English" },
      { label: "Course Fee (USD)", value: "$3,000–$6,000 per year (depending on the University)" },
      { label: "Housing", value: "$200–$400 per month" },
      { label: "NEET Requirement", value: "Required for Indian students to practice in India" },
      { label: "Climate / Temperature", value: "Continental climate with cold winters and warm summers" },
    ],
    ...withMedicalCatalog("kyrgyzstan"),
    note,
  },
  {
    id: "uzbekistan",
    title: "Study MBBS/MD in Uzbekistan",
    shortName: "Uzbekistan",
    region: "Central Asia",
    image: programImage("uzbekistan"),
    intro:
      "Shakthi Academy is the best consultants for study MBBS in Uzbekistan. Affordable fees, high-quality medical education, continental climate, and over 3,000 Indian students already enrolled.",
    highlights: [
      "Over 3,000+ Indian students already studying.",
      "Indian food available directly in hostels.",
      "English language tests not required for English-medium students.",
    ],
    details: [
      { label: "Program", value: "MBBS (6 years) with mandatory internship for one year" },
      { label: "Language of Instruction", value: "English (local language learning mandatory)" },
      { label: "Course Fee (USD)", value: "$3,000–$6,000 per year (depending on the University)" },
      { label: "Housing Cost", value: "$300–$600 per month depending on the University" },
      { label: "NEET Requirement", value: "Must for admission and visa for Indian students" },
      { label: "Climate / Temperature", value: "Continental climate: hot summers (+35°C average) and cold winters (average -5°C)" },
    ],
    ...withMedicalCatalog("uzbekistan"),
    note,
  },
  {
    id: "kazakhstan",
    title: "Study MBBS/MD in Kazakhstan",
    shortName: "Kazakhstan",
    region: "Central Asia",
    featured: true,
    image: programImage("kazakhstan"),
    intro:
      "Shakthi Academy is the best consultants for study MBBS in Kazakhstan. Affordable fees, high-quality medical education, continental climate with hot summers (~30°C) and cold winters (~-20°C). Most Indian students already studying; Indian food available in hostels.",
    highlights: [
      "English-medium instruction with local language learning.",
      "Indian food available in hostels.",
      "English language tests not required for English-medium students.",
    ],
    details: [
      { label: "Program", value: "MD (6 years) with mandatory internship for one year" },
      { label: "Language of Instruction", value: "English (local language learning mandatory)" },
      { label: "Course Fee (USD)", value: "$3,000–$6,000 per year (depending on the University)" },
      { label: "Housing", value: "$200–$400 per month" },
      { label: "NEET Requirement", value: "Not required for admission but required for Indian medical license" },
      { label: "Climate / Temperature", value: "Continental: hot summers (~30°C) and cold winters (~-20°C)" },
    ],
    ...withMedicalCatalog("kazakhstan"),
    note,
  },
  {
    id: "latvia",
    title: "Study MBBS/MD in Latvia",
    shortName: "Latvia",
    region: "Europe",
    image: programImage("latvia"),
    intro:
      "Shakthi Academy is the best consultants for study MBBS in Latvia. European validation, Schengen access, and English-medium medical programs.",
    highlights: [
      "English language tests not required for English-medium students.",
      "Schengen country offering easy travel access throughout Europe.",
    ],
    details: [
      { label: "Program", value: "MBBS/MD (6 years)" },
      { label: "Language of Instruction", value: "English" },
      { label: "Climate / Temperature", value: "Cool summers (+18°C) and cold winters (-5°C)" },
    ],
    ...withMedicalCatalog("latvia"),
    note,
  },
  {
    id: "lithuania",
    title: "Study MBBS/MD in Lithuania",
    shortName: "Lithuania",
    region: "Europe",
    image: programImage("lithuania"),
    intro:
      "Shakthi Academy supports admissions to Lithuanian University of Health Sciences (LSMU) — offering medicine, dentistry, pharmacy, nursing, and allied health programs in English.",
    highlights: [
      "English-medium medicine and allied health sciences.",
      "European degree with broad recognition.",
      "Programs in medicine, dentistry, pharmacy, nursing, and more.",
    ],
    details: [
      { label: "Program", value: "MD / MBBS (6 years); Dentistry; Pharmacy; Nursing; Physiotherapy; Veterinary Medicine" },
      { label: "Language of Instruction", value: "English" },
      { label: "Campus", value: "Kaunas, Lithuania" },
    ],
    ...withMedicalCatalog("lithuania"),
    note,
  },
  {
    id: "malta",
    title: "Study MBBS/MD in Malta",
    shortName: "Malta",
    region: "Europe",
    image: programImage("mauritius"),
    intro:
      "Shakthi Academy guides students to International European University (IEU) in Malta for English-medium general medicine in a European study environment.",
    highlights: [
      "English-medium general medicine pathway.",
      "European study destination.",
      "6-year medicine program.",
    ],
    details: [
      { label: "Program", value: "General Medicine (6 years)" },
      { label: "Language of Instruction", value: "English" },
      { label: "Campus", value: "Gzira, Malta" },
    ],
    ...withMedicalCatalog("malta"),
    note,
  },
  {
    id: "ukraine",
    title: "Study MBBS/MD in Ukraine",
    shortName: "Ukraine",
    region: "Europe",
    image: programImage("latvia"),
    intro:
      "Shakthi Academy guides students to accredited Ukrainian medical universities recognized worldwide (WHO, ECFMG, GMC, and NMC) with advanced clinical training.",
    highlights: [
      "Recognized worldwide (WHO, ECFMG, GMC, and NMC).",
      "Advanced clinical training and internship alignments.",
      "English-medium medical programs.",
    ],
    details: [
      { label: "Program", value: "MBBS / MD (6 years)" },
      { label: "Language of Instruction", value: "English" },
      { label: "Climate / Temperature", value: "Mild summers (+20°C) and cold winters (-6°C)" },
    ],
    ...withMedicalCatalog("ukraine"),
    note,
  },
  {
    id: "timor-leste",
    title: "Study MBBS/MD in Timor-Leste",
    shortName: "Timor-Leste",
    region: "Other",
    image: programImage("timor-leste"),
    intro:
      "Shakthi Academy guides students to Nalanda College of Medicine in Dili, Timor-Leste. Benefit from a 6-year MBBS/MD program with English as the medium of instruction in a scenic South-East Asian country of 1.4 million people.",
    highlights: [
      "Located in Dili, the capital of Timor-Leste.",
      "South-East Asian Nation on the eastern half of the Island of Timor.",
      "MBBS/MD program with a duration of 6 years.",
      "English medium of instruction.",
    ],
    details: [
      { label: "Program", value: "MBBS / MD (6 years)" },
      { label: "Language of Instruction", value: "English" },
      { label: "City", value: "Dili" },
      { label: "Country", value: "Timor-Leste (Population: 1.4 million)" },
      { label: "Geography", value: "South-East Asian Nation, on the eastern half of the Island of Timor" },
    ],
    ...withMedicalCatalog("timor-leste"),
    note,
  },
];

export const mbbsPrograms: MBBSProgram[] = [...mbbsProgramDefinitions].sort((a, b) =>
  a.shortName.localeCompare(b.shortName),
);

export const partnerNote = PARTNER_NOTE;

export function getProgramById(id: string) {
  return mbbsPrograms.find((p) => p.id === id);
}

export function programHasDetails(program: MBBSProgram) {
  return Boolean(program.intro || program.details?.length);
}

export function regionCounts() {
  return programRegions.reduce(
    (acc, r) => {
      acc[r] = mbbsPrograms.filter((p) => p.region === r).length;
      return acc;
    },
    {} as Record<ProgramRegion, number>,
  );
}

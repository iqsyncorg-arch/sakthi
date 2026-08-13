export type GUSSchool = {
  id: string;
  name: string;
  location: string;
  climate: string;
  highlights: string[];
  programs?: string[];
  scholarships?: string[];
  intakes?: string;
  entryRequirements?: string[];
};

export const gusSchools: GUSSchool[] = [
  {
    id: "susom",
    name: "Saba School of Medicine (SUSOM)",
    location: "The Bottom, Netherlands",
    climate: "Tropical: 25–28°C (77–82°F)",
    highlights: [
      "Accredited by NVAO — only Caribbean medical school with European accreditation standards.",
      "Recognized by WFME.",
      "USMLE Step 1 first-time pass rate 95%+, Step 2 CK 95%+, 99% three-year U.S. residency placement.",
      "3,500+ graduates with extensive academic and personal faculty support.",
    ],
    scholarships: [
      "International Student Scholarship: $75,000 over 10 semesters (tuition).",
      "Opportunity Grant: $5,000.",
    ],
    intakes: "January / May / September",
    entryRequirements: [
      "10+2 with minimum 80% in Physics, Chemistry, and Biology.",
      "TOEFL or comparable exam if English is not the principal language.",
    ],
  },
  {
    id: "smusom",
    name: "St. Matthews University School of Medicine (SMUSOM)",
    location: "Grand Cayman",
    climate: "Tropical: 27–30°C (80–86°F)",
    highlights: [
      "Accredited by ACCM; recognized by WFME and NCFMEA.",
      "USMLE Step 1 @ 90%, Step 2 CK @ 97%, 100% residency placement rate.",
      "7:1 student-to-faculty ratio.",
    ],
    scholarships: ["Up to $65,000 USD in grants for eligible international MD students."],
    intakes: "January / May / September",
    entryRequirements: [
      "10+2 with minimum 80% in Physics, Chemistry, and Biology.",
      "TOEFL or comparable exam if English is not the principal language.",
    ],
  },
  {
    id: "smusvm",
    name: "St. Matthew's University School of Veterinary Medicine (SMUSVM)",
    location: "Grand Cayman Island",
    climate: "Tropical: 27–30°C (80.6–86°F)",
    highlights: [
      "Listed with AVMA; provisional AAVMC member institution.",
      "DVM: 10 semesters on-campus (1–7) then U.S./Canada/U.K. rotations (8–10).",
      "Pre-Veterinary Master's and Gateway Veterinary pathway programs available.",
    ],
    programs: [
      "Doctor of Veterinary Medicine (DVM) — full-time, 10 semesters.",
      "Pre-Veterinary Master's — 8 months full-time or part-time.",
      "Gateway Veterinary — 15 weeks full-time or 30 weeks part-time.",
    ],
  },
  {
    id: "mua",
    name: "The Medical University of Americas (MUA)",
    location: "St. Kitts & Nevis",
    climate: "Tropical: 27–30°C (80–86°F)",
    highlights: [
      "ACCM accredited; USMLE-aligned curriculum from day one.",
      "Step 1 pass rate @ 90%, Step 2 @ 96% over the last three years.",
      "72 weeks clinical exposure at ACGME-accredited hospitals (U.S. & Canada).",
      "Cadaver labs, small class sizes, end-to-end residency prep and mock interviews.",
    ],
    scholarships: ["International Grant: $25,000 over 10 MD semesters for eligible Indian students."],
    intakes: "January / May / September",
    entryRequirements: [
      "10+2 with minimum 75% in Physics, Chemistry, and Biology.",
      "4-year Bachelor's or 5/6-year track for 12th with 75+%.",
      "TOEFL or comparable exam if English is not the principal language.",
    ],
  },
];

/** Independent Caribbean medical partners — not part of the GUS group. */
export const otherCaribbeanMedicalSchools: GUSSchool[] = [
  {
    id: "sgu",
    name: "St. George's University School of Medicine (SGU)",
    location: "Grenada",
    climate: "Tropical Caribbean",
    highlights: [
      "Largest source of physicians for the U.S. workforce — 22,000+ graduates.",
      "94% USMLE pass rate, 89% U.S. residency placement rate.",
      "75+ hospitals for clinical rotations; UK pathway via Northumbria University.",
      "4/5/6/7-year MD tracks; study in Grenada, UK, U.S., and/or UK for clinical years.",
    ],
    intakes: "January/April/September (4-year) · January/August/September (5–7 year)",
    entryRequirements: [
      "10+2 with 80% and no grade below 80% in Biology, Chemistry, Maths, Physics, and English.",
      "IELTS 7.0 each band, TOEFL 94–101, PTE 66.3, or Duolingo 130 for direct entry.",
    ],
  },
  {
    id: "rgust",
    name: "Rajiv Gandhi University of Science & Technology (RGUST)",
    location: "Guyana, South America",
    climate: "Tropical: 24–31°C (75–88°F) year-round",
    highlights: [
      "NAC accredited; recognized by WHO, WDOMS, and ECFMG.",
      "4.5-year MD, 5.5-year BSc/MD, MBBS-to-MD pathway, and U.S. clinical rotations.",
      "Pre-medicals + basic sciences in Guyana; clinical rotations in Guyana or U.S. hospitals.",
      "USMLE preparation with small, tuition-like class sizes.",
    ],
    intakes: "January / May / September",
    entryRequirements: ["10+2 from English medium school with minimum 60%."],
  },
];

export const gusUsmleHighlight =
  "GUS Medical students achieve exceptional USMLE pass rates and residency match outcomes across Saba, St. Matthew's, and Medical University of the Americas — a deliberate, student-centric approach to international medical training.";

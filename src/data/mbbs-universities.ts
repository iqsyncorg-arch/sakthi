export type MedicalUniversityStatus = "Private" | "Public" | "Public Research University";

export type MedicalUniversityEntry = {
  city: string;
  name: string;
  status: MedicalUniversityStatus;
  stream: string;
};

/** Structured partner list for Study MBBS/MD abroad — city, status, and stream per institution. */
export const medicalUniversitiesByProgram: Record<string, MedicalUniversityEntry[]> = {
  caribbean: [
    { city: "St. Kitts", name: "The Medical University of Americas (MUA)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "The Bottom, Netherlands", name: "Saba School of Medicine (SUSOM)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Cayman Islands", name: "St. Matthews University School of Medicine (SMUSOM)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Grenada", name: "St. George's University School of Medicine (SGU)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Guyana", name: "Rajiv Gandhi University of Science & Technology (RGUST)", status: "Private", stream: "MD / MBBS / 5 Yrs." },
  ],
  georgia: [
    { city: "Tbilisi", name: "Alte University", status: "Private", stream: "MD — 6 Yrs.; Dentistry" },
    { city: "Batumi", name: "Avicenna Batumi Medical University (ABMU)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Tbilisi", name: "Caucasus International University (CIU)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Tbilisi", name: "East European University (EEU)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Tbilisi", name: "Grigol Robakidze University (GRU)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Tbilisi", name: "Georgian National University (SEU)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Tbilisi", name: "Ilia State University", status: "Public", stream: "MD / MBBS / 6 Yrs." },
    { city: "Tbilisi", name: "Ken Walker International University (KWIU)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Tbilisi", name: "Petre Shotadze Medical Academy (PSMA)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Tbilisi", name: "New Vision University (NVU)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Tbilisi", name: "International Black Sea University (IBSU)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
  ],
  germany: [
    { city: "Hamburg", name: "University Tirgu Mures Medical Campus Hamburg (UMCH)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
  ],
  hungary: [
    { city: "Debrecen", name: "University of Debrecen (UD)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
  ],
  kazakhstan: [
    { city: "Almaty", name: "Al-Farabi Kazakh National University (KNU)", status: "Public", stream: "MD / MBBS / 6 Yrs." },
    { city: "Almaty", name: "Asfendiyarov Kazakh National Medical University (KNMU)", status: "Public", stream: "MD / MBBS / 6 Yrs." },
    { city: "Semey", name: "Semey Medical University (SMU)", status: "Public", stream: "MD / MBBS / 6 Yrs." },
    { city: "Shymkent", name: "South Kazakhstan Medical Academy (SKMA)", status: "Public", stream: "MD / MBBS / 6 Yrs." },
  ],
  kyrgyzstan: [
    { city: "Kant", name: "Asian Medical Institute (ASMI) / Tentishev Medical Institute", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Bishkek", name: "Bishkek International Medical Institute (BIMI)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Bishkek", name: "Kyrgyz National University (KNU)", status: "Public", stream: "MD / MBBS / 6 Yrs." },
    { city: "Bishkek", name: "University of South Asia (USA)", status: "Private", stream: "MD / MBBS / 6 Yrs." },
  ],
  latvia: [
    { city: "Riga", name: "Riga Stradins University (RSU)", status: "Public", stream: "MD / MBBS / 6 Yrs. & Dentistry" },
  ],
  lithuania: [
    {
      city: "Kaunas",
      name: "Lithuanian University of Health Sciences (LSMU)",
      status: "Public",
      stream:
        "MD / MBBS / Vet. Medicine / 6 Yrs.; Pharmacy, Psychology, Physiotherapy / Dental Hygiene, Food Science, Nursing, Odontology, Occupational Therapy, Public Health, Animal Science",
    },
  ],
  malta: [
    { city: "Gzira", name: "International European University (IEU)", status: "Private", stream: "General Medicine / 6 Yrs." },
  ],
  poland: [
    { city: "Torun", name: "Nicolaus Copernicus University", status: "Public", stream: "Medicine / Nursing / Physiotherapy / Pharmacy" },
    {
      city: "Katowice",
      name: "Medical University of Silesia (MUS)",
      status: "Public Research University",
      stream:
        "MD / MBBS / Dentistry / Nursing / Public Health / Pharmacy / Med. Biotechnology / Physiotherapy / Midwifery",
    },
    { city: "Olsztyn", name: "Olsztyn University", status: "Public", stream: "MD / MBBS / 6 Yrs." },
    {
      city: "Poznan",
      name: "International European University (IEU)",
      status: "Private",
      stream:
        "Medicine / Dentistry / Pharmacy / Nursing / Medical Laboratory Sciences / Medical Biotechnology / Physiotherapy / Public Health / Medical Psychology / Postgraduate Education",
    },
  ],
  russia: [
    { city: "Grozny", name: "Chechen State Medical University (CSMU)", status: "Public", stream: "Medicine, Dentistry, Pediatrics" },
    { city: "Makhachkala", name: "Dagestan State Medical University (DSMU)", status: "Public", stream: "Medicine, Pharmacy, Pediatrics" },
    { city: "Moscow", name: "First Moscow State Medical University (FMSMU)", status: "Public", stream: "Medicine, Dentistry, Pharmacy" },
    { city: "Kazan", name: "Kazan State Medical University (KSMU)", status: "Public", stream: "Medicine, Dentistry, Pharmacy" },
    { city: "Nalchik", name: "Kabardino-Balkarian State University (KBSU)", status: "Public", stream: "Medicine, Civil Engineering, Architecture" },
    { city: "Moscow", name: "Peoples' Friendship University of Russia (RUDN)", status: "Public", stream: "Medicine, Economics, IT" },
    { city: "Syktyvkar, Komi Republic", name: "Pitirim Sorokin Syktyvkar State University", status: "Public", stream: "General Medicine, Pediatrics" },
    { city: "Pskov", name: "PSKOV State University", status: "Public", stream: "Economics, Medicine, IT (Refer RUSV)" },
    { city: "Moscow", name: "Pirogov Russian National Research Medical University (RNRMU)", status: "Public", stream: "Medicine, Dentistry, Pediatrics" },
    { city: "Tomsk", name: "Siberian State Medical University", status: "Public", stream: "General Medicine, Pediatrics" },
    { city: "St. Petersburg", name: "St. Petersburg State University", status: "Public", stream: "Medicine, Economics, IT" },
  ],
  ukraine: [
    { city: "Kyiv", name: "Bogomolets National Medical University", status: "Public", stream: "Medicine, Dentistry, Pharmacy" },
    { city: "Kyiv", name: "International European University", status: "Private", stream: "Medicine, Dentistry, Pharmacy, Pediatrics, Nursing" },
    { city: "Vinnytsia", name: "Vinnytsia National Pirogov Memorial Medical University", status: "Public", stream: "MD / MBBS / 6 Yrs." },
  ],
  uzbekistan: [
    { city: "Andijan", name: "Andijan State Medical University", status: "Public", stream: "MD / MBBS / 6 Yrs." },
    { city: "Fergana", name: "Fergana Medical Institute of Public Health (FMIPH)", status: "Public", stream: "MD / MBBS / 6 Yrs." },
    { city: "Namangan", name: "Namangan State University", status: "Public", stream: "MD / MBBS / 6 Yrs." },
    { city: "Tashkent", name: "Tashkent Medical Academy", status: "Public", stream: "MD / MBBS / 6 Yrs." },
    { city: "Tashkent", name: "University of Business & Science", status: "Private", stream: "MD / MBBS / 6 Yrs." },
    { city: "Qarshi", name: "Karshi State University (KSU)", status: "Public", stream: "MD / MBBS / 6 Yrs." },
  ],
  "timor-leste": [
    { city: "Dili", name: "Nalanda College of Medicine", status: "Private", stream: "MBBS/MD / 6 Yrs." },
  ],
};

export function medicalUniversityNames(id: string): string[] {
  return (medicalUniversitiesByProgram[id] ?? []).map((entry) => entry.name);
}

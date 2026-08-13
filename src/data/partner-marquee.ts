import { mbbsPrograms } from "./mbbs-programs";
import { europeanUniversities, otherUniversities } from "./other-programs";

export const medicalMarqueeNames = mbbsPrograms.flatMap((p) =>
  (p.universities ?? []).map((name) => ({ name, region: p.shortName })),
);

export const nonMedicalMarqueeNames = [...europeanUniversities, ...otherUniversities].flatMap(
  (c) => c.universities.map((name) => ({ name, region: c.country })),
);

/** Normalize university names so minor label differences dedupe safely. */
export function normalizePartnerName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s*\(ieu\)\s*/gi, " ")
    .replace(/\s*\(ud\)\s*/gi, " ")
    .replace(/\s*\(rudn\)\s*/gi, " ")
    .replace(/\s*\(kbsu\)\s*/gi, " ")
    .replace(/\s*\(ciu\)\s*/gi, " ")
    .replace(/\s*\(seu\)\s*/gi, " ")
    .replace(/\s*-\s*malta|\s*-\s*poland/gi, " ")
    .replace(/pitirim sorokin syktyvkar state university/g, "pitrim sorokin")
    .replace(/\bpeoples?\b/g, "peoples")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function partnerDedupeKey(name: string, country: string): string {
  return `${normalizePartnerName(name)}|${country.trim().toLowerCase()}`;
}

function dedupePartners<T extends { name: string; country: string }>(items: T[]): T[] {
  return items.filter(
    (p, idx, arr) =>
      arr.findIndex((x) => partnerDedupeKey(x.name, x.country) === partnerDedupeKey(p.name, p.country)) ===
      idx,
  );
}

const logoBgs = [
  "bg-red-500/10 text-red-700",
  "bg-blue-600/10 text-blue-700",
  "bg-emerald-500/10 text-emerald-700",
  "bg-amber-500/10 text-amber-700",
  "bg-indigo-500/10 text-indigo-700",
  "bg-sky-500/10 text-sky-700",
];

export type AlphabeticalPartner = { name: string; country: string; logoBg: string };

const medicalPartners: AlphabeticalPartner[] = medicalMarqueeNames.map((p, i) => ({
  name: p.name,
  country: p.region,
  logoBg: logoBgs[i % logoBgs.length],
}));

const medicalKeys = new Set(medicalPartners.map((p) => partnerDedupeKey(p.name, p.country)));

const nonMedicalPartners: AlphabeticalPartner[] = nonMedicalMarqueeNames
  .map((p, i) => ({
    name: p.name,
    country: p.region,
    logoBg: logoBgs[(i + 3) % logoBgs.length],
  }))
  .filter((p) => !medicalKeys.has(partnerDedupeKey(p.name, p.country)));

/** Non-medical partners with medical overlaps removed (for about-page lists). */
export const otherProgramPartnersOnly = dedupePartners(nonMedicalPartners);

export const alphabeticalPartners: AlphabeticalPartner[] = dedupePartners([
  ...medicalPartners,
  ...nonMedicalPartners,
]).sort((a, b) => a.name.localeCompare(b.name));

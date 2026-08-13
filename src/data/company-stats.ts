import { alphabeticalPartners } from "./partner-marquee";
import { europeanUniversities, otherUniversities } from "./other-programs";
import { mbbsPrograms } from "./mbbs-programs";

const studyDestinations = new Set([
  ...mbbsPrograms.map((p) => p.shortName),
  ...europeanUniversities.map((c) => c.country),
  ...otherUniversities.map((c) => c.country),
]);

export type AdmissionMilestone = {
  value: string;
  label: string;
  description: string;
  gradient: string;
};

/** Homepage admission stats — derived from partner data and published visa guidance. */
export const admissionMilestones: AdmissionMilestone[] = [
  {
    value: `${alphabeticalPartners.length}+`,
    label: "Partner Universities",
    description: "Direct alliances with medical and non-medical institutions globally.",
    gradient: "from-amber-300 to-[#F4B400]",
  },
  {
    value: "98%",
    label: "Visa Approval Success",
    description: "End-to-end filing & guidance for SDS, Commonwealth, and more.",
    gradient: "from-sky-300 to-[#4DA8DA]",
  },
  {
    value: `${studyDestinations.size}+`,
    label: "Study Destinations",
    description: "MS, MBBS, MBA, and PhD pathways across six continents.",
    gradient: "from-emerald-300 to-emerald-400",
  },
  {
    value: "10+",
    label: "Years of Counseling",
    description: "Trusted Shakthi Academy student roadmaps.",
    gradient: "from-rose-300 to-rose-450",
  },
];

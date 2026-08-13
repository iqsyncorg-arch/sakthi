export type MBBSMDPathway = {
  university: string;
  location: string;
  summary: string;
  highlights: string[];
  journey?: string[];
  scholarships?: string[];
  entryRequirements: string[];
};

export const mbbsToMdPathways: MBBSMDPathway[] = [
  {
    university: "The Medical University of Americas (MUA)",
    location: "St. Kitts & Nevis",
    summary:
      "Eligible MBBS graduates may transfer into the MD program with advanced standing. The curriculum prepares graduates for professional practice in the U.S. and Canada, with early clinical exposure before U.S. rotations and residency.",
    journey: [
      "Join the 5th semester of the MD program for 4 months at Nevis.",
      "Successfully clear USMLE Step 1.",
      "Complete MD semesters 6–10 with clinical rotations at U.S. teaching hospitals.",
    ],
    highlights: [
      "96% sustained residency placement rate (2021–2023).",
      "7:1 student-to-faculty ratio.",
      "Clinical network of 25+ teaching hospitals in the USA.",
    ],
    scholarships: ["International Grant of $15,000 USD per semester for eligible applicants."],
    entryRequirements: [
      "MBBS degree from a recognized university.",
      "Transfer statement from your medical school.",
      "Valid passport copy.",
      "Valid ECFMG certificate (if available).",
      "English proficiency: IELTS / TOEFL / OET.",
      "CV / Resume.",
    ],
  },
  {
    university: "Rajiv Gandhi University School of Medicine",
    location: "Guyana, South America",
    summary:
      "A structured bridge for MBBS graduates seeking U.S. licensing readiness, clinical exposure, and residency placement support.",
    highlights: [
      "Refresh degree and dedicated USMLE preparation course.",
      "USA clinical rotations with U-World 100% Q-bank access.",
      "Live interactive sessions with expert USMLE faculty.",
      "Regular NBME-based assessments and personalized mentorship.",
      "Small batch size with dedicated student support.",
    ],
    entryRequirements: [
      "MBBS degree from a recognized university.",
      "Transfer statement from your medical school.",
      "Valid passport copy.",
      "Valid ECFMG certificate (if available).",
      "English proficiency: IELTS / TOEFL / OET.",
      "CV / Resume.",
    ],
  },
];

import type { LucideIcon } from "lucide-react";

export type VisaServiceItem = {
  title: string;
  desc: string;
};

export type VisaServiceSection = {
  id: string;
  title: string;
  summary: string;
  items: VisaServiceItem[];
};

export const visaIntro =
  "Shakthi Academy, as an education consulting company, can play a crucial role in guiding students through the often-complex visa application process. Here's how we support you every step of the way.";

export const visaClosing =
  "By providing these services, Shakthi Academy can significantly reduce the stress and uncertainty associated with the visa application process, increasing the chances of students obtaining their visas successfully.";

export const visaSections: VisaServiceSection[] = [
  {
    id: "guidance",
    title: "Comprehensive Visa Guidance",
    summary: "Expert support tailored to your destination country's requirements.",
    items: [
      {
        title: "Country-specific expertise",
        desc: "Understanding the visa requirements, procedures, and timelines for different countries.",
      },
      {
        title: "Documentation assistance",
        desc: "Helping students gather all necessary documents, such as financial statements, academic transcripts, and letters of recommendation.",
      },
      {
        title: "Application form completion",
        desc: "Providing support in accurately filling out visa application forms.",
      },
      {
        title: "Interview preparation",
        desc: "Offering tips and practice sessions for visa interviews.",
      },
      {
        title: "Visa refusal handling",
        desc: "Assisting students in understanding the reasons for visa rejection and reapplying.",
      },
    ],
  },
  {
    id: "process",
    title: "Streamlined Process",
    summary: "Organized workflows so nothing falls through the cracks.",
    items: [
      {
        title: "Efficient document management",
        desc: "Organizing and managing student documents to ensure timely submission.",
      },
      {
        title: "Appointment scheduling",
        desc: "Booking visa appointments and managing the application timeline.",
      },
      {
        title: "Visa tracking",
        desc: "Monitoring the visa application status and providing updates to students.",
      },
    ],
  },
  {
    id: "risk",
    title: "Risk Mitigation",
    summary: "Proactive measures to avoid delays and rejections.",
    items: [
      {
        title: "Visa policy updates",
        desc: "Keeping students informed about changes in visa regulations and requirements.",
      },
      {
        title: "Error prevention",
        desc: "Identifying potential errors in the application process and providing corrective measures.",
      },
      {
        title: "Financial security",
        desc: "Ensuring students are aware of potential financial risks and providing guidance on financial documentation.",
      },
    ],
  },
  {
    id: "support",
    title: "Additional Support",
    summary: "Care that continues beyond visa approval.",
    items: [
      {
        title: "Post-arrival assistance",
        desc: "Offering guidance on accommodation, airport pick-up, and other initial arrangements.",
      },
      {
        title: "Student support network",
        desc: "Connecting students with other students for peer support and information sharing.",
      },
    ],
  },
];

export type VisaHighlight = {
  label: string;
  value: string;
};

export const visaHighlights: VisaHighlight[] = [
  { label: "Success Rate", value: "98%" },
  { label: "Countries Covered", value: "25+" },
  { label: "End-to-End", value: "Full support" },
  { label: "Reapplication", value: "Refusal help" },
];

export const visaImages = {
  hero: "/visa/visa-hero.png",
  intro: "/visa/visa-intro.png",
  whyChooseUs: "/visa/visa-guidance.png",
  sections: {
    guidance: "/visa/visa-guidance.png",
    process: "/visa/visa-process.png",
    risk: "/visa/visa-risk.png",
    support: "/visa/visa-support.png",
  } as Record<string, string>,
};

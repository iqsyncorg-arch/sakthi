import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  FileText,
  GraduationCap,
  Headphones,
  MapPin,
  Plane,
  School,
  Stamp,
  UserCheck,
} from "lucide-react";

export const admissionsIntro =
  "Whether you are applying for school, college, skill programmes, or study abroad — Shakthi Academy guides you from first enquiry to enrolment with personalized counseling and end-to-end support.";

export const admissionsSteps = [
  {
    step: "01",
    title: "Submit Your Application",
    desc: "Fill in the online form with your details, qualification, area of interest, and programme preference.",
  },
  {
    step: "02",
    title: "Profile Evaluation",
    desc: "Our counselors review your academic background, goals, and eligibility to recommend the best pathway.",
  },
  {
    step: "03",
    title: "Programme & Plan",
    desc: "Receive a tailored plan covering course options, timelines, documentation, and next steps.",
  },
  {
    step: "04",
    title: "Documentation & Processing",
    desc: "We assist with applications, SOPs, visas, loans, and any required paperwork.",
  },
  {
    step: "05",
    title: "Enrolment & Onboarding",
    desc: "Once confirmed, you receive onboarding support and access to student resources and portals.",
  },
];

export const admissionsServices: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: UserCheck,
    title: "Free Counseling Session",
    desc: "One-on-one guidance to understand your goals and map the right programme or destination.",
  },
  {
    icon: School,
    title: "Programme Selection",
    desc: "School, college, certification, skill, and international pathways matched to your profile.",
  },
  {
    icon: FileText,
    title: "Application Support",
    desc: "Help with forms, essays, SOPs, letters, and documentation that stand out.",
  },
  {
    icon: Stamp,
    title: "Visa & Compliance",
    desc: "Guidance on visa requirements, interviews, and regulatory steps for study abroad.",
  },
  {
    icon: Plane,
    title: "Pre-Departure Briefing",
    desc: "Orientation on accommodation, travel, culture, and what to expect before you go.",
  },
  {
    icon: Headphones,
    title: "Dedicated Counselor",
    desc: "A single point of contact from enquiry through enrolment and beyond.",
  },
];

export const admissionsDocuments = [
  "Valid ID proof (Aadhaar / Passport)",
  "Academic transcripts & certificates",
  "Passport-size photographs",
  "Resume / CV (for professionals & PG applicants)",
  "English test scores if applicable (IELTS, PTE, TOEFL)",
  "Statement of Purpose / personal statement (study abroad)",
  "Financial documents for visa or loan processing",
];

export const admissionsAudiences = [
  {
    icon: GraduationCap,
    title: "Students",
    desc: "From school leavers to postgraduate applicants seeking domestic or international programmes.",
  },
  {
    icon: MapPin,
    title: "Parents & Guardians",
    desc: "Transparent updates on your child's application, progress, and programme fit.",
  },
  {
    icon: BadgeCheck,
    title: "Working Professionals",
    desc: "Upskilling, certifications, and career-advancing programmes with flexible pathways.",
  },
];

export const admissionsHighlights = [
  { value: "25+", label: "Years of Guidance" },
  { value: "50+", label: "Countries Covered" },
  { value: "Free", label: "Initial Consultation" },
  { value: "24h", label: "Response Time" },
];

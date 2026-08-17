import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
  ClipboardList,
  FileText,
  GraduationCap,
  Handshake,
  Mic,
  Search,
  Target,
  UserPlus,
  Users,
  Wrench,
} from "lucide-react";

export const employmentHero = {
  eyebrow: "Shakthi Employment Services",
  titleLead: "Connect Talent with",
  titleAccent: "Opportunity",
  intro:
    "From job search and recruitment to resume crafting, interview prep and skill building — Shakthi Employment Services supports candidates and employers every step of the way.",
};

export const employmentServices: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: Search,
    title: "Job Opportunities",
    desc: "Access curated openings across industries — internships, entry-level roles and experienced positions matched to your profile.",
  },
  {
    icon: Users,
    title: "Recruitment Services",
    desc: "End-to-end recruitment support that connects qualified candidates with hiring partners quickly and reliably.",
  },
  {
    icon: Target,
    title: "Career Guidance",
    desc: "Personalised counselling to clarify goals, map pathways and choose roles that fit your strengths and ambitions.",
  },
  {
    icon: FileText,
    title: "Resume / CV Support",
    desc: "Professional resume and CV building, LinkedIn optimisation and portfolio guidance tailored to your target roles.",
  },
  {
    icon: Mic,
    title: "Interview Preparation",
    desc: "Mock interviews, communication coaching and confidence-building so you walk into every interview prepared.",
  },
  {
    icon: Wrench,
    title: "Skill Development",
    desc: "Job-ready workshops and upskilling programmes aligned with current industry demands and hiring trends.",
  },
  {
    icon: Building2,
    title: "Employer Services",
    desc: "Campus hiring, talent pipelines and workforce solutions for organisations seeking trained, motivated candidates.",
  },
  {
    icon: UserPlus,
    title: "Candidate Registration",
    desc: "Register once to join our talent pool — stay visible to recruiters and receive relevant opportunity updates.",
  },
];

export const applicationProcess: {
  step: string;
  title: string;
  desc: string;
}[] = [
  {
    step: "01",
    title: "Register",
    desc: "Create your candidate profile with education, skills, experience and career preferences.",
  },
  {
    step: "02",
    title: "Profile Review",
    desc: "Our team reviews your profile and recommends roles, skill gaps and next steps.",
  },
  {
    step: "03",
    title: "Prepare",
    desc: "Strengthen your resume, practise interviews and build the skills employers need.",
  },
  {
    step: "04",
    title: "Apply",
    desc: "Apply to matched openings through Shakthi Employment Services with counsellor support.",
  },
  {
    step: "05",
    title: "Interview & Offer",
    desc: "Attend interviews, receive feedback and move toward an offer with guided follow-up.",
  },
];

export const employerHighlights: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: Handshake,
    title: "Campus Recruitment",
    desc: "Run structured hiring drives and access pre-screened talent from our programmes.",
  },
  {
    icon: Briefcase,
    title: "Talent Pipelines",
    desc: "Build ongoing pipelines for internships, fresher roles and specialised skill tracks.",
  },
  {
    icon: GraduationCap,
    title: "Workforce Upskilling",
    desc: "Partner with us for corporate training that closes skill gaps in your teams.",
  },
];

export const registrationBenefits = [
  "Priority access to new job listings",
  "Resume and interview guidance",
  "Counsellor support through applications",
  "Updates on hiring drives and workshops",
];

export const employmentCta = {
  title: "Ready to take the next step?",
  desc: "Register as a candidate, explore openings, or partner with us as an employer — we’re here to help you succeed.",
};

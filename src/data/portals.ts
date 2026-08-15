import type { LucideIcon } from "lucide-react";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import studentPortalImg from "../assets/women.png";
import parentsPortalImg from "../assets/men2.png";
import employersPortalImg from "../assets/men.png";

export type Portal = {
  title: string;
  desc: string;
  cta: string;
  icon: LucideIcon;
  accent: string;
  iconColor: string;
  image: string;
};

export const portals: Portal[] = [
  {
    title: "Student Portal",
    desc: "Access your courses, assignments, results and more.",
    cta: "Login Now",
    icon: GraduationCap,
    accent: "from-[#4DA8DA]/20 to-[#4DA8DA]/5",
    iconColor: "text-[#4DA8DA]",
    image: studentPortalImg,
  },
  {
    title: "Parents Portal",
    desc: "Track your child's program, attendance and progress.",
    cta: "Login Now",
    icon: Users,
    accent: "from-amber-400/20 to-amber-400/5",
    iconColor: "text-amber-500",
    image: parentsPortalImg,
  },
  {
    title: "Employers Portal",
    desc: "Hire talent, manage recruitments and build your team.",
    cta: "Login Now",
    icon: Briefcase,
    accent: "from-emerald-400/20 to-emerald-400/5",
    iconColor: "text-emerald-600",
    image: employersPortalImg,
  },
];

export const areaOfInterestOptions = [
  "Education",
  "Employment",
  "Entrepreneurship",
  "Study Abroad",
  "Skill Development",
  "Test Preparation (IELTS/PTE/GRE)",
  "Visa & Immigration",
  "Career Counseling",
  "Other",
];

export const qualificationOptions = [
  "Below 10th",
  "10th / SSLC",
  "12th / Higher Secondary",
  "Diploma",
  "Undergraduate (UG)",
  "Postgraduate (PG)",
  "Doctorate (PhD)",
  "Working Professional",
  "Other",
];

export const programmeOptions = [
  "School Programs",
  "College Programs",
  "Skill Development",
  "Certification Courses",
  "International Programs",
  "Corporate Training",
  "Counselling & Guidance",
  "Medical Admissions (MBBS/MD)",
  "University Admissions (UG/PG)",
  "Visa Assistance",
  "Education Loan Support",
  "Other",
];

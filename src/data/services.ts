import {
  GraduationCap, School, FileCheck2, Plane, FileText, Banknote, Users, Landmark,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  id: string;
  label: string;
  desc: string;
  icon: LucideIcon;
  href?: string;
};

export const services: ServiceItem[] = [
  {
    id: "university-admissions",
    label: "Medical Admissions",
    desc: "Dedicated guidance for MBBS, MD, and medical programs at top global medical universities.",
    icon: GraduationCap,
    href: "/university-admissions",
  },
  {
    id: "career-counseling",
    label: "Career Counseling",
    desc: "Psychometric assessments, career roadmaps, and professional narrative coaching for students and working professionals.",
    icon: Users,
    href: "/career-counseling",
  },
  {
    id: "other-programs",
    label: "Other Programs & Universities",
    desc: "Explore diploma, foundation, and specialized programs across a wide network of institutions.",
    icon: School,
    href: "/other-programs",
  },
  {
    id: "indian-universities",
    label: "Indian Universities",
    desc: "Guidance for premier Indian universities and domestic higher-education pathways.",
    icon: Landmark,
    href: "/indian-universities",
  },
  {
    id: "visa-assistance",
    label: "Visa Assistance",
    desc: "Complete visa filing support — documentation, interview prep, and application tracking.",
    icon: FileCheck2,
    href: "/visa-assistance",
  },
  {
    id: "travel-assistance",
    label: "Personalized Travel Assistance",
    desc: "Tailored travel planning, forex, and pre-departure logistics for a smooth journey abroad.",
    icon: Plane,
    href: "/travel-assistance",
  },
  {
    id: "sop-writing",
    label: "SOP Writing",
    desc: "Compelling statements of purpose and application essays that showcase your unique story.",
    icon: FileText,
    href: "/sop-writing",
  },
  {
    id: "education-loan",
    label: "Education Loan Assistance",
    desc: "Guidance on education loans, financial planning, and funding options for your studies.",
    icon: Banknote,
    href: "/education-loan",
  },
];

export function serviceHref(id: string) {
  const service = services.find((s) => s.id === id);
  return service?.href ?? `/#${id}`;
}

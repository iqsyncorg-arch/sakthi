import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  Globe2,
  GraduationCap,
  Handshake,
  Heart,
  Lightbulb,
  Scale,
} from "lucide-react";

export const aboutCoreValueDefs: { id: string; icon: LucideIcon }[] = [
  { id: "excellence", icon: Award },
  { id: "integrity", icon: Scale },
  { id: "inclusivity", icon: Handshake },
  { id: "innovation", icon: Lightbulb },
  { id: "studentCentricity", icon: Heart },
  { id: "globalPerspective", icon: Globe2 },
];

export const aboutObjectiveCount = 8;

export const aboutThreeEDefs: { id: string; icon: LucideIcon }[] = [
  { id: "education", icon: GraduationCap },
  { id: "employment", icon: Briefcase },
  { id: "entrepreneurship", icon: Lightbulb },
];

export const aboutStatDefs = [
  { id: "years" as const, value: "25+" },
  { id: "countries" as const, value: "50+" },
  { id: "learners" as const, value: "25,000+" },
  { id: "satisfaction" as const, value: "98%" },
];

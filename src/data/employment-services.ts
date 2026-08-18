import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
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

export const employmentServiceDefs: { id: string; icon: LucideIcon }[] = [
  { id: "jobOpportunities", icon: Search },
  { id: "recruitment", icon: Users },
  { id: "careerGuidance", icon: Target },
  { id: "resume", icon: FileText },
  { id: "interview", icon: Mic },
  { id: "skill", icon: Wrench },
  { id: "employer", icon: Building2 },
  { id: "candidate", icon: UserPlus },
];

export const applicationProcessDefs = ["01", "02", "03", "04", "05"] as const;

export const employerHighlightDefs: { id: string; icon: LucideIcon }[] = [
  { id: "campus", icon: Handshake },
  { id: "pipelines", icon: Briefcase },
  { id: "upskilling", icon: GraduationCap },
];

export const registrationBenefitCount = 4;

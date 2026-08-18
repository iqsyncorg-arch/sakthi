import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Cpu,
  Heart,
  Megaphone,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export const lifeAtShakthiDefs: { id: string; icon: LucideIcon }[] = [
  { id: "purpose", icon: Heart },
  { id: "collaborative", icon: Users },
  { id: "growth", icon: TrendingUp },
  { id: "impact", icon: Sparkles },
];

export type OpenPositionDef = {
  id: string;
  department: string;
};

export const openPositionDefs: OpenPositionDef[] = [
  { id: "faculty-mathematics", department: "Teaching" },
  { id: "academic-counselor", department: "Counseling" },
  { id: "digital-marketing", department: "Marketing" },
  { id: "software-developer", department: "Technology" },
  { id: "admin-executive", department: "Administration" },
];

export const hiringProcessIds = ["01", "02", "03", "04", "05"] as const;

export const departmentIcons: Record<string, LucideIcon> = {
  Teaching: BookOpen,
  Counseling: MessageCircle,
  Marketing: Megaphone,
  Technology: Cpu,
  Administration: Users,
};

export const jobDepartments = [
  "All Departments",
  "Teaching",
  "Counseling",
  "Marketing",
  "Technology",
  "Administration",
] as const;

export const jobLocations = ["All Locations", "Bangalore, India"] as const;

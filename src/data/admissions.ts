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

export const admissionsStepIds = ["01", "02", "03", "04", "05"] as const;

export const admissionsServiceDefs: { id: string; icon: LucideIcon }[] = [
  { id: "counseling", icon: UserCheck },
  { id: "selection", icon: School },
  { id: "application", icon: FileText },
  { id: "visa", icon: Stamp },
  { id: "preDeparture", icon: Plane },
  { id: "counselor", icon: Headphones },
];

export const admissionsDocumentCount = 7;

export const admissionsAudienceDefs: { id: string; icon: LucideIcon }[] = [
  { id: "students", icon: GraduationCap },
  { id: "parents", icon: MapPin },
  { id: "professionals", icon: BadgeCheck },
];

export const admissionsHighlightDefs = [
  { id: "years" as const, value: "25+" },
  { id: "countries" as const, value: "50+" },
  { id: "consultation" as const, value: "Free" },
  { id: "response" as const, value: "24h" },
];

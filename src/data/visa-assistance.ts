import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Calendar,
  FileCheck2,
  FileText,
  FolderOpen,
  Globe2,
  MessageSquare,
  Plane,
  Radar,
  RefreshCw,
  ShieldAlert,
  Users,
  Wallet,
} from "lucide-react";

export type VisaSectionDef = {
  id: string;
  itemIds: string[];
};

export const visaSectionDefs: VisaSectionDef[] = [
  {
    id: "guidance",
    itemIds: [
      "countryExpertise",
      "documentation",
      "applicationForm",
      "interviewPrep",
      "refusalHandling",
    ],
  },
  {
    id: "process",
    itemIds: ["documentManagement", "appointmentScheduling", "visaTracking"],
  },
  {
    id: "risk",
    itemIds: ["policyUpdates", "errorPrevention", "financialSecurity"],
  },
  {
    id: "support",
    itemIds: ["postArrival", "supportNetwork"],
  },
];

export const visaItemIcons: Record<string, LucideIcon> = {
  countryExpertise: Globe2,
  documentation: FileText,
  applicationForm: FileCheck2,
  interviewPrep: MessageSquare,
  refusalHandling: RefreshCw,
  documentManagement: FolderOpen,
  appointmentScheduling: Calendar,
  visaTracking: Radar,
  policyUpdates: ShieldAlert,
  errorPrevention: AlertTriangle,
  financialSecurity: Wallet,
  postArrival: Plane,
  supportNetwork: Users,
};

export const visaSectionIcons: Record<string, LucideIcon> = {
  guidance: Globe2,
  process: FolderOpen,
  risk: ShieldAlert,
  support: Users,
};

export const visaHighlightIds = [
  "successRate",
  "countriesCovered",
  "endToEnd",
  "reapplication",
] as const;

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

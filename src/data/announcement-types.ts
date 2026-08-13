import type { Announcement } from "../lib/types/cms";

export type AnnouncementTypeId =
  | "urgent"
  | "visa-update"
  | "admission"
  | "scholarship"
  | "event"
  | "announcement";

export type AnnouncementTypeConfig = {
  id: AnnouncementTypeId;
  label: string;
  badgeClass: string;
  cardClass: string;
  publicLabel: string;
};

export const ANNOUNCEMENT_TYPES: AnnouncementTypeConfig[] = [
  {
    id: "urgent",
    label: "Urgent",
    badgeClass: "bg-rose-50 text-rose-700 border-rose-200",
    cardClass: "border-rose-200 bg-rose-50/40",
    publicLabel: "LIVE URGENT ALERT",
  },
  {
    id: "visa-update",
    label: "Visa Update",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    cardClass: "border-blue-200 bg-blue-50/40",
    publicLabel: "LIVE VISA UPDATE",
  },
  {
    id: "admission",
    label: "Admission",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    cardClass: "border-emerald-200 bg-emerald-50/40",
    publicLabel: "ADMISSION UPDATE",
  },
  {
    id: "scholarship",
    label: "Scholarship",
    badgeClass: "bg-violet-50 text-violet-700 border-violet-200",
    cardClass: "border-violet-200 bg-violet-50/40",
    publicLabel: "SCHOLARSHIP ALERT",
  },
  {
    id: "event",
    label: "Event",
    badgeClass: "bg-orange-50 text-orange-700 border-orange-200",
    cardClass: "border-orange-200 bg-orange-50/40",
    publicLabel: "UPCOMING EVENT",
  },
  {
    id: "announcement",
    label: "Announcement",
    badgeClass: "bg-slate-100 text-slate-700 border-slate-200",
    cardClass: "border-slate-200 bg-slate-50/60",
    publicLabel: "ANNOUNCEMENT",
  },
];

const LEGACY_TYPE_MAP: Record<string, AnnouncementTypeId> = {
  urgent: "urgent",
  admissions: "admission",
  admission: "admission",
  info: "announcement",
  prep: "event",
  finance: "scholarship",
  "visa-update": "visa-update",
  scholarship: "scholarship",
  event: "event",
  announcement: "announcement",
};

export function normalizeAnnouncementType(type: string): AnnouncementTypeId {
  return LEGACY_TYPE_MAP[type] ?? "announcement";
}

export function getAnnouncementTypeConfig(type: string): AnnouncementTypeConfig {
  const id = normalizeAnnouncementType(type);
  return ANNOUNCEMENT_TYPES.find((t) => t.id === id) ?? ANNOUNCEMENT_TYPES[5];
}

export function isAnnouncementPubliclyVisible(ann: Announcement) {
  return ann.enabled !== false && ann.visibility !== "internal" && ann.status !== "draft";
}

export function countLiveAnnouncements(announcements: Announcement[], feedEnabled: boolean) {
  if (!feedEnabled) return 0;
  return announcements.filter(isAnnouncementPubliclyVisible).length;
}

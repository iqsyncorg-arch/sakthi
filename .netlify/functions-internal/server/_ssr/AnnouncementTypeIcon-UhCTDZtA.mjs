import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { as as Megaphone, at as CalendarDays, m as Award, G as GraduationCap, au as Stamp, T as TriangleAlert } from "../_libs/lucide-react.mjs";
const ANNOUNCEMENT_TYPES = [
  {
    id: "urgent",
    label: "Urgent",
    badgeClass: "bg-rose-50 text-rose-700 border-rose-200",
    cardClass: "border-rose-200 bg-rose-50/40",
    publicLabel: "LIVE URGENT ALERT"
  },
  {
    id: "visa-update",
    label: "Visa Update",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    cardClass: "border-blue-200 bg-blue-50/40",
    publicLabel: "LIVE VISA UPDATE"
  },
  {
    id: "admission",
    label: "Admission",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    cardClass: "border-emerald-200 bg-emerald-50/40",
    publicLabel: "ADMISSION UPDATE"
  },
  {
    id: "scholarship",
    label: "Scholarship",
    badgeClass: "bg-violet-50 text-violet-700 border-violet-200",
    cardClass: "border-violet-200 bg-violet-50/40",
    publicLabel: "SCHOLARSHIP ALERT"
  },
  {
    id: "event",
    label: "Event",
    badgeClass: "bg-orange-50 text-orange-700 border-orange-200",
    cardClass: "border-orange-200 bg-orange-50/40",
    publicLabel: "UPCOMING EVENT"
  },
  {
    id: "announcement",
    label: "Announcement",
    badgeClass: "bg-slate-100 text-slate-700 border-slate-200",
    cardClass: "border-slate-200 bg-slate-50/60",
    publicLabel: "ANNOUNCEMENT"
  }
];
const LEGACY_TYPE_MAP = {
  urgent: "urgent",
  admissions: "admission",
  admission: "admission",
  info: "announcement",
  prep: "event",
  finance: "scholarship",
  "visa-update": "visa-update",
  scholarship: "scholarship",
  event: "event",
  announcement: "announcement"
};
function normalizeAnnouncementType(type) {
  return LEGACY_TYPE_MAP[type] ?? "announcement";
}
function getAnnouncementTypeConfig(type) {
  const id = normalizeAnnouncementType(type);
  return ANNOUNCEMENT_TYPES.find((t) => t.id === id) ?? ANNOUNCEMENT_TYPES[5];
}
function isAnnouncementPubliclyVisible(ann) {
  return ann.enabled !== false && ann.visibility !== "internal" && ann.status !== "draft";
}
function countLiveAnnouncements(announcements, feedEnabled) {
  if (!feedEnabled) return 0;
  return announcements.filter(isAnnouncementPubliclyVisible).length;
}
const TYPE_ICONS = {
  urgent: TriangleAlert,
  "visa-update": Stamp,
  admission: GraduationCap,
  scholarship: Award,
  event: CalendarDays,
  announcement: Megaphone
};
const sizeMap = {
  sm: { box: "h-7 w-7 rounded-lg", icon: "h-3.5 w-3.5" },
  md: { box: "h-9 w-9 rounded-xl", icon: "h-4 w-4" },
  lg: { box: "h-11 w-11 rounded-xl", icon: "h-5 w-5" }
};
const boxColors = {
  urgent: "bg-rose-100 text-rose-600",
  "visa-update": "bg-blue-100 text-blue-600",
  admission: "bg-emerald-100 text-emerald-600",
  scholarship: "bg-violet-100 text-violet-600",
  event: "bg-orange-100 text-orange-600",
  announcement: "bg-slate-100 text-slate-600"
};
function AnnouncementTypeIcon({
  type,
  size = "md",
  showBox = true,
  className = ""
}) {
  const id = normalizeAnnouncementType(type);
  const Icon = TYPE_ICONS[id];
  const { box, icon } = sizeMap[size];
  if (!showBox) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `${icon} ${className}`, "aria-hidden": true });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center justify-center shrink-0 ${box} ${boxColors[id]} ${className}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: icon, "aria-hidden": true })
    }
  );
}
function CategoryPicker({
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: ANNOUNCEMENT_TYPES.map((t) => {
    const selected = normalizeAnnouncementType(value) === t.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => onChange(t.id),
        className: `flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-left transition ${selected ? "border-[#0A3D62] bg-[#0A3D62]/5 ring-1 ring-[#0A3D62]/20" : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementTypeIcon, { type: t.id, size: "sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-bold ${selected ? "text-[#0A3D62]" : "text-slate-700"}`, children: t.label })
        ]
      },
      t.id
    );
  }) });
}
export {
  AnnouncementTypeIcon as A,
  CategoryPicker as C,
  countLiveAnnouncements as c,
  getAnnouncementTypeConfig as g,
  isAnnouncementPubliclyVisible as i,
  normalizeAnnouncementType as n
};

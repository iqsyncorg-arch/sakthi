import {
  AlertTriangle,
  Stamp,
  GraduationCap,
  Award,
  CalendarDays,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import {
  ANNOUNCEMENT_TYPES,
  normalizeAnnouncementType,
  type AnnouncementTypeId,
} from "../../data/announcement-types";

const TYPE_ICONS: Record<AnnouncementTypeId, LucideIcon> = {
  urgent: AlertTriangle,
  "visa-update": Stamp,
  admission: GraduationCap,
  scholarship: Award,
  event: CalendarDays,
  announcement: Megaphone,
};

type Size = "sm" | "md" | "lg";

const sizeMap: Record<Size, { box: string; icon: string }> = {
  sm: { box: "h-7 w-7 rounded-lg", icon: "h-3.5 w-3.5" },
  md: { box: "h-9 w-9 rounded-xl", icon: "h-4 w-4" },
  lg: { box: "h-11 w-11 rounded-xl", icon: "h-5 w-5" },
};

const boxColors: Record<AnnouncementTypeId, string> = {
  urgent: "bg-rose-100 text-rose-600",
  "visa-update": "bg-blue-100 text-blue-600",
  admission: "bg-emerald-100 text-emerald-600",
  scholarship: "bg-violet-100 text-violet-600",
  event: "bg-orange-100 text-orange-600",
  announcement: "bg-slate-100 text-slate-600",
};

export function AnnouncementTypeIcon({
  type,
  size = "md",
  showBox = true,
  className = "",
}: {
  type: string;
  size?: Size;
  showBox?: boolean;
  className?: string;
}) {
  const id = normalizeAnnouncementType(type);
  const Icon = TYPE_ICONS[id];
  const { box, icon } = sizeMap[size];

  if (!showBox) {
    return <Icon className={`${icon} ${className}`} aria-hidden />;
  }

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 ${box} ${boxColors[id]} ${className}`}
    >
      <Icon className={icon} aria-hidden />
    </span>
  );
}

export function CategoryPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (type: AnnouncementTypeId) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {ANNOUNCEMENT_TYPES.map((t) => {
        const selected = normalizeAnnouncementType(value) === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onChange(t.id)}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-left transition ${
              selected
                ? "border-[#0A3D62] bg-[#0A3D62]/5 ring-1 ring-[#0A3D62]/20"
                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            <AnnouncementTypeIcon type={t.id} size="sm" />
            <span className={`text-xs font-bold ${selected ? "text-[#0A3D62]" : "text-slate-700"}`}>
              {t.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

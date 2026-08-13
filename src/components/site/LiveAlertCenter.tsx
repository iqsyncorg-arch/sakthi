import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Eye } from "lucide-react";
import type { Announcement } from "../../lib/types/cms";
import { getAnnouncementTypeConfig } from "../../data/announcement-types";
import { AnnouncementTypeIcon } from "./AnnouncementTypeIcon";

type Props = {
  announcements: Announcement[];
  variant?: "hero" | "sidebar";
  title?: string;
};

function AlertCard({ ann, compact = false }: { ann: Announcement; compact?: boolean }) {
  const config = getAnnouncementTypeConfig(ann.type);

  if (compact) {
    return (
      <div className={`rounded-xl border p-4 ${config.cardClass}`}>
        <div className="flex items-center gap-2 mb-2">
          <AnnouncementTypeIcon type={ann.type} size="sm" />
          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${config.badgeClass}`}>
            {config.label}
          </span>
        </div>
        <p className="text-sm font-semibold text-[#0A3D62] leading-relaxed">{ann.text}</p>
        <p className="mt-3 text-[11px] font-semibold text-slate-500 flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {ann.time}
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-xl border p-5 sm:p-6 ${config.cardClass}`}>
      <div className="flex items-center gap-2.5">
        <AnnouncementTypeIcon type={ann.type} size="md" />
        <span className={`text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border ${config.badgeClass}`}>
          {config.publicLabel}
        </span>
      </div>
      <p className="mt-4 text-base sm:text-lg font-semibold text-[#0A3D62] leading-relaxed">
        {ann.text}
      </p>
      <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
        <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {ann.time}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#4DA8DA] flex items-center gap-1">
          <Eye className="h-3 w-3" />
          Public feed
        </span>
      </div>
    </div>
  );
}

export function LiveAlertCenter({ announcements, variant = "hero", title = "Live Alerts" }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [announcements.length]);

  useEffect(() => {
    if (announcements.length <= 1 || variant !== "hero") return;
    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % announcements.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [announcements.length, variant]);

  if (announcements.length === 0) return null;

  const active = announcements[activeIndex] ?? announcements[0];

  if (variant === "sidebar") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="px-4 py-3.5 border-b border-slate-100 bg-gradient-to-r from-[#0A3D62] to-[#4DA8DA] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-400" />
            </span>
            <h3 className="text-sm font-extrabold">{title}</h3>
          </div>
          <span className="text-[10px] font-bold bg-white/15 px-2 py-0.5 rounded-full">
            {announcements.length} Active
          </span>
        </div>
        <div className="p-4 space-y-3 max-h-[min(480px,65vh)] overflow-y-auto [scrollbar-width:thin]">
          {announcements.map((ann) => (
            <AlertCard key={ann.id} ann={ann} compact />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-slate-100/80 to-white border-y border-slate-200/80 py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-soft overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#0A3D62] text-white">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
              </span>
              <span className="text-xs font-extrabold uppercase tracking-widest">Live Alerts</span>
            </div>
            <span className="text-[11px] font-bold bg-white/15 px-2.5 py-1 rounded-full">
              {announcements.length} Active
            </span>
          </div>

          <div className="p-5 sm:p-6">
            <AlertCard ann={active} />

            {announcements.length > 1 && (
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {announcements.map((ann, i) => (
                    <button
                      key={ann.id}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeIndex ? "w-6 bg-[#0A3D62]" : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Show alert ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveIndex((i) => (i - 1 + announcements.length) % announcements.length)}
                    className="h-8 w-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                    aria-label="Previous alert"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((i) => (i + 1) % announcements.length)}
                    className="h-8 w-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                    aria-label="Next alert"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type ShutterHoverCardProps = {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  iconWrapClassName?: string;
};

export function ShutterHoverCard({
  icon: Icon,
  title,
  children,
  iconWrapClassName = "bg-[#F4B400]/15 text-[#0A3D62] group-hover:bg-white/15 group-hover:text-[#F4B400]",
}: ShutterHoverCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 sm:p-8 shadow-sm transition-shadow duration-500 hover:border-[#4DA8DA]/30 hover:shadow-lg">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 origin-left scale-x-0 bg-gradient-to-r from-[#0A3D62] via-[#0A3D62] to-[#4DA8DA] transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      <div className="relative z-10">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-500 ${iconWrapClassName}`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-5 text-lg font-bold text-[#0A3D62] transition-colors duration-500 group-hover:text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed transition-colors duration-500 group-hover:text-white/90">
          {children}
        </p>
      </div>
    </article>
  );
}

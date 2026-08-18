import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { HeroWavePattern } from "./HeroWavePattern";

type AboutFeatureCardProps = {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  actions?: ReactNode;
  className?: string;
  size?: "hero" | "compact";
  icon?: LucideIcon;
};

export function AboutFeatureCard({
  eyebrow,
  title,
  description,
  actions,
  className = "",
  size = "hero",
  icon: Icon,
}: AboutFeatureCardProps) {
  if (size === "compact") {
    return (
      <article
        className={`relative h-full overflow-hidden rounded-2xl bg-[#0A3D62] border border-[#4DA8DA]/20 p-7 sm:p-8 text-white shadow-glow ${className}`}
      >
        <HeroWavePattern />
        <div className="relative z-10">
          {Icon && (
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-[#F4B400]">
              <Icon className="h-5 w-5" />
            </div>
          )}
          <h3 className={`${Icon ? "mt-5" : ""} text-lg font-bold`}>{title}</h3>
          <p className="mt-3 text-sm text-white/85 leading-relaxed">{description}</p>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem] bg-[#0A3D62] border border-[#4DA8DA]/20 px-7 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14 text-white shadow-[0_24px_80px_rgba(10,61,98,0.45)] ${className}`}
    >
      <HeroWavePattern />
      <div className="relative z-10 max-w-3xl">
        {eyebrow && (
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            {eyebrow}
          </p>
        )}
        <h3 className={`${eyebrow ? "mt-5" : ""} text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight text-white`}>
          {title}
        </h3>
        <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">{description}</p>
        {actions && <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">{actions}</div>}
      </div>
    </article>
  );
}

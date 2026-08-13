import { cn } from "../../lib/utils";
import { COMPANY_TAGLINE } from "../../data/brand";

const BLUE = "#0A3D62";
/** Matches the official logo icon orange */
const BRAND_ORANGE = "#FE9A06";

type LogoProps = {
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  showWordmark?: boolean;
  className?: string;
};

const sizes = {
  sm: { mark: 42, word: "text-[15px]", tag: "text-[8px] leading-snug", gap: "gap-2", tagMaxW: "max-w-[148px]" },
  md: { mark: 50, word: "text-[18px]", tag: "text-[9px] leading-snug", gap: "gap-2", tagMaxW: "max-w-[168px]" },
  lg: { mark: 60, word: "text-[22px]", tag: "text-[10px] leading-snug", gap: "gap-2.5", tagMaxW: "max-w-[200px]" },
} as const;

function LogoMark({ size, className }: { size: number; className?: string }) {
  return (
    <img
      src="/brand/logo-icon.png?v=4"
      alt=""
      aria-hidden
      className={cn("shrink-0 object-contain bg-transparent", className)}
      style={{ height: size, width: "auto" }}
    />
  );
}

export function Logo({
  variant = "default",
  size = "md",
  showTagline = false,
  showWordmark = true,
  className,
}: LogoProps) {
  const s = sizes[size];
  const isLight = variant === "light";
  const academyColor = isLight ? "#FFFFFF" : BLUE;
  const taglineColor = isLight ? "rgba(255,255,255,0.85)" : BLUE;

  return (
    <span className={cn("inline-flex items-center", s.gap, className)}>
      <LogoMark size={s.mark} />
      {showWordmark && (
        <span className="flex flex-col justify-center leading-tight">
          <span
            className={cn("font-bold tracking-tight", s.word)}
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            <span style={{ color: BRAND_ORANGE }}>Shakthi </span>
            <span style={{ color: academyColor }}>Academy</span>
          </span>
          {showTagline && (
            <span
              className={cn("mt-0.5 font-normal tracking-normal", s.tag, s.tagMaxW)}
              style={{ color: taglineColor, fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              {COMPANY_TAGLINE}
            </span>
          )}
        </span>
      )}
    </span>
  );
}

import { cn } from "../../lib/utils";

const BLUE = "#0A3D62";
const BRAND_RED = "#8B1A1A";

type LogoProps = {
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  showWordmark?: boolean;
  className?: string;
};

const sizes = {
  sm: { mark: 52, word: "text-[15px]", gap: "gap-2.5" },
  md: { mark: 64, word: "text-[18px]", gap: "gap-3" },
  lg: { mark: 84, word: "text-[22px]", gap: "gap-3.5" },
} as const;

export function Logo({
  variant = "default",
  size = "md",
  showWordmark = true,
  className,
}: LogoProps) {
  const s = sizes[size];
  const isLight = variant === "light";
  const academyColor = isLight ? "#FFFFFF" : BLUE;
  const shakthiColor = isLight ? "#F4B400" : BRAND_RED;

  return (
    <span className={cn("inline-flex items-center", s.gap, className)}>
      <span className="inline-flex items-center justify-center shrink-0">
        <img
          src="/brand/logo-icon.png?v=5"
          alt=""
          aria-hidden
          className="object-contain"
          style={{ height: s.mark, width: "auto", maxWidth: s.mark * 1.15 }}
        />
      </span>
      {showWordmark && (
        <span
          className={cn("font-bold tracking-tight leading-tight", s.word)}
          style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}
        >
          <span style={{ color: shakthiColor }}>Shakthi </span>
          <span style={{ color: academyColor }}>Academy</span>
        </span>
      )}
    </span>
  );
}

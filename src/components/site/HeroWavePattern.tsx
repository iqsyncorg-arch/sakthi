export function HeroWavePattern() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute bottom-0 right-0 h-[55%] w-[45%] text-[#4DA8DA]/20"
      viewBox="0 0 400 300"
      fill="none"
      preserveAspectRatio="xMaxYMax meet"
    >
      <path
        d="M0 280 C80 220 120 260 200 200 C280 140 320 180 400 120"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M40 300 C120 240 160 280 240 220 C320 160 360 200 440 140"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <path
        d="M80 320 C160 260 200 300 280 240 C360 180 400 220 480 160"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}

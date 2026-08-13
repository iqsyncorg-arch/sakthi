import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { k as COMPANY_TAGLINE } from "./router-DSxx-_6s.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const BLUE = "#0A3D62";
const BRAND_ORANGE = "#FE9A06";
const sizes = {
  sm: { mark: 42, word: "text-[15px]", tag: "text-[8px] leading-snug", gap: "gap-2", tagMaxW: "max-w-[148px]" },
  md: { mark: 50, word: "text-[18px]", tag: "text-[9px] leading-snug", gap: "gap-2", tagMaxW: "max-w-[168px]" },
  lg: { mark: 60, word: "text-[22px]", tag: "text-[10px] leading-snug", gap: "gap-2.5", tagMaxW: "max-w-[200px]" }
};
function LogoMark({ size, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: "/brand/logo-icon.png?v=4",
      alt: "",
      "aria-hidden": true,
      className: cn("shrink-0 object-contain bg-transparent", className),
      style: { height: size, width: "auto" }
    }
  );
}
function Logo({
  variant = "default",
  size = "md",
  showTagline = false,
  showWordmark = true,
  className
}) {
  const s = sizes[size];
  const isLight = variant === "light";
  const academyColor = isLight ? "#FFFFFF" : BLUE;
  const taglineColor = isLight ? "rgba(255,255,255,0.85)" : BLUE;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center", s.gap, className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMark, { size: s.mark }),
    showWordmark && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col justify-center leading-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: cn("font-bold tracking-tight", s.word),
          style: { fontFamily: '"Inter", system-ui, sans-serif' },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: BRAND_ORANGE }, children: "Shakthi " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: academyColor }, children: "Academy" })
          ]
        }
      ),
      showTagline && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: cn("mt-0.5 font-normal tracking-normal", s.tag, s.tagMaxW),
          style: { color: taglineColor, fontFamily: '"Inter", system-ui, sans-serif' },
          children: COMPANY_TAGLINE
        }
      )
    ] })
  ] });
}
export {
  Logo as L
};

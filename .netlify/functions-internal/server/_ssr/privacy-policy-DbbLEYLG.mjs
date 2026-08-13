import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar, R as Reveal, F as Footer } from "./Reveal-BR6Ce8yz.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { M as Mail, P as Phone } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./Logo-DDrCU-to.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./router-DSxx-_6s.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const sections = [{
  title: "Information Collection",
  content: "We may collect the following types of personal information from you:",
  list: ["Name", "Contact information (address, email, phone number)", "Educational background", "Financial information (if applicable)", "Passport details", "Other information you provide through our website, email, or in-person interactions"]
}, {
  title: "Purpose of Collection",
  content: "We collect your personal information to:",
  list: ["Facilitate your application for overseas education", "Provide counseling services", "Process visa applications", "Share information with educational institutions", "Respond to your inquiries"]
}, {
  title: "Information Sharing",
  content: "We may share your personal information with:",
  list: ["Educational institutions you have applied to", "Visa agencies", "Other service providers as necessary to fulfill your application requirements"],
  footer: "We will not sell or rent your personal information to third parties for marketing purposes."
}, {
  title: "Data Security",
  content: "We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure."
}, {
  title: "User Rights",
  content: "You have the right to:",
  list: ["Access and correct your personal information", "Request the deletion of your personal information", "Opt out of marketing communications"]
}, {
  title: "Cookies and Tracking",
  content: "We use cookies and similar tracking technologies to collect information about your use of our website. You can manage your cookie preferences through your browser settings."
}, {
  title: "Children's Privacy",
  content: "Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13."
}, {
  title: "Changes to the Policy",
  content: "We may update this privacy policy from time to time. We will notify you of any significant changes by posting the updated policy on our website."
}];
function PrivacyPolicyPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#0A3D62] via-slate-950 to-slate-900" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#4DA8DA]/15 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-4xl px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto", children: "Shakthi Academy (“we,” “us,” or “our”) is committed to protecting your privacy. This privacy policy outlines how we collect, use, and share your personal information." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
      sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold text-[#0A3D62]", children: section.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-slate-600 leading-relaxed", children: section.content }),
        section.list && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: section.list.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm text-slate-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DA8DA]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: item })
        ] }, item)) }),
        section.footer && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-600 leading-relaxed", children: section.footer })
      ] }, section.title)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl gradient-primary p-6 md:p-8 text-white shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold", children: "Contact Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/85 leading-relaxed", children: "If you have any questions about this privacy policy, please contact us at:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-[#F4B400] shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@shakthiacademy.com", className: "hover:underline", children: "info@shakthiacademy.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-[#F4B400] shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+917993473399", className: "hover:underline", children: "+91 799 347 3399" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-500 leading-relaxed text-center", children: [
        "By using our website or providing your personal information, you consent to the collection, use, and sharing of your information as described in this privacy policy.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "font-semibold text-[#4DA8DA] hover:underline", children: "Contact us" }),
        " ",
        "if you have any concerns."
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  PrivacyPolicyPage as component
};

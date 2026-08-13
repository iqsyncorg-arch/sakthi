import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, R as Reveal, F as Footer } from "./Reveal-BR6Ce8yz.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { af as Banknote, a as MessageCircle, a7 as Check, A as ArrowRight, a3 as Coins, ag as FileCheck, W as Wallet, ah as ArrowRightLeft, ai as Handshake, f as RefreshCw } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const financialPartners = [{
  name: "SBI (State Bank of India)",
  type: "Public Sector Bank",
  badge: "Lowest Interest Rates",
  details: "Sovereign trust, secure processing, and highly competitive rates for premium institutions worldwide.",
  pros: ["Highly attractive interest rates", "Tax benefits under Sec 80(E)", "Minimal processing charges"],
  color: "border-[#4DA8DA]/30 bg-sky-50/30"
}, {
  name: "YES BANK",
  type: "Private Sector Bank",
  badge: "Fast Digital Approval",
  details: "Customized solutions, digital loan processing, and high credit limits with simple documentation.",
  pros: ["Quick turnaround times", "Flexible collateral options", "Tailored packages for top business schools"],
  color: "border-indigo-500/20 bg-indigo-50/20"
}, {
  name: "AVANSE Financial Services",
  type: "Specialized Education NBFC",
  badge: "100% Cost Coverage",
  details: "Education-focused lender offering comprehensive coverage including tuition, travel, and living costs.",
  pros: ["No upper limit on loan amount", "Pre-admission loan approvals", "Fast disbursement turnaround"],
  color: "border-amber-500/20 bg-amber-50/20"
}, {
  name: "AUXILO Finserve",
  type: "Specialized Education NBFC",
  badge: "Flexible Co-Applicant Rules",
  details: "Next-gen educational lender providing customized student loans designed to fit your unique financial capability.",
  pros: ["Pre-visa disbursement support", "No collateral options available", "Flexible repayment moratorium period"],
  color: "border-emerald-500/20 bg-emerald-50/20"
}];
const assistancePillars = [{
  id: "info",
  icon: Coins,
  title: "Comprehensive Loan Information",
  items: [{
    subtitle: "Understanding Loan Options",
    desc: "Shakthi Academy provides detailed information about various loan schemes (secured/unsecured) offered by different banks and NBFCs."
  }, {
    subtitle: "Eligibility Criteria Clarification",
    desc: "We clarify age, co-applicant requirements, and academic criteria for each loan type, helping you assess your chances of approval."
  }, {
    subtitle: "Interest Rates & Repayment Terms Comparison",
    desc: "We compare rates, processing fees, margins, and moratorium terms to ensure you choose the most cost-effective path."
  }]
}, {
  id: "apply",
  icon: FileCheck,
  title: "Loan Application Assistance",
  items: [{
    subtitle: "Documentation Support",
    desc: "We guide you in gathering necessary academic, KYC, property valuation, and co-applicant income documents systematically."
  }, {
    subtitle: "Application Filling Support",
    desc: "Shakthi Academy assists in filling out complex loan application forms accurately and efficiently to prevent any processing delays."
  }, {
    subtitle: "Active Pipeline Follow-up",
    desc: "We coordinate and follow up directly with the underwriting teams to ensure your file stays on track."
  }]
}, {
  id: "planning",
  icon: Wallet,
  title: "Financial Planning & Counseling",
  items: [{
    subtitle: "Realistic Student Budgeting",
    desc: "We help you build a complete budget sheet considering tuition fees, mandatory health insurance, living costs, and buffer funds."
  }, {
    subtitle: "Long-term Financial Counseling",
    desc: "Get expert advice on managing currency exchanges, living frugally, and managing educational debt during your studies."
  }, {
    subtitle: "Smart Repayment Strategies",
    desc: "We advise on structural repayment options, interest servicing during study, and prepayment avenues to lower your total interest burden."
  }]
}, {
  id: "disbursement",
  icon: ArrowRightLeft,
  title: "Loan Disbursement Support",
  items: [{
    subtitle: "University Coordination",
    desc: "We coordinate with lenders to ensure your loan amount is disbursed directly to your university in line with fee deadlines."
  }, {
    subtitle: "Problem & Delay Resolution",
    desc: "If any administrative bottlenecks arise during wire transfers, Shakthi Academy acts immediately to resolve them with the lender."
  }]
}, {
  id: "relations",
  icon: Handshake,
  title: "Building Relationships with Lenders",
  items: [{
    subtitle: "Strategic Financial Partnerships",
    desc: "We leverage institutional relationships with banks to secure fast-track processing and dedicated priority service desks."
  }, {
    subtitle: "Margin & Terms Negotiation",
    desc: "We negotiate on behalf of outstanding profiles for optimal interest rates, waiver of margins, and flexible co-signer policies."
  }]
}, {
  id: "post-loan",
  icon: RefreshCw,
  title: "Post-Loan & Refinancing Support",
  items: [{
    subtitle: "Ongoing Repayment Guidance",
    desc: "Get support during your post-study grace period or initial employment phase to set up efficient repayment channels."
  }, {
    subtitle: "Loan Refinancing Coordination",
    desc: "When applicable, we explore balance transfer opportunities to shift your loan to a lower interest rate program."
  }]
}];
function EducationLoanPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80", alt: "Education Loan Assistance", className: "w-full h-full object-cover opacity-45" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/15 blur-3xl z-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl z-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, className: "max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "h-3.5 w-3.5 text-[#F4B400]" }),
          "Education Loan Assistance"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white", children: [
          "Securing Funding for",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent", children: "Your Global Education" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed", children: "Shakthi Academy guides you through the complex world of study abroad loans, helping you evaluate, apply, and secure the necessary financial backing with top institutional rates." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
            "Get Loan Assistance"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#partners", className: "inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-sm font-semibold px-6 py-3.5 border border-white/20 hover:bg-white/20 transition", children: "Our Lending Partners" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "partners", className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Premium Network" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-extrabold text-[#0A3D62] sm:text-4xl", children: "Partnered Lenders for Seamless Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-slate-600 leading-relaxed", children: "Shakthi Academy has strategic tie-ups with leading public, private, and education-specialized financial institutions to make loan approvals smooth and stress-free." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: financialPartners.map((partner, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: index * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl border p-6 md:p-8 flex flex-col justify-between h-full hover:shadow-soft hover:scale-[1.01] transition-all duration-300 ${partner.color}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-400", children: partner.type }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-[#0A3D62]/10 px-3 py-1 text-xs font-bold text-[#0A3D62]", children: partner.badge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-extrabold text-[#0A3D62]", children: partner.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-slate-600 leading-relaxed", children: partner.details }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2", children: partner.pros.map((pro, pIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-700 font-medium", children: pro })
          ] }, pIdx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-5 border-t border-slate-100 flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#0A3D62] hover:text-[#4DA8DA] transition", children: [
          "Inquire details ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
        ] }) })
      ] }) }, partner.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-slate-50/70 border-y border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "End-to-End Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-extrabold text-[#0A3D62] sm:text-4xl", children: "How Shakthi Academy Assists You" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-600", children: "From initial profiling and budget planning to coordination with lenders and final refinancing." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: assistancePillars.map((pillar, index) => {
        const PillarIcon = pillar.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: index * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white border border-slate-100 shadow-soft overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-6 py-5 md:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl gradient-primary grid place-items-center text-white shadow-glow shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PillarIcon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg sm:text-xl font-extrabold text-[#0A3D62]", children: pillar.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: "Customized counseling area" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 md:p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: pillar.items.map((item, itemIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-50 p-5 hover:border-[#4DA8DA]/20 transition bg-slate-50/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-slate-800 text-sm sm:text-base leading-snug", children: item.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed", children: item.desc })
          ] }, itemIdx)) })
        ] }) }, pillar.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] bg-slate-950 text-white relative overflow-hidden p-8 md:p-16 shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#0A3D62]/40 via-slate-950 to-slate-950" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid md:grid-cols-2 gap-8 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-extrabold leading-tight", children: "Explore or Know More About This Service?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm sm:text-base text-slate-300 max-w-md leading-relaxed", children: "Speak with our financial planners to explore tailored interest rates, budget strategies, and fast track approvals with SBI, YES BANK, Avanse, and Auxilo." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap md:justify-end gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-semibold px-6 py-3.5 hover:opacity-95 transition", children: [
          "Get in Touch with Us ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  EducationLoanPage as component
};

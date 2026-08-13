import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Banknote, Landmark, ShieldCheck, CheckCircle2, Award, Percent,
  Coins, FileText, Check, HelpCircle, ArrowRight, MessageCircle,
  FileCheck, Wallet, ArrowRightLeft, Handshake, RefreshCw, BarChart3,
  Calendar, ShieldAlert
} from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/education-loan")({
  head: () => ({
    meta: [
      { title: "Education Loan Assistance | Student Loans for Study Abroad | Shakthi Academy" },
      {
        name: "description",
        content: "Securing student loans for studying abroad is simple with Shakthi Academy. Partnering with top financial institutions like SBI, YES BANK, AVANSE, & AUXILO to guide your funding.",
      },
    ],
  }),
  component: EducationLoanPage,
});

const financialPartners = [
  {
    name: "SBI (State Bank of India)",
    type: "Public Sector Bank",
    badge: "Lowest Interest Rates",
    details: "Sovereign trust, secure processing, and highly competitive rates for premium institutions worldwide.",
    pros: ["Highly attractive interest rates", "Tax benefits under Sec 80(E)", "Minimal processing charges"],
    color: "border-[#4DA8DA]/30 bg-sky-50/30",
  },
  {
    name: "YES BANK",
    type: "Private Sector Bank",
    badge: "Fast Digital Approval",
    details: "Customized solutions, digital loan processing, and high credit limits with simple documentation.",
    pros: ["Quick turnaround times", "Flexible collateral options", "Tailored packages for top business schools"],
    color: "border-indigo-500/20 bg-indigo-50/20",
  },
  {
    name: "AVANSE Financial Services",
    type: "Specialized Education NBFC",
    badge: "100% Cost Coverage",
    details: "Education-focused lender offering comprehensive coverage including tuition, travel, and living costs.",
    pros: ["No upper limit on loan amount", "Pre-admission loan approvals", "Fast disbursement turnaround"],
    color: "border-amber-500/20 bg-amber-50/20",
  },
  {
    name: "AUXILO Finserve",
    type: "Specialized Education NBFC",
    badge: "Flexible Co-Applicant Rules",
    details: "Next-gen educational lender providing customized student loans designed to fit your unique financial capability.",
    pros: ["Pre-visa disbursement support", "No collateral options available", "Flexible repayment moratorium period"],
    color: "border-emerald-500/20 bg-emerald-50/20",
  },
];

const assistancePillars = [
  {
    id: "info",
    icon: Coins,
    title: "Comprehensive Loan Information",
    items: [
      {
        subtitle: "Understanding Loan Options",
        desc: "Shakthi Academy provides detailed information about various loan schemes (secured/unsecured) offered by different banks and NBFCs.",
      },
      {
        subtitle: "Eligibility Criteria Clarification",
        desc: "We clarify age, co-applicant requirements, and academic criteria for each loan type, helping you assess your chances of approval.",
      },
      {
        subtitle: "Interest Rates & Repayment Terms Comparison",
        desc: "We compare rates, processing fees, margins, and moratorium terms to ensure you choose the most cost-effective path.",
      },
    ],
  },
  {
    id: "apply",
    icon: FileCheck,
    title: "Loan Application Assistance",
    items: [
      {
        subtitle: "Documentation Support",
        desc: "We guide you in gathering necessary academic, KYC, property valuation, and co-applicant income documents systematically.",
      },
      {
        subtitle: "Application Filling Support",
        desc: "Shakthi Academy assists in filling out complex loan application forms accurately and efficiently to prevent any processing delays.",
      },
      {
        subtitle: "Active Pipeline Follow-up",
        desc: "We coordinate and follow up directly with the underwriting teams to ensure your file stays on track.",
      },
    ],
  },
  {
    id: "planning",
    icon: Wallet,
    title: "Financial Planning & Counseling",
    items: [
      {
        subtitle: "Realistic Student Budgeting",
        desc: "We help you build a complete budget sheet considering tuition fees, mandatory health insurance, living costs, and buffer funds.",
      },
      {
        subtitle: "Long-term Financial Counseling",
        desc: "Get expert advice on managing currency exchanges, living frugally, and managing educational debt during your studies.",
      },
      {
        subtitle: "Smart Repayment Strategies",
        desc: "We advise on structural repayment options, interest servicing during study, and prepayment avenues to lower your total interest burden.",
      },
    ],
  },
  {
    id: "disbursement",
    icon: ArrowRightLeft,
    title: "Loan Disbursement Support",
    items: [
      {
        subtitle: "University Coordination",
        desc: "We coordinate with lenders to ensure your loan amount is disbursed directly to your university in line with fee deadlines.",
      },
      {
        subtitle: "Problem & Delay Resolution",
        desc: "If any administrative bottlenecks arise during wire transfers, Shakthi Academy acts immediately to resolve them with the lender.",
      },
    ],
  },
  {
    id: "relations",
    icon: Handshake,
    title: "Building Relationships with Lenders",
    items: [
      {
        subtitle: "Strategic Financial Partnerships",
        desc: "We leverage institutional relationships with banks to secure fast-track processing and dedicated priority service desks.",
      },
      {
        subtitle: "Margin & Terms Negotiation",
        desc: "We negotiate on behalf of outstanding profiles for optimal interest rates, waiver of margins, and flexible co-signer policies.",
      },
    ],
  },
  {
    id: "post-loan",
    icon: RefreshCw,
    title: "Post-Loan & Refinancing Support",
    items: [
      {
        subtitle: "Ongoing Repayment Guidance",
        desc: "Get support during your post-study grace period or initial employment phase to set up efficient repayment channels.",
      },
      {
        subtitle: "Loan Refinancing Coordination",
        desc: "When applicable, we explore balance transfer opportunities to shift your loan to a lower interest rate program.",
      },
    ],
  },
];

function EducationLoanPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80"
            alt="Education Loan Assistance"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/15 blur-3xl z-0" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10">
              <Banknote className="h-3.5 w-3.5 text-[#F4B400]" />
              Education Loan Assistance
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Securing Funding for{" "}
              <span className="bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent">
                Your Global Education
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Shakthi Academy guides you through the complex world of study abroad loans, helping you evaluate,
              apply, and secure the necessary financial backing with top institutional rates.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition"
              >
                <MessageCircle className="h-4 w-4" />
                Get Loan Assistance
              </a>
              <a
                href="#partners"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-sm font-semibold px-6 py-3.5 border border-white/20 hover:bg-white/20 transition"
              >
                Our Lending Partners
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: LENDING TIE-UPS */}
      <section id="partners" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <span className="section-eyebrow">
                Premium Network
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#0A3D62] sm:text-4xl">
                Partnered Lenders for Seamless Support
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Shakthi Academy has strategic tie-ups with leading public, private, and education-specialized
                financial institutions to make loan approvals smooth and stress-free.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {financialPartners.map((partner, index) => (
              <Reveal key={partner.name} delay={index * 0.05}>
                <div
                  className={`rounded-3xl border p-6 md:p-8 flex flex-col justify-between h-full hover:shadow-soft hover:scale-[1.01] transition-all duration-300 ${partner.color}`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {partner.type}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-[#0A3D62]/10 px-3 py-1 text-xs font-bold text-[#0A3D62]">
                        {partner.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#0A3D62]">{partner.name}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{partner.details}</p>

                    <ul className="mt-6 space-y-2">
                      {partner.pros.map((pro, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <Check className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700 font-medium">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-end">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A3D62] hover:text-[#4DA8DA] transition"
                    >
                      Inquire details <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW WE ASSIST */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-eyebrow">
                End-to-End Support
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#0A3D62] sm:text-4xl">
                How Shakthi Academy Assists You
              </h2>
              <p className="mt-4 text-slate-600">
                From initial profiling and budget planning to coordination with lenders and final refinancing.
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            {assistancePillars.map((pillar, index) => {
              const PillarIcon = pillar.icon;
              return (
                <Reveal key={pillar.id} delay={index * 0.05}>
                  <div className="rounded-3xl bg-white border border-slate-100 shadow-soft overflow-hidden">
                    <div className="flex items-center gap-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-6 py-5 md:px-8">
                      <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center text-white shadow-glow shrink-0">
                        <PillarIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-[#0A3D62]">{pillar.title}</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Customized counseling area</p>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {pillar.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="rounded-2xl border border-slate-50 p-5 hover:border-[#4DA8DA]/20 transition bg-slate-50/30"
                        >
                          <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-snug">
                            {item.subtitle}
                          </h4>
                          <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: SUMMARY & FINAL CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="rounded-[2rem] bg-slate-950 text-white relative overflow-hidden p-8 md:p-16 shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62]/40 via-slate-950 to-slate-950" />
              <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/10 blur-3xl" />

              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                    Explore or Know More About This Service?
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
                    Speak with our financial planners to explore tailored interest rates, budget strategies,
                    and fast track approvals with SBI, YES BANK, Avanse, and Auxilo.
                  </p>
                </div>
                <div className="flex flex-wrap md:justify-end gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-semibold px-6 py-3.5 hover:opacity-95 transition"
                  >
                    Get in Touch with Us <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

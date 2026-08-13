import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Phone, Mail, MapPin, Clock, Send, MessageSquare, Globe2,
  CheckCircle2, ChevronDown, Landmark, Sparkles,
  Plus, Minus
} from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { apiSubmitInquiry } from "../lib/api/cms.api";
import contactHero from "../assets/contact-hero.png";
import { CONTACT_PHONES, WHATSAPP_NUMBER, CONTACT_LOCATION } from "../data/brand";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Shakthi Academy" },
      {
        name: "description",
        content: `Get in touch with Shakthi Academy's experts in ${CONTACT_LOCATION.city}. Consultations on admissions, visa assistance, SOP editing, and education loans.`,
      },
    ],
  }),
  component: ContactPage,
});

const countryCodes = [
  { code: "+91", label: "India (+91)", flag: "🇮🇳" },
  { code: "+1", label: "US / CA (+1)", flag: "🇺🇸" },
  { code: "+44", label: "UK (+44)", flag: "🇬🇧" },
  { code: "+61", label: "Australia (+61)", flag: "🇦🇺" },
  { code: "+49", label: "Germany (+49)", flag: "🇩🇪" },
  { code: "+64", label: "New Zealand (+64)", flag: "🇳🇿" },
  { code: "+353", label: "Ireland (+353)", flag: "🇮🇪" },
];

const subjects = [
  "Medical Admissions Guidance (MBBS/MD)",
  "University Admissions Guidance (UG / PG)",
  "Indian Universities Guidance",
  "STEM Programs Abroad Inquiry",
  "Visa Assistance Service",
  "SOP Writing & Critique",
  "Education Loan Assistance",
  "Scholarships & Fee Waivers",
  "IELTS / PTE / Test Prep Training",
  "General Inquiry / Feedback",
];

const faqs = [
  {
    question: "Is the initial overseas counseling consultation free?",
    answer: "Yes! Shakthi Academy provides completely free initial profiling and counseling sessions. We analyze your grades, test scores, budget, and preference to help map out a tailored study abroad plan.",
  },
  {
    question: "What documents should I prepare for my profile evaluation?",
    answer: "For a detailed profiling session, we recommend preparing digital or physical copies of your academic transcripts (10th, 12th, and Bachelors if applicable), test scores (IELTS, TOEFL, Duolingo, GRE), an updated resume, and any portfolio materials.",
  },
  {
    question: "Do you help with education loans and visa processing?",
    answer: "Absolutely. Shakthi Academy has strategic lending tie-ups with top institutional partners like SBI, YES BANK, Avanse, and Auxilo to secure fast-track approvals. We also guide you in preparing the complete visa file, scheduling interviews, and orientation.",
  },
  {
    question: `Can walk-ins visit the ${CONTACT_LOCATION.city} head office directly?`,
    answer: `Yes, you are always welcome! Our head office in ${CONTACT_LOCATION.officeArea} is open Monday through Saturday from 10:00 AM to 6:30 PM. We recommend booking a slot online or via call to ensure one-on-one time with a senior counselor.`,
  },
];

function FAQAccordionItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-100 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-slate-50/50 transition"
      >
        <span className="font-extrabold text-[#0A3D62] text-sm sm:text-base">{question}</span>
        <div className={`h-8 w-8 rounded-lg ${isOpen ? "bg-[#0A3D62] text-white" : "bg-[#0A3D62]/5 text-[#0A3D62]"} flex items-center justify-center shrink-0 transition-colors`}>
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50/80 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    subject: subjects[0],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiSubmitInquiry({
        formName: "Get In Touch",
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        subject: formData.subject,
        message: formData.message,
      });
      setSubmitted(true);
      setFormData({
        name: "",
        countryCode: "+91",
        phone: "",
        email: "",
        subject: subjects[0],
        message: "",
      });
    } catch (err) {
      console.error("Failed to save submission", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={contactHero}
            alt="Shakthi Academy Contact and Support Desk"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
        </div>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DA8DA]/15 blur-3xl z-0" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/10">
              <Sparkles className="h-3.5 w-3.5 text-[#F4B400]" />
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Connect With{" "}
              <span className="bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent">
                Our Experts
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Ready to start your overseas education journey? Drop us a line, call our counseling desk,
              or visit our head office in {CONTACT_LOCATION.city}. We are here to help you succeed!
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="py-16 md:py-24 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: ELABORATED ADDRESS & CONTACT DETAILS */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="rounded-3xl border border-slate-100 p-6 md:p-8 bg-white shadow-soft">
                  <h3 className="text-xl font-extrabold text-[#0A3D62] mb-6 pb-4 border-b border-slate-100">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    {/* Phone details */}
                    <div className="flex gap-4 items-start">
                      <div className="shrink-0 h-10 w-10 rounded-xl bg-[#0A3D62]/5 text-[#0A3D62] grid place-items-center">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">Direct Phone / Hotline</h4>
                        <p className="mt-1 text-base sm:text-lg font-extrabold text-[#0A3D62] flex flex-col gap-1">
                          {CONTACT_PHONES.map((phone) => (
                            <a key={phone.tel} href={`tel:${phone.tel}`} className="hover:text-[#4DA8DA] transition">
                              {phone.display}
                            </a>
                          ))}
                        </p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          Admissions Desk & Support Hotlines (Mon-Sat, 10 AM - 6:30 PM). Available on WhatsApp.
                        </p>
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3.5 py-2 rounded-xl mt-3 hover:scale-[1.02] transition duration-200"
                        >
                          <MessageSquare className="h-3.5 w-3.5" /> Chat on WhatsApp
                        </a>
                      </div>
                    </div>

                    {/* Email details */}
                    <div className="flex gap-4 items-start">
                      <div className="shrink-0 h-10 w-10 rounded-xl bg-[#0A3D62]/5 text-[#0A3D62] grid place-items-center">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">E-mail Queries</h4>
                        <p className="mt-1 text-base sm:text-lg font-extrabold text-[#0A3D62]">
                          <a href="mailto:info@shakthiacademy.com" className="hover:text-[#4DA8DA] transition">
                            info@shakthiacademy.com
                          </a>
                        </p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          For profile analysis, application submissions, and institutional partnerships.
                        </p>
                      </div>
                    </div>

                    {/* Address details */}
                    <div className="flex gap-4 items-start">
                      <div className="shrink-0 h-10 w-10 rounded-xl bg-[#0A3D62]/5 text-[#0A3D62] grid place-items-center">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">Address Details</h4>
                        <p className="mt-1.5 text-sm sm:text-base font-bold text-[#0A3D62] leading-relaxed">
                          {CONTACT_LOCATION.addressLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                          {CONTACT_LOCATION.areaDescription}
                        </p>
                      </div>
                    </div>

                    {/* Business hours */}
                    <div className="flex gap-4 items-start pt-4 border-t border-slate-100">
                      <div className="shrink-0 h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 grid place-items-center">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">Office Hours</h4>
                        <p className="mt-1 text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                          Monday – Saturday: 10:00 AM – 6:30 PM (IST)
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE FORM */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-3xl border border-slate-100 p-6 md:p-8 bg-white shadow-soft">
                  <h2 className="text-2xl font-extrabold text-[#0A3D62] mb-2">Send Us a Message</h2>
                  <p className="text-sm text-slate-500 mb-8">
                    Fill out the form details below and one of our dedicated counselors will contact you shortly.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 text-center text-emerald-800"
                    >
                      <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto mb-4 animate-bounce" />
                      <h3 className="text-lg font-bold">Message Sent Successfully!</h3>
                      <p className="mt-2 text-sm text-emerald-700/90 leading-relaxed">
                        Thank you for reaching out to Shakthi Academy. We have received your query and our study
                        abroad specialists will get in touch with you within 24 business hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-5 text-xs font-bold underline text-emerald-800 hover:text-emerald-950"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-[#4DA8DA] focus:bg-white focus:ring-2 focus:ring-[#4DA8DA]/20"
                        />
                      </div>

                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="sm:col-span-1">
                          <label htmlFor="countryCode" className="block text-sm font-semibold text-slate-700 mb-2">
                            Code
                          </label>
                          <div className="relative">
                            <select
                                id="countryCode"
                                value={formData.countryCode}
                                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 pr-9 py-3.5 text-sm outline-none transition focus:border-[#4DA8DA] focus:bg-white focus:ring-2 focus:ring-[#4DA8DA]/20"
                            >
                              {countryCodes.map((item) => (
                                <option key={item.code} value={item.code}>
                                  {item.label}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Phone number"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-[#4DA8DA] focus:bg-white focus:ring-2 focus:ring-[#4DA8DA]/20"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                          E-mail
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@domain.com"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-[#4DA8DA] focus:bg-white focus:ring-2 focus:ring-[#4DA8DA]/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                          Subject
                        </label>
                        <div className="relative">
                          <select
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 pl-4 pr-10 py-3.5 text-sm outline-none transition focus:border-[#4DA8DA] focus:bg-white focus:ring-2 focus:ring-[#4DA8DA]/20"
                          >
                            {subjects.map((subj) => (
                              <option key={subj} value={subj}>
                                {subj}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                          Text message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we assist you?"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-[#4DA8DA] focus:bg-white focus:ring-2 focus:ring-[#4DA8DA]/20 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold py-4 shadow-glow hover:opacity-95 disabled:opacity-75 transition cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Sending message...</span>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            <span>Submit Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
            
          </div>

          {/* FAQ SECTION */}
          <div className="mt-16 md:mt-24 border-t border-slate-100 pt-16">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="section-eyebrow">Got Questions?</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                  Frequently Asked Questions
                </h2>
                <p className="mt-3 text-slate-500 text-sm sm:text-base">
                  Get quick answers to the most common queries before scheduling your free counseling slot.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, idx) => (
                  <FAQAccordionItem
                    key={idx}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaqIdx === idx}
                    onToggle={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                  />
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

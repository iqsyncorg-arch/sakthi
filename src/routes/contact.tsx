import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Minus,
  Phone,
  Plus,
  Send,
  Sparkles,
} from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { apiSubmitInquiry } from "../lib/api/cms.api";
import contactHero from "../assets/contact-hero-new.jpg";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_PRIMARY,
  CONTACT_PHONES,
  WHATSAPP_NUMBER,
} from "../data/brand";
import { useT } from "../i18n";
import { contactCountryCodes, contactFaqCount } from "../data/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Shakthi Academy" },
      {
        name: "description",
        content: `Contact Shakthi Academy in ${CONTACT_LOCATION.city}. Call, email, WhatsApp, or visit our office for programmes, admissions, and career guidance.`,
      },
    ],
  }),
  component: ContactPage,
});

function FAQAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-100 rounded-2xl bg-white shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-slate-50/50 transition"
      >
        <span className="font-extrabold text-[#0A3D62] text-sm sm:text-base">{question}</span>
        <div
          className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
            isOpen ? "bg-[#0A3D62] text-white" : "bg-[#0A3D62]/5 text-[#0A3D62]"
          }`}
        >
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
  const { t } = useT();
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    subject: "",
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
        formName: "Contact Us",
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
        subject: "",
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

      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={contactHero}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62]/92 via-[#0A3D62]/85 to-[#4DA8DA]/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/15">
              <Sparkles className="h-3.5 w-3.5 text-[#F4B400]" />
              {t("contact.hero.eyebrow")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {t("contact.hero.title")}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              {t("contactBody.intro")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-6 py-3 shadow-glow hover:opacity-95 transition"
              >
                {t("actions.sendMessage")}
              </a>
              {CONTACT_PHONE_PRIMARY ? (
                <a
                  href={`tel:${CONTACT_PHONE_PRIMARY.tel}`}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 text-white text-sm font-bold px-6 py-3 hover:bg-white/10 transition"
                >
                  <Phone className="h-4 w-4 text-[#F4B400]" />
                          {t("actions.callUs")}
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-5">
              <Reveal>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
                  <h2 className="text-xl font-extrabold text-[#0A3D62] mb-6 pb-4 border-b border-slate-100">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    {CONTACT_PHONES.length > 0 ? (
                      <div className="flex gap-4 items-start">
                        <div className="shrink-0 h-10 w-10 rounded-xl bg-[#4DA8DA]/15 text-[#0A3D62] grid place-items-center">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-sm">Phone</h3>
                          <div className="mt-1 flex flex-col gap-1">
                            {CONTACT_PHONES.map((phone) => (
                              <a
                                key={phone.tel}
                                href={`tel:${phone.tel}`}
                                className="text-base font-extrabold text-[#0A3D62] hover:text-[#4DA8DA] transition"
                              >
                                {phone.display}
                              </a>
                            ))}
                          </div>
                          <p className="text-xs text-slate-500 mt-1">Mon–Sat, 10 AM – 6:30 PM</p>
                          {WHATSAPP_NUMBER ? (
                            <a
                              href={`https://wa.me/${WHATSAPP_NUMBER}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3.5 py-2 rounded-xl mt-3 transition"
                            >
                              <MessageSquare className="h-3.5 w-3.5" />
                              Chat on WhatsApp
                            </a>
                          ) : null}
                        </div>
                      </div>
                    ) : null}

                    <div className="flex gap-4 items-start">
                      <div className="shrink-0 h-10 w-10 rounded-xl bg-[#4DA8DA]/15 text-[#0A3D62] grid place-items-center">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm">Email</h3>
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="mt-1 block text-base font-extrabold text-[#0A3D62] hover:text-[#4DA8DA] transition"
                        >
                          {CONTACT_EMAIL}
                        </a>
                        <p className="text-xs text-slate-500 mt-1">
                          Admissions, programmes, and partnerships
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="shrink-0 h-10 w-10 rounded-xl bg-[#4DA8DA]/15 text-[#0A3D62] grid place-items-center">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm">Address</h3>
                        <p className="mt-1.5 text-sm font-bold text-[#0A3D62] leading-relaxed">
                          {CONTACT_LOCATION.addressLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                        {CONTACT_LOCATION.areaDescription ? (
                          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                            {CONTACT_LOCATION.areaDescription}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex gap-4 items-start pt-4 border-t border-slate-100">
                      <div className="shrink-0 h-10 w-10 rounded-xl bg-[#F4B400]/15 text-[#0A3D62] grid place-items-center">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm">{t("contact.hours.title")}</h3>
                        <p className="mt-1 text-sm text-slate-600 font-semibold leading-relaxed">
                          {t("contactBody.officeHours.weekdays")}
                          <br />
                          {t("contactBody.officeHours.sunday")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div id="contact-form" className="lg:col-span-7 scroll-mt-28">
              <Reveal>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
                  <h2 className="text-2xl font-extrabold text-[#0A3D62] mb-2">{t("contact.form.title")}</h2>
                  <p className="text-sm text-slate-500 mb-8">
                    Fill in the form and a counselor will get back to you shortly.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 text-center text-emerald-800"
                    >
                      <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                      <h3 className="text-lg font-bold">{t("contact.form.success")}</h3>
                      <p className="mt-2 text-sm text-emerald-700/90 leading-relaxed">
                        Thank you for contacting Shakthi Academy. Our team will respond within 24
                        business hours.
                      </p>
                      <button
                        type="button"
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
                          {t("contact.form.name")}
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
                        <div>
                          <label
                            htmlFor="countryCode"
                            className="block text-sm font-semibold text-slate-700 mb-2"
                          >
                            Code
                          </label>
                          <div className="relative">
                            <select
                              id="countryCode"
                              value={formData.countryCode}
                              onChange={(e) =>
                                setFormData({ ...formData, countryCode: e.target.value })
                              }
                              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 pr-9 py-3.5 text-sm outline-none transition focus:border-[#4DA8DA] focus:bg-white focus:ring-2 focus:ring-[#4DA8DA]/20"
                            >
                              {contactCountryCodes.map((code) => (
                                <option key={code} value={code}>
                                  {t(`contactBody.countries.${code}`)}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-slate-700 mb-2"
                          >
                            {t("contact.form.phone")}
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
                          {t("contact.form.email")}
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
                        <label
                          htmlFor="subject"
                          className="block text-sm font-semibold text-slate-700 mb-2"
                        >
                          {t("contact.form.subject")}
                        </label>
                        <input
                          id="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="What is your enquiry about?"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-[#4DA8DA] focus:bg-white focus:ring-2 focus:ring-[#4DA8DA]/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-slate-700 mb-2"
                        >
                          {t("contact.form.message")}
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
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold py-4 shadow-glow hover:opacity-95 disabled:opacity-75 transition"
                      >
                        {isSubmitting ? (
                          <span>{t("actions.submitting")}</span>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            <span>{t("actions.sendMessage")}</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 md:mt-20 pt-12 border-t border-slate-200/80">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="section-eyebrow">{t("contact.faq.eyebrow")}</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                  {t("contact.faq.title")}
                </h2>
                <p className="mt-3 text-slate-500 text-sm sm:text-base">
                  Quick answers before you call or visit the campus.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="max-w-4xl mx-auto space-y-4">
                {Array.from({ length: contactFaqCount }, (_, idx) => (
                  <FAQAccordionItem
                    key={idx}
                    question={t(`contactBody.faqs.${idx}.question`)}
                    answer={t(`contactBody.faqs.${idx}.answer`)}
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

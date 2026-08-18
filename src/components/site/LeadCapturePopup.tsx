import { useState, useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, GraduationCap, Mail, Phone, User, X } from "lucide-react";
import { apiSubmitInquiry } from "../../lib/api/cms.api";
import { CONTACT_PHONE_PRIMARY } from "../../data/brand";
import { useT } from "../../i18n";

const STORAGE_KEY = "edges-lead-submitted";
const DISMISSED_KEY = "edges-lead-popup-dismissed";

const hiddenPaths = ["/contact", "/admin"];

export function LeadCapturePopup() {
  const { t } = useT();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(() =>
    typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "1",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  const shouldHide =
    hiddenPaths.some((path) => location.pathname === path || location.pathname.startsWith(`${path}/`));

  const handleToggle = () => {
    setOpen((v) => {
      const next = !v;
      if (!next) {
        sessionStorage.setItem(DISMISSED_KEY, "1");
      }
      return next;
    });
  };

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  };

  useEffect(() => {
    if (submitted || shouldHide) return;
    if (typeof window !== "undefined" && sessionStorage.getItem(DISMISSED_KEY) === "1") return;

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [submitted, shouldHide]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await apiSubmitInquiry({
        formName: "Lead Capture Popup",
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.interest,
        message: `Lead captured via site popup on ${location.pathname}.`,
      });
      setSubmitted(true);
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (err) {
      console.error("Lead capture submission failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (shouldHide) return null;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-labelledby="lead-capture-title"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed bottom-[234px] right-6 z-[60] w-[min(calc(100vw-3rem),350px)] max-h-[min(70vh,520px)] overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100 flex flex-col"
          >
            <div className="gradient-primary px-4 py-4 text-white relative overflow-hidden shrink-0">
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#F4B400]/20 blur-2xl" />
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-3 top-3 z-20 h-8 w-8 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition cursor-pointer"
                aria-label={t("leadCapture.closeAria")}
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative z-10 flex items-start gap-2.5 pr-10">
                <div className="h-9 w-9 rounded-xl bg-white/15 grid place-items-center shrink-0">
                  <GraduationCap className="h-4 w-4 text-[#F4B400]" />
                </div>
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-widest text-white/75">
                    {t("leadCapture.eyebrow")}
                  </p>
                  <h2 id="lead-capture-title" className="mt-0.5 text-base font-extrabold leading-tight">
                    {t("leadCapture.title")}
                  </h2>
                  <p className="mt-1 text-xs text-white/85 leading-relaxed">{t("leadCapture.subtitle")}</p>
                </div>
              </div>
            </div>

            <div className="p-4 overflow-y-auto">
              {submitted ? (
                <div className="text-center py-4">
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 grid place-items-center mb-4">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-extrabold text-[#0A3D62] text-lg">{t("leadCapture.successTitle")}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{t("leadCapture.successBody")}</p>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-6 w-full rounded-xl bg-[#0A3D62] text-white text-sm font-bold py-3 hover:bg-[#0A3D62]/90 transition"
                  >
                    {t("actions.close")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">
                      {t("leadCapture.name")}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder={t("leadCapture.namePlaceholder")}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">
                        {t("leadCapture.email")}
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder={t("leadCapture.emailPlaceholder")}
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">
                        {t("leadCapture.phone")}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder={t("leadCapture.phonePlaceholder")}
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">
                      {t("leadCapture.interest")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("leadCapture.interestPlaceholder")}
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-primary text-white text-xs font-bold py-2.5 shadow-glow hover:opacity-95 transition disabled:opacity-60"
                  >
                    {isSubmitting ? t("leadCapture.submitting") : t("leadCapture.submit")}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </button>

                  <p className="text-[10px] text-center text-slate-400 leading-relaxed">
                    {CONTACT_PHONE_PRIMARY ? (
                      <>
                        {t("leadCapture.callUs")}{" "}
                        <a
                          href={`tel:${CONTACT_PHONE_PRIMARY.tel}`}
                          className="font-semibold text-[#4DA8DA] hover:underline"
                        >
                          {CONTACT_PHONE_PRIMARY.display}
                        </a>
                      </>
                    ) : (
                      t("leadCapture.successBody")
                    )}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!submitted && (
        <div className="fixed bottom-[168px] right-6 z-50 group">
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-white border border-slate-100 shadow-lg text-slate-800 text-xs font-extrabold rounded-xl px-4 py-2.5 shrink-0 select-none whitespace-nowrap">
            {t("leadCapture.floatingTooltip")}
          </div>
          <button
            type="button"
            onClick={handleToggle}
            aria-label={t("leadCapture.floatingAria")}
            className={`relative h-14 w-14 rounded-full flex items-center justify-center shadow-glow shrink-0 transition ${
              open
                ? "bg-[#0A3D62] text-white"
                : "bg-gradient-to-tr from-[#F4B400] to-amber-500 text-[#0A3D62]"
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <GraduationCap className="h-6 w-6" />}
          </button>
        </div>
      )}
    </>
  );
}

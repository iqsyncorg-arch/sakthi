import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown, Send, Upload } from "lucide-react";
import { apiSubmitInquiry } from "../../lib/api/cms.api";
import {
  areaOfInterestOptions,
  programmeOptions,
  qualificationOptions,
} from "../../data/portals";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-[#4DA8DA] focus:bg-white focus:ring-2 focus:ring-[#4DA8DA]/20";

const labelClass = "block text-sm font-semibold text-slate-700 mb-2";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  location: "",
  age: "",
  qualification: qualificationOptions[0],
  areaOfInterest: areaOfInterestOptions[0],
  programme: programmeOptions[0],
  message: "",
};

function buildApplicationMessage(form: typeof initialForm, documentName?: string) {
  return [
    `Location: ${form.location}`,
    `Age: ${form.age}`,
    `Qualification: ${form.qualification}`,
    `Area of interest: ${form.areaOfInterest}`,
    `Programme/Service: ${form.programme}`,
    documentName ? `Document uploaded: ${documentName}` : null,
    "",
    form.message ? `Additional message:\n${form.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export function AdmissionsApplicationForm() {
  const [form, setForm] = useState(initialForm);
  const [documentName, setDocumentName] = useState<string | undefined>();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiSubmitInquiry({
        formName: "Admissions Application",
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: `${form.programme} — ${form.areaOfInterest}`,
        message: buildApplicationMessage(form, documentName),
      });
      setSubmitted(true);
      setForm(initialForm);
      setDocumentName(undefined);
    } catch (err) {
      console.error("Admissions application failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-emerald-50 border border-emerald-100 p-8 text-center text-emerald-800"
      >
        <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-lg font-bold">Application Submitted Successfully!</h3>
        <p className="mt-2 text-sm text-emerald-700/90 leading-relaxed max-w-md mx-auto">
          Thank you for applying to Shakthi Academy. Our admissions team will review your details and
          contact you within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-xs font-bold underline text-emerald-800 hover:text-emerald-950"
        >
          Submit another application
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="adm-name" className={labelClass}>
            Name *
          </label>
          <input
            id="adm-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="adm-phone" className={labelClass}>
            Mobile number *
          </label>
          <input
            id="adm-phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 ..."
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="adm-email" className={labelClass}>
            Email *
          </label>
          <input
            id="adm-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@email.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="adm-location" className={labelClass}>
            Location *
          </label>
          <input
            id="adm-location"
            type="text"
            required
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            placeholder="City, State"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="adm-age" className={labelClass}>
            Age *
          </label>
          <input
            id="adm-age"
            type="number"
            required
            min={5}
            max={99}
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            placeholder="Your age"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="adm-qualification" className={labelClass}>
            Qualification *
          </label>
          <div className="relative">
            <select
              id="adm-qualification"
              required
              value={form.qualification}
              onChange={(e) => setForm({ ...form, qualification: e.target.value })}
              className={`${inputClass} appearance-none pr-9`}
            >
              {qualificationOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="adm-interest" className={labelClass}>
            Area of interest *
          </label>
          <div className="relative">
            <select
              id="adm-interest"
              required
              value={form.areaOfInterest}
              onChange={(e) => setForm({ ...form, areaOfInterest: e.target.value })}
              className={`${inputClass} appearance-none pr-9`}
            >
              {areaOfInterestOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
          </div>
        </div>
        <div>
          <label htmlFor="adm-programme" className={labelClass}>
            Programme / service required *
          </label>
          <div className="relative">
            <select
              id="adm-programme"
              required
              value={form.programme}
              onChange={(e) => setForm({ ...form, programme: e.target.value })}
              className={`${inputClass} appearance-none pr-9`}
            >
              {programmeOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="adm-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="adm-message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your goals, preferred intake, or any questions..."
          className={`${inputClass} resize-y min-h-[100px]`}
        />
      </div>

      <div>
        <label htmlFor="adm-document" className={labelClass}>
          Resume / document upload
        </label>
        <label
          htmlFor="adm-document"
          className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 px-4 py-6 text-center transition hover:border-[#4DA8DA]/50 hover:bg-white"
        >
          <Upload className="h-5 w-5 text-[#4DA8DA]" />
          <span className="text-sm font-semibold text-[#0A3D62]">
            {documentName ?? "Choose PDF, DOC, or image file"}
          </span>
          <span className="text-xs text-slate-500">Optional — max 5 MB. Our team may request the file by email.</span>
          <input
            id="adm-document"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) {
                setDocumentName(undefined);
                return;
              }
              if (file.size > 5 * 1024 * 1024) {
                alert("File must be 5 MB or smaller.");
                e.target.value = "";
                setDocumentName(undefined);
                return;
              }
              setDocumentName(file.name);
            }}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl gradient-primary text-white text-sm font-bold px-8 py-3.5 shadow-glow hover:opacity-95 transition disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
        {!isSubmitting && <Send className="h-4 w-4" />}
      </button>
    </form>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { CONTACT_PHONE_PRIMARY } from "../data/brand";
import { useT } from "../i18n";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Shakthi Academy" },
      {
        name: "description",
        content:
          "Read how Shakthi Academy collects, uses, and protects your personal information when you use our study abroad counseling services.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  {
    title: "Information Collection",
    content:
      "We may collect the following types of personal information from you:",
    list: [
      "Name",
      "Contact information (address, email, phone number)",
      "Educational background",
      "Financial information (if applicable)",
      "Passport details",
      "Other information you provide through our website, email, or in-person interactions",
    ],
  },
  {
    title: "Purpose of Collection",
    content: "We collect your personal information to:",
    list: [
      "Facilitate your application for overseas education",
      "Provide counseling services",
      "Process visa applications",
      "Share information with educational institutions",
      "Respond to your inquiries",
    ],
  },
  {
    title: "Information Sharing",
    content: "We may share your personal information with:",
    list: [
      "Educational institutions you have applied to",
      "Visa agencies",
      "Other service providers as necessary to fulfill your application requirements",
    ],
    footer:
      "We will not sell or rent your personal information to third parties for marketing purposes.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.",
  },
  {
    title: "User Rights",
    content: "You have the right to:",
    list: [
      "Access and correct your personal information",
      "Request the deletion of your personal information",
      "Opt out of marketing communications",
    ],
  },
  {
    title: "Cookies and Tracking",
    content:
      "We use cookies and similar tracking technologies to collect information about your use of our website. You can manage your cookie preferences through your browser settings.",
  },
  {
    title: "Children's Privacy",
    content:
      "Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.",
  },
  {
    title: "Changes to the Policy",
    content:
      "We may update this privacy policy from time to time. We will notify you of any significant changes by posting the updated policy on our website.",
  },
];

function PrivacyPolicyPage() {
  const { t } = useT();
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62] via-slate-950 to-slate-900" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#4DA8DA]/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              {t("services.privacy.title")}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
              Shakthi Academy (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy.
              This privacy policy outlines how we collect, use, and share your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <div className="space-y-8">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-soft"
                >
                  <h2 className="text-xl font-extrabold text-[#0A3D62]">{section.title}</h2>
                  <p className="mt-3 text-slate-600 leading-relaxed">{section.content}</p>
                  {section.list && (
                    <ul className="mt-4 space-y-2">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DA8DA]" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.footer && (
                    <p className="mt-4 text-slate-600 leading-relaxed">{section.footer}</p>
                  )}
                </div>
              ))}

              <div className="rounded-2xl gradient-primary p-6 md:p-8 text-white shadow-glow">
                <h2 className="text-xl font-extrabold">Contact Information</h2>
                <p className="mt-3 text-white/85 leading-relaxed">
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <ul className="mt-5 space-y-3 text-sm">
                  <li className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-[#F4B400] shrink-0" />
                    <a href="mailto:info@shakthiacademy.com" className="hover:underline">
                      info@shakthiacademy.com
                    </a>
                  </li>
                  {CONTACT_PHONE_PRIMARY ? (
                    <li className="flex items-center gap-2.5">
                      <Phone className="h-4 w-4 text-[#F4B400] shrink-0" />
                      <a href={`tel:${CONTACT_PHONE_PRIMARY.tel}`} className="hover:underline">
                        {CONTACT_PHONE_PRIMARY.display}
                      </a>
                    </li>
                  ) : null}
                </ul>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed text-center">
                By using our website or providing your personal information, you consent to the collection,
                use, and sharing of your information as described in this privacy policy.{" "}
                <Link to="/contact" className="font-semibold text-[#4DA8DA] hover:underline">
                  Contact us
                </Link>{" "}
                if you have any concerns.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

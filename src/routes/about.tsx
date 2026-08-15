import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { AboutAcademySections } from "../components/site/AboutAcademySections";
import { AboutFeatureCard } from "../components/site/AboutFeatureCard";
import aboutHeroBg from "../assets/about-hero-bg.png";
import { CONTACT_PHONE_PRIMARY } from "../data/brand";
import { aboutIntro } from "../data/about-academy";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shakthi Academy — Vision, Mission & 3E Philosophy" },
      {
        name: "description",
        content:
          "Learn about Shakthi Academy — our purpose, background, vision, mission, core values, objectives, 3E philosophy, and long-term growth vision.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative min-h-screen flex items-center px-4 pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHeroBg}
            alt=""
            className="h-full w-full object-cover object-right grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/50 via-neutral-900/25 to-neutral-950/10" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <AboutFeatureCard
              eyebrow="About Shakthi Academy"
              title={
                <>
                  <span className="text-white">Built for learners. </span>
                  <span className="text-[#4DA8DA]">Trusted </span>
                  <span className="text-[#F4B400]">worldwide.</span>
                </>
              }
              description={aboutIntro}
              actions={
                <>
                  <a
                    href="#about-content"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-5 sm:px-6 py-3 shadow-glow hover:opacity-95 transition"
                  >
                    Explore Our Story
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0A3D62] text-[#F4B400]">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                  {CONTACT_PHONE_PRIMARY ? (
                    <a
                      href={`tel:${CONTACT_PHONE_PRIMARY.tel}`}
                      className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#F4B400] text-white text-sm font-bold px-5 sm:px-6 py-3 hover:bg-[#F4B400]/10 transition"
                    >
                      <Phone className="h-4 w-4 text-[#F4B400]" />
                      Book Free Consultation
                    </a>
                  ) : (
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#F4B400] text-white text-sm font-bold px-5 sm:px-6 py-3 hover:bg-[#F4B400]/10 transition"
                    >
                      Contact Us
                    </a>
                  )}
                </>
              }
              className="max-w-2xl lg:max-w-3xl"
            />
          </motion.div>
        </div>
      </section>

      <AboutAcademySections showHeader={false} sectionId="about-content" />

      <Footer />
    </div>
  );
}

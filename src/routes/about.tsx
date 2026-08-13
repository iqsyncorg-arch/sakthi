import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Target, Eye, Flame, Trophy, ArrowRight, Quote, CheckCircle2,
  Globe2, Users, GraduationCap, ShieldCheck, UserCheck, School,
  FileText, Stamp, Plane, Home, Award, Network, TrendingUp, Layers,
  Sparkles, HeartHandshake, Phone,
} from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import aboutImg from "../assets/about-hero-new.png";
import { medicalMarqueeNames, otherProgramPartnersOnly } from "../data/partner-marquee";
import { COMPANY_NAME, CONTACT_PHONE_PRIMARY } from "../data/brand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shakthi Academy — Igniting Excellence in Global Education" },
      { name: "description", content: "Discover the Shakthi Academy story — born from passion, driven by student success. Mission, vision, and end-to-end overseas education support tailored to you." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "Partnering with students to create seamless and rewarding overseas education experiences, tailored to their individual goals and needs.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be the premier global education platform, empowering students to excel academically and professionally, and fostering a lifelong love of learning.",
  },
  {
    icon: Flame,
    title: "Our Promise",
    desc: "We ignite excellence. Beyond finding you a course, we craft an educational odyssey tailored to your unique profile — matching the ideal program and country to the career path that lights a fire in you.",
  },
];

const carePoints = [
  {
    icon: ShieldCheck,
    title: "Safety & Wellbeing",
    desc: "Your security abroad matters. We guide you on safe neighborhoods, local norms, and resources so you can focus on your studies with peace of mind.",
  },
  {
    icon: HeartHandshake,
    title: "Cultural Comfort",
    desc: "From preferred food options to community connections, we help you feel at home in a new country from day one.",
  },
  {
    icon: Home,
    title: "Housing That Fits",
    desc: "We go the extra mile to find accommodation that meets your needs and expectations — not just a place to stay, but a place to thrive.",
  },
  {
    icon: Layers,
    title: "With You Every Step",
    desc: "Our support doesn't end at admission. We're beside you until you're fully settled into your new academic journey with complete satisfaction.",
  },
];

const services = [
  {
    icon: UserCheck,
    title: "Personalized Counseling",
    desc: "Every student is unique. Our counselors assess your academic profile, career goals, and preferences to recommend the best-suited universities and courses.",
  },
  {
    icon: School,
    title: "University Selection",
    desc: "With in-depth knowledge of universities worldwide, we help you choose the right institution based on your aspirations, budget, and long-term ambitions.",
  },
  {
    icon: FileText,
    title: "Application Assistance",
    desc: "We guide you through every step — essay writing, letters of recommendation, financial aid applications, and documentation that stands out.",
  },
  {
    icon: Stamp,
    title: "Visa Guidance",
    desc: "Our experts provide comprehensive visa support, from document preparation to interview coaching, ensuring a smooth and confident application process.",
  },
  {
    icon: Plane,
    title: "Pre-Departure Orientation",
    desc: "We equip you with essential information about your destination — accommodation, cultural nuances, student life, and what to expect before you fly.",
  },
  {
    icon: Home,
    title: "Post-Landing Support",
    desc: "Our support extends beyond admission — assistance with accommodation, bank accounts, local registrations, and everything you need to settle in.",
  },
];

const whyChoose = [
  {
    icon: Award,
    title: "Expertise",
    desc: "Our team comprises experienced counselors with in-depth knowledge of the global education landscape and evolving admission trends.",
  },
  {
    icon: Sparkles,
    title: "Personalized Approach",
    desc: "We treat every student as an individual. No cookie-cutter advice — only strategies shaped around your profile, goals, and dreams.",
  },
  {
    icon: Network,
    title: "Strong University Network",
    desc: "Established partnerships with renowned universities worldwide give you access to opportunities that align with your ambitions.",
  },
  {
    icon: TrendingUp,
    title: "High Success Rate",
    desc: "Our track record speaks for itself — numerous students have successfully pursued their overseas education dreams with Shakthi Academy by their side.",
  },
  {
    icon: CheckCircle2,
    title: "Comprehensive Support",
    desc: "End-to-end assistance from your first counseling session to the moment you're settled abroad. One partner, every step covered.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutImg}
            alt="The Shakthi Academy story — passion ignited"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white mb-6 border border-white/10"
            >
              <Flame className="h-3.5 w-3.5 text-[#F4B400]" />
              The Shakthi Academy Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white"
            >
              Inspiring Minds.{" "}
              <span className="bg-gradient-to-r from-[#4DA8DA] to-amber-300 bg-clip-text text-transparent">
                Igniting Potential.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-lg text-slate-200 max-w-xl leading-relaxed"
            >
              {COMPANY_NAME} wasn't born in a boardroom — it emerged from a spark of passion to make the student journey abroad not just efficient, but truly inspirational.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#our-story" className="inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-5 py-3 shadow-glow hover:translate-y-[-1px] transition">
                Read Our Story <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-sm font-semibold px-5 py-3 border border-white/20 hover:bg-white/15 transition">
                Book Free Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-eyebrow">What drives us</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]">
                Vision & Mission
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl p-7 bg-white border border-slate-100 shadow-soft hover:-translate-y-1 transition">
                  <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center text-white shadow-glow">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#0A3D62]">{v.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY — PASSION IGNITED */}
      <section id="our-story" className="py-24 bg-slate-50/60 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <span className="section-eyebrow">The story of Shakthi Academy</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62] leading-tight">
                Born from experience, built for students
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Witnessing the challenges students faced during my time as a Senior Client Relations Manager at an overseas education company, I saw a clear opportunity to do better. Students deserved more than transactional advice — they deserved a partner who genuinely cared about their journey.
                </p>
                <p>
                  Shakthi Academy emerged from a deep desire to transform how students experience studying abroad. We don't just find you a course — we identify the perfect career path that lights a fire in you, then match you with the ideal program and country to achieve your goals.
                </p>
                <p>
                  Our experienced team makes the entire process simple and effective. We understand that safety, finding preferred food, and comfortable housing are crucial for your success — not afterthoughts, but foundations of a great experience.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#4DA8DA]/20 to-[#F4B400]/20 blur-2xl" />
                <div className="relative rounded-3xl bg-white border border-slate-100 shadow-soft p-8 md:p-10">
                  <Quote className="h-10 w-10 text-[#F4B400]" />
                  <p className="mt-5 text-xl font-medium text-[#0A3D62] leading-relaxed">
                    "We go beyond admissions. We're with you every step of the way — until you're settled into your new academic journey with complete satisfaction."
                  </p>
                  <div className="mt-6 flex items-center gap-3 pt-6 border-t border-slate-100">
                    <div className="h-12 w-12 rounded-full gradient-primary text-white grid place-items-center font-bold text-lg">
                      E
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A3D62]">The Shakthi Academy Team</p>
                      <p className="text-sm text-slate-500">Student-first, always</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WE SWEAT THE SMALL STUFF */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="max-w-2xl">
              <span className="section-eyebrow">Beyond admissions</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]">
                We sweat the small stuff too
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                A successful study-abroad experience isn't just about getting in — it's about thriving once you're there. That's why we handle the details that matter most to you.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {carePoints.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl p-6 bg-slate-50 border border-slate-100 hover:border-[#4DA8DA]/30 hover:-translate-y-1 transition">
                  <div className="h-11 w-11 rounded-xl bg-[#0A3D62]/10 grid place-items-center text-[#0A3D62]">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-[#0A3D62]">{c.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW EDUCELLENT CAN HELP YOU */}
      <section className="py-24 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="section-eyebrow">How we help</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]">
                How Shakthi Academy can help you
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Shakthi Academy is committed to making your dream of studying abroad a reality. Our expert team provides comprehensive guidance and support throughout your entire journey.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl p-7 bg-white border border-slate-100 shadow-soft hover:-translate-y-1 hover:shadow-lg transition">
                  <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center text-white shadow-glow group-hover:scale-105 transition-transform">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#0A3D62]">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE EDUCELLENT */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="section-eyebrow">Why choose us</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]">
                The Shakthi Academy difference
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className={`h-full rounded-2xl p-7 border border-slate-100 shadow-soft hover:-translate-y-1 transition ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-11 w-11 rounded-xl bg-[#F4B400]/15 grid place-items-center text-[#0A3D62]">
                      <w.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A3D62]">{w.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="section-eyebrow">Global reach</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0A3D62]">
                A strong university network worldwide
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14 relative overflow-hidden rounded-3xl gradient-primary p-10 md:p-16 text-white">
              <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#F4B400]/30 blur-3xl" />
              <div className="relative grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <Globe2 className="h-12 w-12 text-[#F4B400]" />
                  <h3 className="mt-4 text-2xl font-bold">Your gateway to the world</h3>
                  <p className="mt-3 text-white/85">
                    With partnerships across direct medical and non-medical universities worldwide, we connect you to the program and country that best fits your ambitions.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      { i: GraduationCap, l: `${medicalMarqueeNames.length}+ medical partners` },
                      { i: School, l: `${otherProgramPartnersOnly.length}+ other programs` },
                    ].map((b, i) => (
                      <div key={i} className="rounded-xl bg-white/10 p-3 border border-white/15">
                        <b.i className="h-5 w-5 text-[#F4B400]" />
                        <p className="mt-2 text-xs font-semibold">{b.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="max-h-72 overflow-y-auto pr-2 space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#F4B400] mb-2">Medical universities</p>
                    <div className="flex flex-wrap gap-2">
                      {medicalMarqueeNames.map((u) => (
                        <span key={`${u.name}-${u.region}`} className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs">
                          {u.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#F4B400] mb-2">Other universities & programs</p>
                    <div className="flex flex-wrap gap-2">
                      {otherProgramPartnersOnly.map((u) => (
                        <span key={`${u.name}-${u.country}`} className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs">
                          {u.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Reveal>
            <Trophy className="h-12 w-12 text-[#F4B400] mx-auto" />
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[#0A3D62] leading-tight">
              Let us be your guiding light
            </h2>
            <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-relaxed">
              At Shakthi Academy, we believe that education is the key to unlocking your full potential. Embark on this exciting chapter of your life with a partner who is with you every step of the way.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${CONTACT_PHONE_PRIMARY.tel}`}
                className="inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-semibold px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

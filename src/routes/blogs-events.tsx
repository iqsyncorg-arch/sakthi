import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, Clock, ArrowRight, CheckCircle2,
  FileText, Video, X
} from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import { LiveAlertCenter } from "../components/site/LiveAlertCenter";
import { usePublicAnnouncements } from "../hooks/usePublicAnnouncements";
import { apiGetPublicContent, apiSubmitInquiry } from "../lib/api/cms.api";
import type { BlogPost, WebinarEvent } from "../lib/types/cms";
import { useT } from "../i18n";

export const Route = createFileRoute("/blogs-events")({
  head: () => ({
    meta: [
      { title: "Blogs & Events | Shakthi Academy" },
      { name: "description", content: "Stay updated with global education news, visa updates, university admissions blogs, and register for upcoming global webinars and events." },
      { property: "og:title", content: "Shakthi Academy Blogs, Insights & Webinars" },
      { property: "og:description", content: "Latest articles and register for international university events." },
    ],
  }),
  component: BlogsEventsPage,
});

const fallbackBlogs: BlogPost[] = [
  {
    id: "usa-f1-visa-guide",
    tag: "Visa Update",
    title: "Guide to US F-1 Student Visas for Fall Admissions",
    desc: "A comprehensive checklist detailing documentation, SEVIS fee payments, ds-160 processing, and mock question preparations for the US F-1 consular interview.",
    date: "June 25, 2026",
    readTime: "6 min read",
    author: "Admissions Team",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "mbbs-abroad-opportunities",
    tag: "MBBS Special",
    title: "Why Studying MBBS Abroad in Poland & Georgia is Rising",
    desc: "An in-depth look at WHO-approved medical schools, tuition costs, clinical internship structures, and MCI/NMC screening exam assistance in Europe.",
    date: "June 18, 2026",
    readTime: "5 min read",
    author: "Dr. R. Sharma",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "ielts-cracking-tips",
    tag: "Test Prep",
    title: "Cracking the IELTS: 5 Essential Tips to Score 8.0+ Band",
    desc: "Discover advanced grammar tips, structure tactics for Writing Task 2, vocabulary builders, and reading strategies that elite trainers use to push scores.",
    date: "June 10, 2026",
    readTime: "4 min read",
    author: "Certified IELTS Trainer",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=70"
  }
];

export const fallbackEvents: WebinarEvent[] = [
  {
    id: "uk-admissions-fair",
    title: "UK Admissions & Scholarship Fair 2026",
    date: "July 12, 2026",
    time: "4:00 PM - 6:00 PM IST",
    speaker: "UK University Representative Panel",
    platform: "Zoom Video Seminar",
    desc: "Interact directly with admission officers from elite UK universities. Learn about CAS letters, fast-track visa processing, and post-study work routes.",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "us-visa-masterclass",
    title: "F-1 Student Visa Interview Masterclass",
    date: "July 20, 2026",
    time: "5:30 PM - 7:00 PM IST",
    speaker: "Senior Visa Advisor, EDGE",
    platform: "Live Interactive Webinar",
    desc: "Learn how to answer tough consular questions about financial stability, ties to home country, and university choices. Real-time Q&A included.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=70"
  },
  {
    id: "germany-free-education",
    title: "Germany Tuition-Free Education Pathways",
    date: "August 05, 2026",
    time: "3:00 PM - 4:30 PM IST",
    speaker: "DAAD Alumni Council Panel",
    platform: "Virtual Event Lobby",
    desc: "Understand language proficiency requirements (German vs. English-medium), blocking account details, and public university application cycles.",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=70"
  }
];

function BlogsEventsPage() {
  const { t } = useT();
  const [activeTab, setActiveTab] = useState<"blogs" | "events">("blogs");
  const [blogsList, setBlogsList] = useState<BlogPost[]>(fallbackBlogs);
  const [eventsList, setEventsList] = useState<WebinarEvent[]>(fallbackEvents);
  const { announcements: liveAnnouncements } = usePublicAnnouncements();
  const [selectedEvent, setSelectedEvent] = useState<WebinarEvent | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", test: "IELTS" });
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    void apiGetPublicContent().then((content) => {
      setBlogsList(content.blogs);
      setEventsList(content.events);
    }).catch(() => {
      // Keep fallback blogs/events if API is unavailable
    });
  }, []);

  const tabMeta = {
    blogs: {
      label: "Latest Blogs & Articles",
      icon: FileText,
      title: "Expert insights for your study-abroad journey",
      subtitle: "Visa updates, admission guides, and test-prep strategies from our counseling team.",
      count: blogsList.length,
    },
    events: {
      label: "Webinars & Events",
      icon: Video,
      title: "Live sessions with university representatives",
      subtitle: "Register for free webinars on admissions, scholarships, and visa preparation.",
      count: eventsList.length,
    },
  } as const;

  const activeMeta = tabMeta[activeTab];
  const ActiveIcon = activeMeta.icon;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* Hero + integrated tab switcher */}
      <section className="relative pt-32 pb-28 md:pt-36 md:pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/85 to-slate-950" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
          <div className="max-w-2xl">
            <span className="section-eyebrow-dark">{t("services.blogsEvents.hero.eyebrow")}</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t("services.blogsEvents.hero.title")}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              {t("services.blogsEvents.hero.subtitle")}
            </p>
          </div>

          {/* Tab switcher — lives in hero, no sticky overlap */}
          <div className="mt-10 md:mt-12">
            <div
              role="tablist"
              aria-label="Content type"
              className="inline-flex w-full sm:w-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-1.5 shadow-lg"
            >
              {(["blogs", "events"] as const).map((tab) => {
                const meta = tabMeta[tab];
                const Icon = meta.icon;
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-white text-[#0A3D62] shadow-md"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="whitespace-nowrap">{meta.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Content shell — single card surface, clear separation from hero */}
      <main className="flex-1 relative z-10 -mt-14 md:-mt-16 pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-9">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white shadow-soft overflow-hidden">
            {/* Section header */}
            <div className="px-6 sm:px-8 md:px-10 pt-8 md:pt-10 pb-6 border-b border-slate-100 bg-gradient-to-r from-slate-50/80 to-white">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 rounded-xl bg-[#0A3D62]/10 text-[#0A3D62] flex items-center justify-center shrink-0">
                    <ActiveIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#4DA8DA]">
                      {activeMeta.label}
                    </p>
                    <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-[#0A3D62] leading-snug">
                      {activeMeta.title}
                    </h2>
                    <p className="mt-1.5 text-sm text-slate-500 max-w-2xl leading-relaxed">
                      {activeMeta.subtitle}
                    </p>
                  </div>
                </div>
                <span className="inline-flex self-start sm:self-auto items-center rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600">
                  {activeMeta.count} {activeTab === "blogs" ? "articles" : "upcoming events"}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <AnimatePresence mode="wait">
                {activeTab === "blogs" ? (
                  <motion.div
                    key="blogs"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
                  >
                    {blogsList.map((b, i) => (
                      <Reveal key={b.id} delay={i * 0.05} className="h-full">
                        <article className="group h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#4DA8DA]/30 hover:shadow-soft transition-all duration-300 flex flex-col">
                          <div className="aspect-[16/10] overflow-hidden relative shrink-0">
                            <img
                              src={b.img}
                              alt={b.title}
                              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                              loading="lazy"
                            />
                            <span className="absolute top-4 left-4 rounded-lg bg-slate-900/90 text-[#4DA8DA] text-[10px] font-extrabold px-2.5 py-1 uppercase tracking-wider">
                              {b.tag}
                            </span>
                          </div>

                          <div className="p-5 sm:p-6 flex flex-col flex-1 min-h-0">
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-slate-400">
                              <span className="inline-flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" /> {b.date}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" /> {b.readTime}
                              </span>
                            </div>

                            <h3 className="mt-3 font-extrabold text-[#0A3D62] text-base sm:text-lg group-hover:text-[#4DA8DA] transition-colors leading-snug line-clamp-2 min-h-[3rem]">
                              {b.title}
                            </h3>

                            <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
                              {b.desc}
                            </p>

                            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2 min-w-0">
                                <div className="h-8 w-8 rounded-full bg-[#0A3D62]/10 flex items-center justify-center text-[10px] font-bold text-[#0A3D62] uppercase shrink-0">
                                  {b.author.charAt(0)}
                                </div>
                                <span className="text-xs font-bold text-slate-500 truncate">{b.author}</span>
                              </div>
                              <a
                                href="/contact"
                                className="inline-flex items-center gap-1 text-xs font-bold text-[#4DA8DA] hover:text-[#0A3D62] transition-colors shrink-0"
                              >
                                Read Article <ArrowRight className="h-3.5 w-3.5" />
                              </a>
                            </div>
                          </div>
                        </article>
                      </Reveal>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="events"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
                  >
                    {eventsList.map((e, idx) => (
                      <Reveal key={e.id} delay={idx * 0.05} className="h-full">
                        <div className="h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-emerald-500/25 hover:shadow-soft transition-all duration-300 flex flex-col">
                          <div className="aspect-[16/10] overflow-hidden relative shrink-0">
                            <img
                              src={e.img}
                              alt={e.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <span className="absolute top-4 left-4 rounded-lg bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-1 uppercase tracking-wider">
                              Free Registration
                            </span>
                          </div>

                          <div className="p-5 sm:p-6 flex flex-col flex-1 min-h-0">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-500">
                              <span className="inline-flex items-center gap-1 text-[#0A3D62]">
                                <Calendar className="h-3.5 w-3.5 text-[#4DA8DA]" /> {e.date}
                              </span>
                              <span className="text-slate-300 hidden sm:inline">•</span>
                              <span className="font-bold">{e.time}</span>
                            </div>

                            <h3 className="mt-3 font-extrabold text-[#0A3D62] text-base sm:text-lg leading-snug line-clamp-2 min-h-[3rem]">
                              {e.title}
                            </h3>

                            <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-1.5">
                              <p className="text-xs text-slate-600 leading-snug line-clamp-1">
                                <span className="font-bold text-slate-800">Speaker:</span> {e.speaker}
                              </p>
                              <p className="text-xs text-slate-600 leading-snug line-clamp-1">
                                <span className="font-bold text-slate-800">Format:</span> {e.platform}
                              </p>
                            </div>

                            <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
                              {e.desc}
                            </p>

                            <button
                              type="button"
                              onClick={() => setSelectedEvent(e)}
                              className="mt-5 w-full rounded-xl bg-[#0A3D62] text-white hover:bg-[#4DA8DA] transition text-sm font-bold py-3"
                            >
                              Register Free Seat
                            </button>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
            </div>

            <aside className="lg:col-span-3 order-first lg:order-none lg:sticky lg:top-28">
              <LiveAlertCenter
                announcements={liveAnnouncements}
                variant="sidebar"
                title="Live Alerts"
              />
            </aside>
          </div>
        </div>
      </main>

      {/* REGISTRATION MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-gradient-to-tr from-[#0A3D62] to-[#4DA8DA] text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest">Webinar Ticket Booking</span>
                <h3 className="font-extrabold text-base leading-tight mt-0.5">Register for Seminar</h3>
              </div>
              <button
                onClick={() => {
                  setSelectedEvent(null);
                  setIsRegistered(false);
                }}
                className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="p-6">
              {!isRegistered ? (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                      await apiSubmitInquiry({
                        formName: "Webinars & Events",
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        subject: `Registration for ${selectedEvent.title}`,
                        message: `Event date: ${selectedEvent.date} at ${selectedEvent.time}. Speaker: ${selectedEvent.speaker}.`,
                      });
                      setIsRegistered(true);
                    } catch (err) {
                      console.error("Failed to save registration", err);
                    }
                  }}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Selected Event</p>
                    <p className="font-extrabold text-[#0A3D62] text-sm mt-0.5 leading-snug">{selectedEvent.title}</p>
                    <p className="text-xs text-slate-500 mt-1 font-semibold">{selectedEvent.date} • {selectedEvent.time}</p>
                  </div>
                  
                  <hr className="border-slate-100" />
                  
                  <div className="flex flex-col gap-1">
                    <label htmlFor="modal-name" className="text-xs font-bold text-slate-500">Full Name</label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl border border-slate-100 bg-slate-50/50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label htmlFor="modal-email" className="text-xs font-bold text-slate-500">Email Address</label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl border border-slate-100 bg-slate-50/50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label htmlFor="modal-phone" className="text-xs font-bold text-slate-500">Phone Number (WhatsApp)</label>
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      placeholder="Enter mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl border border-slate-100 bg-slate-50/50 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 transition shadow-md"
                  >
                    Confirm Free Booking
                  </button>
                </form>
              ) : (
                <div className="py-6 text-center flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="font-extrabold text-[#0A3D62] text-lg">Registration Successful!</h4>
                  <p className="text-sm text-slate-600 mt-2 max-w-xs leading-relaxed mx-auto">
                    Hi {formData.name}, we have reserved your seat. The seminar webinar access link will be sent to your WhatsApp number ({formData.phone}) before the event!
                  </p>
                  
                  <button
                    onClick={() => {
                      setSelectedEvent(null);
                      setIsRegistered(false);
                      setFormData({ name: "", email: "", phone: "", test: "IELTS" });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition text-sm font-bold"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

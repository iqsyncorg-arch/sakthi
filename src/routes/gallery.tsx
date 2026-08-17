import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Images, X } from "lucide-react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { Reveal } from "../components/site/Reveal";
import galleryHeroBg from "../assets/gallery-hero.jpg";
import {
  galleryCategories,
  galleryCta,
  galleryHero,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "../data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Shakthi Academy" },
      {
        name: "description",
        content:
          "Explore campus life at Shakthi Academy — classrooms, student moments, community and celebrations in our photo gallery.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={galleryHeroBg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62]/92 via-[#0A3D62]/85 to-[#4DA8DA]/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white mb-5 border border-white/15">
              <Images className="h-3.5 w-3.5 text-[#F4B400]" />
              {galleryHero.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {galleryHero.titleLead}{" "}
              <span className="text-[#F4B400]">{galleryHero.titleAccent}</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              {galleryHero.intro}
            </p>
            <a
              href="#gallery-grid"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-6 py-3 shadow-glow hover:opacity-95 transition"
            >
              Browse Photos <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="gallery-grid" className="py-14 md:py-20 bg-slate-50/60 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {galleryCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition ${
                      isActive
                        ? "bg-[#0A3D62] text-white shadow-sm"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-[#4DA8DA]/40 hover:text-[#0A3D62]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={Math.min(i * 0.03, 0.24)}>
                <button
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="group relative w-full break-inside-avoid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4DA8DA]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                      item.span === "tall"
                        ? "aspect-[3/4]"
                        : item.span === "wide"
                          ? "aspect-[16/10]"
                          : "aspect-[4/3]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/80 via-[#0A3D62]/10 to-transparent opacity-80 group-hover:opacity-95 transition" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#F4B400]">
                      {item.category}
                    </p>
                    <h3 className="mt-1 text-sm sm:text-base font-bold text-white">{item.title}</h3>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-slate-500 py-16">No photos in this category yet.</p>
          ) : null}
        </div>
      </section>

      <section className="py-16 gradient-primary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{galleryCta.title}</h2>
            <p className="mt-3 text-white/80 leading-relaxed">{galleryCta.desc}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F4B400] text-[#0A3D62] text-sm font-bold px-6 py-3.5 shadow-glow hover:opacity-95 transition"
              >
                Explore Admissions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/student-life"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-sm font-bold px-6 py-3.5 border border-white/20 hover:bg-white/15 transition"
              >
                Student Life
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <AnimatePresence>
        {lightbox ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20 transition"
              onClick={() => setLightbox(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#F4B400]">
                  {lightbox.category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">{lightbox.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

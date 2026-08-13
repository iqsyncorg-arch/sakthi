import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { CmsStore } from "./types/cms";

const STORE_PATH = path.join(process.cwd(), "data", "edges-store.json");

const DEFAULT_STORE: CmsStore = {
  blogs: [
    {
      id: "usa-f1-visa-guide",
      tag: "Visa Update",
      title: "Guide to US F-1 Student Visas for Fall Admissions",
      desc: "A comprehensive checklist detailing documentation, SEVIS fee payments, ds-160 processing, and mock question preparations for the US F-1 consular interview.",
      date: "June 25, 2026",
      readTime: "6 min read",
      author: "Admissions Team",
      img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: "mbbs-abroad-opportunities",
      tag: "MBBS Special",
      title: "Why Studying MBBS Abroad in Poland & Georgia is Rising",
      desc: "An in-depth look at WHO-approved medical schools, tuition costs, clinical internship structures, and MCI/NMC screening exam assistance in Europe.",
      date: "June 18, 2026",
      readTime: "5 min read",
      author: "Dr. R. Sharma",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: "ielts-cracking-tips",
      tag: "Test Prep",
      title: "Cracking the IELTS: 5 Essential Tips to Score 8.0+ Band",
      desc: "Discover advanced grammar tips, structure tactics for Writing Task 2, vocabulary builders, and reading strategies that elite trainers use to push scores.",
      date: "June 10, 2026",
      readTime: "4 min read",
      author: "Certified IELTS Trainer",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=70",
    },
  ],
  events: [
    {
      id: "uk-admissions-fair",
      title: "UK Admissions & Scholarship Fair 2026",
      date: "July 12, 2026",
      time: "4:00 PM - 6:00 PM IST",
      speaker: "UK University Representative Panel",
      platform: "Zoom Video Seminar",
      desc: "Interact directly with admission officers from elite UK universities. Learn about CAS letters, fast-track visa processing, and post-study work routes.",
      img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: "us-visa-masterclass",
      title: "F-1 Student Visa Interview Masterclass",
      date: "July 20, 2026",
      time: "5:30 PM - 7:00 PM IST",
      speaker: "Senior Visa Advisor, EDGE",
      platform: "Live Interactive Webinar",
      desc: "Learn how to answer tough consular questions about financial stability, ties to home country, and university choices. Real-time Q&A included.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: "germany-free-education",
      title: "Germany Tuition-Free Education Pathways",
      date: "August 05, 2026",
      time: "3:00 PM - 4:30 PM IST",
      speaker: "DAAD Alumni Council Panel",
      platform: "Virtual Event Lobby",
      desc: "Understand language proficiency requirements (German vs. English-medium), blocking account details, and public university application cycles.",
      img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=70",
    },
  ],
  announcements: [
    { id: "1", text: "🔥 US F-1 visa slots released for Hyderabad and Chennai consulates for July intake.", time: "Just now", type: "urgent" },
    { id: "2", text: "📢 UK Priority visa processing service resumed with 5-day response turnaround.", time: "10 min ago", type: "admissions" },
    { id: "3", text: "🎓 Germany Winter Semester deadlines extended for key public universities.", time: "1 hour ago", type: "info" },
    { id: "4", text: "📝 New IELTS & PTE training batch starts next Monday at Nallakunta campus.", time: "Today", type: "prep" },
    { id: "5", text: "💰 Education Loan interest rate waivers announced by partner national banks.", time: "Yesterday", type: "finance" },
  ],
  submissions: [],
};

async function ensureStoreFile() {
  await mkdir(path.dirname(STORE_PATH), { recursive: true });
  try {
    await readFile(STORE_PATH, "utf8");
  } catch {
    await writeFile(STORE_PATH, JSON.stringify(DEFAULT_STORE, null, 2), "utf8");
  }
}

export async function readStore(): Promise<CmsStore> {
  await ensureStoreFile();
  const raw = await readFile(STORE_PATH, "utf8");
  const parsed = JSON.parse(raw) as Partial<CmsStore>;
  return {
    blogs: parsed.blogs ?? DEFAULT_STORE.blogs,
    events: parsed.events ?? DEFAULT_STORE.events,
    announcements: parsed.announcements ?? DEFAULT_STORE.announcements,
    submissions: parsed.submissions ?? [],
  };
}

export async function writeStore(store: CmsStore) {
  await ensureStoreFile();
  await writeFile(STORE_PATH, JSON.stringify(store, null, 2), "utf8");
}

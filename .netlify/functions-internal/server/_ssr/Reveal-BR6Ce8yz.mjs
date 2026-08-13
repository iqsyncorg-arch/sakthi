import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Logo } from "./Logo-DDrCU-to.mjs";
import { S as SOCIAL_LINKS, j as CONTACT_EMAIL, C as COMPANY_NAME } from "./router-DSxx-_6s.mjs";
import { X, i as Menu, j as Facebook, I as Instagram, L as Linkedin, Y as Youtube, k as MapPin, P as Phone, M as Mail, l as Globe, m as Award, n as Sparkles, o as Activity, p as ClipboardList, G as GraduationCap, q as Landmark, r as UserCheck, B as BookMarked } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const trainingTests = [
  {
    id: "ielts",
    label: "IELTS",
    fullTitle: "International English Language Testing System",
    category: "Language Proficiency",
    summary: "The world's standard English proficiency test for education and global migration.",
    desc: "The International English Language Testing System (IELTS) is the world’s most popular English language proficiency test for higher education and global migration. IELTS was introduced to assess one’s English skills such as Reading, Writing, Speaking and Listening.\n\nDeveloped by some of the world’s leading experts in language assessment, IELTS is jointly managed by University of Cambridge (ESOL Examinations), British Council, IDP Education Australia.\n\nIELTS is the pre requisite test for admission in Universities and colleges in countries like the USA, Australia, Canada, New Zealand, Ireland and the UK. More than 8000 organizations across the globe recognize and accept IELTS scores.",
    duration: "2 Hours 45 Minutes (plus 10 mins transfer time for paper-based Listening)",
    mode: "Computer-delivered & Paper-based",
    validity: "2 Years",
    scoring: "Band scale from 0 to 9 (overall and per section)",
    icon: Globe,
    sections: [
      { name: "Reading", duration: "60 minutes", details: "Reading section takes 60 minutes time in which 40 questions are asked based on 3 reading passages with a total of 2,000 to 2,750 words." },
      { name: "Speaking", duration: "10-15 minutes", details: "The speaking module consists of an oral interview between the candidate and examiner, which takes 10-15 min." },
      { name: "Writing", duration: "60 minutes", details: "In the Writing Section you have to write essays of 2 given tasks in 60 min. Task – 1: You have to write an essay of 150 words in 20 min. Task – 2: You have to write an essay of 250 words in 40 min." },
      { name: "Listening", duration: "30 minutes", details: "Listening section has 40 questions across 4 sections which need to be completed in 30 minutes. An additional 10 minutes is given to transform the answer to the answer sheet." }
    ],
    highlights: [
      "Study Abroad: Most universities and colleges in English-speaking countries require IELTS scores for admission.",
      "Immigration: Many countries use IELTS results as proof of English language proficiency for immigration purposes.",
      "Career Advancement: Employers often prefer candidates with strong English language skills, and IELTS can validate your proficiency."
    ],
    types: [
      { name: "IELTS General Training", desc: "Suitable for those migrating to an English-speaking country or seeking training or work experience." },
      { name: "IELTS Academic", desc: "Designed for those planning to study at university or other higher education institutions." }
    ],
    tips: [
      "Improve your English skills: Read English books, newspapers, and articles.",
      "Practice regularly: Familiarize yourself with the test format and question types.",
      "Take mock tests: Simulate exam conditions and identify areas for improvement.",
      "Build Vocabulary: Enhance your word power through reading and practice.",
      "Develop speaking fluency: Practice speaking English with native speakers or language partners."
    ],
    whyShakthi: [
      "Certified trainers with decade-plus experience",
      "One-on-one speaking feedback and interactive mocks",
      "Tailored grammar & vocabulary building modules",
      "Targeted study material and official practice booklets"
    ],
    contactHeading: "Would you like to know more about a specific aspect of IELTS, such as test preparation tips, score requirements for different countries, or differences between Academic and General Training modules?",
    heroImage: "/ielts-hero.png",
    pageImage: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782660359/19192cad-f3de-4adc-b041-4f87e9e713a7_gmdmyz.png"
  },
  {
    id: "toefl",
    label: "TOEFL",
    fullTitle: "Test of English as a Foreign Language (iBT)",
    category: "Language Proficiency",
    summary: "Academic English test highly preferred by institutions in the US and Canada.",
    desc: "The Test of English as a Foreign Language (TOEFL) is a standardized test that measures the English language ability of non-native speakers wishing to enroll in English-speaking universities. It is one of the most widely accepted English language proficiency tests globally.",
    duration: "2 Hours",
    mode: "Computer-based (at Test Center or Home Edition)",
    validity: "2 Years",
    scoring: "TOEFL scores range from 0 to 120. Each of the four sections is scored from 0 to 30, and the total score is the sum of the four section scores.",
    icon: Award,
    sections: [
      { name: "Reading", duration: "35 minutes", details: "You’ll read academic passages and answer questions based on the content." },
      { name: "Listening", duration: "36 minutes", details: "You’ll listen to lectures, conversations, and discussions and answer questions." },
      { name: "Speaking", duration: "16 minutes", details: "You’ll respond to spoken questions and deliver short talks." },
      { name: "Writing", duration: "29 minutes", details: "You’ll write an integrated task based on a reading and listening passage, and an independent essay." }
    ],
    highlights: [
      "University Admissions: Most universities in English-speaking countries require TOEFL scores for admission into undergraduate and graduate programs.",
      "Scholarships: Many scholarships and fellowships consider TOEFL scores as a criterion for eligibility.",
      "Professional Opportunities: Some employers in international companies may require TOEFL scores as proof of language proficiency."
    ],
    whyShakthi: [
      "Proven strategies for integrated writing & speaking tasks",
      "Simulation of actual TOEFL test engine environment",
      "AI-driven mock test scoring and performance analytics",
      "Expert feedback on accents, pacing, and essay structure"
    ],
    types: [
      { name: "TOEFL iBT (Internet-Based Test)", desc: "The most common format, taken at a test center." },
      { name: "TOEFL Home Edition", desc: "A computer-based test taken from the comfort of your home." }
    ],
    tips: [
      "Familiarize yourself with the test format: Understand the question types and time management strategies.",
      "Develop academic English skills: Practice reading academic texts, listening to lectures, and writing essays.",
      "Build vocabulary: Enhance your word power to comprehend complex texts and express ideas effectively.",
      "Practice speaking: Engage in conversations with native speakers or language partners to improve fluency.",
      "Take practice tests: Simulate exam conditions and identify areas for improvement."
    ],
    contactHeading: "Would you like to know more about specific TOEFL preparation strategies, score requirements for different universities, or the differences between TOEFL and other English proficiency tests?",
    heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "duolingo",
    label: "Duolingo",
    fullTitle: "Duolingo English Test (DET)",
    category: "Language Proficiency",
    summary: "Convenient, online, and affordable English proficiency test.",
    desc: "Duolingo: Gamifying Language Learning\n\nDuolingo is a popular language-learning app that has revolutionized the way people approach language acquisition. It’s designed to make learning fun and engaging through a gamified approach.\n\nHow Does It Work?\n\nDuolingo offers a variety of courses in different languages. Users progress through lessons by completing exercises that focus on vocabulary, grammar, pronunciation, and reading comprehension. The app uses a points system and rewards to motivate learners, making the process enjoyable and addictive.",
    duration: "1 Hour",
    mode: "Online, On-demand (secure home environment)",
    validity: "2 Years",
    scoring: "10 to 160 scale (integrated subscores for Literacy, Comprehension, Conversation, Production)",
    icon: Sparkles,
    sections: [
      { name: "Accessibility", duration: "Anytime", details: "It’s available on both iOS and Android devices, making it convenient to learn on the go." },
      { name: "Affordability", duration: "Free Core App", details: "The core app is free, making it accessible to a wide audience." },
      { name: "Engagement", duration: "Gamified", details: "The gamified approach keeps users motivated and interested." },
      { name: "Progress tracking", duration: "Detailed Stats", details: "Duolingo provides detailed statistics on learning progress." }
    ],
    highlights: [
      "Gamification: Duolingo incorporates game-like elements such as points, streaks, and levels to keep users motivated.",
      "Speech recognition: Users can practice speaking the language through voice exercises.",
      "Bite-sized lessons: Short, focused lessons make it easy to fit language learning into busy schedules.",
      "Writing practice: Duolingo includes writing exercises to improve grammar and vocabulary.",
      "Free access: The core features of Duolingo are available for free."
    ],
    whyShakthi: [
      "Familiarization with DET adaptive question types",
      "Techniques for maximizing subscores in Production and Conversation",
      "Special guidance on webcam setup, rules, and environment guidelines",
      "Full-length sample test practice and speed-drilling"
    ],
    tips: [
      "Complementary study: While Duolingo is a great tool for beginners, it’s essential to complement it with other learning methods for a well-rounded language education."
    ],
    contactHeading: "Would you like to know more about Duolingo’s effectiveness, or perhaps compare it to other language learning platforms?",
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "oet",
    label: "OET",
    fullTitle: "Occupational English Test",
    category: "Language Proficiency",
    summary: "English language test designed specifically for healthcare professionals.",
    desc: "Stands for the Occupational English Test. It’s a specialized English language test specifically designed for healthcare professionals who want to work in English-speaking countries. Unlike general English tests like IELTS or TOEFL, OET focuses on the language skills required for real-world medical situations.",
    duration: "2 Hours 45 Minutes",
    mode: "Paper-based, Computer-based at test venue, or OET@Home",
    validity: "2 Years",
    scoring: "OET uses a grading system of A, B, C+ and C. A is the highest grade, and C is the minimum passing grade required for most registration and visa purposes.",
    icon: Activity,
    sections: [
      { name: "Reading", duration: "60 minutes", details: "Medical texts and documents" },
      { name: "Writing", duration: "45 minutes", details: "Medical reports and letters" },
      { name: "Listening", duration: "45 minutes", details: "Medical audio recordings" },
      { name: "Speaking", duration: "20 minutes", details: "Role-play scenarios with an examiner." }
    ],
    highlights: [
      "Registration and Visa: Many countries require OET as proof of English proficiency for healthcare professionals to register and obtain work visas.",
      "Global Career Opportunities: It opens doors to healthcare jobs in English-speaking countries like Australia, the UK, the USA, Canada, and more.",
      "Industry-Specific Language: OET tests the language skills needed in healthcare settings, making it more relevant to the profession."
    ],
    whyShakthi: [
      "Specialist medical language coaches and clinical role-play practice",
      "Comprehensive medical vocabulary and jargon workshops",
      "Individual guidance on case-note filtering for letter writing",
      "Authentic practice material for nurses and doctors"
    ],
    types: [
      { name: "Target Professions", desc: "Doctors, Nurses, Dentists, Pharmacists, Physiotherapists, Veterinarians, Radiographers, Occupational therapists, Speech pathologists, Dieticians, Podiatrists, Optometrists" }
    ],
    contactHeading: "Are you a doctor or nurse preparing for OET? Reach out to us for specialized clinical coaching schedules and mock exams.",
    heroImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "pte",
    label: "PTE",
    fullTitle: "Preliminary English Test (PET)",
    category: "Language Proficiency",
    summary: "English language exam designed for learners at an intermediate level (B1).",
    desc: "Stands for Preliminary English Test. It’s an English language exam designed for learners at an intermediate level (B1 on the Common European Framework of Reference). It’s a stepping stone towards higher-level exams like the FCE (First Certificate in English).",
    duration: "2 Hours",
    mode: "Computer-based at an authorized test center",
    validity: "2 Years",
    scoring: "PET pass grade or CEFR level certificate.",
    icon: ClipboardList,
    sections: [
      { name: "Reading", duration: "45 minutes", details: "Understand various text types, from emails to articles." },
      { name: "Writing", duration: "45 minutes", details: "Produce different types of writing, such as emails, short messages, and essays." },
      { name: "Listening", duration: "30 minutes", details: "Understand different accents and speeds of spoken English." },
      { name: "Speaking", duration: "10-12 minutes", details: "Interact with an examiner and demonstrate your ability to communicate effectively." }
    ],
    highlights: [
      "Proof of English Level: PET provides evidence of your English language ability for universities, employers, and immigration purposes.",
      "Improved Confidence: Passing PET boosts your confidence in using English in real-life situations.",
      "Foundation for Further Learning: It’s a good base for progressing to higher levels of English."
    ],
    whyShakthi: [
      "AI-focused score strategies (pronunciation, fluency and keyword targets)",
      "Daily practice on PTE software interfaces",
      "Special templates for Describing Images and Summarizing Lectures",
      "Extensive dictation and spelling-correction workshops"
    ],
    tips: [
      "Improved English Skills: Regular practice for the exam enhances your overall English proficiency.",
      "Global Opportunities: PET is recognized by many institutions and employers worldwide.",
      "Personal Satisfaction: Achieving a PET certificate is a significant milestone in your language learning journey."
    ],
    contactHeading: "Would you like to know more about PET preparation tips or the specific content of the exam?",
    heroImage: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "gre",
    label: "GRE",
    fullTitle: "Graduate Record Examinations (General)",
    category: "Academic & Licensing",
    summary: "Standardized admission test for graduate programs and business schools globally.",
    desc: "The GRE General Test is a key admission requirement for graduate programs (MS, MBA, PhD) globally, particularly in the United States. It evaluates your verbal reasoning, quantitative reasoning, and analytical writing skills, providing admission panels with a common measure for comparing applicants' qualifications.",
    duration: "1 Hour 58 Minutes",
    mode: "Computer-delivered at test center or Home Edition",
    validity: "5 Years",
    scoring: "130-170 for Verbal, 130-170 for Quantitative, and 0-6 for Analytical Writing",
    icon: GraduationCap,
    sections: [
      { name: "Analytical Writing", duration: "30 minutes", details: "1 section ('Analyze an Issue' task) assessing logical reasoning and analytical writing skills." },
      { name: "Verbal Reasoning", duration: "41 minutes", details: "2 sections (27 questions total) evaluating ability to analyze written material and recognize relationships between words." },
      { name: "Quantitative Reasoning", duration: "47 minutes", details: "2 sections (27 questions total) measuring basic math skills, understanding of elementary mathematical concepts, and ability to reason quantitatively." }
    ],
    highlights: [
      "Highly versatile — accepted for MS, MBA, JD, and PhD programs",
      "Shortened format introduced in late 2023 for a faster test experience",
      "ScoreSelect® option allows you to send only your best scores to schools",
      "Valid for up to 5 years, giving you flexibility in your application timeline"
    ],
    whyShakthi: [
      "Comprehensive quant lectures covering algebra, geometry, and data analysis",
      "High-frequency GRE vocabulary lists and sentence-equivalence tricks",
      "Writing workshops for crafting high-scoring analytical essays",
      "Section-adaptive test strategies to optimize pacing and accuracy"
    ],
    tips: [
      "Memorize high-yield math formulas and shortcuts",
      "Build a rich vocabulary of GRE-level words and contextual usages",
      "Pace yourself carefully; section-level adaptivity makes early questions crucial",
      "Review official GRE Diagnostic Reports to isolate weak topics"
    ],
    contactHeading: "Unsure about GRE score requirements for MS/MBA programs, or want to register for a diagnostic test? Reach out!",
    heroImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "usmle",
    label: "USMLE",
    fullTitle: "United States Medical Licensing Examination",
    category: "Academic & Licensing",
    summary: "The medical licensing pathway to practice medicine and secure residency in the USA.",
    desc: "The USMLE is a three-step examination for medical licensure in the United States. It is sponsored by the Federation of State Medical Boards (FSMB) and the National Board of Medical Examiners (NBME). For international medical graduates (IMGs), passing USMLE Steps and securing ECFMG certification is required to enter US residency programs.",
    duration: "Multi-day / Multi-step",
    mode: "Computer-based testing at Prometric centers globally",
    validity: "Varies (typically steps must be completed within a 7-year window)",
    scoring: "Step 1: Pass/Fail; Step 2 CK & Step 3: Three-digit numeric score (passing score is typically around 214+ for Step 2 CK)",
    icon: Landmark,
    sections: [
      { name: "Step 1", duration: "8-hour exam day", details: "280 multiple-choice questions assessing foundational science concepts, organ systems, and mechanisms of therapy (Pass/Fail)." },
      { name: "Step 2 CK", duration: "9-hour exam day", details: "318 multiple-choice questions assessing clinical knowledge, diagnosis, health promotion, and clinical science." },
      { name: "Step 3", duration: "2-day exam (16 hours total)", details: "Computer-based questions and Computer-based Case Simulations (CCS) assessing ability to practice medicine unsupervised." }
    ],
    highlights: [
      "The definitive pathway for doctors to practice medicine in the United States",
      "Step 1 focuses on foundational systems; Step 2 CK focuses on clinical application",
      "High Step 2 CK scores are crucial for securing residency interviews",
      "Required for ECFMG certification of international medical graduates (IMGs)",
      "GUS Medical students (Saba, St. Matthew's, MUA) achieve exceptional USMLE pass rates and residency match outcomes across all three partner medical schools."
    ],
    whyShakthi: [
      "Tailored study programs with clinical experts and US-based residency matched mentors",
      "High-yield organ system reviews, biostatistics, and biochemistry bootcamps",
      "Training on UWorld, Amboss, and NBME self-assessments interpretation",
      "Complete ECFMG registration, credentials verification, and ERAS residency match guidance",
      "Highlighted focus on USMLE step pass rates and residency match rates for GUS Caribbean partner schools"
    ],
    tips: [
      "Start preparing for Step 1 early in medical school, focusing on fundamental mechanisms",
      "Use active-recall study aids (Anki flashcards, question banks)",
      "Focus heavily on Step 2 CK score improvement since Step 1 is Pass/Fail",
      "Practice timing yourself on full 9-hour block simulations"
    ],
    contactHeading: "Ready to start your USMLE roadmap? Let us connect you with matched medical mentors and customize your calendar.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "plab",
    label: "PLAB",
    fullTitle: "Professional and Linguistic Assessments Board",
    category: "Academic & Licensing",
    summary: "Licensing pathway for international medical graduates to practice medicine in the UK.",
    desc: "The PLAB test is the primary route for international medical graduates (IMGs) to demonstrate they have the necessary skills and knowledge to practice medicine in the United Kingdom. Passing the PLAB exam allows you to apply for General Medical Council (GMC) registration with a license to practice.",
    duration: "Two parts (separate days)",
    mode: "Part 1: Written (multiple-choice) globally; Part 2: Clinical OSCE in Manchester, UK",
    validity: "GMC registration must be obtained within 2 years of passing PLAB 2",
    scoring: "Part 1 & 2: Pass/Fail (determined relative to standard-setting benchmarks for safe practice)",
    icon: UserCheck,
    sections: [
      { name: "PLAB Part 1", duration: "3 hours", details: "180 multiple-choice questions (best-of-five format) assessing clinical knowledge, management plans, and professional ethics." },
      { name: "PLAB Part 2", duration: "approx. 3 hours", details: "Objective Structured Clinical Exam (OSCE) consisting of 16 clinical scenarios (stations) testing communication, history-taking, and clinical skills." }
    ],
    highlights: [
      "Required pathway for non-EEA doctors seeking GMC registration in the UK",
      "Aligned with the UK Foundation Programme Year 2 expectations",
      "Part 1 can be taken in multiple international locations, including India",
      "Requires passing IELTS (Academic) or OET first as an entry requirement"
    ],
    whyShakthi: [
      "Comprehensive question bank preparation and recall session discussions",
      "Intensive PLAB 2 OSCE mock stations mimicking UK exam standards",
      "GMC registration, Epic credentials verification, and NHS resume writing support",
      "NHS interview prep workshops and guidance on clinical attachment opportunities"
    ],
    tips: [
      "Ensure your English test (IELTS/OET) is valid and high-scoring before registering for PLAB",
      "Prioritize NHS guidelines and clinical algorithms for Part 1",
      "In Part 2, communication skills and patient safety are as vital as medical facts",
      "Take part in clinical attachment schemes to get NHS exposure"
    ],
    contactHeading: "Need assistance with PLAB bookings, clinical attachments, or GMC registration timelines? Talk to us today!",
    heroImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "neet",
    label: "NEET",
    fullTitle: "National Eligibility cum Entrance Test",
    category: "Academic & Licensing",
    summary: "Qualifying exam for medical education in India and for pursuing MBBS abroad.",
    desc: "NEET (UG & PG) is the sole medical entrance exam in India. Crucially, the Medical Council of India (MCI) / National Medical Commission (NMC) mandates that any Indian student intending to pursue MBBS or equivalent medical degrees abroad must qualify in NEET (UG) to be eligible for GMC/NMC registration upon return.",
    duration: "3 Hours 20 Minutes (NEET-UG)",
    mode: "Pen-and-paper (NEET-UG) or Computer-based (NEET-PG)",
    validity: "3 Years for MBBS abroad eligibility",
    scoring: "Total of 720 marks (NEET-UG) with +4 for correct and -1 for incorrect answers",
    icon: BookMarked,
    sections: [
      { name: "Physics", duration: "approx. 50 minutes", details: "45 questions (divided into Section A & B) covering mechanics, thermodynamics, electromagnetism, and modern physics." },
      { name: "Chemistry", duration: "approx. 50 minutes", details: "45 questions covering organic, inorganic, and physical chemistry concepts." },
      { name: "Biology (Botany & Zoology)", duration: "approx. 100 minutes", details: "90 questions testing plant and animal sciences, genetics, ecology, human physiology, and cell biology." }
    ],
    highlights: [
      "Mandatory requirement for Indian students pursuing medical studies abroad",
      "Eligibility certificate remains valid for 3 years for foreign admissions",
      "Tests NCERT syllabus for 11th and 12th grades comprehensively",
      "Highly competitive exam taken by over 2 million students annually"
    ],
    whyShakthi: [
      "Expert NEET qualification strategy sessions for study-abroad aspirants",
      "Targeted focus on NCERT books to secure eligibility cutoff with minimal stress",
      "Guidance on top NMC approved universities in Georgia, Russia, Philippines, and Europe",
      "Complete documentation, eligibility certification, and admission logistics handle"
    ],
    tips: [
      "Master NCERT textbooks line-by-line for Biology and Chemistry",
      "Develop speed and accuracy for multiple-choice questions with negative marking",
      "Practice previous years' NEET papers under exact timed conditions",
      "Focus on scoring above the qualifying percentile rather than top rank for studying abroad"
    ],
    contactHeading: "Planning to qualify NEET and study MBBS in Georgia, Europe or Philippines? We can guide you on the criteria and university selection.",
    heroImage: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1600&q=80"
  }
];
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about-shakthi", label: "About Us" },
  { href: "/#offerings", label: "Courses" },
  { href: "/#portals", label: "Admissions" },
  { href: "/#student-life", label: "Student Life" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#careers", label: "Careers" },
  { href: "/#contact", label: "Contact Us" }
];
const heroPaths = /* @__PURE__ */ new Set([
  "/",
  "/about",
  "/contact",
  "/university-admissions",
  "/mbbs-to-md",
  "/career-counseling",
  "/other-programs",
  "/visa-assistance",
  "/travel-assistance",
  "/sop-writing",
  "/education-loan",
  "/blogs-events",
  ...trainingTests.map((t) => `/${t.id}`)
]);
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const router = useRouterState();
  const pathname = router.location.pathname;
  const isHeroPage = heroPaths.has(pathname);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const isDarkNavbar = isHeroPage && !scrolled;
  const linkClass = isDarkNavbar ? "text-white hover:text-white/80" : "text-slate-700 hover:text-[#0A3D62]";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            className: `flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-300 ${isDarkNavbar ? "bg-black/20 backdrop-blur-md border border-white/10" : "bg-white border border-slate-200 shadow-md"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "group shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Logo,
                {
                  variant: isDarkNavbar ? "light" : "default",
                  size: "md",
                  showTagline: true
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden lg:flex items-center gap-0.5", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: l.href === "/" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/",
                  className: `px-2 xl:px-2.5 py-2 text-[11px] xl:text-[13px] font-bold transition-colors duration-300 whitespace-nowrap ${linkClass}`,
                  children: l.label
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  className: `px-2 xl:px-2.5 py-2 text-[11px] xl:text-[13px] font-bold transition-colors duration-300 whitespace-nowrap ${linkClass}`,
                  children: l.label
                }
              ) }, l.label)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: `lg:hidden p-2 rounded-lg transition-colors duration-300 ${isDarkNavbar ? "text-white" : "text-[#0A3D62]"}`,
                  "aria-label": "Toggle menu",
                  onClick: () => setOpen((v) => !v),
                  children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `lg:hidden mt-2 rounded-2xl p-4 shadow-md transition-all duration-300 ${isDarkNavbar ? "glass-dark text-white border border-white/10" : "bg-white border border-slate-200/90 text-slate-800"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-1", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: l.href === "/" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/",
                onClick: () => setOpen(false),
                className: `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${isDarkNavbar ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-slate-50"}`,
                children: l.label
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                onClick: () => setOpen(false),
                className: `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${isDarkNavbar ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-slate-50"}`,
                children: l.label
              }
            ) }, l.label)) })
          }
        )
      ] })
    }
  );
}
function Footer() {
  const social = [
    { Icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
    { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
    { Icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contact", className: "relative mt-24 text-slate-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-primary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-xl bg-white px-3 py-2.5 w-fit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { variant: "default", size: "md", showTagline: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80 leading-relaxed", children: "A global academy committed to academic excellence, skill development and real-world success." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 pt-2", children: social.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: item.href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": item.label,
            className: "h-9 w-9 grid place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.Icon, { className: "h-4 w-4 text-white" })
          },
          item.label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-semibold mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-white", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#about-shakthi", className: "hover:text-white", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#offerings", className: "hover:text-white", children: "Courses" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#contact", className: "hover:text-white", children: "Contact Us" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-semibold mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-[#F4B400] shrink-0" }),
            " Hyderabad, India"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 mt-0.5 text-[#F4B400] shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+917993473399", className: "hover:text-white transition", children: "+91 799 347 3399" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+917702221727", className: "hover:text-white transition", children: "+91 770 222 1727" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mt-0.5 text-[#F4B400] shrink-0" }),
            " ",
            CONTACT_EMAIL
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-semibold mb-4", children: "Newsletter" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80 mb-3", children: "Get study-abroad tips and university updates." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex gap-2", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              placeholder: "you@email.com",
              className: "flex-1 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white text-sm px-3 py-2.5 outline-none focus:bg-white/15"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-lg bg-[#F4B400] text-[#0A3D62] text-sm font-semibold px-4", children: "Join" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        COMPANY_NAME,
        ". All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Crafted for ambitious students worldwide." })
    ] }) })
  ] }) });
}
const variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};
function Reveal({ children, delay = 0, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      variants,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-60px" },
      transition: { delay },
      children
    }
  );
}
export {
  Footer as F,
  Navbar as N,
  Reveal as R,
  trainingTests as t
};

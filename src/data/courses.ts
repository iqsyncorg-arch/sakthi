import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building,
  GraduationCap,
  MessageCircle,
  Plane,
  School,
  Wrench,
} from "lucide-react";

export type CourseProgram = {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  objective: string;
  targetAudience: string[];
  duration: string;
  eligibility: string[];
  modules: string[];
  deliveryMode: string[];
  benefits: string[];
};

export const coursePrograms: CourseProgram[] = [
  {
    id: "school-programs",
    icon: School,
    name: "School Programs",
    tagline: "Foundational learning from nursery with strong holistic growth.",
    objective:
      "Build strong academic foundations, character, and curiosity from early years through secondary schooling — preparing students for higher education and lifelong success.",
    targetAudience: [
      "Nursery to higher secondary students",
      "Parents seeking quality school education",
      "Students preparing for board exams and competitive tests",
    ],
    duration: "1 academic year per grade (flexible enrolment by term)",
    eligibility: [
      "Age-appropriate grade placement",
      "Previous school records or transfer certificate",
      "Basic language readiness assessment where applicable",
    ],
    modules: [
      "Core subjects — languages, mathematics, science, social studies",
      "Life skills, arts, sports & physical education",
      "Digital literacy & communication skills",
      "Values education & community engagement",
      "Exam preparation & study skills workshops",
    ],
    deliveryMode: ["On-campus classroom learning", "Blended digital resources", "Parent-teacher progress reviews"],
    benefits: [
      "Holistic development of mind, body, and character",
      "Small-group attention and mentor support",
      "Structured pathway to college and career programs",
      "Safe, inclusive learning environment",
    ],
  },
  {
    id: "college-programs",
    icon: GraduationCap,
    name: "College Programs",
    tagline: "Undergraduate, postgraduate, and diploma pathways for advancement.",
    objective:
      "Deliver degree and diploma pathways that combine academic depth with employability — enabling students to advance into professional careers or further specialisation.",
    targetAudience: [
      "Higher secondary graduates",
      "Undergraduate students seeking PG pathways",
      "Working professionals pursuing degrees",
    ],
    duration: "2–4 years (UG) · 1–2 years (PG/Diploma) depending on programme",
    eligibility: [
      "10+2 or equivalent for undergraduate entry",
      "Bachelor's degree for postgraduate programmes",
      "Minimum marks as per university and programme norms",
    ],
    modules: [
      "Domain-specific core curriculum",
      "Research methodology & project work",
      "Industry seminars & guest lectures",
      "Internship & placement preparation",
      "Soft skills, leadership & ethics",
    ],
    deliveryMode: ["On-campus lectures & labs", "Online supplementary modules", "Industry immersion projects"],
    benefits: [
      "Recognised university-aligned qualifications",
      "Career counselling and placement support",
      "Access to global partner institutions",
      "Alumni network and mentorship",
    ],
  },
  {
    id: "skill-development",
    icon: Wrench,
    name: "Skill Development",
    tagline: "Practical workplace training with industry-valued skills.",
    objective:
      "Equip learners with job-ready technical and professional skills through hands-on training aligned to current industry demand and employer expectations.",
    targetAudience: [
      "Job seekers and career changers",
      "Fresh graduates entering the workforce",
      "Employers upskilling their teams",
    ],
    duration: "4 weeks – 6 months (varies by skill track)",
    eligibility: [
      "Minimum 10th / 12th pass (varies by track)",
      "Basic computer literacy for digital skills tracks",
      "Willingness to complete practical assignments",
    ],
    modules: [
      "Technical skills — IT, digital tools, domain tools",
      "Communication & workplace etiquette",
      "Problem-solving & teamwork",
      "Live projects & capstone assignments",
      "Interview & portfolio preparation",
    ],
    deliveryMode: ["Instructor-led workshops", "Hands-on lab sessions", "Online + in-person hybrid batches"],
    benefits: [
      "Industry-aligned curriculum updated regularly",
      "Practical project experience for your résumé",
      "Placement assistance with hiring partners",
      "Certificate of completion from Shakthi Academy",
    ],
  },
  {
    id: "certification-courses",
    icon: BadgeCheck,
    name: "Certification Courses",
    tagline: "Recognised credentials through focused career-impact courses.",
    objective:
      "Provide short, focused certification programmes that validate expertise in high-demand fields — helping learners stand out to employers and advance faster.",
    targetAudience: [
      "Professionals seeking credential upgrades",
      "Students adding specialisations to their profile",
      "Entrepreneurs building business competencies",
    ],
    duration: "2 weeks – 3 months per certification",
    eligibility: [
      "Relevant educational background or work experience",
      "Programme-specific entrance briefing",
      "Commitment to complete assessments",
    ],
    modules: [
      "Core certification syllabus & exam prep",
      "Case studies & real-world applications",
      "Assessment drills & mock evaluations",
      "Career mapping post-certification",
    ],
    deliveryMode: ["Weekend & evening batches", "Live online sessions", "Self-paced study materials"],
    benefits: [
      "Focused, time-efficient learning",
      "Recognised credentials for career growth",
      "Expert instructors with domain experience",
      "Post-certification career guidance",
    ],
  },
  {
    id: "international-programs",
    icon: Plane,
    name: "International Programs",
    tagline: "Global exposure through trusted cross-border partnerships.",
    objective:
      "Guide students through study-abroad pathways — from university selection and admissions to visa support — connecting them with partner institutions across the world.",
    targetAudience: [
      "Students aspiring to study abroad (UG/PG/MBBS/MD)",
      "Parents planning international education",
      "Professionals seeking global qualifications",
    ],
    duration: "Counselling engagement: 3–12 months · Programmes: 1–6 years abroad",
    eligibility: [
      "Academic records meeting destination country norms",
      "English proficiency (IELTS/PTE/TOEFL/OET as required)",
      "Financial documentation for visa and tuition",
    ],
    modules: [
      "Profile evaluation & country/university shortlisting",
      "Application, SOP & document preparation",
      "Visa guidance & interview coaching",
      "Pre-departure orientation & post-landing support",
      "Scholarship & education loan assistance",
    ],
    deliveryMode: ["One-on-one counselling sessions", "Online document review", "Partner university direct applications"],
    benefits: [
      "50+ country network and direct university partnerships",
      "End-to-end support from enquiry to settlement",
      "High success rate in admissions and visas",
      "Dedicated counsellor assigned to every student",
    ],
  },
  {
    id: "corporate-training",
    icon: Building,
    name: "Corporate Training",
    tagline: "Custom workforce programmes upskilling teams for tomorrow.",
    objective:
      "Design and deliver tailored training solutions for organisations — improving team performance, leadership capability, and workforce readiness at scale.",
    targetAudience: [
      "HR and L&D teams",
      "Corporates and institutions",
      "Startups building early-stage teams",
    ],
    duration: "Custom — typically 1 day to 12 weeks per engagement",
    eligibility: [
      "Organisation registration or corporate enquiry",
      "Training needs assessment completed",
      "Minimum batch size as agreed per programme",
    ],
    modules: [
      "Leadership & management development",
      "Technical upskilling & digital transformation",
      "Communication, sales & customer excellence",
      "Campus hiring & skill assessment programmes",
      "CSR-linked education initiatives",
    ],
    deliveryMode: ["On-site corporate workshops", "Virtual instructor-led training", "Blended learning portals"],
    benefits: [
      "Fully customised to your industry and goals",
      "Measurable outcomes and progress reporting",
      "Access to trained, job-ready talent pipelines",
      "Flexible scheduling for working teams",
    ],
  },
  {
    id: "counselling-guidance",
    icon: MessageCircle,
    name: "Counselling & Guidance",
    tagline: "Personalised learner support to plan paths confidently.",
    objective:
      "Provide expert, ethical counselling that helps students and families make informed decisions about education, careers, and study-abroad options — without pressure or bias.",
    targetAudience: [
      "Students at career crossroads",
      "Parents seeking guidance for their children",
      "Working professionals planning career transitions",
    ],
    duration: "Single session to ongoing mentorship (1 session – 6 months)",
    eligibility: [
      "Open to all learners and families",
      "No minimum academic requirement",
      "Prior appointment recommended",
    ],
    modules: [
      "Career interest & aptitude assessment",
      "Education pathway planning (domestic & abroad)",
      "Course, country & university recommendations",
      "Financial planning & scholarship guidance",
      "Follow-up action plans and progress reviews",
    ],
    deliveryMode: ["In-person counselling at Chennai office", "Video/phone consultations", "Walk-in profile evaluations"],
    benefits: [
      "Personalised, student-first advice",
      "25+ years of counselling experience",
      "Transparent, ethical guidance with no hidden agenda",
      "Free initial consultation available",
    ],
  },
];

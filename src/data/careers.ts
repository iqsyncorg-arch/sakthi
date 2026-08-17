import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Cpu,
  Heart,
  Megaphone,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export const careersHeroIntro =
  "At Shakthi Academy, we believe great people build great futures. Join our passionate team and help shape the lives of students every day.";

export const lifeAtShakthi: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Heart,
    title: "Purpose-Driven Work",
    desc: "Every role contributes directly to student success — from the classroom to the counseling desk.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Work alongside educators, counselors, and innovators who share a commitment to excellence.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Learning",
    desc: "Professional development, mentorship, and opportunities to advance within the academy.",
  },
  {
    icon: Sparkles,
    title: "Make an Impact",
    desc: "Help learners discover pathways in education, employment, and entrepreneurship worldwide.",
  },
];

export type OpenPosition = {
  id: string;
  title: string;
  type: string;
  department: string;
  desc: string;
  location: string;
};

export const openPositions: OpenPosition[] = [
  {
    id: "faculty-mathematics",
    title: "Faculty – Mathematics",
    type: "Full Time",
    department: "Teaching",
    desc: "Teach and inspire students in mathematics from foundational to advanced levels.",
    location: "Bangalore, India",
  },
  {
    id: "academic-counselor",
    title: "Academic Counselor",
    type: "Full Time",
    department: "Counseling",
    desc: "Guide students on academic pathways, career choices and personal development.",
    location: "Bangalore, India",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Executive",
    type: "Full Time",
    department: "Marketing",
    desc: "Drive our digital presence through campaigns, content and social media strategy.",
    location: "Bangalore, India",
  },
  {
    id: "software-developer",
    title: "Software Developer",
    type: "Full Time",
    department: "Technology",
    desc: "Build and maintain our learning platforms, portals and digital tools.",
    location: "Bangalore, India",
  },
  {
    id: "admin-executive",
    title: "Administrative Executive",
    type: "Full Time",
    department: "Administration",
    desc: "Support daily operations, admissions coordination and campus administration.",
    location: "Bangalore, India",
  },
];

export const hiringProcess = [
  {
    step: "01",
    title: "Apply Online",
    desc: "Submit your application through our career portal.",
  },
  {
    step: "02",
    title: "Screening",
    desc: "We review your application and qualifications.",
  },
  {
    step: "03",
    title: "Interview",
    desc: "Shortlisted candidates will be invited for an interview.",
  },
  {
    step: "04",
    title: "Selection",
    desc: "Successful candidates will receive an offer.",
  },
  {
    step: "05",
    title: "Welcome Aboard",
    desc: "Begin your journey with Shakthi Academy!",
  },
];

export const careersClosingTitle = "Be Part of Something Meaningful.";
export const careersClosingDesc =
  "Join a team that empowers students, builds futures and creates a lasting impact.";

export const departmentIcons: Record<string, LucideIcon> = {
  Teaching: BookOpen,
  Counseling: MessageCircle,
  Marketing: Megaphone,
  Technology: Cpu,
  Administration: Users,
};

export const jobDepartments = [
  "All Departments",
  "Teaching",
  "Counseling",
  "Marketing",
  "Technology",
  "Administration",
] as const;

export const jobLocations = ["All Locations", "Bangalore, India"] as const;

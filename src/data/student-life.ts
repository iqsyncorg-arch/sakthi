import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Briefcase,
  Code2,
  Compass,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  Palette,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";

export const studentLifeHero = {
  eyebrow: "Life at Shakthi",
  titleLead: "Learn. Connect. Experience.",
  titleAccent: "Grow.",
  intro:
    "Student life at Shakthi Academy goes beyond the classroom — discover a vibrant community where learning, friendship and personal growth come together every day.",
};

export const studentLifeIntro = {
  eyebrow: "Life at Shakthi Academy",
  title: "More Than Just a Classroom",
  body: "At Shakthi Academy, we believe education is an experience — not just a curriculum. From collaborative projects and club activities to cultural events and community outreach, every moment is designed to help you discover your strengths and build lasting memories.",
};

export const studentLifePillars: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: BookOpen,
    title: "Academic Growth",
    desc: "Strong foundations through guided learning and mentorship.",
  },
  {
    icon: Wrench,
    title: "Skill Building",
    desc: "Hands-on workshops that prepare you for real-world challenges.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "A vibrant network of peers, mentors and lifelong connections.",
  },
  {
    icon: Sparkles,
    title: "Personal Growth",
    desc: "Build confidence, leadership and a sense of purpose.",
  },
];

export const studentClubs: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Target,
    title: "Academic Clubs",
    desc: "Debate, science, maths and subject-focused learning groups.",
  },
  {
    icon: Code2,
    title: "Technology Club",
    desc: "Coding, robotics, digital innovation and tech projects.",
  },
  {
    icon: Palette,
    title: "Creative Club",
    desc: "Art, music, drama and creative expression workshops.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship Club",
    desc: "Startup ideas, business skills and innovation challenges.",
  },
  {
    icon: Megaphone,
    title: "Communication Club",
    desc: "Public speaking, writing and presentation skills.",
  },
  {
    icon: HeartHandshake,
    title: "Social Activities",
    desc: "Community service, events and cultural celebrations.",
  },
];

export const studentSupport: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: BookOpen,
    title: "Academic Support",
    desc: "Tutoring, study groups and personalised learning assistance.",
  },
  {
    icon: Compass,
    title: "Career Guidance",
    desc: "Counselling, internships and pathway planning for your future.",
  },
  {
    icon: HeartHandshake,
    title: "Counselling",
    desc: "Confidential support for personal and emotional wellbeing.",
  },
  {
    icon: Briefcase,
    title: "Student Assistance",
    desc: "Help with admissions, fees, transport and campus services.",
  },
];

export const studentLifeCta = {
  eyebrow: "Campus Life in Action",
  title: "Your Best Memories Start Here.",
  desc: "Learn. Make Friends. Discover Your Potential.",
};

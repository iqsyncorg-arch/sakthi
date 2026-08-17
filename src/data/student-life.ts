import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Briefcase,
  CalendarDays,
  Code2,
  Compass,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  Palette,
  Sparkles,
  Target,
  Trophy,
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
  highlights: [
    "Collaborative projects with real-world focus",
    "Cultural events and community outreach",
    "Mentorship that builds lasting confidence",
  ],
};

export const studentLifePillars: {
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
}[] = [
  {
    icon: BookOpen,
    title: "Academic Growth",
    desc: "Strong foundations through guided learning and mentorship.",
    points: ["Subject mentoring", "Peer study circles", "Progress reviews"],
  },
  {
    icon: Wrench,
    title: "Skill Building",
    desc: "Hands-on workshops that prepare you for real-world challenges.",
    points: ["Practical labs", "Industry workshops", "Portfolio projects"],
  },
  {
    icon: Users,
    title: "Community",
    desc: "A vibrant network of peers, mentors and lifelong connections.",
    points: ["Buddy programmes", "Alumni connect", "Campus forums"],
  },
  {
    icon: Sparkles,
    title: "Personal Growth",
    desc: "Build confidence, leadership and a sense of purpose.",
    points: ["Leadership roles", "Soft-skill coaching", "Reflection sessions"],
  },
];

export const studentClubs: {
  icon: LucideIcon;
  title: string;
  desc: string;
  activities: string[];
}[] = [
  {
    icon: Target,
    title: "Academic Clubs",
    desc: "Debate, science, maths and subject-focused learning groups.",
    activities: ["Debates & quizzes", "Science demos", "Math circles"],
  },
  {
    icon: Code2,
    title: "Technology Club",
    desc: "Coding, robotics, digital innovation and tech projects.",
    activities: ["Hackathons", "Robotics builds", "App prototypes"],
  },
  {
    icon: Palette,
    title: "Creative Club",
    desc: "Art, music, drama and creative expression workshops.",
    activities: ["Stage performances", "Art showcases", "Music jams"],
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship Club",
    desc: "Startup ideas, business skills and innovation challenges.",
    activities: ["Pitch days", "Business basics", "Innovation sprints"],
  },
  {
    icon: Megaphone,
    title: "Communication Club",
    desc: "Public speaking, writing and presentation skills.",
    activities: ["Toast sessions", "Writing labs", "Media practice"],
  },
  {
    icon: HeartHandshake,
    title: "Social Activities",
    desc: "Community service, events and cultural celebrations.",
    activities: ["Volunteer drives", "Festivals", "Campus meetups"],
  },
];

export const studentSupport: {
  icon: LucideIcon;
  title: string;
  desc: string;
  detail: string;
}[] = [
  {
    icon: BookOpen,
    title: "Academic Support",
    desc: "Tutoring, study groups and personalised learning assistance.",
    detail: "Get help before exams, catch up on concepts, and stay on track with guided study plans.",
  },
  {
    icon: Compass,
    title: "Career Guidance",
    desc: "Counselling, internships and pathway planning for your future.",
    detail: "Explore careers early, prepare for opportunities, and map next steps with counselors.",
  },
  {
    icon: HeartHandshake,
    title: "Counselling",
    desc: "Confidential support for personal and emotional wellbeing.",
    detail: "A safe space to talk through challenges with trained, caring professionals.",
  },
  {
    icon: Briefcase,
    title: "Student Assistance",
    desc: "Help with admissions, fees, transport and campus services.",
    detail: "Day-to-day campus needs handled so you can focus on learning and growth.",
  },
];

export const campusMoments: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: CalendarDays,
    title: "Orientation Week",
    desc: "Meet mentors, explore clubs, and settle into campus life with guided welcome sessions.",
  },
  {
    icon: Trophy,
    title: "Competitions & Showcases",
    desc: "Present projects, compete in debates and tech challenges, and celebrate creative work.",
  },
  {
    icon: Users,
    title: "Peer Mentorship",
    desc: "Senior students and faculty mentors help you navigate academics and campus culture.",
  },
  {
    icon: Sparkles,
    title: "Cultural Celebrations",
    desc: "Festivals, performances and community days that bring the academy together.",
  },
];

export const studentLifeStats = [
  { value: "6+", label: "Active Clubs" },
  { value: "Year-round", label: "Events & Activities" },
  { value: "1:1", label: "Mentorship Access" },
  { value: "Always", label: "Student Support" },
];

export const studentLifeCta = {
  eyebrow: "Campus Life in Action",
  title: "Your Best Memories Start Here.",
  desc: "Learn. Make Friends. Discover Your Potential.",
};

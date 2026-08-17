import aboutCampus from "../assets/about-campus-bg.jpg";
import admissionsHero from "../assets/admissions-hero.jpg";
import careersHero from "../assets/careers-hero.jpg";
import contactHero from "../assets/contact-hero.png";
import coursesHero from "../assets/courses-hero.jpg";
import heroStudents from "../assets/hero-students.jpg";
import studentLifeHero from "../assets/student-life-hero.jpg";
import womenImg from "../assets/women.png";
import menImg from "../assets/men.png";
import men2Img from "../assets/men2.png";
import aboutHero from "../assets/about-hero-new.png";

export const galleryHero = {
  eyebrow: "Gallery",
  titleLead: "Moments That",
  titleAccent: "Matter",
  intro:
    "A glimpse into life at Shakthi Academy — classrooms, campus moments, celebrations and the community that makes every day memorable.",
};

export const galleryCategories = [
  "All",
  "Campus",
  "Learning",
  "Student Life",
  "Community",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  span?: "tall" | "wide" | "default";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "campus-1",
    src: aboutCampus,
    alt: "Shakthi Academy campus",
    title: "Our Campus",
    category: "Campus",
    span: "wide",
  },
  {
    id: "learning-1",
    src: coursesHero,
    alt: "Students studying in the library",
    title: "Focused Learning",
    category: "Learning",
    span: "tall",
  },
  {
    id: "life-1",
    src: studentLifeHero,
    alt: "Students collaborating in class",
    title: "Classroom Energy",
    category: "Student Life",
  },
  {
    id: "community-1",
    src: admissionsHero,
    alt: "Counseling and admissions conversation",
    title: "Guided Beginnings",
    category: "Community",
  },
  {
    id: "campus-2",
    src: aboutHero,
    alt: "Academy atmosphere",
    title: "Academy Spaces",
    category: "Campus",
  },
  {
    id: "learning-2",
    src: heroStudents,
    alt: "Students in a learning session",
    title: "Learning Together",
    category: "Learning",
    span: "wide",
  },
  {
    id: "life-2",
    src: womenImg,
    alt: "Student portrait",
    title: "Student Voices",
    category: "Student Life",
  },
  {
    id: "community-2",
    src: careersHero,
    alt: "Faculty and staff collaboration",
    title: "Our Team",
    category: "Community",
    span: "tall",
  },
  {
    id: "life-3",
    src: menImg,
    alt: "Student engagement",
    title: "Everyday Moments",
    category: "Student Life",
  },
  {
    id: "community-3",
    src: contactHero,
    alt: "Support and connection",
    title: "Always Connected",
    category: "Community",
  },
  {
    id: "learning-3",
    src: men2Img,
    alt: "Mentorship and guidance",
    title: "Mentorship",
    category: "Learning",
  },
];

export const galleryCta = {
  title: "Be Part of These Moments",
  desc: "Join a community where learning, friendship and growth happen every day.",
};

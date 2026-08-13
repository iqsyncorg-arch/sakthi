export type BlogPost = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  author: string;
  img: string;
};

export type WebinarEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  speaker: string;
  platform: string;
  desc: string;
  img: string;
};

export type AnnouncementVisibility = "public" | "internal";
export type AnnouncementStatus = "draft" | "published";

export type Announcement = {
  id: string;
  text: string;
  time: string;
  type: string;
  enabled?: boolean;
  visibility?: AnnouncementVisibility;
  status?: AnnouncementStatus;
};

export type FormSubmission = {
  id: string;
  formName: string;
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type CmsStore = {
  blogs: BlogPost[];
  events: WebinarEvent[];
  announcements: Announcement[];
  submissions: FormSubmission[];
  announcementsEnabled?: boolean;
};

export type PublicContent = Pick<CmsStore, "blogs" | "events" | "announcements" | "announcementsEnabled">;

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  apiAdminLogin,
  apiGetAdminDashboard,
  apiGetPublicContent,
  apiSaveAnnouncements,
  apiSaveBlogs,
  apiSaveEvents,
  apiSaveSubmissions,
  apiSubmitInquiry,
} from "./edges-api";
import type { Announcement, BlogPost, FormSubmission, WebinarEvent } from "../types/cms";

const submissionSchema = z.object({
  formName: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  subject: z.string().min(1),
  message: z.string().optional().default(""),
});

const blogSchema = z.object({
  id: z.string().optional(),
  tag: z.string().min(1),
  title: z.string().min(1),
  desc: z.string().min(1),
  date: z.string().min(1),
  readTime: z.string().min(1),
  author: z.string().min(1),
  img: z.string().min(1),
});

const eventSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  speaker: z.string().min(1),
  platform: z.string().min(1),
  desc: z.string().min(1),
  img: z.string().min(1),
});

const announcementSchema = z.object({
  id: z.string().optional(),
  text: z.string().min(1),
  time: z.string().min(1),
  type: z.string().min(1),
});

export const adminLogin = createServerFn({ method: "POST" })
  .inputValidator(z.object({ username: z.string().min(1), password: z.string().min(1) }))
  .handler(async ({ data }) => apiAdminLogin(data.username, data.password));

export const getPublicContent = createServerFn({ method: "GET" }).handler(async () => apiGetPublicContent());

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator(submissionSchema)
  .handler(async ({ data }) => apiSubmitInquiry(data));

export const getAdminDashboard = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string().min(1) }))
  .handler(async ({ data }) => apiGetAdminDashboard(data.token));

export const saveBlogs = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string().min(1), blogs: z.array(blogSchema) }))
  .handler(async ({ data }) => {
    await apiSaveBlogs(data.token, data.blogs as BlogPost[]);
    return { ok: true as const };
  });

export const saveEvents = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string().min(1), events: z.array(eventSchema) }))
  .handler(async ({ data }) => {
    await apiSaveEvents(data.token, data.events as WebinarEvent[]);
    return { ok: true as const };
  });

export const saveAnnouncements = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string().min(1), announcements: z.array(announcementSchema) }))
  .handler(async ({ data }) => {
    await apiSaveAnnouncements(data.token, data.announcements as Announcement[]);
    return { ok: true as const };
  });

export const saveSubmissions = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string().min(1), submissions: z.array(z.any()) }))
  .handler(async ({ data }) => {
    await apiSaveSubmissions(data.token, data.submissions as FormSubmission[]);
    return { ok: true as const };
  });

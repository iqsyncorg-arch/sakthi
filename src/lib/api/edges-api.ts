import type { Announcement, BlogPost, CmsStore, FormSubmission, PublicContent, WebinarEvent } from "../types/cms";

function getApiBaseUrl() {
  const configured =
    (typeof import.meta !== "undefined" ? import.meta.env.VITE_EDGES_API_URL : undefined) ??
    (typeof process !== "undefined" ? process.env.EDGES_API_URL : undefined);

  if (configured) return configured.replace(/\/$/, "");

  // Dev + SSR: use proxy path in browser; direct backend URL on server
  if (typeof window !== "undefined" && import.meta.env.DEV) {
    return "";
  }

  if (typeof process !== "undefined" && process.env.EDGES_API_URL) {
    return process.env.EDGES_API_URL.replace(/\/$/, "");
  }

  return "http://localhost:4000";
}

async function parseResponseBody(response: Response) {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    return { raw: text };
  }
}

async function apiRequest<T>(
  path: string,
  init?: RequestInit & { token?: string },
): Promise<T> {
  const { token, headers, ...rest } = init ?? {};
  let response: Response;

  try {
    response = await fetch(`${getApiBaseUrl()}${path}`, {
      ...rest,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
      },
    });
  } catch {
    throw new Error(
      "Cannot reach the Shakthi Academy API. Start the backend server and restart the frontend dev server.",
    );
  }

  const body = await parseResponseBody(response);
  if (!response.ok) {
    const message =
      typeof body.error === "string"
        ? body.error
        : `API request failed (${response.status})`;
    throw new Error(message);
  }
  return body as T;
}

export async function apiAdminLogin(username: string, password: string) {
  return apiRequest<{ token: string; expiresAt: number }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}

export async function apiGetPublicContent(): Promise<PublicContent> {
  return apiRequest<PublicContent>("/api/public/content");
}

export async function apiSubmitInquiry(data: {
  formName: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message?: string;
}) {
  return apiRequest<{ ok: true; id: string }>("/api/public/inquiries", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function apiGetAdminDashboard(token: string): Promise<CmsStore> {
  return apiRequest<CmsStore>("/api/admin/dashboard", { method: "GET", token });
}

export async function apiSaveBlogs(token: string, blogs: BlogPost[]) {
  return apiRequest<{ ok: true }>("/api/admin/blogs", {
    method: "PUT",
    token,
    body: JSON.stringify({ blogs }),
  });
}

export async function apiSaveEvents(token: string, events: WebinarEvent[]) {
  return apiRequest<{ ok: true }>("/api/admin/events", {
    method: "PUT",
    token,
    body: JSON.stringify({ events }),
  });
}

export async function apiSaveAnnouncements(
  token: string,
  announcements: Announcement[],
  announcementsEnabled?: boolean,
) {
  return apiRequest<{ ok: true }>("/api/admin/announcements", {
    method: "PUT",
    token,
    body: JSON.stringify({
      announcements,
      ...(announcementsEnabled !== undefined ? { announcementsEnabled } : {}),
    }),
  });
}

export async function apiSaveSubmissions(token: string, submissions: FormSubmission[]) {
  return apiRequest<{ ok: true }>("/api/admin/submissions", {
    method: "PUT",
    token,
    body: JSON.stringify({ submissions }),
  });
}

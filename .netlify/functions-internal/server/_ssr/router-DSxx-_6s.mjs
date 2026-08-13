import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, b as useLocation, O as Outlet, H as HeadContent, S as Scripts, d as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X, G as GraduationCap, C as CircleCheck, U as User, M as Mail, P as Phone, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-BwPmxa1g.css";
function getApiBaseUrl() {
  const configured = (typeof import.meta !== "undefined" ? "https://educellent-backend.onrender.com" : void 0) ?? (typeof process !== "undefined" ? process.env.EDGES_API_URL : void 0);
  if (configured) return configured.replace(/\/$/, "");
  if (typeof process !== "undefined" && process.env.EDGES_API_URL) {
    return process.env.EDGES_API_URL.replace(/\/$/, "");
  }
  return "http://localhost:4000";
}
async function parseResponseBody(response) {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}
async function apiRequest(path, init) {
  const { token, headers, ...rest } = init ?? {};
  let response;
  try {
    response = await fetch(`${getApiBaseUrl()}${path}`, {
      ...rest,
      headers: {
        "Content-Type": "application/json",
        ...token ? { Authorization: `Bearer ${token}` } : {},
        ...headers
      }
    });
  } catch {
    throw new Error(
      "Cannot reach the Shakthi Academy API. Start the backend server and restart the frontend dev server."
    );
  }
  const body = await parseResponseBody(response);
  if (!response.ok) {
    const message = typeof body.error === "string" ? body.error : `API request failed (${response.status})`;
    throw new Error(message);
  }
  return body;
}
async function apiAdminLogin(username, password) {
  return apiRequest("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password })
  });
}
async function apiGetPublicContent() {
  return apiRequest("/api/public/content");
}
async function apiSubmitInquiry(data) {
  return apiRequest("/api/public/inquiries", {
    method: "POST",
    body: JSON.stringify(data)
  });
}
async function apiGetAdminDashboard(token) {
  return apiRequest("/api/admin/dashboard", { method: "GET", token });
}
async function apiSaveBlogs(token, blogs) {
  return apiRequest("/api/admin/blogs", {
    method: "PUT",
    token,
    body: JSON.stringify({ blogs })
  });
}
async function apiSaveEvents(token, events) {
  return apiRequest("/api/admin/events", {
    method: "PUT",
    token,
    body: JSON.stringify({ events })
  });
}
async function apiSaveAnnouncements(token, announcements, announcementsEnabled) {
  return apiRequest("/api/admin/announcements", {
    method: "PUT",
    token,
    body: JSON.stringify({
      announcements,
      ...announcementsEnabled !== void 0 ? { announcementsEnabled } : {}
    })
  });
}
async function apiSaveSubmissions(token, submissions) {
  return apiRequest("/api/admin/submissions", {
    method: "PUT",
    token,
    body: JSON.stringify({ submissions })
  });
}
const STORAGE_KEY = "edges-lead-submitted";
const DISMISSED_KEY = "edges-lead-popup-dismissed";
const interests = [
  "Medical Admissions Guidance (MBBS/MD)",
  "University Admissions Guidance (UG / PG)",
  "Indian Universities Guidance",
  "STEM Programs Abroad Inquiry",
  "Visa Assistance Service",
  "IELTS / PTE / Test Prep Training",
  "General Inquiry / Feedback"
];
const hiddenPaths = ["/contact", "/admin"];
function LeadCapturePopup() {
  const location = useLocation();
  const [open, setOpen] = reactExports.useState(false);
  const [submitted, setSubmitted] = reactExports.useState(
    () => typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "1"
  );
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    interest: interests[0]
  });
  const shouldHide = hiddenPaths.some((path) => location.pathname === path || location.pathname.startsWith(`${path}/`));
  const handleToggle = () => {
    setOpen((v) => {
      const next = !v;
      if (!next) {
        sessionStorage.setItem(DISMISSED_KEY, "1");
      }
      return next;
    });
  };
  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  };
  reactExports.useEffect(() => {
    if (submitted || shouldHide) return;
    if (typeof window !== "undefined" && sessionStorage.getItem(DISMISSED_KEY) === "1") return;
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 5e3);
    return () => window.clearTimeout(timer);
  }, [submitted, shouldHide]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await apiSubmitInquiry({
        formName: "Lead Capture Popup",
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.interest,
        message: `Lead captured via site popup on ${location.pathname}.`
      });
      setSubmitted(true);
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (err) {
      console.error("Lead capture submission failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (shouldHide) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        role: "dialog",
        "aria-labelledby": "lead-capture-title",
        initial: { opacity: 0, y: 16, scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 12, scale: 0.96 },
        transition: { type: "spring", stiffness: 320, damping: 28 },
        className: "fixed bottom-[234px] right-6 z-[60] w-[min(calc(100vw-3rem),350px)] max-h-[min(70vh,520px)] overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100 flex flex-col",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-primary px-4 py-4 text-white relative overflow-hidden shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#F4B400]/20 blur-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleClose,
                className: "absolute right-3 top-3 z-20 h-8 w-8 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition cursor-pointer",
                "aria-label": "Close",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-start gap-2.5 pr-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-white/15 grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4 text-[#F4B400]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-extrabold uppercase tracking-widest text-white/75", children: "Free counseling" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "lead-capture-title", className: "mt-0.5 text-base font-extrabold leading-tight", children: "Start your study abroad journey" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-white/85 leading-relaxed", children: "A Shakthi Academy counselor will reach out within 24 hours." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 overflow-y-auto", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 grid place-items-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-[#0A3D62] text-lg", children: "You're on the list!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-slate-500 leading-relaxed", children: "Thank you. Our team will contact you shortly." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleClose,
                className: "mt-6 w-full rounded-xl bg-[#0A3D62] text-white text-sm font-bold py-3 hover:bg-[#0A3D62]/90 transition",
                children: "Close"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1", children: "Full name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    required: true,
                    placeholder: "Your name",
                    value: form.name,
                    onChange: (e) => setForm({ ...form, name: e.target.value }),
                    className: "w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "email",
                      required: true,
                      placeholder: "you@email.com",
                      value: form.email,
                      onChange: (e) => setForm({ ...form, email: e.target.value }),
                      className: "w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "tel",
                      required: true,
                      placeholder: "+91 ...",
                      value: form.phone,
                      onChange: (e) => setForm({ ...form, phone: e.target.value }),
                      className: "w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1", children: "I'm interested in" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  value: form.interest,
                  onChange: (e) => setForm({ ...form, interest: e.target.value }),
                  className: "w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white transition",
                  children: interests.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item, children: item }, item))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                disabled: isSubmitting,
                className: "mt-1 w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-primary text-white text-xs font-bold py-2.5 shadow-glow hover:opacity-95 transition disabled:opacity-60",
                children: [
                  isSubmitting ? "Submitting..." : "Get Free Counseling",
                  !isSubmitting && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-center text-slate-400 leading-relaxed", children: [
              "Or call us directly at",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+917993473399", className: "font-semibold text-[#4DA8DA] hover:underline", children: "+91 79934 73399" })
            ] })
          ] }) })
        ]
      }
    ) }),
    !submitted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-[168px] right-6 z-50 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-white border border-slate-100 shadow-lg text-slate-800 text-xs font-extrabold rounded-xl px-4 py-2.5 shrink-0 select-none whitespace-nowrap", children: [
        "Free ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#F4B400]", children: "Counseling" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handleToggle,
          className: `relative h-14 w-14 rounded-full flex items-center justify-center shadow-glow shrink-0 transition ${open ? "bg-[#0A3D62] text-white" : "bg-gradient-to-tr from-[#F4B400] to-amber-500 text-[#0A3D62]"}`,
          "aria-label": open ? "Close counseling form" : "Open free counseling form",
          "aria-expanded": open,
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-6 w-6" })
        }
      )
    ] })
  ] });
}
const COMPANY_NAME = "Shakthi Academy";
const COMPANY_TAGLINE = "Inspiring Minds. Igniting Potential.";
const PARTNER_NOTE = "We serve only the direct partnered Universities and continue to add more. Please let us know your preferred country, university, and program, as we have extended outreach for highly reliable & fast services.";
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/104154651/admin/dashboard/",
  facebook: "https://www.facebook.com/Educellent",
  instagram: "https://www.instagram.com/educellent_global_education/",
  youtube: "https://www.youtube.com/channel/UC0Dv2mAXXzw20HU46n7YLqA"
};
const CONTACT_EMAIL = "info@shakthiacademy.com";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$o = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${COMPANY_NAME} — Inspiring Minds. Igniting Potential. Creating Impact.` },
      { name: "description", content: "A global academy committed to academic excellence, skill development and real-world success." },
      { name: "author", content: COMPANY_NAME },
      { property: "og:title", content: `${COMPANY_NAME} — Inspiring Minds. Igniting Potential. Creating Impact.` },
      { property: "og:description", content: "Education, Employment, Entrepreneurship — pathways designed for every stage of growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ShakthiAcademy" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "icon", type: "image/png", href: "/brand/logo-icon.png" },
      { rel: "apple-touch-icon", href: "/brand/logo-icon.png" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$o.useRouteContext();
  const [isChatOpen, setIsChatOpen] = reactExports.useState(false);
  const [chatMessage, setChatMessage] = reactExports.useState("");
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  if (isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeadCapturePopup, {}),
    isChatOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-[164px] right-6 w-[300px] sm:w-[350px] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col z-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-tr from-emerald-600 to-green-500 text-white p-4 flex items-center justify-between shadow-sm shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm select-none", children: [
            "SA",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-emerald-600" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-extrabold text-sm leading-tight text-white", children: "Shakthi Assistant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-white/90 font-semibold mt-0.5", children: "Online • Typically replies instantly" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "tel:+917993473399",
              className: "h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white",
              title: "Call Hotline",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-4 w-4 fill-none stroke-current stroke-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setIsChatOpen(false),
              className: "h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white",
              title: "Close Chat",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", className: "h-4 w-4 fill-none stroke-current stroke-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-[#efeae2] h-48 overflow-y-auto flex flex-col gap-3 relative select-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[85%] bg-white rounded-2xl rounded-tl-none p-3 shadow-sm relative z-10 self-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-slate-800 leading-relaxed font-medium", children: [
            "Hello! 👋 Welcome to ",
            COMPANY_NAME,
            ". How can we assist you with your programs, admissions, or career journey today?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-slate-400 block text-right mt-1.5 uppercase", children: "Agent • Just Now" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            const encodedMsg = encodeURIComponent(chatMessage);
            window.open(`https://wa.me/917993473399?text=${encodedMsg}`, "_blank");
            setChatMessage("");
            setIsChatOpen(false);
          },
          className: "p-3 bg-white border-t border-slate-100 flex items-center gap-2 shrink-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Type your message here...",
                value: chatMessage,
                onChange: (e) => setChatMessage(e.target.value),
                className: "flex-1 rounded-xl bg-slate-50 border border-slate-100 px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:border-green-500/50 transition-colors font-medium text-slate-800"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center shadow-md shrink-0",
                title: "Send on WhatsApp",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-4 w-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" }) })
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-white border border-slate-100 shadow-lg text-slate-800 text-xs font-extrabold rounded-xl px-4 py-2.5 shrink-0 select-none whitespace-nowrap", children: [
          "Call ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0A3D62]", children: "Shakthi Academy" }),
          " Hotline"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "tel:+917993473399",
            className: "relative h-14 w-14 rounded-full bg-gradient-to-tr from-[#0A3D62] to-[#4DA8DA] text-white flex items-center justify-center shadow-glow shrink-0",
            "aria-label": "Call Shakthi Academy Hotline",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                viewBox: "0 0 24 24",
                className: "h-6 w-6 relative z-10 fill-none stroke-current stroke-2",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-white border border-slate-100 shadow-lg text-slate-800 text-xs font-extrabold rounded-xl px-4 py-2.5 shrink-0 select-none whitespace-nowrap", children: [
          "Chat with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#4DA8DA]", children: "Shakthi Academy" }),
          " Mentors"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setIsChatOpen((v) => !v),
            className: "relative h-14 w-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center shadow-glow shrink-0",
            "aria-label": "Toggle WhatsApp Chatbot",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                viewBox: "0 0 448 512",
                className: "h-6 w-6 relative z-10 fill-current",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-117zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
              }
            )
          }
        )
      ] })
    ] })
  ] });
}
const $$splitComponentImporter$n = () => import("./visa-assistance-Co8f2ffi.mjs");
const Route$n = createFileRoute("/visa-assistance")({
  head: () => ({
    meta: [{
      title: "Visa Assistance | Shakthi Academy"
    }, {
      name: "description",
      content: "Expert visa guidance from Shakthi Academy — documentation, interview prep, application tracking, refusal handling, and post-arrival support for students studying abroad."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./usmle-DbIFSYrO.mjs");
const Route$m = createFileRoute("/usmle")({
  head: () => ({
    meta: [{
      title: "USMLE Prep & US Residency Roadmap | Shakthi Academy"
    }, {
      name: "description",
      content: "Navigate your USMLE Steps and secure a matched US residency slot. ECFMG credentials registration and high-yield system reviews with experts."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./university-admissions-BRubVMHg.mjs");
const Route$l = createFileRoute("/university-admissions")({
  head: () => ({
    meta: [{
      title: "Medical Admissions — Study MBBS/MD Abroad | Shakthi Academy"
    }, {
      name: "description",
      content: "Explore MBBS and MD programs across Poland, Kazakhstan, Russia, Georgia, Caribbean and more. Expert medical admissions guidance from Shakthi Academy."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./travel-assistance-C7ec2uDG.mjs");
const Route$k = createFileRoute("/travel-assistance")({
  head: () => ({
    meta: [{
      title: "Personalized Travel Assistance | Shakthi Academy"
    }, {
      name: "description",
      content: "Shakthi Academy travel assistance — pre-travel planning, flight booking, accommodation, airport support, and post-arrival orientation for students studying abroad."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./toefl-DqSulv_6.mjs");
const Route$j = createFileRoute("/toefl")({
  head: () => ({
    meta: [{
      title: "TOEFL Coaching & Test Preparation | Shakthi Academy"
    }, {
      name: "description",
      content: "Master academic English and score high on the TOEFL iBT exam. Join Shakthi Academy's test preparation classes led by expert instructors."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./sop-writing-D3utoWj5.mjs");
const Route$i = createFileRoute("/sop-writing")({
  head: () => ({
    meta: [{
      title: "SOP Writing Guide | How to Write a Compelling SOP | Shakthi Academy"
    }, {
      name: "description",
      content: "Learn how to write a compelling Statement of Purpose (SOP) for your university application. Explore SOP structure, writing tips, and Do's & Don'ts with Shakthi Academy."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./pte-CKq4NG-b.mjs");
const Route$h = createFileRoute("/pte")({
  head: () => ({
    meta: [{
      title: "PTE Academic Coaching & Preparation | Shakthi Academy"
    }, {
      name: "description",
      content: "Fast track your global study and visa plans with PTE Academic training at Shakthi Academy. Master speaking, writing, reading, and listening AI templates."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./privacy-policy-DbbLEYLG.mjs");
const Route$g = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy | Shakthi Academy"
    }, {
      name: "description",
      content: "Read how Shakthi Academy collects, uses, and protects your personal information when you use our study abroad counseling services."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./plab-B2InnVdH.mjs");
const Route$f = createFileRoute("/plab")({
  head: () => ({
    meta: [{
      title: "PLAB Coaching & GMC Registration Support | Shakthi Academy"
    }, {
      name: "description",
      content: "Prepare for PLAB Part 1 & 2 OSCE. Get expert NHS resume guidance, mock stations, and complete UK GMC registration path guidance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./other-programs-C2Ek8PVO.mjs");
const Route$e = createFileRoute("/other-programs")({
  head: () => ({
    meta: [{
      title: "Other Programs & Universities | Shakthi Academy"
    }, {
      name: "description",
      content: "Explore UG, PG, PhD and STEM programs abroad — Computer Science, Psychology, Biotechnology, Law, Management and more. Personalized guidance from Shakthi Academy."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./oet-RrZd47WQ.mjs");
const Route$d = createFileRoute("/oet")({
  head: () => ({
    meta: [{
      title: "OET Prep for Doctors & Nurses | Shakthi Academy"
    }, {
      name: "description",
      content: "Professional OET coaching for medical practitioners and nurses. Achieve Grade B or higher with clinical case scenarios and specialized mentors."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./neet-C7oBCa_Y.mjs");
const Route$c = createFileRoute("/neet")({
  head: () => ({
    meta: [{
      title: "NEET Eligibility Coaching & MBBS Abroad | Shakthi Academy"
    }, {
      name: "description",
      content: "Qualify NEET to pursue your MBBS degree abroad. Complete guidance on top NMC approved universities in Georgia, Europe, and Russia."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./mbbs-to-md-DZXBrmFW.mjs");
const Route$b = createFileRoute("/mbbs-to-md")({
  head: () => ({
    meta: [{
      title: "MBBS to MD Pathway Programs | Shakthi Academy"
    }, {
      name: "description",
      content: "Bridge programs for MBBS graduates seeking MD advanced standing, USMLE readiness, and U.S. clinical rotations at partner Caribbean and Guyana medical schools."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./indian-universities-DH7piHGs.mjs");
const Route$a = createFileRoute("/indian-universities")({
  head: () => ({
    meta: [{
      title: "Indian Universities | Shakthi Academy"
    }, {
      name: "description",
      content: "Shakthi Academy guidance for top Indian universities — admissions counseling for UG, PG, and professional programs across India."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./ielts-CWSNOaUm.mjs");
const Route$9 = createFileRoute("/ielts")({
  head: () => ({
    meta: [{
      title: "IELTS Coaching & Test Preparation | Shakthi Academy"
    }, {
      name: "description",
      content: "Comprehensive IELTS coaching at Shakthi Academy. Master Reading, Writing, Speaking, and Listening modules with expert trainers and regular mocks."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./gre-CVl1fMxN.mjs");
const Route$8 = createFileRoute("/gre")({
  head: () => ({
    meta: [{
      title: "GRE Test Preparation Classes | Shakthi Academy"
    }, {
      name: "description",
      content: "Supercharge your MS, MBA or PhD admissions with GRE general test prep at Shakthi Academy. Comprehensive Quant lectures and high-frequency Verbal vocab."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./education-loan-DxzVw93j.mjs");
const Route$7 = createFileRoute("/education-loan")({
  head: () => ({
    meta: [{
      title: "Education Loan Assistance | Student Loans for Study Abroad | Shakthi Academy"
    }, {
      name: "description",
      content: "Securing student loans for studying abroad is simple with Shakthi Academy. Partnering with top financial institutions like SBI, YES BANK, AVANSE, & AUXILO to guide your funding."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./duolingo-MUx0WMf2.mjs");
const Route$6 = createFileRoute("/duolingo")({
  head: () => ({
    meta: [{
      title: "Duolingo English Test Prep | Shakthi Academy"
    }, {
      name: "description",
      content: "Succeed in the modern, online Duolingo English Test with targeted guidance, practice mocks, and subscore boosting strategies at Shakthi Academy."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-8rMDpk7N.mjs");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us | Shakthi Academy"
    }, {
      name: "description",
      content: "Get in touch with Shakthi Academy's study abroad experts in Hyderabad. Consultations on admissions, visa assistance, SOP editing, and education loans."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./career-counseling-BvYtEFvo.mjs");
const Route$4 = createFileRoute("/career-counseling")({
  head: () => ({
    meta: [{
      title: "Career Counseling | Shakthi Academy"
    }, {
      name: "description",
      content: "Crafting a future, not just a job. Psychometric assessments, career roadmaps, and ethical counseling from Shakthi Academy."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./blogs-events-DyuyTAAj.mjs");
const Route$3 = createFileRoute("/blogs-events")({
  head: () => ({
    meta: [{
      title: "Blogs & Events | Shakthi Academy"
    }, {
      name: "description",
      content: "Stay updated with global education news, visa updates, university admissions blogs, and register for upcoming global webinars and events."
    }, {
      property: "og:title",
      content: "Shakthi Academy Blogs, Insights & Webinars"
    }, {
      property: "og:description",
      content: "Latest articles and register for international university events."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const fallbackEvents = [{
  id: "uk-admissions-fair",
  title: "UK Admissions & Scholarship Fair 2026",
  date: "July 12, 2026",
  time: "4:00 PM - 6:00 PM IST",
  speaker: "UK University Representative Panel",
  platform: "Zoom Video Seminar",
  desc: "Interact directly with admission officers from elite UK universities. Learn about CAS letters, fast-track visa processing, and post-study work routes.",
  img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=70"
}, {
  id: "us-visa-masterclass",
  title: "F-1 Student Visa Interview Masterclass",
  date: "July 20, 2026",
  time: "5:30 PM - 7:00 PM IST",
  speaker: "Senior Visa Advisor, EDGE",
  platform: "Live Interactive Webinar",
  desc: "Learn how to answer tough consular questions about financial stability, ties to home country, and university choices. Real-time Q&A included.",
  img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=70"
}, {
  id: "germany-free-education",
  title: "Germany Tuition-Free Education Pathways",
  date: "August 05, 2026",
  time: "3:00 PM - 4:30 PM IST",
  speaker: "DAAD Alumni Council Panel",
  platform: "Virtual Event Lobby",
  desc: "Understand language proficiency requirements (German vs. English-medium), blocking account details, and public university application cycles.",
  img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=70"
}];
const $$splitComponentImporter$2 = () => import("./admin-TYMDuMC6.mjs");
const Route$2 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Shakthi Academy | Admin Management Dashboard"
    }, {
      name: "robots",
      content: "noindex, nofollow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-BA1TsocB.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Shakthi Academy — Igniting Excellence in Global Education"
    }, {
      name: "description",
      content: "Discover the Shakthi Academy story — born from passion, driven by student success. Mission, vision, and end-to-end overseas education support tailored to you."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-6SM2YZQJ.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Shakthi Academy — Inspiring Minds. Igniting Potential. Creating Impact."
    }, {
      name: "description",
      content: "A global academy committed to academic excellence, skill development and real-world success. Explore programs from school to career."
    }, {
      property: "og:title",
      content: "Shakthi Academy"
    }, {
      property: "og:description",
      content: "Education, Employment, Entrepreneurship — pathways designed for every stage of growth."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const VisaAssistanceRoute = Route$n.update({
  id: "/visa-assistance",
  path: "/visa-assistance",
  getParentRoute: () => Route$o
});
const UsmleRoute = Route$m.update({
  id: "/usmle",
  path: "/usmle",
  getParentRoute: () => Route$o
});
const UniversityAdmissionsRoute = Route$l.update({
  id: "/university-admissions",
  path: "/university-admissions",
  getParentRoute: () => Route$o
});
const TravelAssistanceRoute = Route$k.update({
  id: "/travel-assistance",
  path: "/travel-assistance",
  getParentRoute: () => Route$o
});
const ToeflRoute = Route$j.update({
  id: "/toefl",
  path: "/toefl",
  getParentRoute: () => Route$o
});
const SopWritingRoute = Route$i.update({
  id: "/sop-writing",
  path: "/sop-writing",
  getParentRoute: () => Route$o
});
const PteRoute = Route$h.update({
  id: "/pte",
  path: "/pte",
  getParentRoute: () => Route$o
});
const PrivacyPolicyRoute = Route$g.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$o
});
const PlabRoute = Route$f.update({
  id: "/plab",
  path: "/plab",
  getParentRoute: () => Route$o
});
const OtherProgramsRoute = Route$e.update({
  id: "/other-programs",
  path: "/other-programs",
  getParentRoute: () => Route$o
});
const OetRoute = Route$d.update({
  id: "/oet",
  path: "/oet",
  getParentRoute: () => Route$o
});
const NeetRoute = Route$c.update({
  id: "/neet",
  path: "/neet",
  getParentRoute: () => Route$o
});
const MbbsToMdRoute = Route$b.update({
  id: "/mbbs-to-md",
  path: "/mbbs-to-md",
  getParentRoute: () => Route$o
});
const IndianUniversitiesRoute = Route$a.update({
  id: "/indian-universities",
  path: "/indian-universities",
  getParentRoute: () => Route$o
});
const IeltsRoute = Route$9.update({
  id: "/ielts",
  path: "/ielts",
  getParentRoute: () => Route$o
});
const GreRoute = Route$8.update({
  id: "/gre",
  path: "/gre",
  getParentRoute: () => Route$o
});
const EducationLoanRoute = Route$7.update({
  id: "/education-loan",
  path: "/education-loan",
  getParentRoute: () => Route$o
});
const DuolingoRoute = Route$6.update({
  id: "/duolingo",
  path: "/duolingo",
  getParentRoute: () => Route$o
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$o
});
const CareerCounselingRoute = Route$4.update({
  id: "/career-counseling",
  path: "/career-counseling",
  getParentRoute: () => Route$o
});
const BlogsEventsRoute = Route$3.update({
  id: "/blogs-events",
  path: "/blogs-events",
  getParentRoute: () => Route$o
});
const AdminRoute = Route$2.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$o
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$o
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$o
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
  BlogsEventsRoute,
  CareerCounselingRoute,
  ContactRoute,
  DuolingoRoute,
  EducationLoanRoute,
  GreRoute,
  IeltsRoute,
  IndianUniversitiesRoute,
  MbbsToMdRoute,
  NeetRoute,
  OetRoute,
  OtherProgramsRoute,
  PlabRoute,
  PrivacyPolicyRoute,
  PteRoute,
  SopWritingRoute,
  ToeflRoute,
  TravelAssistanceRoute,
  UniversityAdmissionsRoute,
  UsmleRoute,
  VisaAssistanceRoute
};
const routeTree = Route$o._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  COMPANY_NAME as C,
  PARTNER_NOTE as P,
  SOCIAL_LINKS as S,
  apiSubmitInquiry as a,
  apiGetPublicContent as b,
  apiGetAdminDashboard as c,
  apiAdminLogin as d,
  apiSaveSubmissions as e,
  fallbackEvents as f,
  apiSaveBlogs as g,
  apiSaveEvents as h,
  apiSaveAnnouncements as i,
  CONTACT_EMAIL as j,
  COMPANY_TAGLINE as k,
  router as r
};

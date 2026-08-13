import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Logo } from "./Logo-DDrCU-to.mjs";
import { c as countLiveAnnouncements, g as getAnnouncementTypeConfig, i as isAnnouncementPubliclyVisible, A as AnnouncementTypeIcon, C as CategoryPicker, n as normalizeAnnouncementType } from "./AnnouncementTypeIcon-UhCTDZtA.mjs";
import { c as apiGetAdminDashboard, d as apiAdminLogin, e as apiSaveSubmissions, g as apiSaveBlogs, h as apiSaveEvents, i as apiSaveAnnouncements } from "./router-DSxx-_6s.mjs";
import { av as CircleAlert, aw as LoaderCircle, ax as Inbox, s as BookOpen, e as Calendar, as as Megaphone, ay as LogOut, i as Menu, f as RefreshCw, az as LayoutDashboard, am as Plus, ar as Eye, aA as Trash2, X, aB as Power, aC as EyeOff, aD as Pencil, aE as Play, aF as Pause, aq as ChevronLeft, ad as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function PageLoader({ label = "Loading dashboard…" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-24 gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 text-[#4DA8DA] animate-spin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-500", children: label })
  ] });
}
function PanelLoader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-[1px] rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-7 w-7 text-[#0A3D62] animate-spin" }) });
}
function PaginationBar({ page, pageSize, total, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, totalPages);
  const start = total === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const end = Math.min(safePage * pageSize, total);
  if (total === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 mt-4 border-t border-slate-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500 font-medium", children: [
      "Showing ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-700", children: [
        start,
        "–",
        end
      ] }),
      " of",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-700", children: total })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          disabled: safePage <= 1,
          onClick: () => onPageChange(safePage - 1),
          className: "h-8 w-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition",
          "aria-label": "Previous page",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
        }
      ),
      Array.from({ length: totalPages }, (_, i) => i + 1).filter((p) => p === 1 || p === totalPages || Math.abs(p - safePage) <= 1).map((p, idx, arr) => {
        const prev = arr[idx - 1];
        const showEllipsis = prev && p - prev > 1;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          showEllipsis && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1 text-slate-400", children: "…" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => onPageChange(p),
              className: `min-w-8 h-8 px-2 rounded-lg text-xs font-bold transition ${p === safePage ? "bg-[#0A3D62] text-white shadow-sm" : "border border-slate-200 text-slate-600 hover:bg-slate-50"}`,
              children: p
            }
          )
        ] }, p);
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          disabled: safePage >= totalPages,
          onClick: () => onPageChange(safePage + 1),
          className: "h-8 w-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition",
          "aria-label": "Next page",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
        }
      )
    ] })
  ] });
}
function paginateSlice(items, page, pageSize) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    slice: items.slice(start, start + pageSize),
    totalPages,
    safePage
  };
}
const defaultForm = {
  text: "",
  time: "Just now",
  type: "urgent",
  visibility: "public",
  publishImmediately: true
};
function formToAnnouncement(form, id) {
  const isDraft = !form.publishImmediately;
  return {
    id: `ann_${Date.now()}`,
    text: form.text.trim(),
    time: form.time.trim() || "Just now",
    type: normalizeAnnouncementType(form.type),
    visibility: form.visibility,
    status: isDraft ? "draft" : "published",
    enabled: !isDraft
  };
}
function announcementToForm(ann) {
  return {
    text: ann.text,
    time: ann.time,
    type: normalizeAnnouncementType(ann.type),
    visibility: ann.visibility ?? "public",
    publishImmediately: ann.status !== "draft" && ann.enabled !== false
  };
}
function AlertFormFields({
  form,
  setForm
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-slate-500 mb-1.5", children: "Alert Message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          required: true,
          rows: 3,
          placeholder: "e.g. US F-1 visa slots released for Chennai Consulate.",
          value: form.text,
          onChange: (e) => setForm({ ...form, text: e.target.value }),
          className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#4DA8DA] text-sm"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-slate-500 mb-2", children: "Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CategoryPicker,
        {
          value: form.type,
          onChange: (type) => setForm({ ...form, type })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-slate-500 mb-1.5", children: "Time indicator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          required: true,
          placeholder: "Just now",
          value: form.time,
          onChange: (e) => setForm({ ...form, time: e.target.value }),
          className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#4DA8DA] text-sm"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-slate-500 mb-2", children: "Visibility" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4", children: ["public", "internal"].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "radio",
            name: "visibility",
            checked: form.visibility === v,
            onChange: () => setForm({ ...form, visibility: v }),
            className: "text-[#0A3D62] focus:ring-[#4DA8DA]"
          }
        ),
        v === "public" ? "Public" : "Internal only"
      ] }, v)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2.5 cursor-pointer p-3 rounded-xl bg-slate-50 border border-slate-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "checkbox",
          checked: form.publishImmediately,
          onChange: (e) => setForm({ ...form, publishImmediately: e.target.checked }),
          className: "rounded border-slate-300 text-[#0A3D62] focus:ring-[#4DA8DA]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-700", children: "Publish immediately on save" })
    ] })
  ] });
}
function AdminAnnouncementsPanel({
  announcements,
  announcementsEnabled,
  isSaving,
  onSave,
  onSetAnnouncements,
  onSetFeedEnabled
}) {
  const [showCreate, setShowCreate] = reactExports.useState(false);
  const [editingId, setEditingId] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState(defaultForm);
  const liveCount = countLiveAnnouncements(announcements, announcementsEnabled);
  const persist = async (updated, options) => {
    onSetAnnouncements(updated);
    await onSave(updated, options);
  };
  const handlePublish = async (asDraft) => {
    const ann = formToAnnouncement(form);
    if (asDraft) {
      ann.status = "draft";
      ann.enabled = false;
    } else if (ann.visibility === "public" && !announcementsEnabled) {
      onSetFeedEnabled(true);
    }
    const updated = editingId ? announcements.map((a) => a.id === editingId ? { ...ann, id: editingId } : a) : [ann, ...announcements];
    await persist(
      updated,
      !asDraft && ann.visibility === "public" && !announcementsEnabled ? { announcementsEnabled: true } : void 0
    );
    setShowCreate(false);
    setEditingId(null);
    setForm(defaultForm);
  };
  const handlePause = async (id) => {
    const item = announcements.find((a) => a.id === id);
    if (!item) return;
    const pausing = item.enabled !== false;
    const updated = announcements.map(
      (a) => a.id === id ? { ...a, enabled: pausing ? false : true, status: pausing ? "draft" : "published" } : a
    );
    const resuming = !pausing && item.visibility === "public";
    if (resuming && !announcementsEnabled) onSetFeedEnabled(true);
    await persist(updated, resuming && !announcementsEnabled ? { announcementsEnabled: true } : void 0);
  };
  const handleDelete = async (id) => {
    if (!confirm("Delete this alert permanently?")) return;
    await persist(announcements.filter((a) => a.id !== id));
  };
  const handleToggleFeed = async () => {
    const next = !announcementsEnabled;
    onSetFeedEnabled(next);
    await onSave(announcements, { announcementsEnabled: next });
  };
  const startEdit = (ann) => {
    setEditingId(ann.id);
    setForm(announcementToForm(ann));
    setShowCreate(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative space-y-6", children: [
    isSaving && /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLoader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[#0A3D62]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-5 w-5 text-[#4DA8DA]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold", children: "Live Alert Center" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 mt-1", children: "Publish real-time visa, admission, and campus updates to students." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            setShowCreate(true);
            setEditingId(null);
            setForm(defaultForm);
          },
          className: "inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-bold px-5 py-2.5 shadow-sm hover:opacity-95 transition shrink-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            "Create New Alert"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col sm:flex-row sm:items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: handleToggleFeed,
          className: `inline-flex items-center gap-2 rounded-xl text-xs font-bold px-4 py-2.5 transition shadow-sm ${announcementsEnabled ? "bg-emerald-600 text-white hover:bg-emerald-500" : "bg-amber-500 text-white hover:bg-amber-400"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "h-3.5 w-3.5" }),
            "Public feed: ",
            announcementsEnabled ? "Enabled" : "Disabled"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-slate-600 sm:ml-auto", children: [
        liveCount,
        " live on website · ",
        announcements.length,
        " total in dashboard"
      ] })
    ] }),
    !announcementsEnabled && announcements.some((a) => a.enabled !== false && a.visibility === "public") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold leading-relaxed", children: "Alerts are ready but the public feed is off. Enable the feed to show them on the homepage and Blogs & Events page." })
    ] }),
    (showCreate || editingId) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#4DA8DA]/30 bg-white shadow-sm overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-[#0A3D62]", children: editingId ? "Edit Alert" : "Create Alert" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setShowCreate(false);
              setEditingId(null);
              setForm(defaultForm);
            },
            className: "h-8 w-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-500",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            void handlePublish(false);
          },
          className: "p-5 space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertFormFields, { form, setForm }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2 pt-2 border-t border-slate-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => void handlePublish(true),
                  className: "flex-1 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold py-3 hover:bg-slate-50 transition",
                  children: "Save Draft"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  className: "flex-1 rounded-xl gradient-primary text-white text-sm font-bold py-3 hover:opacity-95 transition",
                  children: "Publish Alert"
                }
              )
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-extrabold text-[#0A3D62] mb-3", children: [
        "Active Alerts (",
        announcements.length,
        ")"
      ] }),
      announcements.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-8 w-8 text-slate-300 mx-auto mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-600", children: "No alerts yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-1", children: "Create your first live alert for students." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: announcements.map((ann) => {
        const config = getAnnouncementTypeConfig(ann.type);
        const isLive = isAnnouncementPubliclyVisible(ann) && announcementsEnabled;
        const isPaused = ann.enabled === false || ann.status === "draft";
        const isInternal = ann.visibility === "internal";
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `rounded-2xl border p-5 transition ${isLive ? config.cardClass : "border-slate-200 bg-slate-50/80 opacity-90"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementTypeIcon, { type: ann.type, size: "sm" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${config.badgeClass}`, children: config.label }),
                  isLive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700", children: "Live" }),
                  isPaused && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-700", children: "Paused" }),
                  isInternal && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-3 w-3" }),
                    " Internal"
                  ] }),
                  !isInternal && !isPaused && announcementsEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3" }),
                    " Public"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[#0A3D62] leading-relaxed", children: ann.text }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-slate-500 mt-3", children: ann.time })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => startEdit(ann),
                    className: "inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }),
                      " Edit"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => void handlePause(ann.id),
                    className: "inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition",
                    children: isPaused ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3.5 w-3.5" }),
                      " Resume"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-3.5 w-3.5" }),
                      " Pause"
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => void handleDelete(ann.id),
                    className: "inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-2 rounded-lg transition",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }),
                      " Delete"
                    ]
                  }
                )
              ] })
            ] })
          },
          ann.id
        );
      }) })
    ] })
  ] });
}
const TOKEN_KEY = "edge_admin_token";
function getAdminToken() {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(TOKEN_KEY);
}
function setAdminToken(token) {
  sessionStorage.setItem(TOKEN_KEY, token);
}
function clearAdminToken() {
  sessionStorage.removeItem(TOKEN_KEY);
}
const PAGE_SIZE = 8;
function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = reactExports.useState(false);
  const [username, setUsername] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [authError, setAuthError] = reactExports.useState("");
  const [activeTab, setActiveTab] = reactExports.useState("submissions");
  const [submissions, setSubmissions] = reactExports.useState([]);
  const [blogsList, setBlogsList] = reactExports.useState([]);
  const [eventsList, setEventsList] = reactExports.useState([]);
  const [announcementsList, setAnnouncementsList] = reactExports.useState([]);
  const [announcementsEnabled, setAnnouncementsEnabled] = reactExports.useState(true);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [isRefreshing, setIsRefreshing] = reactExports.useState(false);
  const [isSaving, setIsSaving] = reactExports.useState(false);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const [editingBlog, setEditingBlog] = reactExports.useState(null);
  const [editingEvent, setEditingEvent] = reactExports.useState(null);
  const [selectedSub, setSelectedSub] = reactExports.useState(null);
  const [showAddBlog, setShowAddBlog] = reactExports.useState(false);
  const [blogForm, setBlogForm] = reactExports.useState({
    title: "",
    tag: "Visa Update",
    desc: "",
    date: "",
    readTime: "",
    author: "Admissions Team",
    img: ""
  });
  const [showAddEvent, setShowAddEvent] = reactExports.useState(false);
  const [eventForm, setEventForm] = reactExports.useState({
    title: "",
    date: "",
    time: "",
    speaker: "",
    platform: "Zoom Video Seminar",
    desc: "",
    img: ""
  });
  const loadData = reactExports.useCallback(async (refresh = false) => {
    const token = getAdminToken();
    if (!token) return;
    if (refresh) setIsRefreshing(true);
    else setIsLoading(true);
    try {
      const store = await apiGetAdminDashboard(token);
      setSubmissions(store.submissions);
      setBlogsList(store.blogs);
      setEventsList(store.events);
      setAnnouncementsList(store.announcements);
      setAnnouncementsEnabled(store.announcementsEnabled !== false);
    } catch {
      clearAdminToken();
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);
  reactExports.useEffect(() => {
    const token = getAdminToken();
    setIsLoggedIn(Boolean(token));
    if (token) void loadData();
    else setIsLoading(false);
  }, [loadData]);
  reactExports.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);
  const withSaving = async (fn) => {
    setIsSaving(true);
    try {
      await fn();
    } finally {
      setIsSaving(false);
    }
  };
  const persistSubmissions = async (updated) => {
    const token = getAdminToken();
    if (!token) return;
    await apiSaveSubmissions(token, updated);
  };
  const persistBlogs = async (updated) => {
    const token = getAdminToken();
    if (!token) return;
    await apiSaveBlogs(token, updated);
  };
  const persistEvents = async (updated) => {
    const token = getAdminToken();
    if (!token) return;
    await apiSaveEvents(token, updated);
  };
  const persistAnnouncements = async (updated, options) => {
    const token = getAdminToken();
    if (!token) return;
    const enabledFlag = options?.announcementsEnabled ?? announcementsEnabled;
    await apiSaveAnnouncements(token, updated, enabledFlag);
  };
  const handleDeleteSub = async (id) => {
    await withSaving(async () => {
      const updated = submissions.filter((s) => s.id !== id);
      setSubmissions(updated);
      await persistSubmissions(updated);
    });
  };
  const handleClearAllSubs = async () => {
    if (confirm("Are you sure you want to clear all form responses?")) {
      await withSaving(async () => {
        setSubmissions([]);
        await persistSubmissions([]);
        setCurrentPage(1);
      });
    }
  };
  const handleDeleteBlog = async (id) => {
    await withSaving(async () => {
      const updated = blogsList.filter((b) => b.id !== id);
      setBlogsList(updated);
      await persistBlogs(updated);
    });
  };
  const handleDeleteEvent = async (id) => {
    await withSaving(async () => {
      const updated = eventsList.filter((e) => e.id !== id);
      setEventsList(updated);
      await persistEvents(updated);
    });
  };
  const handleAddBlogSubmit = async (e) => {
    e.preventDefault();
    await withSaving(async () => {
      const newBlog = {
        id: "blog_" + Date.now(),
        ...blogForm,
        img: blogForm.img || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=70"
      };
      const updated = [newBlog, ...blogsList];
      setBlogsList(updated);
      await persistBlogs(updated);
      setShowAddBlog(false);
      setBlogForm({
        title: "",
        tag: "Visa Update",
        desc: "",
        date: "June 29, 2026",
        readTime: "5 min read",
        author: "Admissions Team",
        img: ""
      });
    });
  };
  const handleAddEventSubmit = async (e) => {
    e.preventDefault();
    await withSaving(async () => {
      const newEvent = {
        id: "event_" + Date.now(),
        ...eventForm,
        img: eventForm.img || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=70"
      };
      const updated = [newEvent, ...eventsList];
      setEventsList(updated);
      await persistEvents(updated);
      setShowAddEvent(false);
      setEventForm({
        title: "",
        date: "",
        time: "",
        speaker: "",
        platform: "Zoom Video Seminar",
        desc: "",
        img: ""
      });
    });
  };
  const handleEditBlogSubmit = async (e) => {
    e.preventDefault();
    if (!editingBlog) return;
    await withSaving(async () => {
      const updated = blogsList.map((b) => b.id === editingBlog.id ? editingBlog : b);
      setBlogsList(updated);
      await persistBlogs(updated);
      setEditingBlog(null);
    });
  };
  const handleEditEventSubmit = async (e) => {
    e.preventDefault();
    if (!editingEvent) return;
    await withSaving(async () => {
      const updated = eventsList.map((evt) => evt.id === editingEvent.id ? editingEvent : evt);
      setEventsList(updated);
      await persistEvents(updated);
      setEditingEvent(null);
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError("");
    setIsLoading(true);
    try {
      const result = await apiAdminLogin(username, password);
      setAdminToken(result.token);
      setIsLoggedIn(true);
      await loadData();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Invalid username or password.";
      setAuthError(message.includes("<!doctype") ? "Cannot reach the API server. Start educellentbackend and check VITE_EDGES_API_URL." : message);
      setIsLoading(false);
    }
  };
  const handleLogout = () => {
    clearAdminToken();
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };
  if (!isLoggedIn) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-900 p-4 font-sans relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-slate-950/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative z-10 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { variant: "light", size: "lg", showTagline: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-6 font-medium text-center", children: "Please sign in to access control settings & dynamic submissions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-5 text-sm", children: [
          authError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-rose-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: authError })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-350 mb-1.5", children: "Username" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: username, onChange: (e) => setUsername(e.target.value), placeholder: "Enter username", className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-slate-650 transition" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-350 mb-1.5", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Enter password", className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-slate-650 transition" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: isLoading, className: "w-full rounded-xl gradient-primary text-white font-extrabold py-3.5 shadow-glow transition mt-6 text-xs uppercase tracking-wider hover:opacity-95 disabled:opacity-70 flex items-center justify-center gap-2", children: [
            isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
            "Sign In to Shakthi Academy Portal"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[10px] text-slate-500 mt-8 font-semibold", children: "Shakthi Academy Global Network Portal • Secure Session" })
      ] })
    ] });
  }
  const navItems = [{
    id: "submissions",
    label: "Form Responses",
    icon: Inbox,
    count: submissions.length
  }, {
    id: "blogs",
    label: "Manage Blogs",
    icon: BookOpen,
    count: blogsList.length
  }, {
    id: "events",
    label: "Webinars & Events",
    icon: Calendar,
    count: eventsList.length
  }, {
    id: "announcements",
    label: "Live Alerts",
    icon: Megaphone,
    count: announcementsList.length
  }];
  const tabMeta = {
    submissions: {
      title: "Inquiry Form Submissions",
      desc: "Contact messages, test training prep requests, and partner university applications."
    },
    blogs: {
      title: "Manage Blog Posts",
      desc: "Publish news articles and test preparation guides."
    },
    events: {
      title: "Manage Events & Webinars",
      desc: "Schedule live virtual counseling fairs and visa guidance webinars."
    },
    announcements: {
      title: "Live Alert Center",
      desc: "Publish real-time visa, admission, and campus updates to students."
    }
  };
  const paginatedSubmissions = paginateSlice(submissions, currentPage, PAGE_SIZE);
  const paginatedBlogs = paginateSlice(blogsList, currentPage, PAGE_SIZE);
  const paginatedEvents = paginateSlice(eventsList, currentPage, PAGE_SIZE);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-slate-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoader, { label: "Loading admin dashboard…" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-100 flex", children: [
    sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "fixed inset-0 z-40 bg-black/40 lg:hidden", onClick: () => setSidebarOpen(false), "aria-label": "Close sidebar" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `fixed inset-y-0 left-0 z-50 w-64 bg-[#0A3D62] text-white flex flex-col transition-transform duration-200 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { variant: "light", size: "sm", showTagline: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-white/50 font-semibold mt-2 uppercase tracking-widest", children: "Admin Portal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex-1 p-3 space-y-1 overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-white/40 uppercase tracking-widest px-3 py-2", children: "Sections" }),
        navItems.map(({
          id,
          label,
          icon: Icon,
          count
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
          setActiveTab(id);
          setSidebarOpen(false);
        }, className: `w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition ${activeTab === id ? "bg-white/15 text-white shadow-inner" : "text-white/70 hover:bg-white/10 hover:text-white"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 shrink-0" }),
            label
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] px-2 py-0.5 rounded-full font-extrabold ${activeTab === id ? "bg-white/20" : "bg-white/10 text-white/60"}`, children: count })
        ] }, id))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: handleLogout, className: "w-full flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold py-2.5 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-3.5 w-3.5" }),
        "Logout"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 lg:ml-64 flex flex-col min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-6 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSidebarOpen(true), className: "lg:hidden h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600", "aria-label": "Open menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-extrabold text-[#4DA8DA] uppercase tracking-wider", children: "Shakthi Academy portal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg sm:text-xl font-extrabold text-[#0A3D62] truncate", children: "Management Administration" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => loadData(true), disabled: isRefreshing, className: "inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold px-4 py-2 shadow-sm text-slate-700 transition disabled:opacity-60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-3.5 w-3.5 ${isRefreshing ? "animate-spin" : ""}` }),
          isRefreshing ? "Syncing…" : "Sync Dashboard"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 p-4 sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6", children: [{
          label: "Form Responses",
          value: submissions.length,
          icon: Inbox,
          color: "text-blue-600 bg-blue-50"
        }, {
          label: "Blog Posts",
          value: blogsList.length,
          icon: BookOpen,
          color: "text-indigo-600 bg-indigo-50"
        }, {
          label: "Events",
          value: eventsList.length,
          icon: Calendar,
          color: "text-violet-600 bg-violet-50"
        }, {
          label: "Live Alerts",
          value: announcementsList.length,
          icon: Megaphone,
          color: "text-amber-600 bg-amber-50"
        }].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-2xl border border-slate-200 p-4 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider", children: stat.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-extrabold text-[#0A3D62] mt-1", children: stat.value })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-10 w-10 rounded-xl flex items-center justify-center ${stat.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "h-5 w-5" }) })
        ] }) }, stat.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-200 rounded-3xl shadow-sm relative overflow-hidden", children: [
          activeTab !== "announcements" && isSaving && /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLoader, {}),
          activeTab === "announcements" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminAnnouncementsPanel, { announcements: announcementsList, announcementsEnabled, isSaving, onSetAnnouncements: setAnnouncementsList, onSetFeedEnabled: setAnnouncementsEnabled, onSave: async (updated, options) => {
            await withSaving(async () => {
              await persistAnnouncements(updated, options);
              await loadData();
            });
          } }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 sm:p-6 border-b border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[#0A3D62]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "h-4 w-4 text-[#4DA8DA]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-extrabold text-lg", children: tabMeta[activeTab].title })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-1", children: tabMeta[activeTab].desc })
              ] }),
              activeTab === "submissions" && submissions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleClearAllSubs, className: "text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3.5 py-2 rounded-xl transition", children: "Clear All Responses" }),
              activeTab === "blogs" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setShowAddBlog(true), className: "inline-flex items-center gap-1.5 rounded-xl gradient-primary text-white text-xs font-bold px-4 py-2.5 shadow-sm hover:opacity-95 transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
                "Add Article"
              ] }),
              activeTab === "events" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setShowAddEvent(true), className: "inline-flex items-center gap-1.5 rounded-xl gradient-primary text-white text-xs font-bold px-4 py-2.5 shadow-sm hover:opacity-95 transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
                "Add Event"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 sm:p-6", children: [
              activeTab === "submissions" && (submissions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 flex flex-col items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-slate-100 text-slate-400 grid place-items-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-6 w-6" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-slate-800", children: "No Submissions Found" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mt-2 max-w-sm", children: "When visitors submit contact forms or inquiry popups, they will list here dynamically." })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-xl border border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-slate-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-slate-500 uppercase tracking-wider font-extrabold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Form / Type" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Sender details" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Subject / Context" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4", children: "Time" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-center", children: "Actions" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paginatedSubmissions.slice.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-slate-100 hover:bg-slate-50/80 transition-colors", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-4 font-bold text-[#0A3D62] whitespace-nowrap", children: sub.formName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-700", children: sub.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-500 mt-0.5", children: sub.email }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 mt-0.5", children: sub.phone })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-4 font-semibold text-slate-600 max-w-[220px] truncate", children: sub.subject || "No subject info" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-4 text-slate-500 whitespace-nowrap", children: sub.timestamp }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSelectedSub(sub), className: "h-8 w-8 rounded-lg bg-[#4DA8DA]/10 text-[#4DA8DA] hover:bg-[#4DA8DA] hover:text-white flex items-center justify-center transition", title: "View Response", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleDeleteSub(sub.id), className: "h-8 w-8 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white flex items-center justify-center transition", title: "Delete Response", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
                    ] }) })
                  ] }, sub.id)) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationBar, { page: paginatedSubmissions.safePage, pageSize: PAGE_SIZE, total: submissions.length, onPageChange: setCurrentPage })
              ] })),
              activeTab === "blogs" && (blogsList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-16 text-slate-500 text-sm", children: "No blog posts yet. Add your first article." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5", children: paginatedBlogs.slice.map((blog) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-150 rounded-2xl overflow-hidden flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: blog.img, alt: blog.title, className: "h-32 w-full object-cover" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex-1 flex flex-col justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold bg-[#4DA8DA]/10 text-[#4DA8DA] px-2 py-0.5 rounded uppercase tracking-wider", children: blog.tag }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-sm text-[#0A3D62] mt-2 leading-snug", children: blog.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mt-1 line-clamp-2", children: blog.desc })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-slate-50 flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-semibold", children: blog.date }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setEditingBlog(blog), className: "text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition", children: "Edit" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleDeleteBlog(blog.id), className: "text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition", children: "Delete" })
                      ] })
                    ] })
                  ] })
                ] }, blog.id)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationBar, { page: paginatedBlogs.safePage, pageSize: PAGE_SIZE, total: blogsList.length, onPageChange: setCurrentPage })
              ] })),
              activeTab === "events" && (eventsList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-16 text-slate-500 text-sm", children: "No events scheduled yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5", children: paginatedEvents.slice.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-155 rounded-2xl overflow-hidden flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: event.img, alt: event.title, className: "h-32 w-full object-cover" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex-1 flex flex-col justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-sm text-[#0A3D62] leading-snug", children: event.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-slate-500 mt-1 font-semibold", children: [
                        event.date,
                        " • ",
                        event.time
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mt-2 line-clamp-2", children: event.desc })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-slate-50 flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-[#4DA8DA] font-extrabold bg-[#4DA8DA]/10 px-2 py-0.5 rounded-full uppercase tracking-wider", children: event.platform }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setEditingEvent(event), className: "text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition", children: "Edit" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => handleDeleteEvent(event.id), className: "text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition", children: "Delete" })
                      ] })
                    ] })
                  ] })
                ] }, event.id)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationBar, { page: paginatedEvents.safePage, pageSize: PAGE_SIZE, total: eventsList.length, onPageChange: setCurrentPage })
              ] }))
            ] })
          ] })
        ] })
      ] })
    ] }),
    selectedSub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 animate-in fade-in duration-200 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedSub(null), className: "absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 border-b border-slate-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-extrabold text-[#4DA8DA] bg-[#4DA8DA]/10 px-2 py-0.5 rounded uppercase tracking-wider", children: selectedSub.formName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-[#0A3D62] text-base leading-tight mt-2", children: "Submission Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold block mt-1 uppercase tracking-wider", children: selectedSub.timestamp })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-4 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-slate-50 rounded-xl border border-slate-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-extrabold text-slate-800 mt-1 leading-tight", children: selectedSub.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-slate-50 rounded-xl border border-slate-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-extrabold text-slate-800 mt-1 leading-tight break-all", children: selectedSub.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-slate-50 rounded-xl border border-slate-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-extrabold text-slate-800 mt-1 leading-tight", children: selectedSub.phone })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-slate-50 rounded-xl border border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Subject / Context" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[#0A3D62] mt-1 text-sm", children: selectedSub.subject || "No subject" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-slate-50 rounded-xl border border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Message Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-650 mt-1.5 leading-relaxed text-sm whitespace-pre-line bg-white p-3 rounded-lg border border-slate-100", children: selectedSub.message || "(No message details provided)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedSub(null), className: "mt-6 w-full rounded-xl bg-[#0A3D62] text-white text-xs font-bold py-3 transition", children: "Close View" })
      ] })
    ] }) }),
    showAddBlog && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative max-h-[85vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowAddBlog(false), className: "absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-[#0A3D62] text-lg pb-3 border-b border-slate-100", children: "Publish New Article" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddBlogSubmit, className: "mt-4 space-y-3.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Article Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. Navigating Canada Visa Changes", value: blogForm.title, onChange: (e) => setBlogForm({
              ...blogForm,
              title: e.target.value
            }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Tag / Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: blogForm.tag, onChange: (e) => setBlogForm({
                ...blogForm,
                tag: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Visa Update", children: "Visa Update" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MBBS Special", children: "MBBS Special" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Test Prep", children: "Test Prep" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Admissions", children: "Admissions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "General News", children: "General News" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Read Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. 5 min read", value: blogForm.readTime, onChange: (e) => setBlogForm({
                ...blogForm,
                readTime: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Author Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. Admissions Advisor", value: blogForm.author, onChange: (e) => setBlogForm({
                ...blogForm,
                author: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. June 29, 2026", value: blogForm.date, onChange: (e) => setBlogForm({
                ...blogForm,
                date: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Summary Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, placeholder: "Brief summary of the article...", rows: 3, value: blogForm.desc, onChange: (e) => setBlogForm({
              ...blogForm,
              desc: e.target.value
            }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Cover Image Unsplash URL (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "https://images.unsplash.com/photo-...", value: blogForm.img, onChange: (e) => setBlogForm({
              ...blogForm,
              img: e.target.value
            }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-xl gradient-primary text-white text-xs font-bold py-3 hover:opacity-95 transition mt-4", children: "Publish Article" })
        ] })
      ] })
    ] }) }),
    showAddEvent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative max-h-[85vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowAddEvent(false), className: "absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-[#0A3D62] text-lg pb-3 border-b border-slate-100", children: "Schedule New Webinar/Event" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddEventSubmit, className: "mt-4 space-y-3.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Event Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. US F-1 Consular Masterclass", value: eventForm.title, onChange: (e) => setEventForm({
              ...eventForm,
              title: e.target.value
            }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Event Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. July 25, 2026", value: eventForm.date, onChange: (e) => setEventForm({
                ...eventForm,
                date: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Event Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. 4:00 PM - 5:30 PM", value: eventForm.time, onChange: (e) => setEventForm({
                ...eventForm,
                time: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Guest Speaker / Panel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. Dr. Jane Smith (Dean)", value: eventForm.speaker, onChange: (e) => setEventForm({
                ...eventForm,
                speaker: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Platform / Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. Live Zoom Video Seminar", value: eventForm.platform, onChange: (e) => setEventForm({
                ...eventForm,
                platform: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Webinar Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, placeholder: "Brief summary of event schedule and benefits...", rows: 3, value: eventForm.desc, onChange: (e) => setEventForm({
              ...eventForm,
              desc: e.target.value
            }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Cover Image Unsplash URL (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "https://images.unsplash.com/photo-...", value: eventForm.img, onChange: (e) => setEventForm({
              ...eventForm,
              img: e.target.value
            }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-xl gradient-primary text-white text-xs font-bold py-3 hover:opacity-95 transition mt-4", children: "Schedule Event" })
        ] })
      ] })
    ] }) }),
    editingBlog && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative max-h-[85vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditingBlog(null), className: "absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-[#0A3D62] text-lg pb-3 border-b border-slate-100", children: "Edit Article" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleEditBlogSubmit, className: "mt-4 space-y-3.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Article Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. Navigating Canada Visa Changes", value: editingBlog.title, onChange: (e) => setEditingBlog({
              ...editingBlog,
              title: e.target.value
            }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Tag / Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: editingBlog.tag, onChange: (e) => setEditingBlog({
                ...editingBlog,
                tag: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Visa Update", children: "Visa Update" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MBBS Special", children: "MBBS Special" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Test Prep", children: "Test Prep" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Admissions", children: "Admissions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "General News", children: "General News" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Read Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. 5 min read", value: editingBlog.readTime, onChange: (e) => setEditingBlog({
                ...editingBlog,
                readTime: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Author Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. Admissions Advisor", value: editingBlog.author, onChange: (e) => setEditingBlog({
                ...editingBlog,
                author: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. June 29, 2026", value: editingBlog.date, onChange: (e) => setEditingBlog({
                ...editingBlog,
                date: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Summary Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, placeholder: "Brief summary of the article...", rows: 3, value: editingBlog.desc, onChange: (e) => setEditingBlog({
              ...editingBlog,
              desc: e.target.value
            }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Cover Image Unsplash URL (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "https://images.unsplash.com/photo-...", value: editingBlog.img, onChange: (e) => setEditingBlog({
              ...editingBlog,
              img: e.target.value
            }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-xl gradient-primary text-white text-xs font-bold py-3 hover:opacity-95 transition mt-4", children: "Save Changes" })
        ] })
      ] })
    ] }) }),
    editingEvent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative max-h-[85vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditingEvent(null), className: "absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-[#0A3D62] text-lg pb-3 border-b border-slate-100", children: "Edit Event" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleEditEventSubmit, className: "mt-4 space-y-3.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Event Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. US F-1 Consular Masterclass", value: editingEvent.title, onChange: (e) => setEditingEvent({
              ...editingEvent,
              title: e.target.value
            }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Event Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. July 25, 2026", value: editingEvent.date, onChange: (e) => setEditingEvent({
                ...editingEvent,
                date: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Event Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. 4:00 PM - 5:30 PM", value: editingEvent.time, onChange: (e) => setEditingEvent({
                ...editingEvent,
                time: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Guest Speaker / Panel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. Dr. Jane Smith (Dean)", value: editingEvent.speaker, onChange: (e) => setEditingEvent({
                ...editingEvent,
                speaker: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Platform / Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. Live Zoom Video Seminar", value: editingEvent.platform, onChange: (e) => setEditingEvent({
                ...editingEvent,
                platform: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Webinar Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, placeholder: "Brief summary of event schedule and benefits...", rows: 3, value: editingEvent.desc, onChange: (e) => setEditingEvent({
              ...editingEvent,
              desc: e.target.value
            }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-bold text-slate-500 mb-1", children: "Cover Image Unsplash URL (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "https://images.unsplash.com/photo-...", value: editingEvent.img, onChange: (e) => setEditingEvent({
              ...editingEvent,
              img: e.target.value
            }), className: "w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-xl gradient-primary text-white text-xs font-bold py-3 hover:opacity-95 transition mt-4", children: "Save Changes" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AdminPage as component
};

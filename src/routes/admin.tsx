import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { Logo } from "../components/site/Logo";
import { PageLoader, PanelLoader } from "../components/admin/LoadingOverlay";
import { PaginationBar, paginateSlice } from "../components/admin/PaginationBar";
import { AdminAnnouncementsPanel } from "../components/admin/AdminAnnouncementsPanel";
import {
  apiAdminLogin,
  apiGetAdminDashboard,
  apiSaveAnnouncements,
  apiSaveBlogs,
  apiSaveEvents,
  apiSaveSubmissions,
} from "../lib/api/cms.api";
import { clearAdminToken, getAdminToken, setAdminToken } from "../lib/api/admin-session";
import {
  Plus, Trash2, X, Eye,
  Megaphone, Calendar, RefreshCw, AlertCircle, BookOpen, LogOut,
  LayoutDashboard, Inbox, Loader2, Menu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Announcement } from "../lib/types/cms";

const PAGE_SIZE = 8;

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Shakthi Academy | Admin Management Dashboard" },
      { name: "robots", content: "noindex, nofollow" }
    ],
  }),
  component: AdminPage,
});

type TabId = "submissions" | "blogs" | "events" | "announcements";

function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const [activeTab, setActiveTab] = useState<TabId>("submissions");
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [blogsList, setBlogsList] = useState<any[]>([]);
  const [eventsList, setEventsList] = useState<any[]>([]);
  const [announcementsList, setAnnouncementsList] = useState<Announcement[]>([]);
  const [announcementsEnabled, setAnnouncementsEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [editingBlog, setEditingBlog] = useState<any | null>(null);
  const [editingEvent, setEditingEvent] = useState<any | null>(null);

  // Selection states for detail viewer modals
  const [selectedSub, setSelectedSub] = useState<any | null>(null);

  // Forms states
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [blogForm, setBlogForm] = useState({
    title: "", tag: "Visa Update", desc: "", date: "", readTime: "", author: "Admissions Team", img: ""
  });

  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventForm, setEventForm] = useState({
    title: "", date: "", time: "", speaker: "", platform: "Zoom Video Seminar", desc: "", img: ""
  });

  const loadData = useCallback(async (refresh = false) => {
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

  useEffect(() => {
    const token = getAdminToken();
    setIsLoggedIn(Boolean(token));
    if (token) void loadData();
    else setIsLoading(false);
  }, [loadData]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const withSaving = async (fn: () => Promise<void>) => {
    setIsSaving(true);
    try {
      await fn();
    } finally {
      setIsSaving(false);
    }
  };

  const persistSubmissions = async (updated: typeof submissions) => {
    const token = getAdminToken();
    if (!token) return;
    await apiSaveSubmissions(token, updated);
  };

  const persistBlogs = async (updated: typeof blogsList) => {
    const token = getAdminToken();
    if (!token) return;
    await apiSaveBlogs(token, updated);
  };

  const persistEvents = async (updated: typeof eventsList) => {
    const token = getAdminToken();
    if (!token) return;
    await apiSaveEvents(token, updated);
  };

  const persistAnnouncements = async (
    updated: Announcement[],
    options?: { announcementsEnabled?: boolean },
  ) => {
    const token = getAdminToken();
    if (!token) return;
    const enabledFlag = options?.announcementsEnabled ?? announcementsEnabled;
    await apiSaveAnnouncements(token, updated, enabledFlag);
  };

  const handleDeleteSub = async (id: string) => {
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

  const handleDeleteBlog = async (id: string) => {
    await withSaving(async () => {
      const updated = blogsList.filter((b) => b.id !== id);
      setBlogsList(updated);
      await persistBlogs(updated);
    });
  };

  const handleDeleteEvent = async (id: string) => {
    await withSaving(async () => {
      const updated = eventsList.filter((e) => e.id !== id);
      setEventsList(updated);
      await persistEvents(updated);
    });
  };

  const handleAddBlogSubmit = async (e: React.FormEvent) => {
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
      setBlogForm({ title: "", tag: "Visa Update", desc: "", date: "June 29, 2026", readTime: "5 min read", author: "Admissions Team", img: "" });
    });
  };

  const handleAddEventSubmit = async (e: React.FormEvent) => {
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
      setEventForm({ title: "", date: "", time: "", speaker: "", platform: "Zoom Video Seminar", desc: "", img: "" });
    });
  };

  const handleEditBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog) return;
    await withSaving(async () => {
      const updated = blogsList.map((b) => (b.id === editingBlog.id ? editingBlog : b));
      setBlogsList(updated);
      await persistBlogs(updated);
      setEditingBlog(null);
    });
  };

  const handleEditEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEvent) return;
    await withSaving(async () => {
      const updated = eventsList.map((evt) => (evt.id === editingEvent.id ? editingEvent : evt));
      setEventsList(updated);
      await persistEvents(updated);
      setEditingEvent(null);
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-900 p-4 font-sans relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

        <div className="w-full max-w-md bg-slate-950/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative z-10 text-white">
          <div className="flex flex-col items-center mb-8">
            <Logo variant="light" size="lg" showTagline />
            <p className="text-xs text-slate-400 mt-6 font-medium text-center">Please sign in to access control settings & dynamic submissions.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5 text-sm">
            {authError && (
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <div>
              <label className="block font-bold text-slate-350 mb-1.5">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-slate-650 transition"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-350 mb-1.5">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-slate-650 transition"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl gradient-primary text-white font-extrabold py-3.5 shadow-glow transition mt-6 text-xs uppercase tracking-wider hover:opacity-95 disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              Sign In to Shakthi Academy Portal
            </button>
          </form>

          <p className="text-center text-[10px] text-slate-500 mt-8 font-semibold">
            Shakthi Academy Global Network Portal • Secure Session
          </p>
        </div>
      </div>
    );
  }

  const navItems: { id: TabId; label: string; icon: LucideIcon; count: number }[] = [
    { id: "submissions", label: "Form Responses", icon: Inbox, count: submissions.length },
    { id: "blogs", label: "Manage Blogs", icon: BookOpen, count: blogsList.length },
    { id: "events", label: "Webinars & Events", icon: Calendar, count: eventsList.length },
    { id: "announcements", label: "Live Alerts", icon: Megaphone, count: announcementsList.length },
  ];

  const tabMeta: Record<TabId, { title: string; desc: string }> = {
    submissions: {
      title: "Inquiry Form Submissions",
      desc: "Contact messages, test training prep requests, and partner university applications.",
    },
    blogs: {
      title: "Manage Blog Posts",
      desc: "Publish news articles and test preparation guides.",
    },
    events: {
      title: "Manage Events & Webinars",
      desc: "Schedule live virtual counseling fairs and visa guidance webinars.",
    },
    announcements: {
      title: "Live Alert Center",
      desc: "Publish real-time visa, admission, and campus updates to students.",
    },
  };

  const paginatedSubmissions = paginateSlice(submissions, currentPage, PAGE_SIZE);
  const paginatedBlogs = paginateSlice(blogsList, currentPage, PAGE_SIZE);
  const paginatedEvents = paginateSlice(eventsList, currentPage, PAGE_SIZE);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <PageLoader label="Loading admin dashboard…" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {sidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      {/* Fixed sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0A3D62] text-white flex flex-col transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-white/10">
          <Logo variant="light" size="sm" showTagline={false} />
          <p className="text-[10px] text-white/50 font-semibold mt-2 uppercase tracking-widest">Admin Portal</p>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-3 py-2">Sections</p>
          {navItems.map(({ id, label, icon: Icon, count }) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setActiveTab(id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition ${
                activeTab === id
                  ? "bg-white/15 text-white shadow-inner"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                activeTab === id ? "bg-white/20" : "bg-white/10 text-white/60"
              }`}>
                {count}
              </span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold py-2.5 transition"
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-6 py-3.5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </button>
              <div className="min-w-0">
                <p className="text-[10px] font-extrabold text-[#4DA8DA] uppercase tracking-wider">Shakthi Academy portal</p>
                <h1 className="text-lg sm:text-xl font-extrabold text-[#0A3D62] truncate">Management Administration</h1>
              </div>
            </div>
            <button
              type="button"
              onClick={() => loadData(true)}
              disabled={isRefreshing}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold px-4 py-2 shadow-sm text-slate-700 transition disabled:opacity-60"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
              {isRefreshing ? "Syncing…" : "Sync Dashboard"}
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6">
          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {[
              { label: "Form Responses", value: submissions.length, icon: Inbox, color: "text-blue-600 bg-blue-50" },
              { label: "Blog Posts", value: blogsList.length, icon: BookOpen, color: "text-indigo-600 bg-indigo-50" },
              { label: "Events", value: eventsList.length, icon: Calendar, color: "text-violet-600 bg-violet-50" },
              { label: "Live Alerts", value: announcementsList.length, icon: Megaphone, color: "text-amber-600 bg-amber-50" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                    <p className="text-2xl font-extrabold text-[#0A3D62] mt-1">{stat.value}</p>
                  </div>
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Panel */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm relative overflow-hidden">
            {activeTab !== "announcements" && isSaving && <PanelLoader />}

            {activeTab === "announcements" ? (
              <div className="p-5 sm:p-6">
                <AdminAnnouncementsPanel
                  announcements={announcementsList}
                  announcementsEnabled={announcementsEnabled}
                  isSaving={isSaving}
                  onSetAnnouncements={setAnnouncementsList}
                  onSetFeedEnabled={setAnnouncementsEnabled}
                  onSave={async (updated, options) => {
                    await withSaving(async () => {
                      await persistAnnouncements(updated, options);
                      await loadData();
                    });
                  }}
                />
              </div>
            ) : (
              <>
            <div className="p-5 sm:p-6 border-b border-slate-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <div className="flex items-center gap-2 text-[#0A3D62]">
                    <LayoutDashboard className="h-4 w-4 text-[#4DA8DA]" />
                    <h2 className="font-extrabold text-lg">{tabMeta[activeTab].title}</h2>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{tabMeta[activeTab].desc}</p>
                </div>
                {activeTab === "submissions" && submissions.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearAllSubs}
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3.5 py-2 rounded-xl transition"
                  >
                    Clear All Responses
                  </button>
                )}
                {activeTab === "blogs" && (
                  <button
                    type="button"
                    onClick={() => setShowAddBlog(true)}
                    className="inline-flex items-center gap-1.5 rounded-xl gradient-primary text-white text-xs font-bold px-4 py-2.5 shadow-sm hover:opacity-95 transition"
                  >
                    <Plus className="h-4 w-4" />
                    Add Article
                  </button>
                )}
                {activeTab === "events" && (
                  <button
                    type="button"
                    onClick={() => setShowAddEvent(true)}
                    className="inline-flex items-center gap-1.5 rounded-xl gradient-primary text-white text-xs font-bold px-4 py-2.5 shadow-sm hover:opacity-95 transition"
                  >
                    <Plus className="h-4 w-4" />
                    Add Event
                  </button>
                )}
              </div>
            </div>

            <div className="p-5 sm:p-6">
              {/* SUBMISSIONS */}
              {activeTab === "submissions" && (
                submissions.length === 0 ? (
                  <div className="text-center py-16 flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-slate-100 text-slate-400 grid place-items-center mb-4">
                      <AlertCircle className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-slate-800">No Submissions Found</h4>
                    <p className="text-xs text-slate-500 mt-2 max-w-sm">When visitors submit contact forms or inquiry popups, they will list here dynamically.</p>
                  </div>
                ) : (
                  <>
                    <div className="overflow-x-auto rounded-xl border border-slate-100">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50">
                          <tr className="text-slate-500 uppercase tracking-wider font-extrabold">
                            <th className="py-3 px-4">Form / Type</th>
                            <th className="py-3 px-4">Sender details</th>
                            <th className="py-3 px-4">Subject / Context</th>
                            <th className="py-3 px-4">Time</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paginatedSubmissions.slice.map((sub) => (
                            <tr key={sub.id} className="border-t border-slate-100 hover:bg-slate-50/80 transition-colors">
                              <td className="py-4 px-4 font-bold text-[#0A3D62] whitespace-nowrap">{sub.formName}</td>
                              <td className="py-4 px-4">
                                <p className="font-bold text-slate-700">{sub.name}</p>
                                <p className="text-[10px] text-slate-500 mt-0.5">{sub.email}</p>
                                <p className="text-[10px] text-slate-400 mt-0.5">{sub.phone}</p>
                              </td>
                              <td className="py-4 px-4 font-semibold text-slate-600 max-w-[220px] truncate">
                                {sub.subject || "No subject info"}
                              </td>
                              <td className="py-4 px-4 text-slate-500 whitespace-nowrap">{sub.timestamp}</td>
                              <td className="py-4 px-4">
                                <div className="flex items-center justify-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => setSelectedSub(sub)}
                                    className="h-8 w-8 rounded-lg bg-[#4DA8DA]/10 text-[#4DA8DA] hover:bg-[#4DA8DA] hover:text-white flex items-center justify-center transition"
                                    title="View Response"
                                  >
                                    <Eye className="h-4 w-4" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteSub(sub.id)}
                                    className="h-8 w-8 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white flex items-center justify-center transition"
                                    title="Delete Response"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <PaginationBar
                      page={paginatedSubmissions.safePage}
                      pageSize={PAGE_SIZE}
                      total={submissions.length}
                      onPageChange={setCurrentPage}
                    />
                  </>
                )
              )}

              {/* BLOGS */}
              {activeTab === "blogs" && (
                blogsList.length === 0 ? (
                  <div className="text-center py-16 text-slate-500 text-sm">No blog posts yet. Add your first article.</div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-5">
                      {paginatedBlogs.slice.map((blog) => (
                        <div key={blog.id} className="border border-slate-150 rounded-2xl overflow-hidden flex flex-col">
                          <img src={blog.img} alt={blog.title} className="h-32 w-full object-cover" />
                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                              <span className="text-[10px] font-extrabold bg-[#4DA8DA]/10 text-[#4DA8DA] px-2 py-0.5 rounded uppercase tracking-wider">
                                {blog.tag}
                              </span>
                              <h4 className="font-extrabold text-sm text-[#0A3D62] mt-2 leading-snug">{blog.title}</h4>
                              <p className="text-xs text-slate-500 mt-1 line-clamp-2">{blog.desc}</p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
                              <span className="text-[10px] text-slate-400 font-semibold">{blog.date}</span>
                              <div className="flex gap-2">
                                <button type="button" onClick={() => setEditingBlog(blog)} className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition">Edit</button>
                                <button type="button" onClick={() => handleDeleteBlog(blog.id)} className="text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition">Delete</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <PaginationBar page={paginatedBlogs.safePage} pageSize={PAGE_SIZE} total={blogsList.length} onPageChange={setCurrentPage} />
                  </>
                )
              )}

              {/* EVENTS */}
              {activeTab === "events" && (
                eventsList.length === 0 ? (
                  <div className="text-center py-16 text-slate-500 text-sm">No events scheduled yet.</div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-5">
                      {paginatedEvents.slice.map((event) => (
                        <div key={event.id} className="border border-slate-155 rounded-2xl overflow-hidden flex flex-col">
                          <img src={event.img} alt={event.title} className="h-32 w-full object-cover" />
                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                              <h4 className="font-extrabold text-sm text-[#0A3D62] leading-snug">{event.title}</h4>
                              <p className="text-[11px] text-slate-500 mt-1 font-semibold">{event.date} • {event.time}</p>
                              <p className="text-xs text-slate-500 mt-2 line-clamp-2">{event.desc}</p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
                              <span className="text-[10px] text-[#4DA8DA] font-extrabold bg-[#4DA8DA]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">{event.platform}</span>
                              <div className="flex gap-2">
                                <button type="button" onClick={() => setEditingEvent(event)} className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition">Edit</button>
                                <button type="button" onClick={() => handleDeleteEvent(event.id)} className="text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition">Delete</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <PaginationBar page={paginatedEvents.safePage} pageSize={PAGE_SIZE} total={eventsList.length} onPageChange={setCurrentPage} />
                  </>
                )
              )}

            </div>
              </>
            )}
          </div>
        </main>
      </div>

      {/* MODAL 1: VIEW FORM RESPONSE DETAILS */}
      {selectedSub && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 animate-in fade-in duration-200 relative">
            <button
              onClick={() => setSelectedSub(null)}
              className="absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="p-6">
              <div className="pb-4 border-b border-slate-100">
                <span className="text-[9px] font-extrabold text-[#4DA8DA] bg-[#4DA8DA]/10 px-2 py-0.5 rounded uppercase tracking-wider">
                  {selectedSub.formName}
                </span>
                <h3 className="font-extrabold text-[#0A3D62] text-base leading-tight mt-2">Submission Details</h3>
                <span className="text-[10px] text-slate-400 font-bold block mt-1 uppercase tracking-wider">{selectedSub.timestamp}</span>
              </div>

              <div className="mt-4 space-y-4 text-xs">
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Name</p>
                    <p className="font-extrabold text-slate-800 mt-1 leading-tight">{selectedSub.name}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email</p>
                    <p className="font-extrabold text-slate-800 mt-1 leading-tight break-all">{selectedSub.email}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Phone</p>
                    <p className="font-extrabold text-slate-800 mt-1 leading-tight">{selectedSub.phone}</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Subject / Context</p>
                  <p className="font-bold text-[#0A3D62] mt-1 text-sm">{selectedSub.subject || "No subject"}</p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Message Details</p>
                  <p className="text-slate-650 mt-1.5 leading-relaxed text-sm whitespace-pre-line bg-white p-3 rounded-lg border border-slate-100">
                    {selectedSub.message || "(No message details provided)"}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedSub(null)}
                className="mt-6 w-full rounded-xl bg-[#0A3D62] text-white text-xs font-bold py-3 transition"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: ADD BLOG ARTICLE */}
      {showAddBlog && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowAddBlog(false)}
              className="absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="p-6">
              <h3 className="font-extrabold text-[#0A3D62] text-lg pb-3 border-b border-slate-100">Publish New Article</h3>
              
              <form onSubmit={handleAddBlogSubmit} className="mt-4 space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-500 mb-1">Article Title</label>
                  <input
                    type="text" required placeholder="e.g. Navigating Canada Visa Changes"
                    value={blogForm.title} onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Tag / Category</label>
                    <select
                      value={blogForm.tag} onChange={(e) => setBlogForm({ ...blogForm, tag: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white"
                    >
                      <option value="Visa Update">Visa Update</option>
                      <option value="MBBS Special">MBBS Special</option>
                      <option value="Test Prep">Test Prep</option>
                      <option value="Admissions">Admissions</option>
                      <option value="General News">General News</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Read Time</label>
                    <input
                      type="text" required placeholder="e.g. 5 min read"
                      value={blogForm.readTime} onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Author Name</label>
                    <input
                      type="text" required placeholder="e.g. Admissions Advisor"
                      value={blogForm.author} onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Date</label>
                    <input
                      type="text" required placeholder="e.g. June 29, 2026"
                      value={blogForm.date} onChange={(e) => setBlogForm({ ...blogForm, date: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-500 mb-1">Summary Description</label>
                  <textarea
                    required placeholder="Brief summary of the article..." rows={3}
                    value={blogForm.desc} onChange={(e) => setBlogForm({ ...blogForm, desc: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-500 mb-1">Cover Image Unsplash URL (optional)</label>
                  <input
                    type="text" placeholder="https://images.unsplash.com/photo-..."
                    value={blogForm.img} onChange={(e) => setBlogForm({ ...blogForm, img: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl gradient-primary text-white text-xs font-bold py-3 hover:opacity-95 transition mt-4"
                >
                  Publish Article
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: ADD WEBINAR EVENT */}
      {showAddEvent && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowAddEvent(false)}
              className="absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="p-6">
              <h3 className="font-extrabold text-[#0A3D62] text-lg pb-3 border-b border-slate-100">Schedule New Webinar/Event</h3>
              
              <form onSubmit={handleAddEventSubmit} className="mt-4 space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-500 mb-1">Event Title</label>
                  <input
                    type="text" required placeholder="e.g. US F-1 Consular Masterclass"
                    value={eventForm.title} onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Event Date</label>
                    <input
                      type="text" required placeholder="e.g. July 25, 2026"
                      value={eventForm.date} onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Event Time</label>
                    <input
                      type="text" required placeholder="e.g. 4:00 PM - 5:30 PM"
                      value={eventForm.time} onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Guest Speaker / Panel</label>
                    <input
                      type="text" required placeholder="e.g. Dr. Jane Smith (Dean)"
                      value={eventForm.speaker} onChange={(e) => setEventForm({ ...eventForm, speaker: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Platform / Location</label>
                    <input
                      type="text" required placeholder="e.g. Live Zoom Video Seminar"
                      value={eventForm.platform} onChange={(e) => setEventForm({ ...eventForm, platform: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-500 mb-1">Webinar Description</label>
                  <textarea
                    required placeholder="Brief summary of event schedule and benefits..." rows={3}
                    value={eventForm.desc} onChange={(e) => setEventForm({ ...eventForm, desc: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-500 mb-1">Cover Image Unsplash URL (optional)</label>
                  <input
                    type="text" placeholder="https://images.unsplash.com/photo-..."
                    value={eventForm.img} onChange={(e) => setEventForm({ ...eventForm, img: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl gradient-primary text-white text-xs font-bold py-3 hover:opacity-95 transition mt-4"
                >
                  Schedule Event
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 5: EDIT BLOG ARTICLE */}
      {editingBlog && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setEditingBlog(null)}
              className="absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="p-6">
              <h3 className="font-extrabold text-[#0A3D62] text-lg pb-3 border-b border-slate-100">Edit Article</h3>
              
              <form onSubmit={handleEditBlogSubmit} className="mt-4 space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-500 mb-1">Article Title</label>
                  <input
                    type="text" required placeholder="e.g. Navigating Canada Visa Changes"
                    value={editingBlog.title} onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Tag / Category</label>
                    <select
                      value={editingBlog.tag} onChange={(e) => setEditingBlog({ ...editingBlog, tag: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA] bg-white"
                    >
                      <option value="Visa Update">Visa Update</option>
                      <option value="MBBS Special">MBBS Special</option>
                      <option value="Test Prep">Test Prep</option>
                      <option value="Admissions">Admissions</option>
                      <option value="General News">General News</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Read Time</label>
                    <input
                      type="text" required placeholder="e.g. 5 min read"
                      value={editingBlog.readTime} onChange={(e) => setEditingBlog({ ...editingBlog, readTime: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Author Name</label>
                    <input
                      type="text" required placeholder="e.g. Admissions Advisor"
                      value={editingBlog.author} onChange={(e) => setEditingBlog({ ...editingBlog, author: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Date</label>
                    <input
                      type="text" required placeholder="e.g. June 29, 2026"
                      value={editingBlog.date} onChange={(e) => setEditingBlog({ ...editingBlog, date: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-500 mb-1">Summary Description</label>
                  <textarea
                    required placeholder="Brief summary of the article..." rows={3}
                    value={editingBlog.desc} onChange={(e) => setEditingBlog({ ...editingBlog, desc: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-500 mb-1">Cover Image Unsplash URL (optional)</label>
                  <input
                    type="text" placeholder="https://images.unsplash.com/photo-..."
                    value={editingBlog.img} onChange={(e) => setEditingBlog({ ...editingBlog, img: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl gradient-primary text-white text-xs font-bold py-3 hover:opacity-95 transition mt-4"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 6: EDIT WEBINAR EVENT */}
      {editingEvent && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setEditingEvent(null)}
              className="absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="p-6">
              <h3 className="font-extrabold text-[#0A3D62] text-lg pb-3 border-b border-slate-100">Edit Event</h3>
              
              <form onSubmit={handleEditEventSubmit} className="mt-4 space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-500 mb-1">Event Title</label>
                  <input
                    type="text" required placeholder="e.g. US F-1 Consular Masterclass"
                    value={editingEvent.title} onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Event Date</label>
                    <input
                      type="text" required placeholder="e.g. July 25, 2026"
                      value={editingEvent.date} onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Event Time</label>
                    <input
                      type="text" required placeholder="e.g. 4:00 PM - 5:30 PM"
                      value={editingEvent.time} onChange={(e) => setEditingEvent({ ...editingEvent, time: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Guest Speaker / Panel</label>
                    <input
                      type="text" required placeholder="e.g. Dr. Jane Smith (Dean)"
                      value={editingEvent.speaker} onChange={(e) => setEditingEvent({ ...editingEvent, speaker: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-500 mb-1">Platform / Location</label>
                    <input
                      type="text" required placeholder="e.g. Live Zoom Video Seminar"
                      value={editingEvent.platform} onChange={(e) => setEditingEvent({ ...editingEvent, platform: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-500 mb-1">Webinar Description</label>
                  <textarea
                    required placeholder="Brief summary of event schedule and benefits..." rows={3}
                    value={editingEvent.desc} onChange={(e) => setEditingEvent({ ...editingEvent, desc: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-500 mb-1">Cover Image Unsplash URL (optional)</label>
                  <input
                    type="text" placeholder="https://images.unsplash.com/photo-..."
                    value={editingEvent.img} onChange={(e) => setEditingEvent({ ...editingEvent, img: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#4DA8DA]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl gradient-primary text-white text-xs font-bold py-3 hover:opacity-95 transition mt-4"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

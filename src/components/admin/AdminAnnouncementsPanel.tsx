import { useState } from "react";
import {
  Plus, Trash2, X, Pencil, Power, Pause, Play, AlertCircle, Megaphone, Eye, EyeOff,
} from "lucide-react";
import type { Announcement, AnnouncementStatus, AnnouncementVisibility } from "../../lib/types/cms";
import {
  countLiveAnnouncements,
  getAnnouncementTypeConfig,
  isAnnouncementPubliclyVisible,
  normalizeAnnouncementType,
} from "../../data/announcement-types";
import { AnnouncementTypeIcon, CategoryPicker } from "../site/AnnouncementTypeIcon";
import { PanelLoader } from "./LoadingOverlay";

export type AnnFormState = {
  text: string;
  time: string;
  type: string;
  visibility: AnnouncementVisibility;
  publishImmediately: boolean;
};

const defaultForm: AnnFormState = {
  text: "",
  time: "Just now",
  type: "urgent",
  visibility: "public",
  publishImmediately: true,
};

type Props = {
  announcements: Announcement[];
  announcementsEnabled: boolean;
  isSaving: boolean;
  onSave: (updated: Announcement[], options?: { announcementsEnabled?: boolean }) => Promise<void>;
  onSetAnnouncements: (updated: Announcement[]) => void;
  onSetFeedEnabled: (enabled: boolean) => void;
};

function formToAnnouncement(form: AnnFormState, id?: string): Announcement {
  const isDraft = !form.publishImmediately;
  return {
    id: id ?? `ann_${Date.now()}`,
    text: form.text.trim(),
    time: form.time.trim() || "Just now",
    type: normalizeAnnouncementType(form.type),
    visibility: form.visibility,
    status: isDraft ? "draft" : "published",
    enabled: !isDraft,
  };
}

function announcementToForm(ann: Announcement): AnnFormState {
  return {
    text: ann.text,
    time: ann.time,
    type: normalizeAnnouncementType(ann.type),
    visibility: ann.visibility ?? "public",
    publishImmediately: ann.status !== "draft" && ann.enabled !== false,
  };
}

function AlertFormFields({
  form,
  setForm,
}: {
  form: AnnFormState;
  setForm: (f: AnnFormState) => void;
}) {
  return (
    <>
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1.5">Alert Message</label>
        <textarea
          required
          rows={3}
          placeholder="e.g. US F-1 visa slots released for Chennai Consulate."
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#4DA8DA] text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 mb-2">Category</label>
        <CategoryPicker
          value={form.type}
          onChange={(type) => setForm({ ...form, type })}
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1.5">Time indicator</label>
        <input
          type="text"
          required
          placeholder="Just now"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#4DA8DA] text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 mb-2">Visibility</label>
        <div className="flex flex-wrap gap-4">
          {(["public", "internal"] as const).map((v) => (
            <label key={v} className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-700">
              <input
                type="radio"
                name="visibility"
                checked={form.visibility === v}
                onChange={() => setForm({ ...form, visibility: v })}
                className="text-[#0A3D62] focus:ring-[#4DA8DA]"
              />
              {v === "public" ? "Public" : "Internal only"}
            </label>
          ))}
        </div>
      </div>

      <label className="flex items-center gap-2.5 cursor-pointer p-3 rounded-xl bg-slate-50 border border-slate-100">
        <input
          type="checkbox"
          checked={form.publishImmediately}
          onChange={(e) => setForm({ ...form, publishImmediately: e.target.checked })}
          className="rounded border-slate-300 text-[#0A3D62] focus:ring-[#4DA8DA]"
        />
        <span className="text-xs font-bold text-slate-700">Publish immediately on save</span>
      </label>
    </>
  );
}

export function AdminAnnouncementsPanel({
  announcements,
  announcementsEnabled,
  isSaving,
  onSave,
  onSetAnnouncements,
  onSetFeedEnabled,
}: Props) {
  const [showCreate, setShowCreate] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<AnnFormState>(defaultForm);

  const liveCount = countLiveAnnouncements(announcements, announcementsEnabled);

  const persist = async (
    updated: Announcement[],
    options?: { announcementsEnabled?: boolean },
  ) => {
    onSetAnnouncements(updated);
    await onSave(updated, options);
  };

  const handlePublish = async (asDraft: boolean) => {
    const ann = formToAnnouncement(form);
    if (asDraft) {
      ann.status = "draft";
      ann.enabled = false;
    } else if (ann.visibility === "public" && !announcementsEnabled) {
      onSetFeedEnabled(true);
    }

    const updated = editingId
      ? announcements.map((a) => (a.id === editingId ? { ...ann, id: editingId } : a))
      : [ann, ...announcements];

    await persist(
      updated,
      !asDraft && ann.visibility === "public" && !announcementsEnabled
        ? { announcementsEnabled: true }
        : undefined,
    );

    setShowCreate(false);
    setEditingId(null);
    setForm(defaultForm);
  };

  const handlePause = async (id: string) => {
    const item = announcements.find((a) => a.id === id);
    if (!item) return;
    const pausing = item.enabled !== false;
    const updated = announcements.map((a) =>
      a.id === id
        ? { ...a, enabled: pausing ? false : true, status: (pausing ? "draft" : "published") as AnnouncementStatus }
        : a,
    );
    const resuming = !pausing && item.visibility === "public";
    if (resuming && !announcementsEnabled) onSetFeedEnabled(true);
    await persist(updated, resuming && !announcementsEnabled ? { announcementsEnabled: true } : undefined);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this alert permanently?")) return;
    await persist(announcements.filter((a) => a.id !== id));
  };

  const handleToggleFeed = async () => {
    const next = !announcementsEnabled;
    onSetFeedEnabled(next);
    await onSave(announcements, { announcementsEnabled: next });
  };

  const startEdit = (ann: Announcement) => {
    setEditingId(ann.id);
    setForm(announcementToForm(ann));
    setShowCreate(false);
  };

  return (
    <div className="relative space-y-6">
      {isSaving && <PanelLoader />}

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#0A3D62]">
            <Megaphone className="h-5 w-5 text-[#4DA8DA]" />
            <h2 className="text-xl font-extrabold">Live Alert Center</h2>
          </div>
          <p className="text-sm text-slate-500 mt-1">Publish real-time visa, admission, and campus updates to students.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setShowCreate(true);
            setEditingId(null);
            setForm(defaultForm);
          }}
          className="inline-flex items-center gap-2 rounded-xl gradient-primary text-white text-sm font-bold px-5 py-2.5 shadow-sm hover:opacity-95 transition shrink-0"
        >
          <Plus className="h-4 w-4" />
          Create New Alert
        </button>
      </div>

      {/* Feed control */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="button"
          onClick={handleToggleFeed}
          className={`inline-flex items-center gap-2 rounded-xl text-xs font-bold px-4 py-2.5 transition shadow-sm ${
            announcementsEnabled
              ? "bg-emerald-600 text-white hover:bg-emerald-500"
              : "bg-amber-500 text-white hover:bg-amber-400"
          }`}
        >
          <Power className="h-3.5 w-3.5" />
          Public feed: {announcementsEnabled ? "Enabled" : "Disabled"}
        </button>
        <span className="text-xs font-semibold text-slate-600 sm:ml-auto">
          {liveCount} live on website · {announcements.length} total in dashboard
        </span>
      </div>

      {!announcementsEnabled && announcements.some((a) => a.enabled !== false && a.visibility === "public") && (
        <div className="flex items-start gap-2.5 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <p className="text-xs font-semibold leading-relaxed">
            Alerts are ready but the public feed is off. Enable the feed to show them on the homepage and Blogs & Events page.
          </p>
        </div>
      )}

      {/* Create / Edit form */}
      {(showCreate || editingId) && (
        <div className="rounded-2xl border border-[#4DA8DA]/30 bg-white shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center justify-between">
            <h3 className="font-extrabold text-[#0A3D62]">
              {editingId ? "Edit Alert" : "Create Alert"}
            </h3>
            <button
              type="button"
              onClick={() => {
                setShowCreate(false);
                setEditingId(null);
                setForm(defaultForm);
              }}
              className="h-8 w-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-500"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void handlePublish(false);
            }}
            className="p-5 space-y-4"
          >
            <AlertFormFields form={form} setForm={setForm} />
            <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => void handlePublish(true)}
                className="flex-1 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold py-3 hover:bg-slate-50 transition"
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="flex-1 rounded-xl gradient-primary text-white text-sm font-bold py-3 hover:opacity-95 transition"
              >
                Publish Alert
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Active alerts list */}
      <div>
        <h3 className="text-sm font-extrabold text-[#0A3D62] mb-3">
          Active Alerts ({announcements.length})
        </h3>

        {announcements.length === 0 ? (
          <div className="text-center py-16 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50">
            <Megaphone className="h-8 w-8 text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-600">No alerts yet</p>
            <p className="text-xs text-slate-400 mt-1">Create your first live alert for students.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {announcements.map((ann) => {
              const config = getAnnouncementTypeConfig(ann.type);
              const isLive = isAnnouncementPubliclyVisible(ann) && announcementsEnabled;
              const isPaused = ann.enabled === false || ann.status === "draft";
              const isInternal = ann.visibility === "internal";

              return (
                <div
                  key={ann.id}
                  className={`rounded-2xl border p-5 transition ${
                    isLive ? config.cardClass : "border-slate-200 bg-slate-50/80 opacity-90"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <AnnouncementTypeIcon type={ann.type} size="sm" />
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${config.badgeClass}`}>
                          {config.label}
                        </span>
                        {isLive && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                            Live
                          </span>
                        )}
                        {isPaused && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                            Paused
                          </span>
                        )}
                        {isInternal && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 flex items-center gap-1">
                            <EyeOff className="h-3 w-3" /> Internal
                          </span>
                        )}
                        {!isInternal && !isPaused && announcementsEnabled && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 flex items-center gap-1">
                            <Eye className="h-3 w-3" /> Public
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-[#0A3D62] leading-relaxed">{ann.text}</p>
                      <p className="text-[11px] font-semibold text-slate-500 mt-3">{ann.time}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => startEdit(ann)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition"
                      >
                        <Pencil className="h-3.5 w-3.5" /> Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => void handlePause(ann.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition"
                      >
                        {isPaused ? (
                          <><Play className="h-3.5 w-3.5" /> Resume</>
                        ) : (
                          <><Pause className="h-3.5 w-3.5" /> Pause</>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => void handleDelete(ann.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-2 rounded-lg transition"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

import { useCallback, useEffect, useState } from "react";
import { apiGetPublicContent } from "../lib/api/cms.api";
import type { Announcement } from "../lib/types/cms";

export function usePublicAnnouncements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [announcementsEnabled, setAnnouncementsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const content = await apiGetPublicContent();
      setAnnouncements(content.announcements);
      setAnnouncementsEnabled(content.announcementsEnabled !== false);
    } catch {
      setAnnouncements([]);
      setAnnouncementsEnabled(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();

    const onVisible = () => {
      if (document.visibilityState === "visible") void load();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [load]);

  return {
    announcements,
    announcementsEnabled,
    isLoading,
    reload: load,
  };
}

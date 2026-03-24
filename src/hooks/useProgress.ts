"use client";

import { useState, useEffect, useCallback } from "react";
import type { UserProgress } from "@/types";
import { getProgress, saveProgress } from "@/lib/storage";

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => getProgress());

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const refresh = useCallback(() => {
    setProgress(getProgress());
  }, []);

  const update = useCallback((updater: (p: UserProgress) => UserProgress) => {
    setProgress((prev) => {
      const next = updater(prev);
      saveProgress(next);
      return next;
    });
  }, []);

  return { progress, refresh, update };
}

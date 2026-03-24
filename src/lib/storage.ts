import type { UserProgress, ScenarioAttempt, QuizAttempt } from "@/types";

const PROGRESS_KEY = "exam-study-progress";

const defaultProgress: UserProgress = {
  scenariosCompleted: [],
  quizResults: [],
  flashcardsReviewed: [],
  streakDays: 0,
  lastStudyDate: "",
  sectionMastery: {},
};

export function getProgress(): UserProgress {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? (JSON.parse(raw) as UserProgress) : defaultProgress;
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // storage full or unavailable
  }
}

export function saveScenarioAttempt(attempt: ScenarioAttempt): void {
  const progress = getProgress();
  progress.scenariosCompleted.push(attempt);
  updateStreak(progress);
  saveProgress(progress);
}

export function saveQuizAttempt(attempt: QuizAttempt): void {
  const progress = getProgress();
  progress.quizResults.push(attempt);
  updateStreak(progress);
  saveProgress(progress);
}

export function markFlashcardReviewed(cardId: string): void {
  const progress = getProgress();
  if (!progress.flashcardsReviewed.includes(cardId)) {
    progress.flashcardsReviewed.push(cardId);
  }
  updateStreak(progress);
  saveProgress(progress);
}

export function updateSectionMastery(
  sectionId: string,
  score: number
): void {
  const progress = getProgress();
  const current = progress.sectionMastery[sectionId] ?? 0;
  progress.sectionMastery[sectionId] = Math.max(current, score);
  saveProgress(progress);
}

function updateStreak(progress: UserProgress): void {
  const today = new Date().toISOString().split("T")[0];
  if (progress.lastStudyDate === today) return;

  const yesterday = new Date(Date.now() - 86400000)
    .toISOString()
    .split("T")[0];
  if (progress.lastStudyDate === yesterday) {
    progress.streakDays += 1;
  } else if (progress.lastStudyDate !== today) {
    progress.streakDays = 1;
  }
  progress.lastStudyDate = today;
}

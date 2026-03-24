import type { FlashcardState, Flashcard } from "@/types";

export function initCardState(card: Flashcard): FlashcardState {
  return {
    ...card,
    nextReview: Date.now(),
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
  };
}

export function reviewCard(
  card: FlashcardState,
  quality: number // 0-5
): FlashcardState {
  let { easeFactor, interval, repetitions } = card;

  if (quality >= 3) {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1;
  }

  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  return {
    ...card,
    easeFactor,
    interval,
    repetitions,
    nextReview: Date.now() + interval * 86400000,
  };
}

export function getDueCards(cards: FlashcardState[]): FlashcardState[] {
  const now = Date.now();
  return cards.filter((c) => c.nextReview <= now);
}

export function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

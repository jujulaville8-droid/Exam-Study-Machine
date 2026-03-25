"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { FlashCard } from "@/components/flashcards/FlashCard";
import {
  Zap,
  Play,
  RotateCcw,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react";
import { flashcards } from "@/data/flashcards";
import { testThemes, getFlashcardsByTheme } from "@/data/themes";
import {
  initCardState,
  reviewCard,
  getDueCards,
  shuffleArray,
} from "@/lib/spaced-repetition";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { cn } from "@/lib/utils";
import type { FlashcardState, ThemeId } from "@/types";

type Phase = "idle" | "reviewing" | "complete";

const difficultyButtons = [
  { quality: 1, label: "Again", color: "text-error", desc: "Forgot completely" },
  { quality: 2, label: "Hard", color: "text-warning", desc: "Barely recalled" },
  { quality: 3, label: "Good", color: "text-foreground", desc: "Recalled with effort" },
  { quality: 4, label: "Easy", color: "text-success", desc: "Recalled quickly" },
  { quality: 5, label: "Perfect", color: "text-primary", desc: "Instant recall" },
];

export default function ReviewPage() {
  const [cardStates, setCardStates] = useLocalStorage<FlashcardState[]>(
    "sr-card-states",
    []
  );
  const [phase, setPhase] = useState<Phase>("idle");
  const [queue, setQueue] = useState<FlashcardState[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, avgQuality: 0, totalQuality: 0 });
  const [themeFilter, setThemeFilter] = useState<string>("all");

  // Initialize card states if empty
  useEffect(() => {
    if (cardStates.length === 0 && flashcards.length > 0) {
      setCardStates(flashcards.map(initCardState));
    }
  }, [cardStates.length, setCardStates]);

  const dueCards = useMemo(() => getDueCards(cardStates), [cardStates]);

  const filteredDueCards = useMemo(() => {
    if (themeFilter === "all") return dueCards;
    const theme = testThemes.find((t) => t.id === themeFilter);
    if (!theme) return dueCards;
    const themeCardIds = new Set(
      getFlashcardsByTheme(theme.id as ThemeId).map((c) => c.id)
    );
    return dueCards.filter((c) => themeCardIds.has(c.id));
  }, [dueCards, themeFilter]);

  const startReview = useCallback(() => {
    if (filteredDueCards.length === 0) return;
    setQueue(shuffleArray(filteredDueCards));
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowRating(false);
    setSessionStats({ reviewed: 0, avgQuality: 0, totalQuality: 0 });
    setPhase("reviewing");
  }, [filteredDueCards]);

  const handleFlip = useCallback(() => {
    setIsFlipped(true);
    setShowRating(true);
  }, []);

  const handleRate = useCallback(
    (quality: number) => {
      const current = queue[currentIndex];
      const updated = reviewCard(current, quality);

      // Update persistent state
      setCardStates((prev) =>
        prev.map((c) => (c.id === current.id ? updated : c))
      );

      const newStats = {
        reviewed: sessionStats.reviewed + 1,
        totalQuality: sessionStats.totalQuality + quality,
        avgQuality: Math.round(
          ((sessionStats.totalQuality + quality) / (sessionStats.reviewed + 1)) * 10
        ) / 10,
      };
      setSessionStats(newStats);

      // Re-queue failed cards for same session
      if (quality <= 2) {
        setQueue((prev) => [...prev, { ...updated, nextReview: Date.now() }]);
      }

      // Advance
      if (currentIndex + 1 >= queue.length) {
        // Check if re-queued cards exist beyond current length
        setTimeout(() => {
          setQueue((prev) => {
            if (currentIndex + 1 < prev.length) {
              setCurrentIndex(currentIndex + 1);
              setIsFlipped(false);
              setShowRating(false);
              return prev;
            }
            setPhase("complete");
            return prev;
          });
        }, 200);
      } else {
        setCurrentIndex(currentIndex + 1);
        setIsFlipped(false);
        setShowRating(false);
      }
    },
    [currentIndex, queue, sessionStats, setCardStates]
  );

  const currentCard = queue[currentIndex];

  // Idle / Landing
  if (phase === "idle") {
    return (
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="w-14 h-14 mx-auto rounded-full border border-border flex items-center justify-center">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <h1 className="font-serif text-4xl italic">Active Recall</h1>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Spaced repetition review — cards appear at optimal intervals.
            Rate your recall to schedule the next review.
          </p>
        </motion.div>

        {/* Theme Filter */}
        <div className="flex flex-wrap justify-center gap-1.5">
          <button
            onClick={() => setThemeFilter("all")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all duration-200",
              themeFilter === "all"
                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 font-medium"
                : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
            )}
          >
            All
          </button>
          {testThemes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setThemeFilter(theme.id)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all duration-200",
                themeFilter === theme.id
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 font-medium"
                  : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
              )}
            >
              {theme.number}. {theme.title.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>

        {/* Stats */}
        <Card className="text-center space-y-4">
          <div className="grid grid-cols-3 divide-x divide-border">
            <div className="px-4 py-3">
              <p className="text-2xl font-serif italic text-primary">{filteredDueCards.length}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Due Now</p>
            </div>
            <div className="px-4 py-3">
              <p className="text-2xl font-serif italic">{cardStates.length}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Total Cards</p>
            </div>
            <div className="px-4 py-3">
              <p className="text-2xl font-serif italic text-success">
                {cardStates.filter((c) => c.repetitions >= 3).length}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Mastered</p>
            </div>
          </div>

          {filteredDueCards.length > 0 ? (
            <Button size="lg" onClick={startReview} className="w-full">
              <Play className="w-4 h-4 mr-2" />
              Start Review ({filteredDueCards.length} cards)
            </Button>
          ) : (
            <div className="py-4 space-y-2">
              <CheckCircle className="w-8 h-8 mx-auto text-success" />
              <p className="text-sm text-muted-foreground">All caught up! No cards due right now.</p>
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Clock className="w-3 h-3" />
                Next review: check back later
              </p>
            </div>
          )}
        </Card>
      </div>
    );
  }

  // Complete
  if (phase === "complete") {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card className="text-center space-y-6">
            <CheckCircle className="w-12 h-12 mx-auto text-success" />
            <h2 className="font-serif text-3xl italic">Session Complete</h2>

            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="px-4 py-3">
                <p className="text-2xl font-serif italic">{sessionStats.reviewed}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  Cards Reviewed
                </p>
              </div>
              <div className="px-4 py-3">
                <p className="text-2xl font-serif italic">{sessionStats.avgQuality}/5</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  Avg Difficulty
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setPhase("idle")}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                New Session
              </Button>
              <Button className="flex-1" onClick={() => (window.location.href = "/")}>
                <ArrowRight className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Reviewing
  if (!currentCard) return null;

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm tabular-nums text-muted-foreground">
          <span className="text-foreground font-medium">{currentIndex + 1}</span>
          <span className="mx-1">/</span>
          {queue.length}
        </span>
        <Badge variant="default">{sessionStats.reviewed} reviewed</Badge>
      </div>
      <ProgressBar value={currentIndex + 1} max={queue.length} className="h-0.5" />

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard.id + "-" + currentIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.2 }}
        >
          <FlashCard
            front={currentCard.front}
            back={currentCard.back}
            title={currentCard.front.includes(" — ") ? currentCard.front.split(" — ")[0] : undefined}
            isFlipped={isFlipped}
            onFlip={handleFlip}
          />
        </motion.div>
      </AnimatePresence>

      {/* Difficulty Rating */}
      {showRating && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center font-semibold">
            How well did you recall this?
          </p>
          <div className="flex gap-2">
            {difficultyButtons.map((btn) => (
              <button
                key={btn.quality}
                onClick={() => handleRate(btn.quality)}
                className={cn(
                  "flex-1 py-3 rounded-xl border border-border text-center transition-all duration-200 hover:border-primary/30 hover:bg-primary/5",
                  btn.color
                )}
              >
                <p className="text-sm font-medium">{btn.label}</p>
                <p className="text-[9px] text-muted-foreground mt-0.5">{btn.desc}</p>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {!isFlipped && (
        <p className="text-center text-xs text-muted-foreground animate-pulse">
          Tap card or press Space to reveal
        </p>
      )}
    </div>
  );
}

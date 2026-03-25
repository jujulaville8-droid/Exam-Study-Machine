"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  PenLine,
  Play,
  RotateCcw,
  Check,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { clozeCards } from "@/data/cloze-cards";
import { testThemes } from "@/data/themes";
import { shuffleArray } from "@/lib/spaced-repetition";
import { cn } from "@/lib/utils";
import type { ClozeCard, ThemeId } from "@/types";

type Phase = "setup" | "answering" | "checked" | "summary";

interface BlankState {
  value: string;
  correct: boolean | null;
}

function parseClozeTemplate(template: string): { parts: string[]; blankIndices: number[] } {
  const parts: string[] = [];
  const blankIndices: number[] = [];
  let remaining = template;
  let blankCount = 0;

  while (remaining.length > 0) {
    const openIdx = remaining.indexOf("{{");
    if (openIdx === -1) {
      parts.push(remaining);
      break;
    }
    if (openIdx > 0) {
      parts.push(remaining.slice(0, openIdx));
    }
    const closeIdx = remaining.indexOf("}}", openIdx);
    if (closeIdx === -1) {
      parts.push(remaining);
      break;
    }
    blankIndices.push(parts.length);
    parts.push(`__BLANK_${blankCount}__`);
    blankCount++;
    remaining = remaining.slice(closeIdx + 2);
  }

  return { parts, blankIndices };
}

function checkAnswer(input: string, blank: { answer: string; acceptAlternatives?: string[] }): boolean {
  const normalize = (s: string) => s.trim().toLowerCase().replace(/[.,;:'"]/g, "");
  const normalInput = normalize(input);
  if (normalInput === normalize(blank.answer)) return true;
  if (blank.acceptAlternatives?.some((alt) => normalize(alt) === normalInput)) return true;
  return false;
}

export default function ClozePage() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [themeFilter, setThemeFilter] = useState<string>("all");
  const [cards, setCards] = useState<ClozeCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blanks, setBlanks] = useState<BlankState[]>([]);
  const [results, setResults] = useState<{ cardId: string; correct: number; total: number }[]>([]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const filteredCards = useMemo(() => {
    if (themeFilter === "all") return clozeCards;
    return clozeCards.filter((c) => c.themeId === themeFilter);
  }, [themeFilter]);

  const startSession = useCallback(() => {
    const shuffled = shuffleArray(filteredCards);
    setCards(shuffled);
    setCurrentIndex(0);
    setResults([]);
    if (shuffled.length > 0) {
      setBlanks(shuffled[0].blanks.map(() => ({ value: "", correct: null })));
    }
    setPhase("answering");
  }, [filteredCards]);

  const handleCheck = useCallback(() => {
    const card = cards[currentIndex];
    const checked = blanks.map((b, i) => ({
      ...b,
      correct: checkAnswer(b.value, card.blanks[i]),
    }));
    setBlanks(checked);
    const correctCount = checked.filter((b) => b.correct).length;
    setResults((prev) => [
      ...prev,
      { cardId: card.id, correct: correctCount, total: card.blanks.length },
    ]);
    setPhase("checked");
  }, [blanks, cards, currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= cards.length) {
      setPhase("summary");
      return;
    }
    const nextIdx = currentIndex + 1;
    setCurrentIndex(nextIdx);
    setBlanks(cards[nextIdx].blanks.map(() => ({ value: "", correct: null })));
    setPhase("answering");
  }, [currentIndex, cards]);

  const replayMissed = useCallback(() => {
    const missedIds = new Set(results.filter((r) => r.correct < r.total).map((r) => r.cardId));
    const missed = cards.filter((c) => missedIds.has(c.id));
    if (missed.length === 0) return;
    setCards(shuffleArray(missed));
    setCurrentIndex(0);
    setResults([]);
    setBlanks(missed[0].blanks.map(() => ({ value: "", correct: null })));
    setPhase("answering");
  }, [results, cards]);

  // Focus first input on card change
  useEffect(() => {
    if (phase === "answering" && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [phase, currentIndex]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, blankIndex: number) => {
      if (e.key === "Enter") {
        if (phase === "answering") {
          // Move to next blank or check
          if (blankIndex + 1 < blanks.length) {
            inputRefs.current[blankIndex + 1]?.focus();
          } else {
            handleCheck();
          }
        } else if (phase === "checked") {
          handleNext();
        }
      }
    },
    [phase, blanks.length, handleCheck, handleNext]
  );

  const currentCard = cards[currentIndex];

  // Setup
  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="w-14 h-14 mx-auto rounded-full border border-border flex items-center justify-center">
            <PenLine className="w-6 h-6 text-primary" />
          </div>
          <h1 className="font-serif text-4xl italic">Fill in the Blank</h1>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Complete the missing terms from memory. Generating answers is far
            more effective for retention than recognizing them in a list.
          </p>
        </motion.div>

        {/* Theme Filter */}
        <div className="flex flex-wrap justify-center gap-1.5">
          <button
            onClick={() => setThemeFilter("all")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all",
              themeFilter === "all"
                ? "bg-primary text-primary-foreground shadow-sm font-medium"
                : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
            )}
          >
            All ({clozeCards.length})
          </button>
          {testThemes.map((theme) => {
            const count = clozeCards.filter((c) => c.themeId === theme.id).length;
            if (count === 0) return null;
            return (
              <button
                key={theme.id}
                onClick={() => setThemeFilter(theme.id)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all",
                  themeFilter === theme.id
                    ? "bg-primary text-primary-foreground shadow-sm font-medium"
                    : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
                )}
              >
                {theme.number}. {theme.title.split(" ").slice(0, 2).join(" ")} ({count})
              </button>
            );
          })}
        </div>

        <Button
          size="lg"
          onClick={startSession}
          className="w-full"
          disabled={filteredCards.length === 0}
        >
          <Play className="w-4 h-4 mr-2" />
          Start ({filteredCards.length} cards)
        </Button>
      </div>
    );
  }

  // Summary
  if (phase === "summary") {
    const totalBlanks = results.reduce((s, r) => s + r.total, 0);
    const totalCorrect = results.reduce((s, r) => s + r.correct, 0);
    const pct = totalBlanks > 0 ? Math.round((totalCorrect / totalBlanks) * 100) : 0;
    const missedCount = results.filter((r) => r.correct < r.total).length;

    return (
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-8">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="text-center space-y-6">
            <CheckCircle className="w-12 h-12 mx-auto text-success" />
            <h2 className="font-serif text-3xl italic">Session Complete</h2>

            <div className="grid grid-cols-3 divide-x divide-border">
              <div className="px-4 py-3">
                <p className="text-2xl font-serif italic text-primary">{pct}%</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Accuracy</p>
              </div>
              <div className="px-4 py-3">
                <p className="text-2xl font-serif italic">{totalCorrect}/{totalBlanks}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Blanks Correct</p>
              </div>
              <div className="px-4 py-3">
                <p className="text-2xl font-serif italic">{results.length}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Cards Done</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="flex gap-3">
          {missedCount > 0 && (
            <Button variant="outline" className="flex-1" onClick={replayMissed}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Retry Missed ({missedCount})
            </Button>
          )}
          <Button className="flex-1" onClick={() => setPhase("setup")}>
            <Play className="w-4 h-4 mr-2" />
            New Session
          </Button>
        </div>
      </div>
    );
  }

  // Answering / Checked
  if (!currentCard) return null;

  const { parts, blankIndices } = parseClozeTemplate(currentCard.template);
  let blankCounter = 0;

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm tabular-nums text-muted-foreground">
          <span className="text-foreground font-medium">{currentIndex + 1}</span>
          <span className="mx-1">/</span>
          {cards.length}
        </span>
        <Badge variant="outline">{currentCard.category}</Badge>
      </div>
      <ProgressBar value={currentIndex + 1} max={cards.length} className="h-0.5" />

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
        >
          <Card className="space-y-4">
            <div className="text-sm leading-relaxed flex flex-wrap items-baseline gap-y-2">
              {parts.map((part, i) => {
                if (blankIndices.includes(i)) {
                  const bi = blankCounter;
                  blankCounter++;
                  const blank = blanks[bi];
                  const cardBlank = currentCard.blanks[bi];

                  return (
                    <span key={i} className="inline-flex flex-col mx-1">
                      <input
                        ref={(el) => { inputRefs.current[bi] = el; }}
                        type="text"
                        value={blank?.value ?? ""}
                        onChange={(e) => {
                          if (phase !== "answering") return;
                          setBlanks((prev) =>
                            prev.map((b, idx) =>
                              idx === bi ? { ...b, value: e.target.value } : b
                            )
                          );
                        }}
                        onKeyDown={(e) => handleKeyDown(e, bi)}
                        disabled={phase === "checked"}
                        placeholder={cardBlank?.hint ?? "..."}
                        className={cn(
                          "w-40 px-2 py-1 rounded-lg border text-sm font-medium text-center transition-colors bg-transparent outline-none",
                          phase === "checked" && blank?.correct === true &&
                            "border-success/50 bg-success/10 text-success",
                          phase === "checked" && blank?.correct === false &&
                            "border-error/50 bg-error/10 text-error",
                          phase === "answering" && "border-primary/30 focus:border-primary"
                        )}
                      />
                      {phase === "checked" && blank?.correct === false && (
                        <span className="text-[10px] text-success mt-1 text-center">
                          {cardBlank?.answer}
                        </span>
                      )}
                    </span>
                  );
                }
                return <span key={i}>{part}</span>;
              })}
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Actions */}
      {phase === "answering" && (
        <Button onClick={handleCheck} className="w-full">
          <Check className="w-4 h-4 mr-2" />
          Check Answers
        </Button>
      )}
      {phase === "checked" && (
        <Button onClick={handleNext} className="w-full">
          <ArrowRight className="w-4 h-4 mr-2" />
          {currentIndex + 1 >= cards.length ? "See Results" : "Next Card"}
        </Button>
      )}
    </div>
  );
}

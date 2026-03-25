"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  Flame,
  Play,
  RotateCcw,
  Eye,
  Zap,
  Trophy,
  XCircle,
  MinusCircle,
  CheckCircle,
} from "lucide-react";
import { detailedCases } from "@/data/detailed-cases";
import { testThemes, getDetailedCasesByTheme } from "@/data/themes";
import { shuffleArray } from "@/lib/spaced-repetition";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { cn } from "@/lib/utils";
import type { DetailedCase, ThemeId } from "@/types";

type Phase = "setup" | "playing" | "reveal" | "summary";
type Confidence = 0 | 1 | 2;

interface RoundResult {
  caseId: string;
  caseName: string;
  confidence: Confidence;
  timeUsed: number;
}

const timerOptions = [15, 30, 45];

export default function RapidFirePage() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [themeFilter, setThemeFilter] = useState<string>("all");
  const [timerDuration, setTimerDuration] = useState(30);
  const [cases, setCases] = useState<DetailedCase[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useLocalStorage("rapid-fire-high", 0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const filteredCases = useMemo(() => {
    if (themeFilter === "all") return detailedCases;
    const theme = testThemes.find((t) => t.id === themeFilter);
    if (!theme) return detailedCases;
    return getDetailedCasesByTheme(theme.id as ThemeId);
  }, [themeFilter]);

  const startGame = useCallback(() => {
    const shuffled = shuffleArray(filteredCases);
    setCases(shuffled);
    setCurrentIndex(0);
    setResults([]);
    setStreak(0);
    setScore(0);
    setTimeLeft(timerDuration);
    setPhase("playing");
  }, [filteredCases, timerDuration]);

  // Timer
  useEffect(() => {
    if (phase !== "playing") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setPhase("reveal");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, currentIndex]);

  const handleReveal = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase("reveal");
  }, []);

  const handleConfidence = useCallback(
    (confidence: Confidence) => {
      const current = cases[currentIndex];
      const timeUsed = timerDuration - timeLeft;
      const result: RoundResult = {
        caseId: current.id,
        caseName: current.name,
        confidence,
        timeUsed,
      };

      const newStreak = confidence === 2 ? streak + 1 : 0;
      const multiplier = newStreak >= 5 ? 2 : newStreak >= 3 ? 1.5 : 1;
      const points = Math.round(confidence * multiplier);
      const newScore = score + points;

      setResults((prev) => [...prev, result]);
      setStreak(newStreak);
      setScore(newScore);

      if (currentIndex + 1 >= cases.length) {
        if (newScore > highScore) setHighScore(newScore);
        setPhase("summary");
      } else {
        setCurrentIndex(currentIndex + 1);
        setTimeLeft(timerDuration);
        setPhase("playing");
      }
    },
    [cases, currentIndex, timerDuration, timeLeft, streak, score, highScore, setHighScore]
  );

  const replayMissed = useCallback(() => {
    const missedIds = new Set(results.filter((r) => r.confidence === 0).map((r) => r.caseId));
    const missed = cases.filter((c) => missedIds.has(c.id));
    if (missed.length === 0) return;
    setCases(shuffleArray(missed));
    setCurrentIndex(0);
    setResults([]);
    setStreak(0);
    setScore(0);
    setTimeLeft(timerDuration);
    setPhase("playing");
  }, [results, cases, timerDuration]);

  const currentCase = cases[currentIndex];

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
            <Flame className="w-6 h-6 text-error" />
          </div>
          <h1 className="font-serif text-4xl italic">Case Rapid Fire</h1>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            See a case name — recall key facts and principles before time runs out.
            Build streaks for bonus points.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Theme Filter */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
              Theme
            </p>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setThemeFilter("all")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all",
                  themeFilter === "all"
                    ? "bg-primary text-primary-foreground shadow-sm font-medium"
                    : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
                )}
              >
                All ({detailedCases.length})
              </button>
              {testThemes.map((theme) => {
                const count = getDetailedCasesByTheme(theme.id as ThemeId).length;
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
          </div>

          {/* Timer */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
              Time per case
            </p>
            <div className="flex gap-2">
              {timerOptions.map((t) => (
                <button
                  key={t}
                  onClick={() => setTimerDuration(t)}
                  className={cn(
                    "w-16 h-14 rounded-xl text-sm font-serif italic transition-all",
                    timerDuration === t
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border text-muted-foreground hover:border-primary/30"
                  )}
                >
                  {t}s
                </button>
              ))}
            </div>
          </div>

          {highScore > 0 && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Trophy className="w-3.5 h-3.5 text-warning" />
              High score: {highScore}
            </div>
          )}

          <Button
            size="lg"
            onClick={startGame}
            className="w-full"
            disabled={filteredCases.length === 0}
          >
            <Play className="w-4 h-4 mr-2" />
            Start ({filteredCases.length} cases)
          </Button>
        </div>
      </div>
    );
  }

  // Summary
  if (phase === "summary") {
    const nailedIt = results.filter((r) => r.confidence === 2).length;
    const partial = results.filter((r) => r.confidence === 1).length;
    const forgot = results.filter((r) => r.confidence === 0).length;

    return (
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-8">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="text-center space-y-6">
            <Trophy className="w-12 h-12 mx-auto text-warning" />
            <h2 className="font-serif text-3xl italic">Round Complete</h2>

            <div className="grid grid-cols-3 divide-x divide-border">
              <div className="px-4 py-3">
                <p className="text-2xl font-serif italic text-primary">{score}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Score</p>
              </div>
              <div className="px-4 py-3">
                <p className="text-2xl font-serif italic text-success">{nailedIt}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Nailed It</p>
              </div>
              <div className="px-4 py-3">
                <p className="text-2xl font-serif italic text-error">{forgot}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Forgot</p>
              </div>
            </div>

            {score >= highScore && score > 0 && (
              <Badge variant="warning">New High Score!</Badge>
            )}
          </Card>
        </motion.div>

        {/* Per-case breakdown */}
        <div className="space-y-2">
          {results.map((r) => (
            <div
              key={r.caseId}
              className="flex items-center justify-between p-3 rounded-xl border border-border"
            >
              <span className="text-sm">{r.caseName}</span>
              <Badge
                variant={r.confidence === 2 ? "success" : r.confidence === 1 ? "warning" : "error"}
              >
                {r.confidence === 2 ? "Nailed It" : r.confidence === 1 ? "Partial" : "Forgot"}
              </Badge>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          {forgot > 0 && (
            <Button variant="outline" className="flex-1" onClick={replayMissed}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Replay Missed ({forgot})
            </Button>
          )}
          <Button className="flex-1" onClick={() => setPhase("setup")}>
            <Play className="w-4 h-4 mr-2" />
            New Round
          </Button>
        </div>
      </div>
    );
  }

  // Playing / Reveal
  if (!currentCase) return null;

  const timerPercent = (timeLeft / timerDuration) * 100;

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm tabular-nums text-muted-foreground">
          <span className="text-foreground font-medium">{currentIndex + 1}</span>
          <span className="mx-1">/</span>
          {cases.length}
        </span>
        <div className="flex items-center gap-3">
          {streak >= 3 && (
            <Badge variant="warning">
              <Zap className="w-3 h-3 mr-1" />
              x{streak >= 5 ? "2" : "1.5"}
            </Badge>
          )}
          <Badge variant="default">{score} pts</Badge>
        </div>
      </div>

      {/* Timer Bar */}
      <div className="h-1.5 rounded-full bg-border overflow-hidden">
        <motion.div
          className={cn(
            "h-full rounded-full transition-colors",
            timerPercent > 50 ? "bg-primary" : timerPercent > 25 ? "bg-warning" : "bg-error"
          )}
          style={{ width: `${timerPercent}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Case Prompt */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCase.id + "-" + currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Card className="text-center space-y-4 min-h-[200px] flex flex-col items-center justify-center">
            {phase === "playing" ? (
              <>
                <Badge variant="outline">{currentCase.citation}</Badge>
                <h2 className="font-serif text-2xl md:text-3xl italic">
                  {currentCase.name}
                </h2>
                <p className="text-xs text-muted-foreground mt-2">
                  Recall: key principles, significance, facts...
                </p>
                <p className="text-3xl font-serif italic tabular-nums text-muted-foreground mt-4">
                  {timeLeft}s
                </p>
                <Button variant="outline" onClick={handleReveal} className="mt-2">
                  <Eye className="w-4 h-4 mr-2" />
                  Reveal Answer
                </Button>
              </>
            ) : (
              /* Reveal Phase */
              <div className="text-left w-full space-y-4">
                <div className="text-center">
                  <Badge variant="outline">{currentCase.citation}</Badge>
                  <h2 className="font-serif text-xl italic mt-2">{currentCase.name}</h2>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1.5">
                    Key Principles
                  </p>
                  <ul className="space-y-1">
                    {currentCase.keyPrinciples.slice(0, 3).map((p, i) => (
                      <li key={i} className="text-xs text-muted-foreground leading-relaxed pl-3 border-l-2 border-success/20">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1.5">
                    Significance
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {currentCase.significance.slice(0, 250)}
                    {currentCase.significance.length > 250 && "..."}
                  </p>
                </div>

                {currentCase.notableQuotes[0] && (
                  <blockquote className="pl-3 border-l-2 border-warning/30 italic text-xs text-muted-foreground">
                    &ldquo;{currentCase.notableQuotes[0].slice(0, 200)}
                    {currentCase.notableQuotes[0].length > 200 && "..."}&rdquo;
                  </blockquote>
                )}
              </div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Confidence Rating */}
      {phase === "reveal" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3"
        >
          {[
            { confidence: 0 as Confidence, label: "Forgot", icon: XCircle, variant: "error" as const },
            { confidence: 1 as Confidence, label: "Partial", icon: MinusCircle, variant: "warning" as const },
            { confidence: 2 as Confidence, label: "Nailed It", icon: CheckCircle, variant: "success" as const },
          ].map((btn) => (
            <button
              key={btn.confidence}
              onClick={() => handleConfidence(btn.confidence)}
              className={cn(
                "flex-1 py-4 rounded-xl border border-border text-center transition-all hover:border-primary/30 hover:bg-primary/5"
              )}
            >
              <btn.icon className={cn("w-5 h-5 mx-auto mb-1", `text-${btn.variant}`)} />
              <p className="text-sm font-medium">{btn.label}</p>
              <p className="text-[9px] text-muted-foreground">
                {btn.confidence === 0 ? "0 pts" : btn.confidence === 1 ? "1 pt" : "2 pts"}
              </p>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

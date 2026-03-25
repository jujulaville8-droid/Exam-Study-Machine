"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, RotateCcw, GitMerge } from "lucide-react";
import { flashcards } from "@/data/flashcards";
import { cn } from "@/lib/utils";

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface MatchItem {
  id: string;
  sectionNumber: string;
  title: string;
  definition: string;
}

const sectionItems: MatchItem[] = flashcards
  .filter((c) => c.category === "section")
  .map((c) => {
    const [sectionNumber, ...titleParts] = c.front.split(" — ");
    return {
      id: c.id,
      sectionNumber: sectionNumber.trim(),
      title: titleParts.join(" — ").trim(),
      definition: c.back,
    };
  });

function buildRound(items: MatchItem[]) {
  const left = shuffleArray(items.map((i) => ({ id: i.id, label: i.sectionNumber })));
  const right = shuffleArray(items.map((i) => ({ id: i.id, label: i.title, definition: i.definition })));
  return { left, right };
}

export default function MatchPage() {
  const allItems = sectionItems;
  const [round, setRound] = useState(() => buildRound(allItems));
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<{ left: string; right: string } | null>(null);
  const [showDefinition, setShowDefinition] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const totalItems = allItems.length;

  function restart() {
    setRound(buildRound(allItems));
    setSelectedLeft(null);
    setMatched(new Set());
    setWrongPair(null);
    setShowDefinition(null);
    setFinished(false);
    setAttempts(0);
  }

  function handleLeftClick(id: string) {
    if (matched.has(id) || wrongPair) return;
    setSelectedLeft((prev) => (prev === id ? null : id));
    setShowDefinition(null);
  }

  function handleRightClick(id: string) {
    if (matched.has(id) || wrongPair) return;

    if (!selectedLeft) return;

    setAttempts((a) => a + 1);

    if (selectedLeft === id) {
      // Correct
      const next = new Set(matched);
      next.add(id);
      setMatched(next);
      setSelectedLeft(null);
      if (next.size === totalItems) {
        setTimeout(() => setFinished(true), 400);
      }
    } else {
      // Wrong — flash red then clear
      setWrongPair({ left: selectedLeft, right: id });
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
      }, 800);
    }
  }

  const accuracy = attempts > 0 ? Math.round((totalItems / attempts) * 100) : 100;

  if (finished) {
    return (
      <div className="max-w-lg mx-auto px-6 py-16 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
        >
          <div className="w-16 h-16 mx-auto rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center">
            <GitMerge className="w-7 h-7 text-primary" />
          </div>
          <h1 className="font-serif text-4xl italic">All matched!</h1>
          <p className="text-muted-foreground text-sm">
            {totalItems} sections matched · {attempts} attempts · {accuracy}% accuracy
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={restart}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm hover:border-primary/40 hover:text-primary transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Play Again
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3"
      >
        <div className="w-14 h-14 mx-auto rounded-full border border-border flex items-center justify-center">
          <GitMerge className="w-6 h-6 text-primary" />
        </div>
        <h1 className="font-serif text-4xl italic">Match</h1>
        <p className="text-sm text-muted-foreground">
          Match each Charter section number to its title and definition
        </p>
      </motion.div>

      {/* Progress */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          <span className="text-foreground font-medium tabular-nums">{matched.size}</span>
          <span className="mx-1">/</span>
          {totalItems} matched
        </span>
        <button
          onClick={restart}
          className="flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          <Shuffle className="w-3.5 h-3.5" />
          Reshuffle
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full rounded-full bg-border overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          animate={{ width: `${(matched.size / totalItems) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left — section numbers */}
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Section Numbers
          </p>
          {round.left.map((item) => {
            const isMatched = matched.has(item.id);
            const isSelected = selectedLeft === item.id;
            const isWrong = wrongPair?.left === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => handleLeftClick(item.id)}
                disabled={isMatched}
                className={cn(
                  "w-full text-left px-5 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200",
                  isMatched && "border-success/30 bg-success/5 text-success cursor-default",
                  isWrong && "border-error/40 bg-error/5 text-error",
                  isSelected && !isMatched && !isWrong && "border-primary bg-primary/5 text-primary",
                  !isMatched && !isSelected && !isWrong && "border-border hover:border-primary/40 hover:text-primary cursor-pointer"
                )}
                animate={isWrong ? { x: [0, -6, 6, -4, 4, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                {item.label}
                {isMatched && (
                  <span className="ml-2 text-[10px] uppercase tracking-wider opacity-60">matched</span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Right — titles + definitions */}
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Titles &amp; Definitions
          </p>
          {round.right.map((item) => {
            const isMatched = matched.has(item.id);
            const isWrong = wrongPair?.right === item.id;
            const isExpanded = showDefinition === item.id;
            return (
              <motion.div key={item.id} layout>
                <button
                  onClick={() => {
                    if (isMatched) {
                      setShowDefinition((prev) => (prev === item.id ? null : item.id));
                    } else {
                      handleRightClick(item.id);
                    }
                  }}
                  className={cn(
                    "w-full text-left px-5 py-3.5 rounded-xl border text-sm transition-all duration-200",
                    isMatched && "border-success/30 bg-success/5 text-success cursor-pointer",
                    isWrong && "border-error/40 bg-error/5 text-error",
                    !isMatched && !isWrong && selectedLeft && "border-border hover:border-primary/40 hover:bg-primary/5 cursor-pointer",
                    !isMatched && !isWrong && !selectedLeft && "border-border text-muted-foreground cursor-default"
                  )}
                >
                  <span className="font-medium">{item.label}</span>
                  {isMatched && (
                    <span className="ml-2 text-[10px] uppercase tracking-wider opacity-60">
                      {isExpanded ? "hide" : "see definition"}
                    </span>
                  )}
                </button>
                <AnimatePresence>
                  {isMatched && isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 py-3 text-xs text-muted-foreground leading-relaxed border border-t-0 border-success/20 rounded-b-xl bg-success/[0.02]">
                        {item.definition}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Instruction hint */}
      <p className="text-center text-[10px] text-muted-foreground tracking-wider uppercase">
        Select a section number, then select its matching title
      </p>
    </div>
  );
}

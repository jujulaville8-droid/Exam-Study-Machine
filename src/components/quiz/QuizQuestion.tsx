"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import type { QuizQuestion as QuizQuestionType } from "@/types";

export function QuizQuestion({
  question,
  onAnswer,
}: {
  question: QuizQuestionType;
  onAnswer: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  function handleSelect(idx: number) {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    setTimeout(() => {
      onAnswer(idx === question.correctIndex);
    }, 2200);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h3 className="font-serif text-xl italic leading-relaxed">
        {question.question}
      </h3>

      <div className="space-y-2.5">
        {question.options.map((option, idx) => {
          const isCorrect = idx === question.correctIndex;
          const isSelected = idx === selected;

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={showResult}
              className={cn(
                "w-full text-left p-4 rounded-xl border transition-all duration-300",
                !showResult && "hover:border-primary/30 hover:bg-primary/[0.02] cursor-pointer",
                showResult && isCorrect && "border-success/40 bg-success/[0.05]",
                showResult && isSelected && !isCorrect && "border-error/40 bg-error/[0.05]",
                !showResult && "border-border bg-surface"
              )}
            >
              <div className="flex items-center gap-4">
                <span
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium border transition-all",
                    showResult && isCorrect
                      ? "bg-success text-white border-success"
                      : showResult && isSelected
                        ? "bg-error text-white border-error"
                        : "border-border text-muted-foreground"
                  )}
                >
                  {showResult && isCorrect ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : showResult && isSelected ? (
                    <X className="w-3.5 h-3.5" />
                  ) : (
                    String.fromCharCode(65 + idx)
                  )}
                </span>
                <span className="text-sm leading-relaxed">{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {showResult && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="p-5 rounded-2xl border border-border bg-surface-elevated/50"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">
            Explanation
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            {question.explanation}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

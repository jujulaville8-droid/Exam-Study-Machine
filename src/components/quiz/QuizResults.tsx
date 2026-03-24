"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { RotateCcw, ArrowRight } from "lucide-react";

export function QuizResults({
  correct,
  total,
  onRetry,
  onNewQuiz,
}: {
  correct: number;
  total: number;
  onRetry: () => void;
  onNewQuiz: () => void;
}) {
  const percentage = Math.round((correct / total) * 100);
  const grade =
    percentage >= 90
      ? "A+"
      : percentage >= 80
        ? "A"
        : percentage >= 70
          ? "B"
          : percentage >= 60
            ? "C"
            : "Needs Work";

  const color =
    percentage >= 70 ? "success" : percentage >= 50 ? "warning" : "error";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-sm mx-auto text-center space-y-8 py-8"
    >
      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Result
        </p>
        <motion.p
          className="font-serif text-6xl italic text-primary"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          {grade}
        </motion.p>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">{correct}</span> of{" "}
          <span className="text-foreground font-medium">{total}</span> correct
        </p>
        <ProgressBar value={correct} max={total} color={color} className="h-1" />
        <p className="font-serif text-4xl italic">{percentage}%</p>
      </div>

      <div className="editorial-line" />

      <div className="flex gap-3 justify-center">
        <Button variant="outline" onClick={onRetry}>
          <RotateCcw className="w-4 h-4" />
          Retry
        </Button>
        <Button onClick={onNewQuiz}>
          New Quiz
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

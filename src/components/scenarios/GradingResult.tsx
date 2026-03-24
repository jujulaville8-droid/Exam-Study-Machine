"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import type { GradingResult as GradingResultType } from "@/types";

export function GradingResult({
  result,
  modelAnswer,
}: {
  result: GradingResultType;
  modelAnswer: string;
}) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [showModel, setShowModel] = useState(false);

  const color =
    result.percentage >= 70
      ? "success"
      : result.percentage >= 50
        ? "warning"
        : "error";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Score Display */}
      <div className="text-center space-y-4 py-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Your Score
        </p>
        <motion.p
          className="font-serif text-7xl italic text-primary"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          {result.percentage}%
        </motion.p>
        <ProgressBar
          value={result.percentage}
          color={color}
          className="h-1 max-w-xs mx-auto"
        />
        <p className="text-xs text-muted-foreground tabular-nums">
          {result.totalScore} / {result.maxScore} points
        </p>
      </div>

      <div className="editorial-line" />

      {/* Category Breakdown */}
      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Breakdown
        </p>
        {result.categoryResults.map((cat) => (
          <div
            key={cat.name}
            className="rounded-xl border border-border overflow-hidden"
          >
            <button
              onClick={() =>
                setExpandedCategory(expandedCategory === cat.name ? null : cat.name)
              }
              className="w-full p-4 flex items-center justify-between hover:bg-surface-elevated/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">{cat.name}</span>
                <Badge
                  variant={
                    cat.score >= cat.maxPoints * 0.7
                      ? "success"
                      : cat.score >= cat.maxPoints * 0.4
                        ? "warning"
                        : "error"
                  }
                >
                  {cat.score}/{cat.maxPoints}
                </Badge>
              </div>
              {expandedCategory === cat.name ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            {expandedCategory === cat.name && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="px-4 pb-4"
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cat.details}
                </p>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Keywords */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl border border-success/15 bg-success/[0.03]">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-success">
              Matched
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {result.matchedKeywords.length > 0 ? (
              result.matchedKeywords.map((kw) => (
                <Badge key={kw} variant="success">{kw}</Badge>
              ))
            ) : (
              <span className="text-xs text-muted-foreground italic">None detected</span>
            )}
          </div>
        </div>
        <div className="p-5 rounded-2xl border border-error/15 bg-error/[0.03]">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-4 h-4 text-error" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-error">
              Missed
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {result.missedKeywords.length > 0 ? (
              result.missedKeywords.map((kw) => (
                <Badge key={kw} variant="error">{kw}</Badge>
              ))
            ) : (
              <span className="text-xs text-muted-foreground italic">
                None — excellent work
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Strengths & Improvements */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">
              Strengths
            </span>
          </div>
          <ul className="space-y-2">
            {result.strengths.map((s, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                <span className="text-success mt-0.5">+</span> {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-warning" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">
              Improvements
            </span>
          </div>
          <ul className="space-y-2">
            {result.improvements.map((s, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                <span className="text-warning mt-0.5">→</span> {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="editorial-line" />

      {/* Model Answer */}
      <div>
        <Button variant="outline" size="sm" onClick={() => setShowModel((s) => !s)}>
          <BookOpen className="w-4 h-4" />
          {showModel ? "Hide Model Answer" : "View Model Answer"}
        </Button>
        {showModel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 p-6 rounded-2xl border border-primary/15 bg-primary/[0.02]"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Model Answer
            </p>
            <p className="text-sm leading-[1.8] whitespace-pre-line">
              {modelAnswer}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

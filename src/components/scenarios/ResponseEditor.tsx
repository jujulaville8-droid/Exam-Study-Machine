"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export function ResponseEditor({
  onSubmit,
  hints,
  isSubmitting,
}: {
  onSubmit: (response: string) => void;
  hints: string[];
  isSubmitting: boolean;
}) {
  const [text, setText] = useState("");
  const [showHints, setShowHints] = useState(false);
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
          Your Analysis
        </label>
        <span className="text-xs tabular-nums text-muted-foreground">
          <span className={wordCount >= 150 ? "text-success" : wordCount >= 50 ? "text-warning" : "text-muted-foreground"}>
            {wordCount}
          </span>
          {" "}words
          {wordCount < 100 && (
            <span className="text-muted-foreground/60 ml-1">(aim for 150–300)</span>
          )}
        </span>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Identify the relevant Charter sections, apply appropriate legal tests, reference case law, and provide a critical analysis with counterarguments..."
        className="w-full min-h-[280px] p-6 rounded-2xl bg-surface border border-border text-foreground text-sm leading-[1.8] placeholder:text-muted-foreground/40 resize-y focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/30 transition-all font-sans"
      />

      <div className="flex items-center gap-3">
        <Button
          onClick={() => onSubmit(text)}
          disabled={wordCount < 10 || isSubmitting}
        >
          <Send className="w-4 h-4" />
          {isSubmitting ? "Grading..." : "Submit for Grading"}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowHints((h) => !h)}
        >
          <Lightbulb className="w-4 h-4" />
          {showHints ? "Hide Hints" : "Hints"}
        </Button>
      </div>

      {showHints && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="p-5 rounded-2xl border border-warning/20 bg-warning/[0.03]"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warning mb-3">
            Consider
          </p>
          <ul className="space-y-1.5">
            {hints.map((hint, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-warning/60">—</span> {hint}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}

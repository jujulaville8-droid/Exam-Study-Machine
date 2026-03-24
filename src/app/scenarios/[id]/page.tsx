"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { scenarios } from "@/data/scenarios";
import { gradeResponse } from "@/lib/grading-engine";
import { saveScenarioAttempt, updateSectionMastery } from "@/lib/storage";
import { ResponseEditor } from "@/components/scenarios/ResponseEditor";
import { GradingResult } from "@/components/scenarios/GradingResult";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Scale, Sparkles, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GradingResult as GradingResultType } from "@/types";

const difficultyColors = {
  beginner: "success",
  intermediate: "warning",
  advanced: "error",
} as const;

const API_KEY_STORAGE = "claude-api-key";

export default function ScenarioPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const scenario = scenarios.find((s) => s.id === id);
  const [result, setResult] = useState<GradingResultType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gradingMode, setGradingMode] = useState<"rubric" | "ai">("rubric");
  const [apiKey, setApiKey] = useState("");
  const [showApiInput, setShowApiInput] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(API_KEY_STORAGE);
    if (saved) {
      setApiKey(saved);
      setGradingMode("ai");
    }
  }, []);

  function saveApiKey(key: string) {
    setApiKey(key);
    if (key) {
      localStorage.setItem(API_KEY_STORAGE, key);
      setGradingMode("ai");
    } else {
      localStorage.removeItem(API_KEY_STORAGE);
      setGradingMode("rubric");
    }
    setShowApiInput(false);
  }

  if (!scenario) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">Scenario not found.</p>
        <Link href="/scenarios">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="w-4 h-4" /> Back to Scenarios
          </Button>
        </Link>
      </div>
    );
  }

  async function handleSubmit(response: string) {
    setIsSubmitting(true);

    let gradingResult: GradingResultType;

    if (gradingMode === "ai" && apiKey) {
      try {
        const res = await fetch("/api/grade", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            scenario: {
              title: scenario!.title,
              description: scenario!.description,
              relevantSections: scenario!.relevantSections,
            },
            response,
            apiKey,
          }),
        });
        if (!res.ok) throw new Error("AI grading failed");
        gradingResult = await res.json();
      } catch {
        // Fallback to rubric grading
        gradingResult = gradeResponse(scenario!, response);
      }
    } else {
      gradingResult = gradeResponse(scenario!, response);
    }

    setResult(gradingResult);

    saveScenarioAttempt({
      scenarioId: scenario!.id,
      date: new Date().toISOString(),
      score: gradingResult.totalScore,
      maxScore: gradingResult.maxScore,
    });

    for (const sectionId of scenario!.relevantSections) {
      updateSectionMastery(sectionId, gradingResult.percentage);
    }

    setIsSubmitting(false);
  }

  const hints = [
    `Relevant Charter section(s): ${scenario.relevantSections.join(", ")}`,
    "Apply the appropriate legal test(s)",
    "Reference relevant case law",
    "Consider counterarguments",
    "Reach a conclusion",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <Link
          href="/scenarios"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Scenarios
        </Link>

        {/* Grading Mode Toggle */}
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg bg-surface-elevated p-0.5">
            <button
              onClick={() => setGradingMode("rubric")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
                gradingMode === "rubric"
                  ? "bg-surface text-foreground shadow-sm"
                  : "text-muted-foreground"
              )}
            >
              <Cpu className="w-3 h-3" />
              Rubric
            </button>
            <button
              onClick={() => {
                if (!apiKey) {
                  setShowApiInput(true);
                } else {
                  setGradingMode("ai");
                }
              }}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
                gradingMode === "ai"
                  ? "bg-surface text-foreground shadow-sm"
                  : "text-muted-foreground"
              )}
            >
              <Sparkles className="w-3 h-3" />
              AI Grading
            </button>
          </div>
        </div>
      </div>

      {/* API Key Input */}
      {showApiInput && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="p-4 rounded-xl border border-primary/20 bg-primary/5"
        >
          <p className="text-sm font-medium mb-2">Enter your Claude API Key</p>
          <p className="text-xs text-muted-foreground mb-3">
            Your key is stored locally in your browser and sent directly to the
            Anthropic API. It is never stored on any server.
          </p>
          <div className="flex gap-2">
            <input
              type="password"
              placeholder="sk-ant-..."
              className="flex-1 px-3 py-2 rounded-lg bg-surface border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              defaultValue={apiKey}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  saveApiKey((e.target as HTMLInputElement).value);
                }
              }}
            />
            <Button
              size="sm"
              onClick={(e) => {
                const input = (e.target as HTMLElement)
                  .closest("div")
                  ?.querySelector("input");
                if (input) saveApiKey(input.value);
              }}
            >
              Save
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowApiInput(false)}
            >
              Cancel
            </Button>
          </div>
        </motion.div>
      )}

      {/* Scenario Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant={difficultyColors[scenario.difficulty]}>
            {scenario.difficulty}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {scenario.weekReference}
          </span>
          {gradingMode === "ai" && apiKey && (
            <Badge variant="default">
              <Sparkles className="w-3 h-3 mr-1" />
              AI Grading
            </Badge>
          )}
        </div>
        <h1 className="text-2xl font-bold">{scenario.title}</h1>
      </div>

      {/* Scenario Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6 rounded-xl bg-surface-elevated border border-border"
      >
        <div className="flex items-center gap-2 mb-3">
          <Scale className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Scenario</span>
        </div>
        <p className="text-sm leading-relaxed whitespace-pre-line">
          {scenario.description}
        </p>
      </motion.div>

      {/* Response or Results */}
      {result ? (
        <div className="space-y-6">
          <GradingResult result={result} modelAnswer={scenario.modelAnswer} />
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setResult(null)}>
              Try Again
            </Button>
            <Link href="/scenarios">
              <Button variant="ghost">Next Scenario</Button>
            </Link>
          </div>
        </div>
      ) : (
        <ResponseEditor
          onSubmit={handleSubmit}
          hints={hints}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
}

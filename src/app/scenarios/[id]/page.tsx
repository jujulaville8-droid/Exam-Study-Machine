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
          className="p-5 rounded-2xl border border-primary/20 bg-primary/[0.03]"
        >
          <p className="text-sm font-medium mb-1">Enable AI Grading</p>
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
            To use AI-powered grading, you need a <span className="text-foreground font-medium">Claude API key</span> from Anthropic.
            Go to <span className="text-primary">console.anthropic.com</span>, create an account, load up some credit
            (even $5 is plenty), and grab your API key. It starts with <span className="font-mono text-[11px]">sk-ant-</span>.
            If you don&apos;t know how, Google &quot;how to get a Claude API key&quot; — it&apos;s pretty easy (unless ur Dana).
          </p>
          <p className="text-[10px] text-muted-foreground/70 mb-3">
            Important: this only works with a Claude (Anthropic) key, not OpenAI or other AI providers.
            Your key is saved in your browser only — never sent to any server except Anthropic&apos;s API.
          </p>
          <div className="flex gap-2">
            <input
              type="password"
              placeholder="sk-ant-api03-..."
              className="flex-1 px-3 py-2 rounded-lg bg-surface border border-border text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary/30"
              defaultValue={apiKey}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const val = (e.target as HTMLInputElement).value.trim();
                  if (val && !val.startsWith("sk-ant-")) {
                    alert("That doesn't look like a Claude API key. It should start with sk-ant-. Make sure you're using a key from console.anthropic.com, not OpenAI or another provider.");
                    return;
                  }
                  saveApiKey(val);
                }
              }}
            />
            <Button
              size="sm"
              onClick={(e) => {
                const input = (e.target as HTMLElement)
                  .closest("div")
                  ?.querySelector("input");
                if (input) {
                  const val = input.value.trim();
                  if (val && !val.startsWith("sk-ant-")) {
                    alert("That doesn't look like a Claude API key. It should start with sk-ant-. Make sure you're using a key from console.anthropic.com, not OpenAI or another provider.");
                    return;
                  }
                  saveApiKey(val);
                }
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

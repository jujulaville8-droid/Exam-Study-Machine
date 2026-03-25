"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Scale, ArrowRight } from "lucide-react";
import { scenarios } from "@/data/scenarios";
import { testThemes, getScenariosByTheme } from "@/data/themes";
import { cn } from "@/lib/utils";

const difficulties = ["all", "beginner", "intermediate", "advanced"] as const;

const difficultyColors = {
  beginner: "success",
  intermediate: "warning",
  advanced: "error",
} as const;

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ScenariosPage() {
  const [difficulty, setDifficulty] = useState<string>("all");

  const filtered = useMemo(() => {
    if (difficulty === "all") return scenarios;
    return scenarios.filter((s) => s.difficulty === difficulty);
  }, [difficulty]);

  // Group filtered scenarios by theme
  const grouped = useMemo(() => {
    const groups: { title: string; themeNumber: number; items: typeof scenarios }[] = [];
    for (const theme of testThemes) {
      const themeScenarios = filtered.filter((s) =>
        getScenariosByTheme(theme.id).some((ts) => ts.id === s.id)
      );
      if (themeScenarios.length > 0) {
        groups.push({ title: theme.title, themeNumber: theme.number, items: themeScenarios });
      }
    }
    return groups;
  }, [filtered]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="w-14 h-14 mx-auto rounded-full border border-border flex items-center justify-center">
          <Scale className="w-6 h-6 text-primary" />
        </div>
        <h1 className="font-serif text-4xl italic">Scenario Practice</h1>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Apply Charter sections to real-world scenarios. Write your analysis
          and receive detailed feedback on your critical engagement.
        </p>
      </motion.div>

      <div className="flex justify-center gap-1.5">
        {difficulties.map((d) => (
          <button
            key={d}
            onClick={() => setDifficulty(d)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-medium capitalize tracking-wide transition-all duration-200",
              difficulty === d
                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
            )}
          >
            {d}
          </button>
        ))}
      </div>

      {grouped.map((group) => (
        <div key={group.themeNumber} className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="default">Theme {group.themeNumber}</Badge>
            <h2 className="font-serif text-xl italic">{group.title}</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid gap-4 md:grid-cols-2"
          >
            {group.items.map((scenario) => (
              <motion.div key={scenario.id} variants={fadeUp}>
                <Link href={`/scenarios/${scenario.id}`} className="group block h-full">
                  <Card className="h-full">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant={difficultyColors[scenario.difficulty]}>
                        {scenario.difficulty}
                      </Badge>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {scenario.weekReference}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg italic mb-2 group-hover:text-primary transition-colors">
                      {scenario.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {scenario.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-xs text-primary opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Begin Analysis
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}

      {grouped.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          No scenarios match this filter.
        </p>
      )}
    </div>
  );
}

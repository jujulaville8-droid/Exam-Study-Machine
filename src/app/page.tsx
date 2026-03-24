"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Scale,
  Brain,
  Layers,
  Flame,
  Target,
  ArrowRight,
  BookOpen,
  Clock,
} from "lucide-react";
import { getProgress } from "@/lib/storage";
import type { UserProgress } from "@/types";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const features = [
  {
    href: "/scenarios",
    icon: Scale,
    title: "Scenario Practice",
    subtitle: "Apply & Analyze",
    description:
      "Tackle real-world constitutional scenarios. Identify Charter sections, apply legal tests, and get graded on critical engagement.",
    tag: "15 scenarios",
  },
  {
    href: "/quiz",
    icon: Brain,
    title: "Multiple Choice",
    subtitle: "Test & Recall",
    description:
      "Challenge your knowledge across every course topic with instant feedback and detailed explanations.",
    tag: "70+ questions",
  },
  {
    href: "/flashcards",
    icon: Layers,
    title: "Flashcards",
    subtitle: "Memorize & Review",
    description:
      "Study Charter sections, legal tests, landmark cases, and constitutional concepts with spaced repetition.",
    tag: "90+ cards",
  },
];

export default function DashboardPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const scenarioCount = progress?.scenariosCompleted.length ?? 0;
  const quizCount = progress?.quizResults.length ?? 0;
  const streak = progress?.streakDays ?? 0;

  const avgQuizScore =
    quizCount > 0
      ? Math.round(
          progress!.quizResults.reduce(
            (sum, q) => sum + (q.correctAnswers / q.totalQuestions) * 100,
            0
          ) / quizCount
        )
      : 0;

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-16">
      {/* Hero */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative pt-8 md:pt-16"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-border" />
          <Badge variant="warning">
            <Clock className="w-3 h-3 mr-1" />
            Final Test — March 30
          </Badge>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-serif text-5xl md:text-7xl italic text-center leading-[1.1] tracking-tight"
        >
          Constitutional
          <br />
          <span className="text-primary">Study Machine</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-center text-sm tracking-[0.15em] text-muted-foreground mt-4"
        >
          by yours truly, Julian &ldquo;the Great&rdquo; Laville
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-center text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed"
        >
          SOSC 3360 — Charter of Rights and Freedoms, Indigenous Rights,
          and Constitutional History at York University
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-6 mt-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span>Charter Sections</span>
          <span className="text-border">•</span>
          <span>Legal Tests</span>
          <span className="text-border">•</span>
          <span>Landmark Cases</span>
          <span className="text-border">•</span>
          <span>Critical Analysis</span>
        </motion.div>
      </motion.section>

      {/* Stats Strip */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="grid grid-cols-4 divide-x divide-border border border-border rounded-2xl overflow-hidden bg-surface">
          {[
            { icon: Flame, label: "Streak", value: `${streak}d`, accent: "text-error" },
            { icon: Scale, label: "Scenarios", value: scenarioCount, accent: "text-primary" },
            { icon: Brain, label: "Quizzes", value: quizCount, accent: "text-success" },
            { icon: Target, label: "Avg Score", value: `${avgQuizScore}%`, accent: "text-warning" },
          ].map((stat) => (
            <div key={stat.label} className="p-5 text-center">
              <stat.icon className={`w-4 h-4 mx-auto mb-2 ${stat.accent}`} />
              <p className="text-2xl font-serif italic">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Study Modes */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <motion.div variants={fadeUp} className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
              Prepare
            </p>
            <h2 className="font-serif text-3xl italic">Study Modes</h2>
          </div>
          <div className="h-px flex-1 ml-8 bg-border self-center" />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div key={feature.href} variants={fadeUp}>
              <Link href={feature.href} className="group block h-full">
                <Card className="h-full relative overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-full border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300">
                      <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <Badge variant="outline">{feature.tag}</Badge>
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {feature.subtitle}
                  </p>
                  <h3 className="font-serif text-xl italic mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs text-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Begin
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Topics Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-6"
      >
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
              Coverage
            </p>
            <h2 className="font-serif text-3xl italic">Key Topics</h2>
          </div>
          <div className="h-px flex-1 ml-8 bg-border self-center" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { topic: "s.1 Reasonable Limits", section: "Oakes Test" },
            { topic: "s.2 Fundamental Freedoms", section: "Expression · Religion" },
            { topic: "s.7 Life, Liberty, Security", section: "Fundamental Justice" },
            { topic: "s.8 Search & Seizure", section: "Privacy Rights" },
            { topic: "s.11(b) Trial Delays", section: "R v Jordan" },
            { topic: "s.15 Equality Rights", section: "Substantive Equality" },
            { topic: "s.25 & s.35 Indigenous", section: "Aboriginal Rights" },
            { topic: "s.33 Notwithstanding", section: "Bill 21 · Ford v QC" },
          ].map(({ topic, section }) => (
            <div
              key={topic}
              className="p-4 rounded-xl border border-border hover:border-primary/20 transition-colors group cursor-default"
            >
              <p className="text-sm font-medium group-hover:text-primary transition-colors">
                {topic}
              </p>
              <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">
                {section}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Recent Activity */}
      {progress && progress.scenariosCompleted.length > 0 && (
        <section className="space-y-6 pb-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                History
              </p>
              <h2 className="font-serif text-3xl italic">Recent Activity</h2>
            </div>
            <div className="h-px flex-1 ml-8 bg-border self-center" />
          </div>

          <div className="space-y-2">
            {progress.scenariosCompleted
              .slice(-5)
              .reverse()
              .map((attempt, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl border border-border"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{attempt.scenarioId}</span>
                  </div>
                  <Badge
                    variant={
                      attempt.score / attempt.maxScore >= 0.7
                        ? "success"
                        : "warning"
                    }
                  >
                    {Math.round((attempt.score / attempt.maxScore) * 100)}%
                  </Badge>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="text-center pb-8">
        <div className="editorial-line mb-6" />
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          York University · SOSC 3360 · Canadian Constitutional Politics
        </p>
      </footer>
    </div>
  );
}

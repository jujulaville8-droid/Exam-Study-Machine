"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResults } from "@/components/quiz/QuizResults";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Brain, Play } from "lucide-react";
import { quizQuestions } from "@/data/quiz-questions";
import { testThemes, getQuizQuestionsByTheme, getAdditionalQuizQuestions } from "@/data/themes";
import { shuffleArray } from "@/lib/spaced-repetition";
import { saveQuizAttempt } from "@/lib/storage";
import { cn } from "@/lib/utils";
import type { QuizQuestion as QuizQuestionType } from "@/types";

type Phase = "setup" | "quiz" | "results";

const topicOptions = [
  { key: "all", label: "All Topics" },
  { key: "s1", label: "s.1 Limits" },
  { key: "s2", label: "s.2 Freedoms" },
  { key: "s7", label: "s.7 Life/Liberty" },
  { key: "s8", label: "s.8 Search" },
  { key: "s9-14", label: "s.9–14 Legal" },
  { key: "s15", label: "s.15 Equality" },
  { key: "s25-35", label: "s.25/35" },
  { key: "s33", label: "s.33" },
  { key: "treaties", label: "Treaties" },
  { key: "confederation", label: "Confederation" },
  { key: "repatriation", label: "Repatriation" },
  { key: "bill-of-rights", label: "Bill of Rights" },
  { key: "conventions", label: "Conventions" },
  { key: "hrc", label: "Human Rights" },
  { key: "s24", label: "s.24 Remedies" },
];

export default function QuizPage() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [topic, setTopic] = useState("all");
  const [questionCount, setQuestionCount] = useState(10);
  const [questions, setQuestions] = useState<QuizQuestionType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correct, setCorrect] = useState(0);

  const getPoolForTopic = useCallback((t: string): QuizQuestionType[] => {
    if (t === "all") return quizQuestions;
    if (t === "additional") return getAdditionalQuizQuestions();
    const theme = testThemes.find((th) => th.id === t);
    if (theme) return getQuizQuestionsByTheme(theme.id);
    return quizQuestions.filter((q) => q.sectionId === t);
  }, []);

  const availableCount = useMemo(() => getPoolForTopic(topic).length, [topic, getPoolForTopic]);

  const startQuiz = useCallback(() => {
    const pool = shuffleArray(getPoolForTopic(topic)).slice(0, questionCount);
    setQuestions(pool);
    setCurrentIndex(0);
    setCorrect(0);
    setPhase("quiz");
  }, [topic, questionCount, getPoolForTopic]);

  const handleAnswer = useCallback(
    (isCorrect: boolean) => {
      if (isCorrect) setCorrect((c) => c + 1);
      setTimeout(() => {
        if (currentIndex + 1 >= questions.length) {
          const finalCorrect = isCorrect ? correct + 1 : correct;
          saveQuizAttempt({
            date: new Date().toISOString(),
            totalQuestions: questions.length,
            correctAnswers: finalCorrect,
            topics: [topic],
          });
          setCorrect(finalCorrect);
          setPhase("results");
        } else {
          setCurrentIndex((i) => i + 1);
        }
      }, 500);
    },
    [currentIndex, questions.length, correct, topic]
  );

  if (phase === "results") {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <QuizResults
          correct={correct}
          total={questions.length}
          onRetry={startQuiz}
          onNewQuiz={() => setPhase("setup")}
        />
      </div>
    );
  }

  if (phase === "quiz" && questions[currentIndex]) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-sm tabular-nums text-muted-foreground">
            <span className="text-foreground font-medium">{currentIndex + 1}</span>
            <span className="mx-1">/</span>
            {questions.length}
          </span>
          <Badge variant="success">{correct} correct</Badge>
        </div>
        <ProgressBar value={currentIndex + 1} max={questions.length} className="h-0.5" />
        <AnimatePresence mode="wait">
          <QuizQuestion
            key={questions[currentIndex].id}
            question={questions[currentIndex]}
            onAnswer={handleAnswer}
          />
        </AnimatePresence>
      </div>
    );
  }

  // Setup phase
  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="w-14 h-14 mx-auto rounded-full border border-border flex items-center justify-center">
          <Brain className="w-6 h-6 text-primary" />
        </div>
        <h1 className="font-serif text-4xl italic">Multiple Choice</h1>
        <p className="text-sm text-muted-foreground">
          Test your knowledge across {quizQuestions.length} questions
        </p>
      </motion.div>

      <div className="space-y-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
            Test Themes
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            <button
              onClick={() => setTopic("all")}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all duration-200",
                topic === "all"
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 font-medium"
                  : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
              )}
            >
              All Topics
            </button>
            {testThemes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setTopic(theme.id)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all duration-200",
                  topic === theme.id
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 font-medium"
                    : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
                )}
              >
                {theme.number}. {theme.title.split(" ").slice(0, 2).join(" ")}
              </button>
            ))}
            <button
              onClick={() => setTopic("additional")}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all duration-200",
                topic === "additional"
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 font-medium"
                  : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
              )}
            >
              Additional
            </button>
          </div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
            By Section
          </p>
          <div className="flex flex-wrap gap-1.5">
            {topicOptions.filter(t => t.key !== "all").map((t) => (
              <button
                key={t.key}
                onClick={() => setTopic(t.key)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all duration-200",
                  topic === t.key
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 font-medium"
                    : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
            Questions
          </p>
          <div className="flex gap-2">
            {[5, 10, 15, 20].map((n) => (
              <button
                key={n}
                onClick={() => setQuestionCount(Math.min(n, availableCount))}
                className={cn(
                  "w-14 h-14 rounded-xl text-sm font-serif italic transition-all duration-200",
                  questionCount === n
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                    : "border border-border text-muted-foreground hover:border-primary/30"
                )}
              >
                {n}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground mt-2 tracking-wider">
            {availableCount} available
          </p>
        </div>

        <Button size="lg" onClick={startQuiz} className="w-full mt-4">
          <Play className="w-4 h-4" />
          Begin Quiz
        </Button>
      </div>
    </div>
  );
}

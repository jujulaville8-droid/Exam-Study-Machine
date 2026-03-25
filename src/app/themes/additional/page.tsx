"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { FlashCardDeck } from "@/components/flashcards/FlashCardDeck";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResults } from "@/components/quiz/QuizResults";
import {
  ArrowLeft,
  Archive,
  Layers,
  Brain,
  BookOpen,
  Play,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  getAdditionalFlashcards,
  getAdditionalQuizQuestions,
  getAdditionalCharterSections,
} from "@/data/themes";
import { shuffleArray } from "@/lib/spaced-repetition";
import { saveQuizAttempt } from "@/lib/storage";
import { cn } from "@/lib/utils";
import type { QuizQuestion as QuizQuestionType } from "@/types";

const tabs = [
  { key: "overview", label: "Overview", icon: BookOpen },
  { key: "flashcards", label: "Flashcards", icon: Layers },
  { key: "quiz", label: "Quiz", icon: Brain },
] as const;

type TabKey = (typeof tabs)[number]["key"];
type QuizPhase = "setup" | "quiz" | "results";

export default function AdditionalLearningPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  const flashcards = useMemo(() => getAdditionalFlashcards(), []);
  const allQuizQs = useMemo(() => getAdditionalQuizQuestions(), []);
  const charterSections = useMemo(() => getAdditionalCharterSections(), []);

  // Quiz state
  const [quizPhase, setQuizPhase] = useState<QuizPhase>("setup");
  const [quizQuestionCount, setQuizQuestionCount] = useState(10);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestionType[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizCorrect, setQuizCorrect] = useState(0);

  const startQuiz = useCallback(() => {
    const pool = shuffleArray(allQuizQs).slice(0, quizQuestionCount);
    setQuizQuestions(pool);
    setQuizIndex(0);
    setQuizCorrect(0);
    setQuizPhase("quiz");
  }, [allQuizQs, quizQuestionCount]);

  const handleQuizAnswer = useCallback(
    (isCorrect: boolean) => {
      if (isCorrect) setQuizCorrect((c) => c + 1);
      setTimeout(() => {
        if (quizIndex + 1 >= quizQuestions.length) {
          const finalCorrect = isCorrect ? quizCorrect + 1 : quizCorrect;
          saveQuizAttempt({
            date: new Date().toISOString(),
            totalQuestions: quizQuestions.length,
            correctAnswers: finalCorrect,
            topics: ["additional"],
          });
          setQuizCorrect(finalCorrect);
          setQuizPhase("results");
        } else {
          setQuizIndex((i) => i + 1);
        }
      }, 500);
    },
    [quizIndex, quizQuestions.length, quizCorrect]
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-10">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Link
          href="/themes"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All Themes
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <Archive className="w-6 h-6 text-muted-foreground" />
          <h1 className="font-serif text-3xl md:text-4xl italic">
            Additional Learning
          </h1>
        </div>
        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Topics beyond the 6 test themes — useful for broader constitutional
          understanding but not directly tested on March 30.
        </p>

        <div className="flex gap-3 mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>{flashcards.length} cards</span>
          <span className="text-border">·</span>
          <span>{allQuizQs.length} questions</span>
          <span className="text-border">·</span>
          <span>{charterSections.length} sections</span>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              if (tab.key === "quiz") setQuizPhase("setup");
            }}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-200",
              activeTab === tab.key
                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
            )}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "overview" && (
            <OverviewTab charterSections={charterSections} />
          )}

          {activeTab === "flashcards" && (
            flashcards.length > 0 ? (
              <FlashCardDeck cards={flashcards} category="Additional Learning" />
            ) : (
              <p className="text-sm text-muted-foreground">No additional flashcards.</p>
            )
          )}

          {activeTab === "quiz" && (
            allQuizQs.length === 0 ? (
              <p className="text-sm text-muted-foreground">No additional quiz questions.</p>
            ) : quizPhase === "setup" ? (
              <Card className="max-w-md mx-auto text-center space-y-6">
                <Brain className="w-10 h-10 mx-auto text-primary" />
                <h3 className="font-serif text-xl italic">Additional Quiz</h3>
                <p className="text-sm text-muted-foreground">
                  {allQuizQs.length} questions available
                </p>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Questions
                  </p>
                  <div className="flex justify-center gap-2">
                    {[5, 10, 15, 20].map((n) => (
                      <button
                        key={n}
                        onClick={() => setQuizQuestionCount(n)}
                        disabled={n > allQuizQs.length}
                        className={cn(
                          "w-12 h-12 rounded-xl text-sm font-medium transition-all",
                          quizQuestionCount === n
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "border border-border text-muted-foreground hover:border-primary/30",
                          n > allQuizQs.length && "opacity-40 cursor-not-allowed"
                        )}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
                <Button onClick={startQuiz}>
                  <Play className="w-4 h-4 mr-2" />
                  Start Quiz
                </Button>
              </Card>
            ) : quizPhase === "results" ? (
              <QuizResults
                correct={quizCorrect}
                total={quizQuestions.length}
                onRetry={startQuiz}
                onNewQuiz={() => setQuizPhase("setup")}
              />
            ) : (
              <div className="max-w-2xl mx-auto space-y-6">
                <ProgressBar
                  value={quizIndex + 1}
                  max={quizQuestions.length}
                />
                <QuizQuestion
                  question={quizQuestions[quizIndex]}
                  onAnswer={handleQuizAnswer}
                />
              </div>
            )
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function OverviewTab({
  charterSections,
}: {
  charterSections: ReturnType<typeof getAdditionalCharterSections>;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (charterSections.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">No additional Charter sections.</p>
    );
  }

  return (
    <div className="space-y-4">
      {charterSections.map((cs) => (
        <Card key={cs.id} className="overflow-hidden">
          <button
            onClick={() => setExpandedId(expandedId === cs.id ? null : cs.id)}
            className="w-full text-left flex items-center justify-between"
          >
            <div>
              <Badge variant="outline" className="mb-2">
                {cs.section}
              </Badge>
              <h3 className="font-serif text-lg italic">{cs.title}</h3>
            </div>
            {expandedId === cs.id ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
            )}
          </button>

          {expandedId === cs.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 space-y-4 text-sm"
            >
              <p className="text-muted-foreground leading-relaxed">{cs.summary}</p>

              {cs.keyTests.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">
                    Key Tests
                  </p>
                  <ul className="space-y-2">
                    {cs.keyTests.map((test, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed pl-3 border-l-2 border-primary/20">
                        {test}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {cs.keyCases.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">
                    Key Cases
                  </p>
                  <ul className="space-y-2">
                    {cs.keyCases.map((c, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed pl-3 border-l-2 border-warning/20">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {cs.keyConcepts.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">
                    Key Concepts
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.keyConcepts.map((concept) => (
                      <Badge key={concept} variant="outline">
                        {concept}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </Card>
      ))}
    </div>
  );
}

"use client";

import { useState, useMemo, useCallback } from "react";
import { useParams } from "next/navigation";
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
  BookOpen,
  Layers,
  Brain,
  Scale,
  Play,
  ChevronDown,
  ChevronUp,
  Gavel,
} from "lucide-react";
import {
  testThemes,
  getFlashcardsByTheme,
  getQuizQuestionsByTheme,
  getScenariosByTheme,
  getCharterSectionsByTheme,
  getCaseCardsByTheme,
} from "@/data/themes";
import { shuffleArray } from "@/lib/spaced-repetition";
import { saveQuizAttempt } from "@/lib/storage";
import { cn } from "@/lib/utils";
import type { ThemeId, QuizQuestion as QuizQuestionType } from "@/types";

const tabs = [
  { key: "overview", label: "Overview", icon: BookOpen },
  { key: "cases", label: "Cases", icon: Gavel },
  { key: "flashcards", label: "Flashcards", icon: Layers },
  { key: "quiz", label: "Quiz", icon: Brain },
  { key: "scenarios", label: "Scenarios", icon: Scale },
] as const;

type TabKey = (typeof tabs)[number]["key"];
type QuizPhase = "setup" | "quiz" | "results";

export default function ThemePage() {
  const { themeId } = useParams<{ themeId: string }>();
  const theme = testThemes.find((t) => t.id === themeId);

  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  // Quiz state
  const [quizPhase, setQuizPhase] = useState<QuizPhase>("setup");
  const [quizQuestionCount, setQuizQuestionCount] = useState(10);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestionType[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizCorrect, setQuizCorrect] = useState(0);

  const flashcards = useMemo(
    () => (theme ? getFlashcardsByTheme(theme.id as ThemeId) : []),
    [theme]
  );
  const allQuizQs = useMemo(
    () => (theme ? getQuizQuestionsByTheme(theme.id as ThemeId) : []),
    [theme]
  );
  const scenarios = useMemo(
    () => (theme ? getScenariosByTheme(theme.id as ThemeId) : []),
    [theme]
  );
  const charterSections = useMemo(
    () => (theme ? getCharterSectionsByTheme(theme.id as ThemeId) : []),
    [theme]
  );
  const caseCards = useMemo(
    () => (theme ? getCaseCardsByTheme(theme.id as ThemeId) : []),
    [theme]
  );

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
            topics: [themeId],
          });
          setQuizCorrect(finalCorrect);
          setQuizPhase("results");
        } else {
          setQuizIndex((i) => i + 1);
        }
      }, 500);
    },
    [quizIndex, quizQuestions.length, quizCorrect, themeId]
  );

  if (!theme) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-muted-foreground">Theme not found.</p>
        <Link href="/themes" className="text-primary text-sm mt-4 inline-block">
          Back to Themes
        </Link>
      </div>
    );
  }

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

        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge variant="default" className="mb-3">
              Theme {theme.number}
            </Badge>
            <h1 className="font-serif text-3xl md:text-4xl italic">{theme.title}</h1>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              {theme.description}
            </p>
          </div>
        </div>

        {/* Content counts */}
        <div className="flex gap-3 mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>{caseCards.length} cases</span>
          <span className="text-border">·</span>
          <span>{flashcards.length} cards</span>
          <span className="text-border">·</span>
          <span>{allQuizQs.length} questions</span>
          <span className="text-border">·</span>
          <span>{scenarios.length} scenarios</span>
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
          {activeTab === "cases" && (
            <CasesTab cases={caseCards} />
          )}
          {activeTab === "flashcards" && (
            <FlashcardsTab cards={flashcards} themeName={theme.title} />
          )}
          {activeTab === "quiz" && (
            <QuizTab
              allQuestions={allQuizQs}
              phase={quizPhase}
              questions={quizQuestions}
              questionCount={quizQuestionCount}
              currentIndex={quizIndex}
              correct={quizCorrect}
              onSetQuestionCount={setQuizQuestionCount}
              onStart={startQuiz}
              onAnswer={handleQuizAnswer}
              onNewQuiz={() => setQuizPhase("setup")}
            />
          )}
          {activeTab === "scenarios" && <ScenariosTab scenarios={scenarios} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// Overview Tab
// ============================================================

function OverviewTab({
  charterSections,
}: {
  charterSections: ReturnType<typeof getCharterSectionsByTheme>;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (charterSections.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No Charter sections mapped to this theme.
      </p>
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

              <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
                  Full Text
                </p>
                <p className="text-muted-foreground leading-relaxed italic">
                  &ldquo;{cs.fullText}&rdquo;
                </p>
              </div>

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

// ============================================================
// Cases Tab
// ============================================================

function CasesTab({ cases }: { cases: ReturnType<typeof getCaseCardsByTheme> }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (cases.length === 0) {
    return (
      <div className="text-center py-12">
        <Gavel className="w-8 h-8 mx-auto text-muted-foreground mb-3" />
        <p className="text-sm text-muted-foreground">No cases for this theme yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground mb-4">
        {cases.length} landmark cases relevant to this theme. Click to expand details.
      </p>
      {cases.map((c) => (
        <Card key={c.id} className="overflow-hidden">
          <button
            onClick={() => setExpandedId(expandedId === c.id ? null : c.id)}
            className="w-full text-left flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Gavel className="w-4 h-4 text-warning shrink-0" />
              <h3 className="font-serif text-base italic">{c.front}</h3>
            </div>
            {expandedId === c.id ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
            )}
          </button>

          {expandedId === c.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 pl-7"
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.back}
              </p>
            </motion.div>
          )}
        </Card>
      ))}
    </div>
  );
}

// ============================================================
// Flashcards Tab
// ============================================================

function FlashcardsTab({
  cards,
  themeName,
}: {
  cards: ReturnType<typeof getFlashcardsByTheme>;
  themeName: string;
}) {
  if (cards.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No flashcards for this theme yet.
      </p>
    );
  }

  return <FlashCardDeck cards={cards} category={themeName} />;
}

// ============================================================
// Quiz Tab
// ============================================================

function QuizTab({
  allQuestions,
  phase,
  questions,
  questionCount,
  currentIndex,
  correct,
  onSetQuestionCount,
  onStart,
  onAnswer,
  onNewQuiz,
}: {
  allQuestions: QuizQuestionType[];
  phase: QuizPhase;
  questions: QuizQuestionType[];
  questionCount: number;
  currentIndex: number;
  correct: number;
  onSetQuestionCount: (n: number) => void;
  onStart: () => void;
  onAnswer: (isCorrect: boolean) => void;
  onNewQuiz: () => void;
}) {
  if (allQuestions.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No quiz questions for this theme yet.
      </p>
    );
  }

  if (phase === "setup") {
    return (
      <Card className="max-w-md mx-auto text-center space-y-6">
        <Brain className="w-10 h-10 mx-auto text-primary" />
        <h3 className="font-serif text-xl italic">Theme Quiz</h3>
        <p className="text-sm text-muted-foreground">
          {allQuestions.length} questions available
        </p>

        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Questions
          </p>
          <div className="flex justify-center gap-2">
            {[5, 10, 15, 20].map((n) => (
              <button
                key={n}
                onClick={() => onSetQuestionCount(n)}
                disabled={n > allQuestions.length}
                className={cn(
                  "w-12 h-12 rounded-xl text-sm font-medium transition-all",
                  questionCount === n
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border text-muted-foreground hover:border-primary/30",
                  n > allQuestions.length && "opacity-40 cursor-not-allowed"
                )}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <Button onClick={onStart}>
          <Play className="w-4 h-4 mr-2" />
          Start Quiz
        </Button>
      </Card>
    );
  }

  if (phase === "results") {
    return (
      <QuizResults
        correct={correct}
        total={questions.length}
        onRetry={onStart}
        onNewQuiz={onNewQuiz}
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <ProgressBar
        value={currentIndex + 1}
        max={questions.length}
      />
      <QuizQuestion
        question={questions[currentIndex]}
        onAnswer={onAnswer}
      />
    </div>
  );
}

// ============================================================
// Scenarios Tab
// ============================================================

function ScenariosTab({
  scenarios,
}: {
  scenarios: ReturnType<typeof getScenariosByTheme>;
}) {
  if (scenarios.length === 0) {
    return (
      <div className="text-center py-12">
        <Scale className="w-8 h-8 mx-auto text-muted-foreground mb-3" />
        <p className="text-sm text-muted-foreground">
          No scenarios for this theme yet.
        </p>
      </div>
    );
  }

  const difficultyVariant = (d: string) =>
    d === "beginner" ? "success" : d === "intermediate" ? "warning" : "error";

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {scenarios.map((scenario) => (
        <Link key={scenario.id} href={`/scenarios/${scenario.id}`} className="group block">
          <Card className="h-full">
            <div className="flex items-center justify-between mb-3">
              <Badge variant={difficultyVariant(scenario.difficulty)}>
                {scenario.difficulty}
              </Badge>
              <Badge variant="outline">{scenario.weekReference}</Badge>
            </div>
            <h3 className="font-serif text-lg italic group-hover:text-primary transition-colors mb-2">
              {scenario.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
              {scenario.description}
            </p>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export interface CharterSection {
  id: string;
  section: string;
  title: string;
  summary: string;
  fullText: string;
  keyTests: string[];
  keyCases: string[];
  keyConcepts: string[];
}

export interface Scenario {
  id: string;
  title: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  description: string;
  weekReference: string;
  relevantSections: string[];
  expectedKeywords: GradingKeyword[];
  modelAnswer: string;
}

export interface GradingKeyword {
  term: string;
  category: "section" | "test" | "concept" | "case";
  weight: number;
  sectionId?: string;
}

export interface GradingResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  categoryResults: CategoryResult[];
  matchedKeywords: string[];
  missedKeywords: string[];
  strengths: string[];
  improvements: string[];
}

export interface CategoryResult {
  name: string;
  score: number;
  maxPoints: number;
  details: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sectionId: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: "section" | "test" | "case" | "concept";
  sectionId?: string;
}

export interface FlashcardState extends Flashcard {
  nextReview: number;
  easeFactor: number;
  interval: number;
  repetitions: number;
}

export interface UserProgress {
  scenariosCompleted: ScenarioAttempt[];
  quizResults: QuizAttempt[];
  flashcardsReviewed: string[];
  streakDays: number;
  lastStudyDate: string;
  sectionMastery: Record<string, number>;
}

export interface ScenarioAttempt {
  scenarioId: string;
  date: string;
  score: number;
  maxScore: number;
}

export interface QuizAttempt {
  date: string;
  totalQuestions: number;
  correctAnswers: number;
  topics: string[];
}

import type { TestTheme, ThemeId, Flashcard, QuizQuestion, Scenario, DetailedCase } from "@/types";
import type { CharterSection } from "@/types";
import { detailedCases } from "./detailed-cases";
import { flashcards } from "./flashcards";
import { quizQuestions } from "./quiz-questions";
import { scenarios } from "./scenarios";
import { charterSections } from "./charter-sections";

// ============================================================
// Theme Definitions
// ============================================================

export const testThemes: TestTheme[] = [
  {
    id: "s1-framework",
    number: 1,
    title: "The Section 1 Framework",
    subtitle: "Rights + Limits + Justification",
    description:
      "How the Charter structures rights analysis: why rights are not absolute, how courts evaluate reasonable limits, and the evidentiary expectations placed on governments through the Oakes test.",
    sectionIds: ["s1"],
    scenarioPrefix: "s1-framework",
  },
  {
    id: "freedoms",
    number: 2,
    title: "Fundamental Freedoms & Their Protection",
    subtitle: "Expression, Religion & Context",
    description:
      "How courts interpret key freedoms — why expression is interpreted broadly, how courts move quickly to s.1 justification, and the importance of context when evaluating limits on expressive activity.",
    sectionIds: ["s2", "s2a", "s2b", "s2c", "s2d"],
    scenarioPrefix: "freedoms",
  },
  {
    id: "s33-override",
    number: 3,
    title: "Section 33 (Notwithstanding Clause)",
    subtitle: "Override, Sunset & Accountability",
    description:
      "The role of the override in Canada's constitutional democracy: what legislatures can and cannot override, the five-year sunset, and how s.33 promotes transparency and democratic accountability.",
    sectionIds: ["s33"],
    scenarioPrefix: "s33",
  },
  {
    id: "indigenous",
    number: 4,
    title: "Indigenous Rights in the Constitution",
    subtitle: "s.25, s.35 & Collective Rights",
    description:
      "How Indigenous rights operate alongside the Charter: constitutional recognition of Aboriginal and treaty rights, limits on government infringement, and when the Constitution protects Indigenous decision-making from individual Charter challenges.",
    sectionIds: ["s25", "s35", "s25-35", "treaties"],
    scenarioPrefix: "indigenous",
  },
  {
    id: "equality",
    number: 5,
    title: "Equality and Systemic Disadvantage",
    subtitle: "s.15, Discrimination & Real-World Impact",
    description:
      "How the Charter understands discrimination: distinctions on enumerated or analogous grounds, perpetuation of disadvantage, adverse-effects discrimination, and the importance of social context.",
    sectionIds: ["s15", "s15-2"],
    scenarioPrefix: "equality",
  },
  {
    id: "privacy-police",
    number: 6,
    title: "Privacy and Police Powers",
    subtitle: "Search, Seizure, Detention & Counsel",
    description:
      "How courts analyze state power in police-public encounters: reasonable expectation of privacy, when a person is detained, why social context matters, and how detention triggers the right to counsel.",
    sectionIds: ["s8", "s9", "s9-14", "s10a", "s10b", "s10"],
    scenarioPrefix: "privacy",
  },
];

// ============================================================
// Additional Learning — all sectionIds NOT in any theme
// ============================================================

const allThemeSectionIds = new Set(testThemes.flatMap((t) => t.sectionIds));

export const ADDITIONAL_LEARNING_SECTION_IDS = [
  "s3",
  "s3-5",
  "s6",
  "s7",
  "s11b",
  "s12",
  "s24",
  "s24-1",
  "s24-2",
  "confederation",
  "repatriation",
  "bill-of-rights",
  "conventions",
  "hrc",
];

// ============================================================
// Override map for flashcards without sectionId
// that still belong to a theme
// ============================================================

const CARD_THEME_OVERRIDES: Record<string, ThemeId> = {
  // Royal Proclamation concept → Indigenous
  "conc-13": "indigenous",
  // Dickson v Vuntut Gwitchin → Indigenous (already has sectionId but just in case)
  "case-21": "indigenous",
  // Ford v Quebec → s.33
  "case-15": "s33-override",
  // Bill 21 → s.33
  "case-30": "s33-override",
  // Patriation Reference → additional (no override needed, stays out)
  // Constitutional convention test → additional
  // Persons Case → additional
  // Union Colliery → additional
  // Cunningham → additional
};

// ============================================================
// Helper Functions
// ============================================================

export function getThemeById(themeId: ThemeId): TestTheme | undefined {
  return testThemes.find((t) => t.id === themeId);
}

export function getFlashcardsByTheme(themeId: ThemeId): Flashcard[] {
  const theme = getThemeById(themeId);
  if (!theme) return [];
  const sectionSet = new Set(theme.sectionIds);

  return flashcards.filter((card) => {
    // Check override map first
    if (CARD_THEME_OVERRIDES[card.id] === themeId) return true;
    // Check sectionId membership
    if (card.sectionId && sectionSet.has(card.sectionId)) return true;
    return false;
  });
}

export function getQuizQuestionsByTheme(themeId: ThemeId): QuizQuestion[] {
  const theme = getThemeById(themeId);
  if (!theme) return [];
  const sectionSet = new Set(theme.sectionIds);

  return quizQuestions.filter((q) => sectionSet.has(q.sectionId));
}

export function getScenariosByTheme(themeId: ThemeId): Scenario[] {
  const theme = getThemeById(themeId);
  if (!theme) return [];

  return scenarios.filter((s) => s.id.startsWith(theme.scenarioPrefix));
}

export function getCaseCardsByTheme(themeId: ThemeId): Flashcard[] {
  return getFlashcardsByTheme(themeId).filter((c) => c.category === "case");
}

export function getDetailedCasesByTheme(themeId: ThemeId): DetailedCase[] {
  return detailedCases.filter((c) => c.themeId === themeId);
}

export function getCharterSectionsByTheme(themeId: ThemeId): CharterSection[] {
  const theme = getThemeById(themeId);
  if (!theme) return [];
  const sectionSet = new Set(theme.sectionIds);

  return charterSections.filter((cs) => sectionSet.has(cs.id));
}

// ============================================================
// Additional Learning helpers
// ============================================================

function isInAnyTheme(sectionId: string | undefined, cardId?: string): boolean {
  if (cardId && CARD_THEME_OVERRIDES[cardId]) return true;
  if (!sectionId) return false;
  return allThemeSectionIds.has(sectionId);
}

export function getAdditionalFlashcards(): Flashcard[] {
  return flashcards.filter(
    (card) => !isInAnyTheme(card.sectionId, card.id)
  );
}

export function getAdditionalQuizQuestions(): QuizQuestion[] {
  return quizQuestions.filter((q) => !allThemeSectionIds.has(q.sectionId));
}

export function getAdditionalScenarios(): Scenario[] {
  const themePrefixes = testThemes.map((t) => t.scenarioPrefix);
  return scenarios.filter(
    (s) => !themePrefixes.some((prefix) => s.id.startsWith(prefix))
  );
}

export function getAdditionalCharterSections(): CharterSection[] {
  return charterSections.filter((cs) => !allThemeSectionIds.has(cs.id));
}

// ============================================================
// Content counts
// ============================================================

export function getThemeContentCounts(themeId: ThemeId) {
  return {
    flashcards: getFlashcardsByTheme(themeId).length,
    quizQuestions: getQuizQuestionsByTheme(themeId).length,
    scenarios: getScenariosByTheme(themeId).length,
    charterSections: getCharterSectionsByTheme(themeId).length,
  };
}

export function getAdditionalContentCounts() {
  return {
    flashcards: getAdditionalFlashcards().length,
    quizQuestions: getAdditionalQuizQuestions().length,
    scenarios: getAdditionalScenarios().length,
    charterSections: getAdditionalCharterSections().length,
  };
}

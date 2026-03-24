import type { Scenario, GradingResult, CategoryResult, GradingKeyword } from "@/types";

export function gradeResponse(scenario: Scenario, response: string): GradingResult {
  const text = response.toLowerCase();
  const words = text.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const sectionKeywords = scenario.expectedKeywords.filter((k) => k.category === "section");
  const testKeywords = scenario.expectedKeywords.filter((k) => k.category === "test");
  const conceptKeywords = scenario.expectedKeywords.filter((k) => k.category === "concept");
  const caseKeywords = scenario.expectedKeywords.filter((k) => k.category === "case");

  const matched: string[] = [];
  const missed: string[] = [];

  function checkKeywords(keywords: GradingKeyword[]): { score: number; max: number } {
    let score = 0;
    let max = 0;
    for (const kw of keywords) {
      max += kw.weight;
      const variants = generateVariants(kw.term);
      if (variants.some((v) => text.includes(v.toLowerCase()))) {
        score += kw.weight;
        matched.push(kw.term);
      } else {
        missed.push(kw.term);
      }
    }
    return { score, max };
  }

  // 1. Charter Section Identification (30%)
  const sectionResult = checkKeywords(sectionKeywords);
  const sectionMax = 30;
  const sectionScore = sectionResult.max > 0
    ? Math.round((sectionResult.score / sectionResult.max) * sectionMax)
    : 0;

  // 2. Legal Test Application (25%)
  const testResult = checkKeywords(testKeywords);
  const testMax = 25;
  const testScore = testResult.max > 0
    ? Math.round((testResult.score / testResult.max) * testMax)
    : 0;

  // 3. Key Concept Usage (20%)
  const conceptResult = checkKeywords(conceptKeywords);
  const conceptMax = 20;
  const conceptScore = conceptResult.max > 0
    ? Math.round((conceptResult.score / conceptResult.max) * conceptMax)
    : 0;

  // 4. Critical Engagement (15%)
  const criticalMax = 15;
  const criticalScore = scoreCriticalEngagement(text, wordCount, criticalMax);

  // 5. Case Law References (10%)
  const caseResult = checkKeywords(caseKeywords);
  const caseMax = 10;
  const caseScore = caseResult.max > 0
    ? Math.round((caseResult.score / caseResult.max) * caseMax)
    : 0;

  const totalScore = sectionScore + testScore + conceptScore + criticalScore + caseScore;
  const maxScore = 100;

  const categoryResults: CategoryResult[] = [
    {
      name: "Charter Section Identification",
      score: sectionScore,
      maxPoints: sectionMax,
      details: sectionScore === sectionMax
        ? "Excellent — you correctly identified all relevant Charter sections."
        : `You identified some relevant sections. Look for: ${missed.filter((m) => sectionKeywords.some((k) => k.term === m)).join(", ") || "N/A"}.`,
    },
    {
      name: "Legal Test Application",
      score: testScore,
      maxPoints: testMax,
      details: testScore === testMax
        ? "Strong application of relevant legal tests and their components."
        : `Consider applying: ${missed.filter((m) => testKeywords.some((k) => k.term === m)).join(", ") || "relevant legal tests"}.`,
    },
    {
      name: "Key Concepts",
      score: conceptScore,
      maxPoints: conceptMax,
      details: conceptScore === conceptMax
        ? "You demonstrated strong command of course terminology."
        : `Missing concepts: ${missed.filter((m) => conceptKeywords.some((k) => k.term === m)).join(", ") || "review lecture materials"}.`,
    },
    {
      name: "Critical Engagement",
      score: criticalScore,
      maxPoints: criticalMax,
      details: getCriticalFeedback(wordCount, criticalScore, criticalMax),
    },
    {
      name: "Case Law References",
      score: caseScore,
      maxPoints: caseMax,
      details: caseScore === caseMax
        ? "Good use of relevant case law."
        : `Consider referencing: ${missed.filter((m) => caseKeywords.some((k) => k.term === m)).join(", ") || "relevant case law"}.`,
    },
  ];

  const strengths: string[] = [];
  const improvements: string[] = [];

  if (sectionScore >= sectionMax * 0.7) strengths.push("Strong identification of relevant Charter sections.");
  else improvements.push("Work on identifying the correct Charter section(s) that apply to the scenario.");

  if (testScore >= testMax * 0.7) strengths.push("Good application of legal tests.");
  else improvements.push("Practice applying legal tests (e.g., Oakes test, principles of fundamental justice) to scenarios.");

  if (conceptScore >= conceptMax * 0.7) strengths.push("Effective use of constitutional terminology.");
  else improvements.push("Incorporate more course-specific terms and concepts into your analysis.");

  if (criticalScore >= criticalMax * 0.7) strengths.push("Demonstrates critical thinking with balanced arguments.");
  else improvements.push("Deepen your analysis: consider counterarguments, address both sides, and reach a clear conclusion.");

  if (caseScore >= caseMax * 0.7) strengths.push("Good references to relevant case law.");
  else improvements.push("Support your arguments with references to landmark cases from the course.");

  if (wordCount < 100) improvements.push("Your response is quite short. Aim for 150-300 words for a thorough analysis.");

  return {
    totalScore,
    maxScore,
    percentage: Math.round((totalScore / maxScore) * 100),
    categoryResults,
    matchedKeywords: matched,
    missedKeywords: missed,
    strengths,
    improvements,
  };
}

function generateVariants(term: string): string[] {
  const variants = [term];
  // Handle section references like "s.2(b)" -> ["s.2(b)", "section 2(b)", "s. 2(b)", "s2(b)"]
  const sectionMatch = term.match(/^s\.?\s*(\d+)(.*)$/i);
  if (sectionMatch) {
    const num = sectionMatch[1];
    const sub = sectionMatch[2] || "";
    variants.push(
      `s.${num}${sub}`,
      `s. ${num}${sub}`,
      `s${num}${sub}`,
      `section ${num}${sub}`,
      `sect. ${num}${sub}`,
      `§${num}${sub}`
    );
  }
  // Handle case names with "v" vs "v."
  if (term.toLowerCase().includes(" v ") || term.toLowerCase().includes(" v. ")) {
    variants.push(
      term.replace(/ v\. /gi, " v "),
      term.replace(/ v /gi, " v. ")
    );
  }
  return variants;
}

function scoreCriticalEngagement(text: string, wordCount: number, max: number): number {
  let score = 0;

  // Word count (up to 5 points)
  if (wordCount >= 300) score += 5;
  else if (wordCount >= 200) score += 4;
  else if (wordCount >= 150) score += 3;
  else if (wordCount >= 100) score += 2;
  else if (wordCount >= 50) score += 1;

  // Counterargument markers (up to 5 points)
  const counterMarkers = [
    "however", "on the other hand", "conversely", "alternatively",
    "the government might argue", "the crown may argue", "critics argue",
    "opponents suggest", "one could argue", "it could be argued",
    "while some may", "despite this", "nevertheless", "although",
    "counter to this", "in contrast"
  ];
  const counterCount = counterMarkers.filter((m) => text.includes(m)).length;
  score += Math.min(5, counterCount * 2);

  // Structure markers (up to 5 points)
  const structureMarkers = [
    "therefore", "in conclusion", "ultimately", "as a result",
    "this suggests", "this demonstrates", "first", "second",
    "finally", "to summarize", "in summary", "importantly",
    "significantly", "furthermore", "moreover"
  ];
  const structureCount = structureMarkers.filter((m) => text.includes(m)).length;
  score += Math.min(5, structureCount * 2);

  return Math.min(max, score);
}

function getCriticalFeedback(wordCount: number, score: number, max: number): string {
  if (score >= max * 0.8) {
    return "Strong critical engagement with balanced arguments and clear structure.";
  }
  const tips: string[] = [];
  if (wordCount < 150) tips.push("expand your analysis (aim for 150-300 words)");
  tips.push("include counterarguments (e.g., 'however...', 'the government might argue...')");
  tips.push("use structured conclusions (e.g., 'therefore...', 'in conclusion...')");
  return `To improve: ${tips.join("; ")}.`;
}

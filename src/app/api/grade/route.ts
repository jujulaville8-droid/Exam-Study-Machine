import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export async function POST(req: NextRequest) {
  const { scenario, response, apiKey } = await req.json();

  if (!apiKey) {
    return NextResponse.json({ error: "No API key provided" }, { status: 400 });
  }

  const client = new Anthropic({ apiKey });

  const systemPrompt = `You are a grading assistant for SOSC 3360 (Canadian Constitutional Politics) at York University. Grade student responses to scenario-based questions about the Canadian Charter of Rights and Freedoms.

Grade on these 5 criteria (total 100 points):
1. Charter Section Identification (30 points): Did the student correctly identify which Charter section(s) apply?
2. Legal Test Application (25 points): Did they apply the relevant legal test (e.g., Oakes test for s.1, principles of fundamental justice for s.7)?
3. Key Concept Usage (20 points): Did they use relevant constitutional terminology and course concepts?
4. Critical Engagement (15 points): Did they provide balanced analysis with counterarguments, structured reasoning, and a conclusion?
5. Case Law References (10 points): Did they reference relevant landmark cases?

Return your response as valid JSON with this exact structure:
{
  "totalScore": <number>,
  "maxScore": 100,
  "percentage": <number>,
  "categoryResults": [
    { "name": "Charter Section Identification", "score": <number>, "maxPoints": 30, "details": "<feedback>" },
    { "name": "Legal Test Application", "score": <number>, "maxPoints": 25, "details": "<feedback>" },
    { "name": "Key Concepts", "score": <number>, "maxPoints": 20, "details": "<feedback>" },
    { "name": "Critical Engagement", "score": <number>, "maxPoints": 15, "details": "<feedback>" },
    { "name": "Case Law References", "score": <number>, "maxPoints": 10, "details": "<feedback>" }
  ],
  "matchedKeywords": ["<terms the student correctly used>"],
  "missedKeywords": ["<important terms they should have included>"],
  "strengths": ["<what they did well>"],
  "improvements": ["<specific suggestions for improvement>"]
}`;

  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2000,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: `SCENARIO:\n${scenario.title}\n${scenario.description}\n\nRelevant Charter sections: ${scenario.relevantSections.join(", ")}\n\nSTUDENT RESPONSE:\n${response}\n\nPlease grade this response and return JSON only.`,
        },
      ],
    });

    const text = message.content[0].type === "text" ? message.content[0].text : "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
    }

    const result = JSON.parse(jsonMatch[0]);
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "AI grading failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

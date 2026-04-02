import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export async function detectIndustry(idea: string): Promise<string> {

  const completion = await groq.chat.completions.create({

    model: "llama-3.3-70b-versatile",

    messages: [
      {
        role: "system",
        content: `
You are a startup classifier.

Return ONLY one industry name.

Examples:
AI doctor app → Healthcare
Food delivery app → Food
Electric vehicle company → Automobile
Online clothing store → Fashion
Laptop brand → Electronics

Return only the industry word.
`
      },
      {
        role: "user",
        content: idea
      }
    ],

    temperature: 0,
    max_tokens: 10
  });

  return completion.choices[0].message.content?.trim() || "technology";
}
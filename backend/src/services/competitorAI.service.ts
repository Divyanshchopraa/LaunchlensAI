import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export async function detectCompetitors(idea: string): Promise<string[]> {

  const completion = await groq.chat.completions.create({

    model: "llama-3.3-70b-versatile",

    messages: [
      {
        role: "system",
        content: `
You are a startup market analyst.

Given a startup idea, return 3 real companies that are direct competitors.

Return ONLY JSON.

Example:

Idea: Laptop factory

{
 "competitors": ["Dell", "HP", "Lenovo"]
}
`
      },
      {
        role: "user",
        content: idea
      }
    ],

    temperature: 0.2,
    max_tokens: 100

  });

  const text = completion.choices[0].message.content || "";

  try {
    const parsed = JSON.parse(text);
    return parsed.competitors || [];
  } catch {
    return [];
  }
}
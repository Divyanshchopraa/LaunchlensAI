import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export async function getCompetitors(idea: string, location: string) {

  try {

    const completion = await groq.chat.completions.create({

      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content: `
You are a market research expert.

Given a startup idea and a city, return the top 3 real competitors located in that city.

Return ONLY JSON in this format:

[
 {
  "name": "",
  "rating": number,
  "area": ""
 }
]

Rules:
- Competitors must exist in the given city
- Rating should be realistic (3.5 - 4.8)
- Area should be a real neighborhood or sector in that city
`
        },
        {
          role: "user",
          content: `
Idea: ${idea}
Location: ${location}
`
        }
      ],

      temperature: 0.2,
      max_tokens: 200
    });

    const text = completion.choices[0].message.content || "[]";

    return JSON.parse(text);

  } catch (error) {

    console.log("Competitor AI failed:", error);

    return [];
  }
}
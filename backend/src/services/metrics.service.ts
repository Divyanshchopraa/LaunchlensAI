import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export async function generateGraphs(idea: string) {

  try {

    const completion = await groq.chat.completions.create({

      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content: `
You are a startup market analyst.

Based on the startup idea, estimate realistic market metrics.

Return ONLY JSON in this format:

{
 "market_score": number,
 "industry_growth": number,
 "competition_level": number,
 "success_probability": number,
 "market_trend":[
   {"year":2020,"value":number},
   {"year":2021,"value":number},
   {"year":2022,"value":number},
   {"year":2023,"value":number},
   {"year":2024,"value":number}
 ]
}

Values should be between 0 and 100.
`
        },

        {
          role: "user",
          content: idea
        }

      ],

      temperature: 0.3,
      max_tokens: 400
    });

    const text = completion.choices[0].message.content || "{}";

    return JSON.parse(text);

  } catch (error) {

    console.log("Graph generation failed:", error);

    return {
      market_score: 70,
      industry_growth: 65,
      competition_level: 60,
      success_probability: 68,
      market_trend: [
        { year: 2020, value: 40 },
        { year: 2021, value: 50 },
        { year: 2022, value: 58 },
        { year: 2023, value: 66 },
        { year: 2024, value: 72 }
      ]
    };
  }
}
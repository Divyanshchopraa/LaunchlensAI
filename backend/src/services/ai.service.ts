import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export async function generateStartupReport(prompt: string) {

  const completion = await groq.chat.completions.create({

    model: "llama-3.3-70b-versatile",

    messages: [
      {
        role: "system",
        content: `
You are a startup analyst.

Return ONLY JSON.

{
 "swot":{
  "strength":"",
  "weakness":"",
  "opportunity":"",
  "threat":""
 },

 "risk":[
   "",
   ""
 ],

 "roadmap":"",

 "pitch":""
}
`
      },

      {
        role: "user",
        content: prompt
      }

    ],

    temperature: 0.2,
    max_tokens: 900

  });

  return completion.choices[0].message.content;

}   

export async function askAICofounder(message: string) {

  const completion = await groq.chat.completions.create({

    model: "llama-3.3-70b-versatile",

    messages: [
      {
        role: "system",
        content: `
You are LaunchLens AI Cofounder.

You help startup founders with:

• validating startup ideas
• marketing strategies
• pricing models
• building MVP
• finding first customers
• competitor analysis

Give short practical advice in 3-5 sentences.
`
      },

      {
        role: "user",
        content: message
      }

    ],

    temperature: 0.6,
    max_tokens: 500

  });

  return completion.choices[0].message.content;
}
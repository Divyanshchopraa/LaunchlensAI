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
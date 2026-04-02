import { Request, Response } from "express";
import { success, error } from "../../core/response";

import { generateStartupReport } from "../../services/ai.service";
import { getCompetitors } from "../../services/competitor.service";
import { generateGraphs } from "../../services/metrics.service";
import { extractJSON } from "../../utils/aiParser";
import { detectIndustry } from "../../services/industry.service";
;
export const analyzeBusiness = async (req: Request, res: Response) => {

  try {

    let { idea, location, industry,budget,stage,timeline } = req.body;
// auto detect industry if not provided
if (!industry) {
  industry = await detectIndustry(idea);
}
    // validate required fields
    if (!idea || !location) {
      return res.status(400).json({
        success: false,
        message: "Idea and location are required"
      });
    }

    // generate dashboard graphs
    const graphs = await generateGraphs(idea);

    // fetch competitors
    let competitors: any[] = [];

    try {
   competitors = await getCompetitors(idea, location);
    } catch (err) {
      console.log("Competitor fetch failed:", err);
      competitors = [];
    }

    // fallback competitors if API fails
    if (!competitors || competitors.length === 0) {

      const fallback: Record<string, string[]> = {
        coffee: ["Starbucks", "Cafe Coffee Day", "Blue Tokai"],
        cafe: ["Starbucks", "Cafe Coffee Day", "Blue Tokai"],
        gym: ["Cult Fit", "Gold's Gym", "Anytime Fitness"],
        electronics: ["Apple", "Samsung", "Sony"],
        automobile: ["Tesla", "Toyota", "BMW"],
        clothing: ["Zara", "H&M", "Uniqlo"],
        healthcare: ["Practo", "Apollo Hospitals", "1mg"]
      };

      const key = industry.toLowerCase();

      competitors = fallback[key] || ["Local Competitor 1", "Local Competitor 2", "Local Competitor 3"];
    }

    const prompt = `
Startup Idea: ${idea}
Location: ${location}
Industry: ${industry}
Budget: ${budget}
Stage: ${stage}
Timeline: ${timeline}

Top Competitors Near This Location:
${competitors.join(", ")}

Analyze the startup idea considering the budget, stage, and timeline.

Return ONLY JSON:

{
 "swot": {
   "strength": "",
   "weakness": "",
   "opportunity": "",
   "threat": ""
 },
 "risk": [],
 "roadmap": "",
 "pitch": ""
}
`;

    const aiResponse = await generateStartupReport(prompt);

    const aiData = extractJSON(aiResponse || "");

    return success(res, {
      graphs,
      competitors,
      swot: aiData?.swot || {},
      risk: aiData?.risk || [],
      roadmap: aiData?.roadmap || "",
      pitch: aiData?.pitch || ""
    });

  } catch (err: any) {

    console.error("Startup analysis error:", err);

    return error(res, "Startup analysis failed");

  }

};
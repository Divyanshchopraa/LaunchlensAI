import { z } from "zod";

export const businessSchema = z.object({
  idea: z.string().min(15).max(500),
  location: z.string().min(2),
  budget: z.string(),
  industry: z.string(),
  stage: z.string(),
  timeline: z.string()
});


export interface StartupFormData {
  idea: string;
  location: string;
  budget: string;
  industry: string;
  stage: string;
  timeline: string;
}

export interface GraphsData {
  market_score: number;
  industry_growth: number;
  competition_level: number;
  success_probability: number;
}

export interface SwotData {
  strength: string;
  weakness: string;
  opportunity: string;
  threat: string;
}

export interface Competitor {
  name: string;
  rating: number;
  area: string;
}

export interface StartupAnalysisResponse {
  graphs: GraphsData;
  competitors: Competitor[];
  swot: SwotData;
  risk: string[];
  roadmap: string;
  pitch: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// Adjust base URL as needed (e.g. from env)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function analyzeStartup(formData: StartupFormData): Promise<ApiResponse<StartupAnalysisResponse>> {
  const response = await fetch(`${API_BASE_URL}/analyze-startup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result as ApiResponse<StartupAnalysisResponse>;
}

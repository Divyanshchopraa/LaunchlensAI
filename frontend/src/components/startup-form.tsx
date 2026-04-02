"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { analyzeStartup, StartupFormData } from "@/lib/api";

const INDUSTRIES = [
  "Healthcare",
  "Fintech",
  "E-commerce",
  "Education",
  "SaaS",
  "AI / Machine Learning",
  "Real Estate",
  "Food & Beverage",
  "Other"
];

const STAGES = [
  "Idea",
  "MVP",
  "Early Startup",
  "Scaling"
];

const TIMELINES = [
  "3 months",
  "6 months",
  "1 year",
  "2 years"
];

export default function StartupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<StartupFormData>({
    idea: "",
    location: "",
    budget: "",
    industry: "Healthcare", // default
    stage: "Idea",          // default
    timeline: "6 months"    // default
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!formData.idea.trim() || !formData.location.trim() || !formData.budget.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    try {
      const result = await analyzeStartup(formData);
      if (result.success) {
        // Store result in sessionStorage for the results page to show
        sessionStorage.setItem("launchlens_analysis", JSON.stringify(result.data));
        router.push("/results");
      } else {
        setError(result.message || "Failed to analyze startup.");
        setLoading(false);
      }
    } catch (err: any) {
      console.error(err);
      setError("An error occurred while calling the API. Ensure the backend is running.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-background rounded-2xl border shadow-sm overflow-hidden">
      <div className="p-8 border-b bg-muted/10">
        <h2 className="text-2xl font-bold text-foreground">Analyze Your Startup</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Tell us about your idea and we'll generate comprehensive market insights.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {error && (
          <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 text-sm">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Startup Idea *
          </label>
          <textarea
            name="idea"
            value={formData.idea}
            onChange={handleChange}
            placeholder="Enter Your Idea"
            className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            required
            disabled={loading}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter Your Location"
              className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Budget (INR) *</label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Enter Your Budget"
              className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Industry</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={loading}
            >
              {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Stage</label>
            <select
              name="stage"
              value={formData.stage}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={loading}
            >
              {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Timeline</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={loading}
            >
              {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-sm font-medium text-white shadow transition-all hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing with AI...
            </>
          ) : (
            "Analyze Startup"
          )}
        </button>
      </form>
    </div>
  );
}

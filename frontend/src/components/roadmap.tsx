import { CheckCircle2 } from "lucide-react";

export default function ExecutionRoadmap({ roadmap }: { roadmap: string }) {
  // Parse the roadmap string into steps, or use fallback steps if the string is continuous text
  const lines = roadmap.split("\n").map(s => s.trim()).filter(s => s.length > 0);
  
  // If we have at least 3 distinct lines, use them as steps. Otherwise use default steps and show text above.
  const isList = lines.length >= 3;
  const steps = isList ? lines : [
    "Market Research & Validation",
    "Build Minimum Viable Product (MVP)",
    "Acquire First Users & Iterate",
    "Raise Seed Funding",
    "Scale Operations & Marketing"
  ];

  return (
    <div className="bg-background border rounded-2xl p-6 shadow-sm">
      {!isList && (
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {roadmap}
        </p>
      )}
      
      <div className="relative border-l-2 border-indigo-100 ml-3 md:ml-4 space-y-8 mt-2">
        {steps.map((step, idx) => (
          <div key={idx} className="relative pl-6">
            {/* Timeline icon */}
            <div className="absolute -left-[17px] top-0.5 bg-background p-1">
              <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            
            {/* Content */}
            <div className="bg-muted/30 border border-muted p-4 rounded-xl shadow-sm">
              <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-1 block">
                Phase {idx + 1}
              </span>
              <p className="text-sm font-medium text-foreground">{step.replace(/^\d+[\.\)\-]\s*/, '')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

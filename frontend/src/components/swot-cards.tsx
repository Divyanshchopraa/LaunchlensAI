import { SwotData } from "@/lib/api";
import { Dumbbell, TriangleAlert, Lightbulb, Zap } from "lucide-react";

export default function SwotCards({ data }: { data: SwotData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Strength */}
      <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-6 transition-all hover:shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
            <Dumbbell className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-emerald-900">Strengths</h4>
        </div>
        <p className="text-emerald-800/80 text-sm leading-relaxed">{data.strength}</p>
      </div>
      
      {/* Weakness */}
      <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-6 transition-all hover:shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
            <TriangleAlert className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-rose-900">Weaknesses</h4>
        </div>
        <p className="text-rose-800/80 text-sm leading-relaxed">{data.weakness}</p>
      </div>

      {/* Opportunity */}
      <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-6 transition-all hover:shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
            <Lightbulb className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-indigo-900">Opportunities</h4>
        </div>
        <p className="text-indigo-800/80 text-sm leading-relaxed">{data.opportunity}</p>
      </div>

      {/* Threat */}
      <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-6 transition-all hover:shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-amber-900">Threats</h4>
        </div>
        <p className="text-amber-800/80 text-sm leading-relaxed">{data.threat}</p>
      </div>
    </div>
  );
}

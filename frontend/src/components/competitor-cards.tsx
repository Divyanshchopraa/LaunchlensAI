import { Building2, Star, MapPin } from "lucide-react";

type Competitor = {
  name: string;
  rating: number;
  area: string;
};

export default function CompetitorCards({ competitors }: { competitors: Competitor[] }) {
  if (!competitors || competitors.length === 0) {
    return (
      <div className="text-muted-foreground text-sm">
        No significant competitors identified.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {competitors.map((comp, i) => (
        <div
          key={i}
          className="p-4 bg-background border rounded-lg shadow-sm hover:border-indigo-200 transition-colors"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
              <Building2 className="w-5 h-5" />
            </div>

            <h4 className="font-semibold text-foreground">{comp.name}</h4>
          </div>

          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            {comp.rating}
          </div>

          <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4" />
            {comp.area}
          </div>
        </div>
      ))}
    </div>
  );
}
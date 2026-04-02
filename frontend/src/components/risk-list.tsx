import { ShieldAlert } from "lucide-react";

export default function RiskList({ risks }: { risks: string[] }) {
  if (!risks || risks.length === 0) {
    return <div className="text-muted-foreground text-sm p-4 border rounded-lg">No major risks identified.</div>;
  }

  return (
    <div className="space-y-3">
      {risks.map((risk, i) => (
        <div key={i} className="flex items-start gap-3 p-4 border rounded-lg bg-background hover:bg-muted/20 transition-colors">
          <div className="mt-0.5 text-rose-500 bg-rose-50 p-1.5 rounded-md">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">{risk}</p>
        </div>
      ))}
    </div>
  );
}

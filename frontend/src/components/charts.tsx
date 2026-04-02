"use client";

import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { GraphsData } from "@/lib/api";

interface ChartsProps {
  data: GraphsData;
}

export default function Charts({ data }: ChartsProps) {
  const radarData = useMemo(() => [
    { subject: "Market", A: data.market_score, fullMark: 100 },
    { subject: "Growth", A: data.industry_growth, fullMark: 100 },
    { subject: "Competition", A: data.competition_level, fullMark: 100 },
    { subject: "Success", A: data.success_probability, fullMark: 100 },
  ], [data]);

  const barData = useMemo(() => [
    { name: "Market Score", value: data.market_score, fill: "#4F46E5" },
    { name: "Industry Growth", value: data.industry_growth, fill: "#7C3AED" },
    { name: "Competition Level", value: data.competition_level, fill: "#E11D48" },
    { name: "Success Rate", value: data.success_probability, fill: "#10B981" },
  ], [data]);

  // Generate synthetic 5-year trend data based on market score
  const trendData = useMemo(() => {
    const base = data.market_score;
    return [
      { year: "2020", trend: Math.max(10, base - 30) },
      { year: "2021", trend: Math.max(15, base - 20) },
      { year: "2022", trend: Math.max(25, base - 10) },
      { year: "2023", trend: Math.max(30, base - 5) },
      { year: "2024", trend: base },
    ];
  }, [data]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
      {/* Radar Chart */}
      <div className="bg-background border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="font-bold text-lg mb-6 text-foreground">Market Feasibility</h3>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
              <PolarGrid stroke="#E5E7EB" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 500 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Score"
                dataKey="A"
                stroke="#6366F1"
                fill="#818CF8"
                fillOpacity={0.5}
              />
              <Tooltip
                contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-background border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="font-bold text-lg mb-6 text-foreground">Core Metrics Breakdown</h3>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#6B7280" }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#6B7280" }} tickLine={false} axisLine={false} />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 5 Year Trend Line Chart */}
      <div className="bg-background border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="font-bold text-lg mb-6 text-foreground">5-Year Trend Estimate</h3>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#6B7280" }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#6B7280" }} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
              />
              <Line 
                type="monotone" 
                dataKey="trend" 
                stroke="#8B5CF6" 
                strokeWidth={3} 
                dot={{ r: 4, fill: "#8B5CF6", strokeWidth: 2, stroke: "#fff" }} 
                activeDot={{ r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

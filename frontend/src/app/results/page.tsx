"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Copy, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { StartupAnalysisResponse } from "@/lib/api";

import Charts from "@/components/charts";
import CompetitorCards from "@/components/competitor-cards";
import SwotCards from "@/components/swot-cards";
import RiskList from "@/components/risk-list";
import ExecutionRoadmap from "@/components/roadmap";

export default function ResultsPage() {
  const router = useRouter();
  const [data, setData] = useState<StartupAnalysisResponse | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("launchlens_analysis");
    if (!stored) {
      router.push("/analyze");
      return;
    }
    try {
      setData(JSON.parse(stored));
    } catch (e) {
      router.push("/analyze");
    }
  }, [router]);

  const copyToClipboard = () => {
    if (data?.pitch) {
      navigator.clipboard.writeText(data.pitch);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!data) return (
    <div className="flex h-screen items-center justify-center bg-muted/20">
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-12 h-12 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin mb-4"></div>
        <p className="text-muted-foreground font-medium">Loading Dashboard...</p>
      </div>
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              Analysis Dashboard
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl text-lg">
              Comprehensive breakdown of your startup's viability, market landscape, and execution path.
            </p>
          </div>
          <Link href="/experts" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors shadow-lg hover:shadow-xl w-fit">
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-10"
        >
          {/* Section: Market Analysis */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500"></div>
              <h2 className="text-2xl font-bold">Market Analysis</h2>
            </div>
            <Charts data={data.graphs} />
          </motion.section>

          {/* Grid Layout for SWOT and Pitch/Risks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Split: SWOT & Competitors */}
            <div className="lg:col-span-2 space-y-10">
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500"></div>
                  <h2 className="text-2xl font-bold">SWOT Assessment</h2>
                </div>
                <SwotCards data={data.swot} />
              </motion.section>

              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500"></div>
                  <h2 className="text-2xl font-bold">Competitive Landscape</h2>
                </div>
                <CompetitorCards competitors={data.competitors} />
              </motion.section>
              
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500"></div>
                  <h2 className="text-2xl font-bold">Execution Roadmap</h2>
                </div>
                <ExecutionRoadmap roadmap={data.roadmap} />
              </motion.section>
            </div>

            {/* Split: Pitch & Risks */}
            <div className="space-y-10">
              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500"></div>
                  <h2 className="text-2xl font-bold">Elevator Pitch</h2>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                  <div className="relative z-10">
                    <p className="text-indigo-100/90 text-lg leading-relaxed italic mb-8 font-medium">
                      "{data.pitch}"
                    </p>
                    <button 
                      onClick={copyToClipboard}
                      className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition-all font-semibold backdrop-blur-sm border border-white/10"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      {copied ? "Copied to Clipboard" : "Copy Pitch"}
                    </button>
                  </div>
                </div>
              </motion.section>

              <motion.section variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500"></div>
                  <h2 className="text-2xl font-bold">Key Risks</h2>
                </div>
                <div className="bg-background border rounded-2xl p-6 shadow-sm">
                  <RiskList risks={data.risk} />
                </div>
              </motion.section>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Award, RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";

interface QuizResultProps {
  score: number;
  total: number;
  onRetake: () => void;
}

export function QuizResult({ score, total, onRetake }: QuizResultProps) {
  let title = "";
  let iconColor = "text-muted-foreground";
  let bgGradient = "from-muted/50 to-muted/10";
  
  if (score === 3) {
    title = "Startup Genius 🚀";
    iconColor = "text-amber-500";
    bgGradient = "from-amber-500/20 to-amber-500/5";
  } else if (score === 2) {
    title = "Great Founder Potential 💡";
    iconColor = "text-indigo-500";
    bgGradient = "from-indigo-500/20 to-indigo-500/5";
  } else if (score === 1) {
    title = "Keep Learning 📚";
    iconColor = "text-blue-500";
    bgGradient = "from-blue-500/20 to-blue-500/5";
  } else {
    title = "Time to study startups 😄";
    iconColor = "text-slate-500";
    bgGradient = "from-slate-500/20 to-slate-500/5";
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="bg-background rounded-3xl overflow-hidden border shadow-xl w-full max-w-lg mx-auto"
    >
      <div className={`pt-12 pb-8 flex flex-col items-center bg-gradient-to-br ${bgGradient}`}>
        <div className={`p-4 rounded-full bg-background border shadow-sm mb-6 ${iconColor}`}>
          <Award className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-bold mb-2 tracking-tight text-center px-4">
          Your Score: {score} / {total}
        </h2>
        <p className="text-xl font-medium text-muted-foreground">{title}</p>
      </div>
      
      <div className="p-8 flex flex-col gap-4">
        <button
          onClick={onRetake}
          className="flex items-center justify-center w-full py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition-all shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Retake Quiz
        </button>
        <Link
          href="/"
          className="flex items-center justify-center w-full py-3.5 rounded-xl border bg-background text-foreground font-semibold text-lg hover:bg-accent/50 transition-all"
        >
          Back to Home
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </motion.div>
  );
}

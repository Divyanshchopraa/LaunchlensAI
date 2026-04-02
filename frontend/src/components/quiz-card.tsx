"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, XCircle } from "lucide-react";
import { useState } from "react";

export interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface QuizCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedOption: string) => void;
}

export function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuizCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleClick = (option: string) => {
    if (showResult) return;

    setSelected(option);
    setShowResult(true);

    onAnswer(option);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-background rounded-2xl p-6 md:p-8 border shadow-sm w-full max-w-2xl mx-auto"
    >
      {/* Question header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
          Question {questionNumber} of {totalQuestions}
        </span>
      </div>

      {/* Question */}
      <h2 className="text-2xl md:text-3xl font-bold cursor-pointer tracking-tight mb-8 text-balance">
        {question.question}
      </h2>

      {/* Options */}
      <div className="grid gap-3">
        {question.options.map((option, index) => {
          const isSelected = selected === option;
          const isCorrect = option === question.answer;

          let styles =
            "border bg-card text-base text-foreground hover:border-indigo-500 hover:bg-indigo-50/50";

          let icon = <Circle className="w-5 h-5" />;

          if (showResult) {
            if (isCorrect) {
              styles = "border-green-400 bg-green-50 text-green-700";
              icon = <CheckCircle2 className="w-5 h-5 text-green-600" />;
            } else if (isSelected && !isCorrect) {
              styles = "border-red-400 bg-red-50 text-red-700";
              icon = <XCircle className="w-5 h-5 text-red-600" />;
            } else {
              styles = "border-gray-200 bg-gray-50 text-gray-400";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleClick(option)}
              disabled={showResult}
              className={`group flex items-center w-full p-4 rounded-xl border transition-all duration-200 ${styles}`}
            >
              <div className="mr-4 transition-colors">{icon}</div>
              <span className="flex-1">{option}</span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
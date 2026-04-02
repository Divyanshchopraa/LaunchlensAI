"use client";

import { useState, useEffect } from "react";
import { QuizCard, Question } from "@/components/quiz-card";
import { QuizResult } from "@/components/quiz-result";
import { AnimatePresence } from "framer-motion";

interface QuizClientProps {
  questionsBank: Question[];
}

export function QuizClient({ questionsBank }: QuizClientProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Initialize quiz with 3 random questions
  const initializeQuiz = () => {
    const shuffled = [...questionsBank].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    setQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  useEffect(() => {
    initializeQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswer = (selectedOption: string) => {
    const currentQuestion = questions[currentIndex];
    
    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (questions.length === 0) {
    return null; // Loading state or similar
  }

  return (
    <div className="w-full px-4">
      <AnimatePresence mode="wait">
        {!isFinished ? (
          <QuizCard
            key={currentIndex}
            question={questions[currentIndex]}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        ) : (
          <QuizResult
            key="result"
            score={score}
            total={questions.length}
            onRetake={initializeQuiz}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

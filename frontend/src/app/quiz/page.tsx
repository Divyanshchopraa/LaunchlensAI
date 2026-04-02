import Header from "@/components/header";
import Footer from "@/components/footer";
import { QuizClient } from "./quiz-client";

const questionsBank = [
  {
    question: "What is an MVP in startups?",
    options: [
      "A Minimum Viable Product",
      "A Marketing Value Plan",
      "A Major Venture Pitch",
      "A Monetization Validation Program"
    ],
    answer: "A Minimum Viable Product"
  },
  {
    question: "What is the main goal of a startup?",
    options: [
      "Scale quickly",
      "Open many offices",
      "Hire many employees",
      "Spend investment money"
    ],
    answer: "Scale quickly"
  },
  {
    question: "What does bootstrapping mean?",
    options: [
      "Self funding the startup",
      "Hiring investors",
      "Selling company shares",
      "Taking a bank loan"
    ],
    answer: "Self funding the startup"
  },
  {
    question: "What is product-market fit?",
    options: [
      "When customers strongly want your product",
      "When product looks good",
      "When startup gets funding",
      "When ads perform well"
    ],
    answer: "When customers strongly want your product"
  },
  {
    question: "Which metric shows how many users leave your product?",
    options: [
      "Churn rate",
      "Growth rate",
      "Retention rate",
      "Acquisition rate"
    ],
    answer: "Churn rate"
  },
  {
    question: "What does a pivot mean in startup terms?",
    options: [
      "Changing business strategy",
      "Hiring new employees",
      "Launching marketing campaign",
      "Selling the company"
    ],
    answer: "Changing business strategy"
  },
  {
    question: "What is a startup runway?",
    options: [
      "How long money will last",
      "Time to launch product",
      "Time to hire employees",
      "Time to get investors"
    ],
    answer: "How long money will last"
  },
  {
    question: "What does CAC mean?",
    options: [
      "Customer Acquisition Cost",
      "Company Asset Capital",
      "Customer Activity Chart",
      "Capital Allocation Control"
    ],
    answer: "Customer Acquisition Cost"
  },
  {
    question: "What does traction mean for a startup?",
    options: [
      "User growth and market validation",
      "Social media followers",
      "Website design",
      "Office size"
    ],
    answer: "User growth and market validation"
  },
  {
    question: "Which stage comes first?",
    options: [
      "Idea stage",
      "Series A",
      "IPO",
      "Acquisition"
    ],
    answer: "Idea stage"
  }
];

export default function QuizPage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4 py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/50 via-background to-background -z-10" />
        
        <div className="w-full max-w-4xl mx-auto space-y-8 text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-800 to-violet-900">
            Startup Fun Quiz
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Test your startup knowledge! Answer 3 random questions and see if you have what it takes.
          </p>
        </div>

        <div className="w-full">
          <QuizClient questionsBank={questionsBank} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

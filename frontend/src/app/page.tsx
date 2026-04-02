import Link from "next/link";
import { ArrowRight, BarChart3, Target, ShieldAlert, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-24 md:py-32 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-background to-background -z-10" />
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-indigo-100/50 text-indigo-800 mb-6 shadow-sm group">
          <Sparkles className="w-4 h-4 mr-2 text-indigo-500 animate-pulse" />
          <span>Create and Validate</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl text-balance mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-800 to-violet-900">
          Validate Your Startup Idea With AI
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl text-balance leading-relaxed">
          Get instant market graphs, competitor analysis, SWOT breakdowns, and an execution roadmap. Don't build blindly—analyze first.
        </p>
        <div className="flex flex-wrap flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/analyze"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-medium text-white shadow transition-all hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5"
          >
            Analyze My Idea
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href="/experts"
            className="inline-flex items-center justify-center rounded-lg border bg-background px-8 py-3.5 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5"
          >
            Talk to Experts
          </Link>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center rounded-lg border border-indigo-200 bg-indigo-50/50 text-indigo-700 px-8 py-3.5 text-sm font-medium shadow-sm transition-all hover:bg-indigo-100 hover:shadow-md hover:-translate-y-0.5"
          >
            Take Startup Quiz
            <Sparkles className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to launch</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg text-balance">
              Our advanced AI processes thousands of data points to give you an unfair advantage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-2xl p-8 border shadow-sm transition-all hover:shadow-md hover:border-indigo-200">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
              <p className="text-muted-foreground text-balance">Get detailed graphs on market score, industry growth, and success probability.</p>
            </div>
            <div className="bg-background rounded-2xl p-8 border shadow-sm transition-all hover:shadow-md hover:border-violet-200">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Competitor Deep-dive</h3>
              <p className="text-muted-foreground text-balance">Instantly identify your main competitors and discover gaps in the market.</p>
            </div>
            <div className="bg-background rounded-2xl p-8 border shadow-sm transition-all hover:shadow-md hover:border-rose-200">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Assessment</h3>
              <p className="text-muted-foreground text-balance">Uncover hidden threats and weaknesses before you spend your first dollar.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dashboard Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Professional Insights</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-12">
            A sneak peek at the clean, intuitive dashboard that awaits your idea.
          </p>
          <div className="max-w-5xl mx-auto rounded-xl border bg-muted/20 p-2 md:p-4 shadow-2xl overflow-hidden ring-1 ring-inset ring-gray-900/10">
            <div className="rounded-lg bg-background border shadow-sm aspect-video flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-violet-50/50" />
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <BarChart3 className="w-16 h-16 text-indigo-300" />
                <span className="text-indigo-400 font-medium">Dashboard Preview Area</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

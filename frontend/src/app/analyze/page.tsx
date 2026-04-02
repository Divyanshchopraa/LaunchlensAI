import StartupForm from "@/components/startup-form";

export const metadata = {
  title: "Analyze Idea | LaunchLens",
};

export default function AnalyzePage() {
  return (
    <div className="flex-1 bg-muted/20 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Input Your Startup Details
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Provide the necessary constraints and let our AI agents analyze the feasibility, generate market mappings, and build a cohesive roadmap.
          </p>
        </div>
        <StartupForm />
      </div>
    </div>
  );
}

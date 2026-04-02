import Link from "next/link";
import { Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40 text-muted-foreground py-12 shrink-0">
      <div className="container mx-auto px-4 md:flex items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 shadow-sm">
            <Rocket className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-foreground">LaunchLens</span>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} LaunchLens. All rights reserved.
        </div>
        <nav className="flex items-center gap-4 mt-4 md:mt-0 text-sm">
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}

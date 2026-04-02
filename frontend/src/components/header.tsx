"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 shadow-sm transition-transform group-hover:scale-105">
            <Rocket className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-lg tracking-tight">LaunchLens</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground/80",
              pathname === "/" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <Link
            href="/analyze"
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground/80",
              pathname === "/analyze" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Analyze
          </Link>
          
          <Link
            href="/experts"
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground/80",
              pathname === "/experts" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Experts
          </Link>
          
        </nav>
        <div className="flex items-center">
          <Link
            href="/analyze"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:bg-foreground/90 hover:scale-105 shadow-sm"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

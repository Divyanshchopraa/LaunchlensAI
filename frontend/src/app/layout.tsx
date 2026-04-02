import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot/chatbot";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LaunchLens | Validate Your Startup Idea",
  description: "LaunchLens helps you analyze startup ideas using AI, generating market insights, SWOT, and execution roadmaps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="h-full flex flex-col tracking-tight">
        <Header />
        <main className="flex-1 shrink-0">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}

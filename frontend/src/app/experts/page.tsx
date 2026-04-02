"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const EXPERTS = [
  {
    name: "Sarah Chen",
    title: "Growth Marketing Manager",
    experience: "10+ years",
    bio: "Scales B2B SaaS startups with high ROI campaigns.",
  },
  {
    name: "David Alvarez",
    title: "Startup Marketing Advisor",
    experience: "12+ years",
    bio: "Helps AI and also deep-tech startups with positioning.",
  },
  {
    name: "Priya Sharma",
    title: "Digital Marketing Strategist",
    experience: "8+ years",
    bio: "Expert in community growth and viral campaigns.",
  },
];

export default function ExpertsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      
      {/* Header */}
      <section className="py-16 text-center max-w-3xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[var(--color-foreground)] mb-4"
        >
          Connect with Experts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[var(--color-muted-foreground)] text-lg"
        >
          Get guidance from experienced professionals to grow your startup
        </motion.p>
      </section>

      {/* Cards */}
      <section className="pb-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {EXPERTS.map((expert, idx) => {
            const slug = expert.name.toLowerCase().replace(/\s+/g, "-");

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[var(--color-muted)] border border-[var(--color-border)] rounded-xl p-6 hover:shadow-md transition"
              >

                {/* Avatar */}
                <div
                  onClick={() => router.push(`/expert-detail/${slug}`)}
                  className="w-12 h-12 rounded-full bg-[var(--color-background)] flex items-center justify-center mb-4 text-[var(--color-foreground)] font-semibold cursor-pointer hover:opacity-80 transition"
                >
                  {expert.name.charAt(0)}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-1">
                  {expert.name}
                </h3>

                {/* Role */}
                <p className="text-indigo-500 text-sm mb-2">
                  {expert.title}
                </p>

                {/* Experience */}
                <p className="text-xs text-[var(--color-muted-foreground)] mb-4">
                  {expert.experience} experience
                </p>

                {/* Bio */}
                <p className="text-sm text-[var(--color-muted-foreground)] mb-6">
                  {expert.bio}
                </p>

                {/* Button */}
                <button
                  disabled
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[var(--color-background)] text-[var(--color-muted-foreground)] border border-[var(--color-border)] cursor-not-allowed"
                >
                  Book Appointment
                </button>

                <p className="text-xs text-center text-[var(--color-muted-foreground)] mt-2">
                  Premium feature
                </p>

              </motion.div>
            );
          })}

        </div>
      </section>
    </div>
  );
}
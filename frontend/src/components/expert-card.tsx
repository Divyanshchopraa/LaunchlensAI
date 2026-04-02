"use client";

import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface ExpertCardProps {
  name: string;
  title: string;
  experience: string;
  bio: string;
  photoUrl: string;
  delay?: number;
}

export default function ExpertCard({ name, title, experience, bio, photoUrl, delay = 0 }: ExpertCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-background border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={photoUrl} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-foreground">{name}</h3>
            <p className="text-sm font-medium text-indigo-600">{title}</p>
          </div>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-800">
            {experience}
          </span>
        </div>
        
        <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
          {bio}
        </p>
        
        <div className="mt-6">
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Calendar className="w-4 h-4" />
            Book Advice
          </button>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { Trophy, Award, Star } from "lucide-react";

export default function Achievements() {
  const achievementsList = [
    {
      title: "CodeChef Silver Badge",
      description: "Earned the Silver Badge on CodeChef by solving 250+ coding challenges under strict runtime constraints.",
      icon: <Trophy className="w-6 h-6 text-slate-300" />,
      metric: "250+ Problems",
      glow: "rgba(203, 213, 225, 0.05)",
    },
    {
      title: "Completed CodeChef 500 Segment",
      description: "Solved 100% of all programming challenges in the CodeChef 500 difficulty-rating bracket.",
      icon: <Award className="w-6 h-6 text-orange-400" />,
      metric: "500 Bracket Clear",
      glow: "rgba(249, 115, 22, 0.05)",
    },
    {
      title: "HackerRank Certified Professional",
      description: "Earned 4 verified certificates across Java, Python, C, and SQL, validating programmatic logic.",
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      metric: "4 Verified Languages",
      glow: "rgba(234, 179, 8, 0.05)",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3">
          Recognition
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Honors & Achievements
        </h2>
        <p className="max-w-xl text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed font-sans">
          Algorithmic milestones and technical achievements earned in competitive programming and code evaluations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievementsList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="h-full"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between" glowColor={item.glow}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                    {item.metric}
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-white mb-2 font-sans">
                  {item.title}
                </h3>
                
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Progress bar visual details */}
              <div className="mt-6 border-t border-white/5 pt-4">
                <div className="flex justify-between text-[9px] font-mono text-neutral-500 mb-1">
                  <span>COMPLETION STATUS</span>
                  <span className="text-blue-400">100% VERIFIED</span>
                </div>
                <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-full" />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

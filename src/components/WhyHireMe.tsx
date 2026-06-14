"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { Terminal, Award, Cpu, Database } from "lucide-react";

const reasons = [
  {
    icon: <Terminal className="w-6 h-6 text-blue-400" />,
    title: "Algorithmic Problem Solver",
    description: "Solved over 500+ competitive programming problems on CodeChef and LeetCode. Holds a CodeChef Silver Badge and HackerRank programming certifications.",
    metric: "500+ Solved",
    glow: "rgba(59, 130, 246, 0.08)"
  },
  {
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    title: "Practical AI & Agentic Workflows",
    description: "Goes beyond theory to develop actual functional applications using LLMs, prompt engineering, schema analysis, and multi-agent validation loops.",
    metric: "Agentic AI focus",
    glow: "rgba(139, 92, 246, 0.08)"
  },
  {
    icon: <Database className="w-6 h-6 text-teal-400" />,
    title: "Strong Data Engineering Skills",
    description: "Proficient in SQL query optimization, database design, exploratory data analysis (EDA), and automated scraping using Pandas, BeautifulSoup, and MySQL.",
    metric: "9.29 CGPA",
    glow: "rgba(20, 184, 166, 0.08)"
  },
  {
    icon: <Award className="w-6 h-6 text-pink-400" />,
    title: "Fast Learner & Team Player",
    description: "Completed AWS Generative AI simulations and Tata Data Visualization job simulations, showcasing a drive for continuous upskilling and corporate relevance.",
    metric: "AWS/Tata Simulated",
    glow: "rgba(217, 70, 239, 0.08)"
  }
];

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-purple-500 uppercase tracking-widest mb-3">
          Value Proposition
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Why Hire Me?
        </h2>
        <p className="max-w-xl text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed">
          Combining deep analytical training with practical engineering skills to deliver scalable systems and insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <SpotlightCard className="p-8 h-full flex flex-col justify-between" glowColor={item.glow}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full border border-white/5 bg-white/5 text-neutral-400">
                    {item.metric}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 font-sans group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

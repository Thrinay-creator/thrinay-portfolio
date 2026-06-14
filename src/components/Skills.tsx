"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { Code2, BrainCircuit, Database, Laptop, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
    glow: "rgba(59, 130, 246, 0.05)",
    skills: ["Java", "Python", "C", "SQL", "JavaScript"],
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit className="w-5 h-5 text-purple-400" />,
    glow: "rgba(139, 92, 246, 0.05)",
    skills: ["Agentic AI", "Generative AI", "LLM Integration", "Prompt Engineering", "Machine Learning"],
  },
  {
    title: "Data Science & Analytics",
    icon: <Database className="w-5 h-5 text-teal-400" />,
    glow: "rgba(20, 184, 166, 0.05)",
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Data Engineering",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "BeautifulSoup",
    ],
  },
  {
    title: "Web Development",
    icon: <Laptop className="w-5 h-5 text-pink-400" />,
    glow: "rgba(217, 70, 239, 0.05)",
    skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Core CS",
    icon: <Wrench className="w-5 h-5 text-orange-400" />,
    glow: "rgba(249, 115, 22, 0.05)",
    skills: [
      "Git & GitHub",
      "MySQL",
      "VS Code",
      "Jupyter Notebook",
      "DBMS",
      "Digital Logic",
      "Advanced DSA",
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3">
          Expertise
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Technical Skillset
        </h2>
        <p className="max-w-xl text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed font-sans">
          A breakdown of my programming languages, frameworks, AI specialties, and core engineering concepts.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, idx) => (
          <motion.div key={idx} variants={cardVariants} className="h-full">
            <SpotlightCard
              className="p-6 h-full flex flex-col justify-between"
              glowColor={category.glow}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg border border-white/5 bg-white/5">
                    {category.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-sans">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-md text-xs font-mono text-neutral-400 bg-white/[0.02] border border-white/5 hover:border-white/10 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

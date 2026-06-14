"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { ShieldCheck, Award, Server, Code } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  score?: string;
  details: string;
  icon: React.ReactNode;
  glow: string;
}

const certificates: Certificate[] = [
  {
    title: "Programming in Java (93%)",
    issuer: "NPTEL",
    score: "Score: 93% (Elite Gold)",
    details: "Advanced object-oriented programming, inheritance, multi-threading, applets, and database connectivity in Java.",
    icon: <Code className="w-5 h-5 text-blue-400" />,
    glow: "rgba(59, 130, 246, 0.05)",
  },
  {
    title: "AWS Generative AI Simulation",
    issuer: "Amazon Web Services (AWS)",
    details: "Completed core modules on foundation models, fine-tuning, cloud deployment, and secure API bindings for GenAI nodes.",
    icon: <Server className="w-5 h-5 text-purple-400" />,
    glow: "rgba(139, 92, 246, 0.05)",
  },
  {
    title: "Competitive Programming Certificate",
    issuer: "CodeChef",
    score: "500+ Problems Solved",
    details: "Demonstrates advanced problem-solving capabilities, algorithm designs, data structures, and runtime optimizations.",
    icon: <Award className="w-5 h-5 text-teal-400" />,
    glow: "rgba(20, 184, 166, 0.05)",
  },
  {
    title: "Java, Python, C & SQL Certifications",
    issuer: "HackerRank",
    details: "Verified assessments passing algorithms, basic/intermediate scripting, query building, and relational joins.",
    icon: <ShieldCheck className="w-5 h-5 text-pink-400" />,
    glow: "rgba(217, 70, 239, 0.05)",
  },
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="certifications" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3">
          Credentials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Professional Certifications
        </h2>
        <p className="max-w-xl text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed font-sans">
          Formal credentials and verified skills issued by leading institutions and testing platforms.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certificates.map((cert, idx) => (
          <motion.div key={idx} variants={cardVariants} className="h-full">
            <SpotlightCard className="p-6 h-full flex flex-col justify-between" glowColor={cert.glow}>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg border border-white/5 bg-white/5 shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-sans">{cert.title}</h3>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">{cert.issuer}</p>
                  
                  {cert.score && (
                    <span className="inline-block text-[10px] font-mono font-medium text-blue-400 bg-blue-950/20 border border-blue-900/30 px-2 py-0.5 rounded mt-2">
                      {cert.score}
                    </span>
                  )}
                  
                  <p className="text-xs text-neutral-400 mt-3 leading-relaxed font-sans">
                    {cert.details}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

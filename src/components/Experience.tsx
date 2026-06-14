"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { Calendar, Award } from "lucide-react";

interface TimelineItem {
  role: string;
  company: string;
  type: string;
  duration: string;
  bullets: string[];
  skillsGained: string[];
}

const experiences: TimelineItem[] = [
  {
    role: "Generative AI Developer - Job Simulation",
    company: "Tata Group (via Forage)",
    type: "Simulation Project",
    duration: "2024",
    bullets: [
      "Designed AI-powered business solutions addressing strategic operational challenges.",
      "Conducted detailed data visualization and exploratory analysis to communicate business trends.",
      "Performed risk analysis and structured business intelligence models to assist leadership decision-making.",
      "Formulated data-driven decision-making guides translated from raw structured data sources."
    ],
    skillsGained: ["Generative AI Solutions", "Data Visualization", "Risk Analysis", "Business Intelligence"]
  },
  {
    role: "AWS Generative AI Virtual Intern",
    company: "Amazon Web Services (AWS)",
    type: "Virtual Internship",
    duration: "2024",
    bullets: [
      "Studied foundation models (FMs) and deployed scalable inference endpoints on cloud infrastructure.",
      "Engineered prompt chains and structured inputs to optimize text generation and data translation quality.",
      "Developed basic retrieval-augmented generation (RAG) concepts using cloud vectors and knowledge bases.",
      "Integrated secure authentication structures for micro-services talking to backend AI nodes."
    ],
    skillsGained: ["AWS Cloud Platforms", "Large Language Models", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3">
          Timeline
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Experience & Internships
        </h2>
        <p className="max-w-xl text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed font-sans">
          Simulations and virtual internships proving practical exposure to cloud architectures and corporate data tasks.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-8 space-y-12">
        {experiences.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative"
          >
            {/* Timeline Dot with Glowing Ring */}
            <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border border-white/10 bg-neutral-950 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            </div>

            {/* Float Date to the Left (Desktop only) */}
            <div className="hidden md:block absolute -left-40 top-1.5 text-right w-28">
              <span className="text-xs font-mono text-neutral-500 font-semibold flex items-center justify-end gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {item.duration}
              </span>
            </div>

            {/* Experience Card */}
            <SpotlightCard className="p-6 md:p-8" glowColor="rgba(255, 255, 255, 0.03)">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-950/20 border border-blue-900/30 px-2 py-0.5 rounded">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1.5 font-sans">
                    {item.role}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5 font-sans">
                    {item.company}
                  </p>
                </div>
                
                {/* Fallback Date for Mobile View */}
                <div className="md:hidden flex items-center gap-1.5 text-xs font-mono text-neutral-500 font-semibold mt-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.duration}
                </div>
              </div>

              {/* Achievements Bullets */}
              <ul className="space-y-2 mb-6">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-xs sm:text-sm text-neutral-400 flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Gained Skills Tags */}
              <div className="border-t border-white/5 pt-4 flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mr-2 flex items-center gap-1">
                  <Award className="w-3 h-3" /> Skills:
                </span>
                {item.skillsGained.map((sk, skIdx) => (
                  <span
                    key={skIdx}
                    className="px-2.5 py-0.5 rounded text-[10px] font-mono text-neutral-400 bg-white/[0.01] border border-white/5"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

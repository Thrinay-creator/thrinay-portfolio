"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, BrainCircuit, Heart } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      >
        {/* Left Side: Header & Introduction */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <motion.span
            variants={itemVariants}
            className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3"
          >
            About Me
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6"
          >
            Developing Next-Gen Intelligent Systems
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-neutral-400 leading-relaxed mb-6"
          >
            I am a Computer Science (Data Science) undergraduate at Prasad V. Potluri Siddhartha Institute of Technology. From writing complex database pipelines to deploying Agentic AI systems using Large Language Models, I focus on turning complex datasets into actionable code.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-neutral-400 leading-relaxed"
          >
            My strength lies in logical thinking, data manipulation, and clean system architecture. I enjoy participating in competitive programming on platforms like CodeChef and LeetCode, where I continually hone my algorithmic problem-solving abilities.
          </motion.p>
        </div>

        {/* Right Side: Professional Focus Pillars */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl border border-white/5 bg-neutral-950/20 backdrop-blur-sm hover:border-white/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2 font-sans">Artificial Intelligence</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Highly interested in Generative AI architectures, Agentic workflows, and prompt engineering pipelines. I enjoy integrating LLMs to perform automated reasoning and decision-making tasks.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl border border-white/5 bg-neutral-950/20 backdrop-blur-sm hover:border-white/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2 font-sans">Data & Analytics</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Equipped with experience in EDA, data visualization, and database query optimization. Expert in extracting intelligence from structured and unstructured sources using Pandas, SQL, and Matplotlib.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl border border-white/5 bg-neutral-950/20 backdrop-blur-sm hover:border-white/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2 font-sans">Academic Foundation</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Currently pursuing a Bachelor of Technology in Data Science (Class of 2028). Standard coursework includes Advanced Algorithms, DBMS, and digital logical organization with a cumulative CGPA of 9.29/10.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl border border-white/5 bg-neutral-950/20 backdrop-blur-sm hover:border-white/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2 font-sans">Growth Mindset</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Driven by curiosity. I believe in continuous growth, writing readable code, documenting findings, and participating in collaborative team environments to build meaningful digital products.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

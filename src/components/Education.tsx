"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { GraduationCap, Award, BookOpen, MapPin } from "lucide-react";

const courses = [
  "Advanced Data Structures & Algorithms",
  "Database Management Systems (DBMS)",
  "Data Analysis & Visualization",
  "Data Engineering Fundamentals",
  "Digital Logic & Computer Organization",
  "Statistical Mathematics"
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3">
          Academics
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Education History
        </h2>
        <p className="max-w-xl text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed font-sans">
          Overview of my official degree, core focus, grades, and structural computer science courses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Degree & Institution Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 h-full"
        >
          <SpotlightCard className="p-8 h-full flex flex-col justify-between" glowColor="rgba(59, 130, 246, 0.04)">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">Bachelor of Technology (B.Tech)</h3>
                  <p className="text-xs text-neutral-400 mt-0.5 font-sans">Specialization: Data Science</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-base font-semibold text-white font-sans">
                    Prasad V. Potluri Siddhartha Institute of Technology (PVPSIT)
                  </h4>
                  <div className="flex flex-wrap gap-4 text-xs text-neutral-500 font-mono mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Vijayawada, Andhra Pradesh
                    </span>
                    <span>•</span>
                    <span>Graduation: Class of 2028 (2024 - 2028)</span>
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                  Deeply focused on mathematical foundations of machine learning, system designs, algorithm complexities, and practical database structures to drive high-value automation.
                </p>
              </div>
            </div>

            {/* Coursework pill matrix */}
            <div>
              <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {courses.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded bg-white/[0.02] border border-white/5 text-xs text-neutral-400"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Executive Grade Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-4 h-full"
        >
          <SpotlightCard className="p-8 h-full flex flex-col justify-center items-center text-center border-white/10" glowColor="rgba(139, 92, 246, 0.08)">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <Award className="w-6 h-6 animate-pulse" />
            </div>
            
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              Cumulative GPA
            </span>
            
            <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-indigo-400 tracking-tighter my-3 font-mono">
              9.29
            </div>
            
            <span className="text-xs font-mono text-neutral-500">
              Scale: 10.00 Max
            </span>
            
            <div className="h-[1px] bg-white/5 w-24 my-6" />
            
            <p className="text-[11px] text-neutral-400 leading-relaxed font-sans max-w-xs">
              Consistently positioned in the top-tier of the cohort, demonstrating academic rigor and a strong foundation in computer science theories.
            </p>
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}

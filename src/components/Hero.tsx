"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight, Code2 } from "lucide-react";

const roles = [
  "AI Engineer",
  "Data Scientist",
  "Software Developer",
  "Problem Solver"
];

// Custom SVG Icons for LeetCode, CodeChef, HackerRank, GitHub, LinkedIn
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
  </svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.945l1.944 1.943a1.375 1.375 0 0 0 1.945 0l9.777-9.778a1.375 1.375 0 0 0 0-1.945L14.444.414A1.373 1.373 0 0 0 13.483 0zm5.111 5.613a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.945l1.944 1.943a1.375 1.375 0 0 0 1.945 0l9.777-9.778a1.375 1.375 0 0 0 0-1.945L19.572 6.027a1.373 1.373 0 0 0-.978-.414zM4.778 13.5l-2.167 2.167a1.375 1.375 0 0 0 0 1.945l1.944 1.943a1.375 1.375 0 0 0 1.945 0l2.167-2.167-3.889-3.888z" />
  </svg>
);

const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
    <path d="M12 6v6l4 2" />
    <path d="M12 18h.01" />
  </svg>
);

const HackerRankIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.086 0H1.914C.856 0 0 .857 0 1.914v20.172C0 23.143.857 24 1.914 24h20.172c1.057 0 1.914-.857 1.914-1.914V1.914C24 .857 23.143 0 22.086 0zm-11.83 18.064H7.262v-2.31h2.994v-3.508H7.262V9.936h2.994V7.626H4.268v10.438h5.988zm7.476-5.818c1.35 0 2.256-1.004 2.256-2.31s-.906-2.31-2.256-2.31h-2.994v4.62h2.994zm-2.994 5.818h2.994c1.35 0 2.256-1.004 2.256-2.31s-.906-2.31-2.256-2.31h-2.994v4.62z" />
  </svg>
);

// Counter Animation Component
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / value));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) {
        clearInterval(timer);
      }
    }, Math.max(stepTime, 20));

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText((prev) => currentRole.substring(0, prev.length + 1));
        setTypingSpeed(100);

        if (displayText === currentRole) {
          timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
          return;
        }
      } else {
        setDisplayText((prev) => currentRole.substring(0, prev.length - 1));
        setTypingSpeed(50);

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-dot-pattern"
    >
      {/* Central glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl flex flex-col items-center text-center relative z-10">
        
        {/* Profile Image/Graphic Placeholder */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8 group"
        >
          {/* Glowing Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
          
          <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full border border-white/10 bg-neutral-950 p-[3px]">
            {/* Visual avatar placeholder */}
            <div className="w-full h-full rounded-full bg-gradient-to-b from-neutral-900 to-neutral-950 flex flex-col items-center justify-center overflow-hidden relative border border-white/5">
              {/* Abstract Code graphic inside placeholder */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
              <Code2 className="w-12 h-12 text-blue-400/30 absolute top-5 animate-pulse" />
              <span className="text-3xl font-extrabold font-mono text-white tracking-tighter z-10">
                JT
              </span>
              <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase z-10 mt-1">
                Data Science
              </span>
            </div>
          </div>
        </motion.div>

        {/* Introduction / Welcome tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-semibold text-blue-400 uppercase tracking-widest mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Open to Internships & Opportunities
        </motion.div>

        {/* Full Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans"
        >
          Jayavarapu Thrinay
        </motion.h1>

        {/* Role Subheading with Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 mt-4 flex items-center justify-center"
        >
          <p className="text-lg sm:text-2xl font-mono font-medium text-neutral-400">
            I am a <span className="text-white border-r-2 border-blue-500 pr-1 animate-pulse">{displayText}</span>
          </p>
        </motion.div>

        {/* Strong Personal Tagline & Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-neutral-400 font-sans mt-6 leading-relaxed"
        >
          Bridging the gap between intelligent algorithms and elegant software. I design AI-driven business solutions and optimize complex data structures to solve real-world problems.
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 w-full sm:w-auto"
        >
          <button
            onClick={handleScrollToContact}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-xl shadow-white/5 active:scale-95 cursor-pointer"
          >
            Connect With Me
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <a
            href="/ThrinayResume.pdf"
            download="ThrinayResume.pdf"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all active:scale-95"
          >
            <FileText className="w-4 h-4 text-neutral-400" />
            Download Resume
          </a>
        </motion.div>

        {/* Social Platforms Links Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 md:gap-6 justify-center items-center mt-12 px-6 py-3.5 rounded-full border border-white/5 bg-neutral-950/40 backdrop-blur-md"
        >
          <a
            href="https://www.linkedin.com/in/thrinay-jayavarupu-367564372/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white hover:scale-110 transition-all"
            title="LinkedIn Profile"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/Thrinay-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white hover:scale-110 transition-all"
            title="GitHub Profile"
          >
            <GithubIcon />
          </a>
          <a
            href="https://leetcode.com/u/rna3f2IDoH/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-[#FFA116] hover:scale-110 transition-all"
            title="LeetCode Profile"
          >
            <LeetCodeIcon />
          </a>
          <a
            href="https://www.codechef.com/users/lonely_cow_49"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-[#D0996E] hover:scale-110 transition-all"
            title="CodeChef Profile"
          >
            <CodeChefIcon />
          </a>
          <a
            href="https://www.hackerrank.com/profile/24501a4421"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-[#2EC866] hover:scale-110 transition-all"
            title="HackerRank Profile"
          >
            <HackerRankIcon />
          </a>
          <div className="w-[1px] h-4 bg-white/10 hidden sm:block" />
          <a
            href="mailto:jayavaruput@gmail.com"
            className="text-neutral-400 hover:text-white hover:scale-110 transition-all flex items-center gap-1.5 text-xs font-medium font-mono"
            title="Send Email"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden md:inline">jayavaruput@gmail.com</span>
          </a>
        </motion.div>

        {/* Animated Key Statistics Dashboard (Vercel Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-20 border-t border-white/5 pt-12 text-left"
        >
          <div className="p-5 rounded-2xl border border-white/5 bg-neutral-950/20 backdrop-blur-sm relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-mono">
              <Counter value={9} suffix=".29 / 10" />
            </div>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-2">B.Tech CGPA</p>
            <p className="text-[10px] text-neutral-600 mt-1 font-sans">Academic Excellence</p>
          </div>

          <div className="p-5 rounded-2xl border border-white/5 bg-neutral-950/20 backdrop-blur-sm relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-mono">
              <Counter value={500} suffix="+" />
            </div>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-2">Problems Solved</p>
            <p className="text-[10px] text-neutral-600 mt-1 font-sans">Competitive Programming</p>
          </div>

          <div className="p-5 rounded-2xl border border-white/5 bg-neutral-950/20 backdrop-blur-sm relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-mono">
              <Counter value={2} suffix="" />
            </div>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-2">Advanced Projects</p>
            <p className="text-[10px] text-neutral-600 mt-1 font-sans">Agentic AI & Analytics</p>
          </div>

          <div className="p-5 rounded-2xl border border-white/5 bg-neutral-950/20 backdrop-blur-sm relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-mono">
              <Counter value={4} suffix="+" />
            </div>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-2">Certifications</p>
            <p className="text-[10px] text-neutral-600 mt-1 font-sans">AWS, NPTEL & CodeChef</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

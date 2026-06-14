"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { Search, ExternalLink, LineChart, Cpu } from "lucide-react";

// Custom GitHub Icon SVG
const GithubIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

interface Project {
  id: string;
  title: string;
  category: "AI" | "Web" | "Data";
  description: string;
  achievements: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  accentColor: string;
  mockup: React.ReactNode;
}

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "AI" | "Web" | "Data">("All");

  const projects: Project[] = [
    {
      id: "sql-gen",
      title: "AI Powered SQL Query Generator",
      category: "AI",
      description: "An Agentic AI system that converts natural language queries into optimized SQL statements using Large Language Models, enabling non-technical users to query database schemas efficiently.",
      achievements: [
        "Implemented automated schema analysis, query understanding, and automated SQL generation.",
        "Integrated validation mechanisms and validation loops to improve query accuracy and reliability.",
        "Built an interactive UI for real-time query generation and database result visualization."
      ],
      techStack: ["Python", "LLMs", "Prompt Engineering", "SQL", "MySQL"],
      githubUrl: "https://github.com/thrinay/sql-query-generator",
      liveUrl: "https://github.com/thrinay/sql-query-generator", // Fallback to GitHub repository if no deploy
      accentColor: "from-blue-500 to-indigo-600",
      mockup: (
        <div className="w-full h-full bg-slate-950 flex flex-col justify-between p-4 border border-white/5 rounded-t-xl overflow-hidden relative group">
          <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="text-[10px] font-mono text-neutral-600 ml-2">agentic-sql-generator.ai</span>
          </div>
          <div className="flex flex-col gap-2 flex-grow justify-center mt-2">
            <div className="p-2 rounded-lg bg-neutral-900/60 border border-white/5">
              <p className="text-[9px] font-mono text-neutral-400">Prompt: &quot;Show total sales for electronics this month&quot;</p>
            </div>
            <div className="flex justify-center my-1">
              <Cpu className="w-6 h-6 text-blue-500 animate-pulse" />
            </div>
            <div className="p-2 rounded-lg bg-blue-950/20 border border-blue-900/30">
              <p className="text-[8px] font-mono text-blue-400">SELECT SUM(price) FROM orders WHERE category = &apos;electronics&apos; AND date &gt;= &apos;2026-06-01&apos;</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "portfolio",
      title: "Premium Portfolio Website",
      category: "Web",
      description: "Designed and developed a premium, responsive portfolio website showcasing engineering projects, skills, certifications, and contest statistics.",
      achievements: [
        "Designed modern glassmorphism layouts inspired by Apple, Stripe, and Linear.",
        "Configured scroll progress bars, mouse-spotlight cards, and custom typing effects using Framer Motion.",
        "Implemented clean Next.js 15 component structure optimized for performance and responsive scaling."
      ],
      techStack: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
      githubUrl: "https://github.com/thrinay/portfolio",
      liveUrl: "https://github.com/thrinay/portfolio",
      accentColor: "from-purple-500 to-pink-600",
      mockup: (
        <div className="w-full h-full bg-neutral-950 flex flex-col justify-between p-4 border border-white/5 rounded-t-xl overflow-hidden relative group">
          <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="text-[10px] font-mono text-neutral-600 ml-2">thrinay.dev</span>
          </div>
          <div className="flex-grow flex items-center justify-center relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-25" />
            <div className="w-24 h-16 rounded border border-white/10 bg-black/60 z-10 flex flex-col items-center justify-center p-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-[10px] font-bold text-white mb-1 shadow-md shadow-pink-500/20">JT</div>
              <div className="w-12 h-1 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "data-scraper",
      title: "Data Analytics & Sentiment Pipeline",
      category: "Data",
      description: "A professional data pipeline built to extract market reviews, run exploratory data analysis (EDA), and visualize sentiment distributions for commercial strategy.",
      achievements: [
        "Implemented web crawlers to parse product descriptions and customer reviews.",
        "Conducted extensive statistical data analysis and correlation mapping.",
        "Designed beautiful, rich data dashboards using Matplotlib, Seaborn, and Pandas."
      ],
      techStack: ["Python", "Pandas", "BeautifulSoup", "Matplotlib", "Seaborn"],
      githubUrl: "https://github.com/thrinay/data-sentiment-pipeline",
      liveUrl: "https://github.com/thrinay/data-sentiment-pipeline",
      accentColor: "from-teal-500 to-emerald-600",
      mockup: (
        <div className="w-full h-full bg-slate-950 flex flex-col justify-between p-4 border border-white/5 rounded-t-xl overflow-hidden relative group">
          <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="text-[10px] font-mono text-neutral-600 ml-2">analytics-pipeline.py</span>
          </div>
          <div className="flex-grow flex items-end gap-1.5 justify-center pt-4 px-4">
            <div className="w-5 h-8 bg-teal-500/40 border-t border-teal-400/50 rounded-t" />
            <div className="w-5 h-16 bg-teal-500/80 border-t border-teal-400 rounded-t" />
            <div className="w-5 h-12 bg-teal-500/60 border-t border-teal-400/80 rounded-t" />
            <div className="w-5.1 h-20 bg-emerald-500 border-t border-emerald-400 rounded-t relative">
              <LineChart className="absolute -top-6 -left-4 w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </div>
      )
    }
  ];

  // Filters logic
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3">
          Portfolio
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Selected Projects
        </h2>
        <p className="max-w-xl text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed font-sans">
          A collection of functional builds representing my work in artificial intelligence, software design, and data pipelines.
        </p>
      </div>

      {/* Filter and Search Bar Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 w-full">
        {/* Categories Tab Filters */}
        <div className="flex items-center gap-1.5 p-1 rounded-full border border-white/5 bg-neutral-950/40 backdrop-blur-sm self-start md:self-auto">
          {(["All", "AI", "Web", "Data"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white text-black font-bold"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {cat === "All" ? "All Projects" : cat === "AI" ? "Agentic AI / ML" : cat === "Web" ? "Web Dev" : "Data Science"}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search projects or tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-white/5 bg-neutral-950/40 text-xs font-sans text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 transition-all"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="h-full"
            >
              <SpotlightCard
                className="flex flex-col h-full overflow-hidden border border-white/5 hover:border-white/10 group"
                glowColor="rgba(255, 255, 255, 0.04)"
              >
                {/* Visual Mockup Area */}
                <div className="h-48 w-full bg-neutral-900 border-b border-white/5 relative flex items-end justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-80 z-10" />
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${project.accentColor}`} />
                  <div className="w-[85%] h-[80%] relative z-0 mt-4 group-hover:scale-[1.03] transition-transform duration-500 ease-out">
                    {project.mockup}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Category Tag */}
                    <span className="text-[9px] font-mono font-medium px-2 py-0.5 rounded border border-white/5 bg-white/5 text-neutral-400 uppercase tracking-widest">
                      {project.category === "AI" ? "Agentic AI" : project.category === "Web" ? "Web Application" : "Data & Scraping"}
                    </span>
                    
                    <h3 className="text-lg font-bold text-white mt-3 font-sans group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-sans mb-4">
                      {project.description}
                    </p>

                    {/* Bullet Achievements */}
                    <ul className="space-y-1.5 mb-6">
                      {project.achievements.map((ach, index) => (
                        <li key={index} className="text-[11px] text-neutral-500 flex items-start gap-1.5 font-sans leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.02] border border-white/5 text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* External CTA Links */}
                    <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        Code Repository
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors ml-auto"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-500 text-sm font-sans">No projects match the selected filters.</p>
        </div>
      )}
    </section>
  );
}

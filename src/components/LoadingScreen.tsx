"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400); // Small delay before fading
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030303]"
        >
          {/* Subtle Grid overlay inside loading screen */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          
          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            {/* Logo placeholder/animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 flex items-center justify-center w-16 h-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-md relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md opacity-25" />
              <span className="text-xl font-bold font-mono text-white relative z-10">JT</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-bold tracking-widest text-white uppercase font-sans"
            >
              Jayavarapu Thrinay
            </motion.h1>
            
            {/* Tagline */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs tracking-wider text-neutral-400 font-mono mt-2"
            >
              AI Engineer & Data Scientist
            </motion.p>

            {/* Progress bar container */}
            <div className="mt-8 w-64 h-[2px] bg-neutral-900 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Progress number */}
            <motion.span
              key={progress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              className="text-xs font-mono text-neutral-500 mt-2"
            >
              {Math.min(progress, 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

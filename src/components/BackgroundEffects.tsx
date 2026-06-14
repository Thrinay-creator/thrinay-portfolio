"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-[#060612] pointer-events-none">

      {/* ── Base Gradient Canvas ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(80,40,180,0.25),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_100%,rgba(60,20,140,0.18),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_90%,rgba(20,100,180,0.12),transparent_60%)]" />

      {/* ── Purple Dot Grid ── */}
      <div className="absolute inset-0 bg-dot-pattern opacity-100" />

      {/* ── Fine Line Grid ── */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />

      {/* ── Subtle vignette ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,6,18,0.65)_100%)]" />

      {/* ── Floating Glow Blobs ── */}

      {/* Large violet blob — top-left */}
      <motion.div
        animate={{ x: [0, 60, -30, 0], y: [0, -80, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(100,60,255,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Deep blue blob — top-right */}
      <motion.div
        animate={{ x: [0, -50, 40, 0], y: [0, 70, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[-5%] w-[400px] h-[400px] md:w-[580px] md:h-[580px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(40,80,220,0.16) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Pink/magenta accent — mid right */}
      <motion.div
        animate={{ x: [0, -40, 30, 0], y: [0, -60, 50, 0], scale: [1, 1.08, 0.94, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[2%] w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(200,60,220,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Cyan/teal blob — bottom-left */}
      <motion.div
        animate={{ x: [0, 50, -20, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[5%] left-[5%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30,180,200,0.10) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Warm indigo blob — center */}
      <motion.div
        animate={{ x: [0, 30, -40, 0], y: [0, 40, -30, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[55%] left-[35%] w-[250px] h-[250px] md:w-[380px] md:h-[380px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(120,80,255,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── Subtle top edge highlight ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
    </div>
  );
}

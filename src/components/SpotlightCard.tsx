"use client";

import React, { useRef, useState } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export default function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.05)",
  onClick,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCoords({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={
        {
          "--mouse-x": `${coords.x}px`,
          "--mouse-y": `${coords.y}px`,
        } as React.CSSProperties
      }
      className={`relative overflow-hidden rounded-xl border border-white/5 bg-neutral-950/40 backdrop-blur-md transition-all duration-300 hover:border-white/10 group ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {/* Spotlight overlay effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 50%)`,
        }}
      />
      
      {/* Dynamic light highlight around the card border */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0 rounded-xl"
        style={{
          opacity: isHovered ? 0.4 : 0,
          border: "1px solid rgba(255, 255, 255, 0.2)",
          background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-20 h-full w-full">{children}</div>
    </div>
  );
}

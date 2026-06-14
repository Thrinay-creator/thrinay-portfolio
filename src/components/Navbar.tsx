"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Is scrolled check for shadow/blur change
      setIsScrolled(window.scrollY > 20);

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Determine active section based on scroll offset
      const sections = navItems.map((item) => item.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is in the top 40% of the screen
          if (rect.top <= window.innerHeight * 0.4) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-900 z-[99] pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-neutral-950/80 border-white/10 shadow-lg shadow-black/50 backdrop-blur-md py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-8">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center font-bold font-mono text-sm text-white transition-all group-hover:border-white/30">
              JT
            </div>
            <span className="font-semibold tracking-wider text-sm md:text-base hidden sm:inline-block font-sans group-hover:text-white transition-colors">
              Jayavarapu Thrinay
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 relative ${
                    active ? "text-white" : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/5 border border-white/5 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Resume Quick Access Link */}
          <div className="hidden md:block">
            <a
              href="mailto:jayavaruput@gmail.com"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-all"
            >
              Get In Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 md:hidden text-neutral-300 hover:text-white transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] z-40 bg-neutral-950/95 border border-white/10 rounded-2xl p-6 backdrop-blur-xl md:hidden shadow-2xl shadow-black/80"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const active = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`py-2 px-4 rounded-lg text-sm font-medium tracking-wide transition-all ${
                      active
                        ? "bg-white/5 border border-white/5 text-white"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="h-[1px] bg-white/10 my-1" />
              <a
                href="mailto:jayavaruput@gmail.com"
                className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-semibold text-white transition-colors"
              >
                Get In Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

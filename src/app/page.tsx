import React from "react";
import LoadingScreen from "@/components/LoadingScreen";
import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyHireMe from "@/components/WhyHireMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      {/* Visual Preloader */}
      <LoadingScreen />
      
      {/* Premium ambient glows and geometric grids */}
      <BackgroundEffects />
      
      {/* Floating navigation bar */}
      <Navbar />

      {/* Main content sections */}
      <main className="relative z-10 w-full min-h-screen">
        <Hero />
        <About />
        <WhyHireMe />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer copyright and links */}
      <Footer />

      {/* Float navigation back to top */}
      <BackToTop />
    </>
  );
}

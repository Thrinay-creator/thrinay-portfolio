"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";

// Custom SVGs for coding platforms
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 
  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Let&apos;s Work Together
        </h2>
        <p className="max-w-xl text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed font-sans">
          I am currently open to internships and junior full-time positions. Reach out directly or drop a message below!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Direct Contact info and Social Profile blocks */}
        <div className="lg:col-span-5 space-y-6">
          
          <SpotlightCard className="p-6" glowColor="rgba(59, 130, 246, 0.04)">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg border border-white/5 bg-white/5 text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Email Me</p>
                <a href="mailto:jayavaruput@gmail.com" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors font-mono">
                  jayavaruput@gmail.com
                </a>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6" glowColor="rgba(20, 184, 166, 0.04)">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg border border-white/5 bg-white/5 text-teal-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Call Me</p>
                <a href="tel:+919247757775" className="text-sm font-semibold text-white hover:text-teal-400 transition-colors font-mono">
                  +91 9247757775
                </a>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6" glowColor="rgba(139, 92, 246, 0.04)">
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-4">Professional Profiles</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/thrinay-jayavarupu-367564372/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/10 transition-all hover:scale-105"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Thrinay-creator"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/10 transition-all hover:scale-105"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://leetcode.com/u/rna3f2IDoH/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-[#FFA116] hover:border-white/10 transition-all hover:scale-105"
                title="LeetCode"
              >
                <LeetCodeIcon />
              </a>
              <a
                href="https://www.codechef.com/users/lonely_cow_49"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-[#D0996E] hover:border-white/10 transition-all hover:scale-105"
                title="CodeChef"
              >
                <CodeChefIcon />
              </a>
              <a
                href="https://www.hackerrank.com/profile/24501a4421"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-[#2EC866] hover:border-white/10 transition-all hover:scale-105"
                title="HackerRank"
              >
                <HackerRankIcon />
              </a>
            </div>
          </SpotlightCard>

        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <SpotlightCard className="p-8" glowColor="rgba(255, 255, 255, 0.02)">
             (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle className="w-12 h-12 text-emerald-500 mb-4 animate-bounce" />
                <h3 className="text-lg font-bold text-white font-sans">Message Sent Successfully!</h3>
                <p className="text-xs text-neutral-400 mt-2 font-sans max-w-sm leading-relaxed">
                  Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form
                action="https://formspree.io/f/mkoakvge"
                  method="POST"
                  className="space-y-4"
                >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Your Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="px-4 py-2.5 rounded-lg border border-white/5 bg-neutral-950/40 text-xs font-sans text-white focus:outline-none focus:border-white/20 transition-all placeholder-neutral-600"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Your Email</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="px-4 py-2.5 rounded-lg border border-white/5 bg-neutral-950/40 text-xs font-sans text-white focus:outline-none focus:border-white/20 transition-all placeholder-neutral-600"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Subject</label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Opportunity / Collaboration"
                    className="px-4 py-2.5 rounded-lg border border-white/5 bg-neutral-950/40 text-xs font-sans text-white focus:outline-none focus:border-white/20 transition-all placeholder-neutral-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Hello Thrinay, I would love to connect..."
                    className="px-4 py-2.5 rounded-lg border border-white/5 bg-neutral-950/40 text-xs font-sans text-white focus:outline-none focus:border-white/20 transition-all placeholder-neutral-600 resize-none"
                  />
                </div>
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Form Submission"
              />

              <input
                type="hidden"
                name="_next"
                value="https://formspree.io/thanks"
              />

              <button
                type="submit"
              >
                Send Message
              </button>
              </form>
            )
          </SpotlightCard>
        </div>

      </div>
    </section>
  );
}

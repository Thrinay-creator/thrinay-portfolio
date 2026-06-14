import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jayavarapu Thrinay | AI Engineer, Data Scientist & Software Developer",
    template: "%s | Jayavarapu Thrinay"
  },
  description: "Portfolio of Jayavarapu Thrinay, a Computer Science (Data Science) student specializing in Agentic AI, Large Language Models, Data Science, and Full-Stack Software Development. Explored my work, achievements, and technical expertise.",
  keywords: [
    "Jayavarapu Thrinay",
    "AI Engineer",
    "Data Scientist",
    "Software Developer",
    "Agentic AI",
    "Generative AI",
    "Machine Learning",
    "Python",
    "Java",
    "SQL",
    "Next.js",
    "Tailwind CSS",
    "Data Analysis",
    "Competitive Programming"
  ],
  authors: [{ name: "Jayavarapu Thrinay", url: "mailto:jayavaruput@gmail.com" }],
  creator: "Jayavarapu Thrinay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thrinay.dev", // Replaceable placeholder
    title: "Jayavarapu Thrinay | AI Engineer & Data Scientist",
    description: "Professional portfolio showcasing Agentic AI products, data engineering tools, and competitive programming achievements.",
    siteName: "Jayavarapu Thrinay Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayavarapu Thrinay | AI Engineer & Data Scientist",
    description: "Portfolio of Jayavarapu Thrinay specializing in LLMs, Data Science, and Software Development.",
    creator: "@thrinay",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#060612] text-[#f0f0ff]`}
      >
        {children}
      </body>
    </html>
  );
}

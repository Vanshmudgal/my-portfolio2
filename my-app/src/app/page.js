"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
// Unified Lucide Imports
import { 
  ExternalLink, 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin 
} from "lucide-react";

// Local Components
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/CTA";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechCarousel from "./TechCarousel";
import Services from "@/components/Services";

// Assets
import cryptowebsite_ss from "./cryptowebsite_ss.png";
import energywebsite_ss from "./energywebsite_ss.png";
import furniture_ss from "./furniture_ss.png";
import pastaz from "./pastaz.png";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "CryptoWatch",
      type: "Finance App",
      description: "A real-time financial dashboard engineered for high-frequency data aggregation. Integrates multiple RESTful APIs via Axios.",
      image: cryptowebsite_ss,
      link: "https://crypto-final-five.vercel.app",
      tags: ["React", "Node.js", "REST APIs", "TailwindCSS"],
    },
    {
      id: 2,
      title: "LUXORIA",
      type: "E-commerce",
      description: "A full-stack e-commerce simulation for high-ticket retail. Connects React frontend with Firebase backend.",
      image: furniture_ss,
      link: "https://furniture-43eb2.web.app/",
      tags: ["React.js", "Firebase", "Context API", "TailwindCSS"],
    },
    {
      id: 3,
      title: "SURGE Energy",
      type: "Landing Page",
      description: "A high-performance marketing landing page optimized for load speed using Vite and brand-centric layout.",
      image: energywebsite_ss,
      link: "https://energy-deploy-weld.vercel.app",
      tags: ["Vite", "React.js", "TailwindCSS", "Node.js"],
    },
    {
      id: 4,
      title: "INESA PASTAZ",
      type: "Business Solution",
      description: "A streamlined digital ordering solution. Features local-storage based cart persistence and interactive UI.",
      image: pastaz,
      link: "https://pasta-rose.vercel.app/",
      tags: ["React.js", "TailwindCSS", "Vite", "JavaScript"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-violet-500/30">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <Services />

        <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-2xl mb-6 border border-violet-500/20">
                <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
                My <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Portfolio</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                A curated selection of projects that showcase my skills and expertise.
              </p>
            </div>

            {/* Project Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden border-b border-slate-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 px-4 py-1.5 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/10 text-xs text-slate-200">
                      {project.type}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-7 space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm mt-2 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-violet-500/10 text-violet-400 rounded border border-violet-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg font-medium hover:from-violet-700 hover:to-indigo-700 transition-all shadow-lg shadow-violet-500/20"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TechCarousel />
        <About />
        <ContactSection />
        <Testimonials />
      </main>

      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Vansh Mudgal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
'use client';

import React, { useState, useEffect } from "react";
import cryptowebsite_ss from "./cryptowebsite_ss.png";
import energywebsite_ss from "./energywebsite_ss.png";
import furniture_ss from "./furniture_ss.png"
import yogawebsite_ss from "./yogawebsite_ss.png"
import pastaz from "./pastaz.png"
import { Search, TrendingUp, BarChart, Globe } from "lucide-react";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/CTA";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Image from "next/image";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code,
  Laptop,
  Zap,
  CheckCircle,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import TechCarousel from "./TechCarousel";
import Services from "@/components/Services";


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          const offset = 80;
          const targetPosition = target.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
 const projects = [
    {
      id: 1,
      title: "CryptoWatch",
      description:
        "A real-time financial dashboard engineered for high-frequency data aggregation. Integrates multiple RESTful APIs via Axios to deliver live market trends, NFT updates, and blockchain news, proving the ability to handle complex data streams without performance lag.",
      image: cryptowebsite_ss,
      link: "https://crypto-final-five.vercel.app",
      tags: ["React", "Node.js", "RESTful APIs", "Vite", "JavaScript (ES6+)", "TailwindCSS"],
    },
    {
      id: 2,
      title: "LUXORIA",
      description:
        "A full-stack e-commerce simulation for high-ticket retail. Connects a modern React frontend with a Firebase backend for secure order storage. Utilizes the Context API for global state management, ensuring a seamless shopping journey from product discovery to final checkout.",
      image: furniture_ss,
      link: "https://furniture-43eb2.web.app/",
      tags: ["React.js", "TailwindCSS", "Firebase", "Context API", "Vite", "JavaScript (ES6+)"],
    },
    {
      id: 3,
      title: "SURGE Energy Drink",
      description:
        "A high-performance marketing landing page optimized for maximum SEO and load speed using Next.js. Designed to convert visitors into customers through lightning-fast rendering and a highly visual, brand-centric layout that retains user attention.",
      image: energywebsite_ss,
      link: "https://energy-deploy-weld.vercel.app",
      tags: ["Next.js", "React.js", "TailwindCSS", "HTML", "JavaScript (ES6+)", "Node.js"],
    },
    {
      id: 4,
      title: "INESA PASTAZ",
      description:
        "A streamlined digital ordering solution for local businesses. Replaces static menus with a responsive, interactive React application. Features local-storage based cart persistence to reduce cart abandonment and a custom intuitive UI tailored for non-tech-savvy customers.",
      image: pastaz,
      link: "https://pasta-rose.vercel.app/",
      tags: ["React.js", "TailwindCSS", "Vite" ,"HTML", "Vite", "JavaScript (ES6+)"],
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <Navbar/>
      <Hero/>
      

      <Services/>
<section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
  <div className="max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-2xl mb-6 border border-violet-500/20">
        <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
        My{" "}
        <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
          Portfolio
        </span>
      </h2>

      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        A curated selection of projects that showcase my skills and expertise
      </p>
    </div>

    {/* Project Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
        >

          {/* GLASSMORPHISM PROJECT IMAGE */}
          <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl shadow-violet-500/10 group-hover:shadow-violet-600/20 transition-all duration-500">

            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent pointer-events-none"></div>

            {/* Badge */}
            <div className="absolute top-4 right-4 px-4 py-2 bg-slate-900/70 backdrop-blur-md rounded-full border border-white/10">
              <span className="text-sm text-slate-200">{project.type || "Web App"}</span>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-7 space-y-5">
            <div>
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 bg-violet-500/10 text-violet-400 rounded-lg border border-violet-500/20 hover:bg-violet-500/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg font-medium hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30"
              >
                <span>View Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387..." />
                  </svg>
                  <span className="text-sm font-medium">Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* View More Button */}
    {projects.length > 4 && (
      <div className="text-center mt-12">
        <a
          href="/projects"
          className="inline-flex items-center gap-3 px-8 py-3 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg font-medium hover:bg-slate-800 hover:border-slate-700 transition-all duration-300"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    )}

  </div>
</section>

      {/* Skills Section */}
       <TechCarousel/>

      
<About/>

<ContactSection/>
<Testimonials/>

     

{/* Testimonials Section */}



      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>&copy; 2026 Vansh Mudgal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
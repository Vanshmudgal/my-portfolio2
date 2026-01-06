'use client';

import React, { useState, useEffect } from "react";
import cryptowebsite_ss from "./cryptowebsite_ss.png";
import energywebsite_ss from "./energywebsite_ss.png";
import furniture_ss from "./furniture_ss.png"
import yogawebsite_ss from "./yogawebsite_ss.png"
import { Search, TrendingUp, BarChart, Globe } from "lucide-react";

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

  
  const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO-Optimized Websites",
    description:
      "Websites engineered for search engines with proper structure, speed optimization, and SEO best practices to maximize visibility.",
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Web Applications",
    description:
      "Custom web applications built with React, Node.js, and cutting-edge frameworks.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description:
      "Lightning-fast applications optimized for performance and user experience.",
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

  const projects = [
    {
      id: 1,
      title: "CryptoWatch",
      description:
        "Helps crypto investors track real-time market movements, monitor NFTs, and make faster, informed decisions without switching between multiple platforms",
      image:
        cryptowebsite_ss,
      link: "https://crypto-final-five.vercel.app",
      tags: ["React", "Node.js", "RESTful APIs", "Nextjs","Javascript(ES6+)","TailwindCSS"],
    },
    {
      id: 2,
      title: "SURGE Energy Drink",
      description:
        "Builds a strong brand presence by showcasing products, athletes, and updates in one engaging platform that drives user interest and brand loyalty.",
      image:
        energywebsite_ss,
      link: "https://energy-deploy-weld.vercel.app",
      tags: ["React.js","TailwindCSS","HTML","Javascript(ES6+)","Nodejs"]
    },

     {
      id: 3,
      title: "LUXORIA",
      description:
        "Helps furniture brands showcase their collections with a clean, organized experience that improves product discovery and user engagement.",
      image:
        furniture_ss,
      link: "https://furniture-deployed.vercel.app",
      tags: ["React.js","TailwindCSS","HTML","Vite","Javascript(ES6+)"]
    },
   
    {
      id: 4,
      title: "ZenFlow",
      description:
        "A modern yoga website mockup designed to present yoga practices, informative articles, and available courses in a clean, user-friendly layout.",
      image:
        yogawebsite_ss,
      link: "https://yoga-alpha-ashen.vercel.app",
      tags: ["React.js", "Javascript(ES6+)", "TailwindCSS", "HTML","Vite","Javascript(ES6+)"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
     
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-violet-500/5"
            : "bg-slate-950/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Vansh Mudgal
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-slate-300 hover:text-violet-400 transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-slate-300 hover:text-violet-400 transition-colors font-medium"
              >
                Portfolio
              </a>
              <a
                href="#skills"
                className="text-slate-300 hover:text-violet-400 transition-colors font-medium"
              >
                Skills
              </a>
              <a
                href="#about"
                className="text-slate-300 hover:text-violet-400 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition-all font-medium"
              >
                Contact Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-slate-800">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-300 hover:text-violet-400 transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-300 hover:text-violet-400 transition-colors font-medium"
              >
                Portfolio
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-300 hover:text-violet-400 transition-colors font-medium"
              >
                Skills
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-300 hover:text-violet-400 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-center bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-violet-500/10 text-violet-400 px-4 py-2 rounded-full text-sm font-semibold border border-violet-500/20 backdrop-blur-sm">
                  ✨ Available for Freelance
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-100">Full Stack Developer</span>
                <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                  Crafting Digital Excellence
                </span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed">
            I build fast, scalable, SEO-optimized web applications that help startups and businesses attract more traffic and convert users into customers.”
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all flex items-center justify-center gap-2 group"
                >
                  Let&apos;s Work Together
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#portfolio"
                  className="border-2 border-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-violet-500 hover:text-violet-400 transition-all flex items-center justify-center gap-2"
                >
                  View Portfolio
                  <ChevronDown className="w-5 h-5" />
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/Vanshmudgal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-violet-500 hover:text-violet-400 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vansh-mudgal-102096134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-violet-500 hover:text-violet-400 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:vanshmudgal12@gmail.com"
                  className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-violet-500 hover:text-violet-400 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 rounded-2xl backdrop-blur-sm border border-violet-500/20 flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-4 z-10">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/50">
                    <Code className="w-16 h-16" />
                  </div>
                  <p className="text-xl font-semibold text-slate-200">
                    Code. Build. Deploy.
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
              Services I{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Delivering enterprise-grade solutions tailored to your business
              needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-violet-500/50 transition-all group hover:shadow-xl hover:shadow-violet-500/5"
              >
                <div className="text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Portfolio Section - 2x2 Grid */}
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
        My{" "}
        <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
          Portfolio
        </span>
      </h2>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        A curated selection of projects that showcase my skills and expertise
      </p>
    </div>

    {/* 2x2 Grid Layout */}
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
        >
          {/* Project Image */}
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-indigo-600/5"></div>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            
            {/* Project Type Badge */}
            <div className="absolute top-4 right-4 px-4 py-2 bg-slate-900/90 backdrop-blur-sm rounded-full border border-slate-800">
              <span className="text-sm text-slate-300">{project.type || "Web App"}</span>
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

            {/* Tech Stack */}
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

            {/* CTA Buttons */}
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
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm font-medium">Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* View More Projects Button (if you have more than 4 projects) */}
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

      

     {/* About Section */}
<section
  id="about"
  className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
>
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
      About{" "}
      <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
        Me
      </span>
    </h2>

    <p className="text-lg text-slate-300 leading-relaxed mb-6">
      I design and build{" "}
      <span className="text-violet-400 font-semibold">
        SEO-optimized, high-performance web experiences
      </span>{" "}
      that help businesses attract traffic, retain users, and convert visitors
      into customers.
    </p>

    <p className="text-lg text-slate-400 leading-relaxed mb-6">
      My focus lies in creating fast, accessible, and search-engine-friendly
      interfaces using modern frontend technologies like React and Next.js.
      From clean semantic markup to performance optimization and Core Web
      Vitals, every decision is made to improve visibility and user experience.
    </p>

    <p className="text-lg text-slate-400 leading-relaxed">
      Whether you’re launching a new product, improving search rankings, or
      refining your website’s user journey, I bring a results-driven mindset
      that aligns design, performance, and SEO to drive real business growth.
    </p>
  </div>
</section>

<section
  id="testimonials"
  className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"
>
  <div className="max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-20">
      <div className="relative inline-block mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 blur-xl opacity-20 rounded-full"></div>
        <div className="relative w-20 h-20 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 rounded-2xl flex items-center justify-center border border-violet-500/30 backdrop-blur-sm">
          <span className="text-violet-400 text-3xl font-serif">"</span>
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
        Client
        <span className="ml-3 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
          Experiences
        </span>
      </h2>

      <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full mb-6"></div>

      <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
        Feedback from small businesses and demo projects showcasing real-world impact
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">

      {/* Testimonial Card */}
      {[
        {
          name: "Ranjeet Kapoor",
          role: "Owner, The French Patisserie",
          quote:
            "Vansh helped us create a clean and visually appealing website that reflects the quality of our bakery. The site works smoothly on mobile and presents our business professionally.",
          impact:
            "Improved online presence, better mobile experience, clearer communication",
          color: "amber",
        },
        {
          name: "Priya Sharma",
          role: "Founder, The Thoughtful Gift Co.",
          quote:
            "Working with Vansh was smooth and professional. He delivered a clean, elegant layout that makes browsing simple and improves the overall brand experience.",
          impact:
            "Clear product structure, faster browsing, polished brand image",
          color: "rose",
        },
      ].map((item, idx) => (
        <div key={idx} className="relative group">
          <div
            className={`absolute -inset-0.5 bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition`}
          ></div>

          <div className="relative bg-slate-900/80 border border-slate-800 p-8 lg:p-10 rounded-2xl backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-start mb-6">
              <div
                className={`w-14 h-14 rounded-full bg-${item.color}-500/20 border border-${item.color}-500/30 flex items-center justify-center text-${item.color}-400 text-xl`}
              >
                ★
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-slate-100">
                  {item.name}
                </h4>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </div>

            {/* ⭐ FIXED STARS */}
            <div className={`flex items-center gap-1 text-${item.color}-400 mb-6 whitespace-nowrap`}>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-slate-200 text-lg italic leading-relaxed mb-6">
              “{item.quote}”
            </p>

            {/* Impact */}
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-${item.color}-500/10 border border-${item.color}-500/20`}>
              <span className={`w-2 h-2 bg-${item.color}-400 rounded-full mr-2 animate-pulse`}></span>
              <p className="text-sm text-slate-300">
                <span className={`font-semibold text-${item.color}-400`}>
                  Impact:
                </span>{" "}
                {item.impact}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Disclaimer */}
    <p className="text-center text-sm text-slate-400 mt-16 max-w-2xl mx-auto italic">
     
    </p>
  </div>
</section>

      {/* CTA Section */}
     {/* CTA Section */}
{/* CTA Section - Clean Minimalist */}
<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-2xl mx-auto">
    <div className="text-center">
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-20 h-20 mb-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur-lg opacity-30"></div>
          <div className="relative bg-slate-900 p-4 rounded-full border border-slate-800">
            <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>
      </div>

   <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
  Transform Your Business with a <br /> Powerful Web Presence
</h2>

<p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
  Get a fast, professional website that attracts customers, builds trust,
  and helps your business grow online. Let’s discuss your requirements today.
</p>



      {/* Simple Contact Links */}
      <div className="space-y-4 mb-10">
        <a 
          href="mailto:vanshmudgal12@gmail.com"
          className="group flex items-center justify-center gap-3 text-lg text-slate-300 hover:text-violet-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>vanshmudgal12@gmail.com</span>
          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </a>
        
        <a 
          href="tel:+919899546612"
          className="group flex items-center justify-center gap-3 text-lg text-slate-300 hover:text-indigo-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>+91 9899546612</span>
          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </a>
      </div>

      {/* Single Primary Button */}
      <div>
        <a
          href="mailto:vanshmudgal12@gmail.com"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-10 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/25"
        >
         Contact Via Email
        </a>
      </div>
    </div>
  </div>
</section>

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
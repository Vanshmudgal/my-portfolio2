'use client';

import React, { useState, useEffect } from "react";
import cryptowebsite_ss from "./cryptowebsite_ss.png";
import energywebsite_ss from "./energywebsite_ss.png";
import furniture_ss from "./furniture_ss.png"
import yogawebsite_ss from "./yogawebsite_ss.png"

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
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description:
        "End-to-end application development with modern technologies and scalable architecture.",
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
        "A modern crypto tracking platform that displays real-time cryptocurrency data, NFTs, and market news using public APIs. Built with Next and styled using Tailwind CSS.",
      image:
        cryptowebsite_ss,
      link: "https://crypto-final-five.vercel.app",
      tags: ["React", "Node.js", "RESTful APIs", "Nextjs","Javascript(ES6+)","TailwindCSS"],
    },
    {
      id: 2,
      title: "SURGE Energy Drink",
      description:
        "An energy drink website displaying energy drink catalog , atheletes and news",
      image:
        energywebsite_ss,
      link: "https://energy-deploy-weld.vercel.app",
      tags: ["React.js","TailwindCSS","HTML","Javascript(ES6+)","Nodejs"]
    },

     {
      id: 3,
      title: "LUXORIA",
      description:
        "A furniture showcase website that displays the latest furniture catalog with modern designs and organized product sections.",
      image:
        furniture_ss,
      link: "https://furniture-deployed.vercel.app",
      tags: ["React.js","TailwindCSS","HTML","Vite","Javascript(ES6+)"]
    },
   
    {
      id: 4,
      title: "ZenFlow",
      description:
        "A modern yoga website displaying information about Yoga",
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
                  href="mailto:contact@vanshmudgal12@gmail.com"
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

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
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

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
              Featured{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Showcasing my best work and successful project deliveries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all hover:shadow-xl hover:shadow-violet-500/10"
              >
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60"></div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full border border-violet-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors font-medium group/link"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
              Technical{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Mastering the latest technologies to build cutting-edge solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skillSet, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-6 text-violet-400">
                  {skillSet.category}
                </h3>
                <div className="space-y-3">
                  {skillSet.items.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      <span className="text-slate-300 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            I&apos;m Vansh Mudgal, a passionate Full Stack Developer dedicated to
            creating innovative digital solutions. With extensive experience in
            both frontend and backend technologies, I specialize in building
            scalable, high-performance applications that solve real-world
            problems. My approach combines technical excellence with creative
            problem-solving to deliver exceptional results for every project.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Whether you&apos;re a startup looking to build your MVP or an enterprise
            seeking to modernize your infrastructure, I bring the expertise and
            dedication needed to turn your vision into reality.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-violet-600/10 to-indigo-600/10 rounded-3xl p-12 border border-violet-500/20 text-center backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
              Looking to build or improve{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
               Web Product?
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Discuss your project and get a free consultation
                
            </p>
            <a
              href="mailto:contact@vanshmudgal.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all"
            >
              Get In Touch <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>&copy; 2025 Vansh Mudgal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
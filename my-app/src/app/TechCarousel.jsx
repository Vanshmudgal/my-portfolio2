"use client";

import { useEffect, useState, useRef } from "react";
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiVite,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiMongodb,
} from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";

const techStack = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500", bgColor: "bg-orange-500/10" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400", bgColor: "bg-sky-500/10" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", bgColor: "bg-yellow-500/10" },
  { name: "React.js", icon: SiReact, color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
  { name: "Vite", icon: SiVite, color: "text-purple-400", bgColor: "bg-purple-500/10" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", bgColor: "bg-white/10" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", bgColor: "bg-green-500/10" },
  { name: "Git", icon: SiGit, color: "text-red-500", bgColor: "bg-red-500/10" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-200", bgColor: "bg-gray-800" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400", bgColor: "bg-green-500/10" },
];

export default function TechCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const carouselRef = useRef(null);

  // Adjust visible items based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(3);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(4);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techStack.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + techStack.length) % techStack.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % techStack.length);
  };

  // Get visible items for the carousel with smooth transition
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const itemIndex = (currentIndex + i) % techStack.length;
      items.push(techStack[itemIndex]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section id="skills" className="py-20 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
          Tech{" "}
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Stack
          </span>
        </h2>
        <p className="text-slate-400 mb-12 text-lg">
          Tools & technologies I use to build modern web applications
        </p>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-12 z-10 p-3 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all hover:scale-110"
            aria-label="Previous tech"
          >
            <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel Items */}
          <div 
            ref={carouselRef}
            className="flex items-center justify-center gap-4 md:gap-8 px-4 transition-all duration-500 ease-out"
          >
            {visibleItems.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${currentIndex}-${index}`}
                  className="flex flex-col items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
                >
                  {/* Circular Icon Container */}
                  <div className={`
                    w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 
                    rounded-full 
                    flex items-center justify-center 
                    ${tech.bgColor}
                    border border-slate-800
                    shadow-lg hover:shadow-xl hover:shadow-slate-900/50
                    transition-all duration-300
                    hover:border-slate-700
                    animate-pulse-slow
                  `}>
                    <Icon className={`text-4xl md:text-5xl lg:text-6xl ${tech.color}`} />
                  </div>
                  
                  {/* Tech Name */}
                  <span className="text-sm md:text-base font-medium text-slate-300 mt-2">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-12 z-10 p-3 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all hover:scale-110"
            aria-label="Next tech"
          >
            <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {techStack.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex 
                  ? "bg-violet-400 scale-125" 
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`View ${techStack[i].name}`}
            />
          ))}
        </div>
      </div>

      {/* Add custom animation to tailwind config or global CSS */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-violet-500/5"
          : "bg-slate-950/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Vansh Mudgal
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="navlink">Services</a>
            <a href="#portfolio" className="navlink">Portfolio</a>
            <a href="#skills" className="navlink">Skills</a>
            <a href="#about" className="navlink">About</a>
            <a href="#testimonials" className="navlink">Testimonials</a>

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
            {[
              { label: "Services", href: "#services" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Skills", href: "#skills" },
              { label: "About", href: "#about" },
              { label: "Testimonials", href: "#testimonials" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-300 hover:text-violet-400 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}

            {/* Contact Button */}
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
  );
}

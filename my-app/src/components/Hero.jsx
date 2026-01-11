"use client";

import { ArrowRight, ChevronDown, Github, Linkedin, Mail, Code } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE CONTENT */}
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
              I build fast, scalable, SEO-optimized web applications that help
              startups and businesses attract more traffic and convert users
              into customers.
            </p>

            {/* CTA Buttons */}
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

            {/* Social Icons */}
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

          {/* RIGHT SIDE (Code Bubble) */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 rounded-2xl backdrop-blur-sm border border-violet-500/20 flex items-center justify-center overflow-hidden">
              <div className="text-center space-y-4 z-10">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/50">
                  <Code className="w-16 h-16 text-white" />
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
  );
}

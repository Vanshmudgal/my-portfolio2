"use client";

import { Search, Laptop, Zap } from "lucide-react";

export default function Services() {
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

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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

        {/* Services Grid */}
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
  );
}

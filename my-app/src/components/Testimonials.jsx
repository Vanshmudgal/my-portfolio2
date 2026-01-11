"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Deepak Singh",
      role: "INESA Pastaz",
      quote:
        "Vansh helped us create a clean and visually appealing website that reflects the quality of our restaurant. The site works smoothly on mobile and presents our business professionally.",
      impact:
        "Improved online presence, better mobile experience, clearer communication",
      color: "amber",
    },
    {
      name: "Priya Sharma",
      role: "Founder, The Thoughtful Gift Co.",
      quote:
        "Working with Vansh was smooth and professional. He delivered a clean, elegant layout that makes browsing simple and enhances the brand experience.",
      impact: "Clear product structure, faster browsing, polished brand image",
      color: "rose",
    },
  ];

  // Tailwind-safe class maps
  const glowMap = {
    amber: "from-amber-500/20 to-amber-600/20",
    rose: "from-rose-500/20 to-rose-600/20",
  };

  const starMap = {
    amber: "text-amber-400",
    rose: "text-rose-400",
  };

  const dotMap = {
    amber: "bg-amber-400",
    rose: "bg-rose-400",
  };

  const badgeMap = {
    amber: "bg-amber-500/10 border-amber-500/20",
    rose: "bg-rose-500/10 border-rose-500/20",
  };

  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 blur-xl opacity-20 rounded-full"></div>
            <div className="relative w-20 h-20 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 rounded-2xl flex items-center justify-center border border-violet-500/30 backdrop-blur-sm">
              <span className="text-violet-400 text-3xl font-serif">"</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            Client{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full mb-6"></div>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Feedback from small businesses and demo projects showcasing real-world
            impact
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Glow FIXED (Tailwind-safe mapping) */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${glowMap[item.color]} rounded-3xl blur opacity-0 group-hover:opacity-100 transition`}
              ></div>

              <div className="relative bg-slate-900/80 border border-slate-800 p-8 lg:p-10 rounded-2xl backdrop-blur-sm">
                {/* Header */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-slate-100">{item.name}</h4>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>

                {/* Stars */}
                <div className={`flex items-center gap-1 mb-6 ${starMap[item.color]}`}>
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
                  {item.quote}
                </p>

                {/* Impact Badge */}
                <div className={`inline-flex items-center px-4 py-2 rounded-full ${badgeMap[item.color]}`}>
                  <span
                    className={`w-2 h-2 rounded-full mr-2 animate-pulse ${dotMap[item.color]}`}
                  ></span>
                  <p className="text-sm text-slate-300">
                    <span className={`font-semibold ${starMap[item.color]}`}>Impact:</span>{" "}
                    {item.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-16 max-w-2xl mx-auto italic"></p>
      </div>
    </section>
  );
}

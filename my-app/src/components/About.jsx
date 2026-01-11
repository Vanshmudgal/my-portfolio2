export default function About() {
  return (
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
          that help businesses attract traffic, retain users, and convert
          visitors into customers.
        </p>

        <p className="text-lg text-slate-400 leading-relaxed mb-6">
          My focus lies in creating fast, accessible, and search-engine-friendly
          interfaces using modern frontend technologies like React and Next.js.
          From clean semantic markup to performance optimization and Core Web
          Vitals, every decision is made to improve visibility and user
          experience.
        </p>

        <p className="text-lg text-slate-400 leading-relaxed">
          Whether you’re launching a new product, improving search rankings, or
          refining your website’s user journey, I bring a results-driven mindset
          that aligns design, performance, and SEO to drive real business
          growth.
        </p>
      </div>
    </section>
  );
}

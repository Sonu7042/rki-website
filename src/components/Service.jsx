import React, { useEffect, useState } from "react";

// Reusable card
const ServiceCard = ({ icon, title, description, isVisible }) => (
  <div
    role="listitem"
    className={`group relative rounded-lg bg-white border border-[#fed233]/20 shadow-sm
      hover:shadow-lg transition-shadow
      motion-safe:transition-opacity motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
  >
    <div className="p-5 sm:p-6">
      <div className="h-12 w-12 flex items-center justify-center rounded-md bg-[#294287]/10 text-[#294287] text-xl">
        <span aria-hidden="true">{icon}</span>
      </div>
      <h3 className="mt-4 text-lg sm:text-xl font-semibold text-[#212121]">
        {title}
      </h3>
      <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
      <div className="mt-4">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-[#294287] text-white px-3 py-2 text-sm hover:bg-[#23386e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#294287]"
        >
          Learn more <span className="ml-2">→</span>
        </button>
      </div>
    </div>

    {/* Decorative accent */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#fed233] via-[#ffc933] to-[#f6b800] opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

// Page section
const Service = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []); // one-time mount animation [web:67]

  const services = [
    {
      icon: "🏠",
      title: "Property Sales",
      description:
        "End‑to‑end guidance from listing to closing with market insights and negotiation support.",
    },
    {
      icon: "🛠️",
      title: "Property Management",
      description:
        "Tenant screening, rent collection, maintenance, and monthly performance reporting.",
    },
    {
      icon: "📐",
      title: "Interior Design",
      description:
        "Personalized space planning, materials selection, and turnkey fit‑outs to budget.",
    },
    {
      icon: "📊",
      title: "Investment Advisory",
      description:
        "Yield analysis, portfolio strategy, and location research for long‑term value.",
    },
    {
      icon: "🏗️",
      title: "Project Marketing",
      description:
        "Go‑to‑market plans, launch campaigns, and sales collateral for new developments.",
    },
    {
      icon: "🧭",
      title: "Relocation Support",
      description:
        "Area orientation, shortlists, and lease assistance for seamless city moves.",
    },
  ];

  return (
    <section
      aria-labelledby="services-heading"
      className="py-16 sm:py-16y lg:py-18 bg-[#f6fbfc]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-[#fed233] text-sm font-medium block mb-1">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#212121]"
          >
            Solutions for every property journey
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Discover a range of offerings designed to simplify buying, selling, and managing real estate with confidence.
          </p>
        </div>

        {/* Grid */}
        <div
          role="list"
          className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              icon={s.icon}
              title={s.title}
              description={s.description}
              isVisible={mounted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
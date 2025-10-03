import React, { useEffect, useState } from "react";
import property1 from "../assets/property/propery1.jpg";
import property2 from "../assets/property/propery2.jpg";
import property3 from "../assets/property/propery3.jpg";
import property4 from "../assets/property/propery4.jpg";
import property5 from "../assets/property/propery5.jpg";
import property6 from "../assets/property/propery6.jpg";
import { Link } from "react-router-dom";

// Card
const PropertyCard = ({ imgSrc, title, subtitle, onClick, isVisible }) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-left bg-white rounded-lg shadow-lg overflow-hidden flex flex-col border border-[#fed233]/20 focus:outline-none
      transition-opacity transition-transform duration-700 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#294287]`}
    aria-label={`${title} details`}
  >
    <div className="relative aspect-[4/3] sm:aspect-video">
      <img
        src={imgSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="p-4 sm:p-5 flex flex-col flex-grow">
      <h3 className="text-base sm:text-xl font-bold truncate">{title}</h3>
      <p className="text-gray-500 text-sm mt-2 line-clamp-3">{subtitle}</p>
      <span className="mt-4 inline-flex items-center text-[#294287] text-sm">
        View details <span className="ml-1">&rarr;</span>
      </span>
    </div>
  </button>
);

// Modal
const PropertyDetailModal = ({ open, property, onClose }) => {
  const [index, setIndex] = useState(0);

  const images = property?.images || [];
  const canPrev = images.length > 1;
  const canNext = images.length > 1;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && canPrev) prev();
      if (e.key === "ArrowRight" && canNext) next();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [open, canPrev, canNext, onClose]);

  if (!open || !property) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`${property.title} details`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel: full-screen on mobile, contained on larger screens */}
      <div
        className={`
          relative z-10 w-screen h-[100dvh] max-h-[100dvh] bg-white shadow-2xl overflow-hidden
          rounded-none mx-0
          sm:w-full sm:h-auto sm:max-h-[90vh] sm:mx-4 sm:rounded-lg sm:max-w-5xl
          flex flex-col
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (sticky for mobile) */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-gray-200 bg-white">
          <h3 className="text-lg sm:text-xl font-semibold truncate">{property.title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#294287]"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Gallery */}
            <div className="relative bg-gray-50">
              {images.length > 0 && (
                <img
                  src={images[index]}
                  alt={`${property.title} photo ${index + 1}`}
                  className="w-full h-64 sm:h-[420px] object-cover"
                />
              )}

              {canPrev && (
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-3 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#294287]"
                  aria-label="Previous photo"
                >
                  ←
                </button>
              )}
              {canNext && (
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-3 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#294287]"
                  aria-label="Next photo"
                >
                  →
                </button>
              )}

              {/* Dots */}
              {images.length > 1 && (
                <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to photo ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className={`h-3 w-3 rounded-full border border-white/70 ${
                        i === index ? "bg-[#294287]" : "bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="p-4 sm:p-6 flex flex-col">
              <p className="text-gray-600 leading-relaxed">{property.subtitle}</p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                {property.location && (
                  <div className="p-3 rounded border border-gray-200">
                    <div className="text-gray-500">Location</div>
                    <div className="font-medium">{property.location}</div>
                  </div>
                )}
                {property.price && (
                  <div className="p-3 rounded border border-gray-200">
                    <div className="text-gray-500">Price</div>
                    <div className="font-medium">{property.price}</div>
                  </div>
                )}
                {property.area && (
                  <div className="p-3 rounded border border-gray-200">
                    <div className="text-gray-500">Area</div>
                    <div className="font-medium">{property.area}</div>
                  </div>
                )}
                {(property.beds || property.baths) && (
                  <div className="p-3 rounded border border-gray-200">
                    <div className="text-gray-500">Specs</div>
                    <div className="font-medium">
                      {property.beds ? `${property.beds} Beds` : ""}{" "}
                      {property.baths ? `• ${property.baths} Baths` : ""}
                    </div>
                  </div>
                )}
              </div>

              {property.tags && property.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {property.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#294287]/10 text-[#294287]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action bar (sticky for mobile) */}
        <div className="sticky bottom-0 z-10 bg-white border-t border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex gap-3">
          <Link
            to={"/contact"}
            className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#294287] text-white hover:bg-[#23386e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#294287]"
          >
            Contact Agent
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded border border-gray-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#294287]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Page
const Property = () => {
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const properties = [
    {
      id: 1,
      imgSrc: property1,
      title: "Luxury Apartment Downtown",
      subtitle:
        "Modern apartment with panoramic city views, premium finishes, and access to world-class amenities including a rooftop pool and fitness center.",
      images: [property1],
      location: "Downtown",
      price: "$890,000",
      beds: 3,
      baths: 2,
      area: "1,450 sq ft",
      tags: ["City view", "Rooftop", "Gym"],
    },
    {
      id: 2,
      imgSrc: property2,
      title: "Suburban Family Home",
      subtitle:
        "Spacious 4-bedroom home with a private backyard, open-plan kitchen, and located in a safe neighborhood near top schools and parks.",
      images: [property2],
      location: "Greenfield Suburb",
      price: "$650,000",
      beds: 4,
      baths: 3,
      area: "2,100 sq ft",
    },
    {
      id: 3,
      imgSrc: property3,
      title: "Cozy Condo by the Lake",
      subtitle:
        "Affordable lakeside condo featuring large windows, serene water views, and walking distance to cafes, trails, and community spaces.",
      images: [property3],
      location: "Lakeside",
      price: "$420,000",
      beds: 2,
      baths: 1,
      area: "900 sq ft",
    },
    {
      id: 4,
      imgSrc: property4,
      title: "Beachfront Villa",
      subtitle:
        "Luxurious villa with direct beach access, a private infinity pool, spacious outdoor lounge, and stunning ocean sunsets every evening.",
      images: [property4],
      location: "Seaside",
      price: "$1,950,000",
      beds: 5,
      baths: 4,
      area: "3,600 sq ft",
    },
    {
      id: 5,
      imgSrc: property5,
      title: "Downtown Studio",
      subtitle:
        "Compact yet stylish studio in the heart of the city, perfect for professionals, with smart storage solutions and vibrant nightlife nearby.",
      images: [property5],
      location: "City Center",
      price: "$280,000",
      beds: 1,
      baths: 1,
      area: "420 sq ft",
    },
    {
      id: 6,
      imgSrc: property6,
      title: "Mountain Cabin Retreat",
      subtitle:
        "Rustic wooden cabin surrounded by nature, offering peaceful seclusion, a cozy fireplace, and access to hiking and adventure trails.",
      images: [property6],
      location: "Highlands",
      price: "$560,000",
      beds: 3,
      baths: 2,
      area: "1,250 sq ft",
    },
  ];

  return (
    <section className="py-14 px-4 sm:px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Properties</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {properties.map((p) => (
            <PropertyCard
              key={p.id}
              imgSrc={p.imgSrc}
              title={p.title}
              subtitle={p.subtitle}
              isVisible={mounted}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      </div>

      <PropertyDetailModal
        open={!!selected}
        property={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};
export default Property;



import React, { useEffect, useState } from "react";
import neibour_elan_1 from "../assets/neibour_elan_1.webp";
import neibour_elan_2 from "../assets/neibour_elan_2.webp";

const slides = [
  {
    img: neibour_elan_1,
    title: "Shopping Center",
    distance: "1,500 m / 21 min walk",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    points: [
      "Cafes, eateries, and daily needs within walking distance",
      "Family-friendly parks and open spaces nearby",
      "Excellent last-mile connectivity to public transit",
    ],
  },
  {
    img: neibour_elan_2,
    title: "Community Park",
    distance: "800 m / 10 min walk",
    desc: "Enjoy lush greenery and open play areas for children and families.",
    points: [
      "Jogging and cycling tracks",
      "Children's play zones and picnic spots",
      "Weekend community events and activities",
    ],
  },
];

const Neighbourhood = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[activeIdx];

  return (
    <section className="py-10 bg-[#f6fbfc]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <span className="text-[#fed233] text-sm block mb-1 font-medium">
          Explore Neighbour
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-8 text-[#212121]">
          What’s In Neighbour{" "}
          <br className="hidden sm:block" />
          Explore Below
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 bg-white rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="lg:col-span-2 relative w-full">
            <div className="relative overflow-hidden aspect-video rounded-lg">
              <div
                key={activeIdx}
                className="absolute inset-0 transform transition-transform duration-700 ease-in-out translate-x-0"
              >
                <img
                  src={activeSlide.img}
                  alt={activeSlide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="relative w-full flex items-center">
            <div
              key={activeIdx + "-content"}
              className="w-full transform transition-transform duration-700 ease-in-out translate-x-0 px-5 py-6 sm:px-6 sm:py-8"
            >
              <h3 className="font-bold text-xl sm:text-2xl mb-2 text-[#212121]">
                {activeSlide.title}
              </h3>

              <p className="text-[#fed233] text-sm sm:text-base mb-3">
                {activeSlide.distance}
              </p>

              <p className="text-gray-600 text-sm sm:text-base mb-5 leading-relaxed">
                {activeSlide.desc}
              </p>

              <ul className="text-sm sm:text-base text-gray-700 space-y-2 mb-6">
                {activeSlide.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded bg-[#294287] text-white px-4 py-2 text-sm sm:text-base hover:bg-[#23386e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#294287]"
              >
                View Property <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dots Navigation for Mobile */}
        <div className="flex justify-center mt-6 space-x-2 lg:hidden">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-3 h-3 rounded-full ${
                activeIdx === idx ? "bg-[#294287]" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Neighbourhood;

import React, { useEffect, useState } from "react";
import img3 from '../assets/Home_pics/img3.jpg';
import amenities1 from "../assets/amenities_elan_1.jpg";
import amenities2 from "../assets/amenities_elan_2.jpg";

// Dummy testimonial data
const testimonials = [
  {
    name: "Jacob William",
    role: "SELLING AGENTS",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    text: "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
  },
  {
    name: "Jacob William",
    role: "SELLING AGENTS",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    text: "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
  },
];

// Star rating component
const StarRating = ({ count }) => (
  <div className="flex gap-1 ml-2">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-yellow-400 text-lg">★</span>
    ))}
  </div>
);

const BuildingAmenities = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section className="py-12 bg-white relative px-4">
      {/* Top banner */}
      <div className="max-w-7xl mx-auto rounded-md overflow-hidden bg-[#f6fbfc] relative mt-10">
        <div className="relative h-52 sm:h-64 md:h-72 w-full flex items-center bg-gray-800">
          <img src={amenities2} alt="Banner" className="absolute h-full w-full object-cover opacity-70"/>
          <div className="relative z-10 px-4 sm:px-8 py-4 sm:py-8">
            <span className="text-white text-xs font-semibold block mb-2 opacity-90">Client'S Testimonial</span>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-tight">
              See What,s Our Client<br className="block sm:hidden"/>
              Says About Us
            </h2>
          </div>
        </div>

        {/* Responsive cards with dissolve-in-left animation */}
        <div
          className={[
            "relative flex flex-wrap justify-center items-start gap-x-6 gap-y-8 px-4 sm:px-6 lg:px-0 mt-[-4rem] sm:mt-[-6rem] z-40",
            "motion-safe:transition-opacity motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out",
            mounted
              ? "motion-safe:opacity-100 motion-safe:translate-x-0"
              : "motion-safe:opacity-0 motion-safe:-translate-x-8",
            "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0",
          ].join(" ")}
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="
                bg-white rounded-lg shadow-md
                px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-6
                w-full
                max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]
                flex flex-col gap-1 items-start
              "
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <div className="font-bold text-[#212121] text-xs sm:text-sm md:text-base">
                    {item.name}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-[#888c94] font-medium">
                    {item.role}
                  </div>
                </div>
                <StarRating count={item.stars}/>
              </div>
              <div className="text-[#888c94] text-[10px] sm:text-xs md:text-sm">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildingAmenities;




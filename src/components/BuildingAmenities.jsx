import React from "react";
import img3 from '../assets/Home_pics/img3.jpg'
import amenities1 from "../assets/amenities_elan_1.jpg"
import amenities2 from "../assets/amenities_elan_2.jpg"

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

const BuildingAmenities = () => (
  <section className="py-12 bg-white relative">
    {/* Top banner */}
    <div className="max-w-7xl mx-auto rounded-md overflow-hidden bg-[#f6fbfc] relative mt-10">
      <div className="relative h-52 sm:h-64 md:h-72 w-full flex items-center bg-gray-800">
        <img src={amenities2} alt="Banner" className="absolute h-full w-full object-cover opacity-70" />
        <div className="relative z-10 px-4 sm:px-8 py-4 sm:py-8">
          <span className="text-white text-xs font-semibold block mb-2 opacity-90">Client'S Testimonial</span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-tight">
            See What,s Our Client <br className="block sm:hidden" />
            Says About Us
          </h2>
        </div>
        <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 flex gap-3 z-20">
          <button className="bg-[#fd5a3e] w-8 h-8 sm:w-9 sm:h-9 rounded flex items-center justify-center text-white text-lg sm:text-xl shadow">←</button>
          <button className="bg-white w-8 h-8 sm:w-9 sm:h-9 rounded flex items-center justify-center text-[#212121] text-lg sm:text-xl shadow border border-gray-300">→</button>
        </div>
      </div>

      {/* Responsive cards */}
      <div className="relative flex flex-wrap justify-center items-start gap-x-6 gap-y-8 px-4 sm:px-6 lg:px-0 mt-[-4rem] sm:mt-[-6rem] z-40">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="
              bg-white rounded-lg shadow-md
              px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8
              w-full
              max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
              flex flex-col gap-2 items-start
            "
          >
            <div className="flex items-center gap-3 mb-3">
              <img src={item.avatar} alt={item.name}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white" />
              <div>
                <div className="font-bold text-[#212121] text-sm sm:text-base md:text-lg">{item.name}</div>
                <div className="text-xs sm:text-sm md:text-base text-[#888c94] font-medium">{item.role}</div>
              </div>
              <StarRating count={item.stars}/>
            </div>
            <div className="text-[#888c94] text-xs sm:text-sm md:text-base">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default BuildingAmenities;

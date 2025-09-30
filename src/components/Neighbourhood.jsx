import React, { useEffect, useState } from "react";
import img1 from "../assets/Home_pics/img1.jpg";
import img2 from "../assets/Home_pics/img2.jpg";
import img3 from "../assets/Home_pics/img3.jpg";
import neibour_elan_1 from "../assets/neibour_elan_1.webp";
import neibour_elan_2 from "../assets/neibour_elan_2.webp";

const thumbnails = [neibour_elan_1, neibour_elan_2];

const Neighbourhood = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Left: Image */}
          <div
            className={`lg:col-span-2 w-full transition-opacity transition-transform duration-700 ease-out
              ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative overflow-hidden rounded-lg mb-6 aspect-video">
              <img
                src={neibour_elan_1}
                alt="Main building"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right: Card */}
          <div
            className={`w-full transition-opacity transition-transform duration-700 ease-out
              ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="bg-white rounded-lg shadow-lg border border-[#fed233]/20 transition-shadow hover:shadow-xl overflow-hidden">
              {/* Card Image */}
              <div className="relative aspect-video">
                <img
                  src={img2}
                  alt="Shopping Center"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/80 rounded px-3 py-1 text-xs font-medium shadow-sm">
                  5 PROPERTIES
                </div>
              </div>

              {/* Card Content */}
              <div className="px-5 py-4 sm:px-6">
                <h3 className="font-bold text-lg sm:text-xl mb-1">
                  Shopping Center
                </h3>
                <p className="text-[#fed233] text-sm sm:text-base mb-2">
                  1,500 m{" "}
                  <span className="ml-2 text-[#888c94]">/ 21 min walk</span>
                </p>
                <p className="text-gray-500 text-sm sm:text-base mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua.
                </p>
                <a
                  href="#"
                  className="text-[#fed233] font-medium text-sm sm:text-base hover:underline rounded focus:outline-none focus:ring-2 focus:ring-[#fed233] focus:ring-offset-2"
                >
                  View Property <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Neighbourhood;

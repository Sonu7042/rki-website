import React, { useEffect, useState } from "react";
import about_elan_1 from "../assets/about_elan_1.webp";
import about_elan_2 from "../assets/about_elan_2.webp";
import about_elan_3 from "../assets/about_elan_3.webp";

function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-[#f5f9fd] to-white py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-xl mx-auto">
      {/* Section heading */}
      <p className="text-[#fed233] font-semibold mb-6 text-3xl text-center sm:text-center">
        About Us
      </p>

      {/* Main content flex */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center min-h-[200px] sm:min-h-[280px]">
          <img
            src={about_elan_1}
            className="absolute top-10 left-0 w-60 sm:w-72 h-[22rem] bg-[#eaeef4] z-0 rounded-lg hidden sm:block"
            alt="Background"
          />
          <img
            src={about_elan_2}
            alt="Room"
            className="relative w-72 sm:w-96 h-[28rem] sm:h-[30rem] md:h-[28rem] object-cover rounded-lg shadow-lg z-10"
          />
        </div>

        {/* Content Section with dissolve-in-left animation */}
        <div
          className={[
            "w-full md:w-1/2 space-y-6",
            "motion-safe:transition-opacity motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out",
            mounted
              ? "motion-safe:opacity-100 motion-safe:translate-x-0"
              : "motion-safe:opacity-0 motion-safe:-translate-x-8",
            "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0",
          ].join(" ")}
        >
          <h2 className="font-bold text-3xl sm:text-4xl text-[#23313b] leading-snug mb-2">
            Building Dreams, One <br /> Home at a Time
          </h2>

          <div className="text-gray-500 text-base sm:text-lg mb-8">
            At Team Real Kay Investments (Team RKI), we believe real estate is more than just transactions — it’s about building futures. Founded on the principles of trust, integrity, and personalized service, we guide our clients through every step of their property journey. With deep local knowledge and a dedication to results, we strive to make your experience seamless — whether you're entering the market for the first time or expanding your investment portfolio.
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-6 border border-[#fed233]/30 rounded-md p-6 bg-white">
              <span className="text-[#fed233]">
                {/* SVG icon */}
              </span>
              <div>
                <h4 className="text-lg font-bold text-[#23313b] mb-2">Innovative Design & Architecture</h4>
                <p className="text-gray-500 text-sm">Global trends blended with local excellence.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 border border-[#fed233]/30 rounded-md p-6 bg-white">
              <span className="text-[#fed233]">
                {/* SVG icon */}
              </span>
              <div>
                <h4 className="text-lg font-bold text-[#23313b] mb-2">Quality Construction</h4>
                <p className="text-gray-500 text-sm">Superior materials and meticulous execution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities block */}
      <div className="flex flex-col md:flex-row min-h-[50vh] bg-[#f6fbfc] mt-12 items-center">
        {/* Left Column with dissolve-in-left */}
        <div
          className={[
            "flex-1 flex flex-col justify-center p-6 md:p-12 lg:p-24",
            "motion-safe:transition-opacity motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out",
            mounted
              ? "motion-safe:opacity-100 motion-safe:translate-x-0"
              : "motion-safe:opacity-0 motion-safe:-translate-x-8",
            "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0",
          ].join(" ")}
        >
          <span className="text-[#fed233] font-semibold mb-3">Building Facilities</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-snug">
            Making living spaces <br /> More Beautiful
          </h1>
          <p className="mb-7 text-[#5a6973] text-base max-w-xl">
            Over 39,000 people work for us in more than 70 countries all over the world.
            This breadth of global coverage, combined with specialist services.
          </p>
        </div>

        {/* Right Column centered with responsive height */}
        <div className="flex-1 flex items-center justify-center rounded-2xl overflow-hidden h-48 md:h-64 lg:h-80 mt-6 md:mt-0">
          <img
            src={about_elan_3}
            alt="Living room"
            className="max-h-full max-w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

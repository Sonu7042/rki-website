import React, { useEffect, useState } from "react";
import home_elan_1 from '../assets/Home_pics/home_elan_1.webp';
import home_elan_2 from '../assets/Home_pics/home_elan_2.webp';
import home_elan_3 from '../assets/Home_pics/home_elan_3.jpg';
import home_elan_4 from '../assets/Home_pics/home_elan_4.jpg';
import home_elan_5 from '../assets/Home_pics/home_elan_5.webp';

function Home() {
  const images = [home_elan_1, home_elan_2, home_elan_3, home_elan_4, home_elan_5];
  const [current, setCurrent] = useState(0);
  const delay = 2000; // 2 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, delay);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative w-full min-h-[600px] h-[500px] overflow-hidden z-0 py-10">
        {/* Full-bleed background image */}
        <img
          src={images[current]}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Optional gradient for readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* Left-side overlay text — vertically centered */}
        <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center">
          <div className="max-w-screen-xl mx-auto w-full px-6 md:px-20">
            <div className="max-w-xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight sm:leading-snug">
                Luxury Homes, <br /> Crafted for You
              </h1>
              <p className="border-l-2 border-white/30 pl-4 text-white/90 text-base sm:text-lg mb-10 max-w-md">
                Elan Sector 49 Gurgaon is a leading residential development within the Sohna Road area, noted for modern architecture, location, and connectivity to Golf Course Extension Road, NH-8, and the future Metro line.
              </p>
            </div>
          </div>
        </div>

        {/* Form overlapping bottom half — on top of everything */}
        {/* <form
          className="
            absolute bottom-0 left-0 right-0
            md:left-[182px] md:right-auto
            translate-y-1/2
            w-[90%] md:w-[70%]
            
            mx-auto md:mx-0
            flex flex-col md:flex-row items-center justify-center gap-6
            bg-white z-50 p-4 rounded-md shadow-lg pointer-events-auto
          "
        >
          <div className="w-full md:w-64">
            <select className="w-full h-10 px-6 font-semibold text-[#23313b] bg-white border border-gray-200 rounded-sm shadow-sm appearance-none focus:ring-[#284181] focus:border-[#284181] transition">
              <option>Choose Area</option>
            </select>
          </div>

          <div className="w-full md:w-64">
            <select className="w-full h-10 px-6 font-semibold text-[#23313b] bg-white border border-gray-200 rounded-sm shadow-sm appearance-none focus:ring-[#284181] focus:border-[#284181] transition">
              <option>Property Status</option>
            </select>
          </div>

          <div className="w-full md:w-64">
            <select className="w-full h-10 px-6 font-semibold text-[#23313b] bg-white border border-gray-200 rounded-sm shadow-sm appearance-none focus:ring-[#284181] focus:border-[#284181] transition">
              <option>Property Type</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full md:w-40 h-10 bg-[#fed233] text-white font-semibold text-lg rounded-sm shadow-sm hover:bg-[#fed233] transition"
          >
            FIND NOW
          </button>
        </form> */}
      </section>
    </>
  );
}

export default Home;

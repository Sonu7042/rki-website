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
    return () => clearInterval(timer); // cleanup timer on unmount
  }, []);

  return (
    <>
      <section className="relative w-full min-h-[600px] mt-15 flex flex-col md:flex-row bg-[#f5fafa] z-0">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center py-10 px-6 md:px-20">
          {/* <div className="flex items-center mb-8">
            <span className="text-2xl text-[#284181] mr-2">🏠</span>
            <span className="text-base font-semibold text-gray-700">Real Estate Agency</span>
          </div> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#23313b] mb-6 leading-tight sm:leading-snug">
            Luxury Homes, <br /> Crafted for You
            {/* Find Your Dream <br /> House By Us */}
          </h1>
          <p className="border-l-2 border-gray-200 pl-4 text-gray-500 text-base sm:text-lg mb-10 max-w-md">
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br />
            sed do eiusmod tempor incididunt ut labore. */}
           Elan Sector 49 Gurgaon  is  a leading residential development, within the Sohna Road Gurgaon area has drawn a lot of interest in the real estate sector.
           It has the advantage of strategic location, modern architecture and broad amenities and presents an attractive destination to both investors and end-users. Located in one of the fastest developing locations in Gurgaon, the project has without hindrance connected to the major sections of the city such as Golf Course Extension Road, NH-8 and the future Metro line which would make it the best location to build on commercial and retail business.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-md">
            <button className="bg-[#fed233] hover:bg-[#fed233] text-black font-semibold py-4 px-10 rounded-md shadow-md transition w-full sm:w-auto">
              OUR SERVICES
            </button>
            <button className="bg-white text-[#23313b] font-semibold py-4 px-10 rounded-md shadow-md border transition hover:bg-gray-50 w-full sm:w-auto">
              LEARN MORE
            </button>
          </div> */}
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 relative overflow-hidden h-[300px] sm:h-[420px] md:h-auto">
          <img
            src={images[current]}
            alt="Living Room"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Form overlapping bottom half */}
        <form
          className="
            absolute bottom-0 left-0 right-0
            md:left-[182px] md:right-auto
            transform translate-y-1/2
            w-[90%] md:w-[70%]
            mx-auto md:mx-0
            flex flex-col md:flex-row items-center justify-center gap-6
            bg-white z-20 p-4 rounded-md shadow-lg
          "
        >
          <div className="w-full md:w-64">
            <select className="w-full h-10 px-6 font-semibold text-[#23313b] bg-white border border-gray-200 rounded-sm shadow-sm appearance-none focus:ring-[#284181] focus:border-[#284181] transition">
              <option>Choose Area</option>
            </select>
          </div>

          <div className="w-full md:w-64">
            <select className="w-full h-10 px-6 font-semibold text-[#23313b] bg-white border border-gray-200 rounded-sm shadow-sm appearance-none focus:ring-[#284181] focus:border-[#284181] transition">
              <option>Property Statusx</option>
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
        </form>
      </section>
    </>
  );
}  

export default Home;     

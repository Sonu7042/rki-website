import React, { useEffect, useState } from "react";
import upcoming_project_1 from "../assets/upcoming_project_elan_1.jpg";
import upcoming_project_2 from "../assets/upcoming_project_elan_2.jpg";
import project_img from "../assets/property/project_img.avif";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    bg: project_img,
    title: "Dream Living Space",
    subtitle: "Setting New Standards",
    aboutTitle: "Quarter",
    img: upcoming_project_2,
    details: [
      { label: "Project Name", value: "Quarter" },
      { label: "Project Type", value: "Apartment / Home" },
      { label: "Building Location", value: "New York, USA" },
      { label: "No. Of Apartments", value: "568" },
      { label: "Total Investment", value: "$14,500,00" },
    ],
  },
  {
    id: 2,
    bg: upcoming_project_1,
    title: "Luxury Living",
    subtitle: "Redefining Comfort",
    aboutTitle: "Heights",
    img: project_img,
    details: [
      { label: "Project Name", value: "Heights" },
      { label: "Project Type", value: "Luxury Apartments" },
      { label: "Building Location", value: "Los Angeles, USA" },
      { label: "No. Of Apartments", value: "320" },
      { label: "Total Investment", value: "$25,000,00" },
    ],
  },
];

const UpcomingProject = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="py-12 bg-white px-4 relative overflow-hidden">
      {/* Background Section */}
      <div className="relative w-full mx-auto rounded-lg overflow-hidden transition-all duration-700 ease-in-out">
        {/* Background Image */}
        <img
          src={slide.bg}
          alt="Project background"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="relative z-10 flex items-center justify-start 
          min-h-[220px] sm:min-h-[300px] md:min-h-[360px] 
          bg-black/40 px-6 sm:px-10 md:px-14">
          {/* Overlay Text */}
          <div className="text-white transition-all duration-700 transform animate-fadeIn">
            <span className="text-xs sm:text-sm font-semibold uppercase block text-[#fed233] mb-2">
              Projects
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              {slide.title}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              {slide.subtitle}
            </h3>
          </div>
        </div>
      </div>
    {/* Floating Card */}
    <Link to="/property" className="w-full md:w-[850px] mx-auto 
      -mt-14 md:-mt-20 lg:-mt-24   /* shifted card more upwards */
      relative z-20 bg-white rounded-lg shadow-xl overflow-hidden 
      border border-[#fed233]/30 flex flex-col md:flex-row 
      transition-all duration-700 ease-in-out animate-slideUp">
      
      {/* Image Side */}
      <div className="w-full md:w-2/5">
        <img
          src={slide.img}
          alt="Project Room"
          className="w-full h-full object-cover min-h-[200px] md:min-h-[100%]"
        />
      </div>

      {/* Text Side */}
      <div className="w-full md:w-3/5 px-6 sm:px-8 py-6 bg-[#f8fbfb] flex flex-col justify-center">
        <span className="font-semibold text-[#fed233] text-sm mb-2">
          About Projects
        </span>
        <h3 className="text-xl sm:text-2xl font-bold mb-6">
          {slide.aboutTitle}
        </h3>

        <ul className="text-gray-700 text-sm sm:text-base space-y-2">
          {slide.details.map((d, i) => (
            <li key={i}>
              {i + 1}. {d.label}:{" "}
              <span className="font-semibold">{d.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </Link>

    </section>
  );
};

export default UpcomingProject;

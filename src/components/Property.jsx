import React, { useEffect, useState } from "react";
import property1 from '../assets/property/propery1.jpg';
import property2 from '../assets/property/propery2.jpg';
import property3 from '../assets/property/propery3.jpg';
import property4 from '../assets/property/propery4.jpg';
import property5 from '../assets/property/propery5.jpg';
import property6 from '../assets/property/propery6.jpg';

// Reusable PropertyCard component with animation container
const PropertyCard = ({ imgSrc, title, subtitle, link, isVisible }) => (
  <div
    className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-shadow border border-[#fed233]/20
      transition-opacity transition-transform duration-700 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
  >
    <div className="relative aspect-[4/3] sm:aspect-video">
      <img src={imgSrc} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-lg sm:text-xl font-bold truncate">{title}</h3>
      <p className="text-gray-500 text-sm mt-2 flex-grow">{subtitle}</p>
      {link && (
        <a href={link} className="mt-4 text-[#fed233] font-medium text-sm hover:underline rounded">
          View Property <span className="ml-1">&rarr;</span>
        </a>
      )}
    </div>
  </div>
);

const Property = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const properties = [
    {
      imgSrc: property1,
      title: "Luxury Apartment Downtown",
      subtitle: "Modern apartment with city views and amenities.",
    },
    {
      imgSrc: property2,
      title: "Suburban Family Home",
      subtitle: "Spacious 4-bedroom home with backyard.",
    },
    {
      imgSrc: property3,
      title: "Cozy Condo by the Lake",
      subtitle: "Affordable condo with beautiful lake views.",
    },
    {
      imgSrc: property4,
      title: "Beachfront Villa",
      subtitle: "Luxurious villa with private pool and beach access.",
    },
    {
      imgSrc: property5,
      title: "Downtown Studio",
      subtitle: "Compact and stylish studio in the heart of the city.",
    },
    {
      imgSrc: property6,
      title: "Mountain Cabin Retreat",
      subtitle: "Rustic cabin surrounded by nature and hiking trails.",
    },
  ];

  return (
    <section className="py-18 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, idx) => (
            <PropertyCard key={idx} {...property} isVisible={mounted} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Property;

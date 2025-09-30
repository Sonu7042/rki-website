import React from "react";
import img1 from '../assets/Home_pics/img1.jpg'

const rows = [
  { residence: "TOWER NAME", bedrooms: "3", bathroom: "3", sqft: "1,200", price: "$3,500", details: "+ Available" },
  { residence: "TOWER NAME", bedrooms: "3", bathroom: "3", sqft: "1,200", price: "$3,500", details: "+ Available" },
  { residence: "TOWER NAME", bedrooms: "3", bathroom: "3", sqft: "1,200", price: "$3,500", details: "+ Available" },
  { residence: "TOWER NAME", bedrooms: "3", bathroom: "3", sqft: "1,200", price: "$3,500", details: "+ Available" },
  { residence: "TOWER NAME", bedrooms: "3", bathroom: "3", sqft: "1,200", price: "$3,500", details: "+ Available" },
  { residence: "TOWER NAME", bedrooms: "3", bathroom: "3", sqft: "1,200", price: "$3,500", details: "+ Available" },
];

 const properties = [
    {
      count: "2 PROPERTIES",
      img: "img_sf.jpg", // Replace with your image path
      location: "San Francisco",
      title: "Mission District Area",
      link: "#",
    },
    {
      count: "5 PROPERTIES",
      img: "img_ny.jpg", // Replace with your image path
      location: "New York",
      title: "Pacific Heights Area",
      link: "#",
    },
    {
      count: "9 PROPERTIES",
      img: "img_az.jpg", // Replace with your image path
      location: "Sedona, Arizona",
      title: "Noe Valley Zones",
      link: "#",
    },
  ];

const AvailabilityTable = () => (
  <>
  
  
     <section className="py-6 bg-[#f6fbfc]">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-[#fd5a3e] text-sm block mb-2 font-medium">
            Area Properties
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-8 leading-[1.15] max-w-3xl">
            Find Your Dream House <br className="hidden sm:block" />
            Search By Area
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((prop) => (
              <div
                key={prop.title}
                className="bg-white rounded-lg shadow p-0 pb-6 flex flex-col overflow-hidden transition hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={img1}
                    alt={prop.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 rounded px-3 py-1 text-xs font-medium shadow-sm">
                    {prop.count}
                  </div>
                </div>
                <div className="px-6 mt-5">
                  <div className="text-[#888c94] text-sm mb-1">
                    {prop.location}
                  </div>
                  <div className="font-bold text-lg mb-4">{prop.title}</div>
                  <a
                    href={prop.link}
                    className="text-[#fd5a3e] font-medium text-sm hover:underline transition"
                  >
                    View Property <span className="ml-1">&#8594;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <span className="text-[#fd5a3e] text-sm block mb-2 font-medium">Available Spaces</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-8 leading-tight">
        Select Availability
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="text-[#888c94] text-sm font-medium">
              <th className="text-left pb-3 px-4 font-normal">Residence</th>
              <th className="text-left pb-3 px-4 font-normal">Bedrooms</th>
              <th className="text-left pb-3 px-4 font-normal">Bathroom</th>
              <th className="text-left pb-3 px-4 font-normal">SQ.FT</th>
              <th className="text-left pb-3 px-4 font-normal">Rent Price</th>
              <th className="text-left pb-3 px-4 font-normal">Details</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={`${idx % 2 === 1 ? "bg-[#f6fbfc]" : "bg-white"} text-[#212121] text-base`}
              >
                <td className="px-4 py-3">{row.residence}</td>
                <td className="px-4 py-3">{row.bedrooms}</td>
                <td className="px-4 py-3">{row.bathroom}</td>
                <td className="px-4 py-3">{row.sqft}</td>
                <td className="px-4 py-3">{row.price}</td>
                <td className="px-4 py-3 text-[#fd5a3e] font-medium">{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
      </>
);

export default AvailabilityTable;
  
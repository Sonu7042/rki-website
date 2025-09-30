import React from "react";
import img1 from '../assets/Home_pics/img1.jpg'
import img2 from '../assets/Home_pics/img2.jpg'
import img3 from '../assets/Home_pics/img3.jpg'
import neibour_elan_1 from '../assets/neibour_elan_1.webp'
import neibour_elan_2 from '../assets/neibour_elan_2.webp'

const thumbnails = [neibour_elan_1, neibour_elan_2];

const features = [
  { icon: "🎓", label: "University / College" },
  { icon: "🛒", label: "Shopping Mall" },
  { icon: "🏥", label: "Medical Hospital" },
  { icon: "✈️", label: "Airport/Biman" },
  { icon: "🚉", label: "Railway Station" },
  { icon: "🧸", label: "Children Playland" },
];

const Neighbourhood = () => (
  <section className="py-5 bg-[#f6fbfc]">
    <div className="max-w-7xl mx-auto px-4">
      <span className="text-[#fed233] text-sm block mb-1 font-medium">Explore Neighbour</span>
      <h2 className="text-3xl sm:text-4xl font-bold leading-[1.1] mb-8 text-[#212121]">
        What’s In Neighbour <br className="hidden sm:block" />
        Explore Below
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Images */}
        <div className="w-full lg:w-2/3 flex flex-col items-center">
          <div className="w-full h-64 sm:h-72 lg:h-[340px] bg-gray-200 relative overflow-hidden rounded-lg mb-6 flex items-center justify-center">
            <img src={neibour_elan_1} alt="Main building" className="object-cover h-full w-full" />

            {/* Thumbnails */}
            <div className="absolute left-4 bottom-5 flex gap-3">
              {thumbnails.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Neighbour thumbnail ${idx + 1}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover border-4 border-white rounded"
                />
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {features.map((feat) => (
              <div
                key={feat.label}
                className="flex items-center bg-white rounded px-4 py-4 shadow-sm font-semibold text-lg text-[#212121] border border-[#fed233]/20"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-[#fed233] text-[#23313b] rounded mr-3 text-xl">
                  {feat.icon}
                </div>
                {feat.label}
                <span className="ml-auto text-[#fed233] text-xl font-bold">+</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Feature Card */}
        <div className="lg:w-1/3 w-full">
          <div className="bg-white rounded-lg shadow p-0 pb-6 flex flex-col overflow-hidden transition hover:shadow-lg border border-[#fed233]/20">
            <div className="relative">
              <img src={img2} alt="Shopping Center" className="w-full h-44 object-cover" />
              <div className="absolute top-3 left-3 bg-white/80 rounded px-3 py-1 text-xs font-medium shadow-sm">
                5 PROPERTIES
              </div>
            </div>

            <div className="px-6 mt-5">
              <div className="font-bold text-lg mb-1">Shopping Center</div>
              <div className="text-[#fed233] text-sm mb-2">
                1,500m <span className="ml-2 text-[#888c94]">/ 21 min. walk</span>
              </div>
              <div className="text-gray-500 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Enim ullamco laboris.
              </div>
              <a
                href="#"
                className="text-[#fed233] font-medium text-sm hover:underline transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:ring-offset-2 rounded"
              >
                View Property <span className="ml-1">&#8594;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Neighbourhood;

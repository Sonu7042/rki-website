import React from "react";
import img1 from "../assets/Home_pics/img1.jpg";
import img2 from "../assets/Home_pics/img2.jpg";
import img3 from "../assets/Home_pics/img3.jpg";

const services = [
  {
    title: "Buy a home",
    description:
      "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    link: "Find A Home →",
    icon: (
      // Replace below SVGs with your actual icons/images
      <svg
        className="w-16 h-16 mx-auto text-[#fd5a3e]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" r="21" stroke="#fd5a3e" strokeWidth="8" />
        <path
          d="M12 24l12-12 12 12"
          stroke="#fd5a3e"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="18"
          y="24"
          width="12"
          height="12"
          stroke="#fd5a3e"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    highlight: true,
  },
  {
    title: "Rent a home",
    description:
      "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    link: "Find A Home →",
    icon: (
      <svg
        className="w-16 h-16 mx-auto text-[#fd5a3e]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" r="21" stroke="#fd5a3e" strokeWidth="8" />
        <path
          d="M18 28h12M18 24h10"
          stroke="#fd5a3e"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="18"
          y="24"
          width="12"
          height="12"
          stroke="#fd5a3e"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Sell a home",
    description:
      "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    link: "Find A Home →",
    icon: (
      <svg
        className="w-16 h-16 mx-auto text-[#fd5a3e]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" r="21" stroke="#fd5a3e" strokeWidth="8" />
        <path d="M16 32l8-8 8 8" stroke="#fd5a3e" strokeWidth="2" fill="none" />
        <rect
          x="18"
          y="24"
          width="12"
          height="12"
          stroke="#fd5a3e"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    highlight: false,
  },
];


const Services = () => {
  const plans = [
    "The Studio",
    "Deluxe Portion",
    "Penthouse",
    "Top Garden",
    "Double Height",
  ];


 


  return (
    <>
      <section className="py-10 px-4 sm:px-8 bg-white">
        <p className="text-[#fd5a3e] font-semibold mb-0 text-3xl text-center">
          Our Services
        </p>
        <div className="text-center mb-6 mt-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-6">
            Our Main Focus
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
          {services.map((svc, idx) => (
            <div
              key={svc.title}
              className={`bg-white rounded-lg shadow-lg p-8 text-center flex flex-col justify-between transition
            ${
              svc.highlight
                ? "border-b-4 border-[#fd5a3e]"
                : "border-b-4 border-transparent"
            }`}
            >
              <div>
                <div className="mb-5">{svc.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-[#212121]">
                  {svc.title}
                </h3>
                <p className="text-gray-500 mb-8">{svc.description}</p>
              </div>
              <a
                href="#"
                className={`font-semibold text-[#fd5a3e] hover:underline transition duration-150`}
              >
                {svc.link}
              </a>
            </div>
          ))}
        </div>
      </section>


     

      <section className="py-8 sm:py-1 bg-white">
        <p className="text-[#fd5a3e] font-semibold mb-0 text-2xl text-center">
          Apartment Sketch
        </p>

        <div className="text-center mb-6 sm:mb-10 px-4 mt-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#212121]">
            Apartments Plan
          </h2>
        </div>
        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-7 mb-8 sm:mb-10 text-sm sm:text-base font-medium">
          {plans.map((plan) => (
            <button
              key={plan}
              className={`pb-1 ${
                plan === "Double Height"
                  ? "text-[#fd5a3e] border-b-2 border-[#fd5a3e]"
                  : "text-[#212121] hover:text-[#fd5a3e]"
              } transition`}
            >
              {plan}
            </button>
          ))}
        </div>




        {/* Main Content */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 items-center justify-center px-4 sm:px-0">
          {/* Info Section */}
          <div className="bg-[#f6fbfc] rounded-lg p-6 sm:p-8 w-full lg:w-1/2 shadow-sm mb-6 lg:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Double Height
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-5 leading-relaxed">
              Enimad minim veniam quis nostrud exercitation ullamco laboris.
              Lorem ipsum dolor sit amet cons. Aetetur adipisicing elit, sed do
              eiusmod tempor. Incididunt labore et dolore magna aliqua, sed avid
              minim veniam.
            </p>
            <div className="space-y-2 text-sm sm:text-base">
              {[
                ["Total Area", "2800 Sq. Ft"],
                ["Bedroom", "150 Sq. Ft"],
                ["Bathroom", "45 Sq. Ft"],
                ["Balcony/Pets", "Allowed"],
                ["Lounge", "650 Sq. Ft"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between border-b border-dashed border-gray-300 pb-1"
                >
                  <span>{label}</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Blueprint Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={img1} // Replace with your actual plan image/SVG path
              alt="Apartment Sketch"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>


        
      </section>

   
    </>
  );
};

export default Services;

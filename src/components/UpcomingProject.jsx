import React from 'react'
import upcoming_project_1 from '../assets/upcoming_project_elan_1.jpg'
import upcoming_project_2 from '../assets/upcoming_project_elan_2.jpg'


const UpcomingProject = () => {
  return (
    <>
      <section className="py-12 bg-white h-[100vh] px-4">
        {/* Background Section */}
        <div className="relative w-full mx-auto">
          {/* Main Background Image + Text Overlay */}
          <div className="flex items-center h-[423px] justify-center bg-gray-800 rounded-lg overflow-hidden min-h-[260px] relative">
            <img
              src={upcoming_project_1}
              alt="Project background"
              className="absolute w-full h-full object-cover opacity-70"
            />

            <div className="relative z-10 flex flex-col md:flex-row w-full px-7 py-8">
              <div className="flex-1 text-white md:pl-12">
                <span className="text-xs font-semibold uppercase mb-2 block text-[#fed233]">
                  Upcoming Projects
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-1">
                  Dream Living Space
                </h2>
                <h3 className="text-xl md:text-2xl font-bold mb-0">
                  Setting New Standards
                </h3>
              </div>

              {/* Arrows on Right */}
                {/* <div className="flex items-center space-x-2 md:pr-10 mt-6 md:mt-0 ml-auto">
                  <button
                    aria-label="Previous"
                    className="w-8 h-8 flex items-center justify-center bg-[#fed233] text-[#23313b] rounded transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:ring-offset-2"
                    type="button"
                  >
                    <span className="text-lg">&#8592;</span>
                  </button>

                  <button
                    aria-label="Next"
                    className="w-8 h-8 flex items-center justify-center bg-white border border-[#fed233]/40 text-[#23313b] rounded transition hover:bg-[#fed233]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:ring-offset-2"
                    type="button"
                  >
                    <span className="text-lg">&#8594;</span>
                  </button>
                </div> */}
            </div>
          </div>

          {/* Floating Card */}
          <div className="md:absolute md:top-2/3 left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[800px] mx-auto bg-white rounded-lg shadow-xl overflow-hidden md:flex mt-8 md:mt-0 border border-[#fed233]/20">
            <div className="md:w-2/5">
              <img
                src={upcoming_project_2}
                alt="Project Room"
                className="w-full h-full object-cover min-h-[200px]"
              />
            </div>

            <div className="md:w-3/5 px-7 py-6 bg-[#f8fbfb] flex flex-col justify-center">
              <span className="font-semibold text-[#fed233] text-sm mb-2">
                About Projects
              </span>
              <h3 className="text-2xl font-bold mb-6">Upcoming Projects</h3>

              <ul className="text-gray-700 text-sm mb-5 space-y-1">
                <li>
                  1. Project Name: <span className="font-semibold">Quarter</span>
                </li>
                <li>
                  2. Project Type: <span className="font-semibold">Apartment / Home</span>
                </li>
                <li>
                  3. Building Location: <span className="font-semibold">New York, USA</span>
                </li>
                <li>
                  4. No. Of Apartments: <span className="font-semibold">568</span>
                </li>
                <li>
                  5. Total Investment: <span className="font-semibold">$14,500,00</span>
                </li>
              </ul>

              {/* <button
                className="bg-[#fed233] text-[#23313b] font-semibold px-5 py-2 rounded transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:ring-offset-2"
                type="button"
              >
                Download Brochure
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UpcomingProject

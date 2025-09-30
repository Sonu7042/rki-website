import React from 'react'
import upcoming_project_1 from '../assets/upcoming_project_elan_1.jpg'
import upcoming_project_2 from '../assets/upcoming_project_elan_2.jpg'

const UpcomingProject = () => {
  return (
    <section className="py-12 bg-white px-4">
      {/* Background Section */}
      <div className="relative w-full mx-auto">
        {/* Main Background Image + Text Overlay */}
        <div className="flex items-center justify-center rounded-lg overflow-hidden relative min-h-[260px] h-[300px] sm:h-[380px] md:h-[423px] bg-gray-800">
          <img
            src={upcoming_project_1}
            alt="Project background"
            className="absolute w-full h-full object-cover opacity-70"
          />

          <div className="relative z-10 flex flex-col md:flex-row w-full px-5 sm:px-7 py-6 sm:py-8">
            <div className="flex-1 text-white md:pl-12 text-center md:text-left">
              <span className="text-xs font-semibold uppercase mb-2 block text-[#fed233]">
                Upcoming Projects
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                Dream Living Space
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-0">
                Setting New Standards
              </h3>
            </div>
          </div>
        </div>

        {/* Floating Card */}
        <div className="w-full mt-8 md:mt-0 md:absolute md:top-2/3 left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-[800px] bg-white rounded-lg shadow-xl overflow-hidden border border-[#fed233]/20 flex flex-col md:flex-row">
          {/* Image Side */}
          <div className="w-full md:w-2/5">
            <img
              src={upcoming_project_2}
              alt="Project Room"
              className="w-full h-full object-cover min-h-[200px] md:min-h-[100%]"
            />
          </div>

          {/* Text Side */}
          <div className="w-full md:w-3/5 px-5 sm:px-7 py-6 bg-[#f8fbfb] flex flex-col justify-center">
            <span className="font-semibold text-[#fed233] text-sm mb-2">
              About Projects
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-6">
              Upcoming Projects
            </h3>

            <ul className="text-gray-700 text-sm sm:text-base mb-5 space-y-1">
              <li>
                1. Project Name: <span className="font-semibold">Quarter</span>
              </li>
              <li>
                2. Project Type:{' '}
                <span className="font-semibold">Apartment / Home</span>
              </li>
              <li>
                3. Building Location:{' '}
                <span className="font-semibold">New York, USA</span>
              </li>
              <li>
                4. No. Of Apartments:{' '}
                <span className="font-semibold">568</span>
              </li>
              <li>
                5. Total Investment:{' '}
                <span className="font-semibold">$14,500,00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingProject

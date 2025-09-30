import React, { useState } from "react";
import oxford_logo from '../assets/oxford_logo.png';
import oxford_text2 from '../assets/oxford_text2.png'
import rki_logo from '../assets/rki_logo.png'
import { Link } from "react-router-dom";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({
    home: false,
    about: false,
    property: false,
    news: false,
  });

  const toggleSubMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenMenus({
      home: false,
      about: false,
      property: false,
      news: false,
    });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm px-6 py-2 md:px-10  border-b border-[#fed233]/20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="#home" className="flex items-center shrink-0">
            <img
              src={rki_logo}
              alt="Oxford Logo"
              className="block h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-16 object-contain motion-safe:transition-transform motion-safe:duration-300 md:hover:scale-105"
              fetchPriority="high"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-14 text-[#23313b] font-medium text-base">
          <div className="relative group">
            <Link
              to={'/'}
              className="flex items-center hover:underline decoration-[#fed233] underline-offset-8 decoration-2 cursor-pointer"
            >
              Home
            </Link>
          </div>

          <div className="relative group">
            <Link
              to={'/about'}
              className="flex items-center hover:underline decoration-[#fed233] underline-offset-8 decoration-2 cursor-pointer"
            >
              About
            </Link>
          </div>

          <div className="relative group">
            <a
              href="#property"
              className="flex items-center hover:underline decoration-[#fed233] underline-offset-8 decoration-2 cursor-pointer"
            >
              Property
            </a>
          </div>
        </nav>

        {/* Contact Button (hidden on small) */}
        <div className="hidden md:block">
          <button
            className="bg-[#fed233] text-[#23313b] py-3 px-8 rounded shadow-md font-semibold hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:ring-offset-2 transition"
            type="button"
          >
            Contact Us
          </button>
        </div>  

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center text-[#fed233] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:ring-offset-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 border-t border-[#fed233]/30 pt-4 text-[#23313b] font-medium text-base">
          {["home", "about", "property"].map((menu) => (
            <div key={menu}>
              <button
                className="w-full text-left flex items-center justify-between hover:underline decoration-[#fed233] underline-offset-8 decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:ring-offset-2 rounded"
                onClick={() => toggleSubMenu(menu)}
              >
                <span className="capitalize">{menu}</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${openMenus[menu] ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          ))}
          <button
            className="w-full bg-[#fed233] text-[#23313b] py-3 rounded shadow-md font-semibold hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:ring-offset-2 transition"
            type="button"
            onClick={closeMenu}
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;

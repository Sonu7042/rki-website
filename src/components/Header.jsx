import React, { useEffect, useState } from "react";
import oxford_logo from '../assets/oxford_logo.png';
import oxford_text2 from '../assets/oxford_text2.png';
import rki_logo from '../assets/rki_logo.png';
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({
    home: false,
    about: false,
    property: false,
    news: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const toggleSubMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

 

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 bg-white border-b border-[#fed233]/20 ",
        // Mount animation: fade + slight slide-in from right
        "transition-[transform,opacity,box-shadow] duration-500 ease-out",
        mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2",
        // Respect reduced motion
        "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100"
      ].join(" ")}
    >
      {/* Narrow top bar */}
      <div className="h-[56px] md:h-[64px] px-4 md:px-8 flex items-center justify-between">
        {/* Logo (subtle slide-in) */}
        <a href="#home" className="flex items-center shrink-0">
          <img
            src={rki_logo}
            alt="Oxford Logo"
            className={[
              "block h-7 md:h-8 w-auto object-contain",
              "motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out",
              mounted ? "motion-safe:opacity-100 motion-safe:translate-x-0" : "motion-safe:opacity-0 motion-safe:translate-x-2",
              "motion-safe:delay-100",
              "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0"
            ].join(" ")}
            fetchPriority="high"
          />
        </a>

        {/* Desktop Navigation (staggered slide-in from right) */}
        <nav className="hidden md:flex gap-10 text-[#23313b] font-medium text-sm">
          {[
            { to: "/", label: "Home", delay: "delay-150" },
            { to: "/about", label: "About", delay: "delay-200" },
            { to: "/property", label: "Property", delay: "delay-300" }
          ].map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className={[
                  "flex items-center hover:underline decoration-[#fed233] underline-offset-8 decoration-2",
                  "motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out",
                  mounted ? "motion-safe:opacity-100 motion-safe:translate-x-0" : "motion-safe:opacity-0 motion-safe:translate-x-2",
                  `motion-safe:${item.delay}`,
                  "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0"
                ].join(" ")}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={[
                  "flex items-center hover:underline decoration-[#fed233] underline-offset-8 decoration-2",
                  "motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out",
                  mounted ? "motion-safe:opacity-100 motion-safe:translate-x-0" : "motion-safe:opacity-0 motion-safe:translate-x-2",
                  `motion-safe:${item.delay}`,
                  "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0"
                ].join(" ")}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Contact Button (slides in after nav) */}
        <div
          className={[
            "hidden md:block",
            "motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out motion-safe:delay-300",
            mounted ? "motion-safe:opacity-100 motion-safe:translate-x-0" : "motion-safe:opacity-0 motion-safe:translate-x-2",
            "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0"
          ].join(" ")}
        >
         <Link
          to="/contact"
          className="bg-[#fed233] text-[#23313b] py-2 px-6 rounded shadow-md font-semibold hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:ring-offset-2 transition text-sm"
        >
          Contact Us
        </Link>
        </div>

        {/* Mobile menu button (slides in) */}
        <button
          className={[
            "md:hidden flex items-center text-[#fed233] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:ring-offset-2 rounded",
            "motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out motion-safe:delay-200",
            mounted ? "motion-safe:opacity-100 motion-safe:translate-x-0" : "motion-safe:opacity-0 motion-safe:translate-x-2",
            "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0"
          ].join(" ")}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu (optional slide from right when open) */}
      {menuOpen && (
        <div
          className={[
            "md:hidden px-4 pt-3 pb-4 space-y-3 border-t border-[#fed233]/30 text-[#23313b] font-medium text-base",
            "motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out",
            "motion-safe:opacity-100 motion-safe:translate-x-0",
            "motion-reduce:transition-none"
          ].join(" ")}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/property", label: "Property" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)} // ✅ closes menu after click
              className="block w-full text-left hover:underline decoration-[#fed233] underline-offset-8 decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:ring-offset-2 rounded py-2"
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)} // ✅ also close menu after clicking Contact
            className="w-full inline-block text-center bg-[#fed233] text-[#23313b] py-2 rounded shadow-md font-semibold hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:ring-offset-2 transition"
          >
            Contact Us
          </Link>
        </div>
      )}

    </header>
  );
}

export default Header;

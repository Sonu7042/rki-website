import React, { useEffect, useState } from "react";

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <footer className="bg-[#171922] text-white py-12 px-4">
      <div
        className={[
          "max-w-screen-lg mx-auto",
          "grid grid-cols-1 gap-8",
          "sm:grid-cols-2",
          "lg:grid-cols-5",
          "gap-8",
          "motion-safe:transition-opacity motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out",
          mounted ? "motion-safe:opacity-100 motion-safe:-translate-y-0" : "motion-safe:opacity-0 motion-safe:-translate-y-8",
          "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
        ].join(" ")}
      >
        {/* Logo and Contact */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#fed233] text-2xl">🏠</span>
            <span className="font-bold text-xl">Quarter</span>
          </div>
          <p className="text-sm text-[#cccccc] mb-3">
            Lorem Ipsum is simply dummy text of the and typesetting industry.
          </p>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-[#fed233]">📍</span>
              Brooklyn, New York, United States
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#fed233]">📞</span>
              +0123-456789
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#fed233]">✉️</span>
              <a
                href="mailto:example@example.com"
                className="underline hover:text-[#fed233] focus:outline-none focus:ring-2 focus:ring-[#fed233] rounded"
              >
                example@example.com
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#fed233] transition cursor-pointer">About</li>
            <li className="hover:text-[#fed233] transition cursor-pointer">Blog</li>
            <li className="hover:text-[#fed233] transition cursor-pointer">All Products</li>
            <li className="hover:text-[#fed233] transition cursor-pointer">Locations Map</li>
            <li className="hover:text-[#fed233] transition cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Services</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#fed233] transition cursor-pointer">Order tracking</li>
            <li className="hover:text-[#fed233] transition cursor-pointer">Wish List</li>
            <li className="hover:text-[#fed233] transition cursor-pointer">Login</li>
            <li className="hover:text-[#fed233] transition cursor-pointer">My account</li>
            <li className="hover:text-[#fed233] transition cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Customer Care</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#fed233] transition cursor-pointer">Login</li>
            <li className="hover:text-[#fed233] transition cursor-pointer">My account</li>
            <li className="hover:text-[#fed233] transition cursor-pointer">Wish List</li>
            <li className="hover:text-[#fed233] transition cursor-pointer">Order tracking</li>
            <li className="hover:text-[#fed233] transition cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Newsletter</h4>
          <p className="text-sm text-[#cccccc] mb-4">
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email"
              className="rounded-l px-3 py-2 outline-none text-[#282828] w-full focus:ring-2 focus:ring-[#fed233]"
            />
            <button
              type="submit"
              className="bg-[#fed233] px-4 py-2 rounded-r text-[#233b] text-lg font-semibold flex items-center hover:brightness-95 focus:ring-2 focus:ring-[#fed233]"
            >
              ➤
            </button>
          </form>
          <div className="mt-4 h-px w-full bg-[#fed233]/20"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

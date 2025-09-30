import React from "react";

const Footer = () => (
  <footer className="bg-[#171922] text-white py-12 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      {/* Logo and Contact */}
      <div className="lg:col-span-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#fed233] text-2xl">🏠</span>
          <span className="font-bold text-xl">Quarter</span>
        </div>
        <p className="text-sm text-[#cccccc] mb-3">
          Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
        </p>
        <ul className="text-sm mt-4 space-y-2">
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
              className="hover:underline text-[#fed233] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:rounded"
            >
              example@example.com
            </a>
          </li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-semibold mb-3 text-lg">Company</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-[#fed233] transition">About</li>
          <li className="hover:text-[#fed233] transition">Blog</li>
          <li className="hover:text-[#fed233] transition">All Products</li>
          <li className="hover:text-[#fed233] transition">Locations Map</li>
          <li className="hover:text-[#fed233] transition">FAQ</li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-semibold mb-3 text-lg">Services</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-[#fed233] transition">Order tracking</li>
          <li className="hover:text-[#fed233] transition">Wish List</li>
          <li className="hover:text-[#fed233] transition">Login</li>
          <li className="hover:text-[#fed233] transition">My account</li>
          <li className="hover:text-[#fed233] transition">Terms & Conditions</li>
        </ul>
      </div>

      {/* Customer Care */}
      <div>
        <h4 className="font-semibold mb-3 text-lg">Customer Care</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-[#fed233] transition">Login</li>
          <li className="hover:text-[#fed233] transition">My account</li>
          <li className="hover:text-[#fed233] transition">Wish List</li>
          <li className="hover:text-[#fed233] transition">Order tracking</li>
          <li className="hover:text-[#fed233] transition">FAQ</li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h4 className="font-semibold mb-3 text-lg">Newsletter</h4>
        <p className="text-sm text-[#cccccc] mb-4">
          Subscribe to our weekly Newsletter and receive updates via email.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="Email*"
            className="rounded-l px-3 py-2 outline-none text-[#282828] w-full focus-visible:ring-2 focus-visible:ring-[#fed233]"
          />
          <button
            type="submit"
            className="bg-[#fed233] px-4 py-2 rounded-r text-[#23313b] text-lg font-bold flex items-center hover:brightness-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233]"
          >
            <span>➤</span>
          </button>
        </form>
        <div className="mt-4 h-px w-full bg-[#fed233]/20" />
      </div>
    </div>
  </footer>
);

export default Footer;

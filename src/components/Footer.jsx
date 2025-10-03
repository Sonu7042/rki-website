import React, { useEffect, useState } from "react";

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  // Contact form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "", // honeypot (leave empty)
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" }); // idle | submitting | success | error

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter a valid name.";
    // Very light email pattern; rely on type="email" for most validation
    if (!form.email.trim()) e.email = "Please enter an email.";
    // 10-15 digits; browser will enforce pattern on submit as well
    if (form.phone && !/^\d{10,15}$/.test(form.phone)) e.phone = "Enter 10–15 digits only.";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Honeypot: abort if filled
    if (form.company) return;
    const eMap = validate();
    if (Object.keys(eMap).length) {
      setErrors(eMap);
      setStatus({ state: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }
    try {
      setStatus({ state: "submitting", message: "" });
      // Replace with your API route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        }),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus({ state: "success", message: "Thanks! Your message has been sent." });
      setForm({ name: "", email: "", phone: "", message: "", company: "" });
    } catch (err) {
      setStatus({ state: "error", message: "Something went wrong, please try again." });
    }
  };

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
            <li className="hover:text-[#fed233] transition cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Us Form */}
        <div className="sm:col-span-2 lg:col-span-2">
          <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>

          {/* Status messages (live region) */}
          {status.state === "success" && (
            <div
              role="status"
              aria-live="polite"
              className="mb-4 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 px-3 py-2 text-sm"
            >
              {status.message}
            </div>
          )}
          {status.state === "error" && (
            <div
              role="alert"
              aria-live="assertive"
              className="mb-4 rounded-md border border-red-500/30 bg-red-500/10 text-red-300 px-3 py-2 text-sm"
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={onChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm mb-1">
                  Name <span className="text-[#fed233]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  required
                  minLength={2}
                  maxLength={80}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full rounded-md bg-[#1b1e2a] text-white placeholder-gray-400 border ${errors.name ? "border-red-500" : "border-white/10"} focus:outline-none focus:ring-2 focus:ring-[#fed233] focus:border-[#fed233] px-3 py-2`}
                  placeholder="Jane Doe"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-300">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm mb-1">
                  Email <span className="text-[#fed233]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full rounded-md bg-[#1b1e2a] text-white placeholder-gray-400 border ${errors.email ? "border-red-500" : "border-white/10"} focus:outline-none focus:ring-2 focus:ring-[#fed233] focus:border-[#fed233] px-3 py-2`}
                  placeholder="jane@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-300">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  inputMode="numeric"
                  pattern="^\d{10,15}$"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={`w-full rounded-md bg-[#1b1e2a] text-white placeholder-gray-400 border ${errors.phone ? "border-red-500" : "border-white/10"} focus:outline-none focus:ring-2 focus:ring-[#fed233] focus:border-[#fed233] px-3 py-2`}
                  placeholder="10–15 digit number"
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-xs text-red-300">
                    {errors.phone}
                  </p>
                )}
              </div>

             
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button
                type="submit"
                disabled={status.state === "submitting"}
                className={`inline-flex items-cent  er px-4 py-2 rounded-md bg-[#fed233] text-black hover:bg-[#ffd84d] focus:outline-none focus:ring-2 focus:ring-[#fed233] disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status.state === "submitting" ? "Sending..." : "Send Message"}
              </button>
              <span className="text-xs text-gray-400">
                Required fields are marked with an asterisk.
              </span>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

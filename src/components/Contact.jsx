import React, { useState } from "react";

const isValidPhoneNumber = (phone) => {
  // Simple regex to validate phone numbers like +1234567890, (123) 456-7890, 123-456-7890, etc.
  const regex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
  return regex.test(phone);
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else {
      // Basic email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!isValidPhoneNumber(formData.phone)) newErrors.phone = "Invalid phone number.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // On valid submission:
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md py-20">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>

      {submitted && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
          Thank you for reaching out! We'll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div>
          <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-600 mt-1 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@example.com"
            className={`w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className={`w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && <p className="text-red-600 mt-1 text-sm">{errors.phone}</p>}
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded font-semibold hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

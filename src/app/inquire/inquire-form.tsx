"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = "service_osuh7eq"; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = "template_1krfddr"; // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = "nQf1yyZBzmKhc_E3m"; // Replace with your EmailJS public key  


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "weddinggoosebumps@gmail.com", // Your receiving email
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      setStatus("Your inquiry has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Optional: Redirect to thank you page after 2 seconds
      setTimeout(() => {
        window.location.href = "/inquire?success=true";
      }, 2000);

    } catch (err) {
      console.error("Failed to send email:", err);
      setStatus("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-6 max-w-lg text-left"
    >
      {/* Name */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Email ID</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Contact No</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2"
          required
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={1}
          className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2 resize-none"
          required
        />
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-neutral-200 text-black uppercase tracking-wide text-sm disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Your Inquiry"}
      </motion.button>

      {status && (
        <p className="text-sm mt-2 text-gray-700">
          {status}
        </p>
      )}
    </form>
  );
}

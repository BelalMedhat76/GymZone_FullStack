"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("/api/contact", formData);
      if (response.status === 200) {
        setStatus("Message Sent Successfully! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong! ❌");
      }
    } catch (error) {
      setStatus("Error sending message! ❌");
    }
  };

  return (
    <section className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>

        <motion.form
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded mb-4"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded mb-4"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border rounded mb-4"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="w-full px-6 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors">
            Send Message
          </button>

          <p className="mt-4 text-sm">{status}</p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

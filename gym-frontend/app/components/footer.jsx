"use client";  // Add this at the top

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        {/* Logo & Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Gym Power 💪</h2>
          <ul className="flex justify-center gap-6 mb-6">
            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#programs" className="hover:text-blue-400 transition">Programs</a></li>
            <li><a href="#pricing" className="hover:text-blue-400 transition">Pricing</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="flex justify-center gap-6 text-2xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" className="hover:text-red-500 transition">
            <FaYoutube />
          </a>
        </motion.div>

        {/* Copyright */}
        <p className="text-sm">&copy; 2025 Gym Power. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

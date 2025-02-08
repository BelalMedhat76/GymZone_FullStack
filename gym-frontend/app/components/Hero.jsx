"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/back3.jpg')" }}>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-white px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          Transform Your Body, Transform Your Life
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300">
          Join our gym and start your fitness journey today!
        </p>
        <div className="mt-6">
          <Link href="/programs" className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg text-lg hover:bg-yellow-500 transition duration-300">
            View Programs
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

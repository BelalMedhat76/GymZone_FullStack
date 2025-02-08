"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className=" text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center"       style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.15)), url('/back5.jpg')" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold drop-shadow-lg"
        >
          Welcome to <span className="text-blue-500">Gym Zone</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg mt-4 max-w-xl bg-black bg-opacity-50 px-4 py-2 rounded-lg"
        >
          Elevate your fitness journey with state-of-the-art equipment, expert trainers, and a supportive community.
        </motion.p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Top Equipment", "Expert Trainers", "Flexible Memberships"].map((item, index) => (
            <motion.div
              key={index}
              className=" bg-slate-800 p-6 rounded-lg shadow-xl hover:scale-110 transform transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-300">{item}</h3>
              <p className="text-gray-300">Experience the best in class fitness training and equipment.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center text-white bg-slate-900">
        <h2 className="text-4xl font-bold mb-4">Join Us Today!</h2>
        <p className="mb-6">Start your fitness journey with Elite Fitness.</p>
        <motion.button
          className="px-6 py-3 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-700 transition-transform transform hover:scale-110"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
};

export default About;

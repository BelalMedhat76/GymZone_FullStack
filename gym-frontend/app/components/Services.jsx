"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Weight Loss",
    description: "Burn fat and achieve your dream body with our weight loss programs.",
    image: "/back7.jpg",
  },
  {
    title: "Strength Training",
    description: "Build muscle and get stronger with expert-led strength workouts.",
    image: "/back5.jpg",
  },
  {
    title: "Cardio Fitness",
    description: "Improve endurance and heart health with our cardio sessions.",
    image: "/back4.jpg",
  },
  {
    title: "Personal Training",
    description: "Get 1-on-1 training from professional fitness coaches.",
    image: "/back2.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-900  text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Our Fitness Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-opacity-90 backdrop-blur-md bg-white/10 p-3  overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-300 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

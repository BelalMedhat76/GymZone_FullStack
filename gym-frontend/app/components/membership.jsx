import React from "react";
import { motion } from "framer-motion";

const MembershipOptions = () => {
  const amenities = [
    { name: "Pool And Jacuzzi", image: "/back1.jpg" },
    { name: "Studios", image: "/back2.jpg" },
    { name: "Lounge and Cafe", image: "/back3.jpg" },
    { name: "Sauna", image: "/back4.jpg" },
    { name: "Outdoor Spaces", image: "/back5.jpg" },
    { name: "Basketball Court", image: "/back7.jpg" },
  ];

  return (
    <div 
      className="bg-cover bg-center bg-fixed min-h-screen text-white flex flex-col items-center justify-center px-4 py-20" 
      style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.15)), url('/back1.jpg')" }}
    >
      <motion.h2 
        className="text-3xl font-bold mt-12 mb-6 bg-black bg-opacity-50 px-4 py-2 rounded-lg" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: .3 }}
      >
        Amenities
      </motion.h2>
      
      <p className="text-lg text-center max-w-2xl mb-8 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
        Modern design and comfortable, all-inclusive luxury. Enjoy our extensive range of amenities, including outdoor terraces, in a space unlike any other in the city.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            className="relative bg-cover bg-center h-48 flex items-center justify-center rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundImage: `url('${amenity.image}')` }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .3, delay: index * 0.2 }}
            whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
          >
            
            <button className=" bg-opacity-50 text-white px-6 py-2 rounded-lg text-lg font-bold absolute inset-0 flex items-center justify-center hover:bg-opacity-75 transition duration-300">
            
        <motion.p    className="text-1xl font-bold mt-12 mb-6 bg-black bg-opacity-50 px-4 py-2 rounded-lg" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: .3 }}>

{amenity.name}

        </motion.p>
         


            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MembershipOptions;

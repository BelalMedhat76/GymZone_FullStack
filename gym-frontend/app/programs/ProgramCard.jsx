"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProgramCard = ({ program }) => {
  const imageUrl = program.image.startsWith("http")
    ? program.image
    : `http://localhost:8000${program.image}`;

  return (
    <Link href={`/programs/${program.id}`} passHref>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer bg-opacity-90 h-[400px] bg-white/10 shadow-lg rounded-lg p-4"
      >
        <Image
          src={imageUrl}
          alt="error"
          width={400}
          height={250}
          className="w-full h-60 rounded-lg object-cover"
        />
        <h3 className="text-xl text-white font-bold mt-2">{program.name}</h3>
        <p className="text-gray-400">{program.description.substring(0, 100)}...</p>
        <p className="text-green-500 font-bold mt-2">${program.price}</p>
      </motion.div>
    </Link>
  );
};

export default ProgramCard;

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ProgramDetails = () => {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/api/programs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProgram(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching program:", err);
        setLoading(false);
      });
  }, [id]);

  const handleJoinProgram = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/join-program/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ programId: id }),
      });

      if (response.ok) {
        setAlertMessage("Successfully joined the program! 🎉");
      } else {
        setAlertMessage("Failed to join the program. Please try again.");
      }
    } catch (error) {
      console.error("Error joining program:", error);
      setAlertMessage("Something went wrong! 🚨");
    }

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {loading ? (
        <p className="text-white text-2xl">Loading...</p>
      ) : program ? (
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="relative w-full"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {program.image ? (
              <Image
                src={program.image.startsWith("http") ? program.image : `http://localhost:8000${program.image}`}
                alt={program.name}
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            ) : (
              <div className="w-full h-[400px] bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-white">No Image Available</p>
              </div>
            )}
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold bg-white/10 text-white px-6 py-2 rounded-lg text-center md:text-left">
              {program.name || "Program Name"}
            </h1>
            <p className="text-lg bg-white/10 px-6 py-4 rounded-lg shadow-md">
              {program.description || "No description available."}
            </p>
            <p className="text-green-500 text-2xl font-bold">${program.price || "0.00"}</p>

            <motion.button
              className="px-8 py-3 text-lg font-bold bg-green-500 text-black rounded-lg shadow-md hover:bg-green-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleJoinProgram}
            >
              Join This Program
            </motion.button>
          </motion.div>
        </div>
      ) : (
        <p className="text-red-500 text-2xl">Program not found.</p>
      )}

      <AnimatePresence>
        {showAlert && (
          <motion.div
            className="fixed top-10 right-5 bg-green-500 text-black px-6 py-3 rounded-lg shadow-lg font-bold text-lg"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {alertMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProgramDetails;

// import { motion } from "framer-motion";
// import ProgramCard from "./ProgramCard";

// const ProgramsList = ({ programs }) => {
//   return (
//     <motion.div
//       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6"
//       initial="hidden"
//       animate="visible"
//       variants={{
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
//       }}
//     >
//       {programs.map((program) => (
//         <motion.div key={program.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
//           <ProgramCard program={program} />
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export default ProgramsList;
import ProgramCard from "./ProgramCard";

const ProgramsList = ({ programs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
};

export default ProgramsList;

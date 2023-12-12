import React from "react";
import { motion } from 'framer-motion';
import image from "../assets/assets/WhatsApp Image 2023-12-07 at 7.17.28 PM.jpeg";

function ProjectCards() {
  return (
    <motion.div
      whileHover={{ boxShadow: "0 0 50px rgba(58, 26, 97, 1)",scale:1.02 }}
      className="w-80 h-80 mt-12 rounded-lg shadow-lg flex justify-center mx-4 relative overflow-x-hidden"
      style={{ background: 'linear-gradient(90deg, rgba(56,42,106,0.7) 0%, rgba(115,0,255,0.8) 53%, rgba(63,21,144,0.5) 100%)', overflow: 'hidden' }}
    >
      <motion.div className="bg-violet-200 w-full mx-4 rounded-lg flex justify-center text-center z-10 mt-2" whileHover={{ rotate: 2,scale:1.05,y:10 }}>
        <img src={image} alt="" className="rounded-lg" />
      </motion.div>
      <div className="w-full  h-2/6 absolute bottom-0 z-20 text-center rounded-b-lg shadow-lg" style={{ backgroundColor: '#130c1c' }}>
        <p className="font-semibold text-violet-400 text-2xl">Dream Home</p>
      </div>
    </motion.div>
  );
}

export default ProjectCards;

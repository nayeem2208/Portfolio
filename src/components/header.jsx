import React from "react";
import logo from "../assets/assets/mohamed-nayeem-ce-high-resolution-logo-transparent.png";
import { motion } from "framer-motion";


function Header() {
  return (
    <div className="w-full h-24 font-bold p-6 flex flex-col sm:flex-row justify-between items-center">
      <div className="mb-4 sm:mb-0 ">
        <motion.img
          src={logo}
          alt="Logo"
          whileTap={{ scale: 1000 }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 150 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-16 sm:h-24 md:mt-4" // Adjust the height for small and medium screens
        />
      </div>
    </div>
  );
}

export default Header;

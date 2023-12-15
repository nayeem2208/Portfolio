import React, { useEffect, useState } from "react";
import image from "../assets/assets/WhatsApp Image 2023-12-07 at 7.17.28 PM.jpeg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home() {
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const content = "Full stack developer";
  const [first, setFirst] = useState(true);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (charIndex <= content.length && first) {
        setText(content.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === content.length) setFirst(false);
      } else if (!first) {
        setText(content.substring(0, charIndex + 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 1) {
          setFirst(true);
        }
      }
    }, 70);

    return () => clearTimeout(typingTimer);
  }, [charIndex, content]);

  return (
    <div className="sm:flex mt-8 px-6">
      <div className="sm:w-3/5 w-full flex justify-center items-center">
        <div className="text-center sm:text-left text-violet-400 mx-4 ">
          <motion.p
            className="sm:text-3xl text-lg sm:mt-1 mt-12 font-bold"
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            initial={{ x: -2000 }}
          >
            Hey, I'm
          </motion.p>
          <motion.p
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold sm:font-black"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 150, opacity: 0 }}
            whileHover={{
              textShadow: "0 0 40px rgba(69, 2, 150, 1)",
              scale:1.05
            }}
            transition={{ duration: 0.5, delay: 1 }}
            
          >
            {" "}
            Mohamed Nayeem CE
          </motion.p>

          <motion.p
            className="text-lg sm:text-2xl "
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            initial={{ x: -2000 }}
          >
            {text}
          </motion.p>
          <div className="flex text-2xl mt-2  mb-12 md:mb-0 justify-center sm:justify-start">
            <motion.a href="https://www.linkedin.com/in/mohamed-nayeem-c-e-523188207/" target="_blank" rel="noreferrer" whileHover={{scale:1.5}}><FaLinkedin className="mr-2"/></motion.a>
            <motion.a href="https://github.com/nayeem2208" target="_blank" rel="noreferrer" whileHover={{scale:1.5}}><FaGithub className="mx-2"/ ></motion.a>
            <motion.a href="https://leetcode.com/nayeemce/" target="_blank" rel="noreferrer" whileHover={{scale:1.5}}><SiLeetcode className="mx-2"/></motion.a>
          </div>
        </div>
      </div>
      <div className="sm:w-2/5 px-4 sm:px-0">
        <motion.img
          whileHover={{
            scale: "1.02",
            filter: "saturate(1)",
          }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          initial={{ filter: "saturate(0.1) hue-rotate(-30deg)", x: -2000 }}
          src={image}
          alt=""
          className="rounded-lg shadow-xl w-full"
          style={{ maxWidth: "75vh" }}
        />
      </div>
    </div>
  );
}

export default Home;

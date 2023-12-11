import React, { useEffect, useState } from "react";
import image from "../assets/assets/WhatsApp Image 2023-12-07 at 7.17.28 PM.jpeg";
import { motion } from "framer-motion";

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
        if (charIndex == content.length) setFirst(false);
      } else if (!first) {
        setText(content.substring(0, charIndex + 1));
        setCharIndex(charIndex - 1);
        if (charIndex == 1) {
          setFirst(true);
        }
      }
    }, 70);

    return () => clearTimeout(typingTimer);
  }, [charIndex, content]);
  return (
    <div className="flex mt-8">
      <div className="w-3/5 flex justify-center items-center">
        <div className="text-violet-400 ">
          <motion.p
            className="font-semibold text-2xl"
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{scale:1.05}}
            style={{ fontSize: "9vh" }}
            initial={{ x: 2000 }}
          >
            Mohamed Nayeem CE
          </motion.p>
          <motion.p
            className="mt-3 text-2xl"
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            initial={{ x: 2000 }}
          >
            {text}
          </motion.p>
        </div>
      </div>
      <div className="w-2/5">
        <motion.img
          whileHover={{
            scale: "1.02",
            filter: "saturate(1)", // Adjust the value as needed (0.7 decreases saturation)
          }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          initial={{ filter: "saturate(0.1)", x: -2000 }}
          src={image}
          alt=""
          className="rounded-lg shadow-xl"
          style={{ height: "75vh" }}
        />
      </div>
    </div>
  );
}

export default Home;

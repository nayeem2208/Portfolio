import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Aboutme() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControll = useAnimation();
  const colorControll = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControll.start("visible");
      colorControll.start("visible");
    }
    
  }, [inView]);

  return (
    <div className="p-12 mt-8 overflow-x-hidden " ref={ref}>
      <motion.p
        whileHover={{
          color: "rgba(232, 217, 250)",
          x: 20,
          scale: "1.02",
          textShadow: "0 0 40px rgba(115, 0, 255, 0.8)",
        }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControll}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-bold text-5xl flex text-violet-400 justify-center mt-12 mb-24"
      >
        {" "}
        About Me
      </motion.p>
      <motion.div
        className="flex"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControll}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="w-3/6 relative">
          <img src="" alt="" className="w-48 h-48 " />
        </div>
        <div className="w-3/6 text-lg pr-8 mr-12 relative">
          <motion.div
            className="bg-violet-800 "
            variants={{
              hidden: { left: 0 },
              visible: { left: "120%"},
            }}
            initial="hidden"
            animate={colorControll}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{
              zIndex: 1,
              position: "absolute",
              top: 0,
              right: 0,
              width: "120vh",
              height: "60vh",
            }}
          ></motion.div>
          <motion.p className="text-violet-400" whileHover={{ scale: 1.01 }}>
            Hello, I'm{" "}
            <motion.span
              className="font-bold text-violet-300"
              animate={{ y: [-5, 0, 5, 0, -5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Mohamed Nayeem CE
            </motion.span>
            , a passionate{" "}
            <span className="font-bold text-violet-300">
              MERN full-stack developer
            </span>{" "}
            with expertise in crafting dynamic and scalable web applications.
            Proficient in{" "}
            <span className="font-bold text-violet-300">
              MongoDB, Express, ReactJS, and NodeJS,
            </span>{" "}
            I bring a blend of front-end finesse and back-end efficiency to
            every project. What sets me apart is my continuous commitment to
            self-learning. I thrive on exploring new technologies and staying
            ahead of industry trends. With a sharp analytical mind and effective
            problem-solving skills, I'm dedicated to delivering high-quality
            solutions. Beyond code, my excellent communication and interpersonal
            skills make me a valuable collaborator in any team setting. Excited
            about the endless possibilities of web development, I look forward
            to contributing my skills and enthusiasm to create impactful digital
            experiences.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default Aboutme;

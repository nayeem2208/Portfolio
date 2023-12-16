import React, { useEffect, useRef,Suspense } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import './button.css'
import cv from '../assets/assets/Nayeem full stack developer-5.pdf'
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Scene from '../../public/Scene'

function Aboutme() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControll = useAnimation();
  const colorControll = useAnimation();

  useEffect(() => {
    if (inView) {
      console.log(inView,'inview')
      mainControll.start("visible");
      colorControll.start("visible");
    }
    
  }, [inView]);
  

  return (
    <div className=" p-4 md:p-12 mt-8 overflow-x-hidden " ref={ref}>
      <motion.p
        whileHover={{
          x: 20,
          scale: "1.02",
          textShadow: "0 0 40px rgba(69, 2, 150, 1)",
          // textShadow: "0 0 40px rgba(115, 0, 255, 0.8)",
        }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControll}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="font-bold text-5xl flex text-violet-400 justify-center mt-12 mb-24"
      >
        {" "}
        About Me
      </motion.p>
      <motion.div
        className="md:flex "
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControll}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className=" w-full sm:w-3/6 relative mx-3">
          <Canvas camera={{ position: [-4, 3, 6]}} >
            <ambientLight/>
            <OrbitControls autoRotate/>
            <Suspense fallback={null}>
              <Scene/>
            </Suspense>
            <Environment preset="sunset"/>
          </Canvas>
        </div>
        <div className="md:w-3/6 text-lg md:pr-8 md:mr-12 relative mt-8 md:mt-0">
         
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
            skills make me a valuable collaborator in any team setting.
          </motion.p>
          <a href={cv} target='_blank'  rel="noreferrer">
          <button className="btn mt-2">Resume</button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Aboutme;
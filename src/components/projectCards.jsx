import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";

function ProjectCards({ project, onClick }) {
  const [description, SetDescription] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const colorControll = useAnimation();

  useEffect(() => {
    if (inView) {
      colorControll.start("visible");
    }
  }, [inView]);
  useEffect(() => {
    const title = project.description.substring(0, 60);
    SetDescription(title);
  }, []);

  return (
    <motion.div
      onClick={onClick}
      ref={ref}
      whileHover={{ boxShadow: "0 0 50px rgba(58, 26, 97, 1)", scale: 1.02 }}
      className="w-80 h-80 mt-12 rounded-lg shadow-lg flex justify-center mx-4 relative overflow-x-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(56,42,106,0.7) 0%, rgba(115,0,255,0.5) 53%, rgba(63,21,144,0.5) 100%)",
        overflow: "hidden",
      }}
    >
      <motion.div
        className="bg-violet-200 w-full mx-4 rounded-lg flex justify-center text-center z-10 mt-2"
        whileHover={{ rotate: 2, scale: 1.05, y: 10 }}
      >
        <motion.img
          whileHover={{
            filter: "saturate(1)",
          }}
          src={project.image}
          initial={{ filter: "saturate(0)" }}
          alt=""
          className="rounded-lg w-full h-full"
        />
      </motion.div>
      <div
        className="w-full  h-2/6 absolute bottom-0 z-20 text-center rounded-b-lg shadow-lg px-2 "
        style={{ backgroundColor: "#130c1c" }}
      >
        <div  className="flex justify-between mx-2">
          <p className="font-semibold text-violet-500 text-2xl">
            {project.name}</p>
            <a href={project.git} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <IoLogoGithub className="ml-4 mt-1 text-violet-400 w-6 h-6" />
            </a>
          
        </div>
        <div>
          <p className="text-violet-900 text-md">
            {description} <span className="text-violet-400"> Seemore</span>
          </p>
        </div>
      </div>
      <motion.div
        className="bg-violet-800 "
        variants={{
          hidden: { left: 0 },
          visible: { left: "120%" },
        }}
        initial="hidden"
        animate={colorControll}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          zIndex: 20,
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100%",
          height: "55vh",
        }}
      ></motion.div>
    </motion.div>
  );
}

export default ProjectCards;

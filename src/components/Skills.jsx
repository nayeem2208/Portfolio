import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  RiJavascriptFill,
  RiStarFill,
  RiStarHalfFill,
  RiStarLine,
} from "react-icons/ri";
import {
  FaReact,
  FaNode,
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiPostman,
  SiFirebase,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiTypescript,
  SiRazorpay,
  SiFramer,
  SiSocketdotio,
  SiRedux,
} from "react-icons/si";

import { BiLogoFigma } from "react-icons/bi";
import { DiNginx } from "react-icons/di";

function SkillRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <RiStarFill key={i} className="w-3 h-3 mx-2 text-violet-400" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <RiStarHalfFill key="half" className="w-3 h-3 mx-1 text-violet-400" />
      );
    }
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <RiStarLine key={`empty-${i}`} className="w-3 h-3 mx-1 text-gray-400" />
      );
    }
    return stars;
  };

  return <div className="flex justify-center mb-12">{renderStars()}</div>;
}


function Skills() {
  const ref1 = useRef(null);
  const inView = useInView(ref1, { once: true });
  const mainControll = useAnimation();
  const colorControll = useAnimation();
  useEffect(() => {
    if (inView) {
      mainControll.start("visible");
      colorControll.start("visible");
    }
  }, [inView]);
  return (
    <motion.div className="md:px-12 lg:px-48"   >
      <motion.p
      ref={ref1}
        className="text-5xl font-bold text-violet-400 flex mt-8 mb-24 justify-center"
        whileHover={{ scale: 1.2, textShadow: "0 0 40px rgba(69, 2, 150, 1)" }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControll}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Skills
      </motion.p>
      <div className="flex flex-wrap text-violet-400 px-6 justify-center mt-12 mb-24">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5", }}
            className="icon-container"
          >
            <RiJavascriptFill className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={5} />
          </motion.div>
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <FaReact className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={5} />
          </motion.div>
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <SiMongodb className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={4} />
          </motion.div>
        </a>
        <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <FaNode className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={4} />
          </motion.div>
        </a>
        <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container "
          >
            <p className="font-bold mt-2 mx-16 mb-9 text-lg ">Express Js</p>
            <SkillRating rating={5} />
            
          </motion.div>
        </a>
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <FaBootstrap className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={5} />
          </motion.div>
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <SiTailwindcss className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={5} />
          </motion.div>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <FaCss3Alt className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={4} />
          </motion.div>
        </a>
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <FaFigma className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={5} />
          </motion.div>
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <FaGitAlt className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={4} />
          </motion.div>
        </a>
        <a
          href="https://www.w3schools.com/html/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <FaHtml5 className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={5} />
          </motion.div>
        </a>
        <a href="https://www.nginx.com/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <DiNginx className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={3} />
          </motion.div>
        </a>
        <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <SiPostgresql className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={3} />
          </motion.div>
        </a>
        <a href="https://www.postman.com/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <SiPostman className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={5} />
          </motion.div>
        </a>
        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <SiFirebase className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={3} />
          </motion.div>
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <FaGithub className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={5} />
          </motion.div>
        </a>
        <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container "
          >
            <p className="font-bold mt-2 mx-16 mb-9 text-lg ">JWT</p>
            <SkillRating rating={4} />
            
          </motion.div>
        </a>
        <a
          href="https://www.adobe.com/in/products/illustrator.html"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <SiAdobeillustrator className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={3} />
          </motion.div>
        </a>
        <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <SiAdobephotoshop className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={4} />
          </motion.div>
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <SiTypescript className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={3} />
          </motion.div>
        </a>
        <a href="https://razorpay.com/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <SiRazorpay className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={3} />
          </motion.div>
        </a>
        <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <FaAws className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={3} />
          </motion.div>
        </a>
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <SiFramer className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={4} />
          </motion.div>
        </a>
        <a
          href="https://socket.io/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <SiSocketdotio className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={4} />
          </motion.div>
        </a>
        <a
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2, color: "#dfd0f5" }}
            className="icon-container"
          >
            <SiRedux  className="w-14 h-14 mx-16 mb-4" />
            <SkillRating rating={3} />
          </motion.div>
        </a>
        
      </div>
    </motion.div>
  );
}

export default Skills;

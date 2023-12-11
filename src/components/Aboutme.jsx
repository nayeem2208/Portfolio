import React from "react";
import {motion} from 'framer-motion'

function Aboutme() {
  return (
    <div className="p-12 mt-8 ">
<motion.p
  whileHover={{
    color:'rgba(232, 217, 250)',
    x: 20,
    scale: '1.02',
    textShadow: '0 0 40px rgba(115, 0, 255, 0.8)', // Add a glow-like text shadow
    background: 'linear-gradient(90deg, rgba(100, 25, 191, 0.1), transparent)', // Add a gradient background
  }}
  initial={{ scale: '1' }}
  className="font-bold text-3xl flex text-violet-400 justify-center my-12"
>      About Me</motion.p>
      <div className="flex">
        <div className="w-3/6 ">
          <img src="" alt="" className="w-48 h-48 " />
        </div>
        <div className="w-3/6 text-lg pr-8 mr-12">
          <p className="text-violet-400">
            Hello, I'm <span className="font-bold">Mohamed Nayeem CE</span>, a passionate MERN full-stack developer with
            expertise in crafting dynamic and scalable web applications.
            Proficient in MongoDB, Express, ReactJS, and NodeJS, I bring a blend
            of front-end finesse and back-end efficiency to every project. What
            sets me apart is my continuous commitment to self-learning. I thrive
            on exploring new technologies and staying ahead of industry trends.
            With a sharp analytical mind and effective problem-solving skills,
            I'm dedicated to delivering high-quality solutions. Beyond code, my
            excellent communication and interpersonal skills make me a valuable
            collaborator in any team setting. Excited about the endless
            possibilities of web development, I look forward to contributing my
            skills and enthusiasm to create impactful digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;

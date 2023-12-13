import React from 'react'
import ProjectCards from './projectCards'
import image from "../assets/assets/framer-motion todo.gif";


function Projects() {
  return (
    <div className="p-12 mt-24 flex flex-col justify-center items-center">
  <p className="text-5xl font-bold text-violet-400 flex justify-center">
    Projects
  </p>
  <div className="grid grid-cols-3 gap-4 flex justify-items-center mt-12">
    <ProjectCards />
    <ProjectCards />
    <ProjectCards />
    <ProjectCards />
    <ProjectCards />
    <ProjectCards />
    
  </div>
</div>

  )
}

export default Projects

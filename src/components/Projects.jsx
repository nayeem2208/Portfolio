import React from 'react'
import ProjectCards from './projectCards'

function Projects() {
  return (
    <div className="p-12 mt-24 flex flex-col justify-center items-center">
  <p className="text-5xl font-bold text-violet-400 flex justify-center">
    Projects
  </p>
  <div className="grid grid-cols-3 gap-4 flex justify-items-center">
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

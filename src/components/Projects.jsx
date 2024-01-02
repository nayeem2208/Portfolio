import React, { useEffect, useRef, useState } from "react";
import ProjectCards from "./projectCards";
import { projectsData } from "../datas/projectsData";
import { motion, useAnimation, useInView } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";

function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControll = useAnimation();
  const colorControll = useAnimation();
  let [modalVisible, setModalVisible] = useState(false);
  const [project, setProject] = useState({});
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (inView) {
      mainControll.start("visible");
      colorControll.start("visible");
    }
  }, [inView]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);
  const toggleModal = (project) => {
    setModalVisible(!modalVisible);
    setProject(project);
  };
  return (
    <motion.div
      // ref={ref}
      className="p-12 mt-12 md:mt-0 flex flex-col justify-center items-center"
      // variants={{
      //   hidden: { opacity: 0, y: 100 },
      //   visible: { opacity: 1, y: 0 },
      // }}
      // initial="hidden"
      // animate={mainControll}
      // transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.p
      ref={ref}
        className="text-5xl font-bold text-violet-400 flex justify-center"
        whileHover={{ scale: 1.2,textShadow: "0 0 40px rgba(69, 2, 150, 1)", }}
        variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControll}
          transition={{ duration: 0.5, delay: 0.3 }}
          
      >
        Projects
      </motion.p>
      {modalVisible && (
        <div>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70  z-40"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleModal();
            }}
          ></div>
          <div
            id="defaultModal"
            style={{ maxHeight: "90vh" }}
            className="fixed flex items-center justify-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] "
          >
            <div className="relative w-full max-w-2xl max-h-full">
              <div
                className="relative bg-white rounded-lg shadow  my-4  "
                style={{
                  background:
                    "radial-gradient(circle, rgba(56,42,106,1) 0%, rgba(75,43,113,1) 53%, rgba(48,22,99,1) 100%)",
                }}
              >
                <div className="flex items-start justify-between p-4  rounded-t dark:border-gray-100">
                  {/* <h3 className="text-xl font-bold text-violet-300 ">
                        Upload cover picture
                      </h3> */}
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="text-violet-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-Linecap="round"
                        stroke-Linejoin="round"
                        stroke-Width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className=" overflow-y-auto">
                  <div className="mx-2 flex justify-center">
                    <img
                      src={project.gif ? project.gif : project.image}
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center mt-2">
                    <p className="font-bold text-violet-400 text-4xl flex justify-center ">
                      {" "}
                      {project.name}
                      <a
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IoLogoGithub className="ml-4 mt-1" />
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-wrap text-violet-500 font-semibold justify-center mt-4">[
                    {project.technologies.map((technology, index) => (
                      <p key={index} className="mr-4 mb-2">
                        {technology},
                      </p>
                    ))}]
                  </div>
                  <p className="mx-4 mb-4 text-violet-500">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex  flex-wrap justify-center mt-12">
        {projectsData.map((project, index) => (
          <ProjectCards
            key={index}
            project={project}
            onClick={() => toggleModal(project)}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;

import React from "react";
import projectData from "../../Data/ProjectData";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const Card = ({index, project }) => {
  return (
    <div key={project?.id} className="flex-shrink-0 w-60 gap-4 md:w-72 lg:w-80 relative group mx-2 ">
      <div className="relative overflow-scroll  shadow-xl  transition-transform duration-500 transform-gpu hover:scale-105">
        <img
          src={project?.img}
          alt={project?.projectName}
          className="h-48 md:h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute w-full h-full inset-0 flex flex-col bg-blue-500/80 justify-between  p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          
          <div className="flex justify-between">
            <a href={project?.gitLink} target="_blank" rel="noopener noreferrer">
              <div className="bg-black/70 dark:bg-gray-800 p-2 rounded-full hover:bg-black/90 dark:hover:bg-gray-700 transition">
                <BsGithub className="text-xl text-white" />
              </div>
            </a>
            {project?.webLink && (
              <a href={project?.webLink} target="_blank" rel="noopener noreferrer">
                <div className="bg-black/70 dark:bg-gray-800 p-2 rounded-full hover:bg-black/90 dark:hover:bg-gray-700 transition">
                  <BsLink45Deg className="text-xl text-white" />
                </div>
              </a>
            )}
          </div>
          <div>
            {
              project?.skill?.map((tech, idx) => (
                <span
                  key={idx} 
                  className="text-xs  bg-black/70 dark:bg-gray-800 text-white px-2 py-1 mr-1 rounded-full inline-block mb-1"
                >
                  {tech}
                </span>
              ))
            }
          </div>
          <div className=" text-white py-2 font-semibold text-sm md:text-base rounded-lg">
            {project?.projectName}
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  // Split projects into two rows
  const topRow = projectData.filter((_, i) => i % 2 === 0);
  const bottomRow = projectData.filter((_, i) => i % 2 !== 0);

  // Duplicate rows for seamless scrolling
  const duplicateTop = [...topRow, ...topRow];
  const duplicateBottom = [...bottomRow, ...bottomRow];

  return (
    <section 
    id="project"
    className="relative py-16 my-10 dark:bg-gray-900">
      
      {/* Decorative Background Textures */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] md:bg-blue-400 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] md:bg-red-400 bg-red-200 rounded-full blur-3xl"></div>
      </div>


      <div className=" mx-auto   dark:text-white space-y-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-light bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
            Project Gallery
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-400">
            Every project begins with a spark of imagination and grows into something extraordinary.
          </p>
          <div className="mt-4 mx-auto w-24 h-[4px] bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>

        </div>

        {/* Top Row Infinite Scroll */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-left">
            {duplicateTop.map((project, index) => (
              <Card key={`${project.id}-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Bottom Row Infinite Scroll (reverse) */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-right">
            {duplicateBottom.map((project, index) => (
              <Card key={`${project.id}-${index}`} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Scroll Animations */}
      <style>
        {`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scroll-right 40s linear infinite;
        }
        `}
      </style>
    </section>
  );
};

export default Project;

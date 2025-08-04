import React, { useState } from 'react';
import projectData from '../Data/ProjectData';
import { BsGithub, BsLink45Deg } from 'react-icons/bs';
import { Fade, Bounce } from 'react-awesome-reveal';

const Card = ({ color, children }) => {
  const [hover, setHover] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X inside card
    const y = e.clientY - rect.top;  // Mouse Y inside card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setHover(false);
  };

  return (
    <div
      className="perspective"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative hover:box   overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out group"
        style={{
          backgroundColor: color,
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: hover ? 'transform 0.1s ease' : 'transform 0.5s ease',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Project Image */}
        <img
          className="h-60 w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
          src={children.img}
          alt={children.projectName}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 flex flex-col justify-between bg-black/50 transition-opacity duration-500 ease-in-out ${hover ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* Top Icons */}
          <div className="flex justify-between p-4">
            <a href={children.gitLink} target="_blank" rel="noopener noreferrer">
              <div className="bg-black/70 p-2 rounded-full hover:bg-black/90 transition">
                <BsGithub className="text-xl text-white" />
              </div>
            </a>
            {children.webLink && (
              <a href={children.webLink} target="_blank" rel="noopener noreferrer">
                <div className="bg-black/70 p-2 rounded-full hover:bg-black/90 transition">
                  <BsLink45Deg className="text-xl text-white" />
                </div>
              </a>
            )}
          </div>

          {/* Project Name */}
          <div className="bg-black/70 text-white text-center py-3 font-semibold lg:text-sm text-xs">
            {children.projectName}
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="dark:bg-black dark:text-white py-12">
      <div
        id="project"
        className="lg:w-8/12 w-11/12 mx-auto text-sm lg:text-base space-y-8"
      >
        <p className='text-2xl font-extrabold  '>Project Room💡</p>
        <hr className=' mt-4 ' />

        <div className="dark:from-white/50 dark:via-white/50 dark:to-white/50 bg-gradient-to-r from-primary/50 via-primary/90 to-primary p-8 rounded-lg text-white my-4">
          <h1 className="text-3xl font-bold mb-4">Skill Unleashed! 🚀</h1>
          <p className="text-lg">"Every project begins with a spark of imagination and grows into something extraordinary. ✨🚀
            Dive into the world of creativity and innovation—where possibilities are endless, and ideas come to life!"</p>
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
          {projectData.map((element, index) => (
            <Fade key={index} direction="up" triggerOnce>
              <Card color="#00c8ff">
                {{
                  gitLink: element.gitLink,
                  webLink: element.webLink,
                  projectName: element.projectName,
                  img: element.img,
                }}
              </Card>
            </Fade>
          ))}
        </div>
        <Bounce>
         <a href="https://github.com/shrikant-d5456" target="_blank" rel="noopener noreferrer"><button  className='box  bg-primary hover:bg-primary font-semibold   py-1 px-4  transition-all text-sm text-white'>See More Project</button></a>
      </Bounce>
      </div>
      
    </div>
  );
};

export default Project;

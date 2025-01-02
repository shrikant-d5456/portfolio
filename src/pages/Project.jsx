import React, { useState } from 'react';
import projectData from '../Data/ProjectData';
import { BsGithub, BsLink45Deg } from 'react-icons/bs'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import BgBlur from './BgBlur';


const Card = ({ color, children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="card relative"
      style={{
        '--clr': color,
        '--x': `${position.x}px`,
        '--y': `${position.y}px`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className={`h-full w-full object-cover }`} src={children.img} alt={children.projectName} />
      <div className={`absolute inset-0 transition-opacity duration-500 ease-linear ${hover ? "opacity-100" : "opacity-0"} bg-black/40`}>

        <a href={children.gitLink} target="_blank" rel="noopener noreferrer">
          <div className='absolute top-2 left-2 z-10 rounded-full text-md font-semibold w-fit bg-black/80 p-2' title='click me'>
            <BsGithub className='text-xl text-white ' />
          </div>
        </a>

        {
          children.webLink &&
          <a href={children.webLink} target="_blank" rel="noopener noreferrer">
            <div className='absolute top-2 right-2 z-10 rounded-full text-md font-semibold w-fit bg-black/80 p-2' title='click me'>
              <BsLink45Deg className='text-xl text-white ' />
            </div>
          </a>
        }

        <div className='absolute top-[64%] text-white  bg-black/40 text-md font-semibold p-2'>
          {children.projectName}
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (

    <div id='project' className='lg:w-8/12 w-11/12 flex-col m-auto my-4 mt-[10%] text-sm lg:text-base'>
<BgBlur/>
      <p className='text-2xl font-extrabold'>Project Room💡</p>
      <hr className='my-4' />
      <div className="bg-gradient-to-r from-[#3dc2da] via-[#0387a4] to-[#31aac5] p-8 rounded-lg text-white my-4">
        <h1 className="text-3xl font-bold mb-4">Skill Unleashed! 🚀</h1>
        <p className="text-lg">"Every project begins with a spark of imagination and grows into something extraordinary. ✨🚀
          Dive into the world of creativity and innovation—where possibilities are endless, and ideas come to life!"</p>
      </div>
      <div className='flex justify-between items-center'>
        <div className="container ">
          {projectData.map((element, index) => (
            <Fade key={index} direction='left' triggerOnce>
              <Card  color="#00c8ff">
                {{
                  gitLink: element.gitLink,
                  webLink: element.webLink,
                  projectName: element.projectName,
                  img: element.img
                }}
              </Card>
            </Fade>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Project;

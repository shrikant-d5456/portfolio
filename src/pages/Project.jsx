import React, { useState } from 'react';
import projectData from '../Data/ProjectData';
import { BsGithub, BsLink45Deg } from 'react-icons/bs'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';


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

    <div className='lg:w-8/12 w-11/12 flex-col m-auto my-4 mt-[10%] text-sm lg:text-base'>

      <p className='text-2xl font-extrabold'>Project's</p>
      <hr className='my-4' />
      <div className='flex justify-center items-center'>
        <div className="container ">
          {projectData.map((element, index) => (
            <Fade direction='left' triggerOnce>
              <Card key={index} color="#00c8ff">
                {{
                  gitLink: element.gitLink,
                  webLink:element.webLink,
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

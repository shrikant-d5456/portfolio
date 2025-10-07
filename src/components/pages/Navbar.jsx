import React, { useEffect, useState } from 'react'
import {Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';

const Navbar = () => {

  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) { 
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const scrollToBottom = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const screenWidth = window.innerWidth;

    
    const scrollDistance = screenWidth > 768 ? scrollHeight - 500 : scrollHeight - 1000;

    window.scrollTo({
      top: scrollDistance,
      behavior: "smooth"
    });
  }

  return (
    <div className='w-full backdrop-blur-[40px]  flex justify-center fixed top-0 z-20 dark:bg-black dark:text-white'>
      <div className=' w-full flex items-center justify-start px-8 py-5 font-semibold text-white '>

        <div className=' w-full flex justify-between items-center gap-4 '>
          <div className='flex justify-center items-center gap-4 dark:text-white text-black '>
          <span className="circle pulse bg-red-500  "></span>
          Awailable to Work 
          </div>
          
         
            {showDiv && (
              <div>
                <Bounce>
                <button onClick={scrollToBottom} type='submit' className='box  bg-primary hover:bg-primary font-semibold   py-1 px-4  transition-all text-sm text-white'>Hire Me</button>
                </Bounce>
              </div>
            )}
          
        </div>
        <div className='lg:flex hidden  justify-center items-center'>



          {/* <li className='flex gap-8 '>
            <ul >
              Home
            </ul>
            <ul >
              Tratements
            </ul>
            <ul  >
              About
            </ul>
            <ul  >
              Contact
            </ul>
          </li> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar

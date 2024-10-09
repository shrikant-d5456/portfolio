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

    
    const scrollDistance = screenWidth > 768 ? scrollHeight - 1590 : scrollHeight - 1000;

    window.scrollTo({
      top: scrollDistance,
      behavior: "smooth"
    });
  }

  



  return (
    <div className='w-full backdrop-blur-[40px]  flex justify-center fixed top-0 z-10'>
      <div className=' w-full flex items-center justify-start px-8 py-4 font-semibold text-white '>

        <div className=' w-full flex justify-between items-center gap-4 text-white dark:text-black '>
          <div className='flex justify-center items-center gap-4'>
          <span className="circle pulse blue"></span>
          Awailable to Work
          </div>
          
         
            {showDiv && (
              <div>
                <Bounce>
                <button onClick={scrollToBottom} type='submit' className='ml-2 py-[2px] px-4 dark:bg-[#e14eff] bg-[#00d0ff] font-semibold text-white'>Hire Me</button>
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

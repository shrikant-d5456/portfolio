import React, { useEffect, useState } from 'react'
import {Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import Banner from '../ui/Banner';
import { Link } from 'react-router-dom';

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

  const [hide, setHide] = useState(false);

  useEffect(()=>{
    const banner = sessionStorage.getItem("banner")
    if(!banner){
      setTimeout(() => {
      setHide(true);
      sessionStorage.setItem("banner",true)
    }, 10000);
    }
  },[]);


  return (
    <>
    <Banner hide={hide} setHide={setHide} className={`${!hide && "hidden "}`} />
    <div className={`${!hide && "fixed "} w-full backdrop-blur-[40px] flex justify-center top-0 z-20 text-gray-800 dark:text-white`}>
      <div className=' w-full flex items-center justify-start px-8 py-5 font-semibold'>

        <div className=' w-full flex justify-between items-center gap-4'>
          <div className='flex justify-center items-center gap-4'>
        
          <span className="circle pulse pulse2 bg-green-500"></span>
         
          Awailable to Work 
          </div>
          
         
            {showDiv && (
              <div>
                <Bounce>
                <button onClick={scrollToBottom} type='submit' className='box font-semibold py-1 px-4  transition-all text-sm '>Hire Me</button>
                </Bounce>
              </div>
            )}
          
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Navbar

import React, { useEffect, useState } from 'react'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import Banner from '../ui/Banner';
import { BsX } from 'react-icons/bs';
import useApiData from '../../hooks/useApiData';
import { endpoints } from "../../services/api";

const Navbar = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [tooltip, setTooltip] = useState(true);
  const { data: projectData } = useApiData(endpoints.projects);

  const latestProject = projectData?.length > 0 ? projectData[projectData.length-1 ] : null;

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

  useEffect(() => {
    const banner = sessionStorage.getItem("banner")
    if (!banner) {
      setTimeout(() => {
        setHide(true);
        sessionStorage.setItem("banner", true)
      }, 10000);
    }
  }, []);


  return (
    <>
      <Banner hide={hide} setHide={setHide} className={`${!hide && "hidden "}`} />
      {
        tooltip &&
        (
          <div className='fixed md:top-4 top-14 w-full z-50 flex justify-center items-center '>
            <p className=' flex gap-1 text-sm w-fit bg-white border border-gray-300 px-4 py-2 rounded-full lowercase '>Newly Added Project Live 🚀
              <a href={latestProject?.webLink} className='text-blue-500 underline' target="_blank" rel="noopener noreferrer">Visit Project</a>
              <BsX className='cursor-pointer text-2xl pl-2 ' onClick={() => setTooltip(false)} />
            </p>
          </div>
        )
      }
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

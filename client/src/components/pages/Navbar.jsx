import React, { useEffect, useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import Banner from '../ui/Banner';
import { BsX } from 'react-icons/bs';
import projectData from "../../Data/ProjectData";

const Navbar = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [tooltip, setTooltip] = useState(true);
  const latestProject = projectData?.length > 0 ? projectData[projectData.length - 1] : null;

  useEffect(() => {
    const handleScroll = () => {
      setShowDiv(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const screenWidth = window.innerWidth;
    const scrollDistance = screenWidth > 768 ? scrollHeight - 500 : scrollHeight - 1000;
    window.scrollTo({ top: scrollDistance, behavior: 'smooth' });
  };

  const [hide, setHide] = useState(false);

  // useEffect(() => {
  //   const banner = sessionStorage.getItem('banner');
  //   if (!banner) {
  //     setTimeout(() => {
  //       setHide(true);
  //       sessionStorage.setItem('banner', 'true');
  //     }, 10000);
  //   }
  // }, []);

  return (
    <>
      {/* <Banner hide={hide} setHide={setHide} className={`${!hide && 'hidden '}`} /> */}

      {tooltip && (
        <div className="fixed left-1/2 top-4 z-50 md:w-fit w-4/5 -translate-x-1/2 rounded-full border border-white/10  px-4 py-2 text-center text-sm text-slate-200 shadow-lg backdrop-blur-md">
          <div className="flex items-center justify-center gap-2">
            <span>Project Published 🚀</span>
            <a href={latestProject?.webLink} className="text-fuchsia-300 underline" target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
            <BsX className="cursor-pointer text-xl text-slate-400" onClick={() => setTooltip(false)} />
          </div>
        </div>
      )}

      <div className={`${!hide && 'fixed '} top-0 z-20 w-full  px-4 py-4 backdrop-blur-[30px]`}>
        <div className="section-shell flex items-center justify-between gap-4 text-sm font-medium text-slate-100">
          <div className="flex items-center gap-3">
            <span className="circle pulse pulse2 bg-green-500" />
            Available to Work
          </div>

          {showDiv && (
            <Bounce>
              <button onClick={scrollToBottom} type="button" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 transition hover:bg-cyan-400/20">
                Hire Me
              </button>
            </Bounce>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

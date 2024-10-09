import React, { useEffect, useState } from 'react';
import lightIcon from '../assets/light.png';
import darkIcon from '../assets/dark.png';
import {Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';


const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    if (newIsDarkMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.removeItem('theme');
    }
  };

  return (
    <div className='absolute top-[1px] right-1 z-20'>
    <Fade>
    <img
      className=" w-[95px] h-[95px] cursor-pointer"
      src={isDarkMode ? lightIcon : darkIcon}
      alt="Toggle Dark Mode"
      onClick={toggleDarkMode}

      title={isDarkMode ? 'Switch to Night' : 'Switch to Morning'}
    />
    </Fade>
    </div>
  );
};

export default DarkMode;

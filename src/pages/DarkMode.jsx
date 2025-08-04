import React, { useEffect, useState } from 'react';
import lightIcon from '../assets/light.png';
import darkIcon from '../assets/dark.png';
import {Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';


const DarkMode = () => {

  // ✅ Get initial theme from localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // ✅ Apply theme on page load and whenever theme changes
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

   const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className='absolute top-[1px] right-1 z-20'>
    <Fade>
    <img
      className=" w-[95px] h-[95px] cursor-pointer"
      src={theme ? lightIcon : darkIcon}
      alt="Toggle Dark Mode"
      onClick={toggleTheme}

      title={theme ? 'Switch to Night' : 'Switch to Morning'}
    />
    </Fade>
    </div>
  );
};

export default DarkMode;

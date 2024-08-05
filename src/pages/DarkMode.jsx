import React, { useEffect, useState } from 'react';
import lightIcon from '../assets/light.png';
import darkIcon from '../assets/dark.png';

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
    <img
      className="absolute top-[1px] right-1 z-20 w-[95px] h-[95px] cursor-pointer"
      src={isDarkMode ? lightIcon : darkIcon}
      alt="Toggle Dark Mode"
      onClick={toggleDarkMode}
    />
  );
};

export default DarkMode;

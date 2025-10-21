import React from "react";
import { BsEnvelopeAt, BsGithub, BsLinkedin, BsMailbox, BsMailbox2, BsMailboxFlag, BsWhatsapp } from "react-icons/bs";
import img from "../../assets/shreeImg.jpeg";
import about from '../../Data/About'
const Home = () => {
  return (
    <section
      id="about"
      className="relative w-full h-full mt-20 flex flex-col justify-center items-center text-center overflow-hidden
       transition-all duration-500 bg-white"
    >
      {/* Decorative Background Textures */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] md:bg-blue-400 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] md:bg-red-400 bg-red-200 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Name / Title */}

        <h1 className="text-5xl md:text-7xl font-light bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Er. Shrikant Dalvi
        </h1>

        {/* Role / Subtitle */}
        <p className="text-xl md:text-2xl font-medium text-gray-600  mb-8">
          Software Developer
        </p>

        {/* Profile Image */}
        <img
          src={img}
          alt="Shrikant Dalvi"
          className=" w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-[0_4px_40px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300"
        />
        <div className=" anime mt-2 mx-auto w-24 h-[4px] bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>

        {/* Social Links */}
        <div className="flex gap-6 mt-10 text-gray-700 text-3xl">
          <a
            href="mailto:dalvishrikant5456@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:scale-110 transition-transform duration-200"
          >
            <BsEnvelopeAt />
          </a>
          <a
            href="https://www.linkedin.com/in/shrikant-dalvi-025ba4318"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:scale-110 transition-transform duration-200"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/shrikant-d5456"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-900 hover:scale-110 transition-transform duration-200"
          >
            <BsGithub />
          </a>
          <a
            href="https://wa.me/qr/OXX2A3XJPGKXA1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:scale-110 transition-transform duration-200"
          >
            <BsWhatsapp />
          </a>
        </div>

        {/* Optional Footer Tagline */}
        <p className="mt-8 md:w-8/12 text-gray-800 dark:text-gray-400 text-sm text-justify md:text-center">
          {about[0].desc}
        </p>
        <a 
        href="https://drive.google.com/file/d/19ivrphQ-Xn9MGuwPeT7StM6bJx44Via6/view?usp=drive_link" 
        target="_blank">
          <button className=" box px-4 py-1 my-2">My Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Home;

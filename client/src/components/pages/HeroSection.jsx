import React from "react";
import { BsEnvelopeAt, BsGithub, BsLinkedin, BsMailbox, BsMailbox2, BsMailboxFlag, BsWhatsapp } from "react-icons/bs";
import img from "../../assets/shreeImg.jpeg";
import useApiData from "../../hooks/useApiData";
import { endpoints } from "../../services/api";
const Home = () => {
  const { data: about } = useApiData(endpoints.about);
  const aboutEntry = about[0] || {};

  return (
    <header id="about" className=" relative lg:h-screen flex items-center justify-center text-white overflow-hidden p-2">

      {/* Decorative Background Textures */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] md:bg-blue-400 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] md:bg-red-400 bg-red-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-2 lg:px-20 relative z-10">
        {/* Hero */}
        <div id="step1" className="mt-32 lg:mt-10 text-left max-w-4xl mx-auto">

          <div className=" w-full flex gap-2 items-center ">
            <div>
              <img
                src={img}
                alt="Shrikant Dalvi"
                className=" w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-white dark:border-gray-700 hover:scale-105 transition-transform duration-300"
              />
              <div className=" anime mt-2 mx-auto w-24 h-[4px] bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
            </div>

            <div>
              <h1 className="text-4xl md:text-7xl font-light leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Er. Shrikant Dalvi
              </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-600">
                Software Developer
              </p>
            </div>
          </div>


          <p className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
            {aboutEntry.desc || ""}
          </p>

          <div className=" w-full flex gap-6 mt-5 text-gray-700 text-3xl">
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
          <a
            href={aboutEntry.resume_link || "#"}
            target="_blank">
            <button className=" box px-4 py-1 mt-5 text-gray-600">My Resume</button>
          </a>
        </div>
      </div>
    </header>
  );
};


export default Home;
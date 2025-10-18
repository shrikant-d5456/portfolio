import React, { useState } from "react";
import work_data from "../../Data/WorkData";
import { Fade } from "react-awesome-reveal";
import { BsArrowBarRight } from "react-icons/bs";

const Work = () => {
  const [length, setLength] = useState(4);
  const toggleShow = () => setLength(length === 4 ? work_data.length : 4);

  return (
    <section
      id="experience"
      className="relative w-full py-20 flex flex-col items-center justify-center overflow-hidden dark:text-white"
    >
      {/* Decorative Background Textures */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] md:bg-blue-400 bg-blue-200   rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] md:bg-red-400 bg-red-200 rounded-full blur-3xl"></div>
      </div>

      {/* 💫 Title Section */}
      <Fade direction="down" triggerOnce>
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
            Work Experience & Internship
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey through my professional milestones, learning, and growth.
          </p>
          <div className="mt-6 mx-auto w-24 h-[4px] bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
        </div>
      </Fade>

      {/* 🕓 Timeline Section */}
      <div className="relative w-11/12 md:w-9/12 lg:w-10/12 flex flex-col items-center">
        {/* Center Line */}
        <div className="hidden lg:block absolute  left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 rounded-full -translate-x-1/2"></div>

        {/* Timeline Items */}
        {work_data.slice(0, length).map((item, index) => (
          <Fade
            key={item.id}
            direction={index % 2 === 0 ? "left" : "right"}
            triggerOnce
          >
            <div
              className={`relative flex flex-col md:flex-row items-center w-full mb-16 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Connector Dot */}
              <div className=" hidden lg:block absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-red-500 w-6 h-6 rounded-full border-[4px] border-white dark:border-gray-900 shadow-lg z-10"></div>
           
              {/* Timeline Card */}
              <div
                className={`box  bg-white/20 dark:bg-gray-800 border border-gray-200 dark:border-gray-700  p-6 md:p-8 w-full md:w-[45%] transition-all hover:scale-[1.02] hover:shadow-2xl duration-300 ease-out ${
                  index % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {item.company_name}
                  </h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {item.start} — {item.end}
                  </span>
                </div>

                <p className="inline-block mt-3 bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-[6px] rounded-full text-sm font-semibold">
                  {item.role}
                </p>

                <p className="mt-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed text-justify">
                  {item.desc}
                </p>

                {item.documentLink && (
                  <a
                    href={item.documentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-gray-800 box  hover:opacity-90 px-5 py-2 rounded-full text-sm font-medium transition-all"
                  >
                    See Documents <BsArrowBarRight />
                  </a>
                )}
              </div>
              
            </div>
          </Fade>
        ))}
      </div>

      {/* 🔽 Show More / Less Button */}
      {work_data.length > 4 && (
        <Fade direction="up" triggerOnce>
          <button
            onClick={toggleShow}
            className="mt-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent hover:underline"
          >
            {length === 4 ? "Show All Experience ↓" : "Show Less ↑"}
          </button>
        </Fade>
      )}
    </section>
  );
};

export default Work;
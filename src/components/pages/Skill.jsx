import React, { useState } from "react";
import skillData from "../../Data/SkillData";
import ReactSpeedometer from "react-d3-speedometer/slim";
import { Slide, Zoom, } from "react-awesome-reveal";
import { BsArrowBarRight } from "react-icons/bs";

const Skill = () => {
  const [length, setLength] = useState(10);
  const [scrolling, setScrolling] = useState(true);

  const toggleSkills = () => {
    setLength(length === 10 ? skillData.length : 10);
  };

  return (
    <section
      id="skill"
      className="relative py-20 "
    >
    {/* Decorative Background Textures */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] md:bg-blue-400 bg-blue-200   rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] md:bg-red-400 bg-red-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative  z-10 lg:w-8/12 w-11/12 mx-auto text-gray-900 dark:text-white">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-light  bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-base md:text-lg">
            A showcase of technologies I use to build modern, scalable, and
            creative web experiences.
          </p>
          <div className="mt-4 mx-auto w-24 h-[4px] bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
        </div>

        {/* Skill Cards */}
        <div className=" relative flex h-[150px] lg:h-[200px] overflow-scroll  items-center">
          {skillData.slice(0, length).map((element, index) => (
            <Slide direction="up" key={element.id}>
              <div className="group relative grid lg:grid-cols-4  grid-cols-2 ">
                {/* Skill Image */}
                <div title={element.skill_name} className="w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] rounded-full shadow-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
                  <img
                    src={element.img}
                    alt={element.skill_name}
                    className="w-full h-full rounded-full object-cover opacity-90 bg-white p-2 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Hover Info */}
                <div className=" hidden lg:block absolute left-[-10px] top-[-20px] opacity-0 group-hover:opacity-100 group-first:active:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500 to-red-50/80 rounded-full border border-gray-200 p-5 shadow-md z-20  items-center">
                  <Zoom>
                    <ReactSpeedometer
                      value={element.range * 10}
                      startColor={'#2E3440'}
                      endColor={'#4C566A'}
                      width={120}
                      height={80}
                      ringWidth={10}
                      needleHeightRatio={0.5}
                      needleColor={"#a8efff"}
                      textColor={"#a8efff"}
                      // valueTextFontSize={10}
                      valueTextFontWeight={"lighter"}
                    />
                    {element.certificate && (
                      <a
                        href={element.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center mt-2"
                      >
                        <button className="bg-gray-800/90 hover:bg-gray-600 text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium shadow-md">
                          Docs <BsArrowBarRight />
                        </button>
                      </a>
                    )}
                  </Zoom>
                </div>
              </div>

            </Slide>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Skill;

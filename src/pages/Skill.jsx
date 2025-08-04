import React, { useState } from 'react'
import skillData from '../Data/SkillData'

import ReactSpeedometer from "react-d3-speedometer/slim"
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import BgBlur from './BgBlur';
import { BsArrowBarRight } from 'react-icons/bs';


const Skill = () => {

  const [lenght, setLength] = useState(4);
  const [scrolling, setScolling] = useState(true);

  const displaySkill = () => {

    if (lenght == 4) {
      setLength(skillData.length)
    }
    else {
      setLength(4);
      setLength(4);
    }
  }

  return (
    <div className=' dark:bg-black dark:text-white z-20 py-8'>
      <div id='skill' className='lg:w-8/12 w-11/12 flex-col m-auto my-4 mt-[10%] text-sm lg:text-base '>
        {/* <BgBlur /> */}
        <p className='text-2xl font-extrabold  '>Technical Skill's 🧑🏻‍💻 </p><hr className=' mt-4 ' />
        <div className='dot dark:shadow w-fit relative bottom-[11px]'></div>
        
        <div className=" dark:from-white/50 dark:via-white/50 dark:to-white/50 bg-gradient-to-r from-primary/50 via-primary/90 to-primary p-8 rounded-lg text-white my-4">
          <h1 className="text-3xl font-bold mb-4">Continue learning</h1>
          <p className="text-lg">"Every line of code is a step toward turning ideas into reality. 🌟👨‍💻
            Embrace the journey of innovation and problem-solving—your potential is limitless!"🚀
          </p>
        </div>
        <div className=' relative flex justify-between items-center z-40'>
          <div className=' w-full flex justify-end items-center '>
            <button
              onClick={() => setScolling(!scrolling)}
              className='float-right p-1 text-primary dark:text-white hover:text-primary my-4'
            > {scrolling == true ? " ∫ open" : " ∬ close"}
            </button>
          </div>
        </div>



        {scrolling == true ?

          <div className=' w-full m-auto overflow-hidden'>
            <div className='animate-marquee flex gap-8  '>
              {
                skillData.map((img, index) => (
                  <img
                    key={index}
                    className=' lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] rounded-full border dark:border-white  object-cover   border-primary lg:p-2 p-1'
                    src={img.img} alt="" title={img.skill_name}
                  />

                ))

              }
            </div>
          </div>

          :
          <>
            {
              skillData.slice(0, lenght).map((element, index) => (
                <Slide direction="up" triggerOnce>
                  <div key={element.id} className='flex-col'>
                    <span className='w-[100px]  ml-10 lg:ml-14 border-[1px]   border-primary rotate-90'></span>

                    <div className='overflow-hidden w-full lg:flex flex-row justify-center items-center '>
                      <div className='lg:w-[130px] lg:h-[110px]  w-[80px] h-[80px] rounded-full shadow-md  border-primary dark:border-white  border p-1 '>
                        <span className='font-semibold absolute justify-center items-center w-[50px] h-[50px] my-4 lg:mx-10 lg:mt-10 rounded-full'>

                          <Zoom triggerOnce>
                            <ReactSpeedometer
                              value={element.range * 10}
                              startColor={'#2E3440'}
                              endColor={'#4C566A'}
                              hight={10}
                              width={100}
                              ringWidth={10}
                              needleHeightRatio={0.5}
                              needleColor={"#a8efff"}
                              textColor={"#ffffff"}
                              valueTextFontSize={10}
                              valueTextFontWeight={"lighter"}
                            />
                          </Zoom>
                        </span>
                        <img
                          className='w-full h-full object-cover rounded-full '
                          src={element.img} alt="" />
                      </div>

                      <span className='w-20 lg:ml-0 ml-10 border-[1px]  border-primary dark:border-white '></span>

                      <div className='border w-full blur-card dark:bg-gradient-to-r from-primary to-black-200 dark:border-none border-primary dark:border-white  text-center p-2 rounded-sm '>

                        <div className='flex justify-between mx-2 '>
                          <p className='font-semibold'>{element.skill_name}</p>
                        </div>


                        <hr className='my-1 border-none' />

                        <p className='text-justify '>{element.desc}
                        </p>
                        <a href={element.certificate} target='_blank'>
                          <button className=' bg-primary  hover:bg-primary py-1 px-4 my-2 transition-all text-sm text-white rounded-full flex justify-center items-center gap-2'>See Certificate <BsArrowBarRight className=' text-sm font-extrabold' /></button>
                        </a>
                        <div className='dot dark:shadow relative z-10 top-2'></div>
                      </div>
                    </div>

                  </div>
                </Slide>

              ))
            }
            <div className=' relative w-full flex justify-end items-center z-30'>
              <button
                onClick={displaySkill}
                className=' my-2 p-4 text-primary hover:text-primary'
              > {lenght == 4 ? " ∫ Show All Skills" : " ∬ Show Less"}
              </button>
            </div>
          </>
        }



      </div>
    </div>
  )
}

export default Skill

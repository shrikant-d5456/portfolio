import React, { useState } from 'react'
import skillData from '../Data/SkillData'

import ReactSpeedometer from "react-d3-speedometer/slim"

const Skill = () => {

  const [lenght,setLength] = useState(4);

  const displaySkill = ()=>{
    
    if(lenght == 4)
    {
      setLength(skillData.length)
    }
    else
    {
      setLength(4);
      setLength(4);
    }
  }

  return (
    <>
      <div className='lg:w-8/12 w-11/12 flex-col m-auto my-8 mt-[10%] text-sm lg:text-base'>
        <p className='text-2xl font-extrabold  '>Technical Skill's</p><hr className='my-4' />

        
        {
          skillData.slice(0,lenght).map((element, index) => (

            <div key={element.id} className='flex-col'>
              <span className='w-[100px]  ml-10 lg:ml-14 border-[1px]  border-[#a8efff] rotate-90'></span>

              <div className='overflow-hidden w-full lg:flex flex-row justify-center items-center '>
                <div className='lg:w-[130px] lg:h-[110px]  w-[80px] h-[80px] rounded-full shadow-md border-[#a8efff] border-2 p-1 '>
                <span className='font-semibold absolute justify-center items-center w-[50px] h-[50px] my-4 lg:mx-10 lg:mt-10 rounded-full'>
                    
                    <ReactSpeedometer
                    value={element.range*10}
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
                    </span>
                  <img
                    className='w-full h-full object-cover rounded-full '
                    src={element.img} alt="" />
                </div>

                <span className='w-20 lg:ml-0 ml-10 border-[1px] border-[#a8efff]'></span>

                <div className='border w-full dark:bg-[#8beaff] border-[#a8efff] text-center p-2 rounded-sm shadow-md'>

                  <div className='flex justify-between mx-2 '>
                    <p className='font-semibold'>{element.skill_name}</p>      
                  </div>


                  <hr className='my-1 border-none' />

                  <p className='text-justify '>{element.desc}
                  </p>
                  <div className='dot relative z-10 top-2'></div>
                </div>
              </div>

            </div>
          ))
        }
        <div className=' w-full flex justify-end items-center'>
        <button 
        onClick={displaySkill}
        className=' my-2 p-4 text-blue-400 hover:text-blue-500'
        > {lenght == 4 ? " ∫ Show All Skills":" ∬ Show Less"}
        </button> 
        </div>
        
      </div>
    </>
  )
}

export default Skill

import education_data from '../Data/EducationData'
import React from 'react'

const education = () => {
  return (
    <>
      <div className='lg:w-8/12 w-11/12 flex-col m-auto my-8 mt-[10%] text-sm lg:text-base'>
        <p className='text-2xl font-extrabold  '>Education</p><hr className='my-4' />

        {
          education_data.map((element, index) => (

            <div key={element.id} className='flex-col'>
            <line className='w-[100px]  ml-10 lg:ml-14 border-[1px]  border-[#a8efff] rotate-90'></line>

            <div className='overflow-hidden w-full lg:flex flex-row justify-center items-center '>
              <div className='lg:w-[130px] lg:h-[110px]  w-[80px] h-[80px] rounded-full shadow-md border-[#a8efff] border-2 p-1'>
                <img
                  className='w-full h-full object-cover rounded-full'
                  src={element.img} alt="" />
              </div>

              <line className='w-20 lg:ml-0 ml-10 border-[1px] border-[#a8efff]'></line>

              <div className='border w-full border-[#a8efff] text-center p-2 rounded-sm shadow-md'>
             
                <div className='flex justify-between mx-2'>
                  <p className='font-semibold'>{element.skill_name}</p>
                  <span className='text-left font-semibold'> <input className='mr-4' type='range' value={element.range} />{element.range}%</span>
                </div>
                 

                <hr className='my-1 border-none' />

                <p className='text-justify'>{element.desc}
                </p>
                <div className='dot relative z-10 top-2'></div>
              </div>
            </div>
           
          </div>
          ))
        }
      </div>
    </>
  )
}

export default education

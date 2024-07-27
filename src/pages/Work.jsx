import React from 'react'
import work_data from '../Data/WorkData'

const Work = () => {
  return (
    <>
      <div className='lg:w-8/12 w-10/12 flex-col m-auto my-8 mt-[10%]'>
        <p className='text-2xl font-extrabold  '>Work, Experience & Internship</p><hr className='my-4' />
      
        {
        work_data.map((element, index) => (

            <div key={element.id} className='flex-col'>
               <line className='w-[100px]  ml-10 lg:ml-14 border-[1px]  border-white rotate-90'></line>
           
            <div className='w-full lg:flex flex-row justify-center items-center '>
              <div className='lg:w-[150px] lg:h-[110px]  w-[80px] h-[80px] rounded-full shadow-md border-white border-2 p-1'
              >
                <img
                  className='w-full h-full object-cover '
                  src={element.img} alt="" />
              </div>

              <line className='w-20 lg:ml-0 ml-10 border-[1px] border-white'></line>

              <div className='bg-white/20 border text-center p-2 rounded-md shadow-md'>
                <div className='flex justify-between mx-2'>

                  <p className='font-semibold'>{element.skill_name}</p>
                  <span className='text-left font-semibold'> <input className='mr-4' type='range' value={element.range} />{element.range}%</span>
                </div>

                <hr className='my-2' />

                <p className='text-justify'>{element.desc}</p>
              </div>
            </div>
            </div>
          ))
        }
      </div>
    </>
  )
}



export default Work

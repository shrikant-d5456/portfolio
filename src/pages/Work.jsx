import React, { useState } from 'react'
import work_data from '../Data/WorkData'

const Work = () => {

  const [length, setLength] = useState(4);

  const displaySkill = () => {

    if (length == 4) {
      setLength(work_data.length)
    }
    else {
      setLength(4);
      setLength(4);
    }

  }

  return (
    <>

      <div className='lg:w-8/12 w-11/12 flex-col m-auto mt-[10%]'>
        <p className='text-2xl font-extrabold  '>Work Experience & Internship</p><hr className='mt-4' />

        {work_data.slice(0, length).map((element) => (

          <div key={element.id} className=' py-4 lg:text-base text-sm'>
            <div className='flex justify-between items-center text-sm my-4 '>
              {element.start}
              <div className='border-2 border-white rounded-full text-sm ml-4'>
                <div className='bluedot'></div>
              </div>

              <div className=' border-dashed border-[1px] border-white w-full'></div>

              <div className='border-2 border-white rounded-full mr-4'>
                <div className='bluedot'></div>
              </div>
              {element.end}
            </div>

            <div className='flex w-full justify-start items-center gap-4'>

              <div className='lg:w-[50px] lg:h-[50px]  w-[50px] h-[50px] border-4 p-1 border-[#8beaff] rounded-full'
              >
                <img
                  className='w-full h-full object-cover rounded-full '
                  src={element.img} alt="loading.." />
              </div>

              <div>
                <p className=' text-xl font-semibold'>{element.company_name}</p>
                <p className=' text-sm bg-[#196c7f] px-2 py-[1px] rounded-full my-1 text'>{element.role}</p>
              </div>

            </div>

            <div className=' my-4 mx-2 flex justify-start items-center gap-4'>
              <div className='dot p-1 mx-4 md:block hidden'></div>
              <p className='lg:text-base text-sm text-justify'>
                {element.desc}
              </p>

            </div>

          </div>
        ))}

        {work_data.length > 4 &&
          <div className=' w-full flex justify-end items-center'>
            <button
              onClick={displaySkill}
              className=' my-2 p-4 text-blue-400 hover:text-blue-500'
            > {length == 4 ? " ∫ Show All Skills" : " ∬ Show Less"}
            </button>
          </div>
        }


      </div>
    </>
  )
}



export default Work

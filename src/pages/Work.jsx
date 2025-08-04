import React, { useState } from 'react'
import work_data from '../Data/WorkData'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import BgBlur from './BgBlur';
import { BsArrowBarRight } from 'react-icons/bs';

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
    <div className=' dark:bg-black dark:text-white py-8'>

      <div id='experience' className='lg:w-8/12 w-11/12 flex-col m-auto mt-[10%]  '>

        {/* <BgBlur /> */}
        <p className='text-2xl font-extrabold  '>Work Experience & Internship </p><hr className=' mt-4 ' />
        <div className='dot dark:shadow w-fit relative bottom-[11px]'></div>

        <div className="bg-gradient-to-r from-primary/50 via-primary/90 to-primary dark:from-white/50 dark:via-white/50 dark:to-white/50 p-8 rounded-lg text-white my-4">
          <h1 className="text-3xl font-bold mb-4">Transformative</h1>
          <p className="text-lg">"Internships are like stepping stones on the path of your career; each one brings you closer to your goals, enriches your knowledge, and transforms your potential into reality."</p>
        </div>

        {work_data.slice(0, length).map((element) => (

          <Fade key={element.id} direction="left" triggerOnce>
            <div className=' py-4 lg:text-base text-sm'>
              <div className='flex justify-between items-center text-sm my-4 '>
                <p className=' text-nowrap' >{element.start}</p>
                <div className='border-2 border-white rounded-full text-sm ml-4'>
                  <div className='bluedot '></div>
                </div>

                <div className=' border-dashed border-[1px] animate-pulse border-black dark:border-white  w-full'></div>

                <div className='border-2 dark:border-white   rounded-full mr-4'>
                  <div className='bluedot '></div>
                </div>
                <p className=' text-nowrap'>{element.end}</p>
              </div>

              <div className='flex w-full justify- items-center gap-4'>

                {/* <div className='lg:w-[50px] lg:h-[50px]  w-[50px] h-[50px] border-4 p-1  border-primary rounded-full'
                >
                  <a href={element?.webLink} target='self' title='Go to Website'>
                    <img
                      className='w-full h-full object-cover rounded-full text-sm '
                      src={element?.img}  alt='loading' />
                  </a>
                </div> */}

                <div>
                  <p className=' text-xl font-semibold'>{element.company_name}</p>
                  <p className=' text-xs  bg-primary py-[1px] rounded-full text-white w-fit px-4   '>{element.role}</p>
                </div>

              </div>

              <div className=' mt-4 mx-2 flex justify-start items-center gap-4 '>
                {/* <div className='dot dark:shadow p-1 mx-4 md:block hidden'></div> */}
                <p className='lg:text-base text-sm text-justify tracking-wide'>
                  {element.desc}
                </p>
              </div>
              {
                element.documentLink &&
                <a href={element.documentLink}  target='self'>
                <button className=' bg-primary  hover:bg-primary py-1 px-4 my-2 transition-all text-sm text-white rounded-full flex justify-center items-center gap-2 animate-pulse'>See Documents <BsArrowBarRight className=' text-sm font-extrabold' /></button>
                </a>
                }
            </div>
          </Fade >
        ))}

        {work_data.length > 4 &&
          <div className=' w-full flex justify-end items-center'>
            <button
              onClick={displaySkill}
              className=' my-2 p-4 text-primary hover:text-primary'
            > {length == 4 ? " ∫ Show All Skills" : " ∬ Show Less"}
            </button>
          </div>
        }
      </div>
    </div>
  )
}
export default Work
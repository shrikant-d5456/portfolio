import React from 'react'
import DarkMode from './DarkMode'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import Shade from './Shade';
import pdf from '../Data/resume.pdf';
import img from '../assets/shreeImg.jpeg';
import { BsGithub, BsLinkedin, BsMailbox2, BsMap, BsMapFill, BsTelegram } from 'react-icons/bs';


const Home = () => {

  return (
    <>

      <Shade />

      <div id='about' className='w-full flex-col justify-center items-center pt-[60px] overflow-hidden dark:bg-black dark:text-white '>
        <DarkMode />
        <div className='w-11/12 lg:flex md:flex flex-row justify-center items-center m-auto mb-5'>

          <JackInTheBox triggerOnce>
            <div className='animee lg:w-[300px] h-[300px] w-[300px] md:m-0 m-auto rounded-full  p-4  border-primary scale-90 '
            >
              <img

                className='h-full w-full object-cover rounded-full '
                src={img} alt="" />
            </div>

          </JackInTheBox>

          <div className='lg:w-1/3 md:w-2/3 w-full h-1/2 p-4 font-semibold'
          >
            <Slide direction='up' triggerOnce>
              <p className='text-3xl font-bold mt-4 tracking-wider'>Hey, I'm Shrikant Dalvi</p>
              <p className='text-xl my-2'>Passionated about <span className='font-extrabold  text-primary dark:text-white'>Frontend Developer</span> and <span className='font-extrabold text-primary dark:text-white'>Ui Designer</span></p>
            </Slide >
            <div>
              <hr />
              <div className='dot an dark:shadow w-fit relative bottom-[11px]'></div>
            </div>


            <Slide direction='up' triggerOnce>
              <div className='flex gap-2 items-center '
              ><BsMapFill />
                <p className='text-md  my-2'>Mangaon, Raigad</p>
              </div>
            </Slide>

            <div className=' w-full lg:flex-col my-4 font-semibold'>
              <div className='flex justify-between my-4'>

                <Bounce damping={0.1} triggerOnce>

                  <a href="mailto:dalvishrikant5456@gmail.com" target="_blank" rel="noopener noreferrer">

                    <div className='  flex justify-center items-center gap-2'>
                      <BsMailbox2 className=' text-xl' />
                      <p>Email</p>
                    </div>
                  </a>
                </Bounce>

                <Bounce damping={0.5} triggerOnce>
                  <a href="https://www.linkedin.com/in/shrikant-dalvi-025ba4318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <div className='  flex justify-center items-center gap-2'>
                      <BsLinkedin className=' text-xl' />
                      <p>LinkedIn</p>
                    </div>
                  </a>
                </Bounce>
              </div >

              <div className=' w-full flex justify-between'>
                <Bounce damping={0.8} triggerOnce>
                  <a href="https://github.com/shrikant-d5456" target="_blank" rel="noopener noreferrer">
                    <div className='  flex justify-center items-center gap-2 '>
                      <BsGithub className=' text-xl' />
                      <p>Github</p>
                    </div>
                  </a>
                </Bounce>

                <Bounce damping={1} triggerOnce>
                  <a href="https://telegram.org/dl" target="_blank" rel="noopener noreferrer">
                    <div className='  flex justify-center items-center gap-2'>
                      <BsTelegram className=' text-xl' />
                      <p>Teligram</p>
                    </div>
                  </a>
                </Bounce>

              </div>

            </div >

          </div >
        </div >


        {/* //About Section */}

        < Fade >
          <div className='w-full flex justify-center items-center'>
            <div className='box bg-gradient-to-r from-primary/50 via-primary/90 to-primary  dark:bg-gradient-to-r dark:from-white/50 dark:via-white/50 dark:to-white/50 text-white lg:w-2/3 text-center p-4 backdrop-blur shadow-lg '>
              <p className='text-2xl font-extrabold'>
                About Me
              </p>
              <hr className='my-4 border-white' />
              <p>
                I am a dedicated and passionate frontend developer with a strong foundation in creating user-centric and visually appealing web applications. Currently, I am pursuing a BTech in Information Technology at DBATU University, where I am in my fourth year of study. In addition to my academic pursuits, I am actively engaged in an internship as a frontend developer, working on the Scholarship Management System project. My responsibilities include designing Figma layouts, creating website interfaces, and developing pages using ReactJS.
              </p>

              <button className=' bg-primary hover:bg-primary/90 box   py-1 mt-2 transition-all text-sm text-white'>
                {/* <a href={pdf} className='anime px-4 py-1 ' download>Download Resume</a> */}
                <a href={'https://drive.google.com/file/d/1EUvayGzM_LrnxTWbKowPLfgxWWxu5VdF/view?usp=drivesdk'} className='anime px-4 py-1 ' download>Download Resume</a>
              </button>
            </div>
          </div>
        </Fade >
      </div >
    </>
  )
}

export default Home

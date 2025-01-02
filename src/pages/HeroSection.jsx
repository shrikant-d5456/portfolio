import React from 'react'
import DarkMode from './DarkMode'
import {Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import Shade from './Shade';
import pdf from '../Data/resume.pdf';
import img from '../assets/shreeImg.jpg';


const Home = () => {

  return (
    <>
    
   <Shade/>
    
    <div id='about' className='w-full flex-col justify-center items-center mt-[60px] overflow-hidden '>
      <DarkMode/>
      <div className='w-11/12 lg:flex md:flex flex-row justify-center items-center m-auto mb-5'>
      
      <JackInTheBox triggerOnce>
        <div className='anime lg:w-[300px] h-[300px] w-[300px] md:m-0 m-auto rounded-full  p-4  border-[#a8efff] '
        >
          <img
            className='h-full w-full object-cover rounded-full mix-blend-color-burn dark:mix-blend-darken'
            src={img} alt="" />

            className='h-full w-full object-cover rounded-full'
            src="https://2.bp.blogspot.com/-7VyC-X2pSrE/Vo0iGe_NX6I/AAAAAAAABGs/r8zGLJ1Anx4/s1600/CYAuUF_UoAATCw0.jpg" alt="Image Loaing.." />
        </div>
        
        </JackInTheBox>

        <div className='lg:w-1/3 md:w-2/3 w-full h-1/2 p-4 font-semibold'
        >
          <Slide direction='up' triggerOnce>
          <p className='text-3xl font-bold mt-4 tracking-wider'>Hey, I'm Shrikant Dalvi</p>
          <p className='text-xl my-2'>Passionated about <span className='font-extrabold  text-[#2cd6fc]'>Frontend Developer</span> and <span className='font-extrabold  text-[#2cd6fc]'>Ui Designer</span></p>
          </Slide >
          <div>
            <hr />
            <div className='dot dark:shadow w-fit relative bottom-[11px]'></div>
          </div>


          <Slide direction='up' triggerOnce>
          <div className='flex items-center '
          ><img
            className='flex w-5 h-5 mr-2 bg-white myImg rounded-full '
            src="https://cdn.iconscout.com/icon/free/png-512/free-location-2456681-2036135.png?f=webp&w=256" alt="" 
            />
            <p className='text-md  my-2'>Mangaon, Raigad</p>
          </div>
          </Slide>

          <div className='lg:flex-col my-4 font-semibold'>
            <div className='  flex justify-between my-4'>

            <Bounce damping={0.1} triggerOnce>

            <a 
            href="mailto:dalvishrikant5456@gmail.com "
            target="_blank" rel="noopener noreferrer">

            <a href="mailto:dalvishrikant5456@gmail.com" target="_blank" rel="noopener noreferrer">

              <div className=' hover:text-cyan-500 flex justify-center items-center gap-4'>
               <img
                  className='w-10 h-10'
                  src="https://cdn.iconscout.com/icon/free/png-512/free-email-mail-heart-like-love-newsletter-message-6-18160.png?f=webp&w=256" alt="" />
                <p>Email</p>
              </div>
            </a>
            </Bounce>

            <Bounce damping={0.5} triggerOnce>

            <a href="https://www.linkedin.com/in/shrikant-dalvi-025ba4318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">

            <a href="https://www.linkedin.com/in/shrikant-dalvi-025ba4318/" target="_blank" rel="noopener noreferrer">

              <div className=' hover:text-cyan-500 flex justify-center items-center gap-4'>
                <img
                  className='w-10 h-10'
                  src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-3855922-3201556.png?f=webp&w=256" alt="" />
                <p>LinkedIn</p>
              </div>
              </a>
              </Bounce>
            </div>

            <div className=' flex justify-between'>
            <Bounce damping={0.8} triggerOnce>
            <a href="https://github.com/shrikant-d5456" target="_blank" rel="noopener noreferrer">
              <div className=' hover:text-cyan-500 flex justify-center items-center gap-4 '>
                <img
                  className='w-10 h-10 bg-white rounded-full'
                  src="https://cdn.iconscout.com/icon/free/png-512/free-github-5285244-4406681.png?f=webp&w=256" alt="" />
                <p>Github</p>
              </div>
              </a>
              </Bounce>

              <Bounce damping={1} triggerOnce>
              <a href="https://telegram.org/dl" target="_blank" rel="noopener noreferrer">
              <div className=' hover:text-cyan-500 flex justify-center items-center gap-4'>
                <img
                  className='w-10 h-10'
                  src="https://cdn.iconscout.com/icon/free/png-512/free-telegram-3691230-3073750.png?f=webp&w=256" alt="" />
                <p>Teligram</p>
              </div>
              </a>
              </Bounce>

            </div>

          </div>

        </div>
      </div>


{/* //About Section */}

<Fade >
      <div className='w-full flex justify-center items-center'>
        <div className='box lg:w-2/3 text-center p-4 backdrop-blur shadow-lg '>
          <p className='text-2xl font-extrabold'>
          About Me 
          </p>
          <hr className='my-4 border-white' />
          <p>
          I am a dedicated and passionate frontend developer with a strong foundation in creating user-centric and visually appealing web applications. Currently, I am pursuing a BTech in Information Technology at DBATU University, where I am in my fourth year of study. In addition to my academic pursuits, I am actively engaged in an internship as a frontend developer, working on the Scholarship Management System project. My responsibilities include designing Figma layouts, creating website interfaces, and developing pages using ReactJS.
          </p>
          
          <button className=' bg-cyan-500 hover:bg-cyan-600   py-1 mt-2 transition-all text-sm text-white'>
            <a href={pdf} className='anime px-4 py-1'  download>Download Resume</a>
          </button>
        </div>
      </div>
      </Fade>
    </div>
    </>
  )
}

export default Home

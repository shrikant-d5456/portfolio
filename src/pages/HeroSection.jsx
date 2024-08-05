import React from 'react'
import DarkMode from './DarkMode'

const Home = () => {

  return (
    <div className='w-full flex-col justify-center items-center mt-[90px]  '>
      <DarkMode/>
      <div className='w-11/12 lg:flex md:flex flex-row justify-center items-center m-auto mb-5'>
        <div className='anime lg:w-[300px] h-[300px] w-[300px] md:m-0 m-auto rounded-full p-4 border-[#a8efff] '
        >
          <img
            className='h-full w-full object-cover rounded-full'
            src="https://2.bp.blogspot.com/-7VyC-X2pSrE/Vo0iGe_NX6I/AAAAAAAABGs/r8zGLJ1Anx4/s1600/CYAuUF_UoAATCw0.jpg" alt="" />
        </div>

        <div className='lg:w-1/3 md:w-2/3 w-full h-1/2 p-4 font-semibold'
        >
          <p className='text-3xl font-bold mt-4'>Hey, I'm Shrikant Dalvi</p>
          <p className='text-xl my-2'>Passionated to <span className='font-extrabold text-[#2cd6fc]'>Frontend Developer</span> and <span className='font-extrabold text-[#2cd6fc]'>Ui Designer</span></p>

          <div>
            <hr />
            <div className='dot w-fit relative bottom-[11px]'></div>
          </div>

          <div className='flex items-center'
          ><img
            className='w-5 h-5 mr-2 bg-white rounded-full'
            src="https://cdn.iconscout.com/icon/free/png-512/free-location-2456681-2036135.png?f=webp&w=256" alt="" 
            />
            <p className='text-md  my-2'>Mangaon, Raigad</p>
          </div>

          <div className='lg:flex-col my-4 font-semibold'>

            <div className='flex justify-between my-4'>

            <a href="/email" target="_blank" rel="noopener noreferrer">
              <div className='flex justify-center items-center gap-4'>
               <img
                  className='w-10 h-10'
                  src="https://cdn.iconscout.com/icon/free/png-512/free-email-mail-heart-like-love-newsletter-message-6-18160.png?f=webp&w=256" alt="" />
                <p>Email</p>
              </div>
            </a>

            <a href="/link" target="_blank" rel="noopener noreferrer">
              <div className='flex justify-center items-center gap-4'>
                <img
                  className='w-10 h-10'
                  src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-3855922-3201556.png?f=webp&w=256" alt="" />
                <p>LinkedIn</p>
              </div>
              </a>

            </div>

            <div className='flex justify-between'>
            <a href="https://github.com/shrikant-d5456" target="_blank" rel="noopener noreferrer">
              <div className='flex justify-center items-center gap-4'>
                <img
                  className='w-10 h-10 bg-white rounded-full'
                  src="https://cdn.iconscout.com/icon/free/png-512/free-github-5285244-4406681.png?f=webp&w=256" alt="" />
                <p>Github</p>
              </div>
              </a>

              <a href="/telig" target="_blank" rel="noopener noreferrer">
              <div className='flex justify-center items-center gap-4'>
                <img
                  className='w-10 h-10'
                  src="https://cdn.iconscout.com/icon/free/png-512/free-telegram-3691230-3073750.png?f=webp&w=256" alt="" />
                <p>Teligram</p>
              </div>
              </a>

            </div>

          </div>

        </div>
      </div>


{/* //About Section */}

      <div className='w-full flex justify-center items-center'>
        <div className='box lg:w-2/3 text-center p-4 '>
          <p className='text-2xl font-extrabold'>
          About Me 
          </p>
          <hr className='my-4 border-white' />
          <p>
          I am a dedicated and passionate frontend developer with a strong foundation in creating user-centric and visually appealing web applications. Currently, I am pursuing a BTech in Information Technology at DBATU University, where I am in my fourth year of study. In addition to my academic pursuits, I am actively engaged in an internship as a frontend developer, working on the Scholarship Management System project. My responsibilities include designing Figma layouts, creating website interfaces, and developing pages using ReactJS.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Home
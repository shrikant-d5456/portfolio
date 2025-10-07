import DarkMode from '../ui/DarkMode'
import { Bounce, Fade, JackInTheBox,Slide} from 'react-awesome-reveal';
import Shade from '../ui/Shade';
import img from '../../assets/shreeImg.jpeg';
import { BsGithub, BsLinkedin, BsMailbox2, BsMapFill, BsWhatsapp } from 'react-icons/bs';
import about from "../../Data/About";

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
              <img loading="lazy"
                className='h-full w-full object-cover rounded-full '
                src={img} alt="" />
            </div>

          </JackInTheBox>

          <div className='lg:w-1/3 md:w-2/3 w-full h-1/2 p-4 font-semibold'
          >
            <Slide direction='up' triggerOnce>
              <p className='text-3xl font-bold mt-4 tracking-wider'>Hey, I'm Shrikant Dalvi</p>
              <p className='text-lg my-2' >Passionate
                <span className='font-extrabold capitalize  text-primary dark:text-white'>
                  {about[0].heading[0]}
                </span>
                & <span className='font-extrabold capitalize  text-primary dark:text-white'>
                  {about[0].heading[1]}
                </span> | Freelance Innovator Turning Ideas into Interactive Experiences</p>
            </Slide >
            <div>
              <hr />
              <div className='dot an dark:shadow w-fit relative bottom-[11px]'></div>
            </div>


            <Slide direction='up' triggerOnce>
              <div className='flex gap-2 items-center '
              ><BsMapFill />
                <p className='text-md  my-2'>Mumbai, India</p>
              </div>
            </Slide>

            <div className=' w-full lg:flex-col my-4 font-semibold'>
              <div className=' grid grid-cols-2 space-y-2 my-4'>

                <Bounce damping={0.1} triggerOnce>
                  <a href="mailto:dalvishrikant5456@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className='flex items-center gap-2 hover:text-orange-600'>
                      <BsMailbox2 className=' text-xl' />
                      <p>Email</p>
                    </div>
                  </a>
                </Bounce>

                <Bounce damping={0.5} triggerOnce>
                  <a href="https://www.linkedin.com/in/shrikant-dalvi-025ba4318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <div className='  flex  items-center gap-2 hover:text-blue-600'>
                      <BsLinkedin className=' text-xl' />
                      <p>LinkedIn</p>
                    </div>
                  </a>
                </Bounce>

                <Bounce damping={0.8} triggerOnce>
                  <a href="https://github.com/shrikant-d5456" target="_blank" rel="noopener noreferrer">
                    <div className='  flex  items-center gap-2 hover:text-gray-600'>
                      <BsGithub className=' text-xl' />
                      <p>Github</p>
                    </div>
                  </a>
                </Bounce>

                <Bounce damping={1} triggerOnce>
                  <a href="https://wa.me/qr/OXX2A3XJPGKXA1" target="_blank" rel="noopener noreferrer">
                    <div className='  flex  items-center gap-2 hover:text-green-500'>
                      <BsWhatsapp className=' text-xl' />
                      <p>Whatsapp</p>
                    </div>
                  </a>
                </Bounce>
              </div >
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
                {about[0].desc}
              </p>

              <button className=' bg-primary hover:bg-primary/90 box   py-1 mt-2 transition-all text-sm text-white'>
                {/* <a href={pdf} className='anime px-4 py-1 ' download>Download Resume</a> */}
                <a target='_blank' href={about[0].resume_link} className='anime px-4 py-1 ' download>Download Resume</a>
              </button>
            </div>
          </div>
        </Fade >
      </div >
    </>
  )
}

export default Home

import React from 'react'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import BgAnime from './BgAnime';

const Shade = () => {

    return (
        <>
        <BgAnime/>
            <div className=' absolute w-screen h-screen overflow-hidden -z-0 dark:bg-black  '>
                <Slide direction="left" triggerOnce>
                    <div className=' absolute  left-[-390px] bottom-1 bounce '>
                        <div className=' shade-blue relative left-[130px] top-[-150px] shadow-2xl dark:shadow-white shadow-black'>
                        </div>
                        <div className='shade-blue relative left-[150px] top-[-100px] shadow-2xl dark:shadow-white shadow-black'>
                        </div>
                        <div className=' shade-blue relative left-[270px] top-[-100px] shadow-2xl dark:shadow-white shadow-black' >
                        </div>
                    </div>
                </Slide>


                 <Slide direction="right" triggerOnce className=' -z-20 absolute lg:top-[90%] md:top-[30%] top-[90%] right-1 ' >
                    <div className=' bounce'>
                        <div className='shade-blue relative left-[130px] top-[-150px] shadow-2xl dark:shadow-white shadow-black'>
                        </div>
                        <div className='shade-blue relative left-[200px] top-[-100px] shadow-2xl dark:shadow-white shadow-black'>
                        </div>
                        <div className='shade-blue relative left-[367px] top-[-100px] shadow-2xl dark:shadow-white shadow-black' >
                        </div>
                    </div> 
                </Slide>
            </div>
        </>

    )
}

export default Shade;
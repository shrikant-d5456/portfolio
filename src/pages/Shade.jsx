import React from 'react'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';


const Shade = () => {

    return (
        <>

            <div className='w-screen h-screen absolute overflow-hidden '>
                <Slide direction="left" triggerOnce>
                    <div className=' absolute  left-[-390px] top-1'>
                        <div className='shade-blue relative left-[130px] top-[-150px]'>
                        </div>
                        <div className='shade-blue relative left-[150px] top-[-100px]'>
                        </div>
                        <div className='shade-blue relative left-[270px] top-[-100px]' >
                        </div>
                    </div>
                </Slide>


                 <Slide direction="right" triggerOnce className=' absolute lg:top-[90%] md:top-[30%] top-[90%] right-1' >
                    <div >
                    
                        <div className='shade-blue relative left-[130px] top-[-150px]'>
                        </div>
                        <div className='shade-blue relative left-[200px] top-[-100px]'>
                        </div>
                        <div className='shade-blue relative left-[367px] top-[-100px]' >
                        </div>
                    </div> 
                </Slide>
            </div>
        </>

    )
}

export default Shade;

import React, { useEffect, useState } from 'react'
import { BsQuote } from 'react-icons/bs'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import Compliments from '../Data/ComplimentData'
import BgBlur from './BgBlur';

const Compliment = () => {

    // const [index, setIndex] = useState(0);
    // const [hideL, setHideL] = useState(true);
    // const [hideR, setHideR] = useState(true);

    // useEffect(() => {

    //     setTimeout(() => {
    //         if (index + 1 === Compliments.length) {

    //             setIndex(0);
    //         }
    //         else {
    //             setIndex(index + 1)
    //         }
    //     }, 5000)

    // })

    

    // const btnLeft = () => {
    //     if (index == 0) {
    //         setHideL(false);
    //         setHideR(true);
    //     }
    //     else {
    //         setHideL(true);
    //         setHideR(true);
    //         setIndex(index - 1);
    //     }
    // }

    // const btnRight = () => {
    //     console.log(index)
    //     if (index + 1 == Compliments.length) {
    //         setHideR(false);
    //         setHideL(true);
    //     }
    //     else {
    //         setHideR(true);
    //         setIndex(index + 1);
    //         setHideL(true);
    //     }
    // }

    return (
        <div className='dark:bg-black dark:text-white py-8'>
            <div className='lg:w-8/12 md:w-11/12 w-full lg:h-screen overflow-hidden flex-col m-auto my-4 mt-[10%] text-sm lg:text-base p-4'>
            
            {/* <BgBlur/> */}
           
           <p className='text-2xl font-extrabold  '>Testimonials  </p><hr className=' mt-4 ' />
        <div className='dot dark:shadow w-fit relative bottom-[11px]'></div>
            <div className="dark:from-white/50 dark:via-white/50 dark:to-white/50 bg-gradient-to-r from-primary/50 via-primary/90 to-primary p-8 rounded-lg text-white my-4">
            <h1 className="text-3xl font-bold mb-4">Good Impression</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius vitae neque eaque explicabo consequuntur nam, incidunt veniam quaerat delectus!</p>
            </div>

                <div className=' animate-marquee  w-10/12 m-auto  flex gap-8   '>

                    {Compliments.map((ele) => (
                        <JackInTheBox key={ele.id} >
                            <div  className=' w-[400px] mx-4 shadow-md dark:border-[1px]  rounded-br-3xl rounded-t-3xl  border-white px-6 py-4'>
                                <div className=' w-full flex gap-4 '>
                                    <div className=' w-[60px]'>
                                        <img
                                        className=' w-[50px] h-[50px] rounded-full object-fill shadow-xl border-[1px]'
                                        src={ele.img ? ele.img : "https://bitviraj.com/images/singh.png"} alt="" 
                                        />
                                    </div>
                                    <div className=' w-full'>
                                        <p className=' text-base font-bold'>{ele.name}</p>
                                        <p >{ele.comp}</p>
                                        <hr className=' my-1 w-full' />
                                    </div>
                                </div>
                                <BsQuote className=' mt-1 text-primary' />
                                <p className='  line-clamp-2 my-1 text-wrap'>
                                    {ele.comment}
                                </p>
                                <BsQuote className='flex justify-end rotate-180  text-primary' />

                            </div>
                        </JackInTheBox>
                    ))}

                </div>
            
        </div>
        </div>
    )
}

export default Compliment

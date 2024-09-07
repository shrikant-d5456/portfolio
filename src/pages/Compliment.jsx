import React, { useEffect, useState } from 'react'
import { BsQuote } from 'react-icons/bs'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import Compliments from '../Data/ComplimentData'

const Compliment = () => {

    const [index, setIndex] = useState(0);
    const [hideL, setHideL] = useState(true);
    const [hideR, setHideR] = useState(true);

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

    

    const btnLeft = () => {
        if (index == 0) {
            setHideL(false);
            setHideR(true);
        }
        else {
            setHideL(true);
            setHideR(true);
            setIndex(index - 1);
        }
    }

    const btnRight = () => {
        console.log(index)
        if (index + 1 == Compliments.length) {
            setHideR(false);
            setHideL(true);
        }
        else {
            setHideR(true);
            setIndex(index + 1);
            setHideL(true);
        }
    }

    return (
        <div className='lg:w-8/12 md:w-11/12 w-full flex-col m-auto my-4 mt-[10%] text-sm lg:text-base'>
       
            <p className='text-2xl font-extrabold md:ml-0 ml-4'>A word from viewers</p><hr className='my-4' />

            <marquee className='w-full h-[260px]' scrollamount="4" direction="left">
                <div className='w-full flex gap-8  '>

                    {Compliments.map((ele, ind) => (
                        <JackInTheBox >
                            <div key={index} className='anime w-[400px] mx-4 bg-gradient-to-br from-cyan-100 via-transparent to-cyan-100 shadow-2xl dark:border-[1px]  rounded-br-3xl rounded-t-3xl  border-white px-6 py-4'>
                                <div className=' w-full flex gap-4 '>
                                    <div className=' w-[60px]'><img
                                        className=' w-[50px] h-[50px] rounded-full object-fill shadow-xl border-[1px]'
                                        src={ele.img ? ele.img : "https://bitviraj.com/images/singh.png"} alt="" /></div>
                                    <div className=' w-full'>
                                        <p className=' text-base font-bold'>{ele.name}</p>
                                        <p >{ele.comp}</p>
                                        <hr className=' my-1 w-full' />
                                    </div>
                                </div>
                                <BsQuote className=' mt-1 text-cyan-400' />
                                <p className=' my-1 text-wrap'>
                                    {ele.comment}
                                </p>
                                <BsQuote className='flex justify-end rotate-180  text-cyan-400' />

                            </div>
                        </JackInTheBox>
                    ))}

                </div>
            </marquee>


            {/* <div className='flex justify-center items-center my-4'>
                {hideL &&
                    <div className='w-10' onClick={btnLeft}>
                        <BsArrowLeftCircleFill />
                    </div>
                }

                {hideR &&
                    <div className='w-10' onClick={btnRight}>
                        <BsArrowRightCircleFill />
                    </div>
                }

            </div> */}
        </div>
    )
}

export default Compliment

import React from 'react'
import { BsXCircleFill } from 'react-icons/bs'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import BgAnime from './BgAnime';

const bannerImg = "https://copilot.microsoft.com/th/id/BCO.34f41fdf-e984-4dec-930b-9aebf6cbe935.png";
const Banner = ({ hide, setHide }) => {
    return (
        <div className={`${!hide && "hidden "} w-full h-screen fixed flex justify-center items-center bg-gradient-to-tr from-black via-slate-900 to-slate-800 z-50 `} >
            <BgAnime />

            <JackInTheBox>
                <div className="relative lg:w-3/5 w-4/5 m-auto rounded-2xl overflow-hidden shadow-lg">
                    <button className=' absolute top-4 lg:right-4 right-4 z-30 text-white text-3xl' onClick={() => setHide(false)}>
                        <BsXCircleFill />
                    </button>
                    <img
                        src={bannerImg}
                        alt="Banner"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-pink-800/40 to-transparent"></div>
                </div>

            </JackInTheBox>
        </div>

    )
}

export default Banner

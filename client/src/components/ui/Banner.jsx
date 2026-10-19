import React from 'react';
import { BsXCircleFill } from 'react-icons/bs';
import { JackInTheBox } from 'react-awesome-reveal';
import BgAnime from './BgAnime';

const bannerImg = 'https://copilot.microsoft.com/th/id/BCO.34f41fdf-e984-4dec-930b-9aebf6cbe935.png';

const Banner = ({ hide, setHide }) => {
  return (
    <div className={`${!hide && 'hidden '} fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-tr from-black via-slate-900 to-slate-800`}>
      <BgAnime />

      <JackInTheBox>
        <div className="relative m-auto w-4/5 overflow-hidden rounded-2xl shadow-lg lg:w-3/5">
          <button className="absolute right-4 top-4 z-30 text-3xl text-white" onClick={() => setHide(false)}>
            <BsXCircleFill />
          </button>
          <img src={bannerImg} alt="Banner" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-800/40 to-transparent" />
        </div>
      </JackInTheBox>
    </div>
  );
};

export default Banner;

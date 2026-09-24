import Image from 'next/image';
import React from 'react';
import banneiImg from '@/app/assets/banner.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image
      alt="Banner iamge"
      src={banneiImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>

        <p className='text-lime-300 py-6'>WORKOUT LIBRARY</p>
      <h1 className="text-5xl font-bold">TRAIN WITH INTENT. LOG <br />
EVERY SET.</h1>
      <p className="py-6 text-gray-500">
       FitLog is a dark, no-nonsense gym companion: pick a lift,  lock it 
into today's plan, and watch the week's work add up.
      </p>
      <button className="btn btn-primary bg-lime-300 text-gray-900 font-bold">BROWSE WORKOUTS</button>
    </div>
  </div>
</div>
    );
};

export default Banner;
import React from "react";
import { aboutProp } from "../Data";

const Proposition = () => {
  return (
    <div className="bg-[#F1F3FB] w-full my-16">
      <div className='flex flex-col items-center w-full px-4'>
        <h1 className='text-3xl md:text-5xl lg:text-5xl mt-10 md:mt-20 font-bold'>Value Proposition</h1>
        <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-[150px] md:w-[300px] mt-4 md:mt-6 h-[2px] border-none" />
        <p className="text-lg md:text-2xl lg:text-xl text-center mt-6 md:mt-9 w-full md:w-3/4 lg:w-1/2 px-4">
          Our unique value proposition makes us different, and we are confident
          our clients will attest to this.
        </p>
      </div>
      <div className='flex flex-col items-center w-full px-4'>
        <h1 className='text-2xl md:text-4xl lg:text-3xl font-semibold text-black mt-10 md:mt-20'>Tangible & Sustainable Impact</h1>
      </div>

      <div className='flex flex-wrap justify-center gap-6 md:gap-9 w-full mx-auto py-8 md:py-16 px-4'>
      {aboutProp.map((data) => (
          <div key={data.id} className=' w-full md:w-[400px] lg:w-[400px] gap-4 md:gap-6 p-6 md:p-9 bg-white mt-8 md:mt-12 shadow-xl rounded-md'>
            <h1 className='text-xl md:text-2xl lg:text-2xl font-bold mb-4 md:mb-6'>{data.title}</h1>
            <p className='text-sm md:text-sm lg:text-sm'>{data.desc}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proposition;

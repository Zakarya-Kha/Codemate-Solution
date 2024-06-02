import React from 'react';
import { techData } from '../Data';

const Technology = () => {
  return (
    <div className='p-8 md:p-20 bg-purple-950 text-white w-full'>
      <h1 className='text-center text-4xl md:text-6xl font-bold mb-10 md:mb-16'>Technology Development</h1>
      <div className='flex flex-wrap justify-center gap-6 md:gap-9'>
        {techData.map((item) => (
          <div key={item.id} className='border w-full md:w-[45%] lg:w-[30%] p-6 md:p-9 shadow-md rounded-md bg-white text-black'>
            <h1 className='text-xl md:text-[20px] font-semibold'>{item.title}</h1>
            <p className='text-lg md:text-[16px] mt-3 mb-4'>{item.desc}</p>
            <a className='text-blue-400 text-lg md:text-xl  underline' href={item.link}>Read More..</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;

import React from 'react';
import { numberDataAbout } from '../Data';

const Numbers = () => {
  return (
    <div className='my-8 md:my-16 border-2 w-full md:w-[90vw] mx-auto'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl md:text-5xl font-bold'>In Numbers</h1>
        <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-36 md:w-[300px] mt-4 md:mt-6 h-1 border-none" />
      </div>
      <div className='flex flex-wrap justify-center gap-4 md:gap-9 mt-4 md:mt-9 mb-4 md:mb-9'>
        {numberDataAbout.map((number) => (
          <div key={number.id} className='flex flex-col items-center text-center shadow-md rounded-md p-4 md:p-6 w-full md:w-[20%]'>
            <p className='text-2xl md:text-3xl font-bold mb-2'>{number.title}</p>
            <p className='text-lg md:text-xl'>{number.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Numbers;

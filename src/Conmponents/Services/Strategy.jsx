import React from 'react';
import { cardData } from '../Data';

const Strategy = () => {
  return (
    <div className='my-8 md:my-16'>
      <div>
        <h1 className='text-center text-4xl md:text-6xl font-bold mb-4'>Strategy & Transformation</h1>
      </div>
      <div className='flex flex-wrap gap-6 md:gap-4 justify-center  p-6 md:p-9'>
        {cardData.map((item) => (
          <div key={item.id} className='w-full sm:w-[45%] md:w-[30%] border p-6 md:p-12 mx-3 md:mx-4 shadow-xl'>
            <h1 className='text-xl md:text-[20px] font-semibold'>{item.title}</h1>
            <p className='text-lg md:text-[16px] mt-3 mb-4'>{item.description}</p>
            <a className='text-blue-400 text-lg md:text-xl underline' href={item.link}>Read More...</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategy;
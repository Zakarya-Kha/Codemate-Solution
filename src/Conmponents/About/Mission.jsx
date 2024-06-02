import React from 'react';

const Mission = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap justify-around w-full'>
      <div className='w-full md:w-[47vw] p-10 md:p-9 text-white bg-[#2f1341]'>
        <h1 className='text-3xl md:text-3xl font-bold text-center'>Our Mission</h1>
        <p className='text-xl md:text-xl text-center mt-6 md:mt-12'>Empowering organizations with sustainability through change enablement, knowledge, technology, and innovation.</p>
      </div>
      <div className='w-full md:w-[47vw] p-10 md:p-9'>
        <h1 className='text-3xl md:text-3xl font-bold text-center'>Our Purpose</h1>
        <p className='text-xl md:text-xl mt-6 md:mt-12 text-center'>To be at the forefront of driving positive societal change across all segments.</p>
      </div>
    </div>
  );
}

export default Mission;

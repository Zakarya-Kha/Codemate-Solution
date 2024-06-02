import React from 'react'
import { expDataAbout } from '../Data'

const Experience = () => {
  return (
    <div className='my-16 md:my-44 p-8 md:p-16'>
      <div className='flex flex-col items-center w-full'>
        <h1 className='text-3xl md:text-5xl font-bold text-center'>Extensive Experience & Expertise</h1>
        <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-32 md:w-72 mt-4 md:mt-6 h-1 border-none" />
      </div>

      <div className='flex flex-wrap justify-center gap-6 md:gap-9 w-full mx-auto'>
      {expDataAbout.map((data) => (
          <div key={data.id} className=' w-full md:w-[400px] lg:w-[400px] gap-4 md:gap-6 p-6 md:p-9 bg-white mt-8 md:mt-12 shadow-xl rounded-md'>
            <h1 className='text-xl md:text-2xl lg:text-2xl font-bold mb-4 md:mb-6'>{data.title}</h1>
            <p className='text-sm md:text-sm lg:text-sm'>{data.desc}</p>
            <p className='text-sm md:text-sm lg:text-sm'>{data.desc1}</p>
            <p className='text-sm md:text-sm lg:text-sm'>{data.desc2}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience

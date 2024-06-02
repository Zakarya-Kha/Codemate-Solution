import React from 'react'
import { aboutData } from '../Data'

const Values = () => {
  return (
    <div className='my-24 md:my-56 bg-slate-50 w-full p-8 md:p-16'>
      <div className='flex flex-col items-center  w-full'>
        <h1 className='text-2xl md:text-4xl lg:text-4xl font-bold'>Corporate Values</h1>
        <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-32 md:w-72 mt-4 md:mt-6 h-[2px]" />
      </div>

      <div className='flex flex-wrap  justify-center gap-6 md:gap-2 w-full mx-auto'>
        {aboutData.map((data) => (
          <div key={data.id} className=' w-full md:w-[400px] lg:w-[400px] gap-4 md:gap-6 p-6 md:p-9 bg-white mt-8 md:mt-12 shadow-xl rounded-md'>
            <h1 className='text-xl md:text-2xl lg:text-2xl font-bold mb-4 md:mb-6'>{data.title}</h1>
            <p className='text-sm md:text-sm lg:text-sm'>{data.desc1}</p>
            <p className='text-sm md:text-sm lg:text-sm'>{data.desc2}</p>
            <p className='text-sm md:text-sm lg:text-sm'>{data.desc3}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Values

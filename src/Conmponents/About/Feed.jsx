import React from 'react';

const Feed = () => {
  return (
    <div className="relative">
      <div className='w-full'>
        <img
          className=" bg-blue-950 h-[70vh] w-full"
          src="https://jmminnovations.com/_next/static/media/AboutUsMask.fbb8461c.png"
          alt=""
        />
      </div>
      <div className="absolute top-0 text-white flex flex-col w-full h-full justify-center px-6 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold">About us</h1>
        <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-48 md:w-[300px] mt-4 h-[2px] border-none" />
      </div>
    </div>
  )
}

export default Feed;

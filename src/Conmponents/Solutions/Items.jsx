import React from 'react';
import { solutionItems } from "../Data";

const Items = () => {
  const renderItem = (item, index) => {
    const isEven = index % 2 === 0;

    return (
      <div
        key={item.id}
        className={`flex flex-col md:flex-row justify-around items-center gap-16 my-10 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      >
        <div className="w-full md:w-[40vw] p-6 flex flex-col justify-center">
          <p className="text-4xl md:text-7xl text-green-300">{item.number}</p>
          <h1 className="text-2xl md:text-4xl font-bold my-4">{item.title}</h1>
          <p className='text-lg md:text-xl'>{item.desc}</p>
          <a href={item.link} className="text-blue-500 mt-4 text-lg md:text-xl">
            Read More...
          </a>
        </div>
        <div className="w-full md:w-[40vw]">
          <img className="w-full h-auto" src={item.img} alt={item.title} />
        </div>
      </div>
    );
  };

  return (
    <div className="mx-4 md:mx-10">
      {solutionItems.map((item, index) => renderItem(item, index))}
    </div>
  );
};

export default Items;
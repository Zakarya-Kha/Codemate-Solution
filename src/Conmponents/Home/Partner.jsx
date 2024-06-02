import React from "react";
import { patnerData } from "../Data";

const Partner = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://jmminnovations.com/_next/static/media/partner_pattern_bottom@2x.1ae89547.png?imwidth=384)' }}>
      <div className="absolute top-0 text-center w-full mt-8 ">
        <h1 className="text-black text-2xl md:text-4xl font-bold">
          Our Partners
        </h1>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center mt-16">
        <div className="flex flex-wrap justify-center w-full  px-4 md:px-0 md:w-[80vw] md:mt-16 mt-24">
          {patnerData.map((item) => (
            <div key={item.id} className="my-6">
              <img
                className="w-[150px] h-[75px] md:w-[200px] mr-4 md:mt-16 md:h-[100px] border shadow-lg object-contain"
                src={item.img}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
import React from 'react';
import { storiesData } from '../Data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Stories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false // Remove next and prev arrows
  };

  return (
    <div className='my-8'>
      <div className='text-center'>
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Case Studies & Stories</h1>
      </div>
      <Slider {...settings}>
        {storiesData.map((story, id) => (
          <div key={id} className="relative mb-8 ml-2.5 ">
            <div className="flex justify-center">
              <img className='w-full md:w-[90vw] lg:w-[80vw] xl:w-[70vw] h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover' src={story.img} alt={story.title} />
            </div>
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-65">
              <div className="text-white p-4 md:p-8 text-left w-[90vw] md:w-[80vw] lg:w-[600px]">
                <h1 className="text-lg md:text-xl font-bold mb-4">{story.title}</h1>
                <p className="text-xs md:text-sm mb-4">{story.description}</p>
                <a href={story.link} className="text-blue-500">Read More...</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Stories;

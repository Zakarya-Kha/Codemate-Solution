import React from "react";
import { cardData } from "../Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Services = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" w-full md:p-16 p-6 my-5 md:my-12">
      <style>
        {`
          /* Add border between div elements */
          .slick-slide > div {
            position: relative;
            padding-right: 20px;
          }

          .slick-prev:before,
.slick-next:before {
  color: #000000;
}

          .slick-slide > div:not(:last-child)::after {
            content: "";
            position: absolute;
            top: 0;
            right: 10px;
            width: 1px;
            height: 100%;
            /* Adjust color as needed */
          }
        `}
      </style>
      <div className="text-center flex flex-col items-center mb-16">
        <h1 className="md:text-5xl text-2xl font-bold text-center mb-2">OurServices</h1>
        <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-48 md:w-[400px] mt-4 h-[2px] border-none" />

      </div>
      <Slider {...settings}>
        {
          cardData.map((item) => (
            <div key={item.id} className="bg-white border shadow-md rounded-md md:w-[300px]   p-6">
          <h1 className="md:text-2xl text-xl  font-bold">
            {item.title}
          </h1>
          <p className="md:text-lg text-sm my-3 text-gray-600">
            {item.description}
          </p>
          <Link className="text-green-400 md:text-xl" to={item.link}>
            Read more..
          </Link>
        </div>
          ))
        }
        
      </Slider>
    </div>
  );
};

export default Services;

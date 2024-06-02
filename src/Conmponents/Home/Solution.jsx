import React from "react";
import { dataSolution } from "../Data";
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
    <div className="bg-purple-900 w-full md:p-16 p-7 my-8 md:my-12">
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
            background-color: #ccc; /* Adjust color as needed */
          }
        `}
      </style>
      <div className="text-center flex flex-col items-center  mb-16">
        <h1 className="md:text-5xl text-2xl font-bold text-center mb-2">Our Solution</h1>
        <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-48 md:w-[400px] mt-4 h-[2px] border-none" />

      </div>
      <Slider {...settings}>
        {
          dataSolution.map((item) => (
            <div key={item.id} className="bg-white w-[300px] shadow-md rounded-md p-6">
          <img src={item.img} alt="" />
          <p className="md:text-lg text-sm my-2">
            {item.title}
          </p>
          
        </div>
          ))
        }
        
      </Slider>
    </div>
  );
};

export default Services;

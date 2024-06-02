import React from "react";
import Icons from "./Icons";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center "
      style={{
        backgroundImage:
          "url('https://jmminnovations.com/_next/static/media/HomeBg.1d37271c.png')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Icons/>
      

      <div className="absolute inset-0 flex ml-9 flex-col justify-center items-start px-8 lg:px-16">
        <div className="bg-white bg-opacity-80 p-8 lg:p-9 max-w-3xl">
          {" "}
          {/* Adjust max-width as needed */}
          <h1 className="text-2xl lg:text-4xl font-bold text-black mb-4">
            End-to-End Solutions
          </h1>
          <p className="text-sm lg:text-xl text-black mb-8">
            Technology Solutions and Digital Transformation Services
          </p>
        </div>

        <Link
          to="/contact"
          className="flex items-center mt-6 ml-9 px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-full"
        >
          <Link to='/contact'><span className="mr-2">Contact Us</span></Link>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Feed;

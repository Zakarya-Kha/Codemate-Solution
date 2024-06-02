import React from "react";
import { FaPhoneSquare } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const StayInTouch = () => {
  return (
    <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md w-full lg:w-1/2 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-6">Stay in touch</h2>
      <form className="w-full max-w-sm">
        <input
          type="email"
          placeholder="Enter your Email Address"
          className="w-full p-3 rounded-md mb-4 text-gray-900"
        />
        <button className="w-full p-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-md">
          Submit
        </button>

        <div className="mt-6 flex flex-col  items-center">
          <FaPhoneSquare className="md:text-3xl text-xl" />
          <p className="md:text-xl font-semibold">+966 (0)11 236 5881</p>
        </div>

        <div className="mt-6 flex flex-col  items-center">
          <MdOutlineMail className="md:text-3xl text-xl " />
          <p className="md:text-xl text-sm font-semibold">solutions@jmminnovations.com</p>
        </div>
      </form>
    </div>
  );
};

export default StayInTouch;

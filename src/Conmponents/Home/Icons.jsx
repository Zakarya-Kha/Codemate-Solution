import React from 'react';
import { Link } from 'react-router-dom';

const Icons = () => {
  return (
    <div className="hidden md:block">
      <div className="z-10 inset-y-0 left-0 fixed flex flex-col justify-center items-center px-8 space-y-4 lg:space-y-6">
        <Link to="https://www.linkedin.com" className="bg-white p-3 rounded-full shadow-md hover:bg-blue-700">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </Link>
        <Link to="https://twitter.com" className="bg-white p-3 rounded-full shadow-md hover:bg-blue-600 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
            alt="Twitter"
            className="w-6 h-6"
          />
        </Link>
        <Link to="https://www.facebook.com" className="bg-white p-3 rounded-full shadow-md hover:bg-blue-600">
          <img
            src="https://yersizkumpanya.com/wp-content/uploads/2018/11/facelogo.png"
            alt="Facebook"
            className="w-6 h-6"
          />
        </Link>
      </div>
    </div>
  );
};

export default Icons;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const About = () => {
  return (
    <div className="flex flex-wrap bg-slate-200 p-8">
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          className="w-3/4 md:w-3/4 lg:w-3/5"
          src="https://jmminnovations.com/_next/static/media/dreamstime_xl_177376037@2x.d50d8e06.png?imwidth=1920"
          alt="Kingdom Tower"
        />
      </div>
      <div className="w-full md:w-1/2 p-6 md:pl-16 mt-8 md:mt-0">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
        <p className="text-xl font-light mb-4">End-to-end technology and digital transformation services</p>
        <p className="md:text-lg text-sm  text-gray-700 mb-8">
          JMM INNOVATIONS is a rising Saudi company offering comprehensive technology solutions and digital transformation services. Our offerings span advisory, data, cloud, software development, and integration services. We take pride in guiding our customers seamlessly through their entire digital journeys, ensuring rapid, cutting-edge, and professional service delivery. Supporting the Kingdom’s Vision 2030, our objective is to harness our nation’s unique strengths, addressing local technology requirements. With our wealth of experience and expertise, we champion digital-led innovations and provide digitally-enabled intelligent services to our clientele.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/about" className="flex items-center text-blue-500 hover:text-blue-700 font-medium">
            <FaArrowRight className="mr-2" />
            Know More...
          </Link>
          <a
            href='/Public/company/profile.pdf'
            className="text-blue-500 hover:text-blue-700 font-medium flex items-center"
            download
          >
            Download Company Profile
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

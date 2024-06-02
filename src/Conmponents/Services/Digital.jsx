import React from "react";

const Digital = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full">
          <img
            className="bg-blue-950 h-[70vh] w-full"
            src="https://jmminnovations.com/_next/static/media/Group%2018029.a5ba8e68.png"
            alt="Digital Transformation"
          />
        </div>
        <div className="absolute top-0 text-white flex flex-col w-full h-full justify-center px-6 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold">Digital Transformation</h1>
          <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-48 md:w-[300px] mt-4 h-[2px] border-none" />
        </div>

        
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-16 lg:mt-[-5px]">
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/DIGITALTRANSFORMATION1.5eeceb6a.jpeg?imwidth=640"
            alt="Digital Transformation Challenge"
          />
        </div>
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0 mb-9 flex flex-col justify-center ">
            <h1 className="text-xl lg:text-3xl font-bold mb-3">Challenge</h1>
            <p className="text-lg lg:text-xl">
              Digital transformation and innovation are forcing businesses to adapt rapidly. We are here to assist you in developing end-to-end digital solutions through a comprehensive digital transformation in your organization to create a meaningful impact for every stakeholder in your ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse  lg:flex-row mt-16 lg:mt-[-5px] lg:mb-[-25px]">
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0  mb-9 flex flex-col justify-center">
            <h1 className="text-xl lg:text-3xl font-bold mb-3 mt-6">Offerings</h1>
            <p className="text-lg lg:text-xl">
              Our goal is to add substantial value by fueling sustainable growth, optimizing operational procedures and processes, saving costs, promoting digital experiences and mindset, improving customer experience, devising strategic plans, and multiplying your organization's profitability while giving you an edge over your competitors in the evolving technological race.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/DigitalTransformation2.a6ad50e6.jpeg?imwidth=640"
            alt="Digital Transformation Offerings"
          />
        </div>
      </div>

      <div className="border px-6 lg:px-9 py-9 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white mt-6">
        <h1 className="text-xl lg:text-2xl font-bold mb-3">How We Help</h1>
        <p className="text-sm lg:text-lg">
          We believe that digital transformation goes beyond technology. It is a mindset and therefore while planning for your organization's digital transformation, we consider all internal and external factors including data, latest customer behavior patterns, trend analysis, industry benchmarks, market insights, and a practical assessment for your stakeholders and organizations. We are accustomed to providing customized, efficient, impactful, and practical solutions that result in significant value to our clients and partners. In addition, we strive to develop an implementable digital transformation roadmap for our clients while giving special consideration to the overall organization’s goals and objectives.
        </p>
      </div>
    </>
  );
};

export default Digital;

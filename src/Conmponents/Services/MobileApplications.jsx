import React from "react";

const MobileApplications = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold">
            Business & Mobile Applications
          </h1>
          <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-48 md:w-[300px] mt-4 h-[2px] border-none" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-16 lg:mt-[-5px]">
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/business_mobile1.eedbba90.jpeg?imwidth=640"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0 mb-9 flex flex-col justify-center ">
            <h1 className="text-xl lg:text-3xl font-bold mb-3">Challenge</h1>
            <p className="text-lg lg:text-xl">
              In today's business landscape, regardless of industry or business
              size, technology has transformed the way we operate, making
              business and mobile applications essential for engaging
              stakeholders, selling products, and delivering services.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse  lg:flex-row mt-16 lg:mt-[-5px] lg:mb-[-25px]">
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0  mb-9 flex flex-col justify-center">
            <h1 className="text-xl lg:text-3xl font-bold mb-3 mt-6">
              Offerings
            </h1>
            <p className="text-lg lg:text-xl">
              Our focus is on designing, developing, and customizing seamless
              applications tailored to the unique needs of organizations.
              Prioritizing user-friendly interfaces, scalability, security, and
              engaging features, we create applications that optimize user
              experiences and performance.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/BUSINESS%20&%20MOBILE%20APPLICATIONS_off@2x.5b45a080.png?imwidth=3840"
            alt=""
          />
        </div>
      </div>

      <div className="border px-6 lg:px-9 py-9 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white mt-6">
        <h1 className="text-xl lg:text-2xl font-bold mb-3">How We Help</h1>
        <p className="text-sm lg:text-lg">
          Our experts start by understanding clients' challenges, needs, and
          pain points. We design prototypes and Minimum Viable Products (MVPs)
          to test scalable solutions, validated with stakeholders. Once the
          solution design is approved, the development phase begins, followed by
          rigorous quality testing and delivery. To enhance the omni-channel
          experience, we complement mobile apps with web applications. Our
          experts are equipped to navigate the complexities of the systems and
          applications development lifecycle, addressing potential challenges.
          <br />
          Our approach ensures tailored applications that elevate user
          engagement and operational efficiency.
        </p>
      </div>
    </>
  );
};

export default MobileApplications;

import React from "react";

const Management = () => {
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
            Crisis and Disaster Management
          </h1>
          <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-48 md:w-[300px] mt-4 h-[2px] border-none" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-16 lg:mt-[-5px]">
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/crisis1.6b242f48.jpeg?imwidth=640"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0 mb-9 flex flex-col justify-center ">
            <h1 className="text-xl lg:text-3xl font-bold mb-3">Challenge</h1>
            <p className="text-lg lg:text-xl">
              Disruptions, whether from cyber threats, system failures, or other
              digital crises, pose substantial risks to an organization's
              digital operations, potentially leading to severe consequences.
              While some digital threats can be anticipated and mitigated, the
              unpredictable nature of technology means business continuity
              requires a robust, scientifically-informed readiness to ensure
              everyone's safety and continuation of critical digital workflows
              during such disruptions.
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
              We empower organizations with strategies specifically tailored for
              digital crises, developing pre-emptive, emergency response, and
              post-event recovery plans. These plans aim to minimize potential
              digital disruptions' impact, ensuring seamless digital operations
              and the highest level of business continuity in the digital realm.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/crisis2.d19b1d52.jpeg?imwidth=640"
            alt="Digital Transformation Offerings"
          />
        </div>
      </div>

      <div className="border px-6 lg:px-9 py-9 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white mt-6">
        <h1 className="text-xl lg:text-2xl font-bold mb-3">How We Help</h1>
        <p className="text-sm lg:text-lg">
          Our proactive approach begins by involving key digital stakeholders.
          We design damage-mitigating and damage-avoiding strategies that are
          easy to implement.
          <br /> Through the integration of advanced digital technologies and
          embedding digital disaster management techniques into the
          organization's culture, we enhance its resilience against unforeseen
          technological challenges.
          <br /> Clear definitions of digital roles, responsibilities, and
          skills are provided to eliminate ambiguities. Digital crisis
          simulation exercises are an integral part of our strategy. <br /> They
          significantly enhance staff preparedness and responsiveness,
          showcasing the organization's prowess in handling digital emergencies.
          Post-event, we focus on:
          <br /> • Revisiting foundational digital strategies <br /> •
          Re-aligning and redesigning digital workflows to mitigate future risks{" "}
          <br /> • Reducing digital emergency response times even further
          <br /> • Identifying and eliminating any elements that could hinder
          digital business continuity.
        </p>
      </div>
    </>
  );
};

export default Management;

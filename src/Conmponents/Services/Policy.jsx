import React from "react";

const Policy = () => {
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
            Digital Governance & Policy
          </h1>
          <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-48 md:w-[300px] mt-4 h-[2px] border-none" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-16 lg:mt-[-5px]">
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/digitalgovernance.196e770e.jpeg?imwidth=640"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0 mb-9 flex flex-col justify-center ">
            <h1 className="text-xl lg:text-3xl font-bold mb-3">Challenge</h1>
            <p className="text-lg lg:text-xl">
              Data stands as a cornerstone for organizations, empowering them to
              make informed decisions, deepen customer understanding, escalate
              sales, and personalize services. While data's availability is
              undisputed, it's the governance policies that dictate its
              effective and secure usage. Data, a potential catalyst for
              competitive advantage, can become a liability if mishandled. Thus,
              establishing robust tools and frameworks for secure and efficient
              data management, analysis, storage, and access is paramount.
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
              Our team places an exceptional emphasis on data governance and
              management. Together, our data governance specialists and data
              scientists craft a bespoke data governance blueprint tailored for
              your organization. This model accounts for stakeholder needs,
              internal and external policies, pertinent laws, regulations, and
              other relevant considerations.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/digitalgovernance1.b38bf88f.jpeg?imwidth=640"
            alt="Digital Transformation Offerings"
          />
        </div>
      </div>

      <div className="border px-6 lg:px-9 py-9 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white mt-6">
        <h1 className="text-xl lg:text-2xl font-bold mb-3">How We Help</h1>
        <p className="text-sm lg:text-lg">
          Recognizing the unique data requirements of varied stakeholders, we
          classify data, establish access tiers, and devise clearance protocols,
          offering guidance on policy enhancements when needed.
          <br />
          Our governance model is fortified with a custom platform designed to
          facilitate on-demand governance management. In expansive entities,
          where structural intricacies can complicate matters, our platform
          simplifies the process. Furthermore, we seamlessly integrate essential
          data governance features into your organization's digital platform and
          integrated systems. This integration ensures streamlined data
          management and proactive identification of any potential data misuse.
        </p>
      </div>
    </>
  );
};

export default Policy;

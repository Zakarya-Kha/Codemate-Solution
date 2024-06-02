import React from "react";

const CustomerExperience = () => {
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
            Customer Experience
          </h1>
          <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-48 md:w-[300px] mt-4 h-[2px] border-none" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-16 lg:mt-[-5px]">
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/customerexperience1.0d23f534.jpeg?imwidth=640"
            alt="Digital Transformation Challenge"
          />
        </div>
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0 mb-9 flex flex-col justify-center ">
            <h1 className="text-xl lg:text-3xl font-bold mb-3">Challenge</h1>
            <p className="text-lg lg:text-xl">
              The art of pricing holds significant weight in an organization's
              The essence of any thriving organization lies in its capacity to
              deliver a delightful customer experience. Organizations,
              irrespective of size, seek to exceed customer expectations through
              value-packed offerings, tailored solutions, anmemorable
              engagements. A significant investment of time, effort, and
              resources is made to continually refine these customer journeys,
              aiming to amplify the enduring value for both the customer and the
              organization.
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
              Our seasoned experts are dedicated to elevating your customer
              experience. We pinpoint and alleviate pain points, seamlessly
              integrating cutting-edge technological solutions at pivotal
              touchpoints in your customer's journey. The result? An enriched
              and memorable customer experience.
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
          At the heart of customer experience lies the customer's perspective.
          The process begins the moment a customer contemplates utilizing your
          services or purchasing your products. At this juncture, it becomes
          vital to discern both touchpoints and pain points, spotlighting
          opportunities for enhancement that yield impactful outcomes. This
          entails mapping out emotions, priorities, preferences, buying
          behaviors, and patterns. Our approach integrates diverse factors –
          financial, economic, social, and geographical – to optimize this
          experience
          <br />
          Our team appreciates the distinct technological, political,
          sociological, and cultural nuances of each region. Armed with this
          understanding, we meticulously analyze and integrate these dynamics,
          redefining and finetuning your customer journeys to ensure
          unparalleled satisfaction
        </p>
      </div>
    </>
  );
};

export default CustomerExperience;

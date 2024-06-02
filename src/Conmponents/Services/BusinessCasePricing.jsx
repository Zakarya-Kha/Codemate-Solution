import React from "react";

const BusinessCasePricing = () => {
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
            Business Case & Pricing
          </h1>
          <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-48 md:w-[300px] mt-4 h-[2px] border-none" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-16 lg:mt-[-5px]">
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/buisnesscase1.83531bf3.jpeg?imwidth=640"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0 mb-9 flex flex-col justify-center ">
            <h1 className="text-xl lg:text-3xl font-bold mb-3">Challenge</h1>
            <p className="text-lg lg:text-xl">
              The art of pricing holds significant weight in an organization's
              strategy. Setting the ideal price is a delicate balancing act:
              while optimal pricing can drive profits, misjudging can negatively
              influence customers' perceived value or miss revenue goals. It's
              crucial to move away from intuition-based pricing and embrace a
              data-driven approach.
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
              Our seasoned team excels in the realm of strategic pricing. We
              delve deep, analyzing a myriad of factors to pinpoint the most
              appropriate price for your offerings. This includes an assessment
              of actual costs, historical pricing trends, competitor pricing
              data, consumer perceptions, cost structures, the breakeven point,
              and potential profitability. All these elements, combined with
              other distinct factors, guide us in determining the ideal price
              point.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/buisnesscase2.b796feca.jpeg?imwidth=640"
            alt=""
          />
        </div>
      </div>

      <div className="border px-6 lg:px-9 py-9 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white mt-6">
        <h1 className="text-xl lg:text-2xl font-bold mb-3">How We Help</h1>
        <p className="text-sm lg:text-lg">
          Regardless of whether you're introducing a novel product or revamping
          an existing one, we assist in crafting efficient business cases. This
          encompasses devising precise cost and price structures aimed at
          revenue maximization and cost optimization.
          <br />
          Furthermore, we counsel on strategic workforce planning and usher in
          advanced digital simulation tools. These tools bolster an
          organization's capacity for smart pricing decisions.
          <br />
          To round off, we conceptualize fitting operating models, create
          analytical tools, and ensure that your team possesses the necessary
          skills. This holistic approach propels you towards crafting
          customer-centric pricing models, enhancing revenue flow.
        </p>
      </div>
    </>
  );
};

export default BusinessCasePricing;

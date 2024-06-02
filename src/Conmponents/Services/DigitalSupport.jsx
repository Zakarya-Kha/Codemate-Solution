import React from 'react'

const DigitalSupport = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold">Digital Support</h1>
          <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-48 md:w-[300px] mt-4 h-[2px] border-none" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-16 lg:mt-[-5px]">
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/digSupport1.6bb1ed98.jpeg?imwidth=640"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0 mb-9 flex flex-col justify-center ">
            <h1 className="text-xl lg:text-3xl font-bold mb-3">Challenge</h1>
            <p className="text-lg lg:text-xl">
            In the modern landscape of rapid launches and pre-orders, digital
              platforms demand constant maintenance and performance enhancements
              to uphold their quality standards. This is particularly crucial
              for mobile and web applications, as they play an integral role in
              engaging users and driving sales.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse  lg:flex-row mt-16 lg:mt-[-5px] lg:mb-[-25px]">
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0  mb-9 flex flex-col justify-center">
            <h1 className="text-xl lg:text-3xl font-bold mb-3 mt-6">Offerings</h1>
            <p className="text-lg lg:text-xl">
            Our team consists of highly skilled experts proficient in
              world-leading programming languages, frameworks, and libraries
              such as Python, Flutter, and React JS. Their expertise is geared
              towards ensuring your digital platforms remain accessible,
              updated, and secure. This, in turn, contributes to increased
              digital traffic, stable environments, and an improved overall
              customer experience..
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/digSupport2.af67a2bc.jpeg?imwidth=640"
            alt="Digital Transformation Offerings"
          />
        </div>
      </div>

      <div className="border px-6 lg:px-9 py-9 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white mt-6">
        <h1 className="text-xl lg:text-2xl font-bold mb-3">How We Help</h1>
        <p className="text-sm lg:text-lg">
        We assist clients in creating, upgrading, and expanding their digital
          tools and processes. With our team of world-class experts, we reduce
          your workload by efficiently managing your tools and technologies,
          which includes tasks like code editing and refactoring. This proactive
          approach not only enhances your overall performance but also leads to
          significant reductions in operational costs.
        </p>
      </div>
    </>
  )
}

export default DigitalSupport

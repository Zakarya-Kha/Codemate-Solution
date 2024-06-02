import React from 'react'

const DigitalAnanlytics = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold">Digital Analytics</h1>
          <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-48 md:w-[300px] mt-4 h-[2px] border-none" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-16 lg:mt-[-5px]">
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/DigitalAnalytics2.ae8a69a4.jpeg?imwidth=640"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0 mb-9 flex flex-col justify-center ">
            <h1 className="text-xl lg:text-3xl font-bold mb-3">Challenge</h1>
            <p className="text-lg lg:text-xl">
            Analytics play an essential role in decision-making, providing
              organizations with an edge. With digital analytics, you benefit
              from enhanced tools and insights, especially when combined with
              AI, Machine Learning, and Natural Language Processing. This
              integration equips decision-makers with profound, data-driven
              insights.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse  lg:flex-row mt-16 lg:mt-[-5px]">
        <div className="lg:w-1/2 flex justify-center lg:order-1 order-2">
          <div className="lg:w-3/4 px-6 lg:px-0 mb-9 flex flex-col justify-center">
            <h1 className="text-xl lg:text-3xl font-bold mb-3">Offerings</h1>
            <p className="text-lg lg:text-xl">
            We are here to guide your journey. From improving operational
              performance and uncovering new revenue streams and markets to
              deepening your understanding of customers. Our insights ensure not
              only accurate decision-making but also set the stage for increased
              profitability and growth.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:order-2 order-1">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/DigitalAnalytics1.f6421d3c.jpeg?imwidth=640"
            alt="Digital Transformation Offerings"
          />
        </div>
      </div>

      <div className="border px-6 lg:px-9 py-9 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white mt-6">
        <h1 className="text-xl lg:text-2xl font-bold mb-3">How We Help</h1>
        <p className="text-sm lg:text-lg">
        Insights are the cornerstone of an effective strategy. They're
          essential for crafting initiatives, refining operations, and fostering
          an agile, data rich organization. By merging your unique data with
          broader market knowledge—including competitor analysis and market
          trends—our digital analytics services offer a comprehensive view,
          keeping you ahead in your field.
        </p>
      </div>
    </>
  )
}

export default DigitalAnanlytics

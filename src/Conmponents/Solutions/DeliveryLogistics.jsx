import React from 'react'
import { CourseFourth } from "../Data";
import { FaArrowRight } from "react-icons/fa";

const DeliveryLogistics = () => {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://jmminnovations.com/assets/images_new/product_solution/detailPage//D_L@2x.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-16">
          <div className="bg-white bg-opacity-80 p-8 lg:p-9 max-w-3xl">
            {" "}
            {/* Adjust max-width as needed */}
            <h1 className="text-2xl lg:text-4xl font-bold text-black mb-4">
            Delivery & Logistics
            </h1>
            <p className="text-sm lg:text-xl text-black mb-8">
            Our delivery and logistics digital platform is an intelligent solution to manage and tracks orders on multiple distribution channels. Our solution help organizations automate their supply chain processes thanks to our AI-powered technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:my-0 my-16">
        <div className="flex flex-col md:w-1/2 w-full  justify-center px-4 md:px-12">
          {CourseFourth.map((course) => (
            <div
              key={course.id}
              className="flex items-center my-3 gap-4 md:gap-6 md:text-xl"
            >
              <FaArrowRight />
              <span>{course.title}</span>
            </div>
          ))}
        </div>
        <div className="border bg-purple-200 md:w-1/2 md:mt-0 mt-6">
          <img
            className="w-full md:w-[50vw]"
            src="https://jmminnovations.com/_next/static/media/DL_One@2x.3614e8ae.png?imwidth=1920"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default DeliveryLogistics

import React from 'react'
import { CourseEight } from "../Data";
import { FaArrowRight } from "react-icons/fa";

const EcommerceMarketplace = () => {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://jmminnovations.com/assets/images_new/product_solution/detailPage//ECM@2x.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-16">
          <div className="bg-white bg-opacity-80 p-8 lg:p-9 max-w-3xl">
            {" "}
            {/* Adjust max-width as needed */}
            <h1 className="text-2xl lg:text-4xl font-bold text-black mb-4">
            E-Commerce Marketplace
            </h1>
            <p className="text-sm lg:text-xl text-black mb-8">
            Our e-commerce marketplace platform solution provides all-in-one e-commerce services that enable organizations to efficiently and effectively manage their electronic marketplace operations. 
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:my-0 my-16">
        <div className="flex flex-col md:w-1/2 w-full  justify-center px-4 md:px-12">
          {CourseEight.map((course) => (
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
            src="https://jmminnovations.com/_next/static/media/ECM_One@2x.f1e02205.png?imwidth=1920"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default EcommerceMarketplace

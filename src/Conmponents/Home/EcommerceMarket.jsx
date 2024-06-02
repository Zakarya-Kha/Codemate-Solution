import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Stories from "./Stories";



const wareHouse = [
  {
    id: 1,
    title: "E-COMMERCE MARKETPLACE & DIGITAL ANALYTICS",
    title2:
      "https://jmminnovations.com/_next/static/media/Adva.b0437bf6.png?imwidth=256",
    img1: "https://jmminnovations.com/_next/static/media/Cs_5_1.76303d50.png?imwidth=640",
    img2: "https://jmminnovations.com/_next/static/media/Cs_5_2.d9b898c6.png?imwidth=640",
    desc: "We developed a web-based warehouse management system offering delivery management solutions and services to online stores with multiple payment options. ",
  },
];

const Features = [
  {
    id: 1,
    title: "Manage the content of homepage dynamically",
  },
  {
    id: 2,
    title: "Manage products with images and descriptions",
  },
  {
    id: 3,
    title:
      "Manage more than 200 business outlets in KSA with their locations",
  },
  {
    id: 4,
    title: "Manage about us and contact us pages dynamically",
  },
  {
    id: 5,
    title: "Create a new page with completely dynamic segments creation",
  },
 
];

const EcommerceMarket = () => {
  return (
    <>
    {wareHouse.map((item) => (
      <div key={item.id}>
        <div className="relative">
          <div className="relative w-full ">
            <img className="w-full h-[70vh]" src={item.img1} alt="" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="absolute top-0 text-white flex flex-col  w-full h-full justify-center px-16">
            <h1 className="md:text-4xl text-xl font-bold  ">{item.title}</h1>
            <hr className="bg-gradient-to-r from-blue-500 to-green-500 md:w-[500px] mg:w-[300px] w-[150px] mt-[15px] h-[2px] border-none" />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row mt-8    items-center">
          <div className="md:w-1/2 ">
            <img className="w-full" src={item.img2} alt="" />
          </div>
          <div className="md:w-1/2 w-full mx-9  my-6 p-9">
            <div className="flex flex-col justify-center mx-4 md:mx-0">
              <img className="mb-4 w-[150px] " src={item.title2} alt="" />
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      </div>
    ))}

    <div className="flex mt-8 flex-col md:flex-row ">
      <div className="md:w-1/2">
        <div className="mx-4 md:mx-16 my-6 p-9">
          <h1 className="text-3xl font-bold mb-3">Features</h1>
          <hr className="bg-gradient-to-r from-blue-500 to-green-500 md:w-[200px] w-[150px] mt-[15px] h-[2px] border-none mb-4" />

          <div className="flex flex-col gap-5">
            {Features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-3">
                <FaArrowRight />
                <p>{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:w-1/2 mb-7">
        <img className="w-full" src="https://jmminnovations.com/_next/static/media/Cs_5_3.3f25af1d.png?imwidth=640" alt="" />
      </div>
    </div>
    
    <div className="my-24">
      <Stories />
    </div>
  </>
  )
}

export default EcommerceMarket

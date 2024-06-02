import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Stories from "./Stories";

const wareHouse = [
  {
    id: 1,
    title: "Mobile Application",
    title2:
      "https://jmminnovations.com/_next/static/media/MobileApp.ee71ea6b.png?imwidth=640",
    img1: "https://jmminnovations.com/_next/static/media/Cs_3_1.8eb4977c.png?imwidth=640",
    img2: "https://jmminnovations.com/_next/static/media/Cs_3_3.16c273d7.png?imwidth=640",
    desc:  "Enter Biafra is a freedom awareness application. Enter Biafra has a daily program that aims to enlighten, educate and inform Biafrans both in Biafra land and those all around the world. It is a channel that spreads information about the right to self-determination of Biafrans.",
  },
];

const Features = [
  {
    id: 1,
    title: "Watch live broadcasts, read news and articles in the blog.",
  },
  {
    id: 2,
    title: "Comment and like on blogs and videos.",
  },
  {
    id: 3,
    title:
      "Post reports of missing people. Other Users will be able to like or comment on the report and share it on social media",
  },
  {
    id: 4,
    title: "Donate to the organization",
  },
];

const MobileApplication = () => {
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
        <img className="w-full" src="https://jmminnovations.com/_next/static/media/Cs_3_2.1550de94.png?imwidth=640" alt="" />
      </div>
    </div>
    
    <div className="my-24">
      <Stories />
    </div>
  </>
  );
};

export default MobileApplication;

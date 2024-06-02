import React from 'react'

const CloudServices = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold">Cloud Services & Solutions</h1>
          <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-48 md:w-[300px] mt-4 h-[2px] border-none" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-16 lg:mt-[-5px]">
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/CloudServiceoff2x.b0af917e.png?imwidth=640"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0 mb-9 flex flex-col justify-center ">
            <h1 className="text-xl lg:text-3xl font-bold mb-3">Challenge</h1>
            <p className="text-lg lg:text-xl">
              As the world rapidly adopts cloud technology, organizations face a
              series of challenges. Data security and privacy concerns, cost
              management, lack of knowledge and expertise, and the need for
              seamless integration with existing systems are among the key
              hurdles.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse  lg:flex-row mt-16 lg:mt-[-5px] lg:mb-[-25px]">
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0  mb-9 flex flex-col justify-center">
            <h1 className="text-xl lg:text-3xl font-bold mb-3 mt-6">Offerings</h1>
            <p className="text-lg lg:text-xl">
            Our experts empower businesses to harness the full potential of
              cloud computing. Our diverse team excels in migration,
              configuration, optimization, security, and maintenance of cloud
              systems. We tailor end-to-end managed cloud services based on
              unique goals and requirements. Recognizing that the cloud
              encompasses more than just technology, our solutions encompass the
              organizational and cultural shifts necessary for sustained
              success.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/cloudservice1.0dc0cb3d.jpeg?imwidth=640"
            alt="Digital Transformation Offerings"
          />
        </div>
      </div>

      <div className="border px-6 lg:px-9 py-9 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white mt-6">
        <h1 className="text-xl lg:text-2xl font-bold mb-3">How We Help</h1>
        <p className="text-sm lg:text-lg">
        Our experts guide organizations through the process of adopting cloud
          technology, ensuring a smooth transition and integration. We address
          data security and privacy concerns by implementing robust security
          measures.
          <br />
          Our team optimizes cost management through efficient cloud resource
          allocation. With our deep expertise, we bridge the knowledge gap and
          provide ongoing support, empowering organizations to thrive in the
          cloudbased ecosystem.
        </p>
      </div>
    </>
  )
}

export default CloudServices

import React from 'react'

const AlliancesEcosystems = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold">Alliances & Ecosystems</h1>
          <hr className="bg-gradient-to-r from-blue-500 to-green-500 w-48 md:w-[300px] mt-4 h-[2px] border-none" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-16 lg:mt-[-5px]">
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/alliance1.055cc179.jpeg?imwidth=640"
            alt="Digital Transformation Challenge"
          />
        </div>
        <div className="lg:w-1/2 flex justify-center ">
          <div className="lg:w-3/4 px-6 lg:px-0 mb-9 flex flex-col justify-center ">
            <h1 className="text-xl lg:text-3xl font-bold mb-3">Challenge</h1>
            <p className="text-lg lg:text-xl">
            In our deeply interconnected world, forging sustainable, strategic
              partnerships is more than a luxury—it's a necessity for any
              organization aiming to flourish. However, nurturing these
              partnerships requires significant time, specialized resources, and
              nuanced negotiations.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse  lg:flex-row mt-16 lg:mt-[-5px]">
        <div className="lg:w-1/2 flex justify-center lg:order-1 order-2">
          <div className="lg:w-3/4 px-6 lg:px-0 mb-9 flex flex-col justify-center">
            <h1 className="text-xl lg:text-3xl font-bold mb-3">Offerings</h1>
            <p className="text-lg lg:text-xl">
            We extend our expertise to help you cultivate a dynamic ecosystem
              of alliances, empowering your organization to drive both immediate
              and disruptive influence within your domain.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:order-2 order-1">
          <img
            className="w-full h-auto lg:h-[100vh]"
            src="https://jmminnovations.com/_next/static/media/Alliance2.a331881a.jpeg?imwidth=640"
            alt="Digital Transformation Offerings"
          />
        </div>
      </div>

      <div className="border px-6 lg:px-9 py-9 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white mt-6">
        <h1 className="text-xl lg:text-2xl font-bold mb-3">How We Help</h1>
        <p className="text-sm lg:text-lg">
        We begin by mapping out key stakeholders that orbit your organization,
          from suppliers and vendors to government entities and even customers.
          Recognizing their significance, we curate a digital platform designed
          to enhance communication and transactional processes among these
          entities. But connectivity is just the foundation. To ensure efficient
          operation, we meticulously craft digital governance and policies,
          guaranteeing responsible service and secure information access.
        </p>
      </div>
    </>
  )
}

export default AlliancesEcosystems

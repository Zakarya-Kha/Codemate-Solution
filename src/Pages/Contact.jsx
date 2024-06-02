import React from 'react'
import ContactUs from '../Conmponents/Contact/ContactUs'
import StayInTouch from '../Conmponents/Contact/StayInTouch'

const Contact = () => {
  return (
    <div className='pt-20 flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-100 p-4 '>
      <ContactUs/>
      <StayInTouch/>
    </div>
  )
}

export default Contact

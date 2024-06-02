import React from 'react'
import Feed from '../Conmponents/Home/Feed'
import About from '../Conmponents/Home/About'
import Services from '../Conmponents/Home/Services'
import Solution from '../Conmponents/Home/Solution'
import Stories from '../Conmponents/Home/Stories'
import Partner from '../Conmponents/Home/Partner'
import Team from '../Conmponents/Home/Team'
import ContactUs from '../Conmponents/Contact/ContactUs'
import StayInTouch from '../Conmponents/Contact/StayInTouch'





const Home = () => {
  return (
    <div className='pt-16 overflow-x-hidden'>
      <Feed/>
      <About/>
      <Services/>
      <Solution/>
      <Stories/>
      <Partner/>
      <Team/>
      <div className='flex flex-col lg:flex-row justify-center gap-5 items-center min-h-screen bg-gray-100 p-4 '>
      < ContactUs/>
      <StayInTouch/>
      </div>
      
    </div>
  )
}

export default Home

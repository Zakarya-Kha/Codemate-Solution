import React from 'react'
import Feed from '../Conmponents/About/Feed'
import Mission from '../Conmponents/About/Mission'
import Values from '../Conmponents/About/Values'
import Proposition from '../Conmponents/About/Proposition'
import Experience from '../Conmponents/About/Experience'
import Numbers from '../Conmponents/About/Numbers'

const About = () => {
  return (
    <div className='pt-16'>
      <Feed/>
      <Mission/>
      <Values/>
      <Proposition/>
      <Experience/>
      <Numbers/>
    </div>
  )
}

export default About

import React from 'react'
import Testimonial from '../Testimonial/Testimonial'
import Team from '../Team/Team'
import Carousel from '../Crousal/Crousal'
import Photo1 from '../pho/Photo1'
import Photo2 from '../pho/Photo2'
// import Carousel from '../../Crousal/Crousal'

const Home = () => {
  return (
    <>
    <Carousel/>
      <Photo1/>
      <Photo2/>
      <Team />
      <Testimonial />
    </>
  )
}

export default Home
import React from 'react'
import ImageSlider from './ImageSlider'
import { Greetingpage } from './Greetingpage'
import Packages from '../Package/Package'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <Greetingpage />
      <Packages/>
      <Footer />
    </div>
  )
}

export default Home
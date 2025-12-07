import React from 'react'
import './main.css'
import Header from './header.jsx'
import Carousel from './carousel.jsx'
import CardPreview from './cardPreview.jsx'
import Footer from './footer.jsx'

export default function Main() {
  return(
    <div>
      <Header />
      <Carousel />
      <CardPreview />
      <Footer />
    </div>
  )
}

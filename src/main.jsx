import React from 'react'
import './main.css'
import Header from './header.jsx'
import CardPreview from './cardPreview.jsx'
import Footer from './footer.jsx'
import SwiperCarousel from './swiper.jsx'

export default function Main() {
  return(
    <div>
      <Header />
      <SwiperCarousel />
      <CardPreview />
      <Footer />
    </div>
  )
}

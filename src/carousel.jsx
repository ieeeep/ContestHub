import React, { useState } from 'react'
import './carousel.css'
import Card from './card.jsx'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const cards = [
    { image: "/pictures/1.jpg", title: "Конкурс 1", text: "йцукенгшщзхфывапролджячсмитьбюйцукенгшщзфывапролд" },
    { image: "/pictures/2.jpg", title: "Конкурс 2", text: "wertyuiop;lkjhgfdsazxcvbnm,.lkiuytrewsdcvbnmkl;lkiuytresxcvbnmklkjytresazxcvbnm,lkjhytre" },
    { image: "/pictures/3.jpg", title: "Конкурс 3", text: "Описание 3" },
    { image: "/pictures/4.jpg", title: "Конкурс 4", text: "Описание 4" },
    { image: "/pictures/5.jpg", title: "Конкурс 5", text: "Описание 5" },
    { image: "/pictures/6.jpeg", title: "Конкурс 6", text: "Описание 6" },
    { image: "/pictures/7.jpeg", title: "Конкурс 7", text: "Описание 7" }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
  }

  const getVisibleCards = () => {
    const visibleCards = []
    for (let i = 0; i < 1; i++) {
      const index = (currentIndex + i) % cards.length
      visibleCards.push(cards[index])
    }
    return visibleCards
  }

  const visibleCards = getVisibleCards()

  return (
    <div className="carousel">
      <button className="carousel-btn-left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <div className="carousel-container">
        <div className="cards-wrapper">
          {visibleCards.map((card, index) => (
            <Card
              key={`${currentIndex}-${index}`}
              image={card.image}
              title={card.title}
              text={card.text}
              isCentral={index === 1 || index === 2 || index === 3}
            />
          ))}
        </div>

        <button className="carousel-btn-right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}
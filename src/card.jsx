import React from 'react'
import './card.css'

export default function Card({ image, title, text }) {
  return (
    <div className='card'>
      <img src={image} className='poster' alt={title} />
      <div className='infoText'>
        <h1>{title}</h1>
        <p>{text && text.length > 25 ? `${text.slice(0, 25)}...` : text}</p>
      </div>
    </div>
  )
}

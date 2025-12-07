import React from 'react'
import './card.css'

export default function Card({ image, title, text, isCentral }) {
  return (
    // <div className={`card ${isCentral ? 'card-central' : ''}`}>
    //   <div
    //     className="card-background"
    //     style={{ backgroundImage: `url(${image})` }}
    //   />
    //   <div className='infoCard'>
    //     <h3>{title}</h3>
    //     <p>{text && text.length > 30 ? `${text.slice(0,40)}...` : text}</p>
    //   </div>
    // </div>
    // <div className='card'>
      // <img src={image} className='poster'></img>
      // <div className='infoText'>
        // <h1>{title}</h1>
        // <p>{text && text.length > 100 ? `${text.slice(0,100)}...` : text}</p>
      // </div>
    <div className='card'>
      <img src={image} className='poster' alt={title} />
      <div className='infoText'>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

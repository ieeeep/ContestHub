import React from 'react'
import "./miniCard.css"

export default function MiniCard({image, title, text}) {
    return (
        <div className='miniCards'>
            <img src={image} className='miniPoster' alt={title} />
            <div className='miniInfoText'>
                <h1>{title}</h1>
                <p>{text && text.length > 25 ? `${text.slice(0, 25)}...` : text}</p>
            </div>
            <button type='button' className='join-btn'>Присоединиться</button>
        </div>
    )
}

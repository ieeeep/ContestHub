import React from 'react'
import './cardPreview.css'
import Card from './card.jsx'

export default function CardPreview() {
    const events = [
        { id: 1, image: '/1.jpg', title: 'Концерт 1', text: 'Описание...' },
        { id: 2, image: '/2.jpg', title: 'Концерт 2', text: 'Описание...' },
        { id: 3, image: '/3.jpg', title: 'Концерт 3', text: 'Описание...' },
        { id: 4, image: '/4.jpg', title: 'Концерт 4', text: 'Описание...' },
        { id: 5, image: '/5.jpg', title: 'Концерт 5', text: 'Описание...' },
        { id: 6, image: '/6.jpg', title: 'Концерт 6', text: 'Описание...' },
        { id: 7, image: '/7.jpg', title: 'Концерт 7', text: 'Описание...' },
        { id: 8, image: '/8.jpg', title: 'Концерт 8', text: 'Описание...' },
        { id: 9, image: '/9.jpg', title: 'Концерт 9', text: 'Описание...' },
        { id: 10, image: '/10.jpg', title: 'Концерт 10', text: 'Описание...' },
        { id: 11, image: '/11.jpg', title: 'Концерт 11', text: 'Описание...' },
        { id: 12, image: '/12.jpg', title: 'Концерт 12', text: 'Описание...' },
    ]
    return (
        <div className='allCards'>
            <h3 className='allEvents'>Все мероприятия:</h3>
            <div className='cards'>
                {events.map(event => (
                    <Card className='miniCards'
                        image={event.image}
                        title={event.title}
                        text={event.text}
                    />
                ))}
            </div>
        </div>
    )
}

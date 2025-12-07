import React from 'react'
import './cardPreview.css'
import MiniCard from './miniCard'

export default function CardPreview() {
    const events = [
        { image: "/pictures/1.jpg", title: "Конкурс 1", text: "йцукенгшщзхфывапролджячсмитьбюйцукенгшщзфывапролд", id: 1 },
        { image: "/pictures/2.jpg", title: "Конкурс 2", text: "wertyuiop;lkjhgfdsazxcvbnm,.lkiuytrewsdcvbnmkl;lkiuytresxcvbnmklkjytresazxcvbnm,lkjhytre", id: 2 },
        { image: "/pictures/1.jpg", title: "Конкурс 1", text: "йцукенгшщзхфывапролджячсмитьбюйцукенгшщзфывапролд", id: 1 },
        { image: "/pictures/2.jpg", title: "Конкурс 2", text: "wertyuiop;lkjhgfdsazxcvbnm,.lkiuytrewsdcvbnmkl;lkiuytresxcvbnmklkjytresazxcvbnm,lkjhytre", id: 2 },
        { image: "/pictures/1.jpg", title: "Конкурс 1", text: "йцукенгшщзхфывапролджячсмитьбюйцукенгшщзфывапролд", id: 1 },
        { image: "/pictures/2.jpg", title: "Конкурс 2", text: "wertyuiop;lkjhgfdsazxcvbnm,.lkiuytrewsdcvbnmkl;lkiuytresxcvbnmklkjytresazxcvbnm,lkjhytre", id: 2 },
        { image: "/pictures/1.jpg", title: "Конкурс 1", text: "йцукенгшщзхфывапролджячсмитьбюйцукенгшщзфывапролд", id: 1 },
        { image: "/pictures/2.jpg", title: "Конкурс 2", text: "wertyuiop;lkjhgfdsazxcvbnm,.lkiuytrewsdcvbnmkl;lkiuytresxcvbnmklkjytresazxcvbnm,lkjhytre", id: 2 },
        { image: "/pictures/1.jpg", title: "Конкурс 1", text: "йцукенгшщзхфывапролджячсмитьбюйцукенгшщзфывапролд", id: 1 },
        { image: "/pictures/2.jpg", title: "Конкурс 2", text: "wertyuiop;lkjhgfdsazxcvbnm,.lkiuytrewsdcvbnmkl;lkiuytresxcvbnmklkjytresazxcvbnm,lkjhytre", id: 2 },
        { image: "/pictures/1.jpg", title: "Конкурс 1", text: "йцукенгшщзхфывапролджячсмитьбюйцукенгшщзфывапролд", id: 1 },
        { image: "/pictures/2.jpg", title: "Конкурс 2", text: "wertyuiop;lkjhgfdsazxcvbnm,.lkiuytrewsdcvbnmkl;lkiuytresxcvbnmklkjytresazxcvbnm,lkjhytre", id: 2 },
    ]
    return (
        <div className='allCards'>
            <div className='head-events'>
                <h3 className='allEvents'>Все мероприятия:</h3>
                <button type='button' className='drop-btn-sort'>Сортировка</button>
                <button type='button' className='filtrs-btn'>Фильтры</button>
            </div>
            <div className='cardsBasic'>
                {events.map(event => (
                    <MiniCard className='miniCards'
                        key={event.id}
                        image={event.image}
                        title={event.title}
                        text={event.text}
                    />
                ))}
            </div>
        </div>
    )
}

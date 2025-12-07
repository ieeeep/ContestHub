import React from 'react'
import Card from './card'
import './swiper.css'
import "swiper/css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import "swiper/css/effect-cards"
import "swiper/css/autoplay"
import "swiper/css/pagination"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


export default function SwiperCarousel() {
    const cards = [
        { image: "/pictures/1.jpg", title: "Конкурс 1", text: "йцукенгшщзхфывапролджячсмитьбюйцукенгшщзфывапролд", id: 1 },
        { image: "/pictures/2.jpg", title: "Конкурс 2", text: "wertyuiop;lkjhgfdsazxcvbnm,.lkiuytrewsdcvbnmkl;lkiuytresxcvbnmklkjytresazxcvbnm,lkjhytre", id: 2 },
        { image: "/pictures/3.jpg", title: "Конкурс 3", text: "Описание 3", id: 3 },
        { image: "/pictures/4.jpg", title: "Конкурс 4", text: "Описание 4", id: 4 },
        { image: "/pictures/5.jpg", title: "Конкурс 5", text: "Описание 5", id: 5 },
        { image: "/pictures/6.jpeg", title: "Конкурс 6", text: "Описание 6", id: 6 },
        { image: "/pictures/7.jpeg", title: "Конкурс 7", text: "Описание 7", id: 7 },
        { image: "/pictures/1.jpg", title: "Конкурс 1", text: "йцукенгшщзхфывапролджячсмитьбюйцукенгшщзфывапролд", id: 8 },
        { image: "/pictures/2.jpg", title: "Конкурс 2", text: "wertyuiop;lkjhgfdsazxcvbnm,.lkiuytrewsdcvbnmkl;lkiuytresxcvbnmklkjytresazxcvbnm,lkjhytre", id: 9 },
        { image: "/pictures/3.jpg", title: "Конкурс 3", text: "Описание 3", id: 10 },
        { image: "/pictures/4.jpg", title: "Конкурс 4", text: "Описание 4", id: 11 },
        { image: "/pictures/5.jpg", title: "Конкурс 5", text: "Описание 5", id: 12 },
        { image: "/pictures/6.jpeg", title: "Конкурс 6", text: "Описание 6", id: 13 },
        { image: "/pictures/7.jpeg", title: "Конкурс 7", text: "Описание 7", id: 14 },
    ]
    return (
        <div className='swiperForCards'>
            <button className="carousel-btn-left">
            <FaChevronLeft />
        </button>
            <Swiper className='swiperDiv'
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                pagination={{ clickable: true }}
                loop={true}
                spaceBetween={30}
                speed={800}
                navigation={{
                    nextEl: ".carousel-btn-right",
                    prevEl: ".carousel-btn-left",
                }}
                effect='coverflow'
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate:20,
                    stretch:0,
                    depth:100,
                    modifier:1,
                    slideShadows:true,
                }}
                autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                        <Card
                            image={card.image}
                            title={card.title}
                            text={card.text} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="carousel-btn-right">
                <FaChevronRight />
            </button>
        </div>
    )
}

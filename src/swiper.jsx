import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import './swiper.css';
import Card from './card.jsx';

export default function SwiperCarousel() {
  const swiperRef = useRef(null);

  const cards = [
    { id: 1, image: "/1.jpg", title: "Фестиваль электроники", text: "Самый масштабный фестиваль года" },
    { id: 2, image: "/2.jpg", title: "Хакатон 2024", text: "48 часов кодинга и пиццы" },
    { id: 3, image: "/3.jpg", title: "Игровая конвенция", text: "Киберспорт, VR и новинки" },
    { id: 4, image: "/4.jpg", title: "Стартап-питч", text: "Представь свой проект инвесторам" },
    { id: 5, image: "/5.jpg", title: "АРТ выставка", text: "Современное искусство и digital" },
  ];

  return (
    <div className="swiper-container">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={800}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card 
              image={card.image}
              title={card.title}
              text={card.text}
              isFeatured={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомные кнопки */}
      <div className="swiper-button-prev" onClick={() => swiperRef.current?.swiper.slidePrev()}>
        ‹
      </div>
      <div className="swiper-button-next" onClick={() => swiperRef.current?.swiper.slideNext()}>
        ›
      </div>

      {/* Прогресс бар */}
      <div className="swiper-progress">
        <div className="swiper-progress-bar"></div>
      </div>
    </div>
  );
}
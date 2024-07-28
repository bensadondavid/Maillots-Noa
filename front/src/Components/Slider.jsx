import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';

const SimpleSwiper = () => {
  return (
    <Swiper
      className="swiper-container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      keyboard
    >
      <SwiperSlide className="swiper-slide"><img src="maillot1.webp" alt="Maillot 1" /></SwiperSlide>
      <SwiperSlide className="swiper-slide"><img src="maillot2.webp" alt="Maillot 2" /></SwiperSlide>
      <SwiperSlide className="swiper-slide"><img src="maillot3.webp" alt="Maillot 3" /></SwiperSlide>
    </Swiper>
  );
};

export default SimpleSwiper;
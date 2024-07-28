import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SimpleSwiper from './Slider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';

const BigSwiper = () => {
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
      <SwiperSlide>
        <SimpleSwiper />
      </SwiperSlide>
      <SwiperSlide>
        <SimpleSwiper />
      </SwiperSlide>
      <SwiperSlide>
        <SimpleSwiper />
      </SwiperSlide>
    </Swiper>
  );
};

export default BigSwiper;
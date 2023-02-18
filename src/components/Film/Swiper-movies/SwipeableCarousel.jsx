import React from "react";
import "./SwipeableCarousel.css";
import image1 from "../../../Assets/images/cover-film/1.jpg";
import image2 from "../../../Assets/images/cover-film/2.jpg";
import image3 from "../../../Assets/images/cover-film/3.jpg";
import image4 from "../../../Assets/images/cover-film/4.jpg";
import image5 from "../../../Assets/images/cover-film/5.jpg";
import image6 from "../../../Assets/images/cover-film/6.jpg";
import image7 from "../../../Assets/images/cover-film/7.jpg";
import image8 from "../../../Assets/images/cover-film/8.jpg";
import image9 from "../../../Assets/images/cover-film/9.jpg";
import image10 from "../../../Assets/images/cover-film/10.png";
import image11 from "../../../Assets/images/cover-film/11.jpg";
import image12 from "../../../Assets/images/cover-film/12.jpg";
import image23 from "../../../Assets/images/cover-film/23.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import "swiper/css";

function SwipeableCarousel() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Navigation]}
      navigation={true}
      spaceBetween={50}
      slidesPerView={8}
      
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className="swiper-img" src={image1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-img" src={image2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-img" src={image3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-img" src={image4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-img" src={image5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-img" src={image6} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-img" src={image7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-img" src={image8} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-img" src={image9} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-img" src={image10} alt="" />
      </SwiperSlide>
      
      <SwiperSlide>
        <img className="swiper-img" src={image11} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-img" src={image12} alt="" />
      </SwiperSlide>
     
   
    </Swiper>
  );
}

export default SwipeableCarousel;

import image1 from "../../Assets/images/Banner-Film/sonic-boom-4.png";
import image2 from "../../Assets/images/Banner-Film/Obi-Wan-Kenobi-4.png";
import image3 from "../../Assets/images/Banner-Film/The-Contractor-4.png";

import SwiperMovies from "./SwiperMovies";

import "./Film.css";
import "swiper/css";
import { BsPlayFill } from "../../../node_modules/react-icons/bs/index.esm";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "react-bootstrap/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <div className="container-swiperr">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container-image-swiper">
              <div className="image-swiper">
                <div className="shadow-top-image-swiper">
                  <div className="shadow-left-image-swiper">
                    <div className="container-text">
                      <img src={image1} alt="" />
                      <h2 className="title-text-swiper">سونیک</h2>

                      <Button className="play-btn" variant="secondary">
                        <BsPlayFill />
                        پخش
                      </Button>
                      <Button
                        className="detail-btn"
                        variant="outline-secondary"
                      >
                        جزئیات
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-image-swiper">
              <div className="image-swiper2">
                <div className="shadow-top-image-swiper">
                  <div className="shadow-left-image-swiper">
                    <div className="container-text">
                      <img src={image2} alt="" />
                      <h2 className="title-text-swiper">جنگ ستارگان</h2>

                      <Button className="play-btn" variant="secondary">
                        <BsPlayFill />
                        پخش
                      </Button>
                      <Button
                        className="detail-btn"
                        variant="outline-secondary"
                      >
                        جزئیات
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-image-swiper">
              <div className="image-swiper3">
                <div className="shadow-top-image-swiper">
                  <div className="shadow-left-image-swiper">
                    <div className="container-text">
                      <img src={image3} alt="" />
                      <h2 className="title-text-swiper">
                        نیرو های ویژه آمریکا
                      </h2>

                      <Button className="play-btn" variant="secondary">
                        <BsPlayFill />
                        پخش
                      </Button>
                      <Button
                        className="detail-btn"
                        variant="outline-secondary"
                      >
                        جزئیات
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <SwiperMovies />
      </div>
    </>
  );
}

import "./SwiperMovies.css";
import React from "react";
import SwipeableCarousel2 from "./Swiper-movies copy/SwipeableCarousel";
import SwipeableCarousel1 from "./Swiper-movies/SwipeableCarousel";

function SwiperMovies() {
  return (
    <>
      <div className="container-swiper">
        <div className="title-cpntainer">
          {" "}
          <h3 className="title-swiper">انیمیشن</h3>
          <h6 className="title-swiper">مشاهده همه</h6>
        </div>
        <SwipeableCarousel1 />
      </div>
      <div className="container-swiper">
        <div className="title-cpntainer">
          {" "}
          <h3 className="title-swiper">سریال</h3>
          <h6 className="title-swiper">مشاهده همه</h6>
        </div>
        <SwipeableCarousel2 />
      </div>
      <div className="container-swiper">
        <div className="title-cpntainer">
          {" "}
          <h3 className="title-swiper">انیمیشن</h3>
          <h6 className="title-swiper">مشاهده همه</h6>
        </div>
        <SwipeableCarousel1 />
      </div>
    </>
  );
}

export default SwiperMovies;

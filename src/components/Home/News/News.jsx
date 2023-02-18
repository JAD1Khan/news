import React from "react";
import image from "../../../Assets/images/2.png";
import "./News.css";
import { Placeholder } from "react-bootstrap";
import { HiOutlineNewspaper } from "react-icons/hi/index.esm";

function News() {
  return (
    <div className="flex-container">
      <div className="news-img">
        <HiOutlineNewspaper className='icon-newspaper'/>
      </div>
      <div className="news-text">
        <p className="title-news">اخبار جدید</p>
        <p className="detail-news">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
      </div>
    </div>
  );
}

export default News;

import React from "react";
import './NewsPopular.css'
import { BsFillDiamondFill } from "react-icons/bs/index.esm";

function NewsPopular() {
  return (
    <div className="container-news-MostVisited">
      <BsFillDiamondFill className="diamond-icon" />
      <p className=" text-MostVisited">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
      </p>
    </div>
  );
}

export default NewsPopular;

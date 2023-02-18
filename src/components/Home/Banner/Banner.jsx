import React from "react";
import image from "../../../Assets/images/3.jpg";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="container-banner">
        <div className="container-banner-image">
          <img className="image-banner" src={image} alt="" />
          <img className="image-banner" src={image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;

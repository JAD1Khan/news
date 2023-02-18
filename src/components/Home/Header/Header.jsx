import React from "react";
import "./Header.css";
import image1 from "../../../Assets/images/15.jpg";
import $ from "jquery";

function tabClick(e) {
  document.querySelector(".btn-tab-active").classList.remove("btn-tab-active");
  e.target.classList.add("btn-tab-active");
}
function Header() {
  return (
    <>
      <div className="container-header-tab">
        <div className="header-image">
          <div className="image-tab"></div>
        </div>
        <div className="header-tabs">
          <div className="container-tab">
            <button
              onClick={tabClick}
              className="btn-tab btn-tab-active btn-tab0"
            >
              مادرانه
            </button>
            <button onClick={tabClick} className="btn-tab btn-tab1">
              نوزاد
            </button>
            <button onClick={tabClick} className="btn-tab btn-tab2">
              کودک
            </button>
            <button onClick={tabClick} className="btn-tab btn-tab3">
              نوجوان
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

var backGroundUrl = [
  "http://localhost:3000/static/media/1.1347a16dd46775f2bd41.jpg",
  "http://localhost:3000/static/media/2.25a7e57a32043932f179.jpg",
  "http://localhost:3000/static/media/3.2358cc8c7afcf4ee039e.jpg",
  "http://localhost:3000/static/media/3.2358cc8c7afcf4ee039e.jpg",
];

function changeBackgroundForbtn2() {
  console.log("e");
}

for (let i = 0; i < backGroundUrl.length; i++) {
  window.addEventListener("load", () => {
    document.querySelector(`.btn-tab${i}`).addEventListener("click", () => {
      document.querySelector(".image-tab").style.backgroundImage = `url('${backGroundUrl[i]}')`
        ;
    });
  });
}



export default Header;

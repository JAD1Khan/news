import "./Content.css";
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function tabClick(e) {
  document
    .querySelector(".btn-tab-content-active")
    .classList.remove("btn-tab-content-active");
  e.target.classList.add("btn-tab-content-active");
}

function Content() {
  return (
    <>
      <div className="container-content">
        <div className="container-grid-content">
          <section className="content">
            <div className="image-content"></div>
            <div className="text-content">
              <h3 className="title-text-content">تیتر متن</h3>
              <h6  className="detail-text-content">
                لورم ایپسوم متن ساختگی  از صنعت چاپ و با
               
                استفاده از طراحان گرافیک است
              </h6>
            </div>
          </section>
          <section className="content">
            <div className="image-content"></div>
            <div className="text-content">
              <h3 className="title-text-content">تیتر متن</h3>
              <h6  className="detail-text-content">
                لورم ایپسوم متن ساختگی  از صنعت چاپ و با
               
                استفاده از طراحان گرافیک است
              </h6>
            </div>
          </section>
          <section className="content">
            <div className="image-content"></div>
            <div className="text-content">
              <h3 className="title-text-content">تیتر متن</h3>
              <h6  className="detail-text-content">
                لورم ایپسوم متن ساختگی  از صنعت چاپ و با
                
                استفاده از طراحان گرافیک است
              </h6>
            </div>
          </section>
          <section className="content">
            <div className="image-content"></div>
            <div className="text-content">
              <h3 className="title-text-content">تیتر متن</h3>
              <h6  className="detail-text-content">
                لورم ایپسوم متن ساختگی  از صنعت چاپ و با
               
                استفاده از طراحان گرافیک است
              </h6>
            </div>
          </section>
          <section className="content">
            <div className="image-content"></div>
            <div className="text-content">
              <h3 className="title-text-content">تیتر متن</h3>
              <h6  className="detail-text-content">
                لورم ایپسوم متن ساختگی  از صنعت چاپ و با
               
                استفاده از طراحان گرافیک است
              </h6>
            </div>
          </section>
          <section className="content">
            <div className="image-content"></div>
            <div className="text-content">
              <h3 className="title-text-content">تیتر متن</h3>
              <h6  className="detail-text-content">
                لورم ایپسوم متن ساختگی  از صنعت چاپ و با
               
                استفاده از طراحان گرافیک است
              </h6>
            </div>
          </section>
          <section className="content">
            <div className="image-content"></div>
            <div className="text-content">
              <h3 className="title-text-content">تیتر متن</h3>
              <h6  className="detail-text-content">
                لورم ایپسوم متن ساختگی  از صنعت چاپ و با
               
                استفاده از طراحان گرافیک است
              </h6>
            </div>
          </section>
          <section className="content">
            <div className="image-content"></div>
            <div className="text-content">
              <h3 className="title-text-content">تیتر متن</h3>
              <h6  className="detail-text-content">
                لورم ایپسوم متن ساختگی  از صنعت چاپ و با
               
                استفاده از طراحان گرافیک است
              </h6>
            </div>
          </section>
        </div>
        <div className="content-tabs">
          <div className="container-content-tab">
            <button
              onClick={tabClick}
              className="btn-tab-content btn-tab-content-active"
            >
              رشد
            </button>
            <button onClick={tabClick} className="btn-tab-content">
              آموزش
            </button>
            <button onClick={tabClick} className="btn-tab-content">
              تربیت
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;

import React from "react";
import "../Home/Home.css";
import Header from "./Header/Header";
import News from "./News/News";
import Banner from "./Banner/Banner";
import Content from "./Content/Content";
import Footer from "../Footer/Footer";


function Home() {
  return (
    <>
      <div className="container-header">
        <div className="header">
          <div className="header-Tab">
            <Header />
          </div>
          <div className="news">
            <News />
            <News />
            <News />
            <News />
            <News />
            <News />
          </div>
        </div>
      </div>
      <Banner />
      <Content/>
      <Footer/>
      
    </>
  );
}

export default Home;

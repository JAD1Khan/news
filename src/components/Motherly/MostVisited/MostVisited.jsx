import "./MostVisited.css";
import React from "react";
import NewsPopular from "./NewsPopular";
function MostVisited() {
  return (
    <>
      <div className="container-title-MostVisited">
        <h4>پر بازدید ها</h4>
        <hr className="hr-tag" />
        <NewsPopular/>
        <NewsPopular/>
        <NewsPopular/>
        <NewsPopular/>
        <NewsPopular/>
        <NewsPopular/>
        <NewsPopular/>
        <NewsPopular/>
        <NewsPopular/>
        <NewsPopular/>
        <NewsPopular/>
      </div>
    </>
  );
}

export default MostVisited;

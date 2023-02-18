import React from "react";
import "../Preloader/Preloader.css";
function Preloader() {
  return (
    <>
      <div className="container-Preloader">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Preloader;

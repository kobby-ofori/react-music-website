import React from "react";
import "./PlatformsConnect.css";
import imac from "../images/imac.png";
import microsoft from "../images/microsoft.png";
import playstore from "../images/playstore.png";
import appstore from "../images/appstore.png";

const PlatformsConnect = () => {
  return (
    <div className="container plat-con-container">
      <div className="row">
        <div className="col connect">
          <h1>
            <em>Visit our website on all devices</em>
          </h1>
          <br /><br />
          <h3 className="text-center">Download the app from various platforms</h3>
          <br />
          <div className="btn m-store">
            <button className="btn1">
              <em>Microsoft</em> <img src={microsoft} alt="" />
            </button>
          </div>
          <div className="btn app-play-store">
            <button className="btn2">
              <em>Play Store</em> <img src={playstore} alt="" />
            </button>
            <button className="btn3">
              <em>App Store</em> <img src={appstore} alt="" />
            </button>
          </div>
        </div>
        <div className="col-8 platforms">
          <img className="img-fluid" src={imac} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PlatformsConnect;

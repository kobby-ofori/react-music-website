import React from "react";
import "./Gallery.css";
import musicinst from "../images/musicinst.jpg";
import reggea from "../images/reggae.jpg";

const Gallery = () => {
  return (
    <div className="container gallery-container">
      <div className="row">
        <div className="col">
          <div class="card gallery-card2 g-card2" style={{ width: "30rem" }}>
            <img src={musicinst} class="card-img-top gallery-card2" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <div class="card gallery-card1 g-card1" style={{ width: "30rem" }}>
            <img src={reggea} class="card-img-top gallery-card1" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div class="card gallery-card2" style={{ width: "18rem", backgroundColor: "rgba(245, 222, 179, 0.521)" }}>
            <h1 style={{ textAlign: "center" }}>. . .</h1>
          </div>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Gallery;

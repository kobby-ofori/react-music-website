import React from "react";
import "./Main.css";
import dj from "../images/dj.jpg";
import microphone from "../images/microphone.jpg";
import mink from "../images/mink.jpg";
import adele from "../images/adele.jpg";
import duaLipa from "../images/duaLipa.jpg";
import sarkodiePic2 from "../images/sarkodiePic2.jpg";
import daxRapper from "../images/daxRapper.jpg";
import roddyRicch from "../images/roddyRicch.jpg";
import burnaBoy from "../images/burnaBoy.jpg";
import wizkid from "../images/wizkid.jpg";
import davido from "../images/davido.jpg";

const Main = () => {
  return (
    <div className="container-fluid main">
      <br />
      <div className="row main-top">
        <div className="col-12">
          <h3>Lets update you with some Trends</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={sarkodiePic2}
              class="card-img-top"
              alt="..."
              style={{ height: "185px" }}
            />
            <div class="card-body">
              <p class="card-text">
              <strong><em>Sarkodie</em></strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={wizkid}
              class="card-img-top"
              alt="..."
              style={{ height: "185px" }}
            />
            <div class="card-body">
              <p class="card-text">
              <strong><em>Wizkid</em></strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={roddyRicch}
              class="card-img-top"
              alt="..."
              style={{ height: "185px" }}
            />
            <div class="card-body">
              <p class="card-text">
              <strong><em>Roddy Ricch</em></strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={adele}
              class="card-img-top"
              alt="..."
              style={{ height: "185px" }}
            />
            <div class="card-body">
              <p class="card-text">
              <strong><em>Adele</em></strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={burnaBoy}
              class="card-img-top"
              alt="..."
              style={{ height: "185px" }}
            />
            <div class="card-body">
              <p class="card-text">
              <strong><em>Burna Boy</em></strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={davido}
              class="card-img-top"
              alt="..."
              style={{ height: "185px" }}
            />
            <div class="card-body">
              <p class="card-text">
              <strong><em>Davido</em></strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={daxRapper}
              class="card-img-top"
              alt="..."
              style={{ height: "185px" }}
            />
            <div class="card-body">
              <p class="card-text">
              <strong><em>Dax</em></strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={duaLipa}
              class="card-img-top"
              alt="..."
              style={{ height: "185px" }}
            />
            <div class="card-body">
              <p class="card-text">
                <strong><em>Dua Lipa</em></strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* button beneath cards */}
      <div className="row btn-row">
        <div className="col-12">
          <button>More</button>
        </div>
      </div>
      <br />

      {/* carousel row */}
      <div className="row carousel-row">
        <div
          id="carouselExampleCaptions"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={dj} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={microphone} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={mink} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

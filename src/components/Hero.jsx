import "./Hero.css";
import musicpodsmall from "../images/musicpodsmall.jpg";

import React from "react";

const Hero = () => {
  return (
    <div className="container-fuid hero-bg">
      <div className="hero-caption">
        <h1><img src={musicpodsmall} className="h1-pic" alt="" width={50}/>Feel The Beat</h1>
        <h3>Listen To The Best Sounds</h3>
        <p>
          Pamper your ears with the best sounds, explore, stream, share & listen
          to good music from the worlds' finest artists.
        </p>
        <button>
          E<span className="style-x">x</span>plore
        </button>
      </div>
    </div>
  );
};

export default Hero;

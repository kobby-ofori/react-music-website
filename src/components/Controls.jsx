import React from "react";
import "./Controls.css";
import songLyrics from "../images/songLyrics.png";
import lowVolume from "../images/lowVolume.png";
import miniCompo from "../images/miniCompo.png";
import options from "../images/options.png";
import shuffle from "../images/shuffle.png";
import previous from "../images/previous.png";
import playButton from "../images/playButton.png";
import next from "../images/next.png";
import repeatButton from "../images/repeatButton.png";

const Controls = () => {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-dark custom-contol-nav">
      <div className="contol-nav">
        <span className="bt-m">
          <img src={shuffle} className="bottom-middle" alt="" />
          <img src={previous} className="bottom-middle" alt="" />
          <img src={playButton} className="bottom-middle" alt="" />
          <img src={next} className="bottom-middle" alt="" />
          <img src={repeatButton} className="bottom-middle" alt="" />
        </span>
        <span className="bt-r">
          <img src={songLyrics} className="bottom-right" alt="" />
          <img src={lowVolume} className="bottom-right" alt="" />
          <img src={miniCompo} className="bottom-right" alt="" />
          <img src={options} className="bottom-right" alt="" />
        </span>
      </div>
    </nav>
  );
};

export default Controls;

import React from 'react'
import "./Find.css"
import videoplayer from "../images/videoplayer.png"

const Find = () => {
  return (
    <div className="container find-section">
      <div className="row">
        <div className="col-8 find-text">
          <h1>Watch music videos</h1>
          <video autoPlay muted controls>
            <source src="" type="" />
          </video>
        </div>
        <div className="col">
          <img src={videoplayer} className='img-fluid' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Find
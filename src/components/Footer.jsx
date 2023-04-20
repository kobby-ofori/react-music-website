import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container footer-container">
      <hr class="horizontal-row"/>
      <div className="row">
        <div className="col">
          <h4 className="footer-head">Navigate</h4>
          <ul className="footer-list">
            <li>
              <a href="index.html">
                <h6 className="footer-list">Home Page</h6>
              </a>
            </li>
            <li>
              <a href="link2.html">
                <h6 className="footer-list">Local Library</h6>
              </a>
            </li>
            <li>
              <a href="link3.html">
                <h6 className="footer-list">Tourism</h6>
              </a>
            </li>
            <li>
              <a href="link4.html">
                <h6 className="footer-list">Info-Page</h6>
              </a>
            </li>
            <h5 className="footer-connect">CONNECT</h5>
          </ul>
        </div>
        <div className="col">
          <h4 className="footer-head">Contact</h4>
          <ul>
            <li className="footer-list">
              <i
                className="material-icons footer-list"
                style={{ fontSize: "24px" }}
              >
                local_phone
              </i>
              +233 501 *** ***
            </li>
            <li className="footer-list">
              <i
                className="material-icons footer-list"
                style={{ fontSize: "24px" }}
              >
                local_post_office
              </i>
              ok.kobby19@gamil.com
            </li>
            <li className="footer-list">
              <img src="images/whatsapp.png" alt="" />
              +233 501 *** ***
            </li>
            <br />
            <p className="footer-connect">
              <img src="images/github.png" alt="" />{" "}
              <img src="images/facebook.png" alt="" />{" "}
              <img src="images/linkedin.png" alt="" />{" "}
              <img src="images/twitter-sign.png" alt="" />
            </p>
          </ul>
        </div>
        <div className="col">
          <h4 className="footer-head">Locate Us</h4>
          <ul>
            <li className="footer-list">
              <i
                className="material-icons footer-list"
                style={{ fontSize: "24px" }}
              >
                my_location
              </i>
              Lakeside Community1
              <p>Accra, Ghana.</p>
              <br />
              <br />
              <p className="footer-connect">&copy;All Rights Reserved</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

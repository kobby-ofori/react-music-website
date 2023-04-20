import "./Navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark fixed-top custom-nav">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Library
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Genres
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Afrobeat
              </a>
              <a className="dropdown-item" href="#">
                Country
              </a>
              <a className="dropdown-item" href="#">
                R&B
              </a>
              <a className="dropdown-item" href="#">
                Rock
              </a>
              <a className="dropdown-item" href="#">
                Gosple
              </a>
              <a className="dropdown-item" href="#">
                Hip-Hop & Rap
              </a>
              <a className="dropdown-item" href="#">
                Reggae
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Show more
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

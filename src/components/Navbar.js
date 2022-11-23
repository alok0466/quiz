import { getByTitle } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import"./Navbar.css";


export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info navbar-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item nav-link active " aria-current="page">
              <b>Quzzy</b>
             </li>
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link active" aria-current="page">
                  {" "}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active" aria-current="page">
                  {" "}
                  About
                </Link>
              </li>
             
              {/* <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li> */}
            </ul>

            
          </div>
        </div>
      </nav>
    </>
  );
}

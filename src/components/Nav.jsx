import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "../css/nav.css";
import resume from "../static/santibout_resume.pdf";

const Nav = (props) => {
  const location = useLocation();
  const path = location.pathname;
  const [animation, addAnimation] = useState();
  function menuClick() {
    const target = document.getElementsByClassName("menu-collasped")[0];
    if (target.classList.contains("menu-animate")) {
      target.classList.remove("menu-animate");
      target.classList.add("menu-remove-animate");
    } else {
      target.classList.add("menu-animate");
      target.classList.remove("menu-remove-animate");
    }
  }
  return (
    <div className="main-left">
      <div className="left-one">
        <i class="fas fa-bars" onClick={menuClick}></i>
        <div className="menu-collasped">
          <ul>
            <li>
              <Link
                to="/login"
                className={`${path === "/login" ? "active-li" : ""}`}
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className={`${path === "/register" ? "active-li" : ""}`}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="left-two">
        <ul>
          <Link to="/portfolio/" className={`${path === "/portfolio/" ? "active-li" : ""}`}>
            <li>
              <i className="fas fa-user"></i>
              <p className="a-name">about</p>
            </li>
          </Link>
          <Link
            to="/portfolio/contact"
            className={`${path === "/portfolio/contact" ? "active-li" : ""}`}
          >
            <li>
              <i className="fas fa-phone"></i>
              <p className="a-name">contact</p>
            </li>
          </Link>
          <Link
            to="/portfolio/resume"
            className={`${path === "/portfolio/resume" ? "active-li" : ""}`}
          >
            <li>
              <i class="far fa-file-alt"></i>
              <p className="a-name">resume</p>
            </li>
          </Link>
          {/* <Link to="/portfolio//blog" className={`${path === "/portfolio/blog" ? "active-li" : ""}`}>
            <li>
              <i class="fas fa-pen-square"></i>
              <p className="a-name">blog</p>
            </li>
          </Link> */}
          <Link
            to="/portfolio/projects"
            class={`${path === "/portfolio/projects" ? "active-li" : ""}`}
          >
            <li>
              <i class="far fa-file-code"></i>
              <p className="a-name">projects</p>
            </li>
          </Link>
          <a href={resume} download="santibout_resume.pdf">
            <li className="download">
              <i class="fas fa-cloud-download-alt"></i>
              <p className="a-name">download resume</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

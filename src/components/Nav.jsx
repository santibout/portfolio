import React, { useState } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";
import "../css/nav.css";
import resume from "../static/pdfResume.pdf";

const Nav = (props) => {
  const location = useLocation();
  const path = location.pathname;
  const [animation, addAnimation] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  function menuClick() {
    const target = document.getElementsByClassName("menu-collasped")[0];
    const loginLinkOne = document.getElementsByClassName("navLink")[0];
    const loginLinkTwo = document.getElementsByClassName("navLink")[1];
    if (target.classList.contains("menu-animate")) {
      target.classList.remove("menu-animate");
      target.classList.add("menu-remove-animate");
      loginLinkOne.classList.add("isDisabled");
      loginLinkTwo.classList.add("isDisabled");
      setIsDisabled(true);
    } else {
      target.classList.add("menu-animate");
      target.classList.remove("menu-remove-animate");
      loginLinkOne.classList.remove("isDisabled");
      loginLinkTwo.classList.remove("isDisabled");
      setIsDisabled(false);
    }
  }
  return (
    <div className="main-left">
      <div className="left-one">
        <i className="fas fa-bars" onClick={menuClick}></i>
        <div className="menu-collasped">
          <ul>
            <li>
              <Link
                to="/login"
                className={`${path === "/login" ? "active-li" : ""}
                  ${isDisabled === true ? "isDisabled" : ""}
                
                 navLink`}
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className={`${path === "/register" ? "active-li" : ""}
                  ${isDisabled === true ? "isDisabled" : ""}
                 navLink`}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="left-two">
        <ul>
          <Link to="/" className={`${path === "/" ? "active-li" : ""}`}>
            <li>
              {/* <i class="fas fa-user-tie"></i> */}
              <i className="far fa-user-circle"></i>
              <p className="a-name">about</p>
            </li>
          </Link>
          <Link
            to="/contact"
            className={`${path === "/contact" ? "active-li" : ""}`}
          >
            <li>
              <i className="fas fa-phone"></i>
              <p className="a-name">contact</p>
            </li>
          </Link>
          <li>
            <Link
              to="/resume"
              className={`${path === "/resume" ? "active-li" : ""}`}
            >
              <i className="far fa-file-alt"></i>
              <p className="a-name">resume</p>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`${path === "/projects" ? "active-li" : ""}`}
            >
              <i className="far fa-file-code"></i>
              <p className="a-name">projects</p>
            </Link>
          </li>
          <li>
            <a href={resume} download="samuel_santibout_resume.pdf">
              <i className="fas fa-cloud-download-alt download"></i>
              <p className="a-name">download resume</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

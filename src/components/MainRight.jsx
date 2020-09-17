import React from "react";
import * as d3 from "d3";
import WorkHistory from "./WorkHistory";
import me from "../static/download.png";

const MainRight = () => {
  let years = new Date().getFullYear() - 2017;

  return (
    <section className="right">
      <div className="right-scrollable">
        <section className="right-main">
          <div className="about-me">
            <h2>About Me</h2>
            <div className="about-me-image">
              <div className="about-info">
                <div className="about-info-content">
                  <h1>Samuel J. Santibout</h1>
                  <h3>Developer</h3>
                  <div className="about-main-middle-row">
                    <a
                      href="https://www.linkedin.com/in/santibout/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.github.com/santibout/" target="_blank">
                      <i className="fab fa-github-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-me-description">
              <h3>
                <span>Full-Stack Web Developer &nbsp;/</span>
                <span>&nbsp; Huntington Beach, CA</span>
              </h3>
              <p>
                From my very first line of code I wrote and made "Hello World"
                appear on my computer screen I knew I was hooked. It was at that
                moment I knew becoming a Software Engineer is what I wanted to
                pursue as a career. I've always been driven by this goal
                constantly learning and pushing myself to achieve my dream. I
                knew that entering the exciting field of Software not only
                future-proofs my career but allowed my potential to have no
                limits. I pursued a career as a Software Developer knowing I
                have the ability to impact the future by creating it.
              </p>
            </div>
            <hr />
          </div>
          <div className="services">
            <h2>My Skills</h2>
            <br />
            <div className="row">
              <div className="two-d">
                <div className="skills-icon-container">
                  <i className="fas fa-tv"></i>
                </div>
                <h3>Front End</h3>
                <div className="skills-text">
                  <p>JavaScript, React, Angular, jQuery, CSS 3, HTML 5, AJAX</p>
                </div>
              </div>
              <div className="two-d">
                <div className="skills-icon-container">
                  <i className="fas fa-database"></i>
                </div>
                <h3>Back End</h3>
                <div className="skills-text">
                  <p>
                    T-SQL, SQL Server 2017, MongoDb, MongoDb Atlas Compass,
                    Postgres
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="two-d">
                <div className="skills-icon-container">
                  <i className="fas fa-server"></i>
                </div>
                <h3>Middle Tier</h3>
                <div className="skills-text">
                  <p>NodeJS, JavaScript, ASP.Net, C#, MVC, Web Api</p>
                </div>
              </div>
              <div className="two-d">
                <div className="skills-icon-container">
                  <i className="fas fa-boxes"></i>
                </div>
                <h3>Other Technical</h3>
                <div className="skills-text">
                  <p>
                    TFS, Agile/Scrum Methodologies, Visual Studio Code, API
                    Integration, Git
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <WorkHistory />
    </section>
  );
};

export default MainRight;

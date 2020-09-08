import React from "react";
import * as d3 from "d3";
import WorkHistory from "./WorkHistory";

const MainRight = () => {
  let years = new Date().getFullYear() - 2017;

  return (
    <section className="right">
      <div className="right-scrollable">
        <section className="right-main">
          <div className="about-me">
            <h2>About Me</h2>
            <h3>
              <span>{years} Years Experience &nbsp; /</span>
              <span>&nbsp; Full-Stack Web Developer &nbsp; /</span>
              <span>&nbsp; Huntington Beach, CA</span>
            </h3>
            <p>
              From my very first line of code I wrote and made "Hello World"
              appear on my computer screen I knew I was hooked. It was at that
              moment I knew becoming a Software Engineer is what I wanted to
              pursue as a career. I've always been driven by this goal
              constantly learning and pushing myself to achieve my dream. I knew
              that entering the exciting field of Software not only
              future-proofs my career but allowed my potential to have no
              limits. I pursued a career as a Software Developer knowing I have
              the ability to impact the future by creating it.
            </p>
            <hr />
          </div>
          <div className="services">
            <h2>My Skills</h2>
            <div className="row">
              <div className="two-d">
                <p>
                  <i class="fas fa-tv"></i>
                </p>
                <h3>Front End</h3>
                <p>JavaScript, React, Angular, jQuery, CSS 3, HTML 5, AJAX</p>
              </div>
              <div className="two-d">
                <p>
                  <i class="fas fa-database"></i>
                </p>
                <h3>Back End</h3>
                <p>
                  T-SQL, SQL Server 2017, MongoDb, MongoDb Atlas Compass,
                  Postgres
                </p>
              </div>
            </div>
            <div className="row">
              <div className="two-d">
                <p>
                  <i class="fas fa-server"></i>
                </p>
                <h3>Middle Tier</h3>
                <p>NodeJS, JavaScript, ASP.Net, C#, MVC, Web Api</p>
              </div>
              <div className="two-d">
                <p>
                  <i class="fas fa-boxes"></i>
                </p>
                <h3>Other Technical</h3>
                <p>
                  TFS, Agile/Scrum Methodologies, Visual Studio Code, API
                  Integration, Git
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="two">
          <h2>Proficiencies</h2>

          <table class="main-table">
            <tr>
              <th style={{ display: "flex" }}>
                <p>JavaScript</p>
                <div className="bar-container">
                  <div
                    style={{
                      background: "steelblue",
                      padding: "3px",
                      width: "90%",
                    }}
                  >
                    <p>90%</p>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th style={{ display: "flex" }}>
                <p>React</p>
                <div className="bar-container">
                  <div
                    style={{
                      background: "steelblue",
                      padding: "3px",
                      width: "85%",
                    }}
                  >
                    <p>85%</p>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th style={{ display: "flex" }}>
                <p>Angular</p>
                <div className="bar-container">
                  <div
                    style={{
                      background: "steelblue",
                      padding: "3px",
                      width: "70%",
                    }}
                  >
                    <p>70%</p>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th style={{ display: "flex" }}>
                <p>HTML</p>
                <div className="bar-container">
                  <div
                    style={{
                      background: "steelblue",
                      padding: "3px",
                      width: "100%",
                    }}
                  >
                    <p>100%</p>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th style={{ display: "flex" }}>
                <p>CSS</p>
                <div className="bar-container">
                  <div
                    style={{
                      background: "steelblue",
                      padding: "3px",
                      width: "70%",
                    }}
                  >
                    <p>70%</p>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th style={{ display: "flex" }}>
                <p>C#</p>
                <div className="bar-container">
                  <div
                    style={{
                      background: "steelblue",
                      padding: "3px",
                      width: "85%",
                    }}
                  >
                    <p>85%</p>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th style={{ display: "flex" }}>
                <p>SQL</p>
                <div className="bar-container">
                  <div
                    style={{
                      background: "steelblue",
                      padding: "3px",
                      width: "90%",
                    }}
                  >
                    <p>90%</p>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th style={{ display: "flex" }}>
                <p>MongoDB</p>
                <div className="bar-container">
                  <div
                    style={{
                      background: "steelblue",
                      padding: "3px",
                      width: "80%",
                    }}
                  >
                    <p>80%</p>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th style={{ display: "flex" }}>
                <p>NodeJS</p>
                <div className="bar-container">
                  <div
                    style={{
                      background: "steelblue",
                      padding: "3px",
                      width: "70%",
                    }}
                  >
                    <p>75%</p>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th style={{ display: "flex" }}>
                <p>ASP .NET</p>
                <div className="bar-container">
                  <div
                    style={{
                      background: "steelblue",
                      padding: "3px",
                      width: "70%",
                    }}
                  >
                    <p>70%</p>
                  </div>
                </div>
              </th>
            </tr>
          </table>
        </section>
       */}
      </div>
      <WorkHistory />
    </section>
  );
};

export default MainRight;

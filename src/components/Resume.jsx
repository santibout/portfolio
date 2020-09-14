import React, { useState } from "react";
import "../css/resume.css";
import resume from "../static/santibout_resume.pdf";
import resumeSnippit from "../static/resume-snippit.png";

const Resume = () => {
  return (
    <section id="resume">
      <div className="resume">
        <div className="resume-container">
          <a className="download" href={resume} download="santibout_resume.pdf">
            <p>download resume</p>
          </a>
          <div className="resume-image-container"></div>
        </div>
      </div>

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
    </section>
  );
};

export default Resume;

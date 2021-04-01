import React from "react";
import "../css/projects.css";
import omnifood from "../static/omnifood.png";
import lightsout from "../static/Lights-Out.png";
import cccaa from "../static/cccaa.PNG";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects">
        <h1>Here are some of my projects</h1>
        <div className="projects-list">
          <div className="card-container">
            <a href="https://santibout.github.io/displayProjectDavid_client/" target="_blank">
              <div className="list-item">
                <div className="list-item-pic">
                  <img src={cccaa} alt="omnifood" />
                </div>
                <div className="list-item-description">
                  <div className="description-title">
                    <h2>CCCAA Form</h2>
                  </div>
                  <div className="description-body">
                    This project was to simplify the process for College
                    participants to fill out this form. ______________________
                    This is only a display version and does not reflect the
                    final project. This is to show some of my capabilities as a
                    developer focusing on some 3rd party library to create,
                    fill, send pdf's as well as send emails In the future I do
                    plan on modifying the form as to add form validation and to
                    change the address fields to better enhance correctness.
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="card-container">
            <a href="https://santibout.github.io/omnifood/" target="_blank">
              <div className="list-item">
                <div className="list-item-pic">
                  <img src={omnifood} alt="omnifood" />
                </div>
                <div className="list-item-description">
                  <div className="description-title">
                    <h2>Omnifood</h2>
                  </div>
                  <div className="description-body">
                    Omnifood is a meal delivery service that services cities all
                    around the world. Omnifood ships ingredients directly to
                    your door so you can prepare healthy meals every week for
                    you and your family. ______________________ This is only a
                    display version and does not reflect the final project. This
                    is to show some of my capabilities as a developer focusing
                    on my html and css skills. Currently there is no backend
                    attached to this project.
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="card-container">
            <a href="https://santibout.github.io/lights-out/" target="_blank">
              <div className="list-item">
                <div className="list-item-pic">
                  <img src={lightsout} alt="omnifood" />
                </div>
                <div className="list-item-description">
                  <div className="description-title">
                    <h2>Lights Out</h2>
                  </div>
                  <div className="description-body">
                    The game consists of a 5 by 5 grid of lights. When the game
                    starts, a random number or a stored pattern of these lights
                    is switched on. Pressing any of the lights will toggle it
                    and the four adjacent lights. The goal of the puzzle is to
                    switch all the lights off, preferably in as few button
                    presses as possible. ______________________ In the future I
                    do plan on making this application mobile friendly
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

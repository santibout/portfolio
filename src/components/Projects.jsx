import React from "react";
import "../css/projects.css";
import omnifood from "../static/omnifood.png";
import lightsout from "../static/Lights-Out.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects">
        <h1>Here are some of my projects</h1>
        <div className="projects-list">
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
                    you and your family.
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
                    presses as possible
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

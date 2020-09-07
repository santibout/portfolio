import React, { useState } from "react";
import "../css/resume.css";
import resume from "../static/santibout_resume.pdf";
import resumeSnippit from "../static/resume-snippit.png";

const Resume = () => {
  return (
    <section id="resume">
      <div className="resume">
        <h2>Resume</h2>
        <div className="resume-container">
          <a className="download" href={resume} download="santibout_resume.pdf">
            <p>download resume</p>
          </a>

          <img className="resume-snippit" src={resumeSnippit} alt="my resume" />
        </div>
      </div>
    </section>
  );
};

export default Resume;

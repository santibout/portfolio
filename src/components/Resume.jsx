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
            <p></p>
          </a>
          {/* <div className="resume-image-container"></div> */}
          <object
            // width="880vw"
            // height="600px"
            // type="application/pdf"
            style={{
              // height: "500px",
              height: "80vh",
              width: '-webkit-fill-available',
              position: "relative",
              left: "50%",
              transform: "translate(-50%)",
              // left: "0%",
            }}
            data={resume}
          >
            It appears you don't have a PDF plugin for this browser. No
            biggie...
            <a
              // className="download"
              href={resume}
              download="santibout_resume.pdf"
              style={{ display: "block" }}
            >
              <button>download resume</button>
            </a>
          </object>
        </div>
      </div>
    </section>
  );
};

export default Resume;

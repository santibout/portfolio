import React, { useState } from "react";
import "../css/resume.css";
import resume from "../static/pdfResume.pdf";
import resumeSnippit from "../static/resume-snippit.png";

const Resume = () => {
  return (
    <section id="resume">
      <div className="resume">
        <div className="resume-container">
          <a className="download" href={resume} download="samuel_santibout_resume.pdf">
            <p></p>
          </a>
          {/* <div className="resume-image-container"></div> */}
          <object
            // width="880vw"
            // height="600px"
            // type="application/pdf"
            style={{
              height: "80vh",
              width: "-webkit-fill-available",
              position: "relative",
              left: "50%",
              transform: "translate(-50%)",
            }}
            data={resume}
          >
            <p
              style={{
                width: "100%",
                textAlign: "left",
                margin: "0 auto",
                position: "relative",
                right: "25%",
                transform: "translateX(-25%)",
              }}
            >
              It appears you don't have a PDF plugin for this browser. No
              biggie...
            </p>
            <a
              // className="download"
              href={resume}
              download="santibout_resume.pdf"
              style={{ display: "block" }}
            >
              <button
                style={{
                  width: "150px",
                  position: "relative",
                  right: "50%",
                  // transform: "translateX(20%)",
                  marginTop: "20px",
                }}
              >
                download resume
              </button>
            </a>
          </object>
        </div>
      </div>
    </section>
  );
};

export default Resume;

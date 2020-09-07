import React, { Component, useState } from "react";
import MapContainer from "./MapContainer";
import "../css/contact.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/contact", {
        name,
        email,
        message,
      })
      .then(function (res) {
        console.log("res: ", res);
      })
      .catch(function (err) {
        console.log("err: ", err);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact">
      <div className="contact">
        <div className="map-container">
          <MapContainer />
        </div>
        <div className="contact-info">
          <div className="contact-row">
            <div className="contact-left-one">
              <i class="fas fa-map-marker"></i>{" "}
              <p>Location: &nbsp; Huntington Beach, CA</p>
            </div>
            <div className="contact-left-two">
              <i class="fas fa-envelope"></i>
              <p>Email: &nbsp; samuel.santibout@yahoo.com</p>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-left-one">
              <i class="fas fa-mobile-alt"></i>
              <p> &nbsp; Cell: &nbsp; (619) 890-5996</p>
            </div>
            <div className="contact-left-two">
              <i class="fab fa-linkedin"></i>
              <p>LinkedIn: &nbsp; linkedin.com/in/santibout</p>
            </div>
          </div>
        </div>
        <hr />
        <h2>Send Me A Message</h2>
        <form onSubmit={formSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
          <br />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="5"
            placeholder="text here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button>Send It</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

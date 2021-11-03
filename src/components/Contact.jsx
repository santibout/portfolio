import React, { Component, useState } from "react";
import MapContainer from "./MapContainer";
import "../css/contact.css";
import mapImg from "../static/map.jpeg";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    const notify = (msg) => toast(msg, {
      duration: 3500,
      position: 'bottom-center',
    });

    const form = document.querySelectorAll(".needs-validation")[0];
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
    } else {
      axios
        .post("https://santibout-portfolio-server.herokuapp.com/contact", {
          name,
          email,
          message,
        })
        .then(function (res) {
          console.log("res: ", res);
          notify("Message Sent")
        })
        .catch(function (err) {
          console.log("err: ", err);
          notify("Message Failed To Send")

        });

      // axios
      //   .post("/contact", {
      //     name,
      //     email,
      //     message,
      //   })
      //   .then(function (res) {
      //     console.log("res: ", res);
      //     setToastMessage("Message Sent")
      //   })
      //   .catch(function (err) {
      //     console.log("err: ", err);
      //     setToastMessage("Message Failed To Send")
      //   });

      //   form.classList.add('was-validated')
      // }, false)
      setName("");
      setEmail("");
      setMessage("");
      form.classList.remove("was-validated");
    }
  };

  return (
    <section id="contact">
      <div className="contact">
        <div className="map-container">
          {/* <MapContainer /> */}
          <img id='map-img' src={mapImg} alt="" />
        </div>
        <div className="contact-info">
          <div className="contact-row">
            <div className="contact-left-one">
              <i className="fas fa-map-marker"></i>{" "}
              <p>Location: &nbsp; Huntington Beach, CA</p>
            </div>
            <div className="contact-left-two">
              <i className="fas fa-envelope"></i>
              <p>Email: &nbsp; samuel.santibout@gmail .com</p>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-left-one">
              <i className="fas fa-mobile-alt"></i>
              <p> &nbsp; Cell: &nbsp; (619) 890-5996</p>
            </div>
            <div className="contact-left-two">
              <i className="fab fa-linkedin"></i>
              <p>LinkedIn: &nbsp; linkedin.com/in/santibout</p>
            </div>
          </div>
        </div>
        <hr />
        <h2>Send Me A Message</h2>
        <Toaster
          toastOptions={{
            className: "toast"
          }}
        />
        <form  autoComplete='off' className="needs-validation" onSubmit={formSubmit} noValidate>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            required
          />
          <div className="invalid-feedback">This field is required.</div>
          <br />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="invalid-feedback">This must be a valid email.</div>
          <br />
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="5"
            placeholder="text here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <div className="invalid-feedback">This field is required.</div>
          <button>Send It</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

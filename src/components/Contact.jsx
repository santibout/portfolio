/* eslint-disable import/no-webpack-loader-syntax */
import React, { useEffect, useState, useRef } from "react";
import "../css/contact.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import mapboxgl from "mapbox-gl";
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const Contact = () => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FudGlib3V0IiwiYSI6ImNreTgzaHh1bjAxaG0zMG52amNqbXh5bm0ifQ.dsyktre7Lv2AsuuxyBk6BA";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-117.8311);
  const [lat, setLat] = useState(33.7175);
  const [zoom, setZoom] = useState(7);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lng, lat, zoom]);

  const formSubmit = (e) => {
    e.preventDefault();

    const notify = (msg) =>
      toast(msg, {
        duration: 3500,
        position: "bottom-center",
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
          notify("Message Sent");
        })
        .catch(function (err) {
          console.log("err: ", err);
          notify("Message Failed To Send");
        });

      setName("");
      setEmail("");
      setMessage("");
      form.classList.remove("was-validated");
    }
  };

  return (
    <section id="contact">
      <div ref={mapContainer} className="map-container" />
      <div className="contact">
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
            className: "toast",
          }}
        />
        <form
          autoComplete="off"
          className="needs-validation"
          onSubmit={formSubmit}
          noValidate
        >
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

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mustafa Ahmed Khan </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            {/* <br />
            I am currently employed as a software developer at Juspay.
            <br /> */}
            I am doing my BSc in Software Engineering from Sir Syed University and InshaAllah Graduated in 2024.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mustafa Ahmed Khan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

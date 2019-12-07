import React from "react";
import './about.css';
import AboutWorld from "../img/about-world.png";

const About = () => (
  <div
    className="section about-body-background"
  >
    <div className="row about-body">
      <div className="col s12 m6 l6">
        <h3 className="about-header">Promising to give best user experience in hackathon</h3>
        <p
          className="white-text flow-text"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br/><br/>
        </p>
      </div>
      <div className="col s12 m6 l6 hide-on-small-and-down">
          <img className={"about-world"} src={AboutWorld} alt="world" />
      </div>
    </div>
  </div>
);

export default About;

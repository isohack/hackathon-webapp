import React from "react";
import "../css/about.css";
import AboutWorld from "../img/about-world.png";
import Hours from '../img/36hrs.png';
import Teams from '../img/50teams.png';
import States from '../img/29states.png';

const About = () => (
  <div
    className="section about-body-background"
  >
    <div className="row about-body">
      <div className="col s12 m6 l6">
        <h3 className="about-header">What is Isohack?</h3>
        <p
          className="white-text flow-text"
        >
          Isohack is a collection of like-minded people from various walks of life, attempting to solve a pertaining social issue, 
          or to improve an existing solution from all over India. Isohack aims at providing a stage where enthusiasts can 
          display their abilities and unlock their potential.<br/>
          The 36-hour long hackathon will be embedded with various engrossing workshops, inspiring talks and other interactive sessions from experienced 
          individuals from the industry. 
          Pickup the challenge and get to be a part of something remarkable happening in the cleanest city and the heart of central India 

		  <br/><br/>
        </p>
      </div>
      <div className="col s12 m6 l6 hide-on-small-and-down">
          <img className={"about-world"} src={AboutWorld} alt="world" />
      </div>
    </div>
    <div className="row about-body">
      <div className="col s4 m4 l4">
        <img className={"iso-images"} src={Hours} alt="36hours"/>
      </div>
      <div className="col s4 m4 l4">
        <img className={"iso-images"} src={Teams} alt="50teams"/>
      </div>
      <div className="col s4 m4 l4">
        <img className={"iso-images"} src={States} alt="29states"/>
      </div>
    </div>
  </div>
);

export default About;

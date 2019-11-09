import React, { Component } from "react";
import "../css/landing.css";
import M from "materialize-css";
import Navbar from "./navbar";
import About from "./about";
import Schedule from "./schedule";
import Grass from "../img/grass.png";
import LightGrass from "../img/light-grass.png";
import Mountains from "../img/mountain.png";
import Tent from "../img/tent.png";
import Waterfall from "../img/waterfall.png";

class LandingPage extends Component {
  state = {
    Grass: Grass,
    LightGrass: LightGrass,
    Tent: Tent,
    Mountains: Mountains
  };

  componentDidMount() {
    M.AutoInit();
  }
  render() {

    return (
      <>
        <Navbar />
        <div className={"landing-sky"}>
          <div className={"header-title"}>
            <span className={"hack-name"}>IsoHack</span>
            <p className={"hack-slogan"}>
              This season, hack for a reason
            </p>
          </div>

          <img className={"landing-waterfall hide-on-large-only"} src={Waterfall} alt="" />
          <img className={"landing-mountains"} src={Mountains} alt="" />
          <img className={"landing-grass"} src={Grass} alt="" />
          <div class="bird-container bird-container--one">
            <div className="bird bird--one"></div>
          </div>

          <div class="bird-container bird-container--two">
            <div class="bird bird--two"></div>
          </div>

          <div class="bird-container bird-container--three">
            <div class="bird bird--three"></div>
          </div>

          <div class="bird-container bird-container--four">
            <div class="bird bird--four"></div>
          </div>
        </div>

        <About />
        <Schedule />
      </>
    );
  }
}

export default LandingPage;

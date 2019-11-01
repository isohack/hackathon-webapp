import React, { Component } from "react";
import "../css/landing.css";
import M from "materialize-css";
import Navbar from './navbar';
import About from './about';
import Schedule from './schedule';

class LandingPage extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <>
        
        <div style={{height: '5px', marginBottom: '-5px', backgroundColor: '#c7eef5ff'}}></div>
        <div
          className="background"
          style={{ height: "1200px" }}
        >
          <Navbar/>
          <h4 className="college-Name blue-text text-darken-4">ATC, Indore</h4>
          <p className="mid-text blue-text text-darken-4" style={{fontSize: '25px'}}>Presents</p>
          <h1 className="hack-Name blue-text text-darken-4">IsoHack</h1>
          <p className="slogan blue-text text-darken-4" style={{fontSize: '25px'}}>This season, hack for a reason</p>

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
        <About/>
        <Schedule/>
      </>
    );
  }
}


export default LandingPage;
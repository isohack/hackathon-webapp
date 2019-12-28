import React, { Component } from "react";
import "../css/sponsor.css";
import DevfolioLogo from "../img/devfolio.png";
import MaticLogo from "../img/matic.png";
import Pdf from '../Sponsors.pdf';

class Sponsor extends Component {
  render() {
    return (
      <>
        <div className="sponsorBg">
          <h1 className="sponsor-header-text text-gradient">Sponsors</h1>
          <div className="row">
            <a href="https://devfolio.co/">
              <img
                className="devfolio"
                src={DevfolioLogo}
                alt="devfolio"
              />
            </a>
          </div>
          <div className="row">
            <a href="https://matic.network/">
              <img
                className="matic"
                src={MaticLogo}
                alt="matic"
              />
            </a>
          </div>
          <button className="sponsor-us-button">
            <a href={Pdf} className="center white-text sponsor-us-text" target="_blank" rel="noopener noreferrer">Sponsor Us</a>
          </button>
        </div>
      </>
    );
  }
}

export default Sponsor;

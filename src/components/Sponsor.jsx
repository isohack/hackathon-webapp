import React, { Component } from "react";
import "../css/sponsor.css";
import DevfolioLogo from "../img/devfolio.png";
import MaticLogo from "../img/matic.png";
import GithubLogo from "../img/github-logo.png";
import FoldLogo from "../img/fold-logo.png";
import EBLogo from "../img/eb-logo.png";
import SlackLogo from "../img/slack-logo.jpeg";
import Pdf from '../Sponsors.pdf';

class Sponsor extends Component {
  render() {
    return (
      <>
        <div className="sponsorBg">
          <h1 className="sponsor-header-text text-gradient">Sponsors</h1>
            <br />
            <br />
            <br />
            <br />
            <div className={"row center"}>
                <div className={"col s12 m6 l4"}>
                    <img className={"sponsor-logo-new"} src={GithubLogo} alt={"Github"} style={{height: "20vmin"}} />
                </div>
                <div className={"col s12 m6 l4"}>
                    <img className={"sponsor-logo-new"} src={DevfolioLogo} alt={"Devfolio"} style={{height: "10vmin"}} />
                </div>
                <div className={"col s12 m6 l4"}>
                    <img className={"sponsor-logo-new"} src={MaticLogo} alt={"Matic"} style={{height: "10vmin"}} />
                </div>
            </div>
            <div className={"row center"}>
                <div className={"col s12 m6 l4"}>
                    <img className={"sponsor-logo-new"} src={FoldLogo} alt={"Fold"} style={{height: "10vmin"}} />
                </div>
            </div>
          <a href={Pdf} className="sponsor-us-button center white-text" target="_blank" rel="noopener noreferrer">Sponsor Us</a>
          {/*<button className="sponsor-us-button">*/}
            {/**/}
          {/*</button>*/}
        </div>
      </>
    );
  }
}

export default Sponsor;

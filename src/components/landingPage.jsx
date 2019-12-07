import React, {Component} from "react";
import "../css/landing.css";
import "../css/timeGradient.css";
import M from "materialize-css";
import Navbar from "./navbar";
import Footer from "./Footer";
import Theme from "./theme";
import About from "./about";
import Schedule from "./schedule";
import Faq from "./faq";
import LightGrass from "../img/light-grass.png";
import DarkGrass from "../img/dark-grass.png";
import Mountains from "../img/mountains.png";
import Tent from "../img/tent.png";
import TentInvert from "../img/tent-invert.png";
import Waterfall from "../img/waterfall.png";
import Sea from "../img/sea-new.png";
import Moutain from "../img/mountain-1.png";
import TestPage from "./TestPage";
import SimpleBar from 'simplebar-react';
import "../css/customScroll.css";

import {getAppStatus} from '../services/hackathon';

import {connect} from 'react-redux';
import {changeAppStatus} from "../actions";

class LandingPage extends Component {
  state = {
    Tent: Tent,
    isTest: false
  };

  componentDidMount() {
    M.AutoInit();
    getAppStatus().then((data) => {
      this.props.changeAppStatus(data);
    }).catch((err) => {
      console.log(err);
      M.toast({html: 'Error connecting to backend', classes: 'rounded'});
      // this.setState(() => { throw err; });
    });

    const currentDate = new Date();
    const hours = currentDate.getHours();
    const sky = document.getElementsByClassName("landing-sky")[0];
    sky.classList.add("g" + hours);
    if (hours >= 19 || hours <= 7) {
      this.setState({
        Tent: TentInvert
      });
    }
    if (hours >= 16 || hours <= 7) {
      document.getElementsByClassName("header-title")[0].classList.add("white-text");
    }
  }

  testCloseHandler = (e) => {
    document.documentElement.style.overflowY = 'visible';
    this.setState({
      isTest: false
    })
  };

  footerTestHandler = (e) => {
    document.documentElement.style.overflowY = 'hidden';
    const panda = document.getElementsByClassName("footer-runner")[0];
    panda.classList.add("footer-walk");
    setTimeout(() => {
      panda.classList.remove("footer-walk");
    }, 3000);
    setTimeout(() => {
      this.setState({
        isTest: true
      })
    }, 1000);
  };

  render() {
    const appStatus = this.props.appStatus;
    let webapp_status;
    if (appStatus === 'live') {
      webapp_status = <span className="new badge webapp-status live-status" data-badge-caption="">Live</span>;
    } else if (appStatus === 'maintenance') {
      webapp_status =
        <span className="new badge webapp-status maintenance-status" data-badge-caption="">Maintenance</span>;
    } else if (appStatus === 'down') {
      webapp_status = <span className="new badge webapp-status down-status" data-badge-caption="">Down</span>;
    } else if (appStatus === 'testing') {
      webapp_status = <span className="new badge webapp-status testing-status" data-badge-caption="">Testing</span>;
    } else if (appStatus === 'offline'){
      webapp_status = <span className="new badge webapp-status down-status" data-badge-caption="">Offline</span>;
    }

    return (
      <>
        <SimpleBar style={{maxHeight: "100vh", overflowX: "hidden"}}>
          <Navbar/>
          <div className={"landing-sky"}>
            <div className={"header-title"}>
              <span className={"hack-name"}>IsoHack</span>
              <p className={"hack-slogan"}>
                This season, hack for a reason
              </p>
            </div>

            <img className={"landing-mountains"} src={Mountains} alt=""/>
            <img className={"landing-mountain-1"} src={Moutain} alt=""/>
            <img className={"landing-waterfall"} src={Waterfall} alt=""/>
            <img className={"landing-sea"} src={Sea} alt=""/>
            <img className={"landing-tent"} src={this.state.Tent} alt=""/>
            <img className={"landing-light-grass"} src={LightGrass} alt=""/>
            <img className={"landing-dark-grass"} src={DarkGrass} alt=""/>
            <div className="bird-container bird-container--one">
              <div className={"bird bird--one"}></div>
            </div>

            <div className={"bird-container bird-container--two"}>
              <div className={"bird bird--two"}></div>
            </div>

            <div className={"bird-container bird-container--three"}>
              <div className="bird bird--three"></div>
            </div>

            <div className={"bird-container bird-container--four"}>
              <div className={"bird bird--four"}></div>
            </div>
            {webapp_status}
          </div>
        <About />
        <Schedule />
        <div className="faqback"> <Faq /> </div>
        <Footer footerTestHandler={this.footerTestHandler} />
        {(this.state.isTest) ?
          <TestPage testCloseHandler={this.testCloseHandler}/>
          : <div> </div>
        }
        </SimpleBar>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appStatus: state.appStatus
  }
};

const mapDispatchToProps = () => {
  return {
    changeAppStatus
  }
};

export default connect(mapStateToProps, mapDispatchToProps())(LandingPage);

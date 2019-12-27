import React, {Component} from "react";
import "../css/landing.css";
import "../css/timeGradient.css";
import M from "materialize-css";
import Navbar from "./navbar";
import Footer from "./Footer";
import About from "./about";
import Schedule from "./schedule";
import Faq from "./faq";
import Theme from "./theme";
import Sponsor from "./Sponsor";
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
import LoadingFire from './loadingFire';

import {getAppStatus} from '../services/hackathon';

import {connect} from 'react-redux';
import {changeAppStatus} from "../actions";

class LandingPage extends Component {
  state = {
    Tent: Tent,
    isTest: false,
    loadingFireBackground: {
      opacity: 1,
      height: "120vh"
    },
    loadingFireItem: {
      opacity: 1
    },
    loading: true,
  };

  handleScroll = () => {

    /*console.log(document.body.scrollTop, document.documentElement.);

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("scroll-up-button").classList.add("scale-in");
    } else {
        document.getElementById("scroll-up-button").classList.remove("scale-in");
    }*/

  };

  loadApplyNowScript = () => {
    console.log('set');
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co';
    script.async = true;
    document.body.appendChild(script);

    script.onload = this.handleLoad;
  };

  handleLoad = () => {
    new window.Devfolio({key: 'isohack', buttonSelector: '#devfolio-apply-now'});
  };

  componentDidMount() {

    window.onload = this.loadApplyNowScript();

    setTimeout(() => {
      this.setState({
        loadingFireItem: {
          opacity: 0
        }
      });
    }, 1800);
    setTimeout(() => {
      this.setState({
        loadingFireBackground: {
          opacity: 1,
          height: 0
        }
      });
    }, 2000);
    setTimeout(() => {
      this.setState({
        loading: false,
      });
      setTimeout(() => {
        document.getElementById("section10").style.opacity = 0;
      }, 2000)
    }, 3000);

    window.addEventListener('scroll', this.handleScroll, true);

    M.AutoInit();
    getAppStatus().then((data) => {
      console.log('STATUS:', data);
      this.props.changeAppStatus(data);
    }).catch((err) => {
      console.log(err);
      M.toast({html: 'Error connecting to backend', classes: 'rounded'});
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

  handleLandingScroll() {
    window.scrollBy(0, 100);
  }

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
    } else if (appStatus === 'offline') {
      webapp_status = <span className="new badge webapp-status down-status" data-badge-caption="">Offline</span>;
    }

    return (
      <>
        <div>
          <LoadingFire isLoading={this.state.loading}
                       opacity={this.state.loadingFireBackground.opacity}
                       height={this.state.loadingFireBackground.height}
                       itemOpacity={this.state.loadingFireItem.opacity}/>
        </div>
        <SimpleBar style={{maxHeight: "100vh", overflowX: "hidden"}}>
          <Navbar/>
          <div className={"header-title"}>
            <span className={"hack-name"}>IsoHack</span>
            <p className={"hack-slogan"}>
              This season, hack for a reason
            </p>
            <button className={"landing-devfolio-button"} id="devfolio-apply-now">
              <svg className={"logo"} xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 115.46 123.46"
                   style={{height: "24px", width: "24px", marginRight: "8px"}}>
                <path
                  d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"/>
                <path
                  d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"/>
              </svg>
              Apply with Devfolio
            </button>
          </div>
          <div className={"landing-sky"}>
            <section id="section10" className="demo">
              <div><span></span></div>
            </section>

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
          <About/>
          <Theme/>
          <Schedule/>
          <Faq/>
          <Sponsor/>
          <Footer footerTestHandler={this.footerTestHandler}/>
          {(this.state.isTest) ?
            <TestPage testCloseHandler={this.testCloseHandler}/>
            : <div></div>
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

import React, {Component} from 'react';
import './Footer.css';
import "../css/timeGradient.css";
import logo from '../logo-favicon -android-chrome-512x512.png'

class Footer extends Component {
  state = {};

  componentDidMount() {
  }


  render() {
    return (


      <div class="container-fluid footer">
        <div class="row footer-row">
          <div class="col-12">
            <a href={"/"} className=" footer-title">
              <img className="footer-logo-img" src={logo} alt="NOT LOADED"/>
            </a>
          </div>
        </div>


        <div class="row footer-row footer-info">
          <div class="col-12">
            <a href="mailto:isohack.atc@gmail.com">isohack.atc@gmail.com</a>
          </div>
          
        </div>
        <div className={"footer-container"}>
          <div className={"footer-ground"} >
          </div>
          <div className={"footer-background-1"}>
          </div>
          <div onClick={() => {this.props.footerTestHandler()}} className={"footer-runner"}>
          </div>
        </div>

        <div className="row justify-content-around footer-social-links main-footer">

          <div className="col s12 m2 l2">
            <a href="https://isohacl.in">© Isohack 2019</a>
          </div>

          <div className="col s12 m1 l1">
            <a href="https://www.github.com/isohack/">Github</a>
          </div>

          <div className="col s12 m1 l1">
            <a href="https://www.facebook.com/atc.isohack/">Facebook</a>
          </div>

          <div className="col s12 m1 l1">
            <a href="https://www.twitter.com/atc.isohack/">Twitter</a>
          </div>

          <div className="col s12 m1 l1">
            <a href="https://www.instagram.com/atc.isohack/">Instagram</a>
          </div>
          <div className="col s12 m1 l1">
            <a href="https://www.linkedin.com/atc.isohack">Linkedin</a>
          </div>
          <div className="col s12 m2 l2">
            <a href="https://www.isohack.in/code-of-conduct/">Code of Conduct</a>
          </div>
        </div>
      </div>


    );
  }
}

export default Footer;
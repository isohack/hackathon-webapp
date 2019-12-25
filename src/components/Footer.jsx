import React, {Component} from 'react';
import "../css/Footer.css";
import "../css/timeGradient.css";
import logo from '../img/isohack-light.png'

class Footer extends Component {
  state = {
    made_by: "</> with ♥"
  };

  componentDidMount() {
  }


  render() {
    return (


      <div className={"container-fluid footer footer-background"}>
        <div className={"row footer-row"}>
          <div className={"col-12"}>
            <a href={"/"} className=" footer-title">
              <img className="footer-logo-img" src={logo} alt="NOT LOADED"/>
            </a>
          </div>
        </div>

        <div className={"row footer-row footer-info"}>
          <div className={"col-12"}>
            <a href="mailto:atc.isohack@gmail.com">atc.isohack@gmail.com</a>
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
          <div className="col s12 m3 l3">
            <a className={"right"} href="https://www.github.com/isohack/">{this.state.made_by}</a>
          </div>
        </div>
      </div>


    );
  }
}

export default Footer;
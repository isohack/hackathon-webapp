import React, { Component } from 'react';
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
              <img className="footer-logo-img" src={logo} alt="NOT LOADED" />
            </a>
          </div>
        </div>


        <div class="row footer-row footer-info">
          <div class="col-12">
            <a href="mailto:isohack.atc@gmail.com" >isohack.atc@gmail.com</a>
          </div>


          <div class="col-12" align='center'>
            Copyright © 2019 IsoHack
          </div>
        </div>


        <div class="row footer-row justify-content-around footer-social-links">

          <div class="col-sm-4 col-12">
            <a href="https://www.github.com/"  >Github</a>
          </div>

          <div class="col-sm-4 col-12">
            <a href="https://www.facebook.com/" >Facebook</a>
          </div>

          <div class="col-sm-4 col-12">
            <a href="https://twitter.com/" >Twitter</a>
          </div>

          <div class="col-sm-4 col-12">
            <a href="https://www.instagram.com/" >Instagram</a>
          </div>
        </div>
      </div>








    );
  }
}

export default Footer;
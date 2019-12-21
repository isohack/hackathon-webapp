import React, {Component} from "react";
import "./navbar.css";
import logo from '../IsoHack-trans-logo.png'

class Navbar extends Component {
  state = {};

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed absolute-navbar">
          <nav className={"main-nav"}>
            <div className="nav-wrapper main-nav-content">
              <a href={"/"} className=" brand-logo blue-text text-darken-4">
                <img className="nav-logo" src={logo} alt="NOT LOADED" />
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href={""} data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a className="blue-text text-darken-4" href="sass.html">Home</a>
                </li>
                <li>
                  <a className="blue-text text-darken-4" href="badges.html">About</a>
                </li>
                <li>
                  <a className="blue-text text-darken-4" href="collapsible.html">Schedule</a>
                </li>
                <li>
                  <a className="blue-text text-darken-4" href="mobile.html">Sponsors</a>
                </li>
                <li>
                  <a className="blue-text text-darken-4" href="mobile.html">Judges</a>
                </li>
                <li>
                  <a className="blue-text text-darken-4" href="mobile.html">Prizes</a>
                </li>
                <li>
                  <a className="blue-text text-darken-4" href="mobile.html">Faq</a>
                </li>
                <li>
                  <a className="blue-text text-darken-4" href="mobile.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Home</a>
          </li>
          <li>
            <a href="badges.html">About</a>
          </li>
          <li>
            <a href="collapsible.html">Schedule</a>
          </li>
          <li>
            <a href="mobile.html">Sponsors</a>
          </li>
          <li>
            <a href="mobile.html">Judges</a>
          </li>
          <li>
            <a href="mobile.html">Prizes</a>
          </li>
          <li>
            <a href="mobile.html">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

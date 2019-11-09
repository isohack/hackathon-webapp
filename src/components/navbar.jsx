import React, {Component} from "react";
import "./navbar.css";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="navbar-fixed absolute-navbar">
          <nav className={"main-nav"}>
            <div className="nav-wrapper">
              <a href={"/"} className="brand-logo blue-text text-darken-4">
                IsoHack
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

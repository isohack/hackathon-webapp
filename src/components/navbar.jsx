import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
          <nav style={{backgroundColor: '#c7eef5ff', marginTop: '-1130px'}} className="z-depth-0">
            <div className="nav-wrapper">
              <a href="index.html" className="brand-logo black-text">
                  isoHack
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down" style={{marginRight: '550px'}}>
                <li>
                  <a href="sass.html" className="black-text">Home</a>
                </li>
                <li>
                  <a href="badges.html" className="black-text">About</a>
                </li>
                <li>
                  <a href="collapsible.html" className="black-text">Schedule</a>
                </li>
                <li>
                  <a href="collapsible.html" className="black-text">Sponsors</a>
                </li>
                <li>
                  <a href="collapsible.html" className="black-text">Prizes</a>
                </li>
                <li>
                  <a href="collapsible.html" className="black-text">FAQs</a>
                </li>
                <li>
                  <a href="collapsible.html" className="black-text">Register</a>
                </li>
                <li>
                  <a href="collapsible.html" className="black-text">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}
 
export default Navbar;
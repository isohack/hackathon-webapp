import React, {Component} from "react";
import "../css/navbar.css";
import IsohackLogo from "../img/isohack-light.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./landingPage";
import Footer from "./Footer";
import About from "./about";
import Schedule from "./schedule";
import Faq from "./faq";
import Theme from "./theme";
import Sponsor from "./Sponsor";

class Navbar extends Component {
  state = {
    is_menu_open: false
  };

  // componentDidMount = () => {
  //   window.addEventListener('scroll', this.handleScroll);
  // };
  //
  // componentWillUnmount = () => {
  //   window.removeEventListener('scroll', this.handleScroll);
  // };
  //
  // handleScroll = (event) => {
  //   console.log(event);
  // }

  menuClickHandler() {
    if (this.state.is_menu_open) {
      document.getElementById("navbar-menu").style.height = "0";
    } else {
      document.getElementById("navbar-menu").style.height = "100vh";
    }
    this.setState({
      is_menu_open: !this.state.is_menu_open
    });
  }

  render() {
    return (
      <div>
        <div className="navbar-body">
          {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a className={"btn-floating btn-large white navbar-button"} onClick={() => {this.menuClickHandler()}}>
            <img className={"navbar-logo"} src={IsohackLogo} alt={"navbar-logo"} />
            {(this.state.is_menu_open) ?
              <span className={"material-icons large navbar-menu-logo black-text"}>close</span>
              : <span className={"material-icons large navbar-menu-logo black-text"}>menu</span>
            }
          </a>
        </div>
        <Router>
        <div className={"navbar-menu"} id={"navbar-menu"}>
          {/* <h1 style={{position: "absolute"}}>Hello World</h1> */}
          <ul>
            <li><h5 className={"white-text center-align"}>space</h5></li>
            <li><Link to="/"><h3 className={"black-text center-align"}>Home</h3></Link></li>
            <li><Link to="/about"><h3 className={"black-text center-align"}>About</h3></Link></li>
            <li><Link to="/theme"><h3 className={"black-text center-align"}>Theme</h3></Link></li>
            <li><Link to="/schedule"><h3 className={"black-text center-align"}>Schedule</h3></Link></li>
            <li><Link to="/faq"><h3 className={"black-text center-align"}>Faq</h3></Link></li>
            <li><Link to="/sponsor"><h3 className={"black-text center-align"}>Sponsors</h3></Link></li>
            <li><Link to="/contact"><h3 className={"black-text center-align"}>Contact-Us</h3></Link></li>
          </ul>
          <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/theme">
            <Theme />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/sponsor">
            <Sponsor />
          </Route>
          <Route path="/contact">
            <Footer />
          </Route>
        </Switch>
        </div>
        </Router>
      </div>
    );
  }
}

export default Navbar;

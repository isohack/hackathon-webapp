import React, {Component} from "react";
import "../css/navbar.css";
import IsohackLogo from "../img/isohack.png";

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
        <div className={"navbar-menu teal darken-2"} id={"navbar-menu"}>
          <ul>
            <li><h3 className="center-align"><a className={"navbar-link"} href="/">HOME</a></h3></li>
            <li><h3 className="center-align"><a className={"navbar-link"} href="/" >ABOUT</a></h3></li>
            <li><h3 className="center-align"><a className={"navbar-link"} href="/" >THEME</a></h3></li>
            <li><h3 className="center-align"><a className={"navbar-link"} href="/" >SCHEDULE</a></h3></li>
            <li><h3 className="center-align"><a className={"navbar-link"} href="/">FAQ</a></h3></li>
            <li><h3 className="center-align"><a className={"navbar-link"} href="/">SPONSORS</a></h3></li>
            <li><h3 className="center-align"><a className={"navbar-link"} href="/">CONTACT-US</a></h3></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;

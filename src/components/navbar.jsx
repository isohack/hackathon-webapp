import React, {Component} from "react";
import "./navbar.css";
import IsohackLogo from "../img/isohack-light.png";

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
        <div className={"navbar-menu"} id={"navbar-menu"}>
          <h1 style={{position: "absolute"}}>Hello World</h1>
        </div>
      </div>
    );
  }
}

export default Navbar;

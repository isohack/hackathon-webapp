import React, {Component} from 'react';
import './Footer.css';
import "../css/timeGradient.css";

class Footer extends Component {
  state = {};

  componentDidMount() {
  }

  runPanda() {
    const panda = document.getElementsByClassName("footer-runner")[0];
    panda.classList.add("footer-walk");
    setTimeout(() => {
      panda.classList.remove("footer-walk");
    }, 3000);
  }

  render() {
    return (
      <div className={"footer-container"}>
        <div className={"footer-ground"} >
        </div>
        <div className={"footer-background-1"}>
        </div>
        <div onClick={this.runPanda} className={"footer-runner"}>
        </div>
      </div>

    );
  }
}

export default Footer;
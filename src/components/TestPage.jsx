import React, {Component} from 'react';
import './TestPage.css'
import NESBackground from "../img/nes-dark-background.png";
import '../fonts/dos-vga-437-win.ttf';

class TestPage extends Component {
  state = {
    countDownDateOne: new Date("Jan 4, 2020 00:00:00").getTime(),
    countDownDateTwo: new Date("Jan 15, 2020 00:00:00").getTime(),
    countDownDateThree: new Date("Jan 27, 2020 00:00:00").getTime(),
    stateX: null,
    stateY: null,
    stateZ: null
  };

  componentDidMount() {

// Update the count down every 1 second
    this.stateX = setInterval(() => {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = this.state.countDownDateOne - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("timer-1").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(this.stateX);
        document.getElementById("timer-1").innerHTML = "EXPIRED";
      }
    }, 1000);

    this.stateY = setInterval(() => {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = this.state.countDownDateTwo - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("timer-2").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(this.stateY);
        document.getElementById("timmer-2").innerHTML = "EXPIRED";
      }
    }, 1000);

    this.stateZ = setInterval(() => {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = this.state.countDownDateThree - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("timer-3").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(this.stateZ);
        document.getElementById("timmer-3").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  handleOnClickEvent(temp) {
    clearInterval(this.stateX);
    clearInterval(this.stateY);
    clearInterval(this.stateZ);
    temp();
  }

  render() {
    return (
      <div className={"test-base"}>
        <div className={"test-background"}>
          <img className={"test-local-image"} src={NESBackground} alt={"duck-hunt"}/>
        </div>
        <i className="material-icons test-close" onClick={() => {
          this.handleOnClickEvent(this.props.testCloseHandler)
        }}>close</i>
        <div className={"test-body"}>
          <div className={"test-title"}>In Search of the Mythical Isohack ?</div>
          <p className={"flow-text"}>
            <div className={"row test-timer"}>
              <div className={"col s12 m12 l12"}>
                <p className={"white-text"}>
                  <b>Let's reincarnate your old childhood memories and let's experience it one more time with your
                    currently developed skills</b>
                </p>
              </div>
              <div className={"col s12 m4 l4"}>
                <div className="card-panel card-background">
                  <p id={"timer-1"}></p>
                </div>
              </div>
              <div className={"col s12 m4 l4"}>
                <div className="card-panel card-background">
                  <p id={"timer-2"}></p>
                </div>
              </div>
              <div className={"col s12 m4 l4"}>
                <div className="card-panel card-background">
                  <p id={"timer-3"}></p>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default TestPage;
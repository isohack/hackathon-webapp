import React, {Component} from 'react';
import './InternalServerError.css';
import '../../fonts/dos-vga-437-win.ttf';

class InternalServerError extends Component {
  state = {};

  componentDidMount() {
  }


  render() {
    return (
      <div className={"server-error-background"}>
        <div className={"server-error-body"}>
          <p>A problem has been detected and the website has been shut down to prevent damage to your eyes and brain.</p>
          <p className={"server-error-focus"}>500 INTERNAL SERVER ERROR</p>
          <p>If this is the first time you've seen this error screen, try reloading this page again in a day, a week or a year.</p>
          <p>Technical Information:</p>
          <p>*** Potato server got crashed</p>
          <p>Contact (in case of emergency):</p>
          <p>isohack.atc@gmail.com</p>
        </div>
      </div>

    );
  }
}

export default InternalServerError;
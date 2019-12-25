import React, {Component} from 'react';
import './InternalServerError.css';
import '../../fonts/dos-vga-437-win.ttf';

class InternalServerError extends Component {

  componentDidMount() {
  }


  render() {
    return (
      <div>
        {(this.props.safeURL) ?
          <div className={"server-error-background-unknown"}>
            <div className={"server-error-body"}>
              <p className={"server-error-focus-unknown"}>WARNING !</p>
              <p>Problem has been detected and it seems like host url is not recognizable and not safe</p>
              <p>Please redirect to:</p>
              <a href={"https://isohack.in"}>https://isohack.in</a>
              <br/><br/>
                <p>If you think there is problem from our side then contact:</p>
              <p>atc.isohack@gmail.com</p>
            </div>
          </div>
          : <div className={"server-error-background"}>
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
        }
      </div>
    );
  }
}

export default InternalServerError;
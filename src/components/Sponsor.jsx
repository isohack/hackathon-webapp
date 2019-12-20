import React, { Component } from "react";
import "../css/sponsor.css";
class Sponsor extends Component {
  render() {
    return (
      <>
        <div className="sponsorBg">
          <h1 className="header-text text-gradient">Sponsors</h1>
          <div className="row">
            <a href="https://devfolio.co/">
              <img
                className="devfolio"
                src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LX2wpUXI1eWMY46nkHR%2Favatar-rectangle.png?generation=1570189666128075&alt=media"
                alt="devfolio"
              />
            </a>
          </div>
          <div className="row">
            <a href="https://matic.network/">
              <img
                className="matic"
                src="https://cryptologos.cc/logos/matic-network-matic-logo.png"
                alt="matic"
              />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Sponsor;

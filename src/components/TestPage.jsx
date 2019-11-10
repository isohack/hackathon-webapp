import React, {Component} from 'react';
import './TestPage.css'

class TestPage extends Component {
  state = {};

  componentDidMount() {
  }

  render() {
    return (
      <div className={"test-base"}>
      <div className={"test-background"}>
      </div>
        <i className="material-icons test-close" onClick={() => {this.props.testCloseHandler()}}>close</i>
        <div className={"test-body"}>
          <div className={"test-title"}>In Search of the Mythical Isohack ?</div>
          <p className={"flow-text"}>
          </p>
        </div>
      </div>
    );
  }
}

export default TestPage;
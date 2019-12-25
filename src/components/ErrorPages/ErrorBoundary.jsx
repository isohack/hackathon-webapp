import React, { Component } from 'react'
import InternalServerError from "./InternalServerError";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      safeURL: window.location.host !== 'isohack.in' && window.location.host !== 'localhost:3000'
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log('YESSSS');
    this.setState({error});
    // Raven.captureException(error, {extra: errorInfo});
  }

  render() {
    if (this.state.safeURL) {
      return (
      <InternalServerError safeURL={this.state.safeURL} />
      );
    }
    else if (this.state.error) {
      return (
        <div
          className="snap"
          // onClick={() => Raven.lastEventId() && Raven.showReportDialog()}
        >
          <InternalServerError/>
        </div>
      );
    } else {
      //when there's not an error, render children untouched
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
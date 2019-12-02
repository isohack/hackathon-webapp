import React, { Component } from 'react'
import InternalServerError from "./InternalServerError";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {error: null};
  }

  componentDidCatch(error, errorInfo) {
    console.log('YESSSS');
    this.setState({error});
    // Raven.captureException(error, {extra: errorInfo});
  }

  render() {
    if (this.state.error) {
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
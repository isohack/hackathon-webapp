import React, {Component} from 'react';
import './PageNotFoundError.css';

class PageNotFoundError extends Component {
    state = {};

    componentDidMount() {
    }

    render() {
        return (
            <div className={"page-not-found-error-background"}>
            <div className={"page-not-found-error-body"}>
            <p className={"page-not-found-character"}>( ._.)</p>
            <h1>404 Page not found</h1>
            </div>
            </div>

        );
    }
}

export default PageNotFoundError;
import React, {Component} from 'react';
import '../css/loadingFire.css';
import './PageNotFound.css';

class PageNotFound extends Component {
    state = {};

    componentDidMount() {
    }

    render() {
        return (
            <div className={"sidenav-overlay fire-background"} id="main-loading-screen"
                 style={{display: "block", zIndex: 6, opacity: 1, height: "120vh"}}>
                <div className={"row"}>
                    <div className={"col s12 m12 l6"}>
                        <div className="fire">
                            <div className="flames">
                                <div className={"flame"}> </div>
                                <div className={"flame"}> </div>
                                <div className={"flame"}> </div>
                                <div className={"flame"}> </div>
                            </div>
                            <div className="flames3">
                                <div className={"flame"}> </div>
                                <div className={"flame"}> </div>
                                <div className={"flame"}> </div>
                                <div className={"flame"}> </div>
                            </div>
                            <div className="flames2">
                                <div className={"flame"}> </div>
                                <div className={"flame"}> </div>
                                <div className={"flame"}> </div>
                                <div className={"flame"}> </div>
                            </div>
                            <div className={"logs"}></div>
                        </div>
                    </div>
                    <div className={"col s12 m12 l6 white-text flow-text"}>
                        <div className={"not-found-text"}>404 Not Found</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default PageNotFound;
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import LandingPage from './components/landingPage';
import M from 'materialize-css';
import ErrorBoundary from "./components/ErrorPages/ErrorBoundary";

class App extends Component {

    initializeReactGA() {
        const analytics_token = process.env.REACT_APP_ANALYTICS_TOKEN;
        ReactGA.initialize(analytics_token);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    
    componentDidMount() {
        this.initializeReactGA();
        M.AutoInit();
    }

    render() {
        return (
            <div>
                <ErrorBoundary>
                    <LandingPage />
                </ErrorBoundary>
            </div>
        );
    }
}


export default App;

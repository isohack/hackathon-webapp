import React, { Component } from 'react';
import ReactGA from 'react-ga';
import LandingPage from './components/landingPage';
import M from 'materialize-css';
import ErrorBoundary from "./components/ErrorPages/ErrorBoundary";

class App extends Component {

    initializeReactGA() {
        ReactGA.initialize('UA-154119463-1');
        ReactGA.pageview('/');
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

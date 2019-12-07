import React, { Component } from 'react';
import ReactGA from 'react-ga';
import LandingPage from './components/landingPage'
import LoadingFire from './components/loadingFire'
import M from 'materialize-css'
import ErrorBoundary from "./components/ErrorPages/ErrorBoundary";

class App extends Component {
    state = {
        loadingFireBackground: {
            opacity: 1,
            height: "120vh"
        },
        loadingFireItem: {
            opacity: 1
        },
        loading: true
    };

    initializeReactGA() {
        ReactGA.initialize('UA-154119463-1');
        ReactGA.pageview('/homepage');
    }
    componentDidMount() {
        M.AutoInit();
        setTimeout(() => {
            this.setState({
                loadingFireItem: {
                    opacity: 0
                }
            });
        }, 1800);
        setTimeout(() => {
            this.setState({
                loadingFireBackground: {
                    opacity: 1,
                    height: 0
                }
            });
        }, 2000);
        setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 3000);
    }

    render() {
        return (
            <div>
                <div>
                    <LoadingFire isLoading={this.state.loading}
                        opacity={this.state.loadingFireBackground.opacity}
                        height={this.state.loadingFireBackground.height}
                        itemOpacity={this.state.loadingFireItem.opacity} />
                </div>
                <ErrorBoundary>
                    <LandingPage />
                </ErrorBoundary>
            </div>
        );
    }
}


export default App;
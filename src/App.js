import React, { Component } from 'react';
import LandingPage from './components/landingPage'
import LoadingFire from './components/loadingFire'
import M from 'materialize-css'

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

    componentDidMount() {
        M.AutoInit();
        setTimeout(() => {
            this.setState({
                loadingFireItem: {
                    opacity: 0
                }
            });
        }, 100);
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
                <LandingPage/>
            </div>
        );
    }
}
 
 
export default App;
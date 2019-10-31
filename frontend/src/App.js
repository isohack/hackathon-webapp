import React, { Component } from 'react';
import LandingPage from './components/landingPage'
import LoadingPage from './components/loadingPage'
import M from 'materialize-css'

class App  extends Component {
    state = { 
        isLoaded: false
     }
     componentWillMount(){
        setTimeout(() => {
            this.setState({ isLoaded : true })
        }, 400);
        M.AutoInit()
    }
    render() { 
        return ( this.state.isLoaded ? <LandingPage/> : <LoadingPage/> );
    }
}
 
 
export default App;
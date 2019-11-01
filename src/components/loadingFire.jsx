import React, {Component} from 'react';
import '../css/loadingFire.css'

class loadingFire extends Component {
    state = {};

    componentDidMount() {
    }

    render() {
        return (
            (this.props.isLoading) ?
                <div className={"sidenav-overlay fire-background"} id="main-loading-screen"
                     style={{display: "block", zIndex: 6, opacity: this.props.opacity, height: this.props.height}}>
                    <div>
                    <div className="fire" style={{opacity: this.props.itemOpacity}}>
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
                        <div className={"logs"}> </div>
                    </div>
                    </div>
                </div>
                :<div> </div>

        );
    }
}

export default loadingFire;
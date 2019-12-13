import React, {Component} from "react";
import "../css/sponsor.css";
import Sponsor_1 from "../img/sponsor_1.png";
import Sponsor_2 from "../img/sponsor_2.jpeg";
import Sponsor_3 from "../img/sponsor_3.png";
import Sponsor_4 from "../img/sponsor_4.jpg";
import Sponsor_dell from "../img/sponsor-dell.jpg";
class Sponsor extends Component
{
    render()
    {
        return(
            <div className="sponsor-back">
                <h1 className="sponsor-header"> Sponsors</h1>
                <div className="row">
                    <div className="col s12">
                        <img src={Sponsor_1} alt="sponsor" className="sponsor-img"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <img src={Sponsor_2} alt="sponsor" className="sponsor-img"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <img src={Sponsor_3} alt="sponsor" className="sponsor-img"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <img src={Sponsor_4} alt="sponsor" className="sponsor-img"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <img src={Sponsor_dell} alt="sponsor" className="sponsor-img"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsor;
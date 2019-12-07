import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ic from '../img/qa.png';
import './faq.css';
import '../js/popout';

class Faq extends Component {
  
  render()
  {
    return(
      
      <div className="container">
            <div className="row">
                <div className="col s4 m4 l4 "></div>
                <div className="col s4 m4 l4 ">
                    <img src={ic} alt="faq" className="imstyles"/>
                </div>
                <div className="col s4 m4 l4 "></div>
            </div>
            <div className="row">
                <div className="col s12 ">
                    <h5 className="faqtext">
                      At IsoHack, We encourage Teamwork and creativity.We Strive to bring together developers to participate
                      in the hackathon and innovate with full enthusiasm.
                      we work on motto of Eat-Code-Drink you just code else we took care of.
                    </h5>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6 l6 ">
                    <ul className="collapsible popout">
                        <li>
                            <div className="collapsible-header"><i className="material-icons">add</i>Who could participate</div>
                            <div className="collapsible-body faqbody">Anyone with enthusiam to code and passion to innovate.</div>
                        </li>
                    </ul>
                </div>
                <div className="col s12 m6 l6">
                        <ul className="collapsible popout">
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">add</i>How Big a Team Can Be?</div>
                                    <div className="collapsible-body faqbody">You could have max 4 members or you could submit</div>
                                </li>
                            </ul>
                </div>
            </div>
            <div className="row">
                    <div className="col s12 m6 l6 ">
                        <ul className="collapsible popout">
                            <li>
                                <div className="collapsible-header"><i className="material-icons">add</i>Is there any registraton fees?</div>
                                <div className="collapsible-body faqbody">No, there is no registration fees </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col s12 m6 l6">
                            <ul className="collapsible popout">
                                    <li>
                                        <div className="collapsible-header faqhead"><i className="material-icons">add</i>What is the Code of Conduct</div>
                                        <div className="collapsible-body faqbody">All you need to know </div>
                                    </li>
                                </ul>
                    </div>
                </div>
                <div className="row">
                        <div className="col s12 m6 l6 ">
                            <ul className="collapsible popout">
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">add</i>Do you provide accomodation?</div>
                                    <div className="collapsible-body faqbody">Yes, you just need to pack your stuff and reach to us. </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col s12 m6 l6">
                                <ul className="collapsible popout">
                                        <li>
                                            <div className="collapsible-header"><i className="material-icons">add</i>Do you provide travel reimbursement?</div>
                                            <div className="collapsible-body faqbody">You can reach us at mailid </div>
                                        </li>
                                    </ul>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col s12 m6 l6 ">
                                <ul className="collapsible popout">
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">add</i>What are Perks of participating?</div>
                                        <div className="collapsible-body faqbody">We have a big  prize pool  </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col s12 m6 l6">
                                    <ul className="collapsible popout">
                                            <li>
                                                <div className="collapsible-header"><i className="material-icons">add</i>404:Question Not Found</div>
                                                <div className="collapsible-body faqbody">You can reach us at mailid </div>
                                            </li>
                                        </ul>
                            </div>
                        </div>                                                                   
        </div>

    );
  }
}

export default Faq;
